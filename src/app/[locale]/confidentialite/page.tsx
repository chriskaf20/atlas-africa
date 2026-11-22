import type { Metadata } from "next";
import { LegalContent } from "@/components/sections/LegalContent";
import { PageHero } from "@/components/sections/PageHero";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { href, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = getContent(locale).privacyPage;
  return buildMetadata({ locale, path: routes.privacy, title: page.metaTitle, description: page.metaDescription });
}

/** Uniquement des informations confirmées (voir docs/registre-validation.md). */
export default async function PrivacyPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { privacyPage: page, common, nav } = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: page.title,
        }}
      />
      <LegalContent sections={page.sections} />
    </>
  );
}
