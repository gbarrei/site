"use client";

import { useEffect, useRef, useState } from "react";
import { MAX_QUESTIONS } from "@/content";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What did you build at Intuit?",
  "How do you lead product teams?",
  "Tell me about your journey from engineer to PM",
  "What kind of role are you looking for?",
];

export const OPEN_TWIN_EVENT = "open-twin";
const STORAGE_KEY = "twin-questions-asked";
const HINT_KEY = "twin-hint-seen";
const HINT_DELAY_MS = 6000;
const HINT_DURATION_MS = 10000;

export default function DigitalTwin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [asked, setAsked] = useState(0);
  const [hint, setHint] = useState(false);
  const left = MAX_QUESTIONS - asked;
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // The question count is kept in this browser so a reload doesn't reset the limit.
  function openTwin() {
    setAsked(Number(localStorage.getItem(STORAGE_KEY)) || 0);
    setOpen(true);
    setHint(false);
    localStorage.setItem(HINT_KEY, "1");
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "twin_open" }),
      keepalive: true,
    }).catch(() => {});
  }

  function dismissHint() {
    setHint(false);
    localStorage.setItem(HINT_KEY, "1");
  }

  // One-time nudge: a few seconds after the first visit, point at the twin, then fade away.
  useEffect(() => {
    if (localStorage.getItem(HINT_KEY)) return;
    let hideTimer: ReturnType<typeof setTimeout>;
    const showTimer = setTimeout(() => {
      localStorage.setItem(HINT_KEY, "1");
      setHint(true);
      hideTimer = setTimeout(() => setHint(false), HINT_DURATION_MS);
    }, HINT_DELAY_MS);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_TWIN_EVENT, openTwin);
    return () => window.removeEventListener(OPEN_TWIN_EVENT, openTwin);
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading || left <= 0) return;
    localStorage.setItem(STORAGE_KEY, String(asked + 1));
    setAsked(asked + 1);

    const history: Message[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    const setReply = (content: string) =>
      setMessages([...history, { role: "assistant", content }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error(await res.text());

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setReply(reply);
      }
      if (!reply) throw new Error();
    } catch {
      setReply("Sorry, I couldn't answer just now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  const showHint = hint && !open;

  return (
    <>
      <div
        role="status"
        className={`fixed right-4 bottom-[92px] z-40 w-[min(17rem,calc(100vw-2rem))] border border-twin/60 bg-ink-2/95 shadow-[0_8px_40px_-12px_var(--color-twin)] backdrop-blur-xl transition-all duration-500 md:right-8 md:bottom-[124px] ${
          showHint ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {showHint && (
          <>
            <button
              onClick={openTwin}
              className="block w-full py-3 pr-9 pl-4 text-left text-sm leading-snug text-bone/90 transition-colors hover:text-twin"
            >
              Questions about my career?{" "}
              <span className="text-twin">Ask my AI twin &rarr;</span>
            </button>
            <button
              onClick={dismissHint}
              aria-label="Dismiss hint"
              className="absolute top-1.5 right-1.5 grid size-6 place-items-center text-mist transition-colors hover:text-bone"
            >
              &times;
            </button>
          </>
        )}
        <span
          aria-hidden
          className="absolute -bottom-[7px] right-10 size-3 rotate-45 border-r border-b border-twin/60 bg-ink-2"
        />
      </div>

      <button
        onClick={openTwin}
        aria-label="Chat with my digital twin"
        className={`group fixed right-4 bottom-4 z-40 flex items-center gap-3 border border-twin bg-ink-2/95 py-2.5 pr-5 pl-2.5 shadow-[0_8px_40px_-10px_var(--color-twin)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-twin hover:text-ink md:right-8 md:bottom-8 md:gap-4 md:py-3 md:pr-7 md:pl-3 ${
          open ? "pointer-events-none translate-y-4 opacity-0" : ""
        }`}
      >
        <span className="relative grid size-10 place-items-center bg-twin font-mono text-sm font-semibold text-ink md:size-12">
          GB
          <span className="absolute -top-1 -right-1 flex size-3">
            <span className="absolute inline-flex size-full rounded-full bg-twin opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex size-3 rounded-full border-2 border-ink-2 bg-twin" />
          </span>
        </span>
        <span className="text-left">
          <span className="block font-mono text-[11px] tracking-[0.2em] text-twin uppercase group-hover:text-ink/70">
            AI Digital Twin
          </span>
          <span className="block text-[15px] font-medium md:text-base">Ask me anything</span>
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <section
        role="dialog"
        aria-label="Digital twin chat"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 z-50 flex h-[85svh] flex-col border-t border-line bg-ink-2 shadow-2xl shadow-black/30 transition-all duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:inset-x-auto md:right-8 md:bottom-8 md:h-[640px] md:max-h-[calc(100svh-6rem)] md:w-[420px] md:border ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="relative grid size-10 place-items-center bg-twin font-mono text-xs font-semibold text-ink">
              GB
              <span className="absolute -top-1 -right-1 size-2.5 rounded-full border-2 border-ink-2 bg-twin" />
            </span>
            <div>
              <div className="font-medium">Guillermo&apos;s Digital Twin</div>
              <div className="font-mono text-[10px] tracking-[0.18em] text-mist uppercase">
                AI trained on my career
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="grid size-9 place-items-center border border-line text-mist transition-colors hover:border-bone hover:text-bone"
          >
            &times;
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
          {messages.length === 0 ? (
            <div>
              <p className="text-2xl leading-snug font-medium tracking-tight">
                Hi, I&apos;m Guillermo&apos;s{" "}
                <span className="font-serif font-normal text-twin italic">digital twin.</span>
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">
                Ask me about my career, how I work, or what I&apos;ve built. I answer from my
                professional profile, and you can ask up to {MAX_QUESTIONS} questions.
              </p>
              {left > 0 && (
                <>
              <div className="mt-8 font-mono text-[10px] tracking-[0.2em] text-mist uppercase">
                Try asking
              </div>
              <div className="mt-3 flex flex-col items-start gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="border border-line px-3 py-2 text-left text-sm text-bone/85 transition-colors hover:border-twin hover:text-twin"
                  >
                    {s}
                  </button>
                ))}
              </div>
                </>
              )}
            </div>
          ) : (
            messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] bg-bone px-4 py-2.5 text-[15px] leading-relaxed text-ink">
                    {m.content}
                  </p>
                </div>
              ) : (
                <div key={i} className="flex gap-3">
                  <span className="mt-1 h-auto w-px shrink-0 bg-twin/60" />
                  <p className="max-w-[90%] text-[15px] leading-relaxed whitespace-pre-wrap text-bone/90">
                    {m.content || (
                      <span className="inline-flex gap-1 py-2" aria-label="Thinking">
                        <span className="size-1.5 animate-bounce rounded-full bg-twin [animation-delay:-0.3s]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-twin [animation-delay:-0.15s]" />
                        <span className="size-1.5 animate-bounce rounded-full bg-twin" />
                      </span>
                    )}
                    {loading && m.content && i === messages.length - 1 && (
                      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-blink bg-twin" />
                    )}
                  </p>
                </div>
              ),
            )
          )}
        </div>

        {left > 0 || loading ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-line p-4"
          >
            <div className="flex items-end gap-2 border border-line bg-ink px-3 py-2 transition-colors focus-within:border-twin/60">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                maxLength={500}
                placeholder="Ask about my career..."
                aria-label="Your question"
                className="max-h-32 flex-1 resize-none bg-transparent py-1.5 text-[15px] outline-none [field-sizing:content] placeholder:text-mist"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading || left <= 0}
                aria-label="Send"
                className="grid size-9 shrink-0 place-items-center bg-twin font-semibold text-ink transition-opacity disabled:opacity-30"
              >
                &uarr;
              </button>
            </div>
            <p className="mt-2 flex justify-between gap-3 font-mono text-[10px] tracking-[0.12em] text-mist uppercase">
              <span>
                {left} of {MAX_QUESTIONS} questions left
              </span>
              <span>AI can make mistakes</span>
            </p>
          </form>
        ) : (
          <div className="border-t border-line p-5">
            <p className="text-[15px] leading-relaxed">
              That&apos;s all {MAX_QUESTIONS} questions for this chat. Want to keep the conversation
              going? Send me a message and I&apos;ll reply personally.
            </p>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-3 border border-signal bg-signal/10 px-5 py-3 font-mono text-xs font-semibold tracking-[0.15em] text-signal uppercase transition-colors hover:bg-signal/20"
            >
              Contact me &rarr;
            </a>
          </div>
        )}
      </section>
    </>
  );
}
