import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ClientListCatalogSection } from "@/components/landing/client-list-table";
import { SectionIntro } from "@/components/landing/section-intro";
import { clientListCatalogs } from "@/lib/clients-list";
import { importantClients } from "@/lib/data";
import { createPageMetadata } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Clients | Industrial Devices (India)",
  description:
    "Client references for WTP, STP, and thermal power chlorination systems supplied by Industrial Devices (India).",
  path: "/clients",
  ogImage: "/testimonials/customer-testimonial-reference.png",
});

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
                Project <span className="text-primary">clientele</span>.
              </>
            }
            description="Selected reference logos and full commissioning registers for water treatment, sewage treatment, and thermal power chlorination systems."
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
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-primary sm:text-3xl">
                  Client registers
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
                  Browse commissioning records by application area. Each register
                  matches the official PDF lists published by Industrial Devices.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {clientListCatalogs.map((catalog) => {
                const projectCount = catalog.sections.reduce(
                  (count, section) => count + section.entries.length,
                  0,
                );

                return (
                  <Link
                    key={catalog.id}
                    href={`#${catalog.id}`}
                    className="group flex h-full items-start justify-between gap-4 rounded-md border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-neutral-300 hover:bg-white"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {projectCount} projects
                      </p>
                      <h3 className="mt-2 font-semibold text-neutral-950">
                        {catalog.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {catalog.description}
                      </p>
                    </div>
                    <ArrowRight
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-14 space-y-8">
            {clientListCatalogs.map((catalog, index) => (
              <div
                key={catalog.id}
                className={cn(index > 0 && "pt-2")}
              >
                <ClientListCatalogSection catalog={catalog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
