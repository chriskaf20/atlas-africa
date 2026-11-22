/**
 * Types des contenus du site. `fr.ts` et `en.ts` les respectent tous les deux :
 * une langue ne peut pas avoir un champ que l'autre n'a pas.
 */

/** Qui réalise la prestation (affiché sur chaque service, par honnêteté). */
export type Delivery = "internal" | "partners" | "development";

export type PoleService = {
  icon: string;
  title: string;
  description: string | null;
  items: string[];
  delivery: Delivery;
  /** Branche du pôle (pôle Digital uniquement), voir `Pole.groups`. */
  group?: string;
};

export type Pole = {
  /** Identifiant, aussi utilisé dans l'adresse : /expertises/<id>. Ne pas modifier. */
  id: string;
  number: string;
  icon: string;
  name: string;
  badge: string | null;
  tagline: string;
  summary: string;
  /* Page du pôle */
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  problems: string[];
  services: PoleService[];
  /** Branches du pôle (vide si le pôle n'en a pas). */
  groups: { id: string; title: string; text: string }[];
  /** Identifiants des secteurs concernés (voir `sectors`). */
  sectors: string[];
  advantages: { title: string; text: string }[];
  /** Identifiants des réalisations liées (voir `caseStudies`). */
  caseStudies: string[];
  /** Service présélectionné dans le formulaire du pôle (voir `form.serviceOptions`). */
  formType: string;
  faq: { question: string; answer: string }[];
  showcase: null | {
    title: string;
    intro: string;
    items: {
      src: string;
      poster: string;
      title: string;
      caption: string;
      orientation: "landscape" | "portrait";
    }[];
  };
  featured: null | {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
    cta: string;
    serviceValue: string;
  };
};

export type Sector = {
  /** Identifiant stable (ne pas modifier). */
  id: string;
  icon: string;
  label: string;
  /** Libellé court (ligne des secteurs de l'accueil). */
  short: string;
  text: string;
  needs: string[];
  /** Pôles mobilisés pour ce secteur. */
  poles: string[];
};

export type CaseStudyStatus = "completed" | "ongoing" | "development";

export type CaseStudy = {
  id: string;
  name: string;
  sector: string;
  icon: string;
  status: CaseStudyStatus;
  location: string;
  intervention: string;
  poles: string[];
  headline: string;
  summary: string;
  image: string | null;
  video: string | null;
  videoPoster: string | null;
  videoLabel: string;
  imageAlt: string;
  deliverablesTitle: string;
  deliverables: { icon: string; title: string; description: string }[];
  resultsTitle: string;
  /** Uniquement des résultats mesurés et documentés. Vide = section masquée. */
  results: { value: string; label: string }[];
  cta: string;
  serviceValue: string;
  advertisers: null | {
    title: string;
    intro: string;
    videoTitle: string;
    video: string | null;
    videoPoster: string | null;
    videoCaption: string;
  };
};

export type Offer = {
  id: string;
  name: string;
  icon: string;
  /** Titre du service correspondant dans les pôles (lien « Découvrir l'offre »). */
  serviceTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  summary: string;
  /** Statut affiché si l'offre n'est pas encore pleinement opérationnelle. */
  status: string | null;
  featuresTitle: string;
  features: { icon: string; title: string; text: string }[];
  process: null | { title: string; steps: { title: string; text: string }[] };
  media: null | { video: string; poster: string; alt: string };
  formTitle: string;
  formIntro: string;
  serviceValue: string;
};

export type Leader = {
  name: string;
  role: string;
  /** Photo dans /public (ex. "/equipe/dg.jpg"), ou null. */
  photo: string | null;
  bio: string;
};

export type LegalSection = { title: string; paragraphs: string[] };

/** Champs complémentaires des formulaires spécialisés (voir src/lib/form-schema.ts). */
export type FormFieldContent = { label: string; placeholder?: string; options?: string[] };
