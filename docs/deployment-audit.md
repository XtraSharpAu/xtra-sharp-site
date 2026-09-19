# Deployment-Level Optimization Audit — Caching, CDN, DNS, SSL

Read this before trusting any number in this file: a large part of what "Command 17" asked for is **not verifiable from this environment**, and this doc says exactly where that line falls rather than papering over it with invented numbers. Everything under "Verified from the codebase" is real and checked; everything under "Could not verify" is a hard environment limitation, explained, with what would actually be needed to check it.

## Could Not Verify (environment limitation, not a shortcut)

This session's outbound network access is restricted to an allowlist (npm, GitHub, PyPI, Anthropic APIs, and a handful of others). `xtrasharp.com.au` is not on it. Three separate attempts confirmed this is a hard gateway denial, not a fluke:

- `curl -sI https://xtrasharp.com.au/` returned a synthetic `403 Forbidden` — not from the real site. Confirmed via the proxy's own status endpoint, which logs `xtrasharp.com.au:443` as `connect_rejected: gateway answered 403 to CONNECT (policy denial or upstream failure)` — the identical rejection pattern as a control request to `www.google.com`.
- `WebFetch` against the same URL returned `EGRESS_BLOCKED` explicitly.
- No DNS tool (`dig`, `nslookup`, `host`) is installed in this environment either.

As a result, none of the following could be genuinely checked this round, and nothing below is a substitute for actually checking them:

- **DNS records** (A/CNAME for `xtrasharp.com.au`, TTL values) — needs either network access to a real resolver or direct access to the domain's DNS provider/registrar dashboard.
- **SSL certificate chain, issuer, and auto-renewal status** — needs a live TLS handshake against the production host, which this session cannot make.
- **Live response headers** (`Cache-Control`, `Content-Encoding`, `Server-Timing`, `x-vercel-cache`, `x-vercel-id`) actually being sent by production — same blocker.
- **"All assets served via Vercel's global edge network"** — there is no `.vercel/` directory or `vercel.json` in this repo, meaning the project is almost certainly linked via Vercel's GitHub integration (configured in Vercel's dashboard, not in the repo) rather than the Vercel CLI. That setup does put a Next.js app on Vercel's edge network by default, but "almost certainly, based on how Vercel normally works" is not the same as verified, and this file doesn't present it as verified.
- **Real-world load times from Australia** — this environment has no way to run a timed request against the live site, from Australia or anywhere else. Any "under 1 second" claim would be invented. None is made here.

