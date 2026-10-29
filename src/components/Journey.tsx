import { journey } from "@/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Journey() {
  return (
    <section id="journey" className="relative border-b border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="02"
          label="Career journey"
          title={
            <>
              From code to teams to products.{" "}
              <span className="font-serif font-normal text-mist italic">
                Twenty-five years, one through-line.
              </span>
            </>
          }
        />

        <ol className="border-t border-line">
          {journey.map((role, i) => (
            <li key={role.company}>
              <Reveal>
                <article className="group relative grid gap-6 border-b border-line py-10 transition-colors duration-500 md:grid-cols-12 md:gap-8 md:py-14">
                  <span className="absolute top-0 bottom-0 -left-5 w-px origin-top scale-y-0 bg-signal transition-transform duration-500 group-hover:scale-y-100 md:-left-10" />

                  <div className="md:col-span-3">
                    <div className="font-serif text-6xl leading-none text-mist/70 italic transition-colors duration-500 group-hover:text-signal md:text-7xl">
                      {role.start}
                    </div>
                    <div className="mt-3 font-mono text-[11px] tracking-[0.15em] text-mist uppercase">
                      {role.duration}
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <div className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
                      {i === 0 ? "Most recent" : `Chapter ${String(journey.length - i).padStart(2, "0")}`}
                    </div>
                    <h3 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
                      {role.company}
                    </h3>
                    <p className="mt-2 text-mist">{role.title}</p>
                  </div>

                  <div className="md:col-span-5">
                    <p className="leading-relaxed text-bone/85">{role.summary}</p>
                    <ul className="mt-5 space-y-2.5">
                      {role.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-mist">
                          <span className="mt-[0.6em] h-px w-3 shrink-0 bg-signal/70" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-mist uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
