import type { Metadata } from "next";
import { MethodTimeline } from "@/components/home/HomeSections";
import { IntegrationStory } from "@/components/home/IntegrationStory";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { howItWorksPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.howItWorks,
    title: howItWorksPage.metaTitle,
    description: howItWorksPage.metaDescription,
  });
}

/** Comment ça marche : un scénario type (les pôles qui s'enchaînent), puis notre méthode. */
export default async function HowItWorksPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { howItWorksPage: page, common, nav } = content;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.howItWorks,
        }}
      />
      <IntegrationStory locale={locale} content={content} />
      <MethodTimeline content={content} labels={page.method} tone="light" />
      <CtaBanner
        title={page.cta.title}
        text={page.cta.text}
        button={{ href: contactHref(locale), label: page.cta.button }}
        whatsapp={{ label: common.whatsappCta, message: common.whatsappMessage }}
      />
    </>
  );
}