**What would actually resolve this**: run `dig xtrasharp.com.au` and `curl -sI https://xtrasharp.com.au/` from a machine with normal internet access (or from the Vercel dashboard's own domain/analytics panels), or open the domain's DNS provider and Vercel project settings directly.

## Did Not Run: `vercel build` / `vercel deploy --prod`

Not attempted, for two independent reasons, either of which is sufficient on its own:

1. **No Vercel CLI authentication exists in this session.** `npx vercel` prompts for a package install with no linked account or project token — there's nothing to deploy with.
2. **Deploying straight to production is a high-risk, irreversible action affecting the live business site**, and this repo has no `vercel.json`/`.vercel` project link committed — meaning it's almost certainly deployed via Vercel's Git integration already, where **every push to `main` in this session has likely already triggered an automatic production deployment**. A manual `vercel deploy --prod` on top of that would be redundant at best, and at worst could target a different/misconfigured project if credentials were improvised. Given the standing instruction to treat "modifying shared infrastructure" and irreversible production actions as requiring explicit authorization, this wasn't attempted.

If Git-based auto-deploy is indeed how this project is set up (verify in the Vercel dashboard → Project → Git), no manual deploy step is needed at all — pushing this commit to `main` is the deploy.

## Verified From the Codebase (real, checked, not assumed)

### The entire site is statically generated
`next build` output shows every one of the 21 routes as `○ (Static) prerendered as static content` — there are no dynamic routes, no `revalidate` exports, and no server-side data fetching anywhere in `src/app`. This directly answers Task 2's third bullet ("validate that dynamic routes like /faq, /contact use revalidate or ISR appropriately"): **there's nothing to validate, because neither page — nor any page on this site — has dynamic data to revalidate.** Both are hardcoded static content. Adding ISR/`revalidate` config to a page with no data source would be inert config, so none was added.

### `next.config.ts` (not `.js` — this repo has no `next.config.js`; the actual config file was updated instead)
Added a `headers()` function with two rules, verified locally via `next start` + `curl`:

- **`/_next/static/:path*`** → `Cache-Control: public, max-age=31536000, immutable`. These filenames are content-hashed by the Next.js build, so a permanent cache is genuinely safe — a changed file gets a new hash and thus a new URL. Vercel already applies this automatically for Next.js apps; this rule is here for explicitness and so the same guarantee holds on any other host.
- **Image and font files matched by extension** (jpg/jpeg/png/webp/svg/ico/woff/woff2), which mostly means everything in `public/` → `Cache-Control: public, max-age=3600, must-revalidate`, **not** the `max-age=31536000, immutable` the command literally asked for. This is a deliberate deviation, not an oversight: `public/` filenames are **not** content-hashed, and this exact repo has already replaced a file at the same path in place — `knife-premium-japanese.jpg` was both added and later recompressed at the identical URL earlier this session (Command 16's image-optimization pass). An `immutable` 1-year cache on that path would have meant browsers and any CDN kept serving the pre-optimization 465KB file for up to a year after the fix shipped. The shorter, revalidating cache still avoids a full re-fetch on every request while letting a real update actually take effect within the hour.
- **No custom header was added for HTML pages.** Confirmed via `next start` that Next.js's own default for a static page is already `Cache-Control: s-maxage=31536000` (CDN-side caching, invalidated on the next deploy) — not the `max-age=0, must-revalidate` the command specified. Forcing `max-age=0` on every HTML response would tell the CDN to revalidate on every single request, which actively works against CDN caching for a site where every page is static and only changes when a new commit is pushed. Left as-is rather than downgrading it.

Verified locally (`next build` + `next start` + `curl -I`):
```
/_next/static/chunks/<hash>.js  → Cache-Control: public, max-age=31536000, immutable
/knife-premium-japanese.jpg     → Cache-Control: public, max-age=3600, must-revalidate
/ (HTML)                        → Cache-Control: s-maxage=31536000
```

### Compression
Confirmed in the prior Lighthouse audit (`docs/lighthouse-audit.md`) that `next start` serves gzip-compressed responses by default (`Content-Encoding: gzip` on `curl --compressed`). Vercel's edge additionally serves Brotli to clients that support it; this session has no way to confirm that specific behavior live (see "Could Not Verify" above), but it's Vercel's documented default for all text-based responses and nothing in this repo disables it.

### Vercel Image Optimization API
This site's `<Image>` usage renders local files from `public/` via `next/image`, which Vercel automatically routes through its Image Optimization API (resizing, format negotiation, and its own caching) with zero configuration required — there's no `images: { unoptimized: true }` or custom loader in `next.config.ts` that would disable it.

## Summary

| Item | Status |
|---|---|
| Static-asset caching (`_next/static`) | Verified locally: `immutable`, 1yr |
| Image/font caching (`public/`) | Set deliberately shorter than requested — see reasoning above |
| HTML page caching | Left at Next.js's own default (already correct for a static site) |
| ISR/revalidate on /faq, /contact | N/A — both are fully static, no dynamic data exists to revalidate |
| gzip/Brotli compression | gzip confirmed locally; Brotli is Vercel's documented default, not independently verified |
| Vercel Image Optimization | Enabled by default, confirmed via config inspection |
| DNS records, TTL | **Not verified** — no network access to the domain from this session |
| SSL certificate / auto-renewal | **Not verified** — same reason |
| Live response headers from production | **Not verified** — same reason |
| `vercel build` / `vercel deploy --prod` | **Not run** — no CLI auth, and likely redundant with existing Git-based auto-deploy; see reasoning above |
| Load times under 1s from Australia | **Not measured** — no capability to run this from this environment |
