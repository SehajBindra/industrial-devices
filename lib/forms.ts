export type LeadContactFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
};

export type FormActionResult =
  | { ok: true }
  | { ok: false; error: string };

export function parseLeadContactFields(
  formData: FormData,
): LeadContactFields | { error: string } {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (!name || !company || !email || !phone) {
    return { error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  return { name, company, email, phone };
}

export function leadFieldsToEmailRows(fields: LeadContactFields) {
  return [
    { label: "Name", value: fields.name },
    { label: "Company", value: fields.company },
    { label: "Email", value: fields.email },
    { label: "Phone", value: fields.phone },
  ];
}
