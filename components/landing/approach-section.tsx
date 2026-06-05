"use client";

import {
  Activity,
  Biohazard,
  Droplets,
  Factory,
  Flame,
  Waves,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import { SectionIntro } from "./section-intro";

const CORE_VALUES: readonly {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Drinking Water",
    description:
      "Safe water disinfection for municipal supply, reservoirs, pipelines, and treatment plants.",
    icon: Droplets,
  },
  {
    title: "Wastewater Treatment",
    description:
      "Chlorination for STP, ETP, treated water reuse, and environmental discharge compliance.",
    icon: Waves,
  },
  {
    title: "Cooling Tower Control",
    description:
      "Biofouling, algae, bacterial contamination, and process water control for cooling systems.",
    icon: Factory,
  },
  {
    title: "Process Water",
    description:
      "Reliable disinfection for chemical, pharmaceutical, food processing, and industrial water loops.",
    icon: Activity,
  },
  {
    title: "Odour & Bacteria Control",
    description:
      "Chlorine dioxide and chlorination systems for odour control, biofilm removal, and microbial reduction.",
    icon: Biohazard,
  },
  {
    title: "Seawater & Brine",
    description:
      "Electro chlorination systems for on-site generation in seawater and brine applications.",
    icon: Flame,
  },
];

export function ApproachSection() {
  return (
    <section
      id="applications"
      className="scroll-mt-28 border-b border-gray-100 bg-white py-20 sm:scroll-mt-32"
    >
      <SectionIntro
        headingId={`applications-heading`}
        align="start"
        description={
          "Industrial Devices provides reliable chlorination and disinfection systems across the main water, wastewater, and process safety applications."
        }
        title={
          <>
            Applications for{" "}
            <span className="text-primary">reliable disinfection</span>.
          </>
        }
      />
      <div className="mx-auto max-w-6xl px-4 mt-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-neutral-50 flex flex-col items-center overflow-hidden rounded-md p-6 text-center"
            >
              <div className="mb-4 flex flex-col items-center gap-y-4">
                <div className="from-primary to-primary/80 flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-b text-white shadow-sm">
                  <Icon className="size-5" aria-hidden strokeWidth={1.75} />
                </div>
                <h2 className="text-foreground font-uncutBold text-xl">
                  {title}
                </h2>
              </div>
              <p
                className="text-muted-foreground mb-4 text-sm leading-normal"
                title={description}
              >
                {description}
              </p>
              <Link
                href="https://www.industrialdevices.in/"
                className="text-primary text-sm hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn more &gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
