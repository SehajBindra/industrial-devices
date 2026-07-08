import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { QuoteRequestForm } from "@/components/forms/quote-request-form";
import { SectionIntro } from "@/components/landing/section-intro";
import { contactInfo } from "@/lib/data";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Request a Quote | Industrial Devices (India)",
  description:
    "Submit your chlorination or water treatment requirement. Our technical team will respond with product selection and pricing support.",
  path: "/request-quote",
  ogImage: "/quote/industrial-water-treatment-support.png",
});

export default function RequestQuotePage() {
  return (
    <div className="min-h-full bg-neutral-100 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.055)_1px,transparent_1px)] bg-size-[20px_20px] text-neutral-950">
      <section className="border-b border-neutral-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <SectionIntro
                className="p-0"
                align="start"
                title={
                  <>
                    Request a <span className="text-primary">quote</span>
                  </>
                }
                description="Share your project details and our engineering team will respond with product recommendations, scope, and commercial support."
                descriptionClassName="line-clamp-none"
              />
              <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600">
                For urgent enquiries, call{" "}
                <Link
                  href={contactInfo.phone.href}
                  className="font-medium text-primary hover:underline"
                >
                  {contactInfo.phone.display}
                </Link>{" "}
                email{" "}
                <Link
                  href={contactInfo.email.href}
                  className="font-medium text-primary hover:underline"
                >
                  {contactInfo.email.display}
                </Link>{" "}
                or reach us on{" "}
                <Link
                  href={contactInfo.whatsapp.href}
                  className="font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
                .
              </p>
              <Image
                src="/quote/industrial-water-treatment-support.png"
                alt="Engineer reviewing industrial water treatment equipment during project planning"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="mt-8 h-auto w-full max-w-xl rounded-md object-cover shadow-[0_20px_70px_rgba(15,23,42,0.12)]"
              />
            </div>

            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
