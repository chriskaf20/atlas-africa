"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { useHeroMotionPaused } from "./HeroMotion";

type RotatingWordProps = {
  words: string[];
  /** Durée d'affichage de chaque mot, en millisecondes. */
  interval?: number;
  className?: string;
};

/**
 * Mot qui change tour à tour (fin du titre du hero).
 *
 * Tous les mots sont empilés dans la même cellule de grille : la place du
 * plus long est réservée, le titre ne bouge donc jamais. Le premier mot est
 * rendu côté serveur ; la rotation démarre après chargement, s'arrête quand
 * l'onglet est masqué, au survol, ou via le bouton pause du hero, et ne
 * démarre pas si l'utilisateur a demandé moins d'animations.
 *
 * Purement visuel : le titre complet est lu par ailleurs (texte masqué).
 */
export function RotatingWord({ words, interval = 2600, className }: RotatingWordProps) {
  // previous = null tant qu'aucun changement n'a eu lieu.
  const [{ index, previous }, setTurn] = useState<{ index: number; previous: number | null }>({
    index: 0,
    previous: null,
  });
  const [hovered, setHovered] = useState(false);
  const paused = useHeroMotionPaused();
  const count = words.length;

  useEffect(() => {
    if (count < 2 || paused || hovered) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const start = () => {
      if (timer !== undefined) return;
      timer = window.setInterval(() => {
        setTurn((turn) => ({ index: (turn.index + 1) % count, previous: turn.index }));
      }, interval);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [count, interval, paused, hovered]);

  return (
    <span
      className={cn("hh-rotator", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {words.map((word, i) => {
        // « static » : mot affiché sans animation (rendu initial).
        const state = i === index ? (previous === null ? "static" : "in") : i === previous ? "out" : "idle";
        return (
          <span key={`${word}-${i}`} data-state={state}>
            {word}
          </span>
        );
      })}
    </span>
  );
}
