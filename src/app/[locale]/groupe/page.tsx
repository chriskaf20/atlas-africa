import type { Metadata } from "next";
import Image from "next/image";
import { Check, MapPin } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import { getVisual } from "@/lib/visuals";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { groupPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.group,
    title: groupPage.metaTitle,
    description: groupPage.metaDescription,
  });
}

/**
 * Le Groupe. Les sections « Notre histoire » et « Équipe dirigeante »
 * s'affichent automatiquement dès que leur contenu est renseigné.
 */
export default async function GroupPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { groupPage: page, common, nav } = content;
  const visual = getVisual("about-lubumbashi", locale);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.group,
        }}
      />

      {/* Qui sommes-nous ? */}
      <section className="py-16 sm:py-24 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading eyebrow={page.who.eyebrow} title={page.who.title} />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{page.who.text}</p>
          </Reveal>
          {visual.src ? (
            <Reveal className="lg:col-span-5" delay={120}>
              <div className="relative overflow-hidden rounded-3xl border border-line">
                <Visual visual={visual} sizes="(min-width: 1024px) 34vw, 90vw" decorative />
              </div>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Notre histoire (si renseignée) */}
      {page.history.items.length > 0 ? (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow={page.history.eyebrow} title={page.history.title} />
            <ol className="mt-10 space-y-6 border-l border-gold-500/50 pl-6">
              {page.history.items.map((item) => (
                <li key={item.year}>
                  <p className="font-display text-sm font-semibold text-gold-700">{item.year}</p>
                  <p className="mt-1 text-ink">{item.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {/* Mission et vision */}
      <section className="bg-mist py-16 sm:py-24">
        <Container className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {[page.mission, page.vision].map((block, i) => (
            <Reveal key={block.eyebrow} delay={i * 120} className="bg-white p-8 sm:p-12">
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-[1.75rem]">{block.title}</h2>
              <p className="mt-4 text-muted">{block.text}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Valeurs */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow={page.values.eyebrow} title={page.values.title} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.values.items.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 100}>
                <article className="card card-hover h-full p-7">
                  <span className="icon-tile grid h-12 w-12 place-items-center">
                    <Icon name={value.icon} size={24} strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-navy-900">{value.title}</h3>
                  <p className="mt-3 text-muted">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Modèle opérationnel */}
      <section className="on-dark relative isolate overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
        <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
        <Container>
          <SectionHeading tone="dark" eyebrow={page.model.eyebrow} title={page.model.title} intro={page.model.intro} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {page.model.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 100} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-white/75">{item.text}</p>
              </Reveal>
            ))}
          </ul>
          <ol className="mt-14 grid gap-8 md:grid-cols-2">
            {page.model.steps.map((step, i) => (
              <Reveal as="li" key={step.label} delay={i * 120} className="border-t border-gold-500 pt-7">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">{step.label}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-white/75">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Équipe dirigeante (si renseignée) */}
      {page.leadership.leaders.length > 0 ? (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow={page.leadership.eyebrow} title={page.leadership.title} />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              {page.leadership.leaders.map((leader) => (
                <li key={leader.name} className="card flex gap-6 p-7">
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      width={112}
                      height={112}
                      className="h-28 w-28 shrink-0 rounded-2xl object-cover"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">{leader.name}</h3>
                    <p className="font-display text-sm font-semibold text-gold-700">{leader.role}</p>
                    <p className="mt-3 text-muted">{leader.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Implantation et engagement */}
      <section className="bg-mist py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={page.presence.eyebrow} title={page.presence.title} />
            <p className="mt-5 text-lg text-muted">{page.presence.text}</p>
            <ul className="mt-8 space-y-4">
              {page.presence.places.map((place) => (
                <li key={place.city} className="card flex items-start gap-4 p-6">
                  <MapPin aria-hidden="true" size={22} className="mt-0.5 shrink-0 text-gold-700" />
                  <div>
                    <p className="font-display text-lg font-semibold text-navy-900">{place.city}</p>
                    <p className="text-sm text-muted">{place.region}</p>
                    <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">{place.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow={page.commitment.eyebrow} title={page.commitment.title} />
            <ul className="mt-8 space-y-3">
              {page.commitment.items.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-ink">
                  <Check aria-hidden="true" size={20} className="mt-1 shrink-0 text-gold-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
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
