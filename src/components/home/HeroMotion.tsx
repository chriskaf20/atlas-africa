"use client";

import { Pause, Play } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

/**
 * Mouvement du hero : un seul interrupteur « pause / lecture » pour tout ce
 * qui bouge seul dans le hero (mot tournant, vidéo de fond, animations CSS).
 *
 *  - <HeroMotion> rend la <section> et partage l'état « en pause » ;
 *  - <HeroMotionToggle> est le bouton (aria-pressed) ;
 *  - useHeroMotionPaused() permet aux composants enfants de s'y abonner.
 */

type HeroMotionState = { paused: boolean; toggle: () => void };

const HeroMotionContext = createContext<HeroMotionState>({ paused: false, toggle: () => {} });

export function useHeroMotionPaused(): boolean {
  return useContext(HeroMotionContext).paused;
}

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
};

export function HeroMotion({ children, className }: HeroMotionProps) {
  const ref = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);

  const toggle = useCallback(() => setPaused((value) => !value), []);
  const value = useMemo(() => ({ paused, toggle }), [paused, toggle]);

  // Vidéos : pause / reprise, et blocage des relances automatiques pendant la pause.
  useEffect(() => {
    pausedRef.current = paused;
    const section = ref.current;
    if (!section) return;
    for (const video of section.querySelectorAll("video")) {
      if (paused) video.pause();
      else if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) video.play().catch(() => {});
    }
  }, [paused]);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    // L'événement « play » ne remonte pas : on l'écoute en phase de capture.
    const onPlay = (event: Event) => {
      if (pausedRef.current && event.target instanceof HTMLVideoElement) event.target.pause();
    };
    section.addEventListener("play", onPlay, true);
    return () => section.removeEventListener("play", onPlay, true);
  }, []);

  return (
    <HeroMotionContext.Provider value={value}>
      <section ref={ref} className={cn("hh-root", className)} data-paused={paused ? "" : undefined}>
        {children}
      </section>
    </HeroMotionContext.Provider>
  );
}

type HeroMotionToggleProps = {
  playLabel: string;
  pauseLabel: string;
  className?: string;
};

/** Bouton pause / lecture. Absent si l'utilisateur a demandé moins d'animations. */
export function HeroMotionToggle({ playLabel, pauseLabel, className }: HeroMotionToggleProps) {
  const { paused, toggle } = useContext(HeroMotionContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setVisible(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      // Nom accessible fixe + aria-pressed : « en pause » est annoncé comme un état.
      aria-pressed={paused}
      aria-label={pauseLabel}
      title={paused ? playLabel : pauseLabel}
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 bg-navy-950/40 text-white backdrop-blur-md",
        "transition-colors duration-300 hover:border-gold-300 hover:text-gold-300",
        className,
      )}
    >
      {paused ? (
        <Play aria-hidden="true" size={16} strokeWidth={1.75} />
      ) : (
        <Pause aria-hidden="true" size={16} strokeWidth={1.75} />
      )}
    </button>
  );
}
