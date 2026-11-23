import type { Content } from "@/content";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { href, poleHref, routes } from "@/lib/routes";
import { absoluteUrl, OG_IMAGE_PATH } from "@/lib/seo";

type JsonLdProps = {
  locale: Locale;
  content: Content;
};

/** Données structurées schema.org « LocalBusiness » (Lubumbashi, RDC). */
export function JsonLd({ locale, content }: JsonLdProps) {
  const { contact, geo } = site;
  const home = absoluteUrl(href(locale, routes.home));

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}#organisation`,
    name: site.legalName,
    alternateName: [site.name, site.shortName],
    description: content.meta.description,
    url: home,
    image: absoluteUrl(OG_IMAGE_PATH),
    ...(site.logo.src ? { logo: absoluteUrl(site.logo.src) } : {}),
    telephone: contact.phoneE164,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      // Rue publiée seulement si elle est confirmée (voir site.ts).
      ...(contact.streetAddress ? { streetAddress: contact.streetAddress } : {}),
      addressLocality: contact.locality,
      addressRegion: contact.region,
      addressCountry: contact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: content.contactPage.country },
      { "@type": "Continent", name: locale === "fr" ? "Afrique" : "Africa" },
    ],
    knowsLanguage: locale,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: contact.phoneE164,
      email: contact.email,
      availableLanguage: [locale],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.nav.expertises,
      itemListElement: content.poles.map((pole) => ({
        "@type": "OfferCatalog",
        name: pole.name,
        description: pole.summary,
        url: absoluteUrl(poleHref(locale, pole.id)),
        // Les services en développement ne sont pas proposés.
        itemListElement: pole.services.filter((service) => service.delivery !== "development").map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.title },
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
