import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // NOTE: do NOT disallow /_next/ - Google needs JS/CSS/fonts to render.
        // The single crawled .woff2 is harmless (Google chose not to index it).
        disallow: ["/api/"],
      },
    ],
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: siteUrl.toString(),
  };
}
