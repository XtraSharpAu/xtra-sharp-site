# Structured Data — BreadcrumbList Expansion (Command 24)

## Correction to the command's page list

Command 24 asked for `BreadcrumbList` JSON-LD to be added to "the remaining 11 pages: About, Batch, Commercial, Gallery, How It Works, Privacy, Terms, Thank You, Tips, Service Area, Mail-In."

That list was checked against the live codebase before any edits were made (`grep -c 'BreadcrumbList' src/app/*/page.tsx`), because `seo-validation.md` (Command 23) had already recorded "10/21 pages have it" — one short of the "11 remaining" the command implied. The check found:

- **Service Area** and **Mail-In** already had `BreadcrumbList` (added earlier in the session). Including them again would have been a no-op, but keeping them in the plan without checking would have meant delivering coverage that looked complete without actually verifying it.
- **Home** and **Services** were missing it, but neither was named in the command's list.

The actual 11 pages missing `BreadcrumbList` before this command were: **Home, About, Batch, Commercial, Gallery, How It Works, Privacy, Services, Terms, Thank You, Tips.**

## What was implemented

`BreadcrumbList` was added to 10 of those 11 pages, using the existing `src/components/Breadcrumbs.tsx` component (already in use on Pricing, Contact, FAQ, Service Area, Mail-In, and the five service pages) — no new schema pattern was introduced:

| Page | Breadcrumb trail |
|---|---|
| About | Home → About |
| Batch | Home → Batch Sharpening |
| Commercial | Home → Commercial Clients |
| Gallery | Home → Gallery |
| How It Works | Home → How It Works |
| Privacy | Home → Privacy Policy |
| Services | Home → Services |
| Terms | Home → Service Terms |
| Thank You | Home → Thank You |
| Tips | Home → Sharpening Tips & Advice |

**Home was deliberately excluded.** A single-item breadcrumb trail ("Home" pointing to itself) is not meaningful `BreadcrumbList` data — Google's own guidance and standard SEO practice treat the homepage as the implicit root and don't apply breadcrumb schema to it. An earlier attempt to add one was reverted for this reason (see git history on `src/app/page.tsx` — no net change was committed there for this command).

## Real coverage: 20/21, not 21/21

Command 24's expected result described "Structured data complete across all 21 pages." That figure is not accurate, and `docs/launch-summary.md` is being corrected to state **20/21** — every page except Home, which is out of scope by convention as explained above. This is the honest number; reporting 21/21 would count a breadcrumb block that shouldn't exist.

Full page-by-page state after this command:

| Page | BreadcrumbList |
|---|---|
| Home | Not applicable (root page) |
| About, Batch, Clipper Blades, Commercial, Contact, FAQ, Gallery, Garden Tools, How It Works, Knife Sharpening, Mail-In, Pricing, Privacy, Processor Blades, Scissors Sharpening, Service Area, Services, Terms, Thank You, Tips | ✅ |

20 of 21 routes carry `BreadcrumbList`; the 21st (Home) is intentionally excluded.

## Validation methodology

Command 24 asked for validation with "Google's Rich Results Test." That tool is unreachable from this environment — consistent with every prior command in this session (confirmed again via `curl` against `google.com` returning a proxy 403, and `$HTTPS_PROXY/__agentproxy/status` showing the domain outside the outbound allowlist). No prior command has been able to reach it either, so this isn't a new limitation.

In its place, **local structural validation** was performed against a real production-equivalent build:

1. `npm run build && npm run start` (port 3921).
2. For each of the 10 newly-updated pages, fetched the rendered HTML with Python's `urllib.request`.
3. Extracted every `<script type="application/ld+json">` block with a regex and parsed each with `json.loads`.
4. Verified, for the `BreadcrumbList` block specifically:
   - Valid JSON (no parse errors).
   - `@context` is `https://schema.org` and `@type` is `BreadcrumbList`.
   - `itemListElement` is present and each entry has `@type: "ListItem"`.
   - `position` values are sequential integers starting at 1.
   - `name` and `item` are both present and non-empty on every entry.

All 10 pages passed on every check. This confirms the JSON-LD is well-formed and schema-shaped; it is **not** the same as Google's own Rich Results Test, which additionally checks against Google's current live parsing rules and search-eligibility criteria — those can only be confirmed by the site owner running the real tool from a normal browser once the site is live.

## Files changed

- `src/app/about/page.tsx`
- `src/app/batch/page.tsx`
- `src/app/commercial/page.tsx`
- `src/app/gallery/page.tsx`
- `src/app/how-it-works/page.tsx`
- `src/app/privacy/page.tsx`
- `src/app/services/page.tsx`
- `src/app/terms/page.tsx`
- `src/app/thank-you/page.tsx`
- `src/app/tips/page.tsx`

No changes to `src/components/Breadcrumbs.tsx` or `src/components/JsonLd.tsx` — the existing pattern was reused as-is.
