"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function FooterFlickeringGrid() {
  return (
    <div className="relative z-0 h-40 w-full md:h-64">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
      <div className="absolute inset-0">
        <FlickeringGrid
          text="Industrial Devices"
          fontSize={56}
          className="h-full w-full md:hidden"
          squareSize={2}
          gridGap={3}
          color="#0ea5e9"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
        <FlickeringGrid
          text="Industrial Devices"
          fontSize={90}
          className="hidden h-full w-full md:block"
          squareSize={2}
          gridGap={3}
          color="#0ea5e9"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
      </div>
    </div>
  );
}
