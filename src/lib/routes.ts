import { defaultLocale, locales, type Locale } from "@/i18n/config";

/** Chemins des pages (sans préfixe de langue). */
export const routes = {
  home: "/",
  services: "/services",
  work: "/realisations",
  about: "/a-propos",
  contact: "/contact",
} as const;

/** Préfixe des pages d'offres : /offres/aag-mobilite, etc. */
export const offersPath = "/offres";

export type RouteKey = keyof typeof routes;

/**
 * Construit une URL interne pour une langue donnée.
 * La langue par défaut n'a pas de préfixe : /services (fr), /en/services (en).
 */
export function href(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Lien vers la page contact avec un service présélectionné dans le formulaire. */
export function contactHref(locale: Locale, service?: string): string {
  const base = href(locale, routes.contact);
  return service ? `${base}?service=${encodeURIComponent(service)}` : base;
}

/** Lien vers la page d'une offre phare. */
export function offerHref(locale: Locale, id: string): string {
  return href(locale, `${offersPath}/${id}`);
}

/** Retire le préfixe de langue d'un chemin : /fr/services → /services. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname || "/";
}
