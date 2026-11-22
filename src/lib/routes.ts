import { locales, type Locale } from "@/i18n/config";

/** Chemins des pages (sans préfixe de langue). */
export const routes = {
  home: "/",
  /** Nos services (hub des 4 pôles). */
  expertises: "/services",
  howItWorks: "/comment-ca-marche",
  sectors: "/secteurs",
  work: "/realisations",
  group: "/groupe",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/confidentialite",
} as const;

/** Préfixe des pages d'offres : /offres/aag-mobilite, etc. */
export const offersPath = "/offres";

export type RouteKey = keyof typeof routes;

/**
 * Construit une URL interne pour une langue donnée.
 * Chaque langue a son préfixe : /fr/services, /en/services.
 */
export function href(locale: Locale, path: string): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Lien vers la page contact avec un service présélectionné dans le formulaire. */
export function contactHref(locale: Locale, service?: string): string {
  const base = href(locale, routes.contact);
  return service ? `${base}?service=${encodeURIComponent(service)}` : base;
}

/** Lien vers la page d'une offre. */
export function offerHref(locale: Locale, id: string): string {
  return href(locale, `${offersPath}/${id}`);
}

/** Lien vers la page d'un pôle : /services/<id>. */
export function poleHref(locale: Locale, id: string): string {
  return href(locale, `${routes.expertises}/${id}`);
}

/** Retire le préfixe de langue d'un chemin : /fr/expertises → /expertises. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname || "/";
}
