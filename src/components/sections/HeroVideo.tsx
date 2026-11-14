"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  /** Description lue par les lecteurs d'écran. */
  alt: string;
};

/**
 * Boucle vidéo muette du hero. Elle ne joue que lorsqu'elle est visible, et
 * reste sur son image fixe si l'utilisateur a demandé moins d'animations.
 */
export function HeroVideo({ src, poster, alt }: HeroVideoProps) {
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
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      className="block aspect-video w-full object-cover"
    />
  );
}
