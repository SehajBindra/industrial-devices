"use client";

import { useReducedMotion } from "motion/react";

import { Separator } from "@/components/ui/separator";
import {
  AuditsAssessmentsBentoCard,
  ConsultingAdvisoryBentoCard,
  IndustrialSafetyBentoCard,
  SoftwareItBentoCard,
  TrainingDevelopmentBentoCard,
} from "./services-bento-cards";
import { SectionIntro } from "./section-intro";

const SERVICE_BENTO_SECTIONS = [
  { id: "consulting-advisory", Component: ConsultingAdvisoryBentoCard },
  { id: "industrial-safety", Component: IndustrialSafetyBentoCard },
  { id: "training-development", Component: TrainingDevelopmentBentoCard },
  { id: "audits-assessments", Component: AuditsAssessmentsBentoCard },
  { id: "software-it", Component: SoftwareItBentoCard },
] as const;

export function ServicesSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="services"
      className="scroll-mt-28 border-b border-gray-100 bg-white pt-32 pb-20 sm:scroll-mt-32 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          headingId={`services-heading`}
          align="start"
          description={
            "From plant-floor inspections to enterprise systems, we stay close to how work actually happens—so recommendations survive contact with reality."
          }
          title={"One partner across standards, safety, and execution."}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-6 lg:gap-5">
          {SERVICE_BENTO_SECTIONS.map(({ id, Component }, index) => (
            <Component index={index} key={id} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
