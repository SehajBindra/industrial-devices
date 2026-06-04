import { ApproachSection } from "@/components/landing/approach-section";
import { ApplicationDetailsSection } from "@/components/landing/application-details-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { FooterSection } from "@/components/landing/footer-section";
import { SiteHeader } from "@/components/landing/site-header";
import WallOfLoveSection from "@/components/landing/testimonials";
import CTASection from "@/components/ui/globe-feature-section";

export default function Home() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <ApplicationDetailsSection />
        <WallOfLoveSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}
