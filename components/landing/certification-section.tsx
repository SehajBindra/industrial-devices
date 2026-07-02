"use client";

import { Download, ExternalLink, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionIntro } from "@/components/landing/section-intro";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data";
import { cn } from "@/lib/utils";

function RegistrationMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-4 border-primary/35",
        className,
      )}
    />
  );
}

function CertificateDocumentFrame({
  title,
  previewImage,
}: {
  title: string;
  previewImage: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-md border border-neutral-200/90 bg-[linear-gradient(180deg,#fcfcfc_0%,#f4f6f8_100%)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_50px_rgba(15,23,42,0.06)] sm:p-4">
      <RegistrationMark className="top-3 left-3 border-t-2 border-l-2" />
      <RegistrationMark className="top-3 right-3 border-t-2 border-r-2" />
      <RegistrationMark className="bottom-3 left-3 border-b-2 border-l-2" />
      <RegistrationMark className="right-3 bottom-3 border-r-2 border-b-2" />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 bg-primary/3 sm:size-36"
      >
        <div className="absolute inset-2 rounded-full border border-dashed border-primary/15" />
        <ShieldCheck className="absolute top-1/2 left-1/2 size-7 -translate-x-1/2 -translate-y-1/2 text-primary/20 sm:size-8" />
      </div>

      <div className="relative aspect-3/4 overflow-hidden rounded-sm border border-neutral-200/80 bg-white shadow-sm">
        <Image
          src={previewImage}
          alt={`${title} certificate`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

export function CertificationSection() {
  return (
    <section className="border-b border-neutral-200 bg-white pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <BlurFade
          delay={0.1}
          inView
          direction="up"
          blur="20px"
          duration={0.7}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/4 px-3 py-1.5 text-[11px] font-medium tracking-[0.14em] text-primary uppercase"
        >
          <ShieldCheck className="size-3.5" aria-hidden />
          Compliance & quality assurance
        </BlurFade>

        <SectionIntro
          className="p-0"
          align="start"
          title={
            <>
              Certified to{" "}
              <span className="text-primary">international standards</span>
            </>
          }
          description="Industrial Devices (India) holds current ISO certifications for quality management and occupational health & safety — available for tender submissions, client audits, and factory acceptance reviews."
          descriptionClassName="line-clamp-none max-w-2xl"
        />

        <BlurFade
          delay={0.2}
          inView
          direction="up"
          blur="16px"
          duration={0.7}
          className="mt-8 flex flex-wrap gap-2"
        >
          {certifications.map((certificate) => (
            <span
              key={certificate.id}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs tracking-tight text-neutral-700"
            >
              {certificate.title}
            </span>
          ))}
        </BlurFade>

        <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-14">
          {certifications.map((certificate, index) => (
            <BlurFade
              key={certificate.id}
              delay={0.15 + index * 0.1}
              inView
              direction="up"
              blur="22px"
              duration={0.8}
            >
              <article className="group grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10">
                <div
                  className={cn(
                    "flex flex-col",
                    index % 2 === 1 && "lg:order-2",
                  )}
                >
                  <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-primary uppercase">
                    {certificate.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-light tracking-tight text-neutral-950 sm:text-4xl">
                    {certificate.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-[15px]">
                    {certificate.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      asChild
                      className="h-11 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      <Link
                        href={certificate.file}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-4" aria-hidden />
                        View certificate
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 rounded-full border-neutral-300 bg-white px-6 text-sm font-medium text-neutral-950 hover:bg-neutral-50"
                    >
                      <a
                        href={certificate.file}
                        download={certificate.fileName}
                      >
                        <Download className="size-4" aria-hidden />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>

                <div
                  className={cn("relative", index % 2 === 1 && "lg:order-1")}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(0,119,182,0.07)_0%,transparent_68%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <CertificateDocumentFrame
                    title={certificate.title}
                    previewImage={certificate.previewImage}
                  />
                </div>
              </article>

              {index < certifications.length - 1 ? (
                <div
                  aria-hidden
                  className="mt-10 h-px w-full bg-linear-to-r from-transparent via-neutral-200 to-transparent sm:mt-14"
                />
              ) : null}
            </BlurFade>
          ))}
        </div>

        <BlurFade
          delay={0.25}
          inView
          direction="up"
          blur="18px"
          duration={0.7}
          className="mt-14 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/80 px-5 py-4 sm:mt-16 sm:px-6 sm:py-5"
        >
          <p className="text-sm leading-relaxed text-neutral-600">
            Need a stamped copy or verification letter for a tender?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact our team
            </Link>{" "}
            and we will share the documentation your project requires.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
