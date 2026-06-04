import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
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
