import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent, type CaseStudy, type CaseStudyStatus, type Content } from "@/content";
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

const statusOrder: CaseStudyStatus[] = ["completed", "ongoing", "development"];

function CaseSection({ study, locale, content }: { study: CaseStudy; locale: Locale; content: Content }) {
  const { workPage, common } = content;
  const hasOffer = content.offers.some((offer) => offer.id === study.id);
  const ads = study.advertisers;

  return (
    <article id={study.id} aria-labelledby={`${study.id}-titre`} className="scroll-mt-28 border-t border-line py-14 first:border-t-0 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow>{study.sector}</Eyebrow>
          <h3 id={`${study.id}-titre`} className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl">
            {study.name}
          </h3>
          <p className="mt-4 font-display text-lg font-medium text-navy-900">{study.headline}</p>
          <p className="mt-4 text-muted">{study.summary}</p>

          {/* Fiche : statut, zone, intervention */}
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {[
              { label: workPage.fields.status, value: common.status[study.status] },
              { label: workPage.fields.location, value: study.location },
              { label: workPage.fields.intervention, value: study.intervention },
            ].map((field) => (
              <div key={field.label} className="bg-white p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{field.label}</dt>
                <dd className="mt-1 text-[0.9375rem] font-medium text-navy-900">{field.value}</dd>
              </div>
            ))}
          </dl>

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
              caption={study.sector}
              ratio={study.videoOrientation === "portrait" ? "aspect-[9/16]" : "aspect-video"}
              className={cn(
                "w-full border border-line shadow-[0_30px_60px_-30px_rgb(6_18_46/0.45)]",
                study.videoOrientation === "portrait" && "mx-auto max-w-[19rem]",
              )}
            />
          ) : (
            <Media
              src={study.image}
              alt={study.imageAlt}
              title={study.name}
              caption={study.sector}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          )}
        </Reveal>
      </div>

      <h4 className="mt-14 font-display text-xl font-semibold text-navy-900">{study.deliverablesTitle}</h4>
      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {study.deliverables.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 100}>
            <div className="card card-hover flex h-full flex-col p-7">
              <span className="icon-tile grid h-12 w-12 place-items-center">
                <Icon name={item.icon} size={24} strokeWidth={1.4} />
              </span>
              <p className="mt-6 text-lg font-semibold text-navy-900">{item.title}</p>
              <p className="mt-3 text-muted">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      {/* Résultats : uniquement s'ils sont mesurés et documentés. */}
      {study.results.length > 0 ? (
        <>
          <h4 className="mt-14 font-display text-xl font-semibold text-navy-900">{study.resultsTitle}</h4>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {study.results.map((result) => (
              <div key={result.label} className="flex flex-col bg-white p-6">
                <dt className="text-sm text-muted">{result.label}</dt>
                <dd className="order-first font-display text-3xl font-semibold text-navy-900">{result.value}</dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}

      {ads ? (
        <div className="mt-16 grid gap-10 border-t border-gold-500/50 pt-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>{ads.title}</Eyebrow>
            <p className="mt-5 max-w-xl text-lg text-muted">{ads.intro}</p>
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-navy-900">{ads.videoTitle}</p>
            <Media
              src={ads.video}
              kind="video"
              poster={ads.videoPoster}
              alt={ads.videoCaption}
              title={ads.videoTitle}
              caption={ads.videoCaption}
              ratio="aspect-video"
              className="mt-4"
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}

/** Projets & Réalisations, classés par statut réel. Les groupes vides sont masqués. */
export default async function WorkPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { workPage, caseStudies, common, nav } = content;
  const groups = statusOrder
    .map((status) => ({ status, studies: caseStudies.filter((study) => study.status === status) }))
    .filter((group) => group.studies.length > 0);

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

      <nav aria-label={workPage.eyebrow} className="border-b border-line bg-white">
        <Container>
          <ul className="no-scrollbar flex gap-1 overflow-x-auto">
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

      {groups.map((group, index) => (
        <section
          key={group.status}
          aria-labelledby={`statut-${group.status}`}
          className={cn("py-14 sm:py-20", index % 2 === 1 && "bg-mist")}
        >
          <Container>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-gold-500/40 pb-6">
              <h2 id={`statut-${group.status}`} className="font-display text-3xl font-light tracking-[-0.02em] text-navy-900 sm:text-4xl">
                {workPage.groups[group.status].title}
              </h2>
              <p className="text-muted">{workPage.groups[group.status].intro}</p>
            </div>
            {group.studies.map((study) => (
              <CaseSection key={study.id} study={study} locale={locale} content={content} />
            ))}
          </Container>
        </section>
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
