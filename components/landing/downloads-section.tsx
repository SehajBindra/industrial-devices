"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";

import { DownloadGateSheet } from "@/components/forms/download-gate-sheet";
import { SectionIntro } from "@/components/landing/section-intro";
import { Button } from "@/components/ui/button";
import { downloads, type SiteDownload } from "@/lib/data";

export function DownloadsSection() {
  const [selectedDownload, setSelectedDownload] = useState<SiteDownload | null>(
    null,
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  function openDownloadGate(download: SiteDownload) {
    setSelectedDownload(download);
    setSheetOpen(true);
  }

  return (
    <>
      <section className="border-b border-neutral-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionIntro
            className="p-0"
            align="start"
            title={
              <>
                Product <span className="text-primary">downloads</span>
              </>
            }
            description="Access company and product catalogues. Additional technical brochures will be added here over time."
            descriptionClassName="line-clamp-none"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {downloads.map((download) => (
              <article
                key={download.id}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="size-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
                      {download.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {download.description}
                    </p>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={() => openDownloadGate(download)}
                  className="mt-6 h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto sm:self-start sm:px-6"
                >
                  <Download className="size-4" aria-hidden />
                  Download PDF
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DownloadGateSheet
        download={selectedDownload}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </>
  );
}
