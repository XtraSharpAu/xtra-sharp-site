# SEO Pack — Xtra Sharp

Full strategic SEO pack. For the code-level implementation reference (how metadata/schema are actually wired up), see `docs/seo-guide.md` and `docs/metadata.md`. This document is the strategy and planning layer; those are the technical layer.

---

## 1. SEO Strategy

Xtra Sharp is a single-operator, appointment-only sharpening business serving one physical drop-off point (Woodbine, listed publicly as Campbelltown NSW) plus Australia-wide mail-in. The SEO strategy follows directly from that shape of business:

- **Hyper-local intent capture** is the primary opportunity: "knife sharpening Campbelltown," "sharpening near me" type searches from people within realistic drop-off range (Campbelltown + the Macarthur region).
- **National long-tail capture** is the secondary opportunity: mail-in sharpening has no geographic ceiling, so "mail in knife sharpening Australia" style searches matter too, but compete against national/multi-location competitors.
- **Service-specific pages beat one generic page.** Five dedicated service pages (Knife, Scissors, Clipper Blades, Garden Tools, Processor Blades), each targeting its own keyword cluster, outperform a single "services" page for ranking on service+location queries, because each page can have a tightly-matched title, H1, and on-page content for its own keyword set without diluting relevance across unrelated services.
- **Trust signals over volume.** With no reviews yet live in schema and no large marketing budget, the realistic near-term SEO lever is *correctness and completeness* (accurate NAP, working schema, fast pages, genuinely useful on-page content) rather than outranking established multi-location competitors on competitive head terms immediately.
- **Local pack (Google Business Profile) matters as much as organic web results** for this business shape — most "near me" searches surface the Local Pack above organic listings. GBP optimisation (Section 18 below) is not a secondary channel here, it's co-equal with the website.

## 2. Keyword List (Primary, Per Service)

| Service | Primary keywords |
|---|---|
| Knife Sharpening | knife sharpening Campbelltown, knife sharpening near me, professional knife sharpening NSW, kitchen knife sharpening service, butcher knife sharpening |
| Scissors Sharpening | scissor sharpening Campbelltown, hairdressing scissor sharpening, barber scissor sharpening, scissor sharpening near me, grooming scissor sharpening |
| Clipper Blades | clipper blade sharpening, A5 blade sharpening, dog groomer clipper sharpening, pet clipper blade sharpening Campbelltown |
| Garden Tools | garden tool sharpening, secateur sharpening, hedge shear sharpening, axe sharpening Campbelltown |
| Processor Blades | processor blade sharpening, food processor blade sharpening, industrial blade sharpening NSW |
| Pricing/General | sharpening prices Campbelltown, how much does knife sharpening cost, sharpening service Macarthur region |
| Mail-In | mail in knife sharpening Australia, postal sharpening service, sharpening service Australia wide |

## 3. Long-Tail Keyword List

- "where can I get my kitchen knives sharpened in Campbelltown"
- "hairdressing scissors sharpening bevel vs convex"
- "how much does it cost to sharpen hunting knives NSW"
- "best way to post knives for sharpening Australia"
- "dog grooming clipper blade sharpening near Campbelltown"
- "sharpening service that does drop off Woodbine NSW"
- "how long does mail in knife sharpening take"
- "sharpening service for restaurants Macarthur region"
- "secateur and hedge shear sharpening Campbelltown"
- "processor blade sharpening for butchers NSW"
- "water cooled knife sharpening vs dry grinding"
- "machine guided scissor sharpening explained"
- "how to pack knives to post for sharpening"
- "prepaid Australia Post satchel for sharpening service"
- "sharpening service near Camden Narellan Oran Park"

## 4. Competitor Keyword Gap Analysis (Methodology + Findings Framework)

No live competitor keyword-rank data has been pulled for this pack (that requires a paid tool such as Ahrefs/SEMrush/Moz, which this project has no access to from this environment). What follows is the **analysis framework** to run once such a tool is available, plus the structural gaps that are visible without one:

