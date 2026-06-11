"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Safari } from "@/components/ui/safari";
import { cn } from "@/lib/utils";

const CAROUSEL_INTERVAL_MS = 5000;
const FADE_DURATION_S = 1.25;

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
  const reduceMotion = useReducedMotion() ?? false;
  const activeSlide = heroCarouselSlides[activeIndex];

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
        {reduceMotion ? (
          <div className="absolute inset-0">
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>
        ) : (
          heroCarouselSlides.map((slide, index) => (
            <motion.div
              key={slide.src}
              aria-hidden={index !== activeIndex}
              initial={false}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{
                duration: FADE_DURATION_S,
                ease: "easeInOut",
              }}
              className="absolute inset-0"
              style={{ zIndex: index === activeIndex ? 2 : 1 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </motion.div>
          ))
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
