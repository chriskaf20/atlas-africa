"use client";

import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Visual } from "@/components/ui/Visual";
import { cn } from "@/lib/cn";
import type { ResolvedVisual } from "@/lib/visuals";

export type StoryStep = {
  title: string;
  text: string;
  items: string[];
  /** Pôle concerné (null s'il n'est pas trouvé dans le contenu). */
  pole: { number: string; name: string; icon: string } | null;
  visual: ResolvedVisual | null;
};

type StoryStepsProps = {
  steps: StoryStep[];
  /** « Étape » */
  stepLabel: string;
  /** « Pôle » */
  poleLabel: string;
  /** Nom de la liste des étapes, pour les lecteurs d'écran. */
  listLabel: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Récit en étapes avec visuel fixé (grand écran).
 *
 * Rendu serveur et sans JavaScript : toutes les étapes sont pleinement
 * lisibles, le visuel fixé montre la première. Après chargement, l'étape
 * qui traverse le milieu de l'écran devient active : le visuel change en
 * fondu et les autres étapes passent en retrait (grand écran uniquement).
 * Le visuel fixé reprend des informations déjà présentes dans la liste :
 * il est masqué aux lecteurs d'écran.
 */
export function StorySteps({ steps, stepLabel, poleLabel, listLabel }: StoryStepsProps) {
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const items = itemsRef.current.filter((item): item is HTMLLIElement => item !== null);

    // Bande étroite au milieu de l'écran : l'étape qui la traverse est active.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isFinite(index)) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    setEnhanced(true);
    return () => observer.disconnect();
  }, []);

  const total = pad(steps.length);
  const current = steps[active];

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-16">
      {/* ───── Visuel fixé (grand écran) ───── */}
      <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 h-[min(36rem,calc(100vh-9rem))] min-h-[26rem] overflow-hidden rounded-3xl bg-navy-950 shadow-[0_40px_80px_-40px_rgb(11_31_75/0.55)]">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "absolute inset-0 motion-safe:transition-[opacity,transform] motion-safe:duration-1000 motion-safe:ease-out",
                index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
              )}
            >
              {step.visual ? (
                <Visual visual={step.visual} fit="fill" sizes="(min-width: 1280px) 30rem, 40vw" decorative />
              ) : null}
            </div>
          ))}

          {/* Dégradé pour la lisibilité des cartes posées sur l'image. */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/30" />

          {/* Compteur d'étape */}
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {stepLabel}
            <span className="tabular-nums">
              <span key={active} className="is-fade-up inline-block text-gold-300">
                {pad(active + 1)}
              </span>{" "}
              / {total}
            </span>
          </div>

          {/* Progression verticale */}
          <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-2">
            {steps.map((step, index) => (
              <span
                key={step.title}
                className={cn(
                  "w-1 rounded-full motion-safe:transition-all motion-safe:duration-500",
                  index === active ? "h-12 bg-gold-400" : index < active ? "h-6 bg-white/60" : "h-6 bg-white/25",
                )}
              />
            ))}
          </div>

          {/* Carte vitrée : pôle et étape en cours */}
          {current ? (
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md">
              <div key={active} className="is-fade-up">
                {current.pole ? (
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold-400/50 bg-gold-400/10 text-gold-300">
                      <Icon name={current.pole.icon} size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold-300">
                        {poleLabel} {current.pole.number}
                      </span>
                      <span className="block truncate font-display text-base font-semibold tracking-tight">
                        {current.pole.name}
                      </span>
                    </span>
                  </div>
                ) : null}
                <p className="mt-3 font-display text-xl font-light leading-snug tracking-[-0.01em] text-white/90">
                  {current.title}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* ───── Les étapes ───── */}
      <ol aria-label={listLabel} className="space-y-14 sm:space-y-16 lg:col-span-7 lg:space-y-0">
        {steps.map((step, index) => {
          const isActive = index === active;
          const dimmed = enhanced && !isActive;
          return (
            <li
              key={step.title}
              ref={(element) => {
                itemsRef.current[index] = element;
              }}
              data-index={index}
              className="group/step relative lg:flex lg:min-h-[11rem] lg:items-center lg:py-4"
            >
              {/* Rail de progression (grand écran) */}
              <span aria-hidden="true" className="absolute inset-y-0 left-0 hidden w-px bg-line lg:block" />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-y-0 left-0 hidden w-px origin-top bg-gold-500 lg:block motion-safe:transition-transform motion-safe:duration-700",
                  isActive ? "scale-y-100" : "scale-y-0",
                )}
              />

              <div
                className={cn(
                  "w-full lg:py-12 lg:pl-12 motion-safe:transition-opacity motion-safe:duration-500",
                  dimmed && "lg:opacity-60 lg:group-hover/step:opacity-100 lg:group-focus-within/step:opacity-100",
                )}
              >
                {/* Visuel de l'étape (mobile et tablette) */}
                {step.visual ? (
                  <div className="relative mb-7 aspect-[16/10] overflow-hidden rounded-2xl lg:hidden">
                    <Visual visual={step.visual} fit="fill" sizes="(min-width: 640px) 90vw, 100vw" decorative />
                  </div>
                ) : null}

                <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
                    {stepLabel} <span className="tabular-nums">{pad(index + 1)}</span>
                  </span>
                  {step.pole ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-mist px-3 py-1.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-navy-900">
                      <Icon name={step.pole.icon} size={14} strokeWidth={1.75} />
                      {poleLabel} {step.pole.number} · {step.pole.name}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-navy-900 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-muted">{step.text}</p>

                {step.items.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-medium text-navy-900 shadow-[0_1px_2px_rgb(11_31_75/0.05)]"
                      >
                        <Check aria-hidden="true" size={15} strokeWidth={2.25} className="shrink-0 text-gold-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
