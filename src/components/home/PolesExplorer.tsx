import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import type { Content, Offer, Pole } from "@/content";
import { poleVisuals } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { contactHref, href, offerHref, routes } from "@/lib/routes";
import { getVisual, type ResolvedVisual } from "@/lib/visuals";
import { AccentTitle } from "./AccentTitle";
import { PolesTabs } from "./PolesTabs";

type PolesExplorerProps = {
  locale: Locale;
  content: Content;
};

/** Offres phares rattachées à un pôle : par service correspondant, ou par intitulé du pôle. */
function offersForPole(pole: Pole, offers: Offer[]): Offer[] {
  const titles = new Set(pole.services.map((service) => service.title));
  return offers.filter(
    (offer) => (offer.serviceTitle !== "" && titles.has(offer.serviceTitle)) || offer.eyebrow === pole.name,
  );
}

/** Petit intitulé de groupe à l'intérieur d'un panneau. */
function GroupLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <h4
      className={
        dark
          ? "flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-300"
          : "flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-700"
      }
    >
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-gold-500" />
      {children}
    </h4>
  );
}

type PolePanelProps = {
  locale: Locale;
  content: Content;
  pole: Pole;
  visual: ResolvedVisual;
};

/** Contenu détaillé d'un pôle (rendu côté serveur, affiché par <PolesTabs />). */
function PolePanel({ locale, content, pole, visual }: PolePanelProps) {
  const { common, home } = content;
  const labels = home.poles;
  const offers = offersForPole(pole, content.offers);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Visuel et carte vitrée */}
      <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-navy-950 on-dark">
        <Visual
          visual={visual}
          fit="fill"
          zoomOnHover
          sizes="(min-width: 1216px) 800px, (min-width: 1024px) 64vw, 100vw"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-2 font-display text-[4.5rem] font-light leading-none tracking-[-0.04em] text-white/20 sm:right-6 sm:top-3 sm:text-[7.5rem]"
        >
          {pole.number}
        </span>
        <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-navy-950/45 p-4 text-white backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-5">
          <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
            {common.poleLabel} {pole.number}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
            <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{pole.name}</h3>
            {pole.badge ? <Badge tone="dark">{pole.badge}</Badge> : null}
          </div>
          <p className="mt-1.5 hidden text-sm leading-snug text-white/80 sm:block">{pole.tagline}</p>
        </div>
      </div>

      <p className="max-w-3xl text-lg font-light leading-relaxed text-ink sm:text-xl">{pole.summary}</p>

      {/* Services du pôle : en pastilles compactes (le détail est dans le carrousel des services). */}
      <div>
        <GroupLabel>{labels.servicesLabel}</GroupLabel>
        <ul className="mt-4 flex flex-wrap gap-2">
          {pole.services.map((service) => (
            <li
              key={service.title}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-mist/70 py-1.5 pl-1.5 pr-3.5 font-display text-[0.8125rem] font-semibold text-navy-900"
            >
              <span className="icon-tile grid h-7 w-7 shrink-0 place-items-center !rounded-full">
                <Icon name={service.icon} size={14} />
              </span>
              {service.title}
              {service.badge ? <Badge>{service.badge}</Badge> : null}
            </li>
          ))}
        </ul>
      </div>

      {/* Appels à l'action */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href={contactHref(locale, pole.id)} variant="navy" arrow>
          {labels.quoteCta}
        </ButtonLink>
        <ButtonLink href={`${href(locale, routes.services)}#${pole.id}`} variant="outlineDark">
          {common.discoverPole}
        </ButtonLink>
        {/* Offre phare du pôle, en simple lien. */}
        {offers.map((offer) => (
          <Link
            key={offer.id}
            href={offerHref(locale, offer.id)}
            className="group inline-flex min-h-12 items-center gap-2 px-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900 transition-colors hover:text-gold-700"
          >
            <span className="text-gold-700">{labels.offerLabel} ·</span>
            {offer.name}
            <ArrowUpRight
              aria-hidden="true"
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Accueil — les 4 pôles détaillés, en onglets. */
export function PolesExplorer({ locale, content }: PolesExplorerProps) {
  const { poles } = content;
  const labels = content.home.poles;

  const tabs = poles.map((pole) => ({
    id: pole.id,
    number: pole.number,
    name: pole.name,
    tagline: pole.tagline,
    badge: pole.badge,
  }));

  const panels = poles.map((pole) => (
    <PolePanel
      key={pole.id}
      locale={locale}
      content={content}
      pole={pole}
      visual={getVisual(poleVisuals[pole.id], locale)}
    />
  ));

  return (
    <section id="poles" aria-labelledby="poles-title" className="overflow-x-clip bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="light">{labels.eyebrow}</Eyebrow>
            <AccentTitle
              id="poles-title"
              text={labels.title}
              words={4}
              className="mt-5 font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-5xl lg:text-6xl"
              accentClassName="text-navy-900"
            />
          </div>
          <p className="text-lg leading-relaxed text-muted lg:col-span-5 lg:pb-2">{labels.intro}</p>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16" delay={120}>
          <PolesTabs label={labels.tabsLabel} tabs={tabs} panels={panels} />
        </Reveal>
      </Container>
    </section>
  );
}
