import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { getContent } from "@/content";
import { site } from "@/content/site";
import { isLocale, locales } from "@/i18n/config";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import "../globals.css";

// Titres : sans-serif géométrique, proche du logo. Texte : sans-serif lisible.
const heading = Montserrat({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(site.url),
    title: { default: meta.title, template: `%s | ${site.name}` },
    description: meta.description,
    keywords: meta.keywords,
    applicationName: site.name,
    authors: [{ name: site.legalName }],
    creator: site.legalName,
    publisher: site.legalName,
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b1f4b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

type RootLayoutProps = LocaleParams & {
  children: ReactNode;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = await resolveLocale(params);
  const content = getContent(locale);

  return (
    <html lang={locale} className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy-900 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-semibold focus:text-white"
        >
          {content.nav.skipToContent}
        </a>
        {/* Barre de progression de lecture (CSS seul, liée au défilement). */}
        <div aria-hidden="true" className="scroll-progress" />
        <Header locale={locale} content={content} />
        <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer locale={locale} content={content} />
        <WhatsAppButton
          label={content.common.whatsappCta}
          message={content.common.whatsappMessage}
        />
        <JsonLd locale={locale} content={content} />
      </body>
    </html>
  );
}
