import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { defaultLocale, locales } from "@/i18n/config";
import { href, offersPath, routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

/** Toutes les pages publiques, en français et en anglais (avec leurs équivalents hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const content = getContent(defaultLocale);
  const offerPaths = content.offers.map((offer) => `${offersPath}/${offer.id}`);
  const polePaths = content.poles.map((pole) => `${routes.expertises}/${pole.id}`);
  const paths = [...Object.values(routes), ...polePaths, ...offerPaths];

  const priority = (path: string) => {
    if (path === routes.home) return 1;
    if (path === routes.contact || path === routes.expertises) return 0.9;
    if (path === routes.legal || path === routes.privacy) return 0.3;
    return 0.8;
  };

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(href(locale, path)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: priority(path),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, absoluteUrl(href(l, path))])),
      },
    })),
  );
}
