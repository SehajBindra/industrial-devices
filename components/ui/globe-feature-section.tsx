"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Phone } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

const CtaGlobeVisual = dynamic(
  () =>
    import("@/components/landing/cta-globe-visual").then(
      (module) => module.CtaGlobeVisual,
    ),
  {
    loading: () => (
      <div className="relative h-[180px] w-full max-w-xl animate-pulse rounded-lg bg-neutral-100" />
    ),
    ssr: false,
  },
);

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border border-gray-100 bg-white px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <BlurFade
            delay={0.25}
            inView
            direction="up"
            blur="28px"
            duration={0.8}
            className="w-full"
          >
            <h2 className="text-3xl font-normal text-gray-900 dark:text-white">
              World-Class Chlorination & Disinfection Systems – Crafted in India
              for Global Applications
            </h2>
          </BlurFade>
          <BlurFade
            delay={0.25 * 2}
            inView
            direction="up"
            blur="24px"
            duration={1}
            className="mt-4 text-pretty text-base leading-relaxed text-gray-500 dark:text-gray-400"
          >
            <p>
              We design, manufacture, supply, install, and commission gas
              chlorinators, chlorine vaporizers, leak detection systems,
              chlorine dioxide generators, electrochlorinators, dosing systems,
              and complete chlorination packages system.
            </p>
          </BlurFade>
          <BlurFade
            delay={0.25 * 3}
            inView
            direction="up"
            blur="20px"
            duration={0.8}
            className="mt-6 block"
          >
            <Button
              asChild
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <Link href="/contact">
                Contact us <Phone className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
        </div>
        <CtaGlobeVisual />
      </div>
    </section>
  );
}
