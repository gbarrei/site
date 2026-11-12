import { after } from "next/server";
import { recordEvent } from "@/lib/stats";

// The browser can only report that the twin was opened. Questions and contact form sends
// are counted on the server where they happen, so they can't be inflated from here.
export async function POST(request: Request) {
  const { event } = await request.json().catch(() => ({}));
  if (event !== "twin_open") return new Response(null, { status: 400 });
  after(() => recordEvent("twin_open"));
  return new Response(null, { status: 204 });
}
