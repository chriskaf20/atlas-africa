/**
 * Coordonnées et réglages du site (indépendants de la langue).
 *
 * ⚠️  Les valeurs marquées « À REMPLACER » sont des placeholders.
 */
export const site = {
  name: "ATLAS AFRICA GROUP",
  legalName: "ATLAS AFRICA GROUP SARL",
  shortName: "AAG",

  /** Adresse publique du site (modifiable par la variable NEXT_PUBLIC_SITE_URL). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.atlasafricagroup.com",

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
    /** Monogramme « AG » seul (fond transparent), utilisé dans l'en-tête et le pied de page. */
    mark: { src: "/logo-mark.png", width: 336, height: 220 },
  },

  contact: {
    /** Numéro affiché. */
    phoneDisplay: "+243 897 500 994",
    /** Même numéro au format international, sans espaces. */
    phoneE164: "+243897500994",
    /** Numéro WhatsApp : indicatif + numéro, chiffres uniquement. */
    whatsapp: "243897500994",
    email: "info@atlasafricagroup.com",
    /**
     * Rue, numéro, quartier, commune. Laisser null tant que l'adresse n'est pas
     * confirmée : le site affiche alors seulement la ville (jamais de texte provisoire).
     */
    streetAddress: null as string | null,
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
