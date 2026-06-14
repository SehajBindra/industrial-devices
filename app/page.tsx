import type { Metadata } from "next";

import { ApproachSection } from "@/components/landing/approach-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import WallOfLoveSection from "@/components/landing/testimonials";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial Devices (India): Gas Chlorination & Water Treatment",
  description:
    "Welcome to Industrial Devices (India) Pvt. Ltd. — trusted manufacturer of gas chlorination systems, chlorine dosing equipment, safety systems, and water treatment solutions.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <WallOfLoveSection />
    </div>
  );
}
