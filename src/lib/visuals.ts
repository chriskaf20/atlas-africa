/**
 * Résolution des visuels Higgsfield — SERVEUR UNIQUEMENT (lit le disque).
 *
 * Ne pas importer depuis un composant "use client" : appelez `getVisual()`
 * dans le composant serveur parent et transmettez le résultat (des données
 * simples) au composant client, qui l'affiche avec <Visual />.
 */
import fs from "node:fs";
import path from "node:path";
import { getContent } from "@/content";
import { visuals, type VisualId, type VisualKind, type VisualRatio, type VisualSpec } from "@/content/visuals";
import type { Locale } from "@/i18n/config";

export type ResolvedVisual = {
  id: string;
  kind: VisualKind;
  /** Fichier à afficher ; null = emplacement provisoire aux couleurs de la marque. */
  src: string | null;
  poster: string | null;
  ratio: VisualRatio;
  alt: string;
  label: string;
  /** true : image d'illustration (générée), signalée comme telle à l'écran. */
  illustration: boolean;
  /** Libellé de la mention « Illustration ». */
  illustrationLabel: string;
  /** true : un visuel existant est affiché en attendant le fichier Higgsfield. */
  isFallback: boolean;
  /** Développement uniquement : chemin attendu et prompt, pour l'emplacement provisoire. */
  dev: { file: string; prompt: string } | null;
};

const isDev = process.env.NODE_ENV === "development";
const existsCache = new Map<string, boolean>();

/** Le fichier existe-t-il dans /public ? (Relu à chaque fois en développement.) */
function publicFileExists(publicPath: string): boolean {
  if (!isDev && existsCache.has(publicPath)) return existsCache.get(publicPath)!;
  const exists = fs.existsSync(path.join(process.cwd(), "public", publicPath.replace(/^\/+/, "")));
  existsCache.set(publicPath, exists);
  return exists;
}

export function getVisual(id: VisualId, locale: Locale): ResolvedVisual {
  const spec: VisualSpec = visuals[id];
  const { common } = getContent(locale);
  const base = {
    id,
    ratio: spec.ratio,
    alt: spec.alt[locale],
    label: spec.label[locale],
    illustration: false,
    illustrationLabel: common.illustration,
    dev: isDev ? { file: spec.file, prompt: spec.prompt } : null,
  };

  if (publicFileExists(spec.file)) {
    const poster = spec.poster && publicFileExists(spec.poster) ? spec.poster : null;
    return { ...base, illustration: true, kind: spec.kind, src: spec.file, poster, isFallback: false };
  }

  // Vidéo pas encore déposée, mais son image fixe l'est : on affiche l'image.
  if (spec.kind === "video" && spec.poster && publicFileExists(spec.poster)) {
    return { ...base, illustration: true, kind: "image", src: spec.poster, poster: null, isFallback: false };
  }

  if (spec.fallback && publicFileExists(spec.fallback.file)) {
    const { fallback } = spec;
    const poster = fallback.poster ?? null;
    // La description du futur visuel Higgsfield ne correspond pas à l'image affichée :
    // on se contente de son libellé court.
    return {
      ...base,
      alt: spec.label[locale],
      illustration: fallback.file.includes("/higgsfield/"),
      kind: fallback.kind,
      src: fallback.file,
      poster,
      isFallback: true,
    };
  }

  return { ...base, kind: spec.kind, src: null, poster: null, isFallback: false };
}

/** Raccourci : plusieurs visuels d'un coup. */
export function getVisuals(ids: VisualId[], locale: Locale): ResolvedVisual[] {
  return ids.map((id) => getVisual(id, locale));
}
