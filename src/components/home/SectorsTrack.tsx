"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectorsTrackProps = {
  /** En-tête de la section (intitulé, titre, introduction), rendu côté serveur. */
  header: ReactNode;
  /** Les cartes : des <li>, rendues côté serveur. */
  children: ReactNode;
  listLabel: string;
  previousLabel: string;
  nextLabel: string;
};

type Edges = { start: boolean; end: boolean };

/**
 * Piste horizontale du carrousel des secteurs.
 *
 * Sans JavaScript, la piste se fait défiler au doigt, au pavé tactile ou au
 * clavier (le focus d'un lien fait défiler sa carte). Après chargement :
 * flèches précédent / suivant (inactives aux extrémités), filet de
 * progression et halo qui suit la souris sur les cartes.
 */
export function SectorsTrack({ header, children, listLabel, previousLabel, nextLabel }: SectorsTrackProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [edges, setEdges] = useState<Edges>({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = track.scrollWidth - track.clientWidth;
      const left = Math.abs(track.scrollLeft);
      const start = left <= 2;
      const end = left >= max - 2;
      setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));

      // Part de la piste déjà vue : de la première « page » jusqu'à la fin.
      const seen = track.scrollWidth > 0 ? (left + track.clientWidth) / track.scrollWidth : 1;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(1, seen)})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    track.addEventListener("scroll", schedule, { passive: true });
    const resize = "ResizeObserver" in window ? new ResizeObserver(schedule) : null;
    resize?.observe(track);
    if (!resize) window.addEventListener("resize", schedule, { passive: true });

    update();
    setEnhanced(true);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", schedule);
      resize?.disconnect();
      if (!resize) window.removeEventListener("resize", schedule);
    };
  }, []);

  /** Fait défiler la piste d'une carte (largeur d'une carte + espacement). */
  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(":scope > li");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: direction * step, behavior: reduce ? "auto" : "smooth" });
  }, []);

  /** Halo qui suit la souris sur le panneau d'informations de la carte survolée. */
  const onPointerMove = useCallback((event: PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse") return;
    const spot = (event.target as Element).closest(".sc-card")?.querySelector<HTMLElement>(".sc-spot");
    const panel = spot?.parentElement;
    if (!spot || !panel) return;
    const rect = panel.getBoundingClientRect();
    spot.style.setProperty("--sc-x", `${event.clientX - rect.left}px`);
    spot.style.setProperty("--sc-y", `${event.clientY - rect.top}px`);
  }, []);

  const arrowClass = (disabled: boolean) =>
    cn(
      "grid h-12 w-12 place-items-center rounded-full border transition-colors duration-300",
      disabled
        ? "cursor-not-allowed border-white/10 text-white/35"
        : "border-white/25 text-white hover:border-gold-300 hover:bg-gold-400 hover:text-navy-950",
    );

  return (
    <>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {header}
          {/* Masquées tant que le script n'est pas chargé (sans effet sans JavaScript). */}
          <div className={cn("flex shrink-0 gap-3", !enhanced && "invisible")}>
            <button
              type="button"
              aria-label={previousLabel}
              aria-disabled={edges.start}
              onClick={() => {
                if (!edges.start) scrollByCard(-1);
              }}
              className={arrowClass(edges.start)}
            >
              <ArrowLeft aria-hidden="true" size={20} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              aria-disabled={edges.end}
              onClick={() => {
                if (!edges.end) scrollByCard(1);
              }}
              className={arrowClass(edges.end)}
            >
              <ArrowRight aria-hidden="true" size={20} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </Container>

      {/* Piste : alignée à gauche sur le contenu, elle déborde jusqu'au bord droit de l'écran. */}
      <ul
        ref={trackRef}
        aria-label={listLabel}
        onPointerMove={onPointerMove}
        className={cn(
          "no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-2 sm:gap-6 lg:mt-16",
          "[--sc-inset:max(1.25rem,calc((100%_-_76rem)/2_+_1.25rem))] sm:[--sc-inset:max(2rem,calc((100%_-_76rem)/2_+_2rem))]",
          "[padding-inline:var(--sc-inset)] [scroll-padding-inline:var(--sc-inset)]",
        )}
      >
        {children}
      </ul>

      {/* Filet de progression */}
      <Container>
        <div aria-hidden="true" className={cn("mt-10 h-px overflow-hidden bg-white/15", !enhanced && "invisible")}>
          <span
            ref={progressRef}
            className="block h-full origin-left bg-gradient-to-r from-gold-500 to-gold-300 motion-safe:transition-transform motion-safe:duration-300"
          />
        </div>
      </Container>
    </>
  );
}
