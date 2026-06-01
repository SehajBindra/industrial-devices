"use client"

import { useReducedMotion } from "motion/react"
import { motion } from "motion/react"

const STATS = [
  { label: "Years of practice", value: "22+" },
  { label: "Professionals", value: "91" },
  { label: "Location touchpoints", value: "1.5k+" },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function StatsStrip() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-b border-neutral-200 bg-neutral-950 py-14 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              className="flex flex-col gap-2 border-neutral-800 sm:border-l sm:pl-8 first:sm:border-l-0 first:sm:pl-0"
            >
              <span className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium tracking-wide text-neutral-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
