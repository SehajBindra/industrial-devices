import type { Metadata } from "next";

import { DownloadsSection } from "@/components/landing/downloads-section";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Downloads | Industrial Devices (India)",
  description:
    "Download the Industrial Devices company profile catalogue and other technical resources.",
  path: "/downloads",
  ogImage: "/product/idi-logo.png",
});

export default function DownloadsPage() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <DownloadsSection />
    </div>
  );
}
