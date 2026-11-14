import type { Metadata } from "next";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { locales, ogLocales, type Locale } from "@/i18n/config";
import { href } from "@/lib/routes";

export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

type PageSeo = {
  locale: Locale;
  /** Chemin sans préfixe de langue, ex. "/services". */
  path: string;
  /** Titre court de la page ; omis pour la page d'accueil. */
  title?: string;
  description: string;
};

/** Balises meta, URL canonique, Open Graph et Twitter d'une page. */
export function buildMetadata({ locale, path, title, description }: PageSeo): Metadata {
  const content = getContent(locale);
  const url = href(locale, path);
  const fullTitle = title ? `${title} | ${site.name}` : content.meta.title;
  const image = {
    url: OG_IMAGE_PATH,
    ...OG_IMAGE_SIZE,
    alt: content.meta.ogImageAlt,
  };

  const languages =
    locales.length > 1
      ? Object.fromEntries(locales.map((l) => [l, href(l, path)]))
      : undefined;

  return {
    // Le gabarit « %s | ATLAS AFRICA GROUP » est appliqué par le layout.
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: ogLocales[locale],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
