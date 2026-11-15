import "server-only";
import { site } from "@/content/site";
import type { ContactValues } from "@/lib/validation";

/**
 * Envoi des demandes de contact.
 *
 * Branchement par défaut : Resend (https://resend.com), via trois variables
 * d'environnement (voir `.env.example`) :
 *   RESEND_API_KEY      clé d'API
 *   CONTACT_TO_EMAIL    adresse qui reçoit les demandes (par défaut : l'e-mail du site)
 *   CONTACT_FROM_EMAIL  expéditeur, sur un domaine vérifié chez Resend
 *
 * Pour utiliser un autre service (SMTP, Brevo, Formspree, CRM…), il suffit de
 * remplacer le contenu de `deliver()` : le reste du site n'a pas à changer.
 */

export type SendResult = { ok: true } | { ok: false; reason: "not_configured" | "send_failed" };

export type ContactMessage = ContactValues & {
  /** Libellé lisible du service choisi. */
  serviceLabel: string;
};

function formatMessage(message: ContactMessage): { subject: string; text: string } {
  const subject = `Nouvelle demande — ${message.serviceLabel} — ${message.name}`;
  const text = [
    `Nouvelle demande reçue depuis le site ${site.name}`,
    "",
    `Nom : ${message.name}`,
    `Entreprise : ${message.company || "—"}`,
    `Téléphone : ${message.phone}`,
    `E-mail : ${message.email || "—"}`,
    `Service souhaité : ${message.serviceLabel}`,
    "",
    "Message :",
    message.message,
  ].join("\n");
  return { subject, text };
}

async function deliver(message: ContactMessage): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) return { ok: false, reason: "not_configured" };

  const { subject, text } = formatMessage(message);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      ...(message.email ? { reply_to: message.email } : {}),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error("[contact] Échec de l'envoi :", response.status, await response.text());
    return { ok: false, reason: "send_failed" };
  }
  return { ok: true };
}

export async function sendContactMessage(message: ContactMessage): Promise<SendResult> {
  try {
    const result = await deliver(message);

    // En développement, sans service configuré, la demande est affichée dans
    // le terminal pour pouvoir tester le formulaire de bout en bout.
    if (!result.ok && result.reason === "not_configured" && process.env.NODE_ENV !== "production") {
      const { subject, text } = formatMessage(message);
      console.info(`\n[contact] Aucun service d'envoi configuré — demande simulée.\n${subject}\n${text}\n`);
      return { ok: true };
    }
    return result;
  } catch (error) {
    console.error("[contact] Erreur d'envoi :", error);
    return { ok: false, reason: "send_failed" };
  }
}
