"use client";

import { Download } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { DownloadGateSheet } from "@/components/forms/download-gate-sheet";
import { Button } from "@/components/ui/button";
import { downloads } from "@/lib/data";

const companyCatalogue =
  downloads.find((download) => download.id === "company-catalogue") ??
  downloads[0];

export function HeroCtaButtons() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <Button
        asChild
        className="h-11 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-none transition-transform hover:bg-primary/90 active:scale-[0.98]"
      >
        <Link href="/request-quote">Request a quote</Link>
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={() => setSheetOpen(true)}
        className="h-11 gap-2 rounded-full border-primary/30 bg-white/80 px-7 text-sm font-medium text-primary shadow-none backdrop-blur-sm transition-[transform,box-shadow,gap,background-color,border-color,color] duration-300 ease-out hover:-translate-y-px hover:gap-2.5 hover:border-primary/45 hover:bg-white hover:text-primary hover:shadow-[0_4px_18px_-6px_rgba(0,119,182,0.16)] active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
      >
        <Download className="size-4" aria-hidden />
        Download catalogue
      </Button>

      <DownloadGateSheet
        download={companyCatalogue}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </>
  );
}
