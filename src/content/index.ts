import type { Locale } from "@/i18n/config";
import { fr, type Content } from "./fr";

/**
 * Un dictionnaire par langue. Pour ajouter l'anglais :
 *   import { en } from "./en";   puis   const dictionaries = { fr, en };
 * (`en` doit avoir exactement la même structure que `fr`).
 */
const dictionaries: Record<Locale, Content> = {
  fr,
};

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content, Pole, PoleService, CaseStudy } from "./fr";
