import { NextResponse, type NextRequest } from "next/server";
import { isStatsAuthorized } from "@/lib/stats-auth";

// Asks for the stats password before the private stats page loads.
export function proxy(request: NextRequest) {
  if (!process.env.STATS_PASSWORD) return new NextResponse("Not found", { status: 404 });
  if (isStatsAuthorized(request.headers.get("authorization"))) return NextResponse.next();
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Site stats", charset="UTF-8"' },
  });
}

export const config = {
  matcher: "/stats",
};
