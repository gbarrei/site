import { timingSafeEqual } from "node:crypto";

// The stats page uses HTTP Basic auth: any username, and STATS_PASSWORD as the password.
// With no STATS_PASSWORD set, nobody can open it.
export function isStatsAuthorized(authorization: string | null) {
  const password = process.env.STATS_PASSWORD;
  if (!password || !authorization?.startsWith("Basic ")) return false;
  const decoded = Buffer.from(authorization.slice(6), "base64").toString();
  const given = Buffer.from(decoded.slice(decoded.indexOf(":") + 1));
  const expected = Buffer.from(password);
  return given.length === expected.length && timingSafeEqual(given, expected);
}
