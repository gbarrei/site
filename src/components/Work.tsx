import Link from "next/link";
import { caseStudies, moreCaseStudies } from "@/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="03"
          label="Selected work"
          title={
            <>
              Case studies:{" "}
              <span className="font-serif font-normal text-mist italic">
                the problem, the play, the result.
              </span>
            </>
          }
        />

        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 120} className="bg-ink">
              <Link
                href={`/work/${study.slug}`}
                className="group relative flex h-full min-h-72 flex-col justify-between overflow-hidden p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10"
              >
                <div
                  aria-hidden
                  className="grid-bg absolute inset-0 opacity-0 transition-opacity duration-700 [mask-image:radial-gradient(circle_at_100%_0%,black,transparent_60%)] group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between gap-6">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
                    {study.kicker}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center border border-line text-lg transition-all group-hover:border-signal group-hover:bg-signal group-hover:text-ink">
                    &rarr;
                  </span>
                </div>
                <div className="relative mt-16">
                  <div className="font-mono text-sm text-signal">
                    {study.results[0].value}{" "}
                    <span className="text-mist">/ {study.results[0].label}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-mist">{study.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase">More work</span>
          {moreCaseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="text-bone/85 underline decoration-line underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
            >
              {study.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
