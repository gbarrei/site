import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { EVENTS, getStats, type StatEvent } from "@/lib/stats";
import { isStatsAuthorized } from "@/lib/stats-auth";

export const metadata: Metadata = {
  title: "Site stats",
  robots: { index: false, follow: false },
};

const events = Object.keys(EVENTS) as StatEvent[];

export default function StatsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 md:px-10">
      <div aria-hidden className="brand-stripe mb-10 h-[3px] w-full" />
      <p className="font-mono text-[11px] tracking-[0.2em] text-signal uppercase">Private</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight">Site stats</h1>
      <p className="mt-4 max-w-2xl text-mist">
        Visitor and page view counts are in{" "}
        <a
          href="https://vercel.com/dashboard"
          className="text-bone underline decoration-signal underline-offset-4 hover:text-signal"
        >
          Vercel Web Analytics
        </a>
        . This page shows how visitors use the digital twin and the contact form. Days are in
        Edmonton time.
      </p>
      <Suspense fallback={<p className="mt-12 text-mist">Loading stats…</p>}>
        <Stats />
      </Suspense>
    </main>
  );
}

async function Stats() {
  // The proxy already asks for the password; checking here too keeps the data safe if the proxy changes.
  if (!isStatsAuthorized((await headers()).get("authorization"))) notFound();

  const stats = await getStats(30);
  if (!stats) {
    return (
      <p className="mt-12 border border-line bg-ink-2 p-6 text-mist">
        No database is connected, so nothing is being counted yet. Connect Upstash Redis to this
        project in Vercel to start counting.
      </p>
    );
  }

  const last30 = Object.fromEntries(
    events.map((e) => [e, stats.daily.reduce((sum, d) => sum + d.counts[e], 0)]),
  ) as Record<StatEvent, number>;

  return (
    <>
      <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
        {events.map((e) => (
          <div key={e} className="bg-ink-2 p-6">
            <div className="font-mono text-[11px] tracking-[0.15em] text-mist uppercase">
              {EVENTS[e]}
            </div>
            <div className={`mt-3 text-4xl font-medium ${e.startsWith("twin") ? "text-twin" : "text-signal"}`}>
              {stats.total[e].toLocaleString()}
            </div>
            <div className="mt-1 text-sm text-mist">
              {last30[e].toLocaleString()} in the last 30 days
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-medium">Last 30 days</h2>
      <div className="mt-4 overflow-x-auto border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-2 font-mono text-[11px] tracking-[0.15em] text-mist uppercase">
            <tr>
              <th className="px-4 py-3 font-normal">Day</th>
              {events.map((e) => (
                <th key={e} className="px-4 py-3 text-right font-normal">
                  {EVENTS[e]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stats.daily.map(({ day, counts }) => (
              <tr key={day} className="border-t border-line">
                <td className="px-4 py-2.5 font-mono text-mist">{day}</td>
                {events.map((e) => (
                  <td key={e} className={`px-4 py-2.5 text-right ${counts[e] ? "text-bone" : "text-mist/50"}`}>
                    {counts[e]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
