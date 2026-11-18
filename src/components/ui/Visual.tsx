import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";
import type { VisualRatio } from "@/content/visuals";
import { cn } from "@/lib/cn";
import type { ResolvedVisual } from "@/lib/visuals";
import { LoopVideo } from "./LoopVideo";

/**
 * Affiche un visuel Higgsfield résolu par `getVisual()` (src/lib/visuals.ts) :
 *  - le fichier généré s'il est présent dans /public ;
 *  - sinon un visuel existant en attendant (fallback) ;
 *  - sinon un emplacement provisoire aux couleurs de la marque.
 *
 * Utilisable dans les composants serveur comme client (aucun accès disque ici).
 */

const ratioClass: Record<VisualRatio, string> = {
  "16/9": "aspect-[16/9]",
  "21/9": "aspect-[21/9]",
  "3/2": "aspect-[3/2]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "9/16": "aspect-[9/16]",
};

type VisualProps = {
  visual: ResolvedVisual;
  /**
   * "ratio" (défaut) : la hauteur suit les proportions du visuel.
   * "fill" : le visuel remplit son parent (qui doit être positionné et dimensionné).
   */
  fit?: "ratio" | "fill";
  /** Indication de largeur pour le chargement adaptatif des images. */
  sizes?: string;
  /** Visuel au-dessus de la ligne de flottaison : chargé en priorité. */
  priority?: boolean;
  /** Le texte voisin porte déjà le sens : visuel masqué aux lecteurs d'écran. */
  decorative?: boolean;
  /** Léger zoom au survol d'un parent `.group`. */
  zoomOnHover?: boolean;
  className?: string;
  /** Classes appliquées à l'image ou à la vidéo elle-même. */
  mediaClassName?: string;
};

export function Visual({
  visual,
  fit = "ratio",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  decorative = false,
  zoomOnHover = false,
  className,
  mediaClassName,
}: VisualProps) {
  const frame = cn(
    "overflow-hidden bg-navy-950",
    fit === "fill" ? "absolute inset-0" : cn("relative", ratioClass[visual.ratio]),
    className,
  );
  const media = cn(
    "h-full w-full object-cover",
    zoomOnHover && "transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]",
    mediaClassName,
  );
  const data = {
    "data-visual": visual.id,
    ...(visual.dev ? { "data-higgsfield-file": visual.dev.file, "data-higgsfield-prompt": visual.dev.prompt } : {}),
  };

  if (visual.src && visual.kind === "video") {
    return (
      <div className={frame} {...data}>
        <LoopVideo src={visual.src} poster={visual.poster} alt={decorative ? undefined : visual.alt} className={media} />
      </div>
    );
  }

  if (visual.src) {
    return (
      <div className={frame} {...data}>
        <Image
          src={visual.src}
          alt={decorative ? "" : visual.alt}
          fill
          sizes={sizes}
          {...(priority ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
          className={media}
        />
      </div>
    );
  }

  // Emplacement provisoire, en attendant le fichier Higgsfield.
  const Glyph = visual.kind === "video" ? Play : ImageIcon;
  return (
    <div
      {...data}
      // L'image n'existe pas encore : on annonce un emplacement, pas une scène inventée.
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": `${visual.label} — ${visual.soon}` })}
      className={cn(frame, "isolate")}
    >
      <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_80%_0%,rgb(44_74_143/0.7),transparent_60%),radial-gradient(80%_60%_at_0%_100%,rgb(201_161_59/0.18),transparent_70%)]"
      />
      <div aria-hidden="true" className="visual-sheen absolute inset-0 -z-10" />
      <div aria-hidden="true" className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/60 text-gold-300">
          <Glyph size={18} strokeWidth={1.5} />
        </span>
        <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">{visual.label}</span>
        <span className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-white/60">
          {visual.soon}
        </span>
        {visual.dev ? (
          <code className="mt-1 max-w-full truncate rounded bg-black/40 px-2 py-1 font-mono text-[0.625rem] text-gold-200">
            public{visual.dev.file}
          </code>
        ) : null}
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"
      />
    </div>
  );
}
