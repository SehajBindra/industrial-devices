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
          <h3 className="text-2xl font-medium tracking-tight text-primary">
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
      description="Vacuum and gas chlorinators from 250 gms/hr to 1000+ Kgs/hr, for municipal, power, and industrial water treatment."
      title="Gas & vacuum chlorinators"
    >
      <ChlorinatorGraphic />
    </ServiceBentoCardShell>
  );
}

export function IndustrialSafetyBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="Chlorine vaporizers and evaporators for liquid chlorine supply, paired with dosers for steady, controlled feed rates."
      title="Chlorine vaporizers"
    >
      <VaporizerGraphic />
    </ServiceBentoCardShell>
  );
}

export function TrainingDevelopmentBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="Chlorine and chemical dosing systems for process and utility lines, with precision metering for treatment and disinfection."
      title="Chlorine dosing systems"
    >
      <DosingGraphic />
    </ServiceBentoCardShell>
  );
}

export function AuditsAssessmentsBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="End-to-end water chlorination packages for treatment plants, designed, supplied, and commissioned from our Okhla facility."
      title="Water chlorination systems"
    >
      <WaterTreatmentGraphic />
    </ServiceBentoCardShell>
  );
}

export function SoftwareItBentoCard(props: ServiceBentoCardProps) {
  return (
    <ServiceBentoCardShell
      {...props}
      className="md:col-span-3 lg:col-span-2"
      description="Leak detectors, absorption systems, emergency repair kits, and pressure reducing valves for complete plant safety coverage."
      title="Safety & accessories"
    >
      <SafetyAccessoriesGraphic />
    </ServiceBentoCardShell>
  );
}

function ChlorinatorGraphic() {
  const cylinders = [
    { x: 50, height: 112, label: "CL2" },
    { x: 92, height: 98, label: "CL2" },
    { x: 134, height: 118, label: "CL2" },
  ];

  const flowNodes = [
    { x: 220, y: 86, label: "VAC" },
    { x: 300, y: 86, label: "FLOW" },
    { x: 382, y: 86, label: "INJECT" },
  ];

  return (
    <svg
      aria-hidden
      className="h-60 w-full max-w-[37rem] overflow-visible"
      fill="none"
      viewBox="0 0 520 250"
    >
      <path
        d="M46 184h428"
        className="stroke-neutral-200"
        strokeLinecap="round"
        strokeWidth="10"
      />
      <path
        d="M46 184h428"
        className="stroke-white"
        strokeDasharray="10 15"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect
          x="32"
          y="172"
          width="148"
          height="20"
          rx="4"
          className="fill-neutral-950"
        />
        {cylinders.map((cylinder) => (
          <g key={cylinder.x}>
            <rect
              x={cylinder.x}
              y={170 - cylinder.height}
              width="28"
              height={cylinder.height}
              rx="14"
              className="fill-white stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
            />
            <path
              d={`M${cylinder.x + 14} ${170 - cylinder.height}v-16`}
              className="stroke-neutral-950"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <rect
              x={cylinder.x + 8}
              y={164 - cylinder.height}
              width="12"
              height="8"
              rx="2"
              className="fill-neutral-950"
            />
            <text
              x={cylinder.x + 14}
              y={142}
              textAnchor="middle"
              className="fill-neutral-500 text-[8px] font-semibold"
            >
              {cylinder.label}
            </text>
          </g>
        ))}
      </g>

      <path
        d="M166 96h46"
        className="stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M240 96h44M318 96h42"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M418 96c28 0 38 18 38 46v42"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="4"
      />

      {flowNodes.map((node, index) => (
        <g
          key={node.label}
          className="transition-transform duration-300 group-hover:-translate-y-1"
          style={{ transitionDelay: `${index * 45}ms` }}
        >
          <rect
            x={node.x - 28}
            y={node.y - 30}
            width="56"
            height="60"
            rx="8"
            className="fill-white stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
          />
          <circle
            cx={node.x}
            cy={node.y - 8}
            r="12"
            className="fill-neutral-50 stroke-neutral-300"
          />
          <path
            d={`M${node.x - 7} ${node.y - 8}h14M${node.x} ${node.y - 15}v14`}
            className="stroke-neutral-950"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <text
            x={node.x}
            y={node.y + 20}
            textAnchor="middle"
            className="fill-neutral-950 text-[8px] font-bold"
          >
            {node.label}
          </text>
        </g>
      ))}

      <g className="transition-transform duration-300 group-hover:translate-y-1">
        <rect
          x="420"
          y="164"
          width="78"
          height="38"
          rx="6"
          className="fill-white stroke-neutral-300"
        />
        <path
          d="M431 184h54M431 192h54M431 176h54"
          className="stroke-neutral-200"
        />
        <text
          x="459"
          y="188"
          textAnchor="middle"
          className="fill-neutral-950 text-[8px] font-bold"
        >
          WATER MAIN
        </text>
      </g>

      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect x="194" y="152" width="136" height="24" rx="12" className="fill-neutral-950" />
        <text
          x="262"
          y="168"
          textAnchor="middle"
          className="fill-white text-[9px] font-semibold"
        >
          250 g/hr to 1000+ kg/hr
        </text>
      </g>
    </svg>
  );
}

