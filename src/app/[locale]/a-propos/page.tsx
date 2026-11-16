import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { aboutPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.about,
    title: aboutPage.metaTitle,
    description: aboutPage.metaDescription,
  });
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { aboutPage: page, sectors, common, nav } = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.about,
        }}
      />

      {/* Vision & mission */}
      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {[page.vision, page.mission].map((block, i) => (
            <Reveal key={block.eyebrow} delay={i * 120} className="bg-white p-8 sm:p-12">
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-[1.75rem]">
                {block.title}
              </h2>
              <p className="mt-4 text-muted">{block.text}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Valeurs */}
      <section className="bg-mist py-14 sm:py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow={page.values.eyebrow} title={page.values.title} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.values.items.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 100}>
                <article className="card card-hover h-full p-7">
                  <span className="grid h-12 w-12 place-items-center icon-tile">
                    <Icon name={value.icon as IconName} size={24} strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-navy-900">{value.title}</h3>
                  <p className="mt-3 text-muted">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Approche */}
      <section className="on-dark relative isolate overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
        <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow={page.approach.eyebrow}
            title={page.approach.title}
            intro={page.approach.intro}
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {page.approach.steps.map((step, i) => (
              <Reveal as="li" key={step.label} delay={i * 120} className="border-t border-gold-500 pt-7">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                  {step.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-white/75">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Secteurs */}
      <section className="py-14 sm:py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow={page.sectors.eyebrow} title={page.sectors.title} />
          <div className="mt-12">
            <SectorsGrid sectors={sectors} />
          </div>
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
