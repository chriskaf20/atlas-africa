import { Route } from "lucide-react";
import { Fragment, type CSSProperties } from "react";
import { AfricaMap } from "@/components/brand/AfricaMap";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { contactHref, href, routes } from "@/lib/routes";
import { getVisual } from "@/lib/visuals";
import { CountUp } from "./CountUp";
import { HeroMotion, HeroMotionToggle } from "./HeroMotion";
import { RotatingWord } from "./RotatingWord";

type HomeHeroProps = {
  locale: Locale;
  content: Content;
};

/** Délai d'entrée d'un élément, en millisecondes (classes hero-up / hero-word). */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Titre découpé en mots : chaque mot monte derrière un masque, l'un après l'autre. */
function Words({ text, start, step = 55 }: { text: string; start: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        // L'espace est placé hors du masque : à l'intérieur, il serait ignoré.
        <Fragment key={`${word}-${index}`}>
          <span className="hero-word">
            <span style={delay(start + index * step)}>{word}</span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}

/** Étapes d'un trajet écrit « A – B – C » (au moins deux points sur la ligne). */
function routeStops(title: string): number {
  return Math.max(2, title.split(/\s+[–—-]\s+/).length);
}

/**
 * Hero de la page d'accueil : visuel plein cadre, titre à mot tournant,
 * boutons d'action, cartes flottantes (grand écran) et compteurs.
 *
 * Le visuel de fond est décoratif : le titre porte le sens, et la légende
 * (« Nos opérations · Haut-Katanga ») le décrit déjà.
 */
export function HomeHero({ locale, content }: HomeHeroProps) {
  const { hero } = content.home;
  const { common } = content;
  const { tracking } = content.home;
  const visual = getVisual("hero-operations", locale);
  const [route] = hero.floating;
  const stops = route ? routeStops(route.title) : 2;
  const titleWords = hero.title.split(" ").length;
  const rotatingDelay = 200 + titleWords * 55 + 80;

  return (
    <HeroMotion className="hero on-dark relative isolate flex flex-col sm:min-h-[calc(100svh-4.5rem)] overflow-hidden bg-navy-950 text-white lg:min-h-[calc(100svh-5rem)]">
      {/* ───── Fond : visuel, voiles bleu marine, trame et halo ───── */}
      <div aria-hidden="true" className="absolute inset-0 -z-30">
        {visual.src ? (
          <Visual visual={visual} fit="fill" priority decorative sizes="100vw" className="hh-zoom" />
        ) : (
          /* En attendant la vidéo Higgsfield (public/media/higgsfield/hero-operations.mp4) :
             composition vectorielle aux couleurs d'Atlas, nette à toutes les résolutions. */
          <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(70%_80%_at_78%_45%,#1b3776_0%,#0b1f4b_45%,#06122e_100%)]">
            <AfricaMap className="hero-map absolute -right-24 top-6 w-[30rem] opacity-30 sm:-right-10 sm:w-[36rem] lg:right-[2%] lg:top-1/2 lg:w-[min(44rem,48vw)] lg:-translate-y-1/2 lg:opacity-90" />
          </div>
        )}
      </div>
      {/* Voiles : plus sombres à gauche (texte) et en bas (compteurs). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgb(6_18_46/0.94)_0%,rgb(6_18_46/0.78)_42%,rgb(6_18_46/0.35)_100%)] max-lg:bg-none max-lg:bg-navy-950/65"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-20 h-2/3 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20 h-40 bg-gradient-to-b from-navy-950/70 to-transparent" />
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden="true" className="hero-glow hero-glow-b -z-10" />

      {/* ───── Contenu principal ───── */}
      <Container className="flex flex-1 flex-col pt-8 sm:pt-10 lg:pt-12">
        <div className="hero-up flex items-center justify-between gap-4" style={delay(0)}>
          <Eyebrow tone="dark" className="min-w-0">{hero.eyebrow}</Eyebrow>
          <div className="flex items-center gap-3">
            <HeroMotionToggle playLabel={tracking.play} pauseLabel={tracking.pause} />
          </div>
        </div>

        <div className="grid flex-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:py-16">
          <div className="min-w-0 max-w-4xl">
            <h1 className="font-display text-white">
              <span className="sr-only">{hero.titleFull}</span>
              <span aria-hidden="true" className="block">
                <span className="block text-[2.25rem] font-light leading-[0.98] tracking-[-0.03em] min-[400px]:text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  <Words text={hero.title} start={200} />
                </span>
                <span
                  className="hero-up mt-1 block text-[2.25rem] font-semibold italic leading-[1.02] tracking-[-0.03em] text-gold-300 min-[400px]:text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
                  style={delay(rotatingDelay)}
                >
                  <RotatingWord words={hero.rotating} />
                </span>
              </span>
            </h1>

            <p
              className="hero-up mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:mt-8"
              style={delay(rotatingDelay + 150)}
            >
              {hero.subtitle}
            </p>

            <div
              className="hero-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              style={delay(rotatingDelay + 280)}
            >
              <ButtonLink href={contactHref(locale)} variant="gold" arrow>
                {common.quoteCta}
              </ButtonLink>
              <ButtonLink href={href(locale, routes.services)} variant="outlineLight">
                {common.servicesCta}
              </ButtonLink>
            </div>

          </div>

          {/* Carte flottante (grand écran) : un trajet type, comme un widget de suivi. */}
          {route ? (
            <div className="hidden w-[19rem] flex-col gap-4 lg:flex lg:self-end xl:w-[21rem]">
              <div
                className="hero-up rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.7)] backdrop-blur-md"
                style={delay(rotatingDelay + 500)}
              >
                <div className="flex items-center gap-2.5 text-gold-300">
                  <Route aria-hidden="true" size={16} strokeWidth={1.75} />
                  <span aria-hidden="true" className="hero-live h-1.5 w-1.5 rounded-full bg-gold-400" />
                </div>
                <p className="mt-3 font-display text-[0.9375rem] font-semibold leading-snug text-white">{route.title}</p>
                <p className="mt-1 text-sm text-white/70">{route.text}</p>
                {/* Ligne de trajet : un point doré la parcourt. */}
                <div aria-hidden="true" className="relative mt-5 h-3">
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
                  <span className="hh-route-fill absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-gold-500 to-gold-300" />
                  {Array.from({ length: stops }, (_, i) => (
                    <span
                      key={i}
                      className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-navy-900"
                      style={{ left: `${(i / (stops - 1)) * 100}%` }}
                    />
                  ))}
                  <span className="hh-route-dot absolute inset-0">
                    <span className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300 shadow-[0_0_0_4px_rgb(214_180_92/0.25),0_0_18px_rgb(214_180_92/0.8)]" />
                  </span>
                </div>
              </div>

            </div>
          ) : null}
        </div>
      </Container>

      {/* ───── Compteurs : barre vitrée en bas du hero ───── */}
      <Container className="pb-6 sm:pb-8">
        <ul
          aria-label={hero.statsLabel}
          className="hero-up grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md lg:grid-cols-4"
          style={delay(rotatingDelay + 560)}
        >
          {hero.stats.map((stat, index) => (
            <li
              key={stat.label}
              className={cn(
                "flex flex-col gap-2 border-white/10 px-5 py-5 sm:px-7 sm:py-6",
                index % 2 === 0 && "border-r",
                index < 2 && "border-b lg:border-b-0",
                index < 3 && "lg:border-r",
              )}
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-display text-4xl font-light leading-none tracking-[-0.02em] text-white sm:text-5xl"
              />
              <span className="text-[0.8125rem] leading-snug text-white/70 sm:text-sm">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </HeroMotion>
  );
}
