"use client";

import { useEffect, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LeadContactFormFields } from "@/components/forms/lead-contact-form-fields";
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { submitDownloadLead } from "@/lib/actions/submit-forms";
import type { SiteDownload } from "@/lib/data";
import {
  leadContactSchema,
  type LeadContactValues,
} from "@/lib/form-schemas";

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
  const [isPending, startTransition] = useTransition();
  const form = useForm<LeadContactValues>({
    resolver: zodResolver(leadContactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

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

        <Form {...form}>
          <form
            className="space-y-5 px-4 pb-6"
            onSubmit={form.handleSubmit((values) => {
              if (!download) {
                return;
              }

              startTransition(async () => {
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                  formData.set(key, value);
                });
                formData.set("catalogueTitle", download.title);

                const result = await submitDownloadLead(formData);

                if (!result.ok) {
                  toast.error("Unable to start download", {
                    description: result.error,
                  });
                  return;
                }

                triggerFileDownload(download);
                onOpenChange(false);
                form.reset();
                toast.success("Download started", {
                  description: `${download.title} is downloading now.`,
                });
              });
            })}
          >
            <LeadContactFormFields control={form.control} />

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
        </Form>
      </SheetContent>
    </Sheet>
  );
}
