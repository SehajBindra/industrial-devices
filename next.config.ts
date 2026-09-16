import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
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
