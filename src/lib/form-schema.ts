/**
 * Formulaires spécialisés : champs complémentaires selon le service choisi.
 * Partagé entre le navigateur et le serveur (aucun texte ici : les libellés
 * sont dans `form.fields` des fichiers de contenu).
 *
 * Pour ajouter un champ : l'ajouter à `extraFieldKeys`, lui donner un type
 * ci-dessous, puis un libellé dans `form.fields` (fr.ts et en.ts).
 */

export const extraFieldKeys = [
  "location",
  "timeline",
  "projectType",
  "sector",
  "stage",
  "products",
  "quantity",
  "origin",
  "destination",
  "cargo",
  "need",
  "headcount",
  "profile",
  "duration",
  "premises",
  "surface",
  "frequency",
  "date",
  "route",
  "passengers",
  "vehicle",
  "brand",
  "period",
  "objective",
  "organization",
  "partnershipType",
  "country",
] as const;

export type ExtraFieldKey = (typeof extraFieldKeys)[number];
export type ExtraValues = Partial<Record<ExtraFieldKey, string>>;

/** "select" : liste de choix (options dans le contenu) · "date" · "text". */
export const extraFieldKind: Record<ExtraFieldKey, "text" | "select" | "date"> = {
  location: "text",
  timeline: "select",
  projectType: "text",
  sector: "select",
  stage: "select",
  products: "text",
  quantity: "text",
  origin: "text",
  destination: "text",
  cargo: "text",
  need: "select",
  headcount: "text",
  profile: "text",
  duration: "text",
  premises: "select",
  surface: "text",
  frequency: "select",
  date: "date",
  route: "text",
  passengers: "text",
  vehicle: "select",
  brand: "text",
  period: "text",
  objective: "text",
  organization: "text",
  partnershipType: "select",
  country: "text",
};

/** Champs affichés pour chaque service (valeur de `form.serviceOptions`). */
export const serviceFields: Record<string, ExtraFieldKey[]> = {
  "business-projects": ["projectType", "sector", "stage", "location", "timeline"],
  "supply-logistics": ["products", "quantity", "location", "timeline"],
  logistics: ["origin", "destination", "cargo", "timeline"],
  hr: ["need", "headcount", "profile", "location", "duration"],
  "people-facilities": ["premises", "surface", "frequency", "location"],
  "aag-cleaning": ["premises", "surface", "frequency", "location"],
  "aag-mobilite": ["date", "route", "passengers", "vehicle"],
  "digital-communication": ["projectType", "timeline"],
  "offre-cle-en-main": ["projectType", "timeline"],
  "led-atlas": ["brand", "period", "objective"],
  partenariat: ["organization", "partnershipType", "country"],
  autre: [],
};

export const EXTRA_MAX_LENGTH = 200;

export function fieldsFor(service: string): ExtraFieldKey[] {
  return serviceFields[service] ?? [];
}

/** Ne garde que les champs prévus pour ce service, nettoyés et tronqués. */
export function normalizeExtras(service: string, input: unknown): ExtraValues {
  const source = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const values: ExtraValues = {};
  for (const key of fieldsFor(service)) {
    const raw = source[key];
    if (typeof raw === "string" && raw.trim()) values[key] = raw.trim();
  }
  return values;
}

/** Champs trop longs (les champs complémentaires sont tous facultatifs). */
export function validateExtras(values: ExtraValues): ExtraFieldKey[] {
  return (Object.keys(values) as ExtraFieldKey[]).filter(
    (key) => (values[key]?.length ?? 0) > EXTRA_MAX_LENGTH,
  );
}
