import Link from "next/link";
import type { CSSProperties } from "react";
import { AfricaMap } from "@/components/brand/AfricaMap";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { contactHref, href, routes } from "@/lib/routes";
import { HeroVideo } from "./HeroVideo";

type HeroProps = {
  locale: Locale;
  content: Content;
};

/** Délai d'entrée d'un élément, en millisecondes. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Titre découpé en mots : chaque mot monte derrière un masque, l'un après l'autre. */
function Words({ text, start, step = 45 }: { text: string; start: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="hero-word">
          <span style={delay(start + index * step)}>{word}</span>{" "}
        </span>
      ))}
    </>
  );
}

function VideoCard({ locale, video, className }: { locale: Locale; video: Content["home"]["hero"]["video"]; className?: string }) {
  return (
    <Link
      href={`${href(locale, routes.work)}#led-atlas`}
      className={`group block border border-gold-400/50 bg-navy-950 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] ${className ?? ""}`}
    >
      <HeroVideo src={video.src} poster={video.poster} alt={video.alt} />
      <span className="flex items-center gap-3 px-4 py-3">
        <span aria-hidden="true" className="hero-live h-2 w-2 shrink-0 rounded-full bg-gold-400" />
        <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {video.label}
        </span>
        <span className="truncate text-xs text-white/70">{video.caption}</span>
      </span>
    </Link>
  );
}

export function Hero({ locale, content }: HeroProps) {
  const { hero } = content.home;
  const { common } = content;
  const titleWords = hero.title.split(" ").length;

  return (
    <section className="hero on-dark relative isolate overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#0b1f4b_0%,#06122e_100%)]"
      />
      {/* Halos lumineux qui dérivent lentement. */}
      <div aria-hidden="true" className="hero-glow hero-glow-a -z-20" />
      <div aria-hidden="true" className="hero-glow hero-glow-b -z-20" />
      {/* Trame fine qui glisse en diagonale. */}
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-20" />

      {/* Petit écran : la carte sert de fond discret derrière le texte. */}
      <AfricaMap className="hero-fade pointer-events-none absolute -right-28 top-6 -z-10 w-[26rem] opacity-25 sm:-right-16 sm:w-[30rem] lg:hidden" />

      <Container className="grid items-center gap-12 pb-14 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-20 lg:pt-24">
        <div>
          <div className="hero-up" style={delay(0)}>
            <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-6 text-[2.125rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.08] xl:text-[3.5rem]">
            <Words text={hero.title} start={150} />
            <span className="text-gold-400">
              <Words text={hero.titleAccent} start={150 + titleWords * 45 + 120} step={70} />
            </span>
          </h1>
          <span aria-hidden="true" className="hero-line mt-7 block h-px w-24 bg-gold-500" style={delay(900)} />
          <p className="hero-up mt-7 max-w-xl text-lg leading-relaxed text-white/80" style={delay(950)}>
            {hero.subtitle}
          </p>
          <div className="hero-up mt-10 flex flex-col gap-4 sm:flex-row" style={delay(1100)}>
            <ButtonLink href={contactHref(locale)} variant="gold" arrow>
              {common.quoteCta}
            </ButtonLink>
            <ButtonLink href={href(locale, routes.services)} variant="outlineLight">
              {common.servicesCta}
            </ButtonLink>
          </div>

          {/* Petit et moyen écran : la vidéo vient sous les boutons. */}
          <div className="hero-up mt-12 max-w-md lg:hidden" style={delay(1250)}>
            <VideoCard locale={locale} video={hero.video} />
          </div>
        </div>

        {/* Grand écran : carte animée, avec la vidéo posée en bas à gauche. */}
        <div className="relative hidden lg:block">
          <div className="hero-map mx-auto w-full max-w-[30rem]">
            <AfricaMap alt={hero.mapAlt} label={hero.mapLabel} sublabel={hero.mapSublabel} />
          </div>
          <div className="hero-up absolute -bottom-6 -left-4 w-[56%] xl:-left-10" style={delay(1300)}>
            <VideoCard locale={locale} video={hero.video} className="hero-float" />
          </div>
        </div>
      </Container>

      <Container>
        <ul className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
          {hero.highlights.map((item, index) => (
            <li key={item.title} className="hero-up py-7 pr-4" style={delay(1400 + index * 90)}>
              <span aria-hidden="true" className="block h-px w-6 bg-gold-500" />
              <p className="mt-4 font-display text-[0.9375rem] font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-white/70">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
