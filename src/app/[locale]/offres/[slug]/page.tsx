import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { isLocale, locales } from "@/i18n/config";
import { href, offerHref, offersPath, routes } from "@/lib/routes";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

type OfferParams = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getContent(locale).offers.map((offer) => ({ locale, slug: offer.id })),
  );
}

export async function generateMetadata({ params }: OfferParams): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const offer = getContent(locale).offers.find((item) => item.id === slug);
  if (!offer) return {};
  return buildMetadata({
    locale,
    path: `${offersPath}/${offer.id}`,
    title: offer.metaTitle,
    description: offer.metaDescription,
  });
}

export default async function OfferPage({ params }: OfferParams) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const offer = content.offers.find((item) => item.id === slug);
  if (!offer) notFound();
  const { common, nav, contactPage } = content;

  // Données structurées « Service » pour les moteurs de recherche.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.name,
    description: offer.metaDescription,
    url: absoluteUrl(offerHref(locale, offer.id)),
    areaServed: { "@type": "City", name: site.contact.locality },
    provider: { "@id": `${absoluteUrl("/")}#organisation` },
  };

  return (
    <>
      <PageHero
        eyebrow={`${common.offerLabel} · ${offer.eyebrow}`}
        title={offer.title}
        intro={offer.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: offer.name,
        }}
      />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>{offer.name}</Eyebrow>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">
              {offer.featuresTitle}
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {offer.features.map((feature, index) => (
                <Reveal as="li" key={feature.title} delay={(index % 2) * 100}>
                  <article className="card card-hover h-full p-7">
                    <span className="icon-tile grid h-12 w-12 place-items-center">
                      <Icon name={feature.icon} size={24} strokeWidth={1.4} />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold leading-snug text-navy-900">{feature.title}</h3>
                    <p className="mt-3 text-muted">{feature.text}</p>
                  </article>
                </Reveal>
              ))}
            </ul>

            {offer.media ? (
              <Reveal className="mt-10">
                <Media
                  src={offer.media.video}
                  kind="video"
                  poster={offer.media.poster}
                  alt={offer.media.alt}
                  title={offer.name}
                  caption={common.videoSoon}
                  ratio="aspect-video"
                  className="border border-line"
                />
              </Reveal>
            ) : null}
          </div>

          {/* Formulaire de réservation : reste visible pendant la lecture sur grand écran. */}
          <div id="reserver" className="scroll-mt-28 self-start lg:sticky lg:top-28">
            <div className="card p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-navy-900">{offer.formTitle}</h2>
              <p className="mt-3 text-muted">{offer.formIntro}</p>
              <div className="mt-8">
                <ContactForm
                  variant="full"
                  content={content.form}
                  locale={locale}
                  defaultService={offer.serviceValue}
                />
              </div>
            </div>
            <p className="mt-8 font-display text-sm font-semibold text-navy-900">{common.directContact}</p>
            <ContactLinks
              className="mt-2"
              whatsappMessage={common.whatsappMessage}
              labels={{
                whatsapp: contactPage.whatsappLabel,
                phone: contactPage.phoneLabel,
                email: contactPage.emailLabel,
              }}
            />
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
