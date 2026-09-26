import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF to browsers that support it, WebP to the rest; the original
    // JPEG is only used as a last resort. Source files stay .jpg in /public.
    formats: ["image/avif", "image/webp"],
  },
  // Old WordPress-era addresses (from Search Console's "Not found (404)"
  // report, 26 Sep 2026) sent permanently to the matching current page so
  // old links and bookmarks still land somewhere useful.
  async redirects() {
    const to = (source: string, destination: string) => ({
      source,
      destination,
      permanent: true,
    });
    return [
      to("/:slug(mobile-knife-sharpening-service-in-.+)", "/service-area"),
      to("/about-us", "/about"),
      to("/our-prices", "/pricing"),
      to("/privacy-policy", "/privacy"),
      to("/terms-of-use", "/terms"),
      to("/tos", "/terms"),
      to("/disclaimer", "/terms"),
      to("/cookielaw", "/privacy"),
      to("/blog", "/tips"),
      to("/do-your-knives-have-knife-temper-damage", "/tips"),
      to("/category/knives", "/knife-sharpening"),
      to("/tool-sharpening", "/garden-tools"),
      to("/portfolio", "/gallery"),
      to("/portfolio-item/industrial-and-commercial-sharpening", "/commercial"),
      to("/portfolio-item/kitchen-and-garden", "/garden-tools"),
      to("/portfolio-item/mirror-cut-knife-sharpening", "/knife-sharpening"),
      to("/portfolio-item/mobile-sharpening-service", "/services"),
      to("/portfolio-item/scissor-sharpening", "/scissors-sharpening"),
      to("/portfolio-item/xtra-sharp-knife-care", "/tips"),
      to("/services-item/hairdressing-scissors", "/scissors-sharpening"),
      to("/services-item/industrial-and-commercial", "/commercial"),
      to("/services-item/tourism-hospitality-and-schools", "/commercial"),
    ];
  },
  async headers() {
    return [
      {
        // Build output under /_next/static is content-hashed by Next.js —
        // safe to cache as immutable for a year, and Vercel already does
        // this automatically. Kept here for explicitness / non-Vercel hosts.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images and other files in /public are NOT content-hashed — this
        // repo has already replaced files at the same path in place (e.g.
        // re-compressing an existing photo). A long "immutable" cache here
        // would make browsers/CDN keep serving a stale file for up to a
        // year after any future update at the same filename. Use a shorter,
        // revalidating cache instead so updates propagate promptly while
        // still avoiding a re-fetch on every request.
        source:
          "/:path*.(jpg|jpeg|png|webp|svg|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
