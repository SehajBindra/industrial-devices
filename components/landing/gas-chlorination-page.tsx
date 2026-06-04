import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionIntro } from "@/components/landing/section-intro";
import {
  type GasChlorinatorSpec,
  gasChlorinationPage,
  gasChlorinationSeoHeadings,
} from "@/lib/products/gas-chlorination";

function specGridClass(count: number) {
  if (count >= 4) {
    return "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4";
  }
  return "grid grid-cols-1 gap-3 sm:grid-cols-3";
}

function ModelSpecCard({ label, value }: GasChlorinatorSpec) {
  return (
    <li className="flex h-full min-h-0">
      <div className="flex h-full w-full flex-col rounded-sm border border-neutral-200 border-l-2 border-l-primary bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {label}
        </p>
        <p className="mt-2 flex-1 text-sm leading-snug text-neutral-800">
          {value}
        </p>
      </div>
    </li>
  );
}

export function GasChlorinationPageContent() {
  const { models } = gasChlorinationPage;

  return (
    <section className="border-b border-neutral-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/#products"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 transition-colors hover:text-primary"
        >
          <ArrowLeft aria-hidden className="size-4" />
          All products
        </Link>

        <div className="sr-only">
          {gasChlorinationSeoHeadings.map(({ level, text }) => {
            const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
            return <Tag key={text}>{text}</Tag>;
          })}
        </div>

        <SectionIntro
          align="start"
          headingId="gas-chlorinator-models"
          title={
            <>
              Gas chlorinator <span className="text-primary">models</span>.
            </>
          }
        />

        <div className="mt-10 flex flex-col gap-12">
          {models.map(
            (
              {
                id,
                heading,
                imageSrc,
                imageAlt,
                descriptionPoints,
                specs,
              },
              index,
            ) => (
              <article
                key={id}
                className="grid grid-cols-1 items-start gap-8 rounded-md border border-neutral-200 bg-neutral-50/80 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="overflow-hidden rounded-md border border-neutral-200 bg-white p-4">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={1200}
                      height={900}
                      quality={88}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-auto w-full rounded-md object-contain"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <h2 className="text-2xl font-medium tracking-tight text-primary sm:text-3xl">
                    {heading}
                  </h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {descriptionPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className={`mt-6 ${specGridClass(specs.length)}`}>
                    {specs.map((spec) => (
                      <ModelSpecCard
                        key={`${spec.label}-${spec.value}`}
                        {...spec}
                      />
                    ))}
                  </ul>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
