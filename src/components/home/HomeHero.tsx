import { Fragment, type CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import type { Content } from "@/content";
import type { VisualId } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { contactHref, href, routes } from "@/lib/routes";
import { getVisual } from "@/lib/visuals";

type HomeHeroProps = {
  locale: Locale;
  content: Content;
};

/**
 * Les quatre activités du groupe, réunies dans la composition du hero
 * (dans l'ordre des pôles). Le visuel logistique est celui déjà généré.
 */
const ACTIVITY_VISUALS: VisualId[] = ["pole-business", "hero-operations", "pole-people", "pole-digital"];

/** Délai d'entrée d'un élément, en millisecondes (classes hero-up / hero-word). */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Titre découpé en mots : chaque mot monte derrière un masque, l'un après l'autre. */
function Words({ text, start, step = 55 }: { text: string; start: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="hero-word">
            <span style={delay(start + index * step)}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}

/**
 * Hero de la page d'accueil : titre, sous-titre, deux boutons et une
 * composition des quatre activités du groupe (une image par pôle).
 */
export function HomeHero({ locale, content }: HomeHeroProps) {
  const { hero } = content.home;
  const { common, poles } = content;
  const tiles = ACTIVITY_VISUALS.map((id, index) => ({ visual: getVisual(id, locale), pole: poles[index] }));
  const accentDelay = 200 + hero.title.split(" ").length * 55 + 80;

  return (
    <section className="hero on-dark relative isolate overflow-hidden bg-navy-950 text-white">
      {/* Fond : dégradé marine, trame fine et halo doré */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(70%_80%_at_85%_30%,#1b3776_0%,#0b1f4b_45%,#06122e_100%)]"
      />
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-60" />
      <div aria-hidden="true" className="hero-glow hero-glow-b -z-10" />

      <Container className="grid items-center gap-12 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-16">
        {/* Texte */}
        <div className="min-w-0">
          <div className="hero-up" style={delay(0)}>
            <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-7 font-display text-white">
            <span className="block text-[2.4rem] font-light leading-[1] tracking-[-0.03em] min-[400px]:text-[2.75rem] sm:text-6xl xl:text-7xl">
              <Words text={hero.title} start={200} />
            </span>
            <span
              className="hero-up mt-1 block text-[2.4rem] font-semibold italic leading-[1.04] tracking-[-0.03em] text-gold-300 min-[400px]:text-[2.75rem] sm:text-6xl xl:text-7xl"
              style={delay(accentDelay)}
            >
              {hero.titleAccent}
            </span>
          </h1>
          <p className="hero-up mt-8 max-w-xl text-lg leading-relaxed text-white/80" style={delay(accentDelay + 150)}>
            {hero.subtitle}
          </p>
          <div className="hero-up mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4" style={delay(accentDelay + 280)}>
            <ButtonLink href={contactHref(locale)} variant="gold" arrow>
              {common.projectCta}
            </ButtonLink>
            <ButtonLink href={href(locale, routes.expertises)} variant="outlineLight">
              {common.expertisesCta}
            </ButtonLink>
          </div>
        </div>

        {/* Composition des quatre activités : mosaïque décalée */}
        <ul className="hero-up grid grid-cols-2 gap-3 sm:gap-4" style={delay(accentDelay + 200)}>
          {tiles.map(({ visual, pole }, index) => (
            <li
              key={visual.id}
              className={cn(
                "relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)] sm:rounded-3xl",
                // Décalage vertical d'une colonne sur deux : effet mosaïque.
                index % 2 === 1 && "translate-y-6 sm:translate-y-10",
              )}
            >
              <Visual
                visual={visual}
                fit="fill"
                decorative
                priority={index < 2}
                sizes="(min-width: 1024px) 30vw, 60vw"
                showIllustration={false}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              {pole ? (
                <p className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <span className="block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold-300 sm:text-[0.6875rem]">
                    {common.poleLabel} {pole.number}
                  </span>
                  <span className="mt-1 block font-display text-[0.8125rem] font-semibold leading-tight text-white sm:text-base">
                    {pole.name}
                  </span>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
      {/* Mention commune : les images de la mosaïque sont des illustrations. */}
      <p className="pointer-events-none absolute bottom-3 left-4 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/50">
        {common.illustration}
      </p>
    </section>
  );
}
