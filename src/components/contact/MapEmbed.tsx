"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MapEmbedProps = {
  src: string;
  /** Titre de l'iframe, lu par les lecteurs d'écran. */
  title: string;
  /** Texte affiché avant le chargement de la carte. */
  placeholder: string;
};

/**
 * Carte Google Maps chargée seulement à l'approche de l'écran, pour ne pas
 * ralentir l'affichage initial de la page.
 */
export function MapEmbed({ src, title, placeholder }: MapEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative isolate aspect-[4/3] w-full overflow-hidden border border-line bg-mist sm:aspect-[16/9] lg:aspect-[21/9]"
    >
      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-3 text-center">
        <MapPin aria-hidden="true" size={30} strokeWidth={1.25} className="text-gold-600" />
        <p className="font-display text-sm font-semibold text-navy-900">{placeholder}</p>
      </div>
      {visible ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : null}
    </div>
  );
}
