import { NextResponse } from "next/server";
import { getContent } from "@/content";
import { defaultLocale, isLocale } from "@/i18n/config";
import { normalizeExtras, validateExtras, type ExtraFieldKey } from "@/lib/form-schema";
import { sendContactMessage } from "@/lib/mailer";
import { hasErrors, normalizeContact, validateContact } from "@/lib/validation";

/**
 * POST /api/contact
 * Corps JSON : { name, company, phone, email, service, message, extras, elapsed, locale }
 * Réponses :
 *   200 { ok: true }
 *   400 { ok: false, errors: { champ: code } }
 *   429 { ok: false, reason: "too_many" }
 *   502 { ok: false, reason: "send_failed" }
 *   503 { ok: false, reason: "not_configured" }
 *
 * Le message de réussite n'est renvoyé que si la demande a réellement été transmise.
 */

/** Délai minimal (ms) entre l'affichage du formulaire et l'envoi : en dessous, c'est un robot. */
const MIN_FILL_TIME = 2500;

/** Limite d'envois par adresse IP (au mieux : la mémoire est propre à chaque instance du serveur). */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recent = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear(); // garde-fou mémoire
  return hits.length > RATE_LIMIT.max;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_json" }, { status: 400 });
  }

  const raw = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

  // Champ piège (invisible pour les visiteurs) ou envoi instantané : robot.
  // On répond « ok » sans rien envoyer, pour ne pas le renseigner.
  const elapsed = typeof raw.elapsed === "number" ? raw.elapsed : 0;
  if ((typeof raw.website === "string" && raw.website.trim() !== "") || elapsed < MIN_FILL_TIME) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "inconnu";
  if (tooMany(ip)) {
    return NextResponse.json({ ok: false, reason: "too_many" }, { status: 429 });
  }

  const values = normalizeContact(raw);
  const errors = validateContact(values);
  const extras = normalizeExtras(values.service, raw.extras);
  if (hasErrors(errors) || validateExtras(extras).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const locale = typeof raw.locale === "string" && isLocale(raw.locale) ? raw.locale : defaultLocale;
  // L'e-mail interne est toujours rédigé avec les libellés français.
  const { form } = getContent(defaultLocale);
  const serviceLabel = form.serviceOptions.find((option) => option.value === values.service)?.label ?? "Non précisé";
  const details = (Object.keys(extras) as ExtraFieldKey[]).map((key) => ({
    label: form.fields[key].label,
    value: extras[key] ?? "",
  }));

  const result = await sendContactMessage({ ...values, serviceLabel, details, locale });

  if (result.ok) return NextResponse.json({ ok: true });

  return NextResponse.json(
    { ok: false, reason: result.reason },
    { status: result.reason === "not_configured" ? 503 : 502 },
  );
}
