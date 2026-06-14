import type { Metadata } from "next";

import { CertificationSection } from "@/components/landing/certification-section";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Certification | Industrial Devices (India)",
  description:
    "View ISO 9001 quality management and OHSAS occupational health & safety certifications for Industrial Devices (India).",
  path: "/certification",
  ogImage: "/product/idi-logo.png",
});

export default function CertificationPage() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <CertificationSection />
    </div>
  );
}
