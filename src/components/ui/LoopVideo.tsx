"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type LoopVideoProps = {
  src: string;
  poster?: string | null;
  /** Description lue par les lecteurs d'écran. Vide = vidéo décorative. */
  alt?: string;
  className?: string;
};

/**
 * Boucle vidéo muette. Elle ne joue que lorsqu'elle est visible, et reste sur
 * son image fixe si l'utilisateur a demandé moins d'animations.
 */
export function LoopVideo({ src, poster, alt, className }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster ?? undefined}
      muted
      loop
      playsInline
      preload={poster ? "none" : "metadata"}
      {...(alt ? { "aria-label": alt } : { "aria-hidden": true })}
      className={cn("block h-full w-full object-cover", className)}
    />
  );
}
