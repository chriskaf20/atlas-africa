import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * Routage des langues.
 *
 * - La langue par défaut (français) est servie sans préfixe : /services
 *   est réécrit en interne vers /fr/services.
 * - /fr/services est redirigé vers /services pour éviter les doublons.
 * - Les autres langues (ex. /en/services) passent telles quelles.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const prefixed = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (prefixed === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (prefixed) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Tout sauf l'API, les fichiers internes de Next, les images générées
  // (Open Graph, icônes) et les fichiers statiques (qui contiennent un point).
  matcher: ["/((?!api|_next/static|_next/image|opengraph-image|apple-icon|.*\\..*).*)"],
};
