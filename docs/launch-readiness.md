# Launch Readiness Review

Same discipline as `docs/deployment-audit.md`: this file separates what was actually checked in the codebase from what requires access this environment doesn't have (Google Business Profile, Google Search Console, Google Analytics — all external accounts, no credentials or network access to google.com exist in this session). Nothing below is presented as verified unless it genuinely was.

## 1. Domain and Google Business Profile Alignment

**Domain — verified from the codebase.** `https://xtrasharp.com.au` is used consistently everywhere a canonical/absolute URL appears (metadata, JSON-LD, OG images, sitemap) — no alternate domain, no stray `www.` variant, no mismatch found. The domain name itself matches the business name ("Xtra Sharp") and the `LocalBusiness` JSON-LD in `src/app/layout.tsx` states the location as Campbelltown NSW.

**Google Business Profile — could not verify.** This requires being logged into the actual GBP listing (business.google.com), which this session has no access to, and no network route to any google.com domain at all (confirmed in the prior deployment audit: proxy policy blocks it outright). None of the following were checked and none should be assumed:
- Whether GBP's listed phone number matches 0412 974 277
- Whether GBP's listed suburb matches Campbelltown NSW
- Whether GBP's service scope/categories match what the site actually offers
- Whether GBP's website link points to `https://xtrasharp.com.au`

**What would resolve this**: log into the Google Business Profile dashboard directly and check the listing against `docs/schema.md`'s LocalBusiness data (phone, address, service area) for a mismatch.

## 2. Branding Consistency

**Favicon** — present and correctly wired. `src/app/favicon.ico` uses Next.js's App Router auto-detection convention; confirmed rendering as `<link rel="icon" href="/favicon.ico" ...>` in built HTML in earlier commands this session.

**OpenGraph / Twitter cards** — already extensively audited and fixed in prior commands. All 21 pages have `openGraph` and `twitter` metadata blocks with correct titles, descriptions, and image URLs (Command 7 added the missing blocks, Command 8 generated the missing image files, Command 15 corrected the title/description text itself).

**Tagline consistency** — the site's actual tagline is "Professional Knife & Tool Sharpening • Campbelltown NSW" (ampersand + bullet, not the literal "and"/"–" phrasing in the command). It appears verbatim in `AboutHero.tsx`, `GalleryHero.tsx`, `ServiceAreaHero.tsx`, and the Footer's copyright line. This is the same tagline in substance; the punctuation style (`&`/`•`) matches how every other conjunction is formatted site-wide ("Terms & Conditions", "Drop-Off • Mail-In • Pick-Up"), so it wasn't rewritten to chase an exact-string match that isn't itself established anywhere in the live site.
One component, `src/components/Hero.tsx`, has the tagline without the "Campbelltown NSW" suffix — but it's dead code, not imported by any page, so it has zero effect on what a visitor actually sees. Noted, not touched.

**Phone number and suburb in Header / Footer / Contact:**
- Footer: phone (0412 974 277) and "Campbelltown" both present, multiple times.
- Contact page: phone and "Campbelltown" both present extensively.
- Header: the phone number is present (both as visible text and the "Call Now" CTA), but **the word "Campbelltown" does not appear anywhere in the header** — it's a compact nav bar (brand name, 11 nav links, phone, CTA button) with no suburb text at all. This is a real gap against the literal ask, flagged rather than silently fixed: every page's `<title>` already contains "Xtra Sharp Campbelltown NSW" (visible in the browser tab on every single page after the page-SEO-audit command), and the location is one click away via any nav link, but the header itself carries no location text. Adding it would mean squeezing more text into an already-dense, tested nav bar — left as a call for the site owner rather than assumed.

## 3. Public Copy Review

**"Campbelltown NSW" coverage** — every one of the 21 live pages mentions "Campbelltown" at least once in its visible content (ranging from 1 mention on utility pages like `/thank-you` to 10 on core service pages). No page is silent on location.

**"Mail-in sharpening Australia-wide" coverage** — present clearly on every core service/booking page (Home, Mail-In, Pricing, Service Area, and all 5 category pages). A few pages (About, Gallery, Terms, Privacy, Thank You, Tips) don't use that literal phrase, but none of them are service-scope pages where it would be relevant — About is the business story, Gallery is photos, Terms/Privacy are legal, Thank You is a confirmation page. Not a gap.

