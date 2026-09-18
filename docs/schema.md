# Schema (JSON-LD) Reference

All structured data on the site is rendered through one component, `src/components/JsonLd.tsx`, which takes a plain object and serializes it into a `<script type="application/ld+json">` tag. Every schema block below is real, currently live code — not a proposal.

## 1. LocalBusiness (Global)

Rendered once, in `src/app/layout.tsx`, as the first child of `<body>` — present on every page.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Xtra Sharp",
  "image": "https://xtrasharp.com.au/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Campbelltown",
    "addressRegion": "NSW",
    "addressCountry": "Australia"
  },
  "telephone": "0412 974 277",
  "url": "https://xtrasharp.com.au",
  "description": "Professional sharpening services for knives, scissors, clipper blades, garden tools, processor blades and industrial blades.",
  "areaServed": "Campbelltown NSW, Macarthur region, Australia-wide (mail-in sharpening)"
}
```

> `image` references `https://xtrasharp.com.au/logo.png`, which does not yet exist — see `docs/image-handling.md`.

## 2. Service (5 service pages)

Each of the 5 core service pages has its own `Service` schema, with `minPrice`/`maxPrice` drawn directly from that page's own price list (not invented — see the master pricing table below).

| Page | `serviceType` | `minPrice` | `maxPrice` |
|---|---|---|---|
| `/knife-sharpening` | Knife Sharpening | 6 | 15 |
| `/scissors-sharpening` | Scissors Sharpening | 15 | 70 |
| `/clipper-blades` | Clipper Blade Sharpening | 15 | 20 |
| `/garden-tools` | Garden Tools Sharpening | 15 | 20 |
| `/processor-blades` | Processor Blade Sharpening | 20 | 30 |

Template (Knife Sharpening shown; the other four are identical in shape, differing only in `serviceType`, `areaServed` wording, and the `Offer.priceSpecification` min/max):

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Knife Sharpening",
  "provider": { "@type": "LocalBusiness", "name": "Xtra Sharp" },
  "areaServed": "Campbelltown NSW, Macarthur region, Australia-wide (mail-in)",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "AUD",
      "minPrice": 6,
      "maxPrice": 15
    }
  }
}
```

> Note on Processor Blades: the real price list says "$30 or more depending on size and condition" for large industrial blades — an open-ended upper bound. Schema.org's `PriceSpecification.maxPrice` has no way to express "or more," so `maxPrice: 30` is used as the grounded, literal figure rather than an invented higher number.

## 3. FAQPage (`/faq`)

Three questions are currently marked up in the `FAQPage` schema (a subset of the 11 Q&As visible on the page — schema coverage should ideally match every visible Q&A; see `docs/seo-pack.md` for the recommendation to expand this to all 11):

1. "What items do you sharpen?"
2. "How long does sharpening take?"
3. "Do prices change depending on condition?"

## 4. ContactPage (`/contact`)

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://xtrasharp.com.au/contact",
  "contactType": "Customer Service",
  "telephone": "0412 974 277",
  "email": "phil@xtrasharp.com.au"
}
```

## 5. BreadcrumbList (10 non-home canonical pages)

Rendered via the reusable `src/components/Breadcrumbs.tsx`, which takes an `items: {name, url}[]` array. Every non-home canonical page has a 2-level breadcrumb: Home → itself. Example (`/knife-sharpening`):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xtrasharp.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Knife Sharpening", "item": "https://xtrasharp.com.au/knife-sharpening" }
  ]
}
```

Home itself has no breadcrumb schema (a 1-item "Home" breadcrumb has no SEO value and isn't standard practice).

## Master Pricing Table

This is the single source of truth for pricing referenced throughout this docs pack, the SEO pack, and the marketing pack. If pricing ever changes, update it here first, then propagate to every page listed in `docs/routes.md`.

| Category | Item | Price |
|---|---|---|
| Knives | Small Victorinox paring knives | $6 |
| Knives | Knives (standard) | $10 |
| Knives | Large knives | $15 |
| Knives | Butcher knives | $10 |
| Knives | Hunting knives | $10–$15 |
| Scissors | Hairdressing scissors (bevel) | $50 |
| Scissors | Hairdressing scissors (convex) | $70 |
| Scissors | Grooming scissors (bevel) | $25 |
| Scissors | Grooming scissors (convex) | $35 |
| Scissors | Grooming thinning scissors | $30 |
| Scissors | Sewing / household scissors | $15 |
| Clipper Blades | A5 clipper blades | $15 |
| Clipper Blades | Wide clipper blades | $20 |
| Clipper Blades | Large-animal blades | $20 |
| Garden Tools | Hedge shears | $15 |
| Garden Tools | Secateurs | $15 |
| Garden Tools | Axes / tomahawks | $20 |
| Processor Blades | Home processor blades | $20–$25 |
| Processor Blades | Large industrial blades | $30 or more depending on size and condition |

## Untapped Schema Opportunities

- `AggregateRating`/`Review` — not implemented; no review data exists yet to mark up honestly (adding this without real reviews would be fabricating trust signals — see `docs/seo-pack.md`'s Review Acquisition Strategy for how to actually earn reviews first).
- `OpeningHoursSpecification` on `LocalBusiness` — not implemented, because the business has no fixed hours ("by appointment" only), and schema.org's `OpeningHoursSpecification` is designed for fixed hours, not appointment-only availability. Omitting it is more accurate than inventing hours.
