"use client";

import { Analytics } from "@vercel/analytics/next";

// Counts page views in Vercel Web Analytics (production only). The private stats page isn't counted.
export default function VisitorAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => (new URL(event.url).pathname.startsWith("/stats") ? null : event)}
    />
  );
}
