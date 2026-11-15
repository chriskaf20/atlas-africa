import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import type { Content } from "@/content";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { href, offerHref, routes } from "@/lib/routes";

type FooterProps = {
  locale: Locale;
  content: Content;
};

const titleClass = "font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-300";
const linkClass = "inline-flex min-h-9 items-center text-white/75 transition-colors hover:text-white";

export function Footer({ locale, content }: FooterProps) {
  const { nav, footer, poles, offers, contactPage } = content;
  const { contact } = site;

  const pages = [
    { href: href(locale, routes.home), label: nav.home },
    { href: href(locale, routes.services), label: nav.services },
    { href: href(locale, routes.work), label: nav.work },
    { href: href(locale, routes.about), label: nav.about },
    { href: href(locale, routes.contact), label: nav.contact },
  ];

  return (
    <footer className="on-dark bg-navy-950 text-[0.9375rem] text-white/75">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.1fr_1.2fr] lg:gap-10">
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs leading-relaxed">{footer.tagline}</p>
          </div>

          <nav aria-label={footer.navTitle}>
            <h2 className={titleClass}>{footer.navTitle}</h2>
            <ul className="mt-5">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className={linkClass}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.polesTitle}>
            <h2 className={titleClass}>{footer.polesTitle}</h2>
            <ul className="mt-5">
              {poles.map((pole) => (
                <li key={pole.id}>
                  <Link href={`${href(locale, routes.services)}#${pole.id}`} className={linkClass}>
                    {pole.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className={`${titleClass} mt-8`}>{footer.offersTitle}</h2>
            <ul className="mt-5">
              {offers.map((offer) => (
                <li key={offer.id}>
                  <Link href={offerHref(locale, offer.id)} className={linkClass}>
                    {offer.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={titleClass}>{footer.contactTitle}</h2>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <MapPin aria-hidden="true" size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-gold-400" />
                <address className="not-italic leading-relaxed">
                  {contact.streetAddress}
                  <br />
                  {contact.locality}, {contact.region}
                  <br />
                  {contactPage.country}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0 text-gold-400" />
                <a href={`tel:${contact.phoneE164}`} className={linkClass}>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" size={18} strokeWidth={1.5} className="shrink-0 text-gold-400" />
                <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {footer.rights}
          </p>
          <p>{footer.location}</p>
        </div>
      </Container>
    </footer>
  );
}
