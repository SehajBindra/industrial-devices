"use client"

import { useReducedMotion } from "motion/react"
import { motion } from "motion/react"

const QUOTES = [
  {
    quote:
      "Excellent consulting and training inputs for our integrated management system—ultimately leading to IMS certification. Their expertise integrating IATF, EMS, and OHS tools was commendable.",
    name: "Mr. Pradeep Ghadi",
    role: "GM, TMTL — Bhopal",
  },
  {
    quote:
      "Professionalism and knowledge on ISO requirements were outstanding—positive, dedicated, and focused on finishing on time.",
    name: "Piyush Joshi",
    role: "AVP (Tech Cell), Wonder Cement",
  },
  {
    quote:
      "Their grasp on IRIS showed in the procedures and content they drafted—and in the guidance during implementation at Bombardier Transportation.",
    name: "Ajay Haldar",
    role: "Director, Quality — Bombardier Transportation India",
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="clients"
      className="border-b border-neutral-200 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55, ease }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium tracking-[0.28em] text-neutral-500 uppercase">
            Evidence from the field
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Trusted where the work is hardest.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item, index) => (
            <motion.figure
              key={item.name}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease, delay: index * 0.07 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 sm:p-7"
            >
              <blockquote className="text-sm leading-relaxed text-neutral-700 sm:text-[15px]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-neutral-200/80 pt-5">
                <p className="text-sm font-semibold text-neutral-950">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-neutral-500">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
