import { cn } from "@/lib/utils"

const ITEMS = [
  "Gas Chlorinators",
  "Vacuum Chlorinators",
  "Chlorine Vaporizers",
  "Chlorine Dosing",
  "Water Chlorination",
  "Leak Detectors",
  "Absorption Systems",
  "Emergency Repair Kits",
  "Chlorine Dioxide",
  "Chemical Dosing",
  "Pressure Reducing Valves",
  "Manifolds & Accessories",
] as const

export function StandardsMarquee({ reverse }: { reverse?: boolean }) {
  const sequence = [...ITEMS, ...ITEMS]
  return (
    <div className="relative overflow-hidden border-y border-neutral-200 bg-neutral-950 py-3 text-white">
      <div
        className={cn(
          "flex w-max gap-10 pr-10",
          reverse ? "animate-marquee-r" : "animate-marquee-l"
        )}
      >
        {sequence.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="shrink-0 text-[13px] font-medium tracking-wide text-neutral-300"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
