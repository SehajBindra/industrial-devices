"use client";

import {
  Award,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Scale,
  ShieldCheck,
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
    title: "Safety And Assurance",
    description:
      "We lead on safety and assure what we design, construct, operate, and maintain.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Client Relationships",
    description:
      "Mutually beneficial ties—some customer relationships extend beyond twenty years.",
    icon: HeartHandshake,
  },
  {
    title: "Structured Practical Innovation",
    description:
      "Rapid testing, shared learning, and continual improvement in every solution.",
    icon: Lightbulb,
  },
  {
    title: "Integrity And Transparency",
    description:
      "Honesty, ethics, and rules compliance that protect trust built over many years.",
    icon: Scale,
  },
  {
    title: "Sustainability In Practice",
    description:
      "Solutions for sustainable progress—balancing environment, compliance, and productive operations for clients.",
    icon: Leaf,
  },
  {
    title: "Rewarded Through Deliveries",
    description:
      "We get rewarded for our deliveries; our job is customer success.",
    icon: Award,
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="border-b border-gray-100 bg-white py-20">
      <SectionIntro
        headingId={`approach-heading`}
        align="start"
        description={
          "QMS India Limited grew from a management consultancy into a multi‑discipline practice—still grounded in the same idea: we get rewarded for our deliveries."
        }
        title={"Standards on paper. Evidence in the field."}
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
                href="https://www.qmsil.co.in/index.php"
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
