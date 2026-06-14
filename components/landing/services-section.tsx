import { SectionIntro } from "./section-intro";
import { ServicesBentoGrid } from "./services-bento-grid";

export function ServicesSection() {
  return (
    <section
      id="products"
      className="scroll-mt-28 border-b border-gray-100 bg-white pt-32 pb-20 sm:scroll-mt-32 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionIntro
          headingId="products-heading"
          align="start"
          description="Technically advanced, field-proven chlorination and disinfection equipment for municipal, industrial, and process requirements."
          title={
            <>
              Complete{" "}
              <span className="text-primary">chlorination & disinfection</span>{" "}
              solutions.
            </>
          }
        />

        <ServicesBentoGrid />
      </div>
    </section>
  );
}
