/**
 * Validation du formulaire de contact — partagée entre le navigateur
 * (retour immédiat) et le serveur (contrôle de sécurité).
 */

export const contactFields = ["name", "company", "phone", "email", "service", "message"] as const;

export type ContactField = (typeof contactFields)[number];
export type ContactValues = Record<ContactField, string>;

export type ContactErrorCode =
  | "required"
  | "nameTooShort"
  | "invalidEmail"
  | "invalidPhone"
  | "messageTooShort"
  | "tooLong";

export type ContactErrors = Partial<Record<ContactField, ContactErrorCode>>;

export const emptyContactValues: ContactValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const MAX_LENGTH: Record<ContactField, number> = {
  name: 120,
  company: 160,
  phone: 30,
  email: 200,
  service: 60,
  message: 4000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_ALLOWED = /^[+\d\s().-]+$/;

/** Nettoie une saisie brute : ne garde que les champs connus, sous forme de texte. */
export function normalizeContact(input: unknown): ContactValues {
  const source = (typeof input === "object" && input !== null ? input : {}) as Record<
    string,
    unknown
  >;
  const values = { ...emptyContactValues };
  for (const field of contactFields) {
    const raw = source[field];
    values[field] = typeof raw === "string" ? raw.trim() : "";
  }
  return values;
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  for (const field of contactFields) {
    if (values[field].length > MAX_LENGTH[field]) errors[field] = "tooLong";
  }

  if (!values.name) errors.name = "required";
  else if (values.name.length < 2) errors.name = "nameTooShort";

  if (!values.phone) errors.phone = "required";
  else if (!PHONE_ALLOWED.test(values.phone) || values.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "invalidPhone";
  }

  // L'e-mail est facultatif, mais doit être valide s'il est renseigné.
  if (values.email && !EMAIL_PATTERN.test(values.email)) errors.email = "invalidEmail";

  if (!values.message) errors.message = "required";
  else if (values.message.length < 10) errors.message = "messageTooShort";

  return errors;
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}
