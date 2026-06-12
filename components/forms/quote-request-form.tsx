"use client";

import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { LeadContactFields } from "@/components/forms/lead-contact-fields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitQuoteRequest } from "@/lib/actions/submit-forms";

export function QuoteRequestForm() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
          const result = await submitQuoteRequest(formData);

          if (!result.ok) {
            toast.error("Unable to send quote request", {
              description: result.error,
            });
            return;
          }

          form.reset();
          toast.success("Quote request sent", {
            description:
              "Thank you. Our team will respond with product recommendations and commercial support shortly.",
          });
        });
      }}
    >
      <LeadContactFields idPrefix="quote" />

      <div className="grid gap-2">
        <Label htmlFor="quote-product">Product / system (optional)</Label>
        <Input
          id="quote-product"
          name="productInterest"
          placeholder="e.g. Gas chlorinator, leak detection system"
          className="h-11 rounded-xl bg-white"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="quote-message">Requirement</Label>
        <Textarea
          id="quote-message"
          name="message"
          required
          rows={5}
          placeholder="Describe capacity, application, timeline, or project details."
          className="min-h-32 rounded-xl bg-white"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending request...
          </>
        ) : (
          "Submit quote request"
        )}
      </Button>
    </form>
  );
}
