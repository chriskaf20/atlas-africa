import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent, type Pole, type PoleService } from "@/content";
import { isLocale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, offerHref, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { servicesPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.services,
    title: servicesPage.metaTitle,
    description: servicesPage.metaDescription,
  });
}

type OfferLink = { href: string; label: string };

function ServiceCard({ service, offer }: { service: PoleService; offer?: OfferLink }) {
  const soon = Boolean(service.badge);
  return (
    <article className={cn("card card-hover group relative flex h-full flex-col p-7", soon && "border-dashed")}>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center icon-tile">
          <Icon name={service.icon} size={24} strokeWidth={1.4} />
        </span>
        {service.badge ? <Badge tone="neutral">{service.badge}</Badge> : null}
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-snug text-navy-900">{service.title}</h3>
      {service.description ? <p className="mt-3 text-muted">{service.description}</p> : null}
      {service.items.length > 0 ? (
        <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-ink">
          {service.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {offer ? (
        <Link
          href={offer.href}
          className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900 after:absolute after:inset-0"
        >
          {offer.label}
          <ArrowRight aria-hidden="true" size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      ) : null}
    </article>
  );
}

function FeaturedOffer({ offer, href: target }: { offer: NonNullable<Pole["featured"]>; href: string }) {
  return (
    <article className="on-dark relative isolate overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-[0_40px_80px_-40px_rgb(11_31_75/0.7)] sm:col-span-2 sm:p-10">
      <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gold-500" />
      <Eyebrow tone="dark">{offer.eyebrow}</Eyebrow>
      <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">
        {offer.title}
      </h3>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{offer.description}</p>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {offer.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 font-display text-sm font-semibold"
          >
            <Check aria-hidden="true" size={16} strokeWidth={2.5} className="shrink-0 text-gold-400" />
            {item}
          </li>
        ))}
      </ul>
      <ButtonLink href={target} variant="gold" arrow className="mt-9 w-full sm:w-auto">
        {offer.cta}
      </ButtonLink>
    </article>
  );
}

export default async function ServicesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { servicesPage, poles, offers, common, nav } = content;

  const offerFor = (title: string): OfferLink | undefined => {
    const offer = offers.find((item) => item.serviceTitle === title);
    return offer ? { href: offerHref(locale, offer.id), label: common.discoverOffer } : undefined;
  };

  // Données structurées « FAQPage » : toutes les questions des pôles.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: poles.flatMap((pole) =>
      pole.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  return (
    <>
      <PageHero
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        intro={servicesPage.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.services,
        }}
      />

      {/* Accès rapide aux pôles */}
      <nav
        aria-label={servicesPage.polesNavLabel}
        className="sticky top-[4.5rem] z-30 border-b border-line bg-white/90 backdrop-blur-md lg:top-20"
      >
        <Container>
          <ul className="-mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            {poles.map((pole) => (
              <li key={pole.id} className="shrink-0">
                <a
                  href={`#${pole.id}`}
                  className="my-2 flex min-h-10 items-center gap-2.5 whitespace-nowrap rounded-full border border-transparent px-4 font-display text-[0.8125rem] font-semibold text-navy-900/80 transition-colors hover:border-gold-500/50 hover:bg-mist hover:text-navy-900"
                >
                  <span className="text-gold-700">{pole.number}</span>
                  {pole.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {poles.map((pole, index) => (
        <section
          key={pole.id}
          id={pole.id}
          aria-labelledby={`${pole.id}-titre`}
          className={cn("scroll-mt-32 py-20 lg:scroll-mt-36 lg:py-28", index % 2 === 1 && "bg-mist")}
        >
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-16">
            <div className="self-start lg:sticky lg:top-44">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>
                  {common.poleLabel} {pole.number}
                </Eyebrow>
                {pole.badge ? <Badge>{pole.badge}</Badge> : null}
              </div>
              <h2
                id={`${pole.id}-titre`}
                className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl"
              >
                {pole.name}
              </h2>
              <p className="mt-4 font-display text-lg font-medium text-navy-900">{pole.tagline}</p>
              <p className="mt-4 text-muted">{pole.summary}</p>
              <ButtonLink
                href={contactHref(locale, pole.id)}
                variant="navy"
                arrow
                className="mt-8 w-full sm:w-auto"
              >
                {common.quoteCta}
              </ButtonLink>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {pole.services.map((service, serviceIndex) => (
                <Reveal
                  key={service.title}
                  delay={(serviceIndex % 2) * 100}
                  // Nombre impair : la dernière carte occupe toute la ligne (pas de trou).
                  className={cn(
                    pole.services.length % 2 === 1 &&
                      serviceIndex === pole.services.length - 1 &&
                      "sm:col-span-2",
                  )}
                >
                  <ServiceCard service={service} offer={offerFor(service.title)} />
                </Reveal>
              ))}
              {pole.featured ? (
                <Reveal className="sm:col-span-2">
                  <FeaturedOffer
                    offer={pole.featured}
                    href={contactHref(locale, pole.featured.serviceValue)}
                  />
                </Reveal>
              ) : null}
              <div className="sm:col-span-2">
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">{servicesPage.faqTitle}</h3>
                <div className="mt-5 space-y-3">
                  {pole.faq.map((item) => (
                    <details key={item.question} className="faq card group/faq px-6">
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[0.9375rem] font-semibold text-navy-900">
                        {item.question}
                        <Plus
                          aria-hidden="true"
                          size={18}
                          className="shrink-0 text-gold-700 transition-transform duration-300 group-open/faq:rotate-45"
                        />
                      </summary>
                      <p className="pb-5 text-muted">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              {pole.showcase ? (
                <div className="sm:col-span-2">
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">{pole.showcase.title}</h3>
                  <p className="mt-2 text-muted">{pole.showcase.intro}</p>
                  {/* 3.16fr / 1fr : la vidéo horizontale et la verticale ont la même hauteur. */}
                  <ul className="mt-6 grid gap-5 sm:grid-cols-[3.16fr_1fr] sm:items-start">
                    {pole.showcase.items.map((item) => (
                      <Reveal as="li" key={item.src}>
                        <figure>
                          <Media
                            src={item.src}
                            kind="video"
                            poster={item.poster}
                            alt={item.caption}
                            title={item.title}
                            caption={item.caption}
                            ratio={item.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"}
                            className={cn(
                              "border border-line",
                              item.orientation === "portrait" && "mx-auto max-w-[14rem] sm:max-w-none",
                            )}
                          />
                          <figcaption className="mt-3 text-sm text-muted">
                            <span className="font-display font-semibold text-navy-900">{item.title}</span>
                            <span className="sm:hidden lg:inline"> — {item.caption}</span>
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ))}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <CtaBanner
        title={servicesPage.cta.title}
        text={servicesPage.cta.text}
        button={{ href: contactHref(locale), label: servicesPage.cta.button }}
        whatsapp={{ label: common.whatsappCta, message: common.whatsappMessage }}
      />
    </>
  );
}
