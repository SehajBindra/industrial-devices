"use client";

import { useReducedMotion } from "motion/react";

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
      id="products"
      className="scroll-mt-28 border-b border-gray-100 bg-white pt-32 pb-20 sm:scroll-mt-32 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          headingId={`products-heading`}
          align="start"
          description={
            "Vacuum and gas chlorinators, vaporizers, dosing systems, and safety equipment, manufactured and commissioned for municipal, power, and industrial sites."
          }
          descriptionClassName="line-clamp-2"
          title={
            <>
              Complete{" "}
              <span className="text-primary">chlorination systems</span>, built
              in India.
            </>
          }
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
