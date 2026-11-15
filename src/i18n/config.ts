/**
 * Configuration des langues.
 *
 * Pour ajouter l'anglais :
 *   1. ajouter "en" à `locales` ;
 *   2. créer `src/content/en.ts` (copie traduite de `fr.ts`) ;
 *   3. l'enregistrer dans `src/content/index.ts`.
 * Les URL anglaises seront alors servies sous /en/…, le français restant à la racine.
 */
export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** Code Open Graph associé à chaque langue. */
export const ogLocales: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
};

/** Libellé affiché dans le sélecteur de langue (visible dès qu'il y a 2 langues). */
export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
