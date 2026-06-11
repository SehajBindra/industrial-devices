"use client";

import { useEffect, useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

import { LeadContactFields } from "@/components/forms/lead-contact-fields";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { submitDownloadLead } from "@/lib/actions/submit-forms";
import type { SiteDownload } from "@/lib/data";

type DownloadGateSheetProps = {
  download: SiteDownload | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function triggerFileDownload(download: SiteDownload) {
  const anchor = document.createElement("a");
  anchor.href = download.file;
  anchor.download = download.fileName;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function DownloadGateSheet({
  download,
  open,
  onOpenChange,
}: DownloadGateSheetProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!open) {
      setError(null);
    }
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Download {download?.title ?? "catalogue"}</SheetTitle>
          <SheetDescription>
            Share your contact details to access this catalogue. Our team may
            follow up with technical support.
          </SheetDescription>
        </SheetHeader>

        <form
          className="space-y-5 px-4 pb-6"
          onSubmit={(event) => {
            event.preventDefault();

            if (!download) {
              return;
            }

            setError(null);
            const form = event.currentTarget;
            const formData = new FormData(form);
            formData.set("catalogueTitle", download.title);

            startTransition(async () => {
              const result = await submitDownloadLead(formData);

              if (!result.ok) {
                setError(result.error);
                return;
              }

              triggerFileDownload(download);
              onOpenChange(false);
              form.reset();
            });
          }}
        >
          <LeadContactFields idPrefix="download" />

          {error ? (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={isPending || !download}
            className="h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Preparing download...
              </>
            ) : (
              "Submit & download"
            )}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
