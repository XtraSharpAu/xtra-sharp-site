# Architecture

## Overview

Xtra Sharp's website is a statically-generated marketing site built on Next.js 16 (App Router) with Tailwind CSS v4. There is no database, no CMS, and no backend API — all page content lives directly in TypeScript/TSX source files as literal copy, and the entire site is prerendered to static HTML at build time (`○ (Static)` for every route).

This is a deliberate choice for a small local service business: no server to maintain, no database to back up, fast page loads, and the entire site's content is versioned in git alongside the code that renders it.

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 16.3.5 (App Router, Turbopack) | File-system routing under `src/app/` |
| UI library | React 19.2.8 | Server Components by default; `"use client"` only where interactivity is required |
| Styling | Tailwind CSS v4 | CSS-first config via `@config` directive, no `tailwind.config.js` JS pipeline beyond the token file |
| Language | TypeScript 5, strict mode | All pages and components are `.tsx` |
| Linting | ESLint 9 + `eslint-config-next` | Run via `npm run lint` |
| Fonts | `next/font/google` (Geist, Geist Mono) | Self-hosted by Next.js at build time, no external font requests at runtime |
| Hosting | Vercel | Static output, zero-config deploys from `main` |

## Directory Structure

```
src/
  app/                  One folder per route (App Router convention)
    layout.tsx          Root layout: <html>/<body>, Header, Footer, global LocalBusiness JSON-LD, global metadata
    page.tsx             Home page (/)
    not-found.tsx         Custom 404
    error.tsx             Custom error boundary (client component)
    <route>/page.tsx      One page.tsx per route, each with its own `metadata` export
  components/            Shared, reusable presentational components
  styles/
    globals.css           Tailwind import + @config directive + base body color rules
docs/                    This documentation pack
public/                  Static assets: sitemap.xml, robots.txt, SVG icons
tailwind.config.ts       Design tokens (colors) referenced by every component via utility classes
```

## Rendering Model

Every route in `src/app/` is a Server Component by default and is statically rendered at `next build` time — confirmed by the build output marking every route `○ (Static)`. Only two components in the whole codebase are Client Components (`"use client"`):

- `src/components/ContactForm.tsx` — needs `useState` for controlled inputs and `onSubmit` to build a `mailto:` link.
- `src/app/error.tsx` — Next.js requires error boundaries to be Client Components.

Everything else — including all page bodies — renders to plain HTML with no client-side JavaScript required for content to appear. This keeps Lighthouse/Core Web Vitals scores high by default and means the site works with JavaScript disabled except for the contact form and the (Next.js built-in) client-side navigation.

## Design Token System

The entire visual theme (light background, black text, red accent) is driven by a small set of Tailwind color tokens defined once in `tailwind.config.ts`:

```ts
colors: {
  background: "#FFFFFF",
  surface: "#F7F7F7",
  text: "#1A1A1A",
  metallic: "#C0C0C0",
  accent: "#C00000",
  ctaRed: "#C00000",
}
```

Every component and page references these via Tailwind utility classes (`bg-background`, `text-text`, `border-metallic/40`, `bg-ctaRed`, `text-accent`, etc.) rather than hard-coded hex values. This means a full site-wide theme change is a one-file edit to `tailwind.config.ts` — this is exactly how the site's dark-to-light theme switch was previously executed.

One deliberate exception: `src/styles/globals.css` sets `background-color`/`color` on the bare `body` selector outside of Tailwind's `@layer`. This is intentional and load-bearing — see `docs/maintenance.md` for why removing it can silently break the theme (this caused a real production bug previously).

## Metadata & Schema Architecture

- **Global metadata** (`src/app/layout.tsx`): fallback `title`/`description`, plus a global `LocalBusiness` JSON-LD block rendered once in `<body>` via the reusable `<JsonLd>` component.
- **Per-page metadata**: each `page.tsx` exports its own `metadata: Metadata` object (title, description, Open Graph, Twitter Card, canonical). Next.js merges nested fields (like `openGraph`) up the layout tree, which is why page-level `openGraph`/`twitter` blocks must live on the page itself, not the shared layout — putting them in the layout causes every page without its own override to inherit the layout's OG data, which happened once and was corrected (see `docs/schema.md`).
- **Per-page schema**: `Service` schema on the 5 service pages, `FAQPage` schema on `/faq`, `ContactPage` schema on `/contact`, and `BreadcrumbList` schema on the 10 non-home canonical pages, each via the reusable `<JsonLd>` component.

## What This Architecture Is Not

- No CMS: content changes require a code change (an intentional choice — every page-build in this project has been driven by exact, literal copy supplied by the site owner, not free text a CMS editor could drift from).
- No server-side form handling: the contact form builds a `mailto:` link client-side; there is no API route, database, or email-sending service. See `docs/deployment.md` and `docs/maintenance.md` for the implications and upgrade path.
- No image CDN/optimisation pipeline is currently in active use beyond Next.js's built-in `<Image>` (not yet adopted — see `docs/image-handling.md`).
