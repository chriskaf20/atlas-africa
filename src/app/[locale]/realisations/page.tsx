import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent, type CaseStudy, type Content } from "@/content";
import { isLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, offerHref, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { workPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.work,
    title: workPage.metaTitle,
    description: workPage.metaDescription,
  });
}

function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
      {items.map((stat) => (
        <div key={stat.label} className="bg-white p-6">
          <dt className="text-sm text-muted">{stat.label}</dt>
          <dd className="order-first font-display text-3xl font-semibold text-navy-900">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function CaseSection({
  study,
  index,
  locale,
  common,
  hasOffer,
}: {
  study: CaseStudy;
  hasOffer: boolean;
  index: number;
  locale: Locale;
  common: Content["common"];
}) {
  const ads = study.advertisers;
  return (
    <section
      id={study.id}
      aria-labelledby={`${study.id}-titre`}
      className={cn("scroll-mt-24 py-20 lg:py-28", index % 2 === 1 && "bg-mist")}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>{study.sector}</Eyebrow>
            <h2
              id={`${study.id}-titre`}
              className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl"
            >
              {study.name}
            </h2>
            <p className="mt-4 font-display text-lg font-medium text-navy-900">{study.headline}</p>
            <p className="mt-4 text-muted">{study.summary}</p>
            <ButtonLink
              href={hasOffer ? offerHref(locale, study.id) : contactHref(locale, study.serviceValue)}
              variant="navy"
              arrow
              className="mt-8 w-full sm:w-auto"
            >
              {study.cta}
            </ButtonLink>
          </Reveal>
          <Reveal delay={120}>
            {study.video ? (
              <Media
                src={study.video}
                kind="video"
                poster={study.videoPoster}
                alt={study.videoLabel}
                title={study.name}
                caption={common.videoSoon}
                ratio="aspect-[9/16]"
                className="mx-auto w-full max-w-[19rem] border border-line shadow-[0_30px_60px_-30px_rgb(6_18_46/0.45)]"
              />
            ) : (
              <Media
                src={study.image}
                alt={study.imageAlt}
                title={study.name}
                caption={common.mediaSoon}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            )}
          </Reveal>
        </div>

        <h3 className="mt-16 font-display text-xl font-semibold text-navy-900">{study.deliverablesTitle}</h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {study.deliverables.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 100}>
              <article className="card card-hover flex h-full flex-col p-7">
                <span className="grid h-12 w-12 place-items-center icon-tile">
                  <Icon name={item.icon as IconName} size={24} strokeWidth={1.4} />
                </span>
                <h4 className="mt-6 text-lg font-semibold text-navy-900">{item.title}</h4>
                <p className="mt-3 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <h3 className="mt-16 font-display text-xl font-semibold text-navy-900">{study.statsTitle}</h3>
        <div className="mt-6">
          <Stats items={study.stats} />
        </div>

        {ads ? (
          <div className="mt-20 border-t border-gold-500/50 pt-16">
            <Eyebrow>{ads.title}</Eyebrow>
            <p className="mt-5 max-w-2xl text-lg text-muted">{ads.intro}</p>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-900">{ads.locationsTitle}</h3>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {ads.locations.map((loc) => (
                    <li key={loc.name} className="flex gap-4 py-5">
                      <MapPin aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-gold-700" />
                      <div>
                        <p className="font-semibold text-navy-900">{loc.name}</p>
                        <p className="text-sm text-muted">{loc.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-900">{ads.videoTitle}</h3>
                <Media
                  src={ads.video}
                  kind="video"
                  poster={ads.videoPoster}
                  alt={ads.videoCaption}
                  title={ads.videoTitle}
                  caption={ads.videoCaption}
                  ratio="aspect-video"
                  className="mt-6"
                />
              </div>
            </div>

            <h3 className="mt-12 font-display text-xl font-semibold text-navy-900">{ads.visibilityTitle}</h3>
            <div className="mt-6">
              <Stats items={ads.visibility} />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export default async function WorkPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { workPage, caseStudies, offers, common, nav } = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={workPage.eyebrow}
        title={workPage.title}
        intro={workPage.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.work,
        }}
      />

      <nav aria-label={workPage.casesNavLabel} className="border-b border-line bg-white">
        <Container>
          <ul className="flex gap-1 overflow-x-auto">
            {caseStudies.map((study) => (
              <li key={study.id} className="shrink-0">
                <a
                  href={`#${study.id}`}
                  className="my-2 flex min-h-10 items-center gap-2.5 whitespace-nowrap rounded-full border border-transparent px-4 font-display text-[0.8125rem] font-semibold text-navy-900/80 transition-colors hover:border-gold-500/50 hover:bg-mist hover:text-navy-900"
                >
                  {study.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {caseStudies.map((study, index) => (
        <CaseSection
          key={study.id}
          study={study}
          index={index}
          locale={locale}
          common={common}
          hasOffer={offers.some((offer) => offer.id === study.id)}
        />
      ))}

      <CtaBanner
        title={workPage.cta.title}
        text={workPage.cta.text}
        button={{ href: contactHref(locale), label: workPage.cta.button }}
        whatsapp={{ label: common.whatsappCta, message: common.whatsappMessage }}
      />
    </>
  );
}
