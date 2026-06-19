"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

/** Default highlighter color for `SectionIntro` titles that use `<Highlighter />`. */
export const SECTION_HIGHLIGHT_BLUE = "#0077b6";

const transitionEase = [0.16, 1, 0.3, 1] as const;

type SectionIntroProps = {
  title: ReactNode;
  description?: string;
  headingId?: string;

  /** `start` aligns intro copy to the start (e.g. landing sections); default matches marketing. */
  align?: "center" | "start";
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
};

export function SectionIntro({
  title,
  description,
  headingId,
  align = "center",
  className,
  headingClassName,
  descriptionClassName,
}: SectionIntroProps) {
  const reduceMotion = useReducedMotion() ?? false;
  const isStart = align === "start";

  const motionProps = reduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } as const }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.1, ease: transitionEase },
        viewport: { once: true },
      };

  return (
    <motion.div
      {...motionProps}
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col p-4",
        isStart ? "items-start" : "items-center justify-center",
        className,
      )}
    >
      <BlurFade
        delay={0.25}
        inView
        direction="up"
        blur="28px"
        duration={0.8}
        className={cn("w-full", !isStart && "mb-6")}
      >
        <h2
          id={headingId}
          className={cn(
            isStart
              ? "mb-4 max-w-3xl text-left text-4xl font-light tracking-tight sm:mb-5 sm:text-5xl md:mb-6 md:text-6xl"
              : "mx-auto max-w-2xl text-center text-4xl font-light tracking-tight md:text-5xl",
            headingClassName,
          )}
        >
          {title}
        </h2>
      </BlurFade>
      {description ? (
        <BlurFade
          delay={0.25 * 2}
          inView
          direction="up"
          blur="24px"
          duration={1}
          className={cn(
            isStart
              ? "max-w-3xl text-left text-lg leading-relaxed text-gray-500 sm:text-xl line-clamp-2"
              : "mx-auto max-w-lg text-center text-xl leading-relaxed text-gray-500 line-clamp-2",
            descriptionClassName,
          )}
        >
          <p>{description}</p>
        </BlurFade>
      ) : null}
    </motion.div>
  );
}
