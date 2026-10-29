"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/app/actions";

const field =
  "w-full border border-line bg-ink px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-mist focus:border-signal";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendMessage, {
    status: "idle",
  });

  if (state.status === "sent") {
    return (
      <div className="border border-signal/50 bg-signal/5 p-8">
        <div className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
          Message sent
        </div>
        <p className="mt-3 text-xl tracking-tight">Thanks for reaching out. I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-mist uppercase">Name</span>
        <input name="name" defaultValue={state.fields?.name} required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-mist uppercase">Email</span>
        <input name="email" type="email" defaultValue={state.fields?.email} required autoComplete="email" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-mist uppercase">Message</span>
        <textarea name="message" defaultValue={state.fields?.message} required rows={5} className={`${field} resize-y`} />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex items-center gap-3 border border-signal bg-signal/10 px-6 py-4 font-mono text-xs font-semibold tracking-[0.15em] text-signal uppercase transition-all hover:bg-signal/20 disabled:opacity-50"
        >
          {pending ? "Sending..." : "Send message"}
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </button>
        {state.status === "error" && (
          <p role="alert" className="text-sm text-bone">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
