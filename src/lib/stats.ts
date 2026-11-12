import { Redis } from "@upstash/redis";

// Vercel's Upstash integration may name the variables either way.
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

// Null when no database is connected (for example in local development); callers fall back.
export const redis = url && token ? new Redis({ url, token }) : null;

export const EVENTS = {
  twin_open: "Digital twin opened",
  twin_question: "Questions asked to the twin",
  contact_sent: "Contact form messages sent",
} as const;

export type StatEvent = keyof typeof EVENTS;

const TIME_ZONE = "America/Edmonton";
const TOTAL_KEY = "stats:total";
const dayKey = (day: string) => `stats:day:${day}`;

// YYYY-MM-DD in Edmonton time, so a day matches the owner's calendar.
function localDay(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(date);
}

// Counting must never break the visitor's action, so failures are only logged.
export async function recordEvent(event: StatEvent) {
  if (!redis) return;
  try {
    const key = dayKey(localDay());
    await redis.pipeline().hincrby(key, event, 1).hincrby(TOTAL_KEY, event, 1).exec();
  } catch (error) {
    console.error("Couldn't record stat", event, error);
  }
}

export type StatCounts = Record<StatEvent, number>;

function toCounts(hash: Record<string, unknown> | null): StatCounts {
  const counts = {} as StatCounts;
  for (const event of Object.keys(EVENTS) as StatEvent[]) counts[event] = Number(hash?.[event] ?? 0);
  return counts;
}

export async function getStats(days = 30) {
  if (!redis) return null;
  const dates = Array.from({ length: days }, (_, i) => localDay(new Date(Date.now() - i * 864e5)));
  const pipeline = redis.pipeline().hgetall(TOTAL_KEY);
  for (const day of dates) pipeline.hgetall(dayKey(day));
  const [total, ...daily] = (await pipeline.exec()) as (Record<string, unknown> | null)[];
  return {
    total: toCounts(total),
    daily: dates.map((day, i) => ({ day, counts: toCounts(daily[i]) })),
  };
}
