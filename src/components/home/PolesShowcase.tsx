"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { Visual } from "@/components/ui/Visual";
import { cn } from "@/lib/cn";
import type { ResolvedVisual } from "@/lib/visuals";

export type PoleShowcaseItem = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  summary: string;
  services: string[];
  href: string;
  visual: ResolvedVisual | null;
};

type PolesShowcaseProps = {
  poles: PoleShowcaseItem[];
  poleLabel: string;
  discoverLabel: string;
};

/**
 * Les quatre pôles, présentés différemment selon l'écran :
 *  - grand écran : quatre panneaux côte à côte ; celui survolé (ou ciblé au
 *    clavier) s'élargit et révèle son détail ;
 *  - mobile et tablette : un accordéon, un pôle ouvert à la fois.
 * Sans JavaScript, le premier pôle est ouvert et tous les liens fonctionnent.
 */
export function PolesShowcase({ poles, poleLabel, discoverLabel }: PolesShowcaseProps) {
  const [active, setActive] = useState(0);
  const uid = useId();

  return (
    <>
      {/* ───── Grand écran : panneaux extensibles ───── */}
      <ul className="hidden h-[34rem] gap-3 lg:flex xl:h-[36rem]">
        {poles.map((pole, index) => {
          const open = index === active;
          return (
            <li
              key={pole.id}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={cn(
                "group relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-navy-900",
                "transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none",
                open ? "grow-[3.2]" : "grow",
              )}
              style={{ flexBasis: 0 }}
            >
              {pole.visual ? (
                <Visual
                  visual={pole.visual}
                  fit="fill"
                  decorative
                  sizes="(min-width: 1024px) 50vw, 25vw"
                  mediaClassName={cn("transition-transform duration-[1200ms] ease-out", open ? "scale-100" : "scale-110")}
                />
              ) : null}
              <div
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 transition-colors duration-700",
                  open
                    ? "bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10"
                    : "bg-navy-950/70",
                )}
              />

              {/* Numéro */}
              <span className="absolute left-6 top-5 font-display text-5xl font-light leading-none text-white/90 xl:text-6xl">
                {pole.number}
              </span>

              {/* Nom vertical quand le panneau est replié */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-8 left-6 origin-bottom-left -rotate-90 translate-x-6 whitespace-nowrap font-display text-lg font-semibold text-white transition-opacity duration-300",
                  open ? "opacity-0" : "opacity-100 delay-200",
                )}
              >
                {pole.name}
              </span>

              {/* Détail quand le panneau est ouvert */}
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 p-7 transition-all duration-500 xl:p-9",
                  open ? "translate-y-0 opacity-100 delay-200" : "pointer-events-none translate-y-6 opacity-0",
                )}
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                  {poleLabel} {pole.number}
                </p>
                <h3 className="mt-3 max-w-md font-display text-2xl font-semibold leading-tight text-white xl:text-3xl">
                  {pole.name}
                </h3>
                <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-white/80">{pole.summary}</p>
                <ul className="mt-5 flex max-w-lg flex-wrap gap-2">
                  {pole.services.slice(0, 4).map((service) => (
                    <li key={service} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pole.href}
                  tabIndex={open ? 0 : -1}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-400 px-6 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-950 transition-colors hover:bg-gold-300"
                >
                  {discoverLabel}
                  <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
                </Link>
              </div>

              {/* Panneau replié : tout le panneau mène au pôle (clavier compris). */}
              {!open ? (
                <Link href={pole.href} className="absolute inset-0" aria-label={pole.name} />
              ) : null}
            </li>
          );
        })}
      </ul>

      {/* ───── Mobile et tablette : accordéon ───── */}
      <ul className="space-y-3 lg:hidden">
        {poles.map((pole, index) => {
          const open = index === active;
          const panelId = `${uid}-pole-${index}`;
          return (
            <li key={pole.id} className={cn("overflow-hidden rounded-2xl border transition-colors duration-300", open ? "border-gold-500/60 bg-white" : "border-line bg-white")}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setActive(open ? -1 : index)}
                  className="flex min-h-16 w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className={cn("font-display text-2xl font-light tabular-nums transition-colors", open ? "text-gold-600" : "text-navy-900/40")}>
                    {pole.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-base font-semibold leading-snug text-navy-900">{pole.name}</span>
                    <span className="mt-0.5 block text-sm text-muted">{pole.tagline}</span>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    size={20}
                    className={cn("shrink-0 text-navy-900 transition-transform duration-300", open && "rotate-180")}
                  />
                </button>
              </h3>
              {/* Hauteur animée : grille 0fr → 1fr */}
              <div
                id={panelId}
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] motion-reduce:transition-none",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden" inert={!open}>
                  <div className="px-5 pb-6">
                    {pole.visual ? (
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                        <Visual visual={pole.visual} fit="fill" decorative sizes="100vw" />
                      </div>
                    ) : null}
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{pole.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {pole.services.slice(0, 4).map((service) => (
                        <li key={service} className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-navy-900">
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={pole.href}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
                    >
                      {discoverLabel}
                      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
