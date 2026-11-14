import type { Metadata } from "next";
import { Check } from "lucide-react";
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
import { contactHref, href, routes } from "@/lib/routes";
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

function ServiceCard({ service }: { service: PoleService }) {
  const soon = Boolean(service.badge);
  return (
    <article className={cn("flex h-full flex-col border border-line bg-white p-7", soon && "border-dashed")}>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center border border-gold-500/60 text-navy-900">
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
    </article>
  );
}

function FeaturedOffer({ offer, href: target }: { offer: NonNullable<Pole["featured"]>; href: string }) {
  return (
    <article className="on-dark relative isolate overflow-hidden bg-navy-900 p-8 text-white sm:col-span-2 sm:p-10">
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
            className="flex items-center gap-2.5 border border-white/20 px-4 py-3 font-display text-sm font-semibold"
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
  const { servicesPage, poles, common, nav } = content;

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
        className="sticky top-[4.5rem] z-30 border-b border-line bg-white lg:top-20"
      >
        <Container>
          <ul className="-mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            {poles.map((pole) => (
              <li key={pole.id} className="shrink-0">
                <a
                  href={`#${pole.id}`}
                  className="flex min-h-14 items-center gap-2.5 whitespace-nowrap border-b-2 border-transparent px-3 font-display text-[0.8125rem] font-semibold text-navy-900/80 transition-colors hover:border-gold-500 hover:text-navy-900"
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
                  <ServiceCard service={service} />
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

      <CtaBanner
        title={servicesPage.cta.title}
        text={servicesPage.cta.text}
        button={{ href: contactHref(locale), label: servicesPage.cta.button }}
        whatsapp={{ label: common.whatsappCta, message: common.whatsappMessage }}
      />
    </>
  );
}
