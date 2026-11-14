/**
 * Coordonnées et réglages du site (indépendants de la langue).
 *
 * ⚠️  Les valeurs marquées « À REMPLACER » sont des placeholders.
 */
export const site = {
  name: "ATLAS AFRICA GROUP",
  legalName: "ATLAS AFRICA GROUP SARL",
  shortName: "AAG",

  /** Adresse publique du site. À REMPLACER (ou définir NEXT_PUBLIC_SITE_URL). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",

  /**
   * Logo. Déposez le fichier PNG dans /public (ex. /public/logo.png), puis
   * indiquez son chemin et ses dimensions réelles en pixels ci-dessous.
   * Tant que `src` vaut null, un logotype provisoire est affiché.
   */
  logo: {
    src: "/logo-site.png" as string | null,
    /** Version claire pour les fonds bleu marine (facultatif). */
    srcOnDark: null as string | null, // ex. "/logo-blanc.png"
    width: 696,
    height: 658,
  },

  contact: {
    /** À REMPLACER — numéro affiché. */
    phoneDisplay: "+243 000 000 000",
    /** À REMPLACER — même numéro au format international, sans espaces. */
    phoneE164: "+243000000000",
    /** À REMPLACER — numéro WhatsApp : indicatif + numéro, chiffres uniquement. */
    whatsapp: "243000000000",
    /** À REMPLACER */
    email: "contact@example.com",
    /** À REMPLACER — rue, numéro, quartier, commune. */
    streetAddress: "Adresse à compléter",
    locality: "Lubumbashi",
    region: "Haut-Katanga",
    countryCode: "CD",
  },

  /** Centre-ville de Lubumbashi. À affiner avec l'adresse exacte. */
  geo: {
    latitude: -11.6647,
    longitude: 27.4794,
  },

  map: {
    embedUrl:
      "https://maps.google.com/maps?q=Lubumbashi%2C%20Haut-Katanga%2C%20RDC&hl=fr&z=12&output=embed",
    linkUrl:
      "https://www.google.com/maps/search/?api=1&query=Lubumbashi%2C%20Haut-Katanga%2C%20RDC",
  },
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
