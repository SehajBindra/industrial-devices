import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionIntro } from "@/components/landing/section-intro";
import { clientAreas, importantClients } from "@/lib/data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Clients | Industrial Devices (India)",
  description:
    "Important Industrial Devices clients across drinking water, sewage treatment, thermal power, refinery water, cooling water, and process water applications.",
  path: "/clients",
  ogImage: "/testimonials/customer-testimonial-reference.png",
});

function clientsForArea(areaId: string) {
  return importantClients.filter((client) => client.areaIds.includes(areaId));
}

export default function ClientsPage() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <section className="border-b border-neutral-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionIntro
            className="p-0"
            align="start"
            title={
              <>
                Important <span className="text-primary">clients</span>.
              </>
            }
            description="Selected client references across municipal water, sewage treatment, power, refinery, cooling water, and process water applications."
            descriptionClassName="line-clamp-none"
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {importantClients.map((client) => (
              <div
                key={client.id}
                className="flex min-h-36 flex-col items-center justify-center rounded-md border border-neutral-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.04)]"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={180}
                  height={90}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                />
                <p className="mt-4 text-center text-xs font-medium leading-snug text-neutral-700">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-neutral-200 pt-10">
            <h2 className="text-2xl font-medium tracking-tight text-primary sm:text-3xl">
              Client application areas
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {clientAreas.map((area) => (
                <Link
                  key={area.id}
                  href={`#${area.id}`}
                  className="group flex h-full items-start justify-between gap-4 rounded-md border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-neutral-300 hover:bg-white"
                >
                  <div>
                    <h3 className="font-semibold text-neutral-950">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {area.description}
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden
                    className="mt-1 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14 space-y-5">
            {clientAreas.map((area) => {
              const areaClients = clientsForArea(area.id);

              return (
                <section
                  key={area.id}
                  id={area.id}
                  className="scroll-mt-28 rounded-md border border-neutral-200 bg-white p-6 sm:scroll-mt-32 sm:p-7"
                >
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
                    <div>
                      <h2 className="text-xl font-medium tracking-tight text-neutral-950">
                        {area.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {area.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {areaClients.map((client) => (
                        <div
                          key={`${area.id}-${client.id}`}
                          className="flex min-h-24 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 p-4"
                        >
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            width={150}
                            height={72}
                            className="h-auto max-h-12 w-auto max-w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
