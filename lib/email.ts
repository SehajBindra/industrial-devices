import { Resend } from "resend";

export type FormEmailField = {
  label: string;
  value: string;
};

export type SendFormEmailOptions = {
  subject: string;
  fields: FormEmailField[];
  replyTo: string;
};

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(fields: FormEmailField[]) {
  const rows = fields
    .map(
      ({ label, value }) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${rows}</table>`;
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY, LEAD_EMAIL_TO, and RESEND_FROM_EMAIL.",
    );
  }

  return { apiKey, to, from };
}

export async function sendFormEmail(options: SendFormEmailOptions) {
  const { apiKey, to, from } = getEmailConfig();
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    subject: options.subject,
    html: buildEmailHtml(options.fields),
    replyTo: options.replyTo,
  });

  if (error) {
    throw new Error(error.message ?? "Failed to send email.");
  }
}
