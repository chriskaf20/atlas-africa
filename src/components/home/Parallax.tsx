"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ParallaxProps = {
  children?: ReactNode;
  /** Déplacement maximal, en pixels (négatif : sens inverse). */
  strength?: number;
  className?: string;
};

/**
 * Léger décalage vertical au défilement (grand écran uniquement).
 * Désactivé sur mobile et si l'utilisateur préfère moins d'animations.
 */
export function Parallax({ children, strength = 32, className }: ParallaxProps) {
  // Le cadre extérieur est mesuré, le bloc intérieur est déplacé (mesure stable).
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const inner = innerRef.current;
    if (!element || !inner) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduce.matches || !wide.matches) {
        inner.style.transform = "";
        return;
      }
      const rect = element.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 : bloc sous l'écran · 0 : centré · 1 : au-dessus.
      const ratio = ((vh / 2) - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
      const clamped = Math.min(1, Math.max(-1, ratio));
      inner.style.transform = `translate3d(0, ${(-clamped * strength).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    reduce.addEventListener("change", onScroll);
    wide.addEventListener("change", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", onScroll);
      wide.removeEventListener("change", onScroll);
      inner.style.transform = "";
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      <div ref={innerRef} className="h-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
