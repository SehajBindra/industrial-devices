"use server";

import { sendFormEmail } from "@/lib/email";
import {
  leadFieldsToEmailRows,
  parseLeadContactFields,
  type FormActionResult,
} from "@/lib/forms";

export async function submitDownloadLead(
  formData: FormData,
): Promise<FormActionResult> {
  const fields = parseLeadContactFields(formData);

  if ("error" in fields) {
    return { ok: false, error: fields.error };
  }

  const catalogueTitle = String(formData.get("catalogueTitle") ?? "").trim();

  if (!catalogueTitle) {
    return { ok: false, error: "Download item is missing." };
  }

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

export async function submitQuoteRequest(
  formData: FormData,
): Promise<FormActionResult> {
  const fields = parseLeadContactFields(formData);

  if ("error" in fields) {
    return { ok: false, error: fields.error };
  }

  const productInterest = String(formData.get("productInterest") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!message) {
    return { ok: false, error: "Please describe your requirement." };
  }

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
