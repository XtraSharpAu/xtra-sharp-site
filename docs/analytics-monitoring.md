# Analytics & Monitoring Setup

Same discipline as `docs/deployment-audit.md` and `docs/launch-readiness.md`: this records what was actually built and verified vs. what needs the site owner's own accounts and credentials, which this session has never had access to.

## 1. Google Analytics 4

**Could not "obtain a GA4 Measurement ID"** — that requires being logged into the site owner's Google Analytics account, which this session has no access to (and, per the deployment audit, no network route to any google.com domain at all). No ID was invented or hardcoded in its place, since a fake-looking `G-XXXXXXXXXX` would silently track nothing while making the site look instrumented when it isn't.

**What was built instead: a real, working, ready-to-activate integration**, gated behind an environment variable so it does nothing until a real ID is supplied — never sends requests to Google, never risks polluting a wrong or placeholder property with test traffic.

- `src/components/GoogleAnalytics.tsx` reads `NEXT_PUBLIC_GA_MEASUREMENT_ID`. If it's unset, the component renders `null` and no script loads at all — confirmed with a local build+serve that no `googletagmanager.com` reference appears anywhere in the page when the variable is absent.
- If set, it loads `gtag.js` and initializes it, using Next.js's `next/script` component with `strategy="afterInteractive"` — the framework's recommended pattern for third-party analytics tags (loads after the page is interactive, doesn't block hydration), rather than pasting raw `<script>` tags into `<head>`, which isn't how the App Router manages `<head>` content and would perform worse than `next/script`.
- Wired into `src/app/layout.tsx` so it runs on every page site-wide.
- **Verified the active code path works**, without touching the real production config: built and served the site locally with a throwaway test value (`NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TEST123456`, never committed anywhere) and confirmed both the `gtag.js` script tag and the `gtag('config', 'G-TEST123456')` call render correctly in the served HTML. Then rebuilt clean without it for what's actually being committed.

### What you need to do to turn this on
1. Get your real Measurement ID from Google Analytics (Admin → Data Streams → your web stream → format `G-XXXXXXXXXX`).
2. In the Vercel dashboard: Project → Settings → Environment Variables → add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with that value, for Production (and Preview if wanted). Redeploy.
3. **Verify tag firing** (this is the one step from the original task that genuinely can only be done against a live site with a real ID, which this session doesn't have): open the live site in Chrome, DevTools → Network, filter for `collect` or `g/collect`, and confirm a request fires on page load. Neither the request nor its absence can be shown here.

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
| GA4 integration code | ✅ Built, tested locally with a throwaway ID, ready — inactive until a real Measurement ID is set |
| GA4 tag firing on live site | ❓ Cannot verify without a live site + real ID |
| Search Console property added | ❌ Not done — needs your Google account |
| sitemap.xml submitted / indexing checked | ❌ Not done — same reason; the file itself is correct and ready |
| GBP website link / phone / suburb / service description | ❓ Not verified — needs your GBP dashboard; site's own source-of-truth values listed above for comparison |
| Uptime monitoring | ❌ Not set up — needs an account with your contact details |
| Google Tag Manager | ⏭️ Skipped — optional, no current need |
