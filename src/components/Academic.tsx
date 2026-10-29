import { degrees, papers, research, teaching } from "@/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
      {children}
    </div>
  );
}

export default function Academic() {
  return (
    <section id="academic" className="border-b border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="04"
          label="Academic"
          title={
            <>
              Engineering roots,{" "}
              <span className="font-serif font-normal text-mist italic">
                from neural networks to star maps.
              </span>
            </>
          }
        />

        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Label>Degrees</Label>
            <ul className="divide-y divide-line border-y border-line">
              {degrees.map((d) => (
                <li key={d.degree} className="py-6">
                  <h3 className="text-xl font-medium tracking-tight">{d.degree}</h3>
                  <p className="mt-1 text-mist">{d.school}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-bone/85">{d.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <Label>Teaching / University of Alberta</Label>
            <ul className="divide-y divide-line border-y border-line">
              {teaching.map((t) => (
                <li key={t.role} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-medium tracking-tight">{t.role}</h3>
                    <span className="font-mono text-[11px] tracking-[0.15em] text-mist uppercase">
                      {t.years}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {t.courses.map((c) => (
                      <li key={c} className="flex gap-3 text-[15px] text-bone/85">
                        <span className="mt-[0.6em] h-px w-3 shrink-0 bg-signal" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  {t.detail && (
                    <p className="mt-3 text-[15px] leading-relaxed text-mist">{t.detail}</p>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <Label>Research</Label>
            <ul className="divide-y divide-line border-y border-line">
              {research.map((r) => (
                <li key={r.role} className="py-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-medium tracking-tight">{r.role}</h3>
                    <span className="font-mono text-[11px] tracking-[0.15em] text-mist uppercase">
                      {r.years}
                    </span>
                  </div>
                  <p className="mt-1 text-mist">{r.place}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-bone/85">{r.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <Label>Publications</Label>
            <ul className="border-t border-line">
              {papers.map((p) => (
                <li key={p.venue} className="border-b border-line py-5">
                  <div>{p.title}</div>
                  <div className="mt-1 text-sm text-mist">
                    {p.authors}. {p.venue}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
