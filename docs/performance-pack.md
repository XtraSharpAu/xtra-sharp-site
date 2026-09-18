# Performance Pack

## Starting Position

This site is about as fast as a marketing site can be by default: 100% static HTML (every route builds as `○ (Static)`), no client-side data fetching, no database round-trips, only two Client Components in the entire codebase (`ContactForm`, `error.tsx`), and self-hosted fonts via `next/font`. The performance work here is about *not regressing* this position as content grows, plus a small number of concrete improvements.

## Lighthouse Optimisation Plan

| Metric | Current risk | Action |
|---|---|---|
| **LCP** (Largest Contentful Paint) | Low risk today (no hero images) — becomes the top risk the moment real photos are added to service pages | When adding real images, always use `next/image` (not a plain `<img>`) so Next.js generates responsive `srcset`s and can prioritise the LCP image with `priority` |
| **CLS** (Cumulative Layout Shift) | Low — no images, no web fonts loading without fallback (see Font Loading below), no dynamically-injected content above the fold | Maintain this by always specifying `width`/`height` (or using `next/image`, which requires them) on any future image, preventing layout jump on load |
| **INP** (Interaction to Next Paint) | Low — almost no client-side JS to block the main thread | Keep it this way: resist adding client-side libraries/animations without a real product need |
| **TBT** (Total Blocking Time) | Low — same reasoning as INP | Same |
| **Server Response Time** | Depends on Vercel's edge network, not this codebase | N/A — already optimal for a static site on Vercel |

## Image Compression Strategy

See `docs/image-handling.md` for the full plan. Summary: resize to actual display dimensions (1200×630 for OG images), compress to target file sizes (~150KB OG, ~200KB in-page), adopt `next/image` for automatic WebP/AVIF negotiation once real photos exist. None of this is urgent today because there are no real images to optimise yet — but it must happen *before* the first real photo is committed, not after.

## Font Loading Strategy

Already optimal: `next/font/google` (Geist, Geist Mono) self-hosts the font files at build time and injects them via CSS variables (`--font-geist-sans`, `--font-geist-mono`), avoiding a render-blocking request to `fonts.googleapis.com` at runtime and avoiding FOUT/FOIT by default (Next.js's font optimisation handles `font-display` automatically). No action needed — just don't switch to a `<link>`-based Google Fonts import in the future, which would reintroduce the exact problem `next/font` avoids.

## Script Optimisation

There is currently no third-party script on the site at all (no analytics, no chat widget, no ad pixel — confirmed in `docs/faq.md`'s "tracking scripts" answer). This is the single biggest performance advantage this site has over a typical small-business site. If analytics is ever added:

- Use Next.js's `<Script>` component with `strategy="afterInteractive"` or `"lazyOnload"`, never a blocking synchronous `<script>` in `<head>`.
- Prefer a lightweight, privacy-respecting analytics tool (e.g. Plausible, Fathom) over a heavy tag-manager setup, given the site's current zero-JS-dependency baseline is worth protecting.

## CSS Optimisation

Tailwind v4's CSS-first pipeline (via `@import "tailwindcss"` + `@config`) already ships only the utility classes actually used across the codebase (Tailwind's JIT engine scans `content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"]` in `tailwind.config.ts` and generates nothing else). No manual purging or optimisation step is needed beyond what Tailwind already does. The only handwritten CSS in the whole project is the 6-line `body { }` rule in `globals.css` — see `docs/maintenance.md` item #5 for why that rule must stay in sync with the Tailwind tokens rather than being a performance concern.

## Build Optimisation

- Build already uses Turbopack (Next.js 16's default), which is faster than the legacy Webpack pipeline for both dev and production builds.
- Build output is 100% static — no serverless function cold-starts to worry about for any page.
- `package.json` has no `"type": "module"` set, which causes a one-line Node warning during build about `tailwind.config.ts` being re-parsed as ESM (harmless, but adding `"type": "module"` to `package.json` would silence it and shave a small amount off build time — low priority, cosmetic).

## Deployment Optimisation

- Vercel automatically serves static output from its global edge network — no additional CDN configuration needed (see CDN Strategy below).
- No custom `vercel.json` exists or is needed at this project's current complexity.
- Every deploy rebuilds from scratch (no incremental static regeneration is in use, and none is needed — there's no dynamic/frequently-changing data on this site).

## Caching Strategy

- **Static assets** (`public/*`, built JS/CSS chunks): Vercel applies long-lived, immutable `Cache-Control` headers automatically to hashed build output — no manual configuration needed.
- **HTML pages**: since every route is statically generated at build time, Vercel can serve them from cache/edge with revalidation tied to new deployments, not runtime cache invalidation logic — again, nothing this project needs to configure manually given there's no dynamic data source to go stale.
- **`sitemap.xml`/`robots.txt`**: served as static files from `public/`, same caching behaviour as any other static asset — remember that editing `lastmod` dates only takes effect on the next deploy, not automatically (there's no cron/regeneration job — see `docs/maintenance.md`'s routine tasks table).

## CDN Strategy

Vercel's edge network *is* the CDN for this project — every static asset and prerendered page is served from Vercel's global points of presence automatically. There is no separate CDN (Cloudflare, Fastly, etc.) in front of or instead of Vercel, and none is needed at this site's traffic scale and complexity. If the domain is ever proxied through Cloudflare for DNS/security reasons, ensure it's in "DNS only" (grey-cloud) mode for the record pointing at Vercel, or set up properly per Vercel's Cloudflare integration docs — proxying through an additional CDN in front of Vercel without doing this correctly can cause SSL/redirect issues.

## Mobile Optimisation Plan

- All layouts already use Tailwind's responsive utilities (`sm:`, `lg:` prefixes) throughout — grids collapse to single-column, hero text scales down (`text-4xl sm:text-5xl`), nav wraps (`flex-wrap`).
- No separate mobile build or AMP variant — a single responsive site is the correct approach here (Google has recommended responsive design over separate mobile URLs for years).
- **Action item**: explicitly test on a real mid-range Android device and iPhone Safari, not just responsive dev tools — pay particular attention to the 11-item header nav's wrapping behaviour at narrow widths and the pricing-table rows on long item names (e.g. "Grooming thinning scissors — $30" wrapping behaviour, already observed to wrap the price line on `/processor-blades`'s "Large industrial blades" row in prior screenshots).
- Tap targets: `Call Now` buttons and nav links use generous padding (`px-6 py-3` / `px-4 py-2`) — already comfortably above the 44×44px recommended minimum tap target size.
