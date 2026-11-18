"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { Locale } from "@/i18n/config";
import { href as localizedHref, stripLocale } from "@/lib/routes";

export type NavItem = {
  /** Chemin sans préfixe de langue, pour repérer la page active. */
  path: string;
  href: string;
  label: string;
};

type HeaderNavProps = {
  items: NavItem[];
  cta: { href: string; label: string };
  labels: { main: string; open: string; close: string; language: string };
  /** Langue affichée et langues proposées dans le sélecteur. */
  locale: Locale;
  languages: { code: Locale; name: string }[];
};

const MENU_ID = "menu-mobile";

export function HeaderNav({ items, cta, labels, locale, languages }: HeaderNavProps) {
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  // Sélecteur de langue : même page, dans l'autre langue.
  const languageSwitch = (className?: string) =>
    languages.length > 1 ? (
      <ul aria-label={labels.language} className={cn("flex items-center gap-1", className)}>
        {languages.map((language) => {
          const current = language.code === locale;
          return (
            <li key={language.code}>
              <Link
                href={localizedHref(language.code, pathname)}
                hrefLang={language.code}
                lang={language.code}
                title={language.name}
                aria-current={current ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "grid h-9 min-w-9 place-items-center rounded-full px-2 font-display text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
                  current ? "bg-navy-900 text-white" : "text-navy-900/75 hover:bg-mist hover:text-navy-900",
                )}
              >
                {language.code}
              </Link>
            </li>
          );
        })}
      </ul>
    ) : null;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    // Le menu mobile n'a plus lieu d'être si la fenêtre passe en grand format.
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Grand écran */}
      <nav aria-label={labels.main} className="hidden xl:block">
        {/* Navigation « en pilule » : la page active est surlignée en bleu marine. */}
        <ul className="flex items-center gap-0.5 rounded-full border border-line bg-mist/80 p-1">
          {items.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-full px-3 py-2 font-display text-[0.75rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 xl:px-4 xl:text-[0.8125rem]",
                    active
                      ? "bg-navy-900 text-white shadow-[0_8px_20px_-10px_rgb(11_31_75/0.7)]"
                      : "text-navy-900/75 hover:bg-white hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden items-center gap-4 xl:flex">
        {languageSwitch()}
        <Link href={cta.href} className={buttonClass("navy", "whitespace-nowrap")}>
          {cta.label}
        </Link>
      </div>

      {/* Mobile */}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 grid h-12 w-12 place-items-center text-navy-900 xl:hidden"
      >
        {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
      </button>

      {/* Voile derrière le menu : un toucher en dehors le referme. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-x-0 top-full h-[100dvh] bg-navy-950/40 transition-opacity duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id={MENU_ID}
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-white shadow-[0_30px_60px_-30px_rgb(6_18_46/0.35)] transition-[opacity,transform,visibility] duration-300 ease-out xl:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label={labels.main} className="px-5 pb-8 pt-2 sm:px-8">
          <ul>
            {items.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.path} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex min-h-14 items-center justify-between font-display text-base font-semibold tracking-wide",
                      active ? "text-navy-900" : "text-navy-900/80",
                    )}
                  >
                    {item.label}
                    {active ? <span aria-hidden="true" className="h-px w-8 bg-gold-500" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className={buttonClass("navy", "mt-7 w-full")}
          >
            {cta.label}
          </Link>
          {languageSwitch("mt-6 justify-center")}
        </nav>
      </div>
    </>
  );
}
