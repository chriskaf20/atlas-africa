import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "gold" | "navy" | "outlineLight" | "outlineDark";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  navy: "bg-navy-900 text-white hover:bg-navy-700",
  outlineLight: "border border-white/40 text-white hover:border-gold-300 hover:text-gold-300",
  outlineDark:
    "border border-navy-900/40 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
};

/** Classes communes aux boutons (liens ou <button>). */
export function buttonClass(variant: ButtonVariant = "gold", className?: string): string {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[3px] px-6 py-3 text-center",
    "font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em]",
    "transition-colors duration-200",
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
      {arrow ? <ArrowRight aria-hidden="true" size={16} strokeWidth={2} /> : null}
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
