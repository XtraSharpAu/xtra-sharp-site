# Analytics & Monitoring Setup

Same discipline as `docs/deployment-audit.md` and `docs/launch-readiness.md`: this records what was actually built and verified vs. what needs the site owner's own accounts and credentials, which this session has never had access to.

## 1. Google Analytics 4

A request later supplied a real Measurement ID: **`G-F91NJ3NQ8X`**. Earlier in this project no ID was available — logging into the site owner's Google Analytics account isn't something this session has ever had access to (and, per the deployment audit, there's no network route to any google.com domain at all from here). No ID was invented or hardcoded in its place at the time, since a fake-looking `G-XXXXXXXXXX` would silently track nothing while making the site look instrumented when it isn't. That's no longer the situation for the ID itself — see below for what's still outstanding.

**What was built: a real, working, ready-to-activate integration**, gated behind an environment variable so it does nothing until a real ID is supplied — never sends requests to Google, never risks polluting a wrong or placeholder property with test traffic.

- `src/components/GoogleAnalytics.tsx` reads `NEXT_PUBLIC_GA_MEASUREMENT_ID`. If it's unset, the component renders `null` and no script loads at all — confirmed with a local build+serve that no `googletagmanager.com` reference appears anywhere in the page when the variable is absent.
- If set, it loads `gtag.js` and initializes it, using Next.js's `next/script` component with `strategy="afterInteractive"` — the framework's recommended pattern for third-party analytics tags (loads after the page is interactive, doesn't block hydration), rather than pasting raw `<script>` tags into `<head>`, which isn't how the App Router manages `<head>` content and would perform worse than `next/script`.
- Wired into `src/app/layout.tsx` so it runs on every page site-wide.

**A later request asked for this to be added via `pages/_app.js`.** This codebase has no `pages/` directory at all — it's built entirely on the App Router (`src/app/`), confirmed by `find . -iname "pages"` returning nothing and every route living under `src/app/*/page.tsx`. Adding a `pages/_app.js` here wouldn't do anything: Next.js only runs `_app.js` for routes defined under `pages/`, and none exist, so the file would be inert dead code that misrepresents the project's actual architecture. The functionally equivalent, framework-correct place for this — `src/components/GoogleAnalytics.tsx` wired into the root layout — already existed before that request and needed no changes; no `pages/_app.js` was created.

**Verified twice**, without touching real production config:
1. Originally, with a throwaway test value (`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST123456`, never committed) — confirmed both the `gtag.js` script tag and the `gtag('config', ...)` call rendered correctly.
2. Again with the real ID once it was supplied: built and served locally with `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-F91NJ3NQ8X` and confirmed the live HTML contains `googletagmanager.com/gtag/js?id=G-F91NJ3NQ8X` and `gtag('config', 'G-F91NJ3NQ8X')`. Then rebuilt clean without the variable set and reconfirmed zero `googletagmanager` references, so the "off by default" behavior still holds. The real ID was used for local verification only — it was **not** committed anywhere in the repo (`.env*` is gitignored); it belongs in Vercel's environment variables, not source control, same as any other environment-specific config, even though a GA4 Measurement ID isn't itself a secret.

**Resolved.** The env var is set in Vercel Production, matches the GA4 property's stream ID, and the owner has confirmed GA4 is now recording real visits. This session couldn't observe Realtime/DebugView directly (no network route to any google.com domain), so the exact root cause among the ranked hypotheses below wasn't confirmed back — but whichever it was, it's fixed. See "0 Events Despite 204 Responses — Investigation" below for what was checked at the time and what was ruled out in-repo.

### What you need to do to turn this on
1. Get your real Measurement ID from Google Analytics (Admin → Data Streams → your web stream → format `G-XXXXXXXXXX`). ✅ Done — `G-F91NJ3NQ8X`.
2. In the Vercel dashboard: Project → Settings → Environment Variables → add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with that value, for Production (and Preview if wanted). Redeploy. ✅ Done, per the owner.
3. **Verify tag firing**: open the live site in Chrome, DevTools → Network, filter for `collect` or `g/collect`, and confirm a request fires on page load. ✅ Confirmed by the owner — requests fire and return 204. The unresolved problem is that these accepted hits aren't appearing in Realtime/DebugView; see below.

### 0 Events Despite 204 Responses — Investigation

The owner ruled out consent settings, data filters, Google Signals, CSP/response headers, and GA4 account access before asking this session to check the codebase. Verified independently here, not just taken on trust:

- **`src/components/GoogleAnalytics.tsx` + `src/app/layout.tsx`**: confirmed there is exactly one `<GoogleAnalytics />`, rendered unconditionally at the top of `<body>` in the single root layout. This codebase has no nested layouts, no route groups, and no `middleware.ts` anywhere (`find src/app -iname "layout*"` returns only the root; `find . -iname "middleware*"` returns nothing) — so there is no route-based path where the tag could be silently skipped.
- **Duplicate/conflicting initialization**: searched the whole repo (case-insensitive) for `gtag(`, `dataLayer`, `GoogleTagManager`, `google-analytics`, `googletagmanager` — the only source-code match is `GoogleAnalytics.tsx` itself. No second `gtag('config', ...)` call anywhere, no GTM container, nothing that could double-fire or override the config call.
- **Service worker**: none exists. No `next-pwa` in `package.json`, no `sw.js`, no `manifest.json` under `public/`, no `serviceWorker.register(...)` anywhere in the repo. This possibility is fully ruled out, not just unlikely.
- **Headers/CSP**: `next.config.ts`'s only `headers()` entries are `Cache-Control` rules for static assets — nothing touching CSP, `Referrer-Policy`, or any header that could affect a third-party request. No `vercel.json` exists either. Matches the owner's own GitHub-code-search finding, independently re-confirmed by reading the actual file.
- **Stale/shadowing ID**: searched for any hardcoded `G-XXXXXXXXXX`-shaped string or a second reference to `NEXT_PUBLIC_GA_MEASUREMENT_ID` anywhere in the repo — none exists. `GoogleAnalytics.tsx` is the only place the env var is read, so there's no code path that could substitute a different or stale ID.
- **The code's own interpolation is clean**: built locally with `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-F91NJ3NQ8X` set exactly (no extra whitespace) and inspected the rendered output byte-by-byte (Python `repr()` on the extracted value) — the script tag and `gtag('config', 'G-F91NJ3NQ8X')` call render with exactly that 12-character string, no corruption, no encoding issue introduced by the template literal. **This proves the bug, if it's whitespace-related, is not something this codebase's code is introducing** — the component does nothing but echo whatever the env var actually contains. It cannot rule out the env var's *stored value in Vercel* containing extra characters, since this sandbox cannot read Vercel's dashboard (see below).

**What could not be checked from this session, and why**: this sandbox has zero outbound network access to `xtrasharp.com.au`/`www.xtrasharp.com.au` or any `google.com`/`googletagmanager.com`/`google-analytics.com` domain — reconfirmed with a live `curl` during this investigation (`CONNECT tunnel failed, response 403` from the egress proxy on all three). That means, from here, it was not possible to: load the live site, inspect its actual rendered HTML/`window.dataLayer`, read the real value stored in the Vercel environment variable, open GA4 Realtime or DebugView, or reach Google's Measurement Protocol validation endpoint. **No event was reproduced in DebugView from this session — that step requires the owner's own browser and Google account.**

**Diagnostic change made and since reverted**: added `{ debug_mode: true }` to the `gtag('config', ...)` call in `GoogleAnalytics.tsx`, exactly as requested, so a real visit would show up in DebugView (it requires `debug_mode` to be set — it wasn't before, so the earlier "DebugView shows 0 events" result was expected regardless of whether the underlying issue was present). Once the owner confirmed GA4 was recording real visits, the flag was removed and `gtag('config', ...)` is back to its plain, permanent form — it was never meant to stay in production.

**Ranked hypotheses**, given everything above is ruled out in-repo:
1. **Invisible whitespace/control character in the Vercel-stored env var value** (the owner's own item 6) — this is the single most likely explanation, because it exactly matches every symptom: the collect endpoint is a fire-and-forget beacon that returns 204 regardless of whether the hit's parameters ultimately validate server-side, so a corrupted `tid` (e.g. `G-F91NJ3NQ8X\n`) would look identical to a clean one in the Network tab. Fix: in the Vercel dashboard, delete the existing `NEXT_PUBLIC_GA_MEASUREMENT_ID` value and retype it by hand (don't paste) into a plain-text editor first, confirm no leading/trailing whitespace with an editor that shows invisible characters, then re-save and redeploy.
2. **Confirm the 204 and the "0 in Realtime" visit are the same test.** The write-up describes "collect requests return 204" as a separately-confirmed fact and the "confirmed real visit" as a separate live-Realtime-watching session — it's worth double-checking whether that specific phone/browser visit was itself confirmed to produce a 204 in its own Network tab (e.g. via remote debugging), or whether the 204 confirmation came from a different (likely desktop) test session. If the visit that didn't show in Realtime was never itself confirmed to reach the collect endpoint, a device-specific cause (iOS Safari ITP, Private Relay, a mobile ad/privacy blocker, carrier-level DNS filtering) becomes a live possibility that wouldn't show up in a desktop-based check.
3. **Confirm Realtime is being viewed on the exact property that owns this data stream.** A GA4 account with more than one property is an easy place to watch Realtime on the wrong property while the correct one (matching this Measurement ID) is silently collecting data elsewhere. Worth a direct click-through from Admin → Data Streams → this stream → into that same property's Realtime report, rather than navigating to Realtime independently.

On item 5 of the original ask (POSTing a captured collect URL to `https://www.google-analytics.com/debug/mp/collect`): that endpoint validates **Measurement Protocol** payloads, which need a server-side `api_secret` and a specifically-formatted JSON body — it's a different system from the client-side hits `gtag.js` fires automatically, and a raw browser-captured collect URL isn't valid input for it. It wasn't attempted, both because the premise doesn't quite apply to a `gtag.js` hit and because this sandbox can't reach any `google.com` domain regardless. The correct tool for this exact scenario is GA4 DebugView via `debug_mode` (now enabled, see above) or the official Google Analytics Debugger Chrome extension.

## 2. Google Search Console

Not done — requires logging into Search Console with the site owner's Google account, which this session cannot do (no credentials, no network access to google.com). What's already in place on the code side and ready for submission: `public/sitemap.xml` (verified correct and current — 20 live routes, `/thank-you` correctly excluded) and `public/robots.txt` (points to it).

**What you need to do**: log into [Google Search Console](https://search.google.com/search-console), add `https://xtrasharp.com.au` as a property (domain or URL-prefix), verify ownership (DNS TXT record is usually simplest, since the domain is already pointed at Vercel), then Sitemaps → submit `https://xtrasharp.com.au/sitemap.xml`. Coverage/crawl-error data only appears after Google has had time to crawl — check back a few days after submission.

## 3. Google Business Profile

Not verified — same reason as Command 18: no access to the GBP dashboard, no network route to check it independently. What's confirmed from the site's own source of truth (Footer, `src/app/layout.tsx`'s LocalBusiness schema):

| Field | What the site actually says |
|---|---|
| Phone | 0412 974 277 |
| Suburb | Campbelltown NSW |
| Service description phrase | "Mail-in sharpening available Australia-wide" (Footer tagline, and stated on every core service page) |
| Website URL | `https://xtrasharp.com.au` |

**What you need to do**: open the Business Profile listing directly and check each of these four fields against the table above, and update the website link if it doesn't already point to `https://xtrasharp.com.au`.

## 4. Monitoring Setup

Not set up. Both suggested options require creating or configuring an account with the site owner's own contact details (email/SMS for alerts), which isn't something to improvise on someone else's behalf:

- **UptimeRobot** (free tier, no code changes needed): create an account at uptimerobot.com, add a new HTTP(s) monitor for `https://xtrasharp.com.au`, set the check interval, and set the alert contact (your email/phone) with a 5-minute-or-more downtime threshold before it notifies you.
- **Vercel's own monitoring**: available on paid Vercel plans under Project → Observability; check what's included on the current plan in the Vercel dashboard.

**Google Tag Manager** — explicitly marked optional in the request, and not implemented. If wanted later, it follows the same pattern as the GA4 component above (a GTM container ID gated behind an env var, `next/script`, wired into `layout.tsx`) — worth adding only once there's an actual marketing integration that needs it, since GTM adds its own script weight for no benefit until something is configured inside it.

## Summary

| Item | Status |
|---|---|
| GA4 integration code | ✅ Built, tested locally with both a throwaway ID and the real ID (`G-F91NJ3NQ8X`) — ready |
| GA4 env var set in Vercel (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) | ✅ Done, per the owner |
| Site redeployed with the var set | ✅ Done, per the owner |
| GA4 tag firing on live site (script loads, `gtag('config', ...)` called, 204 from collect) | ✅ Confirmed by the owner |
| Events appearing in GA4 Realtime/reports | ✅ **Confirmed working by the owner.** Root cause wasn't reported back to this session (no way to observe Realtime/DebugView directly to narrow it down); see the ranked hypotheses above for what it most likely was. Temporary `debug_mode: true` diagnostic flag has been reverted — `GoogleAnalytics.tsx` is back to its permanent form |
| Search Console property added | ❌ Not done — needs your Google account |
| sitemap.xml submitted / indexing checked | ❌ Not done — same reason; the file itself is correct and ready |
| GBP website link / phone / suburb / service description | ❓ Not verified — needs your GBP dashboard; site's own source-of-truth values listed above for comparison |
| Uptime monitoring | ❌ Not set up — needs an account with your contact details |
| Google Tag Manager | ⏭️ Skipped — optional, no current need |
