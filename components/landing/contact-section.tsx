"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const OFFICES = [
  {
    city: "New Delhi (Manufacturing)",
    lines: [
      "Okhla Industrial Area",
      "Design, manufacturing & servicing",
      "New Delhi, India",
    ],
  },
  {
    city: "Corporate Office",
    lines: [
      "Industrial Devices (India) Pvt. Ltd.",
      "Administrative & design division",
      "New Delhi",
    ],
  },
  {
    city: "Supply & Commissioning",
    lines: [
      "Municipal · Power · Public Health",
      "Chemical · Paper Pulp · Process",
      "Pan-India projects",
    ],
  },
] as const;

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="text-xs font-medium tracking-[0.28em] text-neutral-500 uppercase">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Discuss your chlorination requirement.
            </h2>
            <p className="mt-4 line-clamp-2 max-w-md text-base leading-relaxed text-neutral-600">
              Reach our team for system design, product selection, or
              commissioning support. We respond with technical owners.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white shadow-none transition-transform hover:bg-neutral-900 active:scale-[0.98]"
              >
                <a href="tel:+911141611916">Call +91 11 4161 1916</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex h-11 items-center gap-1 rounded-full border-neutral-300 bg-white px-6 text-sm font-medium shadow-none"
              >
                <a href="https://www.industrialdevices.in/">
                  Visit website
                  <ArrowUpRightIcon className="size-3.5 opacity-70" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              Industrial Devices (India) Pvt. Ltd. · Okhla Industrial Area, New
              Delhi
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, ease, delay: 0.06 }}
            className="space-y-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
          >
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                Website
              </p>
              <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-neutral-950">
                <Link
                  href="https://www.industrialdevices.in/"
                  className="transition-colors hover:text-neutral-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.industrialdevices.in
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                Phone
              </p>
              <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-neutral-950">
                <a href="tel:+911141611916" className="hover:text-neutral-600">
                  +91-11-41611916
                </a>
              </div>
            </div>
            <div className="space-y-5 border-t border-neutral-200 pt-6">
              {OFFICES.map((office) => (
                <div key={office.city}>
                  <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    {office.city}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
