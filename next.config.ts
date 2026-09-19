import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