function VaporizerGraphic() {
  const heatLines = [94, 118, 142];

  return (
    <svg
      aria-hidden
      className="h-56 w-full max-w-[25rem] overflow-visible"
      fill="none"
      viewBox="0 0 360 240"
    >
      <path
        d="M60 164h78M222 164h74"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M256 164v-54"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="5"
      />

      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect
          x="42"
          y="86"
          width="48"
          height="92"
          rx="20"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <rect x="54" y="78" width="24" height="12" rx="3" className="fill-neutral-950" />
        <text
          x="66"
          y="136"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-bold"
        >
          LIQUID
        </text>
      </g>

      <g className="transition-transform duration-300 group-hover:scale-[1.02]">
        <rect
          x="130"
          y="52"
          width="98"
          height="146"
          rx="22"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <rect x="149" y="70" width="60" height="110" rx="12" className="fill-neutral-50" />
        {heatLines.map((y) => (
          <path
            key={y}
            d={`M158 ${y}c10-12 20 12 30 0s20 12 30 0`}
            className="stroke-neutral-950"
            strokeLinecap="round"
            strokeWidth="2"
          />
        ))}
        <circle cx="179" cy="36" r="16" className="fill-white stroke-neutral-300" />
        <path
          d="M169 36a10 10 0 0 1 20 0M179 36l7-7"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="179"
          y="208"
          textAnchor="middle"
          className="fill-neutral-950 text-[8px] font-bold"
        >
          VAPORIZER
        </text>
      </g>

      <g className="transition-transform duration-300 group-hover:translate-x-1">
        <rect
          x="238"
          y="72"
          width="70"
          height="42"
          rx="8"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <circle cx="258" cy="94" r="10" className="fill-neutral-50 stroke-neutral-300" />
        <path d="M258 94l7-6" className="stroke-neutral-950" strokeLinecap="round" strokeWidth="2" />
        <path
          d="M278 84v20M288 84v20"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="273"
          y="132"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          GAS FEED
        </text>
      </g>

      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect x="106" y="18" width="100" height="22" rx="11" className="fill-neutral-950" />
        <text
          x="156"
          y="33"
          textAnchor="middle"
          className="fill-white text-[8px] font-semibold"
        >
          CONTROLLED VAPOR
        </text>
      </g>
    </svg>
  );
}

function DosingGraphic() {
  const pumps = [
    { x: 90, label: "A" },
    { x: 160, label: "B" },
    { x: 230, label: "C" },
  ];

  return (
    <svg
      aria-hidden
      className="h-56 w-full max-w-[25rem] overflow-visible"
      fill="none"
      viewBox="0 0 360 240"
    >
      <rect x="56" y="166" width="248" height="18" rx="4" className="fill-neutral-950" />
      <path
        d="M72 112h224M296 112v54"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M72 112h224"
        className="stroke-white"
        strokeDasharray="7 12"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <path
          d="M58 84h56l-8 82H66L58 84z"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <path d="M66 112h40" className="stroke-neutral-200" strokeWidth="16" />
        <text
          x="86"
          y="154"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-semibold"
        >
          SOLUTION
        </text>
      </g>

      {pumps.map((pump, index) => (
        <g
          key={pump.label}
          className="transition-transform duration-300 group-hover:-translate-y-1"
          style={{ transitionDelay: `${index * 45}ms` }}
        >
          <rect
            x={pump.x - 22}
            y="128"
            width="44"
            height="38"
            rx="7"
            className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
          />
          <circle cx={pump.x} cy="147" r="12" className="fill-neutral-50 stroke-neutral-300" />
          <path
            d={`M${pump.x - 6} 147h12M${pump.x} 141v12`}
            className="stroke-neutral-950"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d={`M${pump.x} 128v-16`}
            className="stroke-neutral-300 group-hover:stroke-neutral-950"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <text
            x={pump.x}
            y="201"
            textAnchor="middle"
            className="fill-neutral-500 text-[8px] font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            PUMP {pump.label}
          </text>
        </g>
      ))}

      <g className="transition-transform duration-300 group-hover:translate-x-1">
        <rect
          x="244"
          y="48"
          width="66"
          height="50"
          rx="8"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <path d="M257 82l12-16 13 10 15-20" className="stroke-neutral-950" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <text
          x="277"
          y="116"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-semibold"
        >
          CONTROL
        </text>
      </g>

      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect x="124" y="48" width="84" height="22" rx="11" className="fill-neutral-950" />
        <text
          x="166"
          y="63"
          textAnchor="middle"
          className="fill-white text-[8px] font-semibold"
        >
          PRECISION FEED
        </text>
      </g>
    </svg>
  );
}

