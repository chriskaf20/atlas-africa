import type { Locale } from "@/i18n/config";
import { en } from "./en";
import { fr, type Content } from "./fr";

/** Un dictionnaire par langue (`en` a exactement la même structure que `fr`). */
const dictionaries: Record<Locale, Content> = {
  fr,
  en,
};

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content } from "./fr";
export type {
  CaseStudy,
  CaseStudyStatus,
  Delivery,
  Leader,
  LegalSection,
  Offer,
  Pole,
  PoleService,
  Sector,
} from "./types";
