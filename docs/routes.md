# Routes

Complete list of live routes, as of this document's last update. Generated from `src/app/*/page.tsx` — if you add or remove a route folder, update this table, `public/sitemap.xml`, and `src/components/Header.tsx`'s `navLinks` together.

## Canonical Service & Info Pages (11)

These are the pages the header navigation links to and the pages that carry the site's primary SEO weight.

| Route | File | Purpose | In nav? |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Home | Yes |
| `/knife-sharpening` | `src/app/knife-sharpening/page.tsx` | Knife sharpening service page | Yes |
| `/scissors-sharpening` | `src/app/scissors-sharpening/page.tsx` | Scissors sharpening service page | Yes (labelled "Scissors") |
| `/clipper-blades` | `src/app/clipper-blades/page.tsx` | Clipper blade sharpening service page | Yes |
| `/garden-tools` | `src/app/garden-tools/page.tsx` | Garden tools sharpening service page | Yes |
| `/processor-blades` | `src/app/processor-blades/page.tsx` | Processor blade sharpening service page | Yes |
| `/pricing` | `src/app/pricing/page.tsx` | Full price list, all categories | Yes |
| `/mail-in` | `src/app/mail-in/page.tsx` | Mail-in sharpening: how it works, satchel sizes, pricing reference | Yes (labelled "Mail-In Sharpening") |
| `/service-area` | `src/app/service-area/page.tsx` | Local coverage, why drop-off only | Yes |
| `/faq` | `src/app/faq/page.tsx` | Common questions + FAQ schema | Yes |
| `/contact` | `src/app/contact/page.tsx` | Phone, contact form, location, hours | Yes |

## Legacy / Secondary Pages (10)

These pages predate the current canonical rebuild and are **not** part of the current master content spec. They remain live and linked from the nav (`/about`) or are orphaned from nav but still routable. They have not been rebuilt to the current section pattern (hero → pricing → drop-off → mail-in → turnaround → notes → CTA) and their copy has not been re-verified against current pricing.

| Route | File | Purpose | In nav? |
|---|---|---|---|
| `/about` | `src/app/about/page.tsx` | Business background | Yes |
| `/services` | `src/app/services/page.tsx` | Older all-in-one services + pricing page | No |
| `/how-it-works` | `src/app/how-it-works/page.tsx` | Step-by-step process explainer | No |
| `/commercial` | `src/app/commercial/page.tsx` | Commercial/B2B clients | No |
| `/batch` | `src/app/batch/page.tsx` | Batch sharpening for schools/salons | No |
| `/tips` | `src/app/tips/page.tsx` | Care tips content | No |
| `/gallery` | `src/app/gallery/page.tsx` | Work examples | No |
| `/terms` | `src/app/terms/page.tsx` | Service terms | Footer only |
| `/privacy` | `src/app/privacy/page.tsx` | Privacy policy | Footer only |
| `/thank-you` | `src/app/thank-you/page.tsx` | Post-form-submission landing page | No (noindex) |

> **Known gap:** `/services`, `/commercial`, and `/batch` describe pricing and item categories from an earlier iteration of the site and have **not** been reconciled with the current master pricing (Knives/Scissors/Clipper Blades/Garden Tools/Processor Blades). Treat any price mentioned on those three pages as stale until they're rebuilt. This is flagged again in `docs/maintenance.md`.

## Special Routes

| Route | File | Purpose |
|---|---|---|
| 404 fallback | `src/app/not-found.tsx` | Custom not-found page, styled to theme |
| Error boundary | `src/app/error.tsx` | Custom error boundary, styled to theme (client component) |

## Retired Routes

| Old route | Replaced by | Reason |
|---|---|---|
| `/mail-in-sharpening` | `/mail-in` | Consolidated onto the shorter canonical route during the full site rebuild; old route deleted to avoid duplicate content. |
| `/scissors` (never built) | `/scissors-sharpening` | Nav originally pointed at `/scissors`, which had no page; resolved in favour of the route the Scissors page was actually built at. |

## Route Naming Convention

- Service pages: `/<service-name>` (no `-sharpening` suffix on Scissors' nav label, but the route itself does carry it — see naming history above).
- No nested/dynamic routes anywhere in the site; every route is a flat top-level folder.
- No trailing slashes; Next.js's default trailing-slash behaviour is unmodified.
