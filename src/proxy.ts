import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Routage des langues : toutes les pages sont servies sous /fr/… ou /en/….
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const prefixed = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (prefixed) return NextResponse.next();

  // Adresse sans langue (ancien format) : redirection vers la version française.
  // Toutes les pages ont un préfixe de langue : le routeur de Next ne confond
  // plus une page (/services) avec une langue, ce qui évite les préchargements en 404.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Tout sauf l'API, les fichiers internes de Next, les images générées
  // (Open Graph, icônes) et les fichiers statiques (qui contiennent un point).
  matcher: ["/((?!api|_next/static|_next/image|opengraph-image|apple-icon|.*\\..*).*)"],
};
