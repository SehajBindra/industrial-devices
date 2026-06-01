"use client";

import {
  Award,
  Factory,
  Globe2,
  ShieldCheck,
  Sparkles,
  Wrench,
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
    title: "Manufacturing In Okhla",
    description:
      "Full-fledged facility with design, production, and servicing under one roof in New Delhi.",
    icon: Factory,
  },
  {
    title: "Operational Safety",
    description:
      "Leak detectors, absorption systems, and emergency kits built into every chlorination solution.",
    icon: ShieldCheck,
  },
  {
    title: "Decades Of Expertise",
    description:
      "Trusted chlorination partner for municipal corporations, power stations, and process industries.",
    icon: Award,
  },
  {
    title: "Complete Product Range",
    description:
      "Chlorinators, vaporizers, dosers, dosing systems, and site accessories from a single manufacturer.",
    icon: Wrench,
  },
  {
    title: "Accredited Quality",
    description:
      "Accredited by the Dutch Council for Accreditation, with quality systems aligned to international standards.",
    icon: Globe2,
  },
  {
    title: "New Technology",
    description:
      "Chlorine dioxide generators and advanced dosing for modern disinfection requirements.",
    icon: Sparkles,
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="border-b border-gray-100 bg-white py-20">
      <SectionIntro
        headingId={`approach-heading`}
        align="start"
        description={
          "Industrial Devices (India) Pvt. Ltd. designs, manufactures, and commissions chlorination systems trusted across India."
        }
        descriptionClassName="line-clamp-2"
        title={
          <>
            Built for safe,{" "}
            <span className="text-primary">reliable chlorine handling</span>.
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
                className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-normal"
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
