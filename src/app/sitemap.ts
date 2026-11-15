import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { defaultLocale, locales } from "@/i18n/config";
import { href, offersPath, routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const offerPaths = getContent(defaultLocale).offers.map((offer) => `${offersPath}/${offer.id}`);
  const paths = [...Object.values(routes), ...offerPaths];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(href(locale, path)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === routes.home ? 1 : path === routes.contact ? 0.9 : 0.8,
      ...(locales.length > 1
        ? { alternates: { languages: Object.fromEntries(locales.map((l) => [l, absoluteUrl(href(l, path))])) } }
        : {}),
    })),
  );
}
