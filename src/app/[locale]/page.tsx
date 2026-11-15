import type { Metadata } from "next";
import { CaseStudyCards } from "@/components/sections/CaseStudyCards";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { OffersGrid } from "@/components/sections/OffersGrid";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { PolesGrid } from "@/components/sections/PolesGrid";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { isLocale } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { href, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);
  return buildMetadata({ locale, path: routes.home, description: meta.description });
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { home, common } = content;

  return (
    <>
      <Hero locale={locale} content={content} />
      <Marquee items={content.poles.flatMap((pole) => pole.services.map((service) => service.title))} />

      {/* Les 4 pôles */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading {...home.poles} />
          <div className="mt-12 lg:mt-16">
            <PolesGrid locale={locale} content={content} />
          </div>
        </Container>
      </section>

      {/* Offres phares */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading {...home.offers} />
          </Reveal>
          <div className="mt-12 lg:mt-16">
            <OffersGrid locale={locale} content={content} />
          </div>
        </Container>
      </section>

      {/* Secteurs servis */}
      <section className="bg-mist py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading {...home.sectors} />
          </Reveal>
          <Reveal className="mt-12 lg:mt-16">
            <SectorsGrid sectors={content.sectors} />
          </Reveal>
        </Container>
      </section>

      {/* Méthode */}
      <section className="on-dark relative isolate overflow-hidden bg-navy-900 py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0b1f4b_0%,#06122e_100%)]"
        />
        <Container>
          <Reveal>
            <SectionHeading {...home.method} tone="dark" />
          </Reveal>
          <div className="mt-14 lg:mt-20">
            <MethodSteps steps={content.method} />
          </div>
        </Container>
      </section>

      {/* Réalisations */}
      <section className="py-20 lg:py-28">
        <Container>
          <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading {...home.work} />
            <ButtonLink href={href(locale, routes.work)} variant="outlineDark" arrow className="self-start lg:self-auto">
              {common.allWork}
            </ButtonLink>
          </Reveal>
          <div className="mt-12 lg:mt-16">
            <CaseStudyCards locale={locale} content={content} />
          </div>
        </Container>
      </section>

      {/* Appel à l'action et formulaire court */}
      <ContactSection locale={locale} content={content} />
    </>
  );
}
