"use client";

import { Globe } from "@/components/ui/globe";

export function CtaGlobeVisual() {
  return (
    <div className="relative h-[180px] w-full max-w-xl">
      <Globe className="absolute -bottom-20 -right-40 scale-150" />
    </div>
  );
}
