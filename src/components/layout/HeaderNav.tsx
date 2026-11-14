"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { stripLocale } from "@/lib/routes";

export type NavItem = {
  /** Chemin sans préfixe de langue, pour repérer la page active. */
  path: string;
  href: string;
  label: string;
};

type HeaderNavProps = {
  items: NavItem[];
  cta: { href: string; label: string };
  labels: { main: string; open: string; close: string };
};

const MENU_ID = "menu-mobile";

export function HeaderNav({ items, cta, labels }: HeaderNavProps) {
  const pathname = stripLocale(usePathname());
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    // Le menu mobile n'a plus lieu d'être si la fenêtre passe en grand format.
    const desktop = window.matchMedia("(min-width: 1024px)");
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
      <nav aria-label={labels.main} className="hidden lg:block">
        <ul className="flex items-center gap-9">
          {items.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.1em] transition-colors",
                    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-gold-500 after:transition-transform after:duration-300",
                    active
                      ? "text-navy-900 after:scale-x-100"
                      : "text-navy-900/75 after:scale-x-0 hover:text-navy-900 hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link href={cta.href} className={buttonClass("navy", "hidden lg:inline-flex")}>
        {cta.label}
      </Link>

      {/* Mobile */}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={MENU_ID}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 grid h-12 w-12 place-items-center text-navy-900 lg:hidden"
      >
        {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
      </button>

      {/* Voile derrière le menu : un toucher en dehors le referme. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-x-0 top-full h-[100dvh] bg-navy-950/40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id={MENU_ID}
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-white shadow-[0_30px_60px_-30px_rgb(6_18_46/0.35)] transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden",
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
        </nav>
      </div>
    </>
  );
}
