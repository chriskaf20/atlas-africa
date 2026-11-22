import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, href, poleHref, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { sectorsPage } = getContent(locale);
  return buildMetadata({
    locale,
    path: routes.sectors,
    title: sectorsPage.metaTitle,
    description: sectorsPage.metaDescription,
  });
}

/** Industries & Secteurs : besoins fréquents et pôles mobilisés pour chaque marché. */
export default async function SectorsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { sectorsPage: page, sectors, poles, common, nav } = content;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        intro={page.intro}
        breadcrumb={{
          label: common.breadcrumbLabel,
          home: { href: href(locale, routes.home), label: nav.home },
          current: nav.sectors,
        }}
      />

      {/* Accès rapide */}
      <nav aria-label={page.eyebrow} className="border-b border-line bg-white">
        <Container>
          <ul className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            {sectors.map((sector) => (
              <li key={sector.id} className="shrink-0">
                <a
                  href={`#${sector.id}`}
                  className="my-2 flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border border-transparent px-4 font-display text-[0.8125rem] font-semibold text-navy-900/80 transition-colors hover:border-gold-500/50 hover:bg-mist hover:text-navy-900"
                >
                  <Icon name={sector.icon} size={15} className="text-gold-700" />
                  {sector.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {sectors.map((sector, index) => {
        const sectorPoles = poles.filter((pole) => sector.poles.includes(pole.id));
        return (
          <section
            key={sector.id}
            id={sector.id}
            aria-labelledby={`${sector.id}-titre`}
            className={cn("scroll-mt-24 py-14 sm:py-20 lg:py-24", index % 2 === 1 && "bg-mist")}
          >
            <Container className="grid items-start gap-8 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <div className="flex items-center gap-5 lg:flex-col lg:items-start">
                  <span className="icon-tile grid h-20 w-20 place-items-center lg:h-28 lg:w-28">
                    <Icon name={sector.icon} size={40} strokeWidth={1.2} />
                  </span>
                  <span className="font-display text-5xl font-light leading-none text-navy-900/15 lg:text-7xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-8" delay={100}>
                <h2
                  id={`${sector.id}-titre`}
                  className="font-display text-3xl font-light leading-tight tracking-[-0.02em] text-navy-900 sm:text-4xl"
                >
                  {sector.label}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{sector.text}</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">{page.needsTitle}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {sector.needs.map((need) => (
                        <li key={need} className="flex gap-3 text-ink">
                          <Check aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-gold-600" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-900">{page.polesTitle}</h3>
                    <ul className="mt-4 space-y-2">
                      {sectorPoles.map((pole) => (
                        <li key={pole.id}>
                          <Link
                            href={poleHref(locale, pole.id)}
                            className="inline-flex min-h-10 items-center gap-2.5 font-display text-[0.9375rem] font-semibold text-navy-900 underline decoration-gold-500/60 underline-offset-4 hover:decoration-gold-600"
                          >
                            <span className="text-gold-700">{pole.number}</span>
                            {pole.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      <CtaBanner
        title={page.cta.title}
        text={page.cta.text}
        button={{ href: contactHref(locale), label: page.cta.button }}
        whatsapp={{ label: common.whatsappCta, message: common.whatsappMessage }}
      />
    </>
  );
}
