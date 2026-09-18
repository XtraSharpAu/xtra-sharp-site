# SEO Guide (Developer Reference)

This is the technical/developer-facing companion to the full strategic `docs/seo-pack.md`. It documents *how SEO is implemented in code* on this site, so any future page follows the same pattern.

## Per-Page Metadata Pattern

Every canonical page exports a `metadata: Metadata` object with this exact shape:

```ts
export const metadata: Metadata = {
  title: "<Page Title> | Xtra Sharp Campbelltown NSW",
  description: "<one-sentence description, ≤160 characters>",
  openGraph: {
    title: "<same as title>",
    description: "<same as description>",
    url: "https://xtrasharp.com.au/<route>",
    type: "website" | "article",
    images: ["https://xtrasharp.com.au/og-<slug>.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "<same as title>",
    description: "<same as description>",
    images: ["https://xtrasharp.com.au/og-<slug>.jpg"],
  },
  other: {
    "twitter:url": "https://xtrasharp.com.au/<route>",
  },
  alternates: {
    canonical: "https://xtrasharp.com.au/<route>",
  },
};
```

Notes on this pattern:

- **`type: "article"` vs `"website"`**: service pages use `"article"`; Home, Pricing, Service Area, Mail-In, Contact, FAQ use `"website"`.
- **`other["twitter:url"]`**: Next.js's typed `Twitter` metadata object has no native `url` field (verified against `node_modules/next/dist/lib/metadata/types/twitter-types.d.ts` — there is no `twitter:url` equivalent in any of the `Twitter` union variants). The `other` field is the documented Next.js escape hatch for emitting arbitrary `<meta name="..." content="...">` tags, so `twitter:url` is added there rather than omitted or faked.
- **`alternates.canonical`**: every page self-canonicalizes to its own URL — there are no duplicate-content variants (no query-param pagination, no trailing-slash variants) that would need a different canonical target.
- **Never put page-specific `openGraph`/`twitter` in `layout.tsx`.** Next.js metadata merges nested objects up the layout tree — an `openGraph` block in the root layout is inherited as a fallback by every page that doesn't define its own. This actually happened once (Home's OG data leaked onto Contact, FAQ, Pricing, etc. because those pages had no `openGraph` of their own) and was corrected by moving the Home-specific block onto `src/app/page.tsx`. Keep only truly global fields (fallback `title`/`description`, the `LocalBusiness` schema) in the layout.

## Image Asset Naming Convention

OG images follow `og-<slug>.jpg`, referenced by absolute URL (`https://xtrasharp.com.au/og-<slug>.jpg`). **None of these image files currently exist in `public/`** — see `docs/image-handling.md`. The URLs are correct and ready to resolve the moment the files are added; nothing else needs to change.

## Schema Placement

See `docs/schema.md` for the full schema inventory. In short: `LocalBusiness` is global (in `layout.tsx`), `Service`/`FAQPage`/`ContactPage`/`BreadcrumbList` are page-local, all rendered via the shared `<JsonLd>` component as the first child of each page's returned fragment.

## Keyword-to-URL Mapping

| Primary keyword theme | Target URL |
|---|---|
| Knife sharpening Campbelltown | `/knife-sharpening` |
| Scissors sharpening / hairdressing scissors sharpening | `/scissors-sharpening` |
| Clipper blade sharpening | `/clipper-blades` |
| Garden tool / secateurs / hedge shear sharpening | `/garden-tools` |
| Processor blade sharpening | `/processor-blades` |
| Sharpening prices Campbelltown | `/pricing` |
| Mail-in sharpening Australia | `/mail-in` |
| Sharpening near me Campbelltown / Macarthur | `/service-area` |

Each service page targets its own keyword cluster; there is deliberately no overlap in primary target keyword between pages, to avoid internal cannibalization. See `docs/seo-pack.md` Section "On-Page SEO Plan" for the full breakdown per page.

## Internal Linking Rules

- The header nav links to all 11 canonical pages on every page (site-wide, consistent link equity distribution).
- The Home page pricing-preview section links to `/pricing`; the service-area summary links to `/service-area`.
- The Mail-In page's Pricing Reference section links to `/pricing` rather than duplicating the full price table (single source of truth for prices).
- Footer links to `/terms` and `/privacy` site-wide.
- **Gap to close:** individual service pages do not currently cross-link to each other (e.g. Knife Sharpening doesn't link to Scissors Sharpening). See `docs/seo-pack.md` for the proposed cross-linking module.
