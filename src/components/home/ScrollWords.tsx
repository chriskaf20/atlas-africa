"use client";

import { Fragment, useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Segment = { text: string; accent?: boolean };

type ScrollWordsProps = {
  segments: Segment[];
  className?: string;
};

/**
 * Paragraphe dont les mots s'allument au fil du défilement.
 *
 * Rendu serveur, sans JavaScript ou avec moins d'animations : tout le texte
 * est allumé. Après chargement, le paragraphe reçoit `data-sw` (les mots
 * passent en retrait) et chaque mot reçoit `data-lit` selon la progression
 * du paragraphe dans l'écran. Les mots restent du texte normal dans un <p> :
 * les lecteurs d'écran lisent la phrase d'un seul tenant.
 */
export function ScrollWords({ segments, className }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = ref.current;
    if (!paragraph) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const words = Array.from(paragraph.querySelectorAll<HTMLElement>("[data-word]"));
    let lit = -1;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = paragraph.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 : le haut du paragraphe atteint 90 % de l'écran · 1 : son bas atteint 50 %.
      const progress = Math.min(1, Math.max(0, (vh * 0.9 - rect.top) / (vh * 0.4 + rect.height)));
      const next = Math.round(progress * words.length);
      if (next === lit) return;
      lit = next;
      words.forEach((word, i) => {
        if (i < next) word.setAttribute("data-lit", "");
        else word.removeAttribute("data-lit");
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    paragraph.setAttribute("data-sw", "");
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      paragraph.removeAttribute("data-sw");
      for (const word of words) word.removeAttribute("data-lit");
    };
  }, [segments]);

  return (
    <p ref={ref} className={cn("av-words", className)}>
      {segments.map((segment, s) => (
        <Fragment key={s}>
          {s > 0 ? " " : null}
          {segment.text.split(/\s+/).filter(Boolean).map((word, w) => (
            <Fragment key={w}>
              {w > 0 ? " " : null}
              <span
                data-word=""
                className={cn("av-word", segment.accent ? "av-accent font-semibold italic text-gold-300" : "text-white")}
              >
                {word}
              </span>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </p>
  );
}
