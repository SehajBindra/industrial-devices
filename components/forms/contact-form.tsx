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
import { Textarea } from "@/components/ui/textarea";
import { submitContactEnquiry } from "@/lib/actions/submit-forms";
import {
  contactEnquirySchema,
  type ContactEnquiryValues,
} from "@/lib/form-schemas";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactEnquiryValues>({
    resolver: zodResolver(contactEnquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      enquiry: "",
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
              formData.set(key, value);
            });

            const result = await submitContactEnquiry(formData);

            if (!result.ok) {
              toast.error("Unable to send message", {
                description: result.error,
              });
              return;
            }

            form.reset();
            toast.success("Message sent", {
              description:
                "Thank you. Our team will be in touch with the right technical contact shortly.",
            });
          });
        })}
      >
        <LeadContactFormFields control={form.control} />

        <FormField
          control={form.control}
          name="enquiry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enquiry</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="How can we help? Share your question, project context, or support need."
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
              Sending message...
            </>
          ) : (
            "Contact our team"
          )}
        </Button>
      </form>
    </Form>
  );
}
