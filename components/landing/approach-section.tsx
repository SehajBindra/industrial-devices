import Image from "next/image";
import Link from "next/link";

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
    imageSrc: "/applications/drinking-water.webp",
    imageAlt:
      "Clean municipal water treatment channel with stainless dosing pipework",
  },
  {
    title: "Swimming Pools",
    description:
      "Controlled chlorination for commercial pools, clubs, hotels, and public aquatic facilities.",
    imageSrc: "/applications/swimming-pools.webp",
    imageAlt:
      "Swimming pool chlorination dosing equipment beside clear pool water",
  },
  {
    title: "Wastewater Treatment",
    description:
      "Chlorination for STP, ETP, treated water reuse, and environmental discharge compliance.",
    imageSrc: "/applications/wastewater-treatment.webp",
    imageAlt:
      "Modern wastewater treatment basin with railings and dosing pipework",
  },
  {
    title: "Cooling Tower Control",
    description:
      "Biofouling, algae, bacterial contamination, and process water control for cooling systems.",
    imageSrc: "/applications/cooling-tower-control.webp",
    imageAlt:
      "Cooling tower water basin with controlled recirculation and stainless lines",
  },
  {
    title: "Process Water",
    description:
      "Reliable disinfection for chemical, pharmaceutical, food processing, and industrial water loops.",
    imageSrc: "/applications/process-water.webp",
    imageAlt:
      "Clean industrial process room with stainless steel water loop piping",
  },
  {
    title: "Odour & Bacteria Control",
    description:
      "Chlorine dioxide and chlorination systems for odour control, biofilm removal, and microbial reduction.",
    imageSrc: "/applications/odour-bacteria-control.webp",
    imageAlt:
      "Compact chemical dosing cabinet connected to sanitized pipework",
  },
  {
    title: "Seawater & Brine",
    description:
      "Electro chlorination systems for on-site generation in seawater and brine applications.",
    imageSrc: "/applications/seawater-brine.webp",
    imageAlt:
      "Electrochlorination skid beside seawater intake piping and calm water",
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
      <div className="mx-auto max-w-7xl px-4 mt-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map(
            ({ title, description, imageSrc, imageAlt }) => (
              <div
                key={title}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-neutral-100 bg-neutral-50 text-left shadow-[0_18px_60px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-neutral-200 hover:bg-white hover:shadow-[0_24px_80px_rgba(15,23,42,0.075)]"
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
                    className="text-muted-foreground mb-5 text-sm leading-normal"
                    title={description}
                  >
                    {description}
                  </p>
                  <Link
                    href="https://www.industrialdevices.in/"
                    className="text-primary mt-auto text-sm hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more &gt;
                  </Link>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
