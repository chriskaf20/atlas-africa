"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

export type PoleTab = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  badge: string | null;
};

type PolesTabsProps = {
  /** Nom accessible de la liste d'onglets. */
  label: string;
  tabs: PoleTab[];
  /** Contenu de chaque panneau (rendu côté serveur), dans l'ordre des onglets. */
  panels: ReactNode[];
};

/**
 * Explorateur des pôles — motif ARIA « onglets ».
 *
 * Grand écran : liste verticale à gauche, panneau actif à droite.
 * Téléphone et tablette : rangée de pastilles qui défile horizontalement
 * au-dessus du panneau. Les quatre panneaux restent dans la page (attribut
 * `hidden` sur les inactifs) : leur contenu reste indexable.
 * Clavier : flèches, Début et Fin ; un seul onglet focalisable (tabindex mobile).
 */
export function PolesTabs({ label, tabs, panels }: PolesTabsProps) {
  const [active, setActive] = useState(0);
  // Animation du panneau uniquement après un changement voulu par l'utilisateur.
  const [animated, setAnimated] = useState(false);
  const [vertical, setVertical] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  // Orientation de la liste selon la largeur d'écran (annoncée aux lecteurs d'écran).
  useEffect(() => {
    const query = window.matchMedia("(min-width: 64rem)");
    const update = () => setVertical(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  /** Ramène l'onglet choisi au centre de la rangée horizontale (sans faire défiler la page). */
  const centerTab = (index: number) => {
    const track = trackRef.current;
    const tab = tabRefs.current[index];
    if (!track || !tab || track.scrollWidth <= track.clientWidth) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: tab.offsetLeft - (track.clientWidth - tab.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const select = (index: number, focus = false) => {
    if (index !== active) setAnimated(true);
    setActive(index);
    if (focus) tabRefs.current[index]?.focus({ preventScroll: true });
    centerTab(index);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = tabs.length - 1;
    let next: number | null = null;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = active === last ? 0 : active + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = active === 0 ? last : active - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
    }
    if (next === null) return;
    event.preventDefault();
    select(next, true);
  };

  return (
    <div className="pe-tabs grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12" data-animated={animated || undefined}>
      {/* Liste des onglets */}
      <div className="min-w-0 lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <div
            ref={trackRef}
            role="tablist"
            aria-label={label}
            aria-orientation={vertical ? "vertical" : "horizontal"}
            onKeyDown={onKeyDown}
            className={cn(
              "no-scrollbar relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-2 overflow-x-auto px-5 py-1 sm:-mx-8 sm:scroll-px-8 sm:px-8",
              "lg:mx-0 lg:snap-none lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:py-0",
            )}
          >
            {tabs.map((tab, index) => {
              const selected = index === active;
              return (
                <button
                  key={tab.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`pe-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`pe-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(index)}
                  className={cn(
                    "group relative flex min-h-12 shrink-0 snap-start items-center gap-3 rounded-full border px-5 text-left transition-colors duration-300",
                    "lg:w-full lg:items-start lg:gap-5 lg:rounded-2xl lg:px-6 lg:py-5",
                    selected
                      ? "border-navy-900 bg-navy-900 text-white shadow-[0_18px_40px_-22px_rgb(11_31_75/0.7)]"
                      : "border-line bg-white text-navy-900 hover:border-navy-900/35 lg:border-transparent lg:bg-transparent lg:hover:border-line lg:hover:bg-mist",
                  )}
                >
                  {/* Barre de progression dorée (grand écran) */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-5 left-0 top-5 hidden w-[3px] origin-top rounded-full bg-gold-400 transition-transform duration-500 ease-out lg:block",
                      selected ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                  <span
                    className={cn(
                      "font-display text-sm font-semibold tabular-nums lg:text-5xl lg:font-light lg:leading-[0.9] lg:tracking-[-0.03em]",
                      selected ? "text-gold-300" : "text-gold-700",
                    )}
                  >
                    {tab.number}
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="whitespace-nowrap font-display text-sm font-semibold tracking-tight lg:whitespace-normal lg:text-lg">
                        {tab.name}
                      </span>
                      {tab.badge ? (
                        <Badge tone={selected ? "dark" : "gold"} className="hidden lg:inline-flex">
                          {tab.badge}
                        </Badge>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "mt-1 hidden text-sm leading-snug lg:block",
                        selected ? "text-white/75" : "text-muted",
                      )}
                    >
                      {tab.tagline}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Panneaux */}
      <div className="min-w-0 lg:col-span-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`pe-panel-${tab.id}`}
            aria-labelledby={`pe-tab-${tab.id}`}
            tabIndex={0}
            hidden={index !== active}
            className="pe-panel rounded-3xl focus-visible:outline-offset-4"
          >
            {panels[index]}
          </div>
        ))}
      </div>
    </div>
  );
}
