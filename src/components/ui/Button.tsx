import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "gold" | "navy" | "outlineLight" | "outlineDark";

const variants: Record<ButtonVariant, string> = {
  gold:
    "btn-shine relative overflow-hidden bg-gradient-to-b from-gold-400 to-gold-500 text-navy-950 shadow-[0_12px_30px_-12px_rgb(201_161_59/0.75)] hover:from-gold-300 hover:to-gold-400 hover:shadow-[0_16px_36px_-12px_rgb(201_161_59/0.9)]",
  navy:
    "bg-navy-900 text-white shadow-[0_12px_30px_-14px_rgb(11_31_75/0.65)] hover:bg-navy-700",
  outlineLight: "border border-white/40 text-white hover:border-gold-300 hover:text-gold-300",
  outlineDark:
    "border border-navy-900/40 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
};

/** Classes communes aux boutons (liens ou <button>). */
export function buttonClass(variant: ButtonVariant = "gold", className?: string): string {
  return cn(
    "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-center",
    "font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em]",
    "transition-all duration-300 active:scale-[0.97]",
    variants[variant],
    className,
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Affiche une flèche après le libellé. */
  arrow?: boolean;
  /** Lien externe : ouvert dans un nouvel onglet. */
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className,
  arrow = false,
  external = false,
}: ButtonLinkProps) {
  const content = (
    <>
      {children}
      {arrow ? <ArrowRight
          aria-hidden="true"
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        /> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass(variant, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {content}
    </Link>
  );
}
