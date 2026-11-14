"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Apparition douce d'un bloc lorsqu'il entre dans l'écran.
 *
 * Le contenu est rendu visible par défaut : si JavaScript ne se charge pas,
 * rien n'est masqué. Après chargement, seuls les blocs situés sous l'écran
 * sont masqués (hors champ, donc sans effet visible), puis révélés au
 * défilement. Les blocs déjà affichés ne bougent pas.
 */

type OnEntry = (entry: IntersectionObserverEntry) => void;

let sharedObserver: IntersectionObserver | null = null;
const listeners = new WeakMap<Element, OnEntry>();

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) listeners.get(entry.target)?.(entry);
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
  }
  return sharedObserver;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Décalage de l'animation en millisecondes (effet de cascade). */
  delay?: number;
  as?: "div" | "li" | "article" | "section";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = getObserver();
    const stop = () => {
      observer.unobserve(element);
      listeners.delete(element);
    };

    listeners.set(element, (entry) => {
      const state = element.dataset.reveal;

      if (!state) {
        // Premier relevé : le bloc est-il déjà à l'écran (ou au-dessus) ?
        const alreadySeen = entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight;
        if (alreadySeen) stop();
        else element.dataset.reveal = "hidden";
        return;
      }

      if (state === "shown") {
        stop();
      } else if (entry.isIntersecting) {
        element.dataset.reveal = "shown";
        stop();
      }
    });

    observer.observe(element);
    return stop;
  }, []);

  const Tag = as as "div";
  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
