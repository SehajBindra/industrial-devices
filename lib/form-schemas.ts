import { z } from "zod";

export const leadContactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  company: z.string().trim().min(1, "Please enter your company name."),
  email: z
    .string()
    .trim()
    .pipe(z.email({ error: "Please enter a valid email address." })),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid WhatsApp number.")
    .regex(/^[\d\s+\-()]+$/, "Please enter a valid WhatsApp number."),
});

export const contactEnquirySchema = leadContactSchema.extend({
  enquiry: z
    .string()
    .trim()
    .min(1, "Please describe your enquiry.")
    .min(10, "Please provide a bit more detail in your enquiry."),
});

export const quoteRequestSchema = leadContactSchema.extend({
  productInterest: z.string().trim().optional(),
  message: z
    .string()
    .trim()
    .min(1, "Please describe your requirement.")
    .min(10, "Please provide a bit more detail about your requirement."),
});

export const downloadLeadSchema = leadContactSchema.extend({
  catalogueTitle: z.string().trim().min(1, "Download item is missing."),
});

export type LeadContactValues = z.infer<typeof leadContactSchema>;
export type ContactEnquiryValues = z.infer<typeof contactEnquirySchema>;
export type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;
export type DownloadLeadValues = z.infer<typeof downloadLeadSchema>;

export function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export function firstZodError(error: z.ZodError) {
  return error.issues[0]?.message ?? "Please check your form and try again.";
}
