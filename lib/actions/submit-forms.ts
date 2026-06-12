"use server";

import { sendFormEmail } from "@/lib/email";
import {
  leadFieldsToEmailRows,
  parseContactEnquiry,
  parseDownloadLead,
  parseQuoteRequest,
  type FormActionResult,
} from "@/lib/forms";

export async function submitDownloadLead(
  formData: FormData,
): Promise<FormActionResult> {
  const parsed = parseDownloadLead(formData);

  if (!parsed.success) {
    return { ok: false, error: parsed.error };
  }

  const { catalogueTitle, ...fields } = parsed.data;

  try {
    await sendFormEmail({
      subject: `Download request: ${catalogueTitle}`,
      fields: [
        { label: "Requested file", value: catalogueTitle },
        ...leadFieldsToEmailRows(fields),
      ],
      replyTo: fields.email,
    });
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
    };
  }
}

export async function submitContactEnquiry(
  formData: FormData,
): Promise<FormActionResult> {
  const parsed = parseContactEnquiry(formData);

  if (!parsed.success) {
    return { ok: false, error: parsed.error };
  }

  const { enquiry, ...fields } = parsed.data;

  try {
    await sendFormEmail({
      subject: `Contact enquiry from ${fields.company}`,
      fields: [
        ...leadFieldsToEmailRows(fields),
        { label: "Enquiry", value: enquiry },
      ],
      replyTo: fields.email,
    });
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again.",
    };
  }
}

export async function submitQuoteRequest(
  formData: FormData,
): Promise<FormActionResult> {
  const parsed = parseQuoteRequest(formData);

  if (!parsed.success) {
    return { ok: false, error: parsed.error };
  }

  const { productInterest, message, ...fields } = parsed.data;

  try {
    await sendFormEmail({
      subject: `Quote request from ${fields.company}`,
      fields: [
        ...leadFieldsToEmailRows(fields),
        ...(productInterest
          ? [{ label: "Product / system", value: productInterest }]
          : []),
        { label: "Requirement", value: message },
      ],
      replyTo: fields.email,
    });
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.",
    };
  }
}
