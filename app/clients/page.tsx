import type { Metadata } from "next";

import { ClientLogoMarquee } from "@/components/landing/client-logo-marquee";
import { clientNames } from "@/lib/data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Clients | Industrial Devices (India)",
  description:
    "Client references and project experience for chlorination and water treatment systems supplied by Industrial Devices (India).",
  path: "/clients",
  ogImage: "/testimonials/customer-testimonial-reference.png",
});

export default function ClientsPage() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <section className="overflow-hidden border-b border-neutral-200 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="mt-4 text-balance text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Industrial Devices has successfully executed more than{" "}
              <span className="text-primary mr-2">2000</span>
              projects in <span className="text-primary">India</span> and{" "}
              <span className="text-primary">overseas</span>
            </h1>
          </div>
        </div>

        <ClientLogoMarquee className="mt-12" />
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 border-b border-neutral-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-medium tracking-tight text-primary sm:text-3xl">
              Client list
            </h2>
          </div>

          <ol className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {clientNames.map((clientName, index) => (
              <li
                key={clientName}
                className="grid grid-cols-[2.75rem_1fr] items-start border-b border-neutral-200 py-3 text-sm leading-snug"
              >
                <span className="font-mono text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-neutral-800">
                  {clientName}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
