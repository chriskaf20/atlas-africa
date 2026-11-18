import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import type { Content } from "@/content";
import { sectorVisuals } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { contactHref } from "@/lib/routes";
import { getVisual } from "@/lib/visuals";
import { splitAccent } from "./AccentTitle";
import { SectorsTrack } from "./SectorsTrack";

type SectorsCarouselProps = {
  locale: Locale;
  content: Content;
};

/**
 * Secteurs servis (#secteurs, cible du lien « Secteurs » de l'en-tête) :
 * un carrousel horizontal de cartes, aligné sur la grille à gauche et
 * débordant jusqu'au bord droit de l'écran.
 */
export function SectorsCarousel({ locale, content }: SectorsCarouselProps) {
  const { sectors } = content.home;
  const { lead, accent } = splitAccent(sectors.title);
  const contact = contactHref(locale);

  const header = (
    <div className="max-w-2xl">
      <Eyebrow tone="dark">{sectors.eyebrow}</Eyebrow>
      <h2
        id="secteurs-title"
        className="mt-6 font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
      >
        {lead ? <>{lead} </> : null}
        <span className="font-semibold italic text-gold-300">{accent}</span>
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-white/75">{sectors.intro}</p>
    </div>
  );

  return (
    <section
      id="secteurs"
      aria-labelledby="secteurs-title"
      className="on-dark relative isolate scroll-mt-24 overflow-hidden bg-navy-950 py-16 text-white sm:py-24 lg:py-32"
    >
      {/* Décor : halos et quadrillage très discrets. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_0%_0%,rgb(44_74_143/0.4),transparent_70%),radial-gradient(40%_40%_at_100%_100%,rgb(201_161_59/0.1),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]"
      />

      <SectorsTrack
        header={header}
        listLabel={sectors.title}
        previousLabel={sectors.previous}
        nextLabel={sectors.next}
      >
        {content.sectors.map((sector, index) => {
          const details = sectors.details[sector.icon];
          const visualId = sectorVisuals[sector.icon];
          const visual = visualId ? getVisual(visualId, locale) : null;
          const titleId = `secteur-${sector.icon}`;

          return (
            <li
              key={sector.icon}
              className="w-[85%] shrink-0 snap-start md:w-[46%] lg:w-[31%] xl:w-[26%]"
            >
              <article className="sc-card group flex h-full flex-col gap-3">
                {/* Visuel */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-navy-900">
                  {visual ? (
                    <Visual
                      visual={visual}
                      fit="fill"
                      sizes="(min-width: 1280px) 26vw, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 85vw"
                      decorative
                      zoomOnHover
                    />
                  ) : null}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/5 to-navy-950/25"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-display text-xs font-semibold tabular-nums tracking-[0.12em] text-white backdrop-blur-md"
                  >
                    ({String(index + 1).padStart(2, "0")})
                  </span>
                  <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-gold-300 backdrop-blur-md">
                    <Icon name={sector.icon} size={22} />
                  </span>
                </div>

                {/* Informations */}
                <div className="relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <span aria-hidden="true" className="sc-spot" />
                  <h3 id={titleId} className="font-display text-xl font-semibold tracking-tight text-white">
                    {sector.label}
                  </h3>
                  {details ? (
                    <>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">{details.text}</p>
                      {details.tags.length > 0 ? (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {details.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ) : null}
                  <div className="mt-auto pt-5">
                    <Link
                      href={contact}
                      aria-describedby={titleId}
                      className="group/link inline-flex min-h-11 items-center gap-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-gold-300 transition-colors hover:text-gold-200"
                    >
                      {sectors.cta}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </SectorsTrack>
    </section>
  );
}
