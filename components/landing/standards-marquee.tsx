import { cn } from "@/lib/utils"

const ITEMS = [
  "ISO 9001",
  "IATF 16949",
  "ISO 14001",
  "ISO 45001",
  "ISO 50001",
  "IRIS / ISO-TS 22163",
  "Industrial safety",
  "NDT & inspection",
  "Energy & water audits",
  "IT & ISO 27001",
  "ERP & data",
  "Training & auditors",
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
