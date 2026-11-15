import type { Metadata } from "next";
import { ExternalLink, MapPin } from "lucide-react";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { isLocale } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { href, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { contactPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.contact,
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
  });
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { contactPage: page, common, nav } = content;
  const { contact } = site;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.contact,
        }}
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:gap-16">
          <div className="card p-7 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-navy-900">{page.formTitle}</h2>
            <div className="mt-8">
              <ContactForm variant="full" content={content.form} locale={locale} />
            </div>
          </div>

          <aside aria-labelledby="coordonnees" className="self-start">
            <Eyebrow>{page.detailsTitle}</Eyebrow>
            <h2 id="coordonnees" className="sr-only">
              {page.detailsTitle}
            </h2>
            <address className="mt-6 flex gap-4 not-italic">
              <MapPin aria-hidden="true" size={20} className="mt-1 shrink-0 text-gold-700" />
              <span>
                <span className="block font-display text-sm font-semibold text-navy-900">{page.addressLabel}</span>
                <span className="block text-muted">
                  {contact.streetAddress}
                  <br />
                  {contact.locality}, {contact.region}
                  <br />
                  {page.country}
                </span>
              </span>
            </address>
            <ContactLinks
              className="mt-6"
              whatsappMessage={common.whatsappMessage}
              labels={{ whatsapp: page.whatsappLabel, phone: page.phoneLabel, email: page.emailLabel }}
            />
          </aside>
        </Container>
      </section>

      <section aria-labelledby="carte" className="bg-mist py-20 lg:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="carte" className="font-display text-2xl font-semibold text-navy-900">
              {page.mapTitle}
            </h2>
            <a
              href={site.map.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4"
            >
              {page.mapOpen}
              <ExternalLink aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="mt-8">
            <MapEmbed src={site.map.embedUrl} title={page.mapIframeTitle} placeholder={page.mapPlaceholder} />
          </div>
        </Container>
      </section>
    </>
  );
}
