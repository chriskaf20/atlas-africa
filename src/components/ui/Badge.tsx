import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  /** "gold" : nouveauté · "neutral" : information · "dark" : sur fond bleu marine. */
  tone?: "gold" | "neutral" | "dark";
  className?: string;
};

const tones = {
  gold: "border-gold-500/70 bg-gold-200/35 text-gold-700",
  neutral: "border-navy-900/25 bg-mist text-navy-700",
  dark: "border-gold-400/60 bg-white/5 text-gold-300",
};

export function Badge({ children, tone = "gold", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-1",
        "font-display text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
