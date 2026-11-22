import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, CircleDot, Plus } from "lucide-react";
import { ContactLinks } from "@/components/contact/ContactLinks";
import { ContactForm } from "@/components/forms/ContactForm";
import { MethodTimeline, WorkCard } from "@/components/home/HomeSections";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import { getContent } from "@/content";
import { ServicesGrid } from "@/components/services/ServiceCard";
import { poleVisuals } from "@/content/visuals";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { contactHref, href, offerHref, poleHref, routes } from "@/lib/routes";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getVisual } from "@/lib/visuals";

type PoleParams = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getContent(locale).poles.map((pole) => ({ locale, slug: pole.id })));
}

export async function generateMetadata({ params }: PoleParams): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const pole = getContent(locale).poles.find((item) => item.id === slug);
  if (!pole) return {};
  return buildMetadata({
    locale,
    path: `${routes.expertises}/${pole.id}`,
    title: pole.metaTitle,
    description: pole.metaDescription,
  });
}

export default async function PolePage({ params }: PoleParams) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);
  const pole = content.poles.find((item) => item.id === slug);
  if (!pole) notFound();

  const { polePage: labels, common, nav, contactPage } = content;
  const visualId = poleVisuals[pole.id];
  const visual = visualId ? getVisual(visualId, locale) : null;
  const sectors = content.sectors.filter((sector) => pole.sectors.includes(sector.id));
  const studies = content.caseStudies.filter((study) => pole.caseStudies.includes(study.id));
  const offers = content.offers.filter((offer) => offer.eyebrow === pole.name);
  const others = content.poles.filter((item) => item.id !== pole.id);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: pole.name,
      description: pole.metaDescription,
      url: absoluteUrl(poleHref(locale, pole.id)),
      areaServed: { "@type": "Country", name: contactPage.country },
      provider: { "@id": `${absoluteUrl("/")}#organisation` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: pole.name,
        itemListElement: pole.services
          .filter((service) => service.delivery !== "development")
          .map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title } })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pole.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={`${common.poleLabel} ${pole.number} · ${pole.name}`}
        title={pole.headline}
        intro={pole.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: pole.name,
        }}
      />

      {/* Les besoins auxquels nous répondons */}
      <section aria-labelledby="besoins" className="py-16 sm:py-24 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>{pole.name}</Eyebrow>
            <h2 id="besoins" className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.02em] text-navy-900 sm:text-4xl">
              {labels.problemsTitle}
            </h2>
            <ul className="mt-8 space-y-4">
              {pole.problems.map((problem) => (
                <li key={problem} className="flex gap-4">
                  <CircleDot aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-gold-600" />
                  <span className="text-lg leading-relaxed text-ink">{problem}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="#demande" variant="navy" arrow className="mt-10">
              {common.quoteCta}
            </ButtonLink>
          </Reveal>
          {visual ? (
            <Reveal delay={120} className="relative overflow-hidden rounded-3xl border border-line shadow-[0_40px_80px_-40px_rgb(11_31_75/0.45)]">
              <Visual visual={visual} sizes="(min-width: 1024px) 50vw, 100vw" priority decorative />
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Nos services */}
      <section aria-labelledby="services" className="bg-mist py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{labels.servicesTitle}</Eyebrow>
            <h2 id="services" className="mt-5 font-display text-3xl font-light leading-tight tracking-[-0.02em] text-navy-900 sm:text-4xl">
              {pole.tagline}
            </h2>
            <p className="mt-4 text-muted">{labels.deliveryNote}</p>
          </Reveal>

          <div className="mt-12 space-y-14">
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

          {pole.featured ? (
            <Reveal className="mt-14">
              <article className="on-dark relative isolate overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
                <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gold-500" />
                <Eyebrow tone="dark">{pole.featured.eyebrow}</Eyebrow>
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">{pole.featured.title}</h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">{pole.featured.description}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {pole.featured.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 font-display text-sm font-semibold">
                      <Check aria-hidden="true" size={16} strokeWidth={2.5} className="shrink-0 text-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={contactHref(locale, pole.featured.serviceValue)} variant="gold" arrow className="mt-9 w-full sm:w-auto">
                  {pole.featured.cta}
                </ButtonLink>
              </article>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Secteurs concernés et avantages */}
      <section className="py-16 sm:py-24 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{labels.sectorsTitle}</Eyebrow>
            <ul className="mt-6 grid gap-3">
              {sectors.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={`${href(locale, routes.sectors)}#${sector.id}`}
                    className="group flex min-h-14 items-center gap-4 rounded-2xl border border-line bg-white px-4 py-3 transition-colors hover:border-gold-500/60"
                  >
                    <span className="icon-tile grid h-10 w-10 shrink-0 place-items-center">
                      <Icon name={sector.icon} size={18} />
                    </span>
                    <span className="flex-1 font-display text-[0.9375rem] font-semibold text-navy-900">{sector.label}</span>
                    <ArrowUpRight aria-hidden="true" size={16} className="text-navy-900/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>{labels.advantagesTitle}</Eyebrow>
            <ul className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {pole.advantages.map((advantage) => (
                <li key={advantage.title} className="relative pt-5">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
                  <span aria-hidden="true" className="absolute left-0 top-0 h-px w-10 bg-gold-500" />
                  <h3 className="font-display text-lg font-semibold text-navy-900">{advantage.title}</h3>
                  <p className="mt-2 text-muted">{advantage.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Méthode d'intervention */}
      <MethodTimeline content={content} labels={content.howItWorksPage.method} tone="dark" />

      {/* Références et vidéos */}
      {studies.length > 0 || pole.showcase ? (
        <section aria-labelledby="references" className="py-16 sm:py-24 lg:py-28">
          <Container>
            <Eyebrow>{labels.referencesTitle}</Eyebrow>
            <h2 id="references" className="sr-only">
              {labels.referencesTitle}
            </h2>
            {studies.length > 0 ? (
              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {studies.map((study) => (
                  <li key={study.id}>
                    <WorkCard study={study} locale={locale} content={content} />
                  </li>
                ))}
              </ul>
            ) : null}
            {pole.showcase ? (
              <div className="mt-14">
                <h3 className="font-display text-xl font-semibold text-navy-900">{pole.showcase.title}</h3>
                <p className="mt-2 text-muted">{pole.showcase.intro}</p>
                {/* 3.16fr / 1fr : la vidéo horizontale et la verticale ont la même hauteur. */}
                <ul className="mt-6 grid gap-5 sm:grid-cols-[3.16fr_1fr] sm:items-start">
                  {pole.showcase.items.map((item) => (
                    <li key={item.src}>
                      <figure>
                        <Media
                          src={item.src}
                          kind="video"
                          poster={item.poster}
                          alt={item.caption}
                          title={item.title}
                          caption={item.caption}
                          ratio={item.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"}
                          className={cn("border border-line", item.orientation === "portrait" && "mx-auto max-w-[14rem] sm:max-w-none")}
                        />
                        <figcaption className="mt-3 text-sm text-muted">
                          <span className="font-display font-semibold text-navy-900">{item.title}</span>
                          <span className="sm:hidden lg:inline"> — {item.caption}</span>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      {/* Offres spécialisées du pôle */}
      {offers.length > 0 ? (
        <section aria-labelledby="offres" className={cn("py-16 sm:py-20", studies.length > 0 || pole.showcase ? "border-t border-line" : "")}>
          <Container>
            <h2 id="offres" className="font-display text-2xl font-semibold text-navy-900">
              {labels.offersTitle}
            </h2>
            <ul className={offers.length === 1 ? "mt-6 grid" : "mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"}>
              {offers.map((offer) => (
                <li key={offer.id}>
                  <Link href={offerHref(locale, offer.id)} className="group card card-hover flex h-full items-start gap-4 p-6">
                    <span className="icon-tile grid h-11 w-11 shrink-0 place-items-center">
                      <Icon name={offer.icon} size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base font-semibold text-navy-900">{offer.name}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{offer.summary}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-navy-900 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* FAQ et formulaire */}
      <section className="bg-mist py-16 sm:py-24 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">{labels.faqTitle}</h2>
            <div className="mt-6 space-y-3">
              {pole.faq.map((item) => (
                <details key={item.question} className="faq card group/faq px-6">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[0.9375rem] font-semibold text-navy-900">
                    {item.question}
                    <Plus aria-hidden="true" size={18} className="shrink-0 text-gold-700 transition-transform duration-300 group-open/faq:rotate-45" />
                  </summary>
                  <p className="pb-5 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>

            <h2 className="mt-14 font-display text-xl font-semibold text-navy-900">{labels.otherPoles}</h2>
            <ul className="mt-4 space-y-2">
              {others.map((other) => (
                <li key={other.id}>
                  <Link href={poleHref(locale, other.id)} className="group inline-flex min-h-11 items-center gap-3 font-display font-semibold text-navy-900 hover:text-gold-700">
                    <span className="text-gold-700">{other.number}</span>
                    {other.name}
                    <ArrowRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="demande" className="scroll-mt-28">
            <div className="card p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold text-navy-900">{labels.formTitle}</h2>
              <p className="mt-3 text-muted">{labels.formIntro}</p>
              {pole.badge ? <Badge className="mt-4">{pole.badge}</Badge> : null}
              <div className="mt-8">
                <ContactForm variant="full" content={content.form} locale={locale} defaultService={pole.formType} />
              </div>
            </div>
            <p className="mt-8 font-display text-sm font-semibold text-navy-900">{common.directContact}</p>
            <ContactLinks
              className="mt-2"
              whatsappMessage={common.whatsappMessage}
              labels={{ whatsapp: contactPage.whatsappLabel, phone: contactPage.phoneLabel, email: contactPage.emailLabel }}
            />
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
