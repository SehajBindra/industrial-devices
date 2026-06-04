import Link from "next/link";

import { HeroSafariCarousel } from "@/components/landing/hero-safari-carousel";
import { HeroClientGrid } from "@/components/landing/hero-client-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export function HeroSection() {
  return (
    <section className="relative max-w-6xl mx-auto overflow-hidden border-b border-neutral-200 px-4 bg-white pt-40 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden min-h-0 w-[min(50%,30rem)] md:block lg:w-[min(44%,34rem)]"
        aria-hidden
      >
        <DottedGlowBackground
          className="mask-[radial-gradient(ellipse_110%_100%_at_78%_38%,white_0%,white_42%,transparent_78%)]"
          opacity={4.4}
          gap={8}
          radius={1.7}
          color="rgba(15,23,42,0.82)"
          glowColor="rgba(0,119,182,0.45)"
          darkColor="rgba(203,213,225,0.55)"
          darkGlowColor="rgba(0,150,199,0.45)"
          backgroundOpacity={0.07}
          speedMin={0.35}
          speedMax={1.45}
          speedScale={1}
        />
      </div>
      <div className="relative z-10 flex flex-col">
        <div className="max-w-5xl">
          <BlurFade
            delay={0.25}
            inView
            direction="up"
            blur="28px"
            duration={0.8}
            className="w-full"
          >
            <h1 className="text-balance text-5xl tracking-tight text-neutral-950 sm:text-6xl sm:leading-[1.08] lg:text-7xl lg:leading-[1.05]">
              Gas chlorination systems &{" "}
              <span className="text-primary">water treatment</span> equipment.
            </h1>
          </BlurFade>
          <BlurFade
            delay={0.25 * 2}
            inView
            direction="up"
            blur="24px"
            duration={1}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            <p>
              Welcome to Industrial Devices (India) Pvt. Ltd., a trusted Indian
              manufacturer of gas chlorination systems, chlorine dosing
              equipment, gas chlorine safety systems, and water treatment
              solutions for municipal, industrial, and process applications.
            </p>
          </BlurFade>
          <BlurFade
            delay={0.25 * 3}
            inView
            direction="up"
            blur="20px"
            duration={0.8}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              className="h-11 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-none transition-transform hover:bg-primary/90 active:scale-[0.98]"
            >
              <Link href="#contact">Request a quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary/30 bg-white/80 px-7 text-sm font-medium text-primary shadow-none backdrop-blur-sm transition-transform hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]"
            >
              <Link href="#products">Explore systems</Link>
            </Button>
          </BlurFade>
        </div>
        <BlurFade
          delay={0.25 * 4}
          inView
          direction="up"
          blur="24px"
          duration={1}
          className="mx-auto mt-14 w-full max-w-[1203px]"
        >
          <HeroSafariCarousel />
        </BlurFade>
      </div>
      <HeroClientGrid />
    </section>
  );
}
