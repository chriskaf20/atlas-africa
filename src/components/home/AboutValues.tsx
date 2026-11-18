import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/ui/Visual";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { href, routes } from "@/lib/routes";
import { getVisual } from "@/lib/visuals";
import { Parallax } from "./Parallax";
import { ScrollWords } from "./ScrollWords";

type AboutValuesProps = {
  locale: Locale;
  content: Content;
};

/** Intitulé en capitales précédé d'un filet doré (même style que <Eyebrow>, mais en titre). */
const eyebrowHeading =
  "flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-300";

/**
 * À propos / Nos valeurs (#a-propos) : une déclaration qui s'allume au
 * défilement, un visuel de Lubumbashi posé sur un bloc doré, puis les quatre
 * valeurs, l'efficacité et la fiabilité en tête.
 */
export function AboutValues({ locale, content }: AboutValuesProps) {
  const { about } = content.home;
  const values = content.aboutPage.values.items;
  const visual = getVisual("about-lubumbashi", locale);

  return (
    <section
      id="a-propos"
      aria-labelledby="a-propos-title"
      className="on-dark relative isolate overflow-hidden bg-navy-950 py-16 text-white sm:py-24 lg:py-32"
    >
      {/* Décor : halos et trame très discrets. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_100%_0%,rgb(44_74_143/0.35),transparent_70%),radial-gradient(45%_40%_at_0%_100%,rgb(201_161_59/0.08),transparent_70%)]"
      />
      <div aria-hidden="true" className="av-grid absolute inset-0 -z-10" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-14">
          {/* Titre de section (petit intitulé) */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h2 id="a-propos-title" className={eyebrowHeading}>
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold-500" />
              {about.eyebrow}
            </h2>
          </div>

          {/* Déclaration révélée mot à mot */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <ScrollWords
              segments={about.statement}
              className="font-display text-[1.75rem] font-light leading-[1.18] tracking-[-0.02em] sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-[1.12]"
            />
            <div className="mt-10 lg:mt-14">
              <ButtonLink href={href(locale, routes.about)} variant="outlineLight" arrow>
                {about.cta}
              </ButtonLink>
            </div>
          </div>

          {/* Visuel posé sur un bloc doré décalé */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2">
            <div className="relative mx-auto max-w-sm pb-6 pl-6 sm:max-w-md lg:mx-0 lg:max-w-[24rem] lg:pb-10 lg:pl-10">
              <Parallax strength={-18} className="absolute bottom-0 left-0 h-3/5 w-3/4">
                <div
                  aria-hidden="true"
                  className="pattern-lines h-full w-full rounded-3xl bg-gradient-to-br from-gold-400 to-gold-600"
                />
              </Parallax>
              <Parallax strength={26} className="relative">
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)]">
                  <Visual
                    visual={visual}
                    sizes="(min-width: 1024px) 24rem, (min-width: 640px) 28rem, 90vw"
                    zoomOnHover
                  />
                  {/* Légende (l'emplacement provisoire affiche déjà ce libellé). */}
                  {visual.src ? (
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/55 px-3.5 py-1.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                      {visual.label}
                    </span>
                  ) : null}
                </div>
              </Parallax>
            </div>
          </div>
        </div>

        {/* ───── Nos valeurs ───── */}
        <div className="mt-20 lg:mt-28">
          <h3 className={eyebrowHeading}>
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold-500" />
            {about.valuesTitle}
          </h3>

          {/* Rangée compacte : mêmes valeurs que la page À propos (une seule source). */}
          <ul className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 80} className="relative pt-6">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/15" />
                <span aria-hidden="true" className="draw-line absolute left-0 top-0 h-px w-12 bg-gold-400" />
                <h4 className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-white">
                  <span className="text-gold-300">
                    <Icon name={value.icon} size={20} />
                  </span>
                  {value.title}
                </h4>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/70">{value.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