**"Mobile" / "on-site" sharpening — found, and deliberately not removed.** Every single mention of "mobile" or "on-site" sharpening across the entire codebase (8 pages) is the exact same accurate disclaimer: *"No mobile sharpening"* / *"No on-site sharpening"*, in an "Important Notes" list, plus a dedicated "No Mobile Sharpening" section on `/service-area`. There is **zero** instance anywhere on the site that claims or advertises mobile or on-site service. Reading the task literally ("ensure no references... remain") and deleting these would remove accurate information a customer needs before calling — someone who assumes Xtra Sharp comes to them would be disappointed, and the business would field avoidable calls asking about a service it doesn't offer. The two readings genuinely point in opposite directions here, so this was a judgment call: the disclaimers stayed, since the site currently makes no false claim about mobile/on-site service, which is what actually matters for launch accuracy.

**Spelling and tone** — scanned for common typos (recieve, seperate, occured, untill, definately, thier, alot, etc.) and brand-name inconsistency (Xtra Sharp vs. XtraSharp/Xtrasharp) across every page and component: zero hits. Tone across service descriptions was already reviewed for professionalism/directness in the earlier shared-component and page-level content audits this session.

## 4. Analytics and Monitoring

**Google Search Console — could not verify.** Same reason as GBP: this is an external Google account property with no API access or credentials available to this session.

**Google Analytics 4 — checked directly in the codebase, and it is genuinely absent.** Searched every file under `src/` for any GA4/gtag implementation (`gtag`, `google-analytics`, `googletagmanager`, a `G-XXXXXXXX` measurement ID pattern) and `package.json` for any analytics dependency (including `@vercel/analytics`): **zero matches, in every case.** There is no analytics tag of any kind on this site — not GA4, not Vercel Analytics, nothing. This isn't a partial or misconfigured setup to fix; there's nothing here to fix, because nothing was ever added. **This is a real pre-launch gap, not a false positive.** It was not fabricated as present, and a fake/placeholder measurement ID was not inserted — that would silently fail to track anything while giving false confidence that analytics exist. Adding a real GA4 tag needs an actual GA4 property Measurement ID from the site owner first.

**Sitemap.xml — file itself is correct and current** (verified in a prior command: all 20 live routes present, `/thank-you` correctly excluded, `lastmod` dates current). **Submission and indexing status in Search Console could not be checked** — that's Google-side state, not something the file itself can confirm.

## 5. Final Pre-Launch Checklist

| Item | Status |
|---|---|
| Domain matches business name/location | ✅ Verified in codebase |
| Google Business Profile phone/suburb/scope match | ❓ **Not verified — needs manual check in GBP dashboard** |
| GBP website link points to xtrasharp.com.au | ❓ **Not verified — same reason** |
| Favicon present and correct | ✅ Verified |
| OG/Twitter metadata on all pages | ✅ Verified (prior commands) |
| Tagline consistent site-wide | ✅ Verified (minor punctuation variant, in substance identical; one unused dead-code component excluded) |
| Phone number in Header/Footer/Contact | ✅ Verified |
| Suburb name in Footer/Contact | ✅ Verified |
| Suburb name in Header | ⚠️ **Missing** — flagged, not changed (see Section 2) |
| "Campbelltown NSW" consistent across public copy | ✅ Verified, every page |
| "Mail-in sharpening Australia-wide" on service pages | ✅ Verified |
| No false "mobile"/"on-site" service claims | ✅ Verified — all mentions are accurate disclaimers, kept intentionally |
| Spelling / brand-name consistency | ✅ Verified, zero issues found |
| Google Search Console property active | ❓ **Not verified — external account, no access** |
| Google Analytics 4 tag present | ❌ **Confirmed absent — real gap, needs a real Measurement ID to fix** |
| sitemap.xml correct and current | ✅ Verified |
| sitemap.xml submitted / pages indexed | ❓ **Not verified — external account, no access** |

**Bottom line**: everything checkable from the code is in good shape. The two items that would actually block "ready for public announcement" are things this session cannot see into — the GBP listing should be checked by hand against the site's real phone/location/service data, and GA4 needs to actually be added (it isn't there at all) before launch, using a real Measurement ID from the site owner.
