# Guillermo Barreiro - Personal Site

Next.js personal website. Content lives in `src/content.ts`.

```bash
npm install
npm run dev
```

Open http://localhost:3100.

The Digital Twin chat needs `OPENROUTER_API_KEY` in `.env`. Its knowledge and instructions live in `src/twin/knowledge.ts`; models are listed in `src/app/api/chat/route.ts`.

The contact form emails messages through [Resend](https://resend.com); set `RESEND_API_KEY` and `CONTACT_EMAIL` in `.env`. It sends from `onboarding@resend.dev`, which only delivers to the Resend account owner; verify your own domain in Resend before production.

Set `SITE_URL` to the production URL so link previews resolve (production builds warn when it is missing).

The chat's per-IP limit reads `x-real-ip` or `x-forwarded-for`; check that your host sets them (Vercel and Netlify do).

Visitor counts come from Vercel Web Analytics (enable it in the Vercel project; it only counts production). Twin opens, twin questions and contact form sends are counted in Upstash Redis: connect Upstash Redis to the project from Vercel's Storage tab, which sets `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (or the `KV_REST_API_*` equivalents). The same database holds the chat's per-IP limit; without it, counting is skipped and the limit falls back to memory. View the counts at `/stats` with any username and `STATS_PASSWORD` as the password; without `STATS_PASSWORD` the page returns 404.

To show the resume download buttons, add `public/Guillermo_Barreiro_Resume.pdf` and set `RESUME_AVAILABLE` in `src/content.ts`.

Case studies and papers live in `src/content.ts`.