**How to run it:**
1. Identify 3–5 real competing sharpening services serving Western Sydney/Macarthur (mobile sharpening vans, other drop-off services, mail-in-only competitors).
2. Pull their ranking keywords via Ahrefs "Organic Keywords" or SEMrush "Organic Research."
3. Filter for keywords they rank top-10 for that Xtra Sharp does not currently target on any page (cross-reference against Section 2's keyword list).
4. Prioritise gaps by estimated search volume × realistic winnability (a hyper-local, appointment-only single-operator business should prioritise long-tail and local-intent gaps over head terms dominated by national brands or multi-location chains).

**Structurally visible gap (no tool required):** most competing sharpening services bundle everything onto one "services" page. Xtra Sharp's five dedicated service pages are already a structural advantage for the service+location long tail — the gap to close is content depth per page (see Section 7, "Content Length Recommendations") and the missing cross-linking between service pages (see `docs/seo-guide.md`'s "Internal Linking Rules" gap note).

## 5. On-Page SEO Plan (Per Page)

| Page | Target keyword cluster | H1 | On-page focus |
|---|---|---|---|
| `/` | "sharpening service Campbelltown," brand | Sharpening Services — Knives, Scissors, Clipper Blades & More | Overview + links out to every service page; this page should never try to outrank the dedicated service pages for their own terms |
| `/knife-sharpening` | knife sharpening + location | Knife Sharpening | Expand water-cooled sharpening explanation; add knife-type examples (currently trimmed during the rebuild — see `docs/content-expansion-pack.md`) |
| `/scissors-sharpening` | scissors sharpening + location, bevel/convex | Scissors Sharpening | Add a short bevel-vs-convex explainer (genuine differentiator, currently unaddressed on-page) |
| `/clipper-blades` | clipper blade sharpening, groomer-facing | Clipper Blade Sharpening | Add the promised machine photo (still outstanding); groomer/vet-specific language already present in item list |
| `/garden-tools` | garden tool sharpening | Garden Tools Sharpening | Currently thin (shortest of the 5 service pages) — good candidate for content expansion first |
| `/processor-blades` | processor blade sharpening, B2B/butcher-facing | Processor Blade Sharpening | Add explicit "for butchers, restaurants, food processors" framing — currently implicit only |
| `/pricing` | sharpening prices Campbelltown | Pricing | Already strong — comprehensive, single source of truth |
| `/mail-in` | mail in sharpening Australia | Mail-In Sharpening | Already strong — detailed 12-step process |
| `/service-area` | sharpening near me, suburb names | Service Area | Suburb pill-list is a real local-SEO asset; keep expanding as service area grows |
| `/faq` | question-form queries | Frequently Asked Questions | Good FAQ schema coverage; expand schema to match all 11 visible Q&As (currently only 3 marked up — see `docs/schema.md`) |
| `/contact` | contact/phone intent | Contact | Fine as-is; not a ranking-target page, it's a conversion page |

## 6. Internal Linking Strategy

