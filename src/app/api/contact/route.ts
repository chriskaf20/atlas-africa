import { NextResponse } from "next/server";
import { getContent } from "@/content";
import { defaultLocale, isLocale } from "@/i18n/config";
import { sendContactMessage } from "@/lib/mailer";
import { hasErrors, normalizeContact, validateContact } from "@/lib/validation";

/**
 * POST /api/contact
 * Corps JSON : { name, company, phone, email, service, message, locale }
 * Réponses :
 *   200 { ok: true }
 *   400 { ok: false, errors: { champ: code } }
 *   502 { ok: false, reason: "send_failed" }
 *   503 { ok: false, reason: "not_configured" }
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_json" }, { status: 400 });
  }

  const raw = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

  // Champ piège : invisible pour les visiteurs, rempli par les robots.
  // On répond « ok » sans rien envoyer.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const values = normalizeContact(raw);
  const errors = validateContact(values);
  if (hasErrors(errors)) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const locale = typeof raw.locale === "string" && isLocale(raw.locale) ? raw.locale : defaultLocale;
  const options = getContent(locale).form.serviceOptions;
  const serviceLabel =
    options.find((option) => option.value === values.service)?.label ?? "Non précisé";

  const result = await sendContactMessage({ ...values, serviceLabel });

  if (result.ok) return NextResponse.json({ ok: true });

  return NextResponse.json(
    { ok: false, reason: result.reason },
    { status: result.reason === "not_configured" ? 503 : 502 },
  );
}
