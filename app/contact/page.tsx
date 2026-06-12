import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { SectionIntro } from "@/components/landing/section-intro";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Industrial Devices (India)",
  description:
    "Questions about chlorination systems, commissioning, or support? Tell us what you need and we will connect you with the right person on our team.",
};

export default function ContactPage() {
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
                    Contact <span className="text-primary">us</span>
                  </>
                }
                description="Questions about chlorination systems, commissioning, or support? Tell us what you need and we will connect you with the right person on our team."
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
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="mt-8 h-auto w-full max-w-xl rounded-md object-cover shadow-[0_20px_70px_rgba(15,23,42,0.12)]"
              />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
