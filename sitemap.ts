import type { MetadataRoute } from "next";

const BASE_URL = "https://xtrasharp.com.au";

const routes = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/gallery",
  "/faq",
  "/contact",
  "/batch-sharpening",
  "/commercial-sharpening",
  "/how-it-works",
  "/service-area",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
