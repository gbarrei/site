import { certifications, countries, principles, profile } from "@/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const details = [
  { label: "Languages", value: "English, Spanish, French (basic)" },
  { label: "Countries of my teams and customers", value: countries.map((c) => c.name).join(", ") },
  {
    label: "Volunteer",
    value:
      "APEGA Experience Examiner (2019 to present), assessing engineers' work experience for licensure; Edmonton Food Bank",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              I want to solve customer problems:{" "}
              <span className="font-serif font-normal text-mist italic">
                genuinely, thoughtfully, and with a bit of fun
              </span>{" "}
              along the way.
            </>
          }
        />

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="space-y-5 text-lg leading-relaxed text-bone/75">
              <p>
                That&apos;s the thread running through everything I do. Over two
                decades I&apos;ve moved from writing code to leading teams to
                owning products, most recently bringing AI to small businesses and
                the self-employed at Intuit.
              </p>
              <p>
                I&apos;m an engineer by training and a product manager by
                obsession. I live close to customers, turn messy signals into a
                clear roadmap, and rally engineering, design and leadership
                around it until it ships.
              </p>
              <p>
                If you want someone who blends warmth with follow-through,{" "}
                <a href="#contact" className="text-bone underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal">
                  let&apos;s connect
                </a>
                .
              </p>
            </Reveal>

            <Reveal delay={100}>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                {details.map((d) => (
                  <div key={d.label} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase sm:pt-1">
                      {d.label}
                    </dt>
                    <dd className="text-[15px] leading-relaxed">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={150} className="md:col-span-4 md:col-start-9">
            <div className="border border-line bg-ink-2">
              <div className="border-b border-line px-6 py-5">
                <div className="text-lg font-medium tracking-tight">{profile.name}</div>
                <div className="mt-1 text-sm text-mist">{profile.role}</div>
                <div className="mt-2 font-mono text-[11px] tracking-[0.15em] text-signal uppercase">
                  P.Eng. / PMP / PMI-ACP
                </div>
              </div>
              <div className="border-b border-line px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
                Certifications
              </div>
              <dl className="divide-y divide-line">
                {certifications.map((item) => (
                  <div key={item.name} className="px-6 py-4">
                    <dt>{item.name}</dt>
                    <dd className="mt-1 text-sm text-mist">{item.issuer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-signal" />
          <h3 className="text-2xl font-medium tracking-tight md:text-3xl">Values</h3>
        </Reveal>
        <div className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 100}
              className="group relative border-r border-b border-line p-7 transition-colors duration-500 hover:bg-ink-2"
            >
              <span className="absolute top-0 left-0 h-px w-0 bg-signal transition-all duration-500 group-hover:w-full" />
              <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-mist">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
