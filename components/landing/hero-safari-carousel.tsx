"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Safari } from "@/components/ui/safari";
import { cn } from "@/lib/utils";

const CAROUSEL_INTERVAL_MS = 5000;

export const heroCarouselSlides = [
  {
    src: "/hero-carousel/drinking-water-fountain-application.jpg",
    alt: "Clean drinking water application",
  },
  {
    src: "/hero-carousel/thermal-power-application.jpg",
    alt: "Thermal power plant cooling tower application",
  },
  {
    src: "/hero-carousel/wastewater-treatment-application.jpg",
    alt: "Wastewater treatment plant application",
  },
  {
    src: "/hero-carousel/swimming-pool-application.jpg",
    alt: "Swimming pool water treatment application",
  },
  {
    src: "/hero-carousel/process-water-application.jpg",
    alt: "Industrial process water piping application",
  },
] as const;

export function HeroSafariCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canAnimate, setCanAnimate] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const slide = heroCarouselSlides[activeIndex];

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setCanAnimate(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    if (!canAnimate || reduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCarouselSlides.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [canAnimate, reduceMotion]);

  return (
    <Safari url="www.industrialdevices.in">
      <div className="relative size-full bg-neutral-950">
        {canAnimate && !reduceMotion ? (
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={slide.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={activeIndex === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>
        )}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/35 to-transparent"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
          {heroCarouselSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "pointer-events-auto size-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "scale-110 bg-white"
                  : "bg-white/45 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </Safari>
  );
}
