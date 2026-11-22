"use client";

import { CircleAlert, CircleCheck } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { extraFieldKind, fieldsFor, type ExtraFieldKey, type ExtraValues } from "@/lib/form-schema";
import { href, routes } from "@/lib/routes";
import {
  contactFields,
  emptyContactValues,
  hasErrors,
  normalizeContact,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/validation";

type ContactFormProps = {
  /** "short" : nom, téléphone, e-mail, message · "full" : tous les champs. */
  variant?: "short" | "full";
  content: Content["form"];
  locale: Locale;
  /** Service présélectionné (pages d'offres). L'URL (?service=…) reste prioritaire. */
  defaultService?: string;
};

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "block w-full rounded-xl border border-navy-900/30 bg-white px-4 py-3 text-base text-ink " +
  "placeholder:text-muted/80 transition-colors hover:border-navy-900 focus:border-navy-900 " +
  "aria-[invalid=true]:border-red-700";

export function ContactForm({ variant = "full", content, locale, defaultService }: ContactFormProps) {
  const uid = useId();
  const full = variant === "full";

  const [values, setValues] = useState<ContactValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [failure, setFailure] = useState<string | null>(null);
  const [trap, setTrap] = useState("");
  // Précisions propres au service choisi (formulaires spécialisés).
  const [extras, setExtras] = useState<ExtraValues>({});
  // Heure d'affichage du formulaire : un envoi trop rapide trahit un robot.
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Présélection du service depuis l'URL : /contact?service=led-atlas
  useEffect(() => {
    if (!full) return;
    const requested = new URLSearchParams(window.location.search).get("service") ?? defaultService;
    if (requested && content.serviceOptions.some((option) => option.value === requested)) {
      setValues((current) => ({ ...current, service: requested }));
    }
  }, [full, content.serviceOptions, defaultService]);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  }

  function focusFirstError(found: ContactErrors) {
    const first = contactFields.find((field) => found[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const clean = normalizeContact(values);
    const found = validateContact(clean);
    setFailure(null);

    if (hasErrors(found)) {
      setErrors(found);
      setStatus("idle");
      focusFirstError(found);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...clean,
          extras,
          website: trap,
          elapsed: startedAt.current ? Date.now() - startedAt.current : 0,
          locale,
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        errors?: ContactErrors;
        reason?: string;
      } | null;

      if (response.ok && data?.ok) {
        setValues(emptyContactValues);
        setExtras({});
        setStatus("success");
        return;
      }

      if (response.status === 400 && data?.errors) {
        setErrors(data.errors);
        setStatus("idle");
        focusFirstError(data.errors);
        return;
      }

      setFailure(
        data?.reason === "not_configured"
          ? content.failure.notConfigured
          : response.status === 429
            ? content.failure.tooMany
            : content.failure.generic,
      );
      setStatus("error");
    } catch {
      setFailure(content.failure.generic);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="py-6 text-center outline-none">
        <CircleCheck aria-hidden="true" size={44} strokeWidth={1.25} className="mx-auto text-gold-600" />
        <h3 className="mt-5 text-xl font-semibold text-navy-900">{content.success.title}</h3>
        <p className="mx-auto mt-3 max-w-sm text-muted">{content.success.text}</p>
        <button type="button" onClick={() => setStatus("idle")} className={buttonClass("outlineDark", "mt-8")}>
          {content.success.again}
        </button>
      </div>
    );
  }

  const fieldId = (field: ContactField) => `${uid}-${field}`;
  const errorId = (field: ContactField) => `${uid}-${field}-erreur`;
  const errorText = (field: ContactField) => {
    const code = errors[field];
    return code ? content.errors[code] : null;
  };

  /** Attributs communs à tous les champs. */
  const bind = (field: ContactField, required = false) => ({
    id: fieldId(field),
    name: field,
    value: values[field],
    required,
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? errorId(field) : undefined,
    className: inputClass,
  });

  const field = (name: ContactField, label: string, required: boolean, control: ReactNode, wide = false) => (
    <div className={cn(wide && "sm:col-span-2")}>
      <label htmlFor={fieldId(name)} className="mb-2 block font-display text-sm font-semibold text-navy-900">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-gold-700"> *</span>
        ) : (
          <span className="font-sans font-normal text-muted"> ({content.optional})</span>
        )}
      </label>
      {control}
      {errors[name] ? (
        <p id={errorId(name)} className="mt-2 flex items-start gap-1.5 text-sm text-red-700">
          <CircleAlert aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
          {errorText(name)}
        </p>
      ) : null}
    </div>
  );

  const sending = status === "sending";
  const extraKeys: ExtraFieldKey[] = fieldsFor(values.service);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative">
      <p className="mb-6 text-sm text-muted">{content.requiredHint}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        {field(
          "name",
          content.name,
          true,
          <input
            {...bind("name", true)}
            type="text"
            autoComplete="name"
            onChange={(event) => update("name", event.target.value)}
          />,
        )}

        {full
          ? field(
              "company",
              content.company,
              false,
              <input
                {...bind("company")}
                type="text"
                autoComplete="organization"
                onChange={(event) => update("company", event.target.value)}
              />,
            )
          : null}

        {field(
          "phone",
          content.phone,
          true,
          <input
            {...bind("phone", true)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            onChange={(event) => update("phone", event.target.value)}
          />,
        )}

        {field(
          "email",
          content.email,
          false,
          <input
            {...bind("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            onChange={(event) => update("email", event.target.value)}
          />,
          !full,
        )}

        {full
          ? field(
              "service",
              content.service,
              false,
              <select {...bind("service")} onChange={(event) => update("service", event.target.value)}>
                <option value="">{content.servicePlaceholder}</option>
                {content.serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>,
              true,
            )
          : null}

        {field(
          "message",
          content.message,
          true,
          <textarea
            {...bind("message", true)}
            rows={full ? 6 : 4}
            placeholder={content.messagePlaceholder}
            onChange={(event) => update("message", event.target.value)}
          />,
          true,
        )}
      </div>

      {/* Précisions selon le service choisi (formulaire spécialisé). */}
      {full && extraKeys.length > 0 ? (
        <fieldset className="mt-8 rounded-2xl border border-line bg-mist/60 p-5 sm:p-6">
          <legend className="px-2 font-display text-sm font-semibold text-navy-900">
            {content.detailsTitle} <span className="font-sans font-normal text-muted">({content.optional})</span>
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            {extraKeys.map((key) => {
              const def = content.fields[key];
              const id = `${uid}-x-${key}`;
              const value = extras[key] ?? "";
              const onChange = (next: string) => setExtras((current) => ({ ...current, [key]: next }));
              const kind = extraFieldKind[key];
              return (
                <div key={key}>
                  <label htmlFor={id} className="mb-2 block font-display text-sm font-semibold text-navy-900">
                    {def.label}
                  </label>
                  {kind === "select" && def.options ? (
                    <select id={id} name={key} value={value} onChange={(event) => onChange(event.target.value)} className={inputClass}>
                      <option value="">—</option>
                      {def.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={id}
                      name={key}
                      type={kind === "date" ? "date" : "text"}
                      value={value}
                      maxLength={200}
                      placeholder={def.placeholder}
                      onChange={(event) => onChange(event.target.value)}
                      className={inputClass}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <p className="mt-6 text-sm text-muted">
        {content.privacyNote}{" "}
        <Link href={href(locale, routes.privacy)} className="font-medium text-navy-900 underline decoration-gold-500 underline-offset-4">
          {content.privacyLink}
        </Link>
      </p>

      {/* Champ piège anti-robots : invisible et hors navigation clavier. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden">
        <label>
          Site web
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={trap}
            onChange={(event) => setTrap(event.target.value)}
          />
        </label>
      </div>

      <div aria-live="polite" className="mt-5 empty:mt-0">
        {hasErrors(errors) ? (
          <p className="flex items-start gap-2 text-sm font-medium text-red-700">
            <CircleAlert aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
            {content.errors.summary}
          </p>
        ) : null}
        {failure ? (
          <p className="flex items-start gap-2 border border-red-700/40 bg-red-50 p-4 text-sm text-red-800">
            <CircleAlert aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
            {failure}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        aria-disabled={sending}
        className={buttonClass("navy", cn("mt-6 w-full sm:w-auto", sending && "cursor-progress opacity-70"))}
      >
        {sending ? content.sending : content.submit}
      </button>
    </form>
  );
}
