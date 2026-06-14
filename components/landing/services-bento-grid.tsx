"use client";

import { useReducedMotion } from "motion/react";

import {
  AuditsAssessmentsBentoCard,
  ChemicalDosingSystemBentoCard,
  ConsultingAdvisoryBentoCard,
  ElectroChlorinationBentoCard,
  IndustrialSafetyBentoCard,
  SoftwareItBentoCard,
  TrainingDevelopmentBentoCard,
} from "./services-bento-cards";

const SERVICE_BENTO_SECTIONS = [
  { id: "consulting-advisory", Component: ConsultingAdvisoryBentoCard },
  { id: "industrial-safety", Component: IndustrialSafetyBentoCard },
  { id: "training-development", Component: TrainingDevelopmentBentoCard },
  { id: "audits-assessments", Component: AuditsAssessmentsBentoCard },
  { id: "software-it", Component: SoftwareItBentoCard },
  { id: "electro-chlorination", Component: ElectroChlorinationBentoCard },
  { id: "chemical-dosing-system", Component: ChemicalDosingSystemBentoCard },
] as const;

export function ServicesBentoGrid() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
      {SERVICE_BENTO_SECTIONS.map(({ id, Component }, index) => (
        <div id={id} key={id} className="scroll-mt-28 sm:scroll-mt-32">
          <Component index={index} reduceMotion={reduceMotion} />
        </div>
      ))}
    </div>
  );
}
