import Image from "next/image";

import { SectionIntro } from "./section-intro";

const CORE_VALUES: readonly {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}[] = [
  {
    title: "Drinking Water",
    description:
      "Safe water disinfection for municipal supply, reservoirs, pipelines, and treatment plants.",
    imageSrc: "/applications/drinking-water-experience.webp",
    imageAlt:
      "Children drinking clean water from a public fountain in a school courtyard",
  },
  {
    title: "Swimming Pools",
    description:
      "Controlled chlorination for commercial pools, clubs, hotels, and public aquatic facilities.",
    imageSrc: "/applications/swimming-pools-experience.webp",
    imageAlt:
      "Families swimming in clear water at a well-maintained public pool",
  },
  {
    title: "Wastewater Treatment",
    description:
      "Chlorination for STP, ETP, treated water reuse, and environmental discharge compliance.",
    imageSrc: "/applications/wastewater-treatment-experience.webp",
    imageAlt:
      "Technician checking treated water reuse beside landscaped irrigation",
  },
  {
    title: "Cooling Tower Control",
    description:
      "Biofouling, algae, bacterial contamination, and process water control for cooling systems.",
    imageSrc: "/applications/cooling-tower-control-experience.webp",
    imageAlt:
      "Plant technician inspecting water quality beside an operating cooling tower",
  },
  {
    title: "Process Water",
    description:
      "Reliable disinfection for chemical, pharmaceutical, food processing, and industrial water loops.",
    imageSrc: "/applications/process-water-experience.webp",
    imageAlt:
      "Operators checking a sanitized process water loop in a clean industrial room",
  },
  {
    title: "Odour & Bacteria Control",
    description:
      "Chlorine dioxide and chlorination systems for odour control, biofilm removal, and microbial reduction.",
    imageSrc: "/applications/odour-bacteria-control-experience.webp",
    imageAlt:
      "Technician inspecting covered treatment infrastructure near a comfortable facility walkway",
  },
  {
    title: "Seawater & Brine",
    description:
      "Electro chlorination systems for on-site generation in seawater and brine applications.",
    imageSrc: "/applications/seawater-brine-experience.webp",
    imageAlt:
      "Technician inspecting seawater intake piping at a coastal electrochlorination facility",
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map(({ title, description, imageSrc, imageAlt }) => (
            <div
              key={title}
              className="group flex h-full flex-col overflow-hidden rounded-md border border-dashed border-neutral-200 bg-neutral-50 text-left shadow-[0_18px_60px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-[0_24px_80px_rgba(15,23,42,0.075)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/0 to-white/10" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-col gap-y-3">
                  <h2 className="text-foreground font-uncutBold text-xl">
                    {title}
                  </h2>
                </div>
                <p
                  className="text-muted-foreground text-sm leading-normal"
                  title={description}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
