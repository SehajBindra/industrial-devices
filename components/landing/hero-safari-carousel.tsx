"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Safari } from "@/components/ui/safari";
import { cn } from "@/lib/utils";

const CAROUSEL_INTERVAL_MS = 5000;

export const heroCarouselSlides = [
  {
    src: "/hero-carousel/banner1.jpg",
    alt: "Chlorination systems by Industrial Devices",
  },
  {
    src: "/hero-carousel/banner2.jpg",
    alt: "Chlorination manufacturing company in India",
  },
  {
    src: "/hero-carousel/banner3.jpg",
    alt: "Chlorination supply company in India",
  },
  {
    src: "/hero-carousel/banner4.jpg",
    alt: "Chlorination system manufacturers in India",
  },
  {
    src: "/hero-carousel/banner5.jpg",
    alt: "Industrial chlorination systems",
  },
] as const;

export function HeroSafariCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCarouselSlides.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  return (
    <Safari url="www.industrialdevices.in">
      <div className="relative size-full bg-neutral-950">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={heroCarouselSlides[activeIndex].src}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroCarouselSlides[activeIndex].src}
              alt={heroCarouselSlides[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              quality={90}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

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
