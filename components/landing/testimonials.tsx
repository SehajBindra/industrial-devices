"use client";

import Image from "next/image";
import { useId } from "react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionIntro } from "./section-intro";

/** Use company / context from `role` as a wordmark when a comma separates title and org. */
function wordmarkFromRole(role: string): string {
  const parts = role
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length >= 2) {
    return parts[parts.length - 1];
  }
  return role;
}

/** Middle row or middle column in a 3×3 grid (plus / cross). */
function isCrossArm(index: number): boolean {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return row === 1 || col === 1;
}

export default function WallOfLoveSection() {
  const baseId = useId();

  return (
    <section
      className="w-full sm:max-w-6xl py-20 bg-white"
      aria-labelledby={`${baseId}-heading`}
    >
      <SectionIntro
        headingId={`${baseId}-heading`}
        align="start"
        description={
          "We work with teams that value moving fast, staying clear, and building things that genuinely make a difference."
        }
        title={"Execution over everything"}
      />
      <div className=" max-w-6xl overflow-hidden   bg-white p-4">
        <div className="grid grid-cols-1 gap-3 sm:gap-px md:grid-cols-2 md:gap-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, role, text, image }, index) => {
            const cross = isCrossArm(index);
            return (
              <article
                key={id}
                className={cn(
                  "flex h-full min-h-0 flex-col rounded-xl p-8",
                  "border border-neutral-200/60 bg-white",
                  "shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
                  cross ? "bg-[#F4F4F4]" : "bg-white",
                )}
              >
                <div className="flex h-9 items-center">
                  <span className="text-lg font-semibold tracking-tight text-neutral-900">
                    {wordmarkFromRole(role)}
                  </span>
                </div>

                <div className="relative mt-6 min-h-0 flex-1">
                  <span
                    className={cn(
                      "pointer-events-none absolute -left-1 -top-3 select-none font-serif text-[4.5rem] font-normal leading-none",
                      cross ? "text-neutral-100" : "text-neutral-300/35",
                    )}
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative z-1">
                    <p className="text-lg  leading-relaxed tracking-tight text-neutral-900">
                      {text}
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-xl border border-neutral-200/60  bg-neutral-100">
                    <Image
                      src={image}
                      alt=""
                      width={40}
                      height={40}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-tight text-neutral-900">
                      {name}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-neutral-500">
                      {role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
