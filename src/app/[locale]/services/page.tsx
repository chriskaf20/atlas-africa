import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { MobileExpand } from "@/components/services/MobileExpand";
import { ServicesGrid } from "@/components/services/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import { getContent } from "@/content";
import { poleVisuals } from "@/content/visuals";
import { isLocale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, offerHref, poleHref, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { getVisual } from "@/lib/visuals";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { expertisesPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.expertises,
    title: expertisesPage.metaTitle,
    description: expertisesPage.metaDescription,
  });
}

/**
 * Nos services : tous les services, expliqués pôle par pôle, puis les offres spécialisées.
 */
export default async function ServicesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { expertisesPage: page, poles, offers, common, nav, polePage } = content;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.expertises,
        }}
      />

      {/* Accès rapide aux pôles */}
      <nav aria-label={page.eyebrow} className="sticky top-[4.5rem] z-30 border-b border-line bg-white/90 backdrop-blur-md lg:top-20">
        <Container>
          <ul className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
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

      {poles.map((pole, index) => {
        const visualId = poleVisuals[pole.id];
        const visual = visualId ? getVisual(visualId, locale) : null;
        return (
          <div key={pole.id}>
            <section
              id={pole.id}
              aria-labelledby={`${pole.id}-titre`}
              className={cn("scroll-mt-32 py-16 sm:py-20 lg:py-24", index % 2 === 1 && "bg-mist")}
            >
              <Container>
                {/* En-tête du pôle */}
                <Reveal className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-7">
                    <Eyebrow>
                      {common.poleLabel} {pole.number}
                    </Eyebrow>
                    <h2
                      id={`${pole.id}-titre`}
                      className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.02em] text-navy-900 sm:text-4xl lg:text-5xl"
                    >
                      {pole.name}
                    </h2>
                    <p className="mt-3 font-display text-lg font-medium text-navy-900">{pole.tagline}</p>
                    <p className="mt-4 max-w-2xl text-muted">{pole.intro}</p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <ButtonLink href={poleHref(locale, pole.id)} variant="navy" arrow>
                        {common.discoverPole}
                      </ButtonLink>
                      <ButtonLink href={contactHref(locale, pole.formType)} variant="outlineDark">
                        {common.quoteCta}
                      </ButtonLink>
                    </div>
                  </div>
                  {visual ? (
                    <div className="relative overflow-hidden rounded-3xl border border-line lg:col-span-5">
                      <Visual visual={visual} sizes="(min-width: 1024px) 40vw, 100vw" decorative />
                    </div>
                  ) : null}
                </Reveal>

                {/* Tous les services du pôle */}
                <p className="mt-12 text-sm text-muted">{polePage.deliveryNote}</p>
                <MobileExpand total={pole.services.length} moreLabel={page.showAll} lessLabel={page.showLess}>
                <div className="mt-6 space-y-12">
                  {pole.groups.length > 0 ? (
                    pole.groups.map((group) => (
                      <div key={group.id}>
                        <h3 className="font-display text-xl font-semibold text-navy-900">{group.title}</h3>
                        <p className="mt-1 text-muted">{group.text}</p>
                        <div className="mt-6">
                          <ServicesGrid
                            services={pole.services.filter((service) => service.group === group.id)}
                            locale={locale}
                            content={content}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <ServicesGrid services={pole.services} locale={locale} content={content} />
                  )}
                </div>
                </MobileExpand>
              </Container>
            </section>
          </div>
        );
      })}

      {/* Offres spécialisées */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading {...page.offers} />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer, index) => (
              <Reveal as="li" key={offer.id} delay={index * 100}>
                <article className="group card card-hover relative flex h-full flex-col p-7">
                  <span className="icon-tile grid h-12 w-12 place-items-center">
                    <Icon name={offer.icon} size={24} strokeWidth={1.4} />
                  </span>
                  <p className="mt-6 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
                    {offer.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-navy-900">
                    <Link href={offerHref(locale, offer.id)} className="after:absolute after:inset-0">
                      {offer.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-muted">{offer.summary}</p>
                  <p
                    aria-hidden="true"
                    className="mt-auto flex items-center gap-2 pt-6 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
                  >
                    {common.discoverOffer}
                    <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner
        title={page.cta.title}
        text={page.cta.text}
        button={{ href: contactHref(locale), label: page.cta.button }}
        whatsapp={{ label: common.whatsappCta, message: common.whatsappMessage }}
      />
    </>
  );
}
