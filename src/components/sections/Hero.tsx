import { AfricaMap } from "@/components/brand/AfricaMap";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { contactHref, href, routes } from "@/lib/routes";

type HeroProps = {
  locale: Locale;
  content: Content;
};

export function Hero({ locale, content }: HeroProps) {
  const { hero } = content.home;
  const { common } = content;

  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(90%_70%_at_85%_10%,rgb(27_55_118/0.9),transparent_65%),linear-gradient(180deg,#0b1f4b_0%,#06122e_100%)]"
      />

      {/* Petit écran : la carte sert de fond discret derrière le texte. */}
      <AfricaMap className="pointer-events-none absolute -right-28 top-6 -z-10 w-[26rem] opacity-25 sm:-right-16 sm:w-[30rem] lg:hidden" />

      <Container className="grid items-center gap-12 pb-14 pt-16 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-20 lg:pt-24">
        <div>
          <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[2.125rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.08] xl:text-[3.5rem]">
            {hero.title} <span className="text-gold-400">{hero.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">{hero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={contactHref(locale)} variant="gold" arrow>
              {common.quoteCta}
            </ButtonLink>
            <ButtonLink href={href(locale, routes.services)} variant="outlineLight">
              {common.servicesCta}
            </ButtonLink>
          </div>
        </div>

        <AfricaMap
          alt={hero.mapAlt}
          label={hero.mapLabel}
          sublabel={hero.mapSublabel}
          className="mx-auto hidden w-full max-w-[30rem] lg:block"
        />
      </Container>

      <Container>
        <ul className="grid grid-cols-2 border-t border-white/15 lg:grid-cols-4">
          {hero.highlights.map((item) => (
            <li key={item.title} className="py-7 pr-4">
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
