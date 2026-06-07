import { ApproachSection } from "@/components/landing/approach-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import WallOfLoveSection from "@/components/landing/testimonials";

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
