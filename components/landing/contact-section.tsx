"use client"

import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { useReducedMotion } from "motion/react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const ease = [0.22, 1, 0.36, 1] as const

const OFFICES = [
  {
    city: "Jaipur (Corporate)",
    lines: ["94/26, 2nd Floor", "Vijay Path, Mansarovar", "Jaipur, Rajasthan"],
  },
  {
    city: "Mumbai",
    lines: [
      "C-502, Greenwood Apartment",
      "Chakala, Andheri Kurla Road",
      "Andheri East, Maharashtra",
    ],
  },
  {
    city: "Others",
    lines: ["Pune · Bengaluru · Gurugram", "Rudrapur · Kolkata", "and pan‑India projects"],
  },
] as const

export function ContactSection() {
  const reduceMotion = useReducedMotion()

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
              Tell us what you are certifying, inspecting, or fixing.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              Reach the desk team for programme design, audit support, or
              inspection planning—we respond with owners, not auto‑replies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-full bg-neutral-950 px-6 text-sm font-medium text-white shadow-none transition-transform hover:bg-neutral-900 active:scale-[0.98]"
              >
                <a href="tel:+919982377770">Call +91 99823 77770</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex h-11 items-center gap-1 rounded-full border-neutral-300 bg-white px-6 text-sm font-medium shadow-none"
              >
                <a href="mailto:desk@qmsil.co.in">
                  Email desk
                  <ArrowUpRightIcon className="size-3.5 opacity-70" />
                </a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              CIN U74999RJ2017PLC059634 · GSTIN 08AAACQ5065E1ZJ
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
                Email
              </p>
              <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-neutral-950">
                <Link
                  href="mailto:desk@qmsil.co.in"
                  className="transition-colors hover:text-neutral-600"
                >
                  desk@qmsil.co.in
                </Link>
                <Link
                  href="mailto:qms.india@qmsil.co.in"
                  className="transition-colors hover:text-neutral-600"
                >
                  qms.india@qmsil.co.in
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                Phone
              </p>
              <div className="mt-2 flex flex-col gap-1 text-sm font-medium text-neutral-950">
                <a href="tel:+9101413594644" className="hover:text-neutral-600">
                  +91-0141-3594644
                </a>
                <a href="tel:+919982377770" className="hover:text-neutral-600">
                  +91-99823-77770
                </a>
                <a href="tel:+919828017851" className="hover:text-neutral-600">
                  +91-98280-17851
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
  )
}
