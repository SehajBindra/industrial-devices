import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      // Old Webazaar (.html) URLs still in Google index -> Next.js routes.
      // First detected in GSC Page indexing report Sep 2026 (35x 404).
      // NOTE: Next.js emits permanent:true as 308 (not 301) - Google treats
      // 308 as a permanent redirect, so this is SEO-safe.
      { source: "/home.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/how-to-control-chlorine-leaks.html",
        destination: "/blog/advanced-safety-protocols-chlorine-handling",
        permanent: true,
      },
      // NOTE: /thank-you.html intentionally left as 404 (not redirected to
      // /contact) - thank-you and contact pages are not equivalent, and a
      // redirect could confuse returning visitors / duplicate submissions.
      // NOTE: /admin/* intentionally left as 404 - redirecting an obsolete
      // admin page to the homepage would be treated as a soft 404.
    ];
  },
  images: {
    qualities: [75, 90],
    // 30 days: bounds staleness when a file is replaced at the same URL
    // (no invalidation API) — rename the file instead for instant updates.
    minimumCacheTTL: 2592000,
    // 1920 cap: largest source (hero) is 1800px wide, so 2400 would
    // upscale with zero detail gain. 750/828 kept for common phones.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "svgl.app",
        pathname: "/library/**",
      },
      {
        protocol: "https",
        hostname: "www.industrialdevices.in",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
