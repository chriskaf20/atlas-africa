import type { Metadata } from "next";
import { AboutValues } from "@/components/home/AboutValues";
import { AccentTitle } from "@/components/home/AccentTitle";
import { HomeHero } from "@/components/home/HomeHero";
import { IntegrationStory } from "@/components/home/IntegrationStory";
import { PolesExplorer } from "@/components/home/PolesExplorer";
import { SectorsCarousel } from "@/components/home/SectorsCarousel";
import { ShipmentTracker } from "@/components/home/ShipmentTracker";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { whatsappUrl } from "@/content/site";
import { isLocale } from "@/i18n/config";
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
 * Page d'accueil — volontairement courte, sur le modèle du template :
 *  1. Hero (titre à mot tournant, compteurs, visuel Higgsfield)
 *  2. Déclaration et valeurs                  #a-propos
 *  3. Les 4 pôles, en onglets                 #poles
 *  4. Comment ça marche (scénario)            #comment-ca-marche
 *  5. Suivi d'un conteneur (exemple)          #suivi
 *  6. Secteurs servis (carrousel)             #secteurs
 *  7. Appel à l'action final
 *
 * Le détail des services, les offres, les réalisations et le formulaire
 * complet restent sur leurs pages (Services, Offres, Réalisations, Contact).
 */
export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);
  const { home, common } = content;

  return (
    <>
      <HomeHero locale={locale} content={content} />
      <AboutValues locale={locale} content={content} />
      <PolesExplorer locale={locale} content={content} />
      <IntegrationStory locale={locale} content={content} />
      <ShipmentTracker locale={locale} content={content} />
      <SectorsCarousel locale={locale} content={content} />

      {/* Appel à l'action final : court, deux choix clairs. */}
      <section aria-labelledby="contact-title" className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Eyebrow>{home.contact.eyebrow}</Eyebrow>
            <AccentTitle
              id="contact-title"
              text={home.contact.title}
              words={2}
              className="mt-5 font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-5xl lg:text-6xl"
              accentClassName="text-navy-900"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{home.contact.text}</p>
            <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <ButtonLink href={contactHref(locale)} variant="gold" arrow>
                {common.quoteCta}
              </ButtonLink>
              <a
                href={whatsappUrl(common.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("outlineDark")}
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
