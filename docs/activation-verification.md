# Activation & Verification — Final Launch Block

Read this first: **none of the four activation tasks in this command could be performed in this session, and nothing here pretends otherwise.** Every one of them is written as an instruction addressed to *you* — "log into your GA4 property," "copy your Measurement ID," "open https://xtrasharp.com.au in Chrome," "create an account on UptimeRobot" — because they all require credentials and account access that belong to the site owner, not to this coding session. That hasn't changed since the last two audits (`docs/analytics-monitoring.md`, `docs/weekly-report.md`); this file re-confirms the current state is unchanged and turns the four tasks into a checklist for you to actually execute, rather than a report of things that didn't happen.

Two things were re-verified fresh, right before writing this:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` is still unset anywhere in the repo or its config — GA4 has not been activated.
- A direct network request to `https://xtrasharp.com.au` from this session still fails outright (confirmed via both a direct `curl` and the sandbox's own network-policy log, which shows the request rejected by the outbound proxy) — this session has never had a working path to the live site, so "open it in Chrome and check DevTools" was never something it could do, not once across this entire project.

No GA4 screenshot, GBP screenshot, or uptime-monitor confirmation is included below, because none of those events occurred. A placeholder image or invented screenshot description would misrepresent real launch state as verified when it isn't — that's a more serious problem than an incomplete report.

## 1. Google Analytics 4 — Not Activated

**Status**: code is built and tested (`docs/analytics-monitoring.md` §1), but no real Measurement ID has ever been supplied, so the tag has never loaded on the live site and no `collect` requests have ever fired.

**What you need to actually do:**
1. Log into your GA4 property → Admin → Data Streams → your web stream → copy the Measurement ID (`G-XXXXXXXXXX`).
2. Vercel dashboard → this project → Settings → Environment Variables → add `NEXT_PUBLIC_GA_MEASUREMENT_ID` = that value, for Production.
3. Redeploy (or trigger one with an empty commit / the next push).
4. Open `https://xtrasharp.com.au` yourself in Chrome, DevTools → Network → filter `collect`, confirm a request fires. This step is only possible from a browser with real internet access — it cannot be done from this session under any circumstances, now or in any prior command.

## 2. Google Search Console — Not Activated

**Status**: no property has ever been added. `sitemap.xml` itself is correct, current, and ready to submit the moment a property exists (verified in earlier commands: 20 live routes, `/thank-you` correctly excluded).

**What you need to actually do:**
1. [search.google.com/search-console](https://search.google.com/search-console) → Add Property → `https://xtrasharp.com.au`.
2. Verify ownership — DNS TXT record is usually simplest given the domain's already pointed at Vercel; verifying via the GA4 tag is also an option once step 1 above is done.
3. Sitemaps → submit `https://xtrasharp.com.au/sitemap.xml`.
4. Coverage and indexing reports take time to populate after first crawl — check back in a few days, not immediately after submitting.

## 3. Uptime Monitoring — Not Activated

**Status**: no monitor exists on any service. Setting one up means creating an account with your own contact details (email/SMS for alerts) — not something to create using invented credentials on your behalf.

**What you need to actually do (either option):**
- **UptimeRobot** (free tier): create an account at uptimerobot.com → Add New Monitor → HTTP(s) → `https://xtrasharp.com.au` → set the alert contact to your email/phone → set the alert threshold so it notifies on downtime over 5 minutes (UptimeRobot's default check interval already means a 5-minute-plus outage is what triggers the first alert on the free tier).
- **Vercel Monitoring**: check what's included on the current Vercel plan under Project → Observability in the dashboard.

Once set up, the "first heartbeat" and a test alert are both things the monitoring service itself confirms to you directly (usually via email) — there's nothing in this codebase that could verify that on your behalf.

## 4. Google Business Profile — Not Verified

**Status**: no access to the GBP dashboard exists in this session (same reason as every Google product above — no account, no network route to any google.com domain). The site's own source-of-truth values, for you to check the listing against directly:

| Field | Site's actual value |
|---|---|
| Website link (what GBP should point to) | `https://xtrasharp.com.au` |
| Phone | 0412 974 277 |
| Email | phil@xtrasharp.com.au |
| Suburb | Campbelltown NSW |
| Service description phrase | "Mail-in sharpening available Australia-wide" |
| Hours (published on Contact page, Footer, and `LocalBusiness` schema) | Monday–Friday 9 AM–5 PM, appointment only. Saturday/Sunday not listed as open hours |

**What you need to actually do**: open the Business Profile listing directly and compare each field above against what's currently shown, paying particular attention to the **Hours** row — GBP has its own separate hours grid plus a "By appointment only" toggle; both need to match what's now published on the site (added after this table was first written), or customers will see two different sets of hours depending on whether they land on Google or the website. Update anything that doesn't match.

## Summary

| Task | Status |
|---|---|
| GA4 Measurement ID configured | ❌ Not done — needs your GA4 + Vercel dashboard access |
| GA4 `collect` requests verified | ❌ Not done — needs a live browser session against the real site, which this session cannot reach |
| Search Console property added | ❌ Not done — needs your Google account |
| sitemap.xml submitted | ❌ Not done — same reason; file itself is ready |
| Indexing/coverage reports populated | ❌ Not applicable yet — no property exists to populate them |
| Uptime monitor created | ❌ Not done — needs an account with your contact details |
| First heartbeat / alert test | ❌ Not applicable yet — no monitor exists |
| GBP website link verified | ❓ Not verified — needs your GBP dashboard; site's real link given above |
| GBP phone/email/suburb verified | ❓ Not verified — same reason; site's real values given above |
| GBP service description phrase verified | ❓ Not verified — same reason |
| GBP hours verified against site's published hours (new) | ❓ Not verified — same reason; especially check GBP's "By appointment only" toggle matches |

**"Launch officially complete" is not accurate yet.** The site itself (code, content, SEO, accessibility, performance) has been extensively built and audited across this project and is genuinely ready. The four items above are the actual remaining blockers, and every one of them requires you personally, in your own browser, logged into your own accounts — this session has confirmed, repeatedly and from multiple angles across four commands now, that it has no path to complete any of them itself.
