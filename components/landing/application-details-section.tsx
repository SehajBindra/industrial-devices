import { SectionIntro } from "./section-intro";

const APPLICATION_DETAILS = [
  {
    title: "Municipal Water Treatment",
    subtitle: "Reliable chlorination solutions for municipal water safety",
    description:
      "Complete chlorination and disinfection systems for municipal water treatment plants, helping maintain residual chlorine levels, eliminate harmful microorganisms, and support water quality regulations.",
    points: [
      "Safe drinking water disinfection",
      "Reliable chlorine dosing",
      "Cost-effective operation",
      "Improved public health protection",
    ],
  },
  {
    title: "Sewage & Wastewater Treatment",
    subtitle: "Effective disinfection for STP and ETP applications",
    description:
      "Efficient chlorination systems for Sewage Treatment Plants and Effluent Treatment Plants, designed for bacteria reduction, odour control, pathogen destruction, and treated water reuse.",
    points: [
      "Municipal sewage treatment",
      "Industrial wastewater treatment",
      "Treated water reuse systems",
      "Effluent discharge compliance",
    ],
  },
  {
    title: "Chemical & Pharmaceutical Industry",
    subtitle: "Precision water treatment solutions for process safety",
    description:
      "Engineered chlorination solutions for precise dosing, high hygiene standards, microbial control, cooling water treatment, and strict process safety requirements.",
    points: [
      "Improved process safety",
      "Reliable microbial control",
      "High operational consistency",
      "Customized engineering support",
    ],
  },
  {
    title: "Power Plants & Cooling Water Systems",
    subtitle: "Reliable biofouling control and water treatment",
    description:
      "Chlorination systems for power plants and cooling water systems to prevent biofouling, algae growth, bacterial contamination, and pipeline scaling.",
    points: [
      "Reduced biofouling",
      "Improved cooling efficiency",
      "Lower maintenance cost",
      "Long-term plant reliability",
    ],
  },
] as const;

export function ApplicationDetailsSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          align="start"
          headingId="application-detail-heading"
          description="Focused chlorination packages for the application areas where dosing accuracy, safety, and continuous operation matter most."
          title={
            <>
              Application area{" "}
              <span className="text-primary">solutions</span>.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {APPLICATION_DETAILS.map(({ title, subtitle, description, points }) => (
            <article
              key={title}
              className="rounded-md border border-neutral-200 bg-neutral-50 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                {title}
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-tight text-neutral-950">
                {subtitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {description}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {points.map((point) => (
                  <li
                    key={point}
                    className="rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm leading-snug text-neutral-700"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
