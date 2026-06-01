"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";

export default function CTASection() {
  return (
    <section className="relative w-full mx-auto overflow-hidden border border-gray-100 p-4 bg-white py-20">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
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
              <span className="text-primary">QMS India Limited</span>—on the
              ground wherever you operate in India.
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
              ISO and IATF consulting, industrial safety and inspection,
              training, audits, NDT, and software-led solutions—delivered by
              consultants, auditors, and trainers with offices across the
              country, supporting industries since 1998.
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
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:bg-black"
            >
              <Link href="#contact">
                Request a call <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
        </div>
        <div className="relative h-[180px] w-full max-w-xl">
          <Globe className="absolute -bottom-20 -right-40 scale-150" />
        </div>
      </div>
    </section>
  );
}
