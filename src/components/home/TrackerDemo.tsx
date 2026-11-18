"use client";

import { ArrowRight, MapPin, Pause, Play, Search, Truck } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
} from "react";
import { Badge } from "@/components/ui/Badge";
import { Visual } from "@/components/ui/Visual";
import type { Content } from "@/content";
import { cn } from "@/lib/cn";
import type { ResolvedVisual } from "@/lib/visuals";

type Tracking = Content["home"]["tracking"];

type TrackerDemoProps = {
  tracking: Tracking;
  /** Visuel de chaque étape, dans le même ordre que `tracking.steps`. */
  visuals: ResolvedVisual[];
};

/** Durée d'affichage d'une étape, puis pause sur la dernière avant de reboucler. */
const STEP_MS = 2800;
const HOLD_MS = 1500;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Console de suivi (exemple de parcours d'un conteneur).
 *
 * Rendu serveur et sans JavaScript : l'étape 1 est affichée en entier et la
 * liste ordonnée des cinq étapes (libellé, lieu, texte) est dans la page.
 *
 * Après chargement, la démonstration avance seule lorsque la console est
 * visible (≥ 40 %), et s'interrompt :
 *  - au survol ou au focus de la zone de démonstration ;
 *  - lorsque l'onglet est masqué ;
 *  - dès que l'utilisateur choisit une étape (il garde la main jusqu'à ce
 *    qu'il relance la lecture) ;
 *  - toujours, si l'utilisateur a demandé moins d'animations.
 * Le bouton lecture / pause est placé hors de la zone qui suspend la lecture,
 * pour que son survol ou son focus ne la bloque pas.
 */
export function TrackerDemo({ tracking, visuals }: TrackerDemoProps) {
  const { steps } = tracking;
  const count = steps.length;
  const last = Math.max(0, count - 1);

  const [active, setActive] = useState(0);
  /** Intention de lecture (bouton). Désactivée au rendu serveur. */
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Préférence « moins d'animations » : pas de lecture automatique.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPlaying(!query.matches);
    const onChange = () => {
      if (query.matches) setPlaying(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // La console est-elle suffisamment visible ?
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Onglet masqué : on suspend.
  useEffect(() => {
    const onVisibility = () => setPageHidden(document.visibilityState === "hidden");
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const running = playing && inView && !hovered && !focused && !pageHidden && count > 1;
  const delay = active === last ? STEP_MS + HOLD_MS : STEP_MS;

  // Avance d'une étape ; le minuteur repart à chaque changement d'étape.
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive((index) => (index >= last ? 0 : index + 1)), delay);
    return () => window.clearTimeout(timer);
  }, [running, active, delay, last]);

  /** L'utilisateur choisit une étape : il prend la main. */
  const goTo = (index: number) => {
    setActive(index);
    setPlaying(false);
  };

  const onPointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") setHovered(true);
  };
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
  };

  const progress = last === 0 ? 1 : active / last;
  const percent = Math.round(progress * 100);
  const current = steps[active];
  const barStyle: CSSProperties = { transform: `scaleX(${progress})` };

  return (
    <div
      ref={rootRef}
      data-running={running ? "true" : "false"}
      className="st-console relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_50px_120px_-50px_rgb(0_0_0/0.8)] backdrop-blur-md"
    >
      {/* Halo doré et liseré supérieur (décor). */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
      />

      {/* ───── Barre supérieure : référence (exemple), résumé, lecture ───── */}
      <div className="border-b border-white/10 p-4 sm:p-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex min-h-12 w-full min-w-0 items-center gap-3 rounded-full border border-white/15 bg-navy-950/70 px-4 sm:w-auto sm:max-w-md sm:flex-1">
            <Search aria-hidden="true" size={16} strokeWidth={1.75} className="shrink-0 text-gold-300" />
            <span className="shrink-0 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              {tracking.referenceLabel}
            </span>
            <span className="truncate font-mono text-sm tracking-[0.08em] text-white">{tracking.reference}</span>
            <span aria-hidden="true" className="st-caret -ml-1.5 h-4 w-px shrink-0 bg-gold-300" />
          </div>
          <Badge tone="dark">{tracking.exampleBadge}</Badge>

          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? tracking.pause : tracking.play}
            className="relative ml-auto inline-flex min-h-12 shrink-0 items-center gap-2.5 overflow-hidden rounded-full border border-white/20 px-4 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-gold-300 hover:text-gold-300 sm:px-5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-400 text-navy-950">
              {playing ? (
                <Pause aria-hidden="true" size={13} strokeWidth={2.25} />
              ) : (
                <Play aria-hidden="true" size={13} strokeWidth={2.25} className="translate-x-px" />
              )}
            </span>
            <span className="hidden sm:inline">{playing ? tracking.pause : tracking.play}</span>
          </button>
        </div>

        <dl className="mt-5 grid gap-4 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] sm:gap-6">
          <div className="min-w-0">
            <dt className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/60">
              {tracking.cargoLabel}
            </dt>
            <dd className="mt-1.5 text-[0.9375rem] text-white">{tracking.cargo}</dd>
          </div>
          <div className="min-w-0">
            <dt className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/60">
              {tracking.originLabel}
            </dt>
            <dd className="mt-1.5 flex items-center justify-between gap-4 text-[0.9375rem] text-white">
              {tracking.origin}
              <ArrowRight
                aria-hidden="true"
                size={18}
                strokeWidth={1.5}
                className="hidden shrink-0 text-gold-400 sm:block"
              />
            </dd>
          </div>
          <div className="min-w-0">
            <dt className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-white/60">
              {tracking.destinationLabel}
            </dt>
            <dd className="mt-1.5 text-[0.9375rem] text-white">{tracking.destination}</dd>
          </div>
        </dl>
      </div>

      {/* ───── Zone de démonstration (survol / focus = pause) ───── */}
      <div
        onPointerEnter={onPointerEnter}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
        className="grid gap-8 p-4 sm:p-6 lg:grid-cols-12 lg:gap-10 lg:p-10"
      >
        {/* Étape en cours */}
        <div className="flex flex-col lg:col-span-5">
          {/* Pendant la lecture automatique, l'annonce est coupée (motif « carrousel » de l'APG) :
              elle reprend dès que la lecture est suspendue ou que l'utilisateur choisit une étape. */}
          <div aria-live={running ? "off" : "polite"} aria-atomic="true">
            <p className="flex items-center gap-3 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="st-ping absolute inset-0 rounded-full bg-gold-400" />
                <span className="relative h-2 w-2 rounded-full bg-gold-400" />
              </span>
              {tracking.statusLabel}
              <span className="tabular-nums text-white/60">
                {pad(active + 1)} / {pad(count)}
              </span>
            </p>
            <div key={active} className="st-in">
              <p className="mt-5 font-display text-[2.375rem] font-light leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[3.5rem]">
                {current.label}
              </p>
              <p className="mt-4 flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-gold-300">
                <MapPin aria-hidden="true" size={16} strokeWidth={1.75} className="shrink-0" />
                {current.place}
              </p>
              {/* Sur mobile, le texte est lu dans la frise verticale ci-dessous. */}
              <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-white/75 max-md:hidden">
                {current.text}
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-auto lg:pt-10">
            <p className="flex items-baseline justify-between gap-4">
              <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                {tracking.progressLabel}
              </span>
              <span className="font-display text-2xl font-light tabular-nums tracking-tight text-white">
                {percent}
                <span className="text-gold-300">%</span>
              </span>
            </p>
            <div aria-hidden="true" className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
              <div
                style={barStyle}
                className="h-full origin-left rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out"
              />
            </div>
          </div>
        </div>

        {/* Visuel de l'étape (fondu enchaîné) */}
        <div className="lg:col-span-7">
          <div className="group relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
            {visuals.map((visual, index) => {
              const isActive = index === active;
              return (
                <div
                  key={visual.id}
                  aria-hidden={isActive ? undefined : true}
                  className={cn(
                    "absolute inset-0 motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
                    isActive ? "scale-100 opacity-100" : "scale-[1.03] opacity-0",
                  )}
                >
                  <Visual
                    visual={visual}
                    fit="fill"
                    sizes="(min-width: 1280px) 40rem, (min-width: 1024px) 55vw, 100vw"
                    decorative={!isActive}
                    zoomOnHover
                  />
                </div>
              );
            })}

            {/* Décor : dégradé, ligne de balayage, coins de visée. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20"
            />
            <span aria-hidden="true" className="st-scan pointer-events-none absolute inset-0" />
            <span aria-hidden="true" className="st-corners pointer-events-none absolute inset-3 sm:inset-4" />

            {/* Puce « 0i / 05 » */}
            <span
              aria-hidden="true"
              className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-display text-xs font-semibold tabular-nums tracking-[0.14em] text-white backdrop-blur-md sm:left-5 sm:top-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {pad(active + 1)} / {pad(count)}
            </span>

            {/* Lieu de l'étape (déjà annoncé à côté). */}
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-2 truncate rounded-full border border-white/15 bg-navy-950/50 px-3 py-1.5 text-xs text-white backdrop-blur-md sm:bottom-5 sm:left-5"
            >
              <MapPin size={13} strokeWidth={1.75} className="shrink-0 text-gold-300" />
              <span className="truncate">{current.place}</span>
            </span>

            {/* Temps restant avant l'étape suivante (lecture automatique uniquement). */}
            {running ? (
              <span
                key={active}
                aria-hidden="true"
                style={{ "--st-dur": `${delay}ms` } as CSSProperties}
                className="st-tick absolute inset-x-0 bottom-0 h-0.5 bg-gold-400"
              />
            ) : null}
          </div>
        </div>

        {/* ───── Frise du parcours ───── */}
        <div className="relative lg:col-span-12">
          {/* Grand écran : ligne horizontale, segment parcouru en or, camion qui glisse. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[10%] top-0 hidden h-12 md:block">
            <div
              style={{ transform: `translateX(${progress * 100}%)` }}
              className="absolute inset-0 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            >
              <span className="absolute bottom-2 left-0 flex -translate-x-1/2 flex-col items-center">
                <span className="grid h-8 w-11 place-items-center rounded-lg bg-gold-400 text-navy-950 shadow-[0_10px_24px_-8px_rgb(201_161_59/0.8)]">
                  <Truck size={17} strokeWidth={2} />
                </span>
                <span className="h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-gold-400" />
              </span>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[10%] top-[calc(3rem+21px)] hidden h-0.5 rounded-full bg-white/10 md:block"
          >
            <div
              style={barStyle}
              className="h-full origin-left rounded-full bg-gradient-to-r from-gold-600 to-gold-300 shadow-[0_0_12px_rgb(214_180_92/0.6)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.2,0.7,0.2,1)]"
            />
          </div>

          <ol aria-label={tracking.stepsLabel} className="relative grid md:grid-cols-5 md:pt-12">
            {steps.map((step, index) => {
              const isActive = index === active;
              const done = index < active;
              return (
                <li key={step.label} className="relative">
                  {/* Mobile : segment vertical vers l'étape suivante. */}
                  {index < last ? (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-[21px] top-11 w-0.5 overflow-hidden bg-white/10 md:hidden"
                    >
                      <span
                        className={cn(
                          "block h-full origin-top bg-gold-400 motion-safe:transition-transform motion-safe:duration-500",
                          done ? "scale-y-100" : "scale-y-0",
                        )}
                      />
                    </span>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`${step.label}, ${step.place}`}
                    className="group/node flex w-full items-start gap-4 rounded-2xl text-left transition-colors duration-300 md:flex-col md:items-center md:gap-3 md:px-2 md:pb-2 md:text-center md:hover:bg-white/[0.04]"
                  >
                    <span aria-hidden="true" className="relative grid h-11 w-11 shrink-0 place-items-center">
                      {isActive ? (
                        <span className="st-ping absolute inset-1.5 rounded-full border border-gold-400" />
                      ) : null}
                      <span
                        className={cn(
                          "grid place-items-center rounded-full border motion-safe:transition-all motion-safe:duration-500",
                          isActive
                            ? "h-8 w-8 border-gold-400 bg-navy-950 shadow-[0_0_0_6px_rgb(214_180_92/0.12)]"
                            : done
                              ? "h-4 w-4 border-gold-400 bg-gold-400"
                              : "h-4 w-4 border-white/30 bg-navy-950 group-hover/node:border-gold-300",
                        )}
                      >
                        {isActive ? <span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> : null}
                      </span>
                    </span>
                    <span className="min-w-0 pt-1 md:pt-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "block font-display text-[0.6875rem] font-semibold tabular-nums tracking-[0.16em]",
                          isActive || done ? "text-gold-300" : "text-white/60",
                        )}
                      >
                        {pad(index + 1)}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block font-display text-sm font-semibold leading-snug tracking-tight transition-colors duration-300",
                          isActive ? "text-white" : "text-white/80 group-hover/node:text-white",
                        )}
                      >
                        {step.label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-white/60">{step.place}</span>
                    </span>
                  </button>

                  {/* Texte de l'étape : visible dans la frise mobile, lu par les lecteurs d'écran sur grand écran. */}
                  <p
                    className={cn(
                      "pb-6 pl-[3.75rem] pt-2 text-sm leading-relaxed transition-colors duration-300 md:sr-only",
                      isActive ? "text-white/80" : "text-white/60",
                    )}
                  >
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
