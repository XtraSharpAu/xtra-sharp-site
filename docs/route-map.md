# Route Map

Companion to `docs/routes.md` (which is the authoritative route table). This document is the structural/navigational view: how routes connect to each other through nav, footer, and in-page links.

## Site Map (Visual)

```
Home (/)
├── Knife Sharpening (/knife-sharpening)
├── Scissors Sharpening (/scissors-sharpening)          [nav label: "Scissors"]
├── Clipper Blade Sharpening (/clipper-blades)
├── Garden Tools Sharpening (/garden-tools)
├── Processor Blade Sharpening (/processor-blades)
├── Pricing (/pricing)
├── Mail-In Sharpening (/mail-in)                       [nav label: "Mail-In Sharpening"]
├── Service Area (/service-area)
├── About (/about)
├── FAQ (/faq)
└── Contact (/contact)
    └── → Thank You (/thank-you)  [not currently linked from anywhere — see note below]

Footer-only:
├── Terms of Service (/terms)
└── Privacy Policy (/privacy)

Unlinked from nav or footer (legacy, still routable):
├── Services & Pricing (/services)
├── How It Works (/how-it-works)
├── Commercial Clients (/commercial)
├── Batch Sharpening (/batch)
├── Sharpening Tips & Advice (/tips)
└── Gallery (/gallery)
```

**Note on `/thank-you`**: this page exists and is `noindex`ed, but nothing on the live site currently links to it — the contact form (`ContactForm.tsx`) builds a `mailto:` link rather than navigating anywhere on submit (see `docs/maintenance.md` item #1), so `/thank-you` is presently orphaned. It would only make sense to link to again if the contact form is upgraded to a real server-side submission that can redirect on success.

## Header Navigation Structure

Defined in `src/components/Header.tsx`, identical on every page. Left to right:

1. **Logo/wordmark** ("Xtra Sharp") → `/`
2. **Nav links** (in this exact order): Home, Knife Sharpening, Scissors, Clipper Blades, Garden Tools, Processor Blades, Mail-In Sharpening, Pricing, Service Area, About, FAQ, Contact
3. **Phone number** (text, `0412 974 277`, hidden below `sm:` breakpoint) → `tel:0412974277`
4. **Call Now button** → `tel:0412974277`

11 links total, all site-wide, all equally weighted (no dropdown/mega-menu grouping). This is a flat, wide nav by design — appropriate for a small site with no deep hierarchy.

## Footer Structure

Defined in `src/components/Footer.tsx`, identical on every page:

1. Business name + tagline: "Xtra Sharp — Professional Knife & Tool Sharpening"
2. "Campbelltown NSW • Servicing Macarthur Since 2013"
3. "Cash, card, and internet banking accepted."
4. Contact row: Phone (`tel:` link) | Email (`mailto:` link) | Location (Google Maps link, "22 Queenscliff Drive, Woodbine NSW") | Service Area (Google Maps search link, "Campbelltown & Western Sydney")
5. Legal links: Terms of Service (`/terms`) | Privacy Policy (`/privacy`)
6. Copyright line with dynamic year

> See `docs/seo-pack.md` Section 17 (NAP Consistency Plan) for the flagged inconsistency between the footer's specific street address and the "address provided after booking" language used elsewhere on the site.

## Internal Linking Map (In-Page Links, Beyond Nav/Footer)

| From | Links to | Context |
|---|---|---|
| `/` (Home) | `/pricing` | "View Full Pricing →" under the pricing preview |
| `/` (Home) | `/service-area` | "View Service Area →" under the service area summary |
| `/mail-in` | `/pricing` | "View Full Pricing →" under the pricing reference |
| `/mail-in`, `/faq`, `/contact`, `/service-area` | Australia Post satchel calculator (external) | Return-postage explanation |

**Gap** (flagged in `docs/seo-pack.md` Section 6): no service page currently links to another service page. Recommended cross-links:

| From | To | Rationale |
|---|---|---|
| `/knife-sharpening` | `/garden-tools` | Same water-cooled process |
| `/garden-tools` | `/knife-sharpening` | Same water-cooled process |
| `/scissors-sharpening` | `/clipper-blades` | Same machine-guided process, groomer/salon audience overlap |
| `/clipper-blades` | `/scissors-sharpening` | Same machine-guided process, groomer/salon audience overlap |
| Every service page | `/pricing` | "See full price list" (currently only Home and Mail-In do this) |
| Every service page | Relevant `/faq` question | Reduce duplicated packing/turnaround explanations by linking to the canonical FAQ answer where appropriate |

## Redirect Map

| Old path | New path | Status |
|---|---|---|
| `/mail-in-sharpening` | `/mail-in` | **No redirect configured** — old path now hard 404s via `not-found.tsx`. See `docs/seo-pack.md` Section 10 for the recommendation to add a 301 if external links exist. |
| `/scissors` | `/scissors-sharpening` | Never had a real page; nav was corrected instead of building a redirect target. |
