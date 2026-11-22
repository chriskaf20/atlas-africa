import Image from "next/image";
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
  /** Affiche la mention « Illustration » sur les images générées (oui par défaut). */
  showIllustration?: boolean;
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
  showIllustration = true,
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

  // Mention « Illustration » sur les images générées : elles ne montrent pas une réalisation réelle.
  const chip =
    visual.illustration && showIllustration ? (
      <span className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 rounded-full bg-navy-950/60 px-2 py-0.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm">
        {visual.illustrationLabel}
      </span>
    ) : null;

  if (visual.src && visual.kind === "video") {
    return (
      <div className={frame} {...data}>
        <LoopVideo src={visual.src} poster={visual.poster} alt={decorative ? undefined : visual.alt} className={media} />
        {chip}
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
          quality={90}
          {...(priority ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
          className={media}
        />
        {chip}
      </div>
    );
  }

  // Pas encore d'image : composition aux couleurs de la marque, sans texte provisoire.
  return (
    <div
      {...data}
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": visual.label })}
      className={cn(frame, "isolate")}
    >
      <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_80%_0%,rgb(44_74_143/0.7),transparent_60%),radial-gradient(80%_60%_at_0%_100%,rgb(201_161_59/0.18),transparent_70%)]"
      />
      <div aria-hidden="true" className="visual-sheen absolute inset-0 -z-10" />
      <svg aria-hidden="true" viewBox="0 0 400 400" fill="none" className="absolute -right-16 -top-16 -z-10 h-72 w-72 opacity-70">
        <circle cx="200" cy="200" r="60" stroke="#d6b45c" strokeOpacity="0.45" />
        <circle cx="200" cy="200" r="120" stroke="#d6b45c" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="190" stroke="#d6b45c" strokeOpacity="0.12" />
      </svg>
      <div aria-hidden="true" className="flex h-full flex-col items-start justify-end gap-2 p-5 sm:p-6">
        {/* Visuel décoratif : la carte affiche déjà son titre, on évite le doublon. */}
        {decorative ? null : (
          <>
            <span className="h-px w-8 bg-gold-400" />
            <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">{visual.label}</span>
          </>
        )}
        {visual.dev ? (
          <code className="mt-1 max-w-full truncate rounded bg-black/40 px-2 py-1 font-mono text-[0.625rem] text-gold-200">
            public{visual.dev.file}
          </code>
        ) : null}
      </div>
    </div>
  );
}