- **Hub-and-spoke from Home**: Home links to every service page (already implemented via the service overview cards) plus Pricing and Service Area.
- **Cross-linking between service pages** (gap, not yet implemented): each service page should link to at least one other relevant service page in a "You might also need" style module — e.g. Knife Sharpening → Garden Tools (same water-cooled process), Scissors → Clipper Blades (same machine-guided process, groomer/salon overlap audience).
- **Pricing as a hub**: every service page's pricing section could link to `/pricing` for "see full price list" (currently only Home and Mail-In do this).
- **FAQ as a link target**: service pages could link to relevant FAQ questions (e.g. Mail-In page linking to the FAQ's packing-instructions question) instead of only duplicating the content.

## 7. External Linking Strategy

- **Outbound links** currently exist only to Australia Post's satchel calculator page (`rel="noopener noreferrer"`, opens in new tab) — appropriate, low-risk, genuinely useful to the visitor.
- **Inbound link building (backlinks)** is the real opportunity and currently untouched:
  - Local business directories: True Local, Yellow Pages, Localsearch, Yelp AU — free listings, direct NAP consistency benefit (see Section 20).
  - Local community: Campbelltown/Macarthur community Facebook groups, local council business directory if one exists.
  - Supplier/brand relationships: Mirror Cut® and Flamin' Sharp are both named certifications/licensee relationships on the site — reach out to see if either maintains a "find a sharpener" directory that would link back.
  - Complementary local businesses: hairdressers/groomers/butchers/restaurants who are customers could be asked for a reciprocal mention or link (a natural fit given the B2B service pages already targeting them).

## 8. Image Alt-Text Strategy

No real photographs exist yet (see `docs/image-handling.md`), so this is a forward-looking spec for when they're added:

- **Pattern**: `[Subject] being sharpened at Xtra Sharp, Campbelltown NSW` or `[Equipment name] used for [service] at Xtra Sharp` (matching the alt text already specified for the outstanding clipper machine photo: "Automated clipper blade sharpening machine used for A5, wide and large-animal blades.")
- **Never** keyword-stuff alt text beyond what accurately describes the image.
- **OG images** don't need alt text in the same sense (social platforms generate their own), but any in-page `<img>`/`next/image` usage must have descriptive alt text per WCAG (see `docs/accessibility-pack.md`).

## 9. Meta Titles, Descriptions, OG, Twitter, Canonical — Per Page

Fully documented, exact current values, in `docs/metadata.md`. Not duplicated here to avoid the two documents drifting out of sync — `docs/metadata.md` is the single source of truth for current metadata values.

## 10. URL Structure Optimisation

Current structure is already good practice: flat, short, keyword-relevant, no query parameters, no unnecessary nesting (`/knife-sharpening` not `/services/knife-sharpening`). Two historical corrections already made:

- `/mail-in-sharpening` → `/mail-in` (shorter, cleaner)
- `/scissors` (never built) → `/scissors-sharpening` (nav corrected to match the real page)

**Recommendation**: if `/mail-in-sharpening` has any existing external backlinks or bookmarks (unknown without analytics/Search Console access), add a 301 redirect rather than leaving it as a hard 404 — see `docs/maintenance.md`.

## 11. Heading Structure Optimisation

Already consistent site-wide (see `docs/content-style-guide.md`'s "Headings" section): one H1 per page in the hero, H2 per major section, H3 only for sub-groupings, no skipped levels. This is a genuine strength — verified across all 11 canonical pages during the rebuild.

## 12. Content Length Recommendations

| Page | Current approx. word count | Recommendation |
|---|---|---|
| `/garden-tools` | ~180 words | Expand — shortest service page; add more tool-type detail |
| `/processor-blades` | ~190 words | Expand — add B2B framing (butchers, restaurants, food processors) |
| `/clipper-blades` | ~220 words | Expand once the machine photo is added — a photo + caption naturally invites more surrounding text |
| `/knife-sharpening` | ~230 words | Slight expansion — restore some of the pre-rebuild "knife types sharpened" detail as a supplementary section without breaking the now-standardized layout |
| `/scissors-sharpening` | ~240 words | Add bevel-vs-convex explainer (Section 5) |
| `/pricing`, `/mail-in`, `/service-area` | 400+ words each | Already strong, no action needed |

General guideline: 300–600 words of genuine on-page content per service page is a reasonable target for competing on service+location long-tail terms without padding — never pad with filler to hit a word count; every sentence added should answer a real customer question.

## 13. Schema Markup Plan

Fully documented and already implemented in `docs/schema.md` — LocalBusiness (global), Service (5 pages), FAQPage, ContactPage, BreadcrumbList (10 pages). Remaining gap: FAQPage schema currently covers 3 of 11 visible questions; expand to all 11.

## 14. Local SEO Plan for Campbelltown NSW

1. **NAP consistency** (Section 20) is the foundation — get this right everywhere before anything else.
2. **Google Business Profile** (Section 18) — the single highest-leverage local SEO action available to this business.
3. **Service-area pill list** (already implemented on `/service-area`) — lists every Macarthur suburb served; this is genuinely useful both to users and to local relevance signals.
4. **LocalBusiness schema** (already implemented) with correct `addressLocality`/`addressRegion` — done.
5. **Local directory citations** (Section 7) reinforce the same NAP data across the web, which is a known local-ranking factor.
6. **Local content**: the suburb-specific long-tail keywords in Section 3 ("sharpening service near Camden Narellan Oran Park") suggest a future FAQ entry or Service Area page expansion explicitly naming these suburbs in body copy, not just the pill list (pill-list text is real content but a sentence naming 2–3 suburbs reads more naturally to both users and crawlers).

## 15. Google Business Profile Optimisation

- **Category**: Primary category should be "Knife Sharpening Service" if available in Google's category list, or the closest match ("Sharpening Service" / "Tool Repair Shop"). Secondary categories can include categories relevant to scissors/clipper blade servicing if Google offers them.
- **Service area business, not storefront**: since there's no public walk-in storefront (appointment-only, address given after booking), the GBP profile should be configured as a "service area business" hiding the exact address, listing Campbelltown NSW + the Macarthur suburbs from `/service-area` as the service area.
- **Services section**: list all 5 services (Knife, Scissors, Clipper Blades, Garden Tools, Processor Blades) individually with the same pricing shown on `/pricing`, kept in sync with the master pricing table (`docs/schema.md`).
- **Photos**: once real photos exist (`docs/image-handling.md`), upload them to GBP too — GBP listings with photos get significantly more engagement.
- **Posts**: use the 20 GBP post drafts in `docs/marketing-pack/google-business-posts.md`.
- **Q&A section**: seed it with the same top questions from `/faq` to capture that search surface too.
- **Booking/contact**: link directly to `/contact` and the `tel:` number.

## 16. Review Acquisition Strategy

No reviews currently exist in any schema on the site (deliberately — see `docs/schema.md`'s "Untapped Schema Opportunities"). Real strategy, not a shortcut:

1. **Ask at the moment of highest satisfaction**: when a customer picks up freshly sharpened items, that's the best moment to ask for a Google review — verbally, plus a short follow-up SMS/email with a direct review link (see `docs/marketing-pack/sms-templates.md` and `email-templates.md` for drafted asks).
2. **Make it a two-click action**: a direct GBP review link (`https://g.page/r/<place-id>/review` once the GBP listing exists) removes friction versus asking someone to search for the business.
3. **Never incentivize reviews with discounts** — this violates Google's review policies and, if discovered, risks the whole GBP listing.
4. **Once real reviews exist**, add `AggregateRating` schema reflecting the *actual* current rating/count pulled from GBP — never a static or estimated number.
5. **Respond to every review**, positive or negative — response rate and recency are both signals Google's local algorithm considers.

## 17. NAP Consistency Plan

"NAP" = Name, Address, Phone — must be identical, character-for-character, everywhere it appears.

**Canonical NAP** (as currently used in `LocalBusiness` schema and site-wide):
- **Name**: Xtra Sharp
- **Address**: Woodbine, Campbelltown NSW (public-facing; full street address given after booking — currently the footer shows a specific street address, "22 Queenscliff Drive, Woodbine NSW," which is more specific than the "address provided after booking" language used elsewhere on the site — **this is an inconsistency worth resolving**: either the footer address is meant to be public and other pages should stop saying "provided after booking," or the footer should be pulled back to match the appointment-only framing used everywhere else)
- **Phone**: 0412 974 277

**Action items:**
1. Resolve the footer-address vs. "provided after booking" inconsistency noted above — this is the one real NAP gap found in this audit.
2. Once resolved, ensure the same resolved address format is used identically across: `LocalBusiness` schema, footer, `/contact`, `/service-area`, and every external directory listing (Section 7).
3. Phone number formatting is already consistent site-wide (`0412 974 277` in visible text, per `docs/content-style-guide.md`).
