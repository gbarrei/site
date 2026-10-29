import { profile, RESUME_AVAILABLE, RESUME_PATH } from "@/content";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="noise relative overflow-hidden">
      <div
        aria-hidden
        className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-60 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-signal/10 blur-[160px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-10 md:px-10 md:pt-36">
        <Reveal>
          <div className="mb-6 flex items-center gap-4 font-mono text-xs tracking-[0.2em] text-mist uppercase">
            <span className="text-signal">05</span>
            <span className="h-px w-10 bg-line" />
            <span>Contact</span>
          </div>
          <h2 className="text-[clamp(2.75rem,8vw,8rem)] leading-[0.95] font-medium tracking-[-0.04em]">
            Got a problem
            <br />
            <span className="font-serif font-normal text-signal italic">worth solving?</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal delay={150} className="md:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal delay={250} className="md:col-span-4 md:col-start-9">
            <p className="text-lg leading-relaxed text-bone/85">
              Hiring, collaborating, or just curious about something I&apos;ve built? Send me a
              note and I&apos;ll reply personally.
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center justify-between gap-4 border-y border-line py-6 transition-colors hover:text-signal"
            >
              <span>
                <span className="block font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
                  LinkedIn
                </span>
                <span className="mt-1 block">in/guillermo-barreiro</span>
              </span>
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                &#8599;
              </span>
            </a>
            {RESUME_AVAILABLE && (
              <a
                href={RESUME_PATH}
                download
                className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors hover:text-signal"
              >
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
                    Resume
                  </span>
                  <span className="mt-1 block">Download PDF</span>
                </span>
                <span className="transition-transform group-hover:translate-y-0.5">&darr;</span>
              </a>
            )}
          </Reveal>
        </div>

        <footer className="mt-24 flex flex-col justify-between gap-3 border-t border-line pt-8 font-mono text-[11px] tracking-[0.15em] text-mist uppercase sm:flex-row">
          <span>&copy; 2026 {profile.name}</span>
          <span>Built in Edmonton, Alberta</span>
        </footer>
      </div>
    </section>
  );
}
