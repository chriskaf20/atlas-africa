import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type MediaProps = {
  /** Fichier dans /public (ex. "/realisations/zando.jpg"). null = emplacement provisoire. */
  src: string | null;
  alt: string;
  /** Texte affiché dans l'emplacement provisoire. */
  title: string;
  caption: string;
  kind?: "image" | "video";
  /** Image affichée avant la lecture de la vidéo. */
  poster?: string | null;
  /** Classe de proportions, ex. "aspect-[16/10]". */
  ratio?: string;
  /** Indication de largeur pour le chargement adaptatif des images. */
  sizes?: string;
  className?: string;
};

/**
 * Visuel d'une réalisation. Tant qu'aucun fichier n'est fourni, affiche un
 * emplacement provisoire aux couleurs de la marque.
 */
export function Media({
  src,
  alt,
  title,
  caption,
  kind = "image",
  poster,
  ratio = "aspect-[16/10]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: MediaProps) {
  if (src && kind === "video") {
    return (
      <div className={cn("relative overflow-hidden bg-navy-950", ratio, className)}>
        <video
          src={src}
          controls
          preload="none"
          poster={poster ?? undefined}
          playsInline
          aria-label={alt}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    );
  }

  if (src) {
    return (
      <div className={cn("relative overflow-hidden bg-mist", ratio, className)}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  const Glyph = kind === "video" ? Play : ImageIcon;

  return (
    <div
      role="img"
      aria-label={`${title} — ${caption}`}
      className={cn("relative isolate overflow-hidden bg-navy-900", ratio, className)}
    >
      <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_85%_0%,rgb(44_74_143/0.6),transparent_60%)]"
      />
      <div aria-hidden="true" className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-gold-400/70 text-gold-300">
          <Glyph size={22} strokeWidth={1.5} />
        </span>
        <span className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {title}
        </span>
        <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-white/65">
          {caption}
        </span>
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      />
    </div>
  );
}
