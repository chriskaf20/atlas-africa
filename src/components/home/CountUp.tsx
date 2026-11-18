"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type CountUpProps = {
  value: number;
  suffix?: string;
  /** Durée du comptage, en millisecondes. */
  duration?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Compteur animé. La valeur finale est rendue côté serveur (visible sans
 * JavaScript) ; après chargement, le compteur repart de 0 et monte jusqu'à
 * sa valeur quand il entre dans l'écran. Les lecteurs d'écran ne lisent que
 * la valeur finale. Aucun comptage si l'utilisateur préfère moins d'animations.
 */
export function CountUp({ value, suffix = "", duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);

  // Avant le premier affichage : remise à zéro (évite le saut valeur → 0).
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    setDisplay(0);
    setArmed(true);
  }, [value]);

  useEffect(() => {
    const element = ref.current;
    if (!armed || !element) return;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(easeOutCubic(progress) * value));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.5 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [armed, value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}
