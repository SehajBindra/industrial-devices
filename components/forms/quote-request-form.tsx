"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { LeadContactFormFields } from "@/components/forms/lead-contact-form-fields";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitQuoteRequest } from "@/lib/actions/submit-forms";
import {
  quoteRequestSchema,
  type QuoteRequestValues,
} from "@/lib/form-schemas";

export function QuoteRequestForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<QuoteRequestValues>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      productInterest: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="space-y-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8"
        onSubmit={form.handleSubmit((values) => {
          startTransition(async () => {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
              if (value) {
                formData.set(key, value);
              }
            });

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
        })}
      >
        <LeadContactFormFields control={form.control} />

        <FormField
          control={form.control}
          name="productInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product / system (optional)</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Gas chlorinator, leak detection system"
                  className="h-11 rounded-xl bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirement</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Describe capacity, application, timeline, or project details."
                  className="min-h-32 rounded-xl bg-white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
    </Form>
  );
}
