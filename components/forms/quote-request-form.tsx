"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";

import { LeadContactFields } from "@/components/forms/lead-contact-fields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitQuoteRequest } from "@/lib/actions/submit-forms";

export function QuoteRequestForm() {
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setError(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        startTransition(async () => {
          const result = await submitQuoteRequest(formData);

          if (!result.ok) {
            setError(result.error);
            return;
          }

          setSubmitted(true);
          form.reset();
        });
      }}
    >
      {submitted ? (
        <div
          role="status"
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
        >
          Thank you. Your quote request has been sent to our team. We will
          respond shortly.
        </div>
      ) : null}

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

      {error ? (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      ) : null}

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
