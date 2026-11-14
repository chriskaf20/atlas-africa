import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

/** Paramètres reçus par les pages et layouts situés sous `app/[locale]`. */
export type LocaleParams = {
  params: Promise<{ locale: string }>;
};

/** Lit la langue de l'URL ; renvoie la page 404 si elle n'est pas prise en charge. */
export async function resolveLocale(params: LocaleParams["params"]): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
