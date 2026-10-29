import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { caseStudies, moreCaseStudies, profile } from "@/content";

const allStudies = [...caseStudies, ...moreCaseStudies];

export function generateStaticParams() {
  return allStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = allStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const title = `${study.title} | ${profile.name}`;
  return {
    title,
    description: study.description,
    openGraph: { title, description: study.description },
  };
}

// Every case study is prerendered; Suspense keeps navigation to them instant.
export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense>
      <CaseStudy params={params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = allStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  // "Next" cycles through the six featured studies; extra studies lead back to the first.
  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="noise relative min-h-svh overflow-hidden">
      <div
        aria-hidden
        className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-5xl px-5 pt-10 pb-24 md:px-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-mist uppercase transition-colors hover:text-signal"
        >
          &larr; All case studies
        </Link>

        <header className="mt-20">
          <div className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">
            {study.kicker}
          </div>
          <h1 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] leading-[1] font-medium tracking-[-0.035em] text-balance">
            {study.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-bone/85">{study.description}</p>
        </header>

        <div className="mt-16 grid border-t border-l border-line sm:grid-cols-3">
          {study.results.map((r) => (
            <div key={r.label} className="border-r border-b border-line p-6">
              <div className="text-3xl font-medium tracking-tight text-signal md:text-4xl">
                {r.value}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-mist">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase md:col-span-3">
            The problem
          </h2>
          <p className="text-lg leading-relaxed md:col-span-9">{study.challenge}</p>

          <h2 className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase md:col-span-3">
            What I did
          </h2>
          <ul className="space-y-4 md:col-span-9">
            {study.approach.map((step) => (
              <li key={step} className="flex gap-4 text-lg leading-relaxed">
                <span className="mt-[0.75em] h-px w-4 shrink-0 bg-signal" />
                {step}
              </li>
            ))}
          </ul>

          <h2 className="font-mono text-[11px] tracking-[0.2em] text-mist uppercase md:col-span-3">
            What I learned
          </h2>
          <p className="font-serif text-3xl leading-snug italic md:col-span-9">{study.takeaway}</p>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-24 flex items-center justify-between gap-6 border-y border-line py-8 transition-colors hover:text-signal"
        >
          <span>
            <span className="block font-mono text-[11px] tracking-[0.2em] text-mist uppercase">
              Next case study
            </span>
            <span className="mt-2 block text-2xl font-medium tracking-tight md:text-3xl">
              {next.title}
            </span>
          </span>
          <span className="text-2xl transition-transform group-hover:translate-x-2">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
