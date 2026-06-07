import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SectionIntro } from "@/components/landing/section-intro";
import type { ProductPage, ProductSpec } from "@/lib/products/types";

function ModelSpecCard({ label, value }: ProductSpec) {
  return (
    <li className="flex h-full min-h-0 flex-col items-start justify-start">
      <div className="flex h-full w-full flex-col border-b border-dashed border-neutral-200">
        <p className="text-base font-semibold text-primary">{label}</p>
        <p className="my-2 max-w-sm flex-1 text-sm leading-snug text-neutral-800">
          {value}
        </p>
      </div>
    </li>
  );
}

type ProductPageContentProps = {
  product: ProductPage;
};

export function ProductPageContent({ product }: ProductPageContentProps) {
  const {
    models,
    intro,
    seoHeadings,
    sectionHeadingId,
    sectionTitle,
    sectionTitleHighlight,
  } = product;

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
          {seoHeadings.map(({ level, text }) => {
            const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
            return <Tag key={text}>{text}</Tag>;
          })}
        </div>

        <SectionIntro
          className="p-0"
          align="start"
          headingId={sectionHeadingId}
          title={
            <>
              {sectionTitle}{" "}
              <span className="text-primary">{sectionTitleHighlight}</span>
            </>
          }
        />

        {intro ? (
          <p className=" max-w-2xl text-sm  leading-relaxed text-neutral-600 sm:text-base">
            {intro}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col gap-12">
          {models.map(
            (
              { id, heading, imageSrc, imageAlt, descriptionPoints, specs },
              index,
            ) => (
              <article
                key={id}
                className="grid grid-cols-1 items-start gap-8 rounded-sm lg:grid-cols-2 lg:gap-20"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="overflow-hidden rounded-md border border-dashed border-neutral-300 bg-white p-2 shadow-2xl">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={1200}
                      height={900}
                      quality={90}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-auto w-full rounded-md object-cover"
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
                  {specs.length > 0 ? (
                    <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      {specs.map((spec) => (
                        <ModelSpecCard
                          key={`${spec.label}-${spec.value}`}
                          {...spec}
                        />
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
