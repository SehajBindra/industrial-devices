"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export type ServiceBentoCardProps = {
  index: number;
  reduceMotion: boolean;
};

type ServiceBentoCardShellProps = ServiceBentoCardProps & {
  title: string;
  description: string;
  className: string;
  children: ReactNode;
};

const ease = [0.22, 1, 0.36, 1] as const;

function ServiceBentoCardShell({
  title,
  description,
  className,
  children,
  index,
  reduceMotion,
}: ServiceBentoCardShellProps) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.52, ease, delay: index * 0.045 }}
      className={`group relative flex min-h-[28rem] overflow-hidden rounded-md border border-neutral-200 bg-white p-5 shadow-[0_22px_70px_rgba(0,0,0,0.045)] transition-colors duration-300 hover:border-neutral-300 sm:p-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_50%_28%,black,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-neutral-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-sm bg-linear-to-b from-neutral-50 to-white">
          {children}
        </div>

        <div className="mt-6 border-t border-neutral-200 pt-5">
          <h3 className="text-2xl font-medium tracking-tight text-neutral-950">
            {title}
          </h3>
          <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function ConsultingAdvisoryBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-6 lg:col-span-4"
      description="Integrated management systems shaped for ISO, IATF, IRIS, environment, safety, and information security."
      title="Consulting & advisory"
    >
      <ConsultingGraphic />
    </ServiceBentoCardShell>
  );
}

export function IndustrialSafetyBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="Compliance-led inspections for factory readiness, PESO, HAZOP, fire load, and workplace risk."
      title="Industrial safety inspection"
    >
      <SafetyGraphic />
    </ServiceBentoCardShell>
  );
}

export function TrainingDevelopmentBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="Focused auditor, core tools, legal, VDA, and specialist programmes for teams that execute."
      title="Training & development"
    >
      <TrainingGraphic />
    </ServiceBentoCardShell>
  );
}

export function AuditsAssessmentsBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="Energy, water, waste, social, and need assessments translated into measurable operating priorities."
      title="Audits & assessments"
    >
      <AuditGraphic />
    </ServiceBentoCardShell>
  );
}

export function SoftwareItBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="IT advisory, analytics, service management, security, database, and ERP thinking aligned to standards."
      title="Software & IT"
    >
      <SoftwareGraphic />
    </ServiceBentoCardShell>
  );
}

function ConsultingGraphic() {
  const certifications = [
    { label: "9001", subtitle: "Quality" },
    { label: "14001", subtitle: "Environ" },
    { label: "45001", subtitle: "Safety" },
  ];

  return (
    <div className="relative h-52 w-full max-w-[34rem]" aria-hidden>
      {/* Certificate document being generated */}
      <div className="absolute left-[6%] top-4 h-32 w-[38%] rounded-md border border-neutral-300 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex h-7 items-center justify-between border-b border-neutral-200 px-3">
          <span className="text-[9px] font-semibold tracking-wide text-neutral-950">
            CERTIFICATE
          </span>
          <div className="flex gap-1">
            <span className="size-1.5 rounded-full bg-neutral-300" />
            <span className="size-1.5 rounded-full bg-neutral-300" />
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="flex items-center gap-2">
            <div className="grid size-6 place-items-center rounded-full border border-neutral-200 bg-neutral-50">
              <span className="text-[6px] font-bold text-neutral-700">ISO</span>
            </div>
            <div className="h-2 w-16 rounded-full bg-neutral-950" />
          </div>
          <div className="h-1.5 w-full rounded-full bg-neutral-200" />
          <div className="h-1.5 w-4/5 rounded-full bg-neutral-200" />
          <div className="mt-2 flex items-center justify-between">
            <div className="h-4 w-12 rounded-sm bg-neutral-100" />
            <div className="flex items-center gap-1">
              <div className="size-3 rounded-full border border-neutral-950 bg-white" />
              <span className="text-[6px] text-neutral-500">Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certification badges row */}
      <div className="absolute right-[5%] top-2 flex gap-2">
        {certifications.map((cert, i) => (
          <div
            key={cert.label}
            className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="grid size-12 place-items-center rounded-full border border-neutral-300 bg-white shadow-sm">
              <div className="text-center">
                <span className="block text-[10px] font-bold leading-none text-neutral-950">
                  {cert.label}
                </span>
              </div>
            </div>
            <span className="mt-1 text-[7px] font-medium text-neutral-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {cert.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* Workflow diagram with arrows */}
      <svg
        className="absolute inset-x-0 bottom-3 mx-auto h-28 w-[90%] overflow-visible"
        fill="none"
        viewBox="0 0 440 120"
      >
        {/* Flow arrows */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-neutral-400" />
          </marker>
          <marker
            id="arrowhead-active"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" className="fill-neutral-950" />
          </marker>
        </defs>

        {/* Connecting paths with arrows */}
        <path
          d="M70 85 L140 85"
          className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M180 85 L250 85"
          className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M290 85 L360 85"
          className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />

        {/* Process nodes */}
        {[
          { x: 40, label: "Gap", sub: "Analysis" },
          { x: 160, label: "IMS", sub: "Design" },
          { x: 270, label: "Impl", sub: "Support" },
          { x: 390, label: "Cert", sub: "Ready" },
        ].map((node, index) => (
          <g key={node.x} className="transition-transform duration-300">
            <rect
              x={node.x - 28}
              y={68}
              width="56"
              height="34"
              rx="6"
              className="fill-white stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
            />
            <text
              x={node.x}
              y={82}
              textAnchor="middle"
              className="fill-neutral-950 text-[9px] font-semibold"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y={94}
              textAnchor="middle"
              className="fill-neutral-500 text-[7px]"
            >
              {node.sub}
            </text>
          </g>
        ))}

        {/* IATF badge floating */}
        <g className="transition-transform duration-300 group-hover:-translate-y-1">
          <rect
            x="95"
            y="30"
            width="40"
            height="22"
            rx="4"
            className="fill-neutral-950"
          />
          <text
            x="115"
            y="44"
            textAnchor="middle"
            className="fill-white text-[8px] font-bold"
          >
            IATF
          </text>
        </g>

        {/* IRIS badge floating */}
        <g className="transition-transform duration-300 group-hover:-translate-y-1">
          <rect
            x="195"
            y="22"
            width="36"
            height="22"
            rx="4"
            className="fill-white stroke-neutral-300"
          />
          <text
            x="213"
            y="37"
            textAnchor="middle"
            className="fill-neutral-950 text-[8px] font-bold"
          >
            IRIS
          </text>
        </g>
      </svg>
    </div>
  );
}

function SafetyGraphic() {
  return (
    <svg
      className="h-56 w-full max-w-[25rem] overflow-visible"
      fill="none"
      viewBox="0 0 360 240"
      aria-hidden
    >
      {/* Flow path */}
      <path
        d="M72 148h160c22 0 40-18 40-40V78"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="12"
      />
      <path
        d="M72 148h160c22 0 40-18 40-40V78"
        className="stroke-white"
        strokeDasharray="9 14"
        strokeLinecap="round"
        strokeWidth="2"
      />

      {/* Main hazard card */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
          height="110"
          rx="10"
          width="150"
          x="70"
          y="56"
        />
        {/* Warning triangle */}
        <path
          d="M145 82l42 74H103l42-74z"
          className="fill-neutral-100 stroke-neutral-400 transition-colors duration-300 group-hover:stroke-neutral-950"
        />
        <path
          d="M145 108v24"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <circle className="fill-neutral-950" cx="145" cy="143" r="3.5" />

        {/* HAZOP label on hover */}
        <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <rect
            x="82"
            y="60"
            width="38"
            height="14"
            rx="3"
            className="fill-neutral-950"
          />
          <text
            x="101"
            y="70"
            textAnchor="middle"
            className="fill-white text-[8px] font-bold"
          >
            HAZOP
          </text>
        </g>
      </g>

      {/* Fire load badge */}
      <g className="transition-transform duration-300 group-hover:translate-x-1">
        <rect
          className="fill-neutral-950"
          height="28"
          rx="6"
          width="58"
          x="232"
          y="64"
        />
        <path
          d="M254 70c11 14 3 22 3 22s17-6 11-22"
          className="stroke-white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        {/* Fire label */}
        <text
          x="261"
          y="87"
          textAnchor="middle"
          className="fill-white text-[6px] font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          FIRE
        </text>
      </g>

      {/* PESO badge */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect
          x="232"
          y="100"
          width="58"
          height="22"
          rx="5"
          className="fill-white stroke-neutral-300"
        />
        <text
          x="261"
          y="114"
          textAnchor="middle"
          className="fill-neutral-950 text-[9px] font-bold"
        >
          PESO
        </text>
      </g>

      {/* Verification checkmark */}
      <g className="transition-transform duration-300 group-hover:-translate-x-1">
        <circle
          className="fill-white stroke-neutral-300"
          cx="264"
          cy="162"
          r="24"
        />
        <path
          d="M252 164l8 8 17-22"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        {/* Compliant label */}
        <text
          x="264"
          y="195"
          textAnchor="middle"
          className="fill-neutral-600 text-[8px] font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Compliant
        </text>
      </g>

      {/* Inspection checklist items */}
      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {[
          { y: 178, label: "Factory Ready" },
          { y: 193, label: "Risk Assessed" },
          { y: 208, label: "Certified" },
        ].map((item, i) => (
          <g key={i}>
            <rect
              x="70"
              y={item.y}
              width="8"
              height="8"
              rx="2"
              className="fill-neutral-950"
            />
            <path
              d={`M72 ${item.y + 4}l2 2 3-3`}
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <text x="84" y={item.y + 7} className="fill-neutral-600 text-[7px]">
              {item.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function TrainingGraphic() {
  const modules = [
    { title: "VDA", progress: 100, completed: true },
    { title: "Core", progress: 75, completed: false },
    { title: "Legal", progress: 40, completed: false },
  ];

  return (
    <div className="relative h-52 w-full max-w-[25rem]" aria-hidden>
      {/* Training course card with video */}
      <div className="absolute left-[8%] top-2 h-[5.5rem] w-48 rounded-md border border-neutral-300 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex h-6 items-center justify-between border-b border-neutral-200 px-3">
          <span className="text-[8px] font-semibold text-neutral-950">
            AUDITOR TRAINING
          </span>
          <div className="flex items-center gap-1">
            <div className="size-1.5 rounded-full bg-green-500" />
            <span className="text-[6px] text-neutral-500">Live</span>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3rem] gap-2 p-2">
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded-full bg-neutral-200" />
            <div className="h-2 w-3/4 rounded-full bg-neutral-200" />
            {/* Progress bar */}
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-3/4 rounded-full bg-neutral-950 transition-all duration-500 group-hover:w-[85%]" />
            </div>
            <span className="text-[6px] text-neutral-500">75% Complete</span>
          </div>
          <div className="grid place-items-center rounded-sm bg-neutral-100">
            <div className="h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-neutral-950" />
          </div>
        </div>
      </div>

      {/* Person avatar with certificate/graduation */}
      <div className="absolute right-[10%] top-3 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
        <div className="relative">
          {/* Avatar */}
          <div className="size-12 rounded-full border-2 border-neutral-300 bg-neutral-100">
            <svg viewBox="0 0 48 48" className="size-full">
              <circle cx="24" cy="18" r="8" className="fill-neutral-400" />
              <path
                d="M8 44c0-10 7-16 16-16s16 6 16 16"
                className="fill-neutral-400"
              />
            </svg>
          </div>
          {/* Graduation cap */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              className="fill-neutral-950"
            >
              <polygon points="10,0 20,5 10,10 0,5" />
              <rect x="9" y="8" width="2" height="4" />
              <rect x="4" y="10" width="12" height="2" rx="1" />
            </svg>
          </div>
          {/* Certificate badge */}
          <div className="absolute -bottom-1 -right-1 grid size-5 place-items-center rounded-full border border-neutral-300 bg-white shadow-sm">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path
                d="M2 5l2 2 4-4"
                className="stroke-neutral-950"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <span className="mt-1 text-[7px] font-medium text-neutral-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Certified
        </span>
      </div>

      {/* Module progress cards with checklist */}
      <div className="absolute bottom-3 left-[8%] flex gap-2">
        {modules.map((mod, i) => (
          <div
            key={mod.title}
            className="w-16 rounded-md border border-neutral-300 bg-white p-2 shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 45}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold text-neutral-950">
                {mod.title}
              </span>
              {mod.completed ? (
                <div className="grid size-3.5 place-items-center rounded-full bg-neutral-950">
                  <svg width="6" height="6" viewBox="0 0 6 6">
                    <path
                      d="M1 3l1.5 1.5 2.5-3"
                      stroke="white"
                      fill="none"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="size-3.5 rounded-full border border-neutral-300" />
              )}
            </div>
            {/* Progress bar */}
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-neutral-950 transition-all duration-500"
                style={{ width: `${mod.progress}%` }}
              />
            </div>
            <span className="mt-1 block text-[6px] text-neutral-500">
              {mod.progress}%
            </span>
          </div>
        ))}
      </div>

      {/* Assessment clipboard */}
      <div className="absolute right-[8%] bottom-8 w-14 rounded-md border border-neutral-300 bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:translate-y-1">
        <div className="mx-auto -mt-3 h-2 w-6 rounded-sm bg-neutral-400" />
        <div className="mt-1 space-y-1">
          {[true, true, false].map((checked, i) => (
            <div key={i} className="flex items-center gap-1">
              <div
                className={`size-2 rounded-sm border ${checked ? "border-neutral-950 bg-neutral-950" : "border-neutral-300 bg-white"}`}
              >
                {checked && (
                  <svg width="8" height="8" viewBox="0 0 8 8">
                    <path
                      d="M1.5 4l1.5 1.5 3-3"
                      stroke="white"
                      fill="none"
                      strokeWidth="1"
                    />
                  </svg>
                )}
              </div>
              <div className="h-1 flex-1 rounded-full bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuditGraphic() {
  const metrics = [
    { label: "Energy", height: 38 },
    { label: "Water", height: 58 },
    { label: "Waste", height: 34 },
    { label: "Social", height: 74 },
  ];

  return (
    <svg
      className="h-56 w-full max-w-[25rem] overflow-visible"
      fill="none"
      viewBox="0 0 360 240"
      aria-hidden
    >
      {/* Main chart container */}
      <rect
        className="fill-white stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        height="150"
        rx="12"
        width="226"
        x="67"
        y="42"
      />

      {/* Title bar */}
      <g>
        <rect
          x="67"
          y="42"
          width="226"
          height="24"
          rx="12"
          className="fill-neutral-50"
        />
        <text
          x="85"
          y="58"
          className="fill-neutral-950 text-[9px] font-semibold"
        >
          ASSESSMENT DASHBOARD
        </text>
        <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <circle cx="270" cy="54" r="4" className="fill-green-500" />
        </g>
      </g>

      {/* Grid lines */}
      <path
        className="stroke-neutral-200"
        d="M92 160h176M92 130h176M92 100h176"
      />

      {/* Trend line */}
      <path
        d="M100 152c24-26 42-2 61-24 20-24 38 4 62-24 18-22 30-8 45-28"
        className="stroke-neutral-950"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      {/* Performance gauge */}
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <circle
          className="fill-white stroke-neutral-300"
          cx="111"
          cy="82"
          r="22"
        />
        <path
          d="M99 82a12 12 0 0 1 24 0"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M111 82l10-9"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        {/* Score label */}
        <text
          x="111"
          y="97"
          textAnchor="middle"
          className="fill-neutral-600 text-[7px] font-medium"
        >
          Score
        </text>
      </g>

      {/* Bar chart with labels */}
      {metrics.map((metric, index) => {
        const x = 150 + index * 36;
        const barY = 160 - metric.height;
        return (
          <g
            key={metric.label}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          >
            <rect
              className="fill-neutral-950"
              height={metric.height}
              rx="3"
              width="16"
              x={x}
              y={barY}
            />
            {/* Label on hover */}
            <text
              x={x + 8}
              y="175"
              textAnchor="middle"
              className="fill-neutral-500 text-[6px] font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              {metric.label}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g>
        <circle className="fill-neutral-950" cx="278" cy="70" r="5" />
        <text
          x="260"
          y="73"
          textAnchor="end"
          className="fill-neutral-600 text-[7px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Target
        </text>
        <circle className="fill-neutral-300" cx="278" cy="89" r="5" />
        <text
          x="260"
          y="92"
          textAnchor="end"
          className="fill-neutral-600 text-[7px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Actual
        </text>
      </g>

      {/* Need assessment badge */}
      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect
          x="67"
          y="198"
          width="70"
          height="18"
          rx="4"
          className="fill-neutral-950"
        />
        <text
          x="102"
          y="210"
          textAnchor="middle"
          className="fill-white text-[7px] font-medium"
        >
          Need Analysis
        </text>
      </g>

      {/* Measurable priorities badge */}
      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect
          x="145"
          y="198"
          width="75"
          height="18"
          rx="4"
          className="fill-white stroke-neutral-300"
        />
        <text
          x="182"
          y="210"
          textAnchor="middle"
          className="fill-neutral-700 text-[7px] font-medium"
        >
          KPI Tracking
        </text>
      </g>
    </svg>
  );
}

function SoftwareGraphic() {
  const complianceMetrics = [
    { label: "ISO", value: 94 },
    { label: "ISMS", value: 87 },
    { label: "ERP", value: 91 },
  ];

  return (
    <div className="relative h-52 w-full max-w-[25rem]" aria-hidden>
      {/* Compliance Dashboard */}
      <div className="absolute left-[5%] top-4 h-[6.5rem] w-[44%] rounded-md border border-neutral-300 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex h-6 items-center justify-between border-b border-neutral-200 px-2">
          <span className="text-[7px] font-semibold text-neutral-950">
            COMPLIANCE METRICS
          </span>
          <div className="flex items-center gap-1">
            <div className="size-1.5 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2">
          {complianceMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="relative mx-auto size-8">
                <svg viewBox="0 0 36 36" className="size-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    className="stroke-neutral-100"
                    strokeWidth="4"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    className="stroke-neutral-950 transition-all duration-500"
                    strokeWidth="4"
                    strokeDasharray={`${metric.value * 0.88} 88`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[6px] font-bold text-neutral-950">
                  {metric.value}%
                </span>
              </div>
              <span className="mt-0.5 block text-[6px] font-medium text-neutral-600">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
        {/* Compliance checklist row */}
        <div className="flex items-center gap-2 border-t border-neutral-100 px-2 py-1">
          {["27001", "GDPR", "SOC2"].map((std) => (
            <div key={std} className="flex items-center gap-0.5">
              <div className="grid size-2 place-items-center rounded-sm bg-neutral-950">
                <svg width="5" height="5" viewBox="0 0 5 5">
                  <path
                    d="M1 2.5l1 1 2-2"
                    stroke="white"
                    fill="none"
                    strokeWidth="0.8"
                  />
                </svg>
              </div>
              <span className="text-[5px] text-neutral-600">{std}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Database with ERP label */}
      <div className="absolute right-[6%] top-3 flex flex-col items-center transition-transform duration-300 group-hover:translate-y-1">
        <div className="rounded-md border border-neutral-300 bg-white p-2 shadow-sm">
          <div className="relative size-14">
            <div className="absolute inset-x-0 top-0 h-6 rounded-[50%] border border-neutral-950 bg-white" />
            <div className="absolute inset-x-0 top-4 h-6 rounded-[50%] border border-neutral-400 bg-white" />
            <div className="absolute inset-x-0 top-8 h-6 rounded-[50%] border border-neutral-300 bg-white" />
          </div>
        </div>
        <span className="mt-1 rounded bg-neutral-100 px-1.5 py-0.5 text-[7px] font-semibold text-neutral-700">
          ERP
        </span>
      </div>

      {/* Security shield with compliance overlay */}
      <div className="absolute left-[38%] top-[45%] -translate-x-1/2 transition-transform duration-300 group-hover:scale-105">
        <div className="relative">
          <svg
            width="36"
            height="42"
            viewBox="0 0 36 42"
            className="drop-shadow-sm"
          >
            <path
              d="M18 2L4 8v12c0 10 14 18 14 18s14-8 14-18V8L18 2z"
              className="fill-white stroke-neutral-300"
              strokeWidth="1.5"
            />
            <path
              d="M12 20l4 4 8-10"
              className="stroke-neutral-950"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[6px] font-medium text-neutral-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Secure
          </span>
        </div>
      </div>

      {/* Connection lines */}
      <svg
        className="absolute inset-x-0 bottom-2 mx-auto h-20 w-[88%] overflow-visible"
        fill="none"
        viewBox="0 0 380 80"
      >
        {/* Flow from Dashboard to Standards to ERP */}
        <path
          d="M60 40 L130 40"
          className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M170 40 L240 40"
          className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M280 40 L340 40"
          className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {/* Node: Analytics */}
        <g>
          <rect
            x="30"
            y="26"
            width="50"
            height="28"
            rx="4"
            className="fill-white stroke-neutral-300"
          />
          <text
            x="55"
            y="44"
            textAnchor="middle"
            className="fill-neutral-950 text-[7px] font-medium"
          >
            Analytics
          </text>
        </g>

        {/* Node: Standards (center, highlighted) */}
        <g>
          <rect
            x="130"
            y="22"
            width="60"
            height="36"
            rx="5"
            className="fill-neutral-950"
          />
          <text
            x="160"
            y="38"
            textAnchor="middle"
            className="fill-white text-[7px] font-bold"
          >
            Standards
          </text>
          <text
            x="160"
            y="50"
            textAnchor="middle"
            className="fill-neutral-400 text-[6px]"
          >
            Alignment
          </text>
        </g>

        {/* Node: Security */}
        <g>
          <rect
            x="220"
            y="26"
            width="50"
            height="28"
            rx="4"
            className="fill-white stroke-neutral-300"
          />
          <text
            x="245"
            y="44"
            textAnchor="middle"
            className="fill-neutral-950 text-[7px] font-medium"
          >
            Security
          </text>
        </g>

        {/* Node: Systems */}
        <g>
          <rect
            x="300"
            y="26"
            width="50"
            height="28"
            rx="4"
            className="fill-white stroke-neutral-300"
          />
          <text
            x="325"
            y="44"
            textAnchor="middle"
            className="fill-neutral-950 text-[7px] font-medium"
          >
            Systems
          </text>
        </g>

        {/* Connection dots */}
        {[85, 195, 295].map((x) => (
          <circle
            key={x}
            cx={x}
            cy={40}
            r={3}
            className="fill-neutral-300 transition-colors duration-300 group-hover:fill-neutral-950"
          />
        ))}
      </svg>
    </div>
  );
}
