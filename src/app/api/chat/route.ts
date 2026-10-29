import { MAX_QUESTIONS } from "@/content";
import { systemPrompt } from "@/twin/knowledge";

// Tried in order: free models are often rate-limited, so fall back to the next one.
const MODELS = [
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-3.5-super-vl:free",
  "nvidia/nemotron-3.5-lightning:free",
];
const MAX_HISTORY = 12;
const MAX_LENGTH = 500;

// Per-IP cap for direct API callers. In memory, so it holds for a single server instance;
// on a serverless host, swap this for the host's KV store or rate limiting.
const IP_LIMIT = 10;
const IP_WINDOW_MS = 24 * 60 * 60 * 1000;
const ipUsage = new Map<string, { count: number; resetAt: number }>();

function overIpLimit(ip: string) {
  const now = Date.now();
  const usage = ipUsage.get(ip);
  if (!usage || usage.resetAt < now) {
    ipUsage.set(ip, { count: 1, resetAt: now + IP_WINDOW_MS });
    return false;
  }
  usage.count++;
  return usage.count > IP_LIMIT;
}

type Message = { role: "user" | "assistant"; content: string };

async function complete(model: string, messages: Message[]) {
  return fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "X-Title": "Guillermo Barreiro Digital Twin",
    },
    body: JSON.stringify({
      model,
      stream: true,
      temperature: 0.4,
      // Short factual answers don't need thinking time; this keeps replies near-instant.
      reasoning: { enabled: false },
      messages: [{ role: "system", content: systemPrompt }, ...messages.slice(-MAX_HISTORY)],
    }),
  });
}

export async function POST(request: Request) {
  const { messages } = await request.json().catch(() => ({}));
  const valid =
    Array.isArray(messages) &&
    messages.length > 0 &&
    messages.every(
      (m: Message) =>
        (m?.role === "user" || m?.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length <= (m.role === "user" ? MAX_LENGTH : 4000),
    );
  if (!valid) return new Response("Invalid request.", { status: 400 });

  const ip =
    request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0].trim();
  // Without an IP every visitor would share one bucket, so skip the per-IP check instead.
  if (!ip) console.warn("No client IP header; skipping per-IP chat limit");
  if (
    messages.filter((m: Message) => m.role === "user").length > MAX_QUESTIONS ||
    (ip && overIpLimit(ip))
  ) {
    return new Response("Question limit reached.", { status: 429 });
  }

  let upstream: Response | undefined;
  for (const model of MODELS) {
    upstream = await complete(model, messages);
    if (upstream.ok) break;
    console.error(`OpenRouter ${model} failed`, upstream.status, await upstream.text());
  }

  if (!upstream?.ok || !upstream.body) {
    return new Response("The twin is busy right now. Please try again in a moment.", {
      status: 502,
    });
  }

  // Convert OpenRouter's SSE stream into a plain text stream of content deltas.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const stream = upstream.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop()!;
        for (const line of lines) {
          if (!line.startsWith("data: ") || line === "data: [DONE]") continue;
          const delta = JSON.parse(line.slice(6)).choices?.[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        }
      },
    }),
  );

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
