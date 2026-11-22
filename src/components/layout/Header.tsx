import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import type { Content } from "@/content";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { contactHref, href, routes } from "@/lib/routes";
import { HeaderNav, type NavItem } from "./HeaderNav";

type HeaderProps = {
  locale: Locale;
  content: Content;
};

export function Header({ locale, content }: HeaderProps) {
  const { nav } = content;

  // Libellé court sur grand écran (`shortLabel`), intitulé complet dans le menu mobile.
  // Barre : rubriques principales. Menu (bouton à 3 barres) : toutes les rubriques,
  // dont « Accueil », « Comment ça marche » et « Le Groupe » (`menuOnly`).
  const items: NavItem[] = [
    { path: routes.home, label: nav.home, menuOnly: true },
    { path: routes.expertises, label: nav.expertises, shortLabel: nav.short.expertises },
    { path: routes.howItWorks, label: nav.howItWorks, menuOnly: true },
    { path: routes.sectors, label: nav.sectors, shortLabel: nav.short.sectors },
    { path: routes.work, label: nav.work, shortLabel: nav.short.work },
    { path: routes.group, label: nav.group, shortLabel: nav.short.group, menuOnly: true },
    { path: routes.contact, label: nav.contact },
  ].map((item) => ({ ...item, href: href(locale, item.path) }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Link
          href={href(locale, routes.home)}
          aria-label={nav.homeLinkLabel}
          className="shrink-0"
        >
          <Logo />
        </Link>
        <HeaderNav
          items={items}
          cta={{ href: contactHref(locale), label: nav.cta }}
          labels={{ main: nav.mainLabel, open: nav.openMenu, close: nav.closeMenu, language: nav.languageLabel }}
          locale={locale}
          languages={locales.map((code) => ({ code, name: localeLabels[code] }))}
        />
      </Container>
    </header>
  );
}
