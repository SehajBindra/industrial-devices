import { z } from "zod";

import {
  contactEnquirySchema,
  downloadLeadSchema,
  firstZodError,
  formDataToObject,
  leadContactSchema,
  quoteRequestSchema,
  type LeadContactValues,
} from "@/lib/form-schemas";

export type LeadContactFields = LeadContactValues;

export type FormActionResult =
  | { ok: true }
  | { ok: false; error: string };

type ParseResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export function parseLeadContactFields(
  formData: FormData,
): LeadContactFields | { error: string } {
  const parsed = leadContactSchema.safeParse(formDataToObject(formData));

  if (!parsed.success) {
    return { error: firstZodError(parsed.error) };
  }

  return parsed.data;
}

export function parseContactEnquiry(
  formData: FormData,
): ParseResult<z.infer<typeof contactEnquirySchema>> {
  const parsed = contactEnquirySchema.safeParse(formDataToObject(formData));
  if (!parsed.success) {
    return { success: false, error: firstZodError(parsed.error) };
  }
  return { success: true, data: parsed.data };
}

export function parseQuoteRequest(
  formData: FormData,
): ParseResult<z.infer<typeof quoteRequestSchema>> {
  const parsed = quoteRequestSchema.safeParse(formDataToObject(formData));
  if (!parsed.success) {
    return { success: false, error: firstZodError(parsed.error) };
  }
  return { success: true, data: parsed.data };
}

export function parseDownloadLead(
  formData: FormData,
): ParseResult<z.infer<typeof downloadLeadSchema>> {
  const parsed = downloadLeadSchema.safeParse(formDataToObject(formData));
  if (!parsed.success) {
    return { success: false, error: firstZodError(parsed.error) };
  }
  return { success: true, data: parsed.data };
}

export function leadFieldsToEmailRows(fields: LeadContactFields) {
  return [
    { label: "Name", value: fields.name },
    { label: "Company", value: fields.company },
    { label: "Email", value: fields.email },
    { label: "Phone", value: fields.phone },
  ];
}