function WaterTreatmentGraphic() {
  const stages = [
    { x: 62, label: "RAW" },
    { x: 132, label: "FILTER" },
    { x: 206, label: "DOSE" },
    { x: 284, label: "CLEAR" },
  ];

  return (
    <svg
      aria-hidden
      className="h-56 w-full max-w-[25rem] overflow-visible"
      fill="none"
      viewBox="0 0 360 240"
    >
      <path
        d="M60 124h224"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M60 124h224"
        className="stroke-white"
        strokeDasharray="8 12"
        strokeLinecap="round"
        strokeWidth="2"
      />

      {stages.map((stage, index) => (
        <g
          key={stage.label}
          className="transition-transform duration-300 group-hover:-translate-y-1"
          style={{ transitionDelay: `${index * 45}ms` }}
        >
          <circle
            cx={stage.x}
            cy="124"
            r="22"
            className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
          />
          <path
            d={`M${stage.x - 8} 124c5-8 11 8 17 0`}
            className="stroke-neutral-950"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <text
            x={stage.x}
            y="170"
            textAnchor="middle"
            className="fill-neutral-500 text-[7px] font-bold"
          >
            {stage.label}
          </text>
        </g>
      ))}

      <g className="transition-transform duration-300 group-hover:scale-[1.02]">
        <rect
          x="134"
          y="48"
          width="92"
          height="44"
          rx="8"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <path
          d="M152 76h56M152 64h22M184 64h24"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="180"
          y="34"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          TURNKEY SKID
        </text>
      </g>

      <g className="transition-transform duration-300 group-hover:translate-y-1">
        <rect
          x="68"
          y="184"
          width="222"
          height="26"
          rx="6"
          className="fill-white stroke-neutral-300"
        />
        <path
          d="M84 197h44M148 197h44M212 197h44"
          className="stroke-neutral-200"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <circle cx="272" cy="197" r="6" className="fill-neutral-950" />
      </g>

      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect x="214" y="74" width="76" height="22" rx="11" className="fill-neutral-950" />
        <text
          x="252"
          y="89"
          textAnchor="middle"
          className="fill-white text-[8px] font-semibold"
        >
          SITE READY
        </text>
      </g>
    </svg>
  );
}

function SafetyAccessoriesGraphic() {
  return (
    <svg
      aria-hidden
      className="h-56 w-full max-w-[25rem] overflow-visible"
      fill="none"
      viewBox="0 0 360 240"
    >
      <g className="transition-transform duration-300 group-hover:-translate-y-1">
        <rect
          x="56"
          y="58"
          width="90"
          height="72"
          rx="10"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <path
          d="M78 97c13-22 33-22 46 0M86 101c9-13 21-13 30 0M96 106c3-5 7-5 10 0"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="101"
          y="148"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-bold"
        >
          LEAK DETECTOR
        </text>
      </g>

      <g className="transition-transform duration-300 group-hover:scale-[1.02]">
        <rect
          x="182"
          y="38"
          width="86"
          height="116"
          rx="14"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <path
          d="M202 136V70c0-12 46-12 46 0v66"
          className="fill-neutral-50 stroke-neutral-300"
        />
        <path
          d="M207 118c10-10 26 10 37 0M207 98c10-10 26 10 37 0M207 78c10-10 26 10 37 0"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="225"
          y="174"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-bold"
        >
          ABSORPTION
        </text>
      </g>

      <g className="transition-transform duration-300 group-hover:translate-y-1">
        <rect
          x="72"
          y="166"
          width="92"
          height="44"
          rx="8"
          className="fill-white stroke-neutral-300 group-hover:stroke-neutral-950"
        />
        <path
          d="M88 188h58M96 176v24M138 176v24"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="118"
          y="229"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          ERK KIT
        </text>
      </g>

      <g className="transition-transform duration-300 group-hover:translate-x-1">
        <circle cx="278" cy="184" r="24" className="fill-white stroke-neutral-300" />
        <path
          d="M264 184h28M278 170v28"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M278 184l12-12"
          className="stroke-neutral-950"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <text
          x="278"
          y="225"
          textAnchor="middle"
          className="fill-neutral-500 text-[8px] font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          PRV
        </text>
      </g>

      <path
        d="M146 94h36M225 154v28H164M164 188h90"
        className="stroke-neutral-300 transition-colors duration-300 group-hover:stroke-neutral-950"
        strokeDasharray="5 6"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <rect x="186" y="198" width="76" height="22" rx="11" className="fill-neutral-950" />
        <text
          x="224"
          y="213"
          textAnchor="middle"
          className="fill-white text-[8px] font-semibold"
        >
          PLANT SAFETY
        </text>
      </g>
    </svg>
  );
}
