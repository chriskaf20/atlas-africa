"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Sur mobile et tablette, n'affiche que les trois premières cartes de la liste
 * (`li`) avec un bouton pour voir le reste. Sur grand écran, tout est visible.
 */
export function MobileExpand({
  children,
  total,
  moreLabel,
  lessLabel,
}: {
  children: ReactNode;
  total: number;
  moreLabel: string;
  lessLabel: string;
}) {
  const [open, setOpen] = useState(false);
  if (total <= 3) return <>{children}</>;
  return (
    <div className={cn(!open && "mobile-collapsed")}>
      {children}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="mt-5 inline-flex min-h-11 items-center gap-2 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900 lg:hidden"
      >
        {open ? lessLabel : `${moreLabel} (${total})`}
        <ChevronDown aria-hidden="true" size={16} className={cn("transition-transform", open && "rotate-180")} />
      </button>
    </div>
  );
}
