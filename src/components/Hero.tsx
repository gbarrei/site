import { profile, RESUME_AVAILABLE, RESUME_PATH, stats } from "@/content";
import Spotlight from "./Spotlight";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <Spotlight className="noise overflow-hidden border-b border-line">
      <section id="top" className="relative">
        <div
          aria-hidden
          className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]"
        />
        <div
          aria-hidden
          className="absolute -top-40 right-[-10%] size-[620px] rounded-full bg-signal/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 pt-28 pb-10 md:px-10 md:pt-32 md:pb-14">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
              <span className="flex items-center gap-2 border border-signal/40 bg-signal/5 px-3 py-1.5 text-signal">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
                </span>
                Open to new opportunities
              </span>
              <span>{profile.location}</span>
              <span className="hidden md:inline">53.5461 N / 113.4938 W</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-[clamp(2.75rem,8vw,8.5rem)] leading-[0.92] font-medium tracking-[-0.045em]">
              Bringing order
              <br />
              to chaos to
              <br />
              make{" "}
              <span className="relative inline-block pr-[0.06em] font-serif font-normal tracking-normal text-signal italic">
                ship
                <span className="absolute -bottom-1 left-0 h-[0.06em] w-full bg-signal" />
              </span>{" "}
              <span className="text-mist">happen.</span>
              <span className="ml-2 inline-block h-[0.75em] w-[0.08em] translate-y-[0.08em] animate-blink bg-signal" />
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
            <Reveal delay={200} className="md:col-span-7">
              <p className="max-w-xl text-lg leading-relaxed text-bone/80 md:text-xl">
                I&apos;m <span className="text-bone">{profile.name}</span>, a{" "}
                {profile.role.toLowerCase()} turning customer problems into
                market-winning products through strategy, AI, data and
                cross-functional leadership.
              </p>
            </Reveal>
            <Reveal delay={300} className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <a
                href="#journey"
                className="group inline-flex items-center gap-3 border border-signal bg-signal/10 px-6 py-4 font-mono text-xs font-semibold tracking-[0.15em] text-signal uppercase transition-all hover:-translate-y-0.5 hover:bg-signal/20"
              >
                View the journey
                <span className="transition-transform group-hover:translate-y-0.5">&darr;</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-bone/25 px-6 py-4 font-mono text-xs tracking-[0.15em] uppercase transition-colors hover:border-bone hover:bg-bone hover:text-ink"
              >
                Get in touch
              </a>
              {RESUME_AVAILABLE && (
                <a
                  href={RESUME_PATH}
                  download
                  className="inline-flex items-center gap-3 border border-bone/25 px-6 py-4 font-mono text-xs tracking-[0.15em] uppercase transition-colors hover:border-bone hover:bg-bone hover:text-ink"
                >
                  Download resume
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={400}>
            <dl className="mt-14 grid grid-cols-2 border-t border-line md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-6 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${
                    i > 0 ? "md:border-l md:border-line md:pl-6" : ""
                  } ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
                >
                  <dt className="font-mono text-[11px] tracking-[0.18em] text-mist uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </Spotlight>
  );
}
