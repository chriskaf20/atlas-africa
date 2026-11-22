import type { Metadata } from "next";
import { AccentTitle } from "@/components/home/AccentTitle";
import { HomeHero } from "@/components/home/HomeHero";
import {
  GroupTeaser,
  PolesCards,
  SectorsLine,
  ValueProposition,
  WorkSection,
  sectionTitle,
} from "@/components/home/HomeSections";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { whatsappUrl } from "@/content/site";
import { isLocale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { contactHref, routes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);
  return buildMetadata({ locale, path: routes.home, description: meta.description });
}

/**
 * Page d'accueil :
 *  1. Hero — « Vos ambitions. Notre capacité d'action. »
 *  2. Notre proposition de valeur
 *  3. Nos quatre pôles                        #poles
 *  4. Industries & Secteurs (une ligne)       #secteurs
 *  5. Projets & Réalisations
 *  6. Présentation du groupe
 *  7. Conversion : « Parlons de votre prochain projet. »
 *
 * « Comment ça marche » (scénario et méthode) a sa propre page, dans le menu.
 */
export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { home, common } = content;

  return (
    <>
      <HomeHero locale={locale} content={content} />
      <ValueProposition locale={locale} content={content} />
      <PolesCards locale={locale} content={content} />
      <SectorsLine locale={locale} content={content} />
      <WorkSection locale={locale} content={content} />
      <GroupTeaser locale={locale} content={content} />

      {/* 7. Conversion commerciale */}
      <section aria-labelledby="contact-title" className="on-dark relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-28 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_0%,rgb(44_74_143/0.55),transparent_70%)]"
        />
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Eyebrow tone="dark">{home.contact.eyebrow}</Eyebrow>
            <AccentTitle
              id="contact-title"
              text={home.contact.title}
              words={3}
              className={cn(sectionTitle, "text-white")}
              accentClassName="text-gold-300"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{home.contact.text}</p>
            <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonLink href={contactHref(locale)} variant="gold" arrow>
                {common.projectCta}
              </ButtonLink>
              <a
                href={whatsappUrl(common.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("outlineLight")}
              >
                <WhatsAppIcon className="h-4 w-4" />
                {common.whatsappCta}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
