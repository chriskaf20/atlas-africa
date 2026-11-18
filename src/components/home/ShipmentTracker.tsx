import { Info } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { Content } from "@/content";
import { trackingVisuals } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { contactHref } from "@/lib/routes";
import { getVisuals } from "@/lib/visuals";
import { AccentTitle } from "./AccentTitle";
import { TrackerDemo } from "./TrackerDemo";

type ShipmentTrackerProps = {
  locale: Locale;
  content: Content;
};

/**
 * Suivi des expéditions (#suivi) : une console de suivi qui déroule le
 * parcours type d'un conteneur, du fournisseur au site du client.
 * Il s'agit d'un exemple illustratif (badge et note le précisent), pas d'un
 * outil de suivi en temps réel.
 */
export function ShipmentTracker({ locale, content }: ShipmentTrackerProps) {
  const { tracking } = content.home;
  const visuals = getVisuals(trackingVisuals, locale);

  return (
    <section
      id="suivi"
      aria-labelledby="suivi-title"
      className="on-dark relative isolate overflow-hidden bg-navy-950 py-16 text-white sm:py-24 lg:py-32"
    >
      {/* ───── Décor : grille fine et halos ───── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_10%,rgb(44_74_143/0.45),transparent_70%),radial-gradient(45%_40%_at_10%_90%,rgb(201_161_59/0.12),transparent_70%)]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <Container>
        {/* ───── En-tête ───── */}
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">{tracking.eyebrow}</Eyebrow>
            <AccentTitle
              id="suivi-title"
              text={tracking.title}
              className="mt-6 font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
              accentClassName="text-gold-300"
            />
          </div>
          <p className="text-lg leading-relaxed text-white/75 lg:col-span-5 lg:pb-2">{tracking.intro}</p>
        </Reveal>

        {/* ───── Console de suivi (exemple) ───── */}
        <Reveal delay={120} className="mt-12 sm:mt-16 lg:mt-20">
          <TrackerDemo tracking={tracking} visuals={visuals} />
        </Reveal>

        {/* ───── Note et appel à l'action ───── */}
        <div className="mt-10 flex flex-col gap-6 sm:mt-12 md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="flex max-w-2xl items-start gap-3 text-sm leading-relaxed text-white/60">
            <Info aria-hidden="true" size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-gold-300" />
            {tracking.note}
          </p>
          <ButtonLink
            href={contactHref(locale, tracking.serviceValue)}
            variant="gold"
            arrow
            className="w-full shrink-0 sm:w-auto"
          >
            {tracking.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
