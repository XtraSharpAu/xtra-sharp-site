# Website Audit Pack

A consolidated audit report. Full detail for several of these audit areas already exists as dedicated documents (linked below) — this file adds the genuinely new audit angles (content consistency, structure) with fresh findings from re-scanning the current codebase, and gives a single pass/fail summary view across all areas.

## Audit Summary

| Area | Status | Detail |
|---|---|---|
| Content consistency | ⚠️ Minor issues found | See below |
| SEO | ✅ Strong on canonical pages, ⚠️ gaps on legacy pages | `docs/seo-pack.md` |
| Accessibility | ✅ Passes WCAG AA | `docs/accessibility-pack.md` |
| Performance | ✅ Strong (static site, minimal JS) | `docs/performance-pack.md` |
| Structure | ✅ Consistent on canonical pages, ⚠️ legacy pages diverge | See below |
| Metadata | ✅ Complete on canonical pages, ⚠️ missing OG/Twitter on legacy pages | `docs/metadata.md` |
| Schema | ✅ Implemented across all applicable types | `docs/schema.md` |
| Internal linking | ✅ No broken links found, ⚠️ cross-linking gap | `docs/route-map.md` |

## Full Content Audit

Re-scanned directly against the current codebase (not assumed from memory):

- **Phone number**: `grep`-checked across every `.tsx` file — 100% consistent as `0412 974 277` / `tel:0412974277`. No anomalies found.
- **Email**: 100% consistent as `phil@xtrasharp.com.au` everywhere it appears. No anomalies found.
- **Pricing consistency**: the 5 canonical service pages, `/pricing`, and `/mail-in`'s pricing reference all match the master table in `docs/schema.md` exactly (verified during this pack's construction). **`/services` (legacy) still contains stale pricing** from before the master pricing standardization — confirmed present via direct grep during this audit. This is the one confirmed live content inconsistency on the site. `/commercial` and `/batch` describe categories/services generally without listing specific stale prices, so they're less urgent but still due for a content refresh per `docs/maintenance.md` item #2.
- **Location language**: "Woodbine, listed publicly as Campbelltown NSW" phrasing used consistently across all canonical pages that reference the physical location.
- **NAP (footer address)**: flagged in `docs/seo-pack.md` Section 17 — footer shows a specific street address while several pages say "provided after booking." Still unresolved as of this audit.

## Full Structure Audit

- All 11 canonical pages follow the identical section pattern documented in `docs/content-style-guide.md` — verified structurally consistent (hero → process → pricing → drop-off → mail-in → turnaround → notes → CTA) across all 5 service pages specifically.
- Heading hierarchy (H1 → H2 → H3, never skipped) holds across every canonical page.
- **Legacy pages (`/about`, `/services`, `/how-it-works`, `/commercial`, `/batch`, `/tips`, `/gallery`, `/terms`, `/privacy`, `/thank-you`) do not follow the canonical section pattern** — each uses its own one-off component structure (see `docs/components.md`'s per-page component list). This is expected (they predate the standardization) but means the site currently has two structural "eras" live simultaneously.

## SEO Audit

Full detail in `docs/seo-pack.md`. Summary finding: canonical pages are strong (keyword-targeted titles, full OG/Twitter/canonical, Service schema, breadcrumbs). Legacy pages have title/description/canonical but no OG/Twitter (confirmed gap, not an oversight to silently fix with invented copy — see `docs/metadata.md`).

## Accessibility Audit

Full detail in `docs/accessibility-pack.md`. Summary finding: passes WCAG AA site-wide on computed contrast ratios; real gaps are the absence of a skip-to-content link and unverified custom focus styling on the red CTA buttons.

## Performance Audit

Full detail in `docs/performance-pack.md`. Summary finding: strong by default (100% static rendering, near-zero client-side JS, self-hosted fonts, no third-party scripts). No performance debt currently exists; the main forward-looking risk is unoptimised images once real photography is added.

## Metadata Audit

Full detail in `docs/metadata.md`. Summary finding: complete and correct on all 11 canonical pages; the 10 legacy pages have title/description/canonical only.

## Schema Audit

Full detail in `docs/schema.md`. Summary finding: `LocalBusiness` (global), `Service` (5 pages), `FAQPage` (partial — 3 of 11 visible questions marked up), `ContactPage`, and `BreadcrumbList` (10 pages) are all implemented and rendering correctly. No schema validation errors found (a successful production build plus the JSON-LD rendering checks performed during earlier work in this pack confirm valid JSON on every page).

## Internal Linking Audit

Re-scanned directly: every `href="/..."` found across `src/app` and `src/components` resolves to a real, existing route — **no broken internal links found** in this audit. Full linking map and the identified cross-linking gap (service pages don't link to each other) documented in `docs/route-map.md`.
