import Link from "next/link";

import { HeroClientGrid } from "@/components/landing/hero-client-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Safari } from "@/components/ui/safari";

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
          glowColor="rgba(55,48,163,0.48)"
          darkColor="rgba(203,213,225,0.55)"
          darkGlowColor="rgba(129,140,248,0.45)"
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
              Systems that hold under{" "}
              <span className="text-neutral-400">audit,</span> pressure, and
              real operations.
            </h1>
          </BlurFade>
          <BlurFade
            delay={0.25 * 2}
            inView
            direction="up"
            blur="24px"
            duration={1}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            <p>
              Consultants, auditors, and trainers for ISO standards, industrial
              safety, NDT, and technology-led improvement—partnering across
              India with teams who ship work, not just documents.
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
              className="h-11 rounded-full border border-neutral-900 bg-neutral-950 px-7 text-sm font-medium text-white shadow-none transition-transform hover:bg-neutral-900 active:scale-[0.98]"
            >
              <Link href="#contact">Request a call</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-neutral-300 bg-white/80 px-7 text-sm font-medium shadow-none backdrop-blur-sm transition-transform hover:bg-white active:scale-[0.98]"
            >
              <Link href="#services">Explore services</Link>
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
          <Safari url="www.qmsil.co.in" videoSrc="/demo.mp4" />
        </BlurFade>
      </div>
      <HeroClientGrid />
    </section>
  );
}
