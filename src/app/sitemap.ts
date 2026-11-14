import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { href, routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return Object.values(routes).flatMap((path) =>
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
