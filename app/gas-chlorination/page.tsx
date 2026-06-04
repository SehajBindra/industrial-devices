import type { Metadata } from "next";

import { GasChlorinationPageContent } from "@/components/landing/gas-chlorination-page";
import { FooterSection } from "@/components/landing/footer-section";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title:
    "Gas chlorinator India|Gas Chlorination|Chemical dosing|chlorine dosing",
  description:
    "Industrial Devices is a leading Chlorination System manufacturers in India. Chlorine Dosing System Manufacturers India, Chlorine Vaporizer, Gas Chlorinator India, Chlorination System Manufacturers.",
};

export default function GasChlorinationPage() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <SiteHeader />
      <main>
        <GasChlorinationPageContent />
      </main>
      <FooterSection />
    </div>
  );
}
