import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "gold" | "navy" | "outlineLight" | "outlineDark";

const variants: Record<ButtonVariant, string> = {
  gold:
    "btn-shine relative overflow-hidden bg-gold-400 text-navy-950 shadow-[0_10px_24px_-12px_rgb(193_154_62/0.8)] hover:bg-gold-300 hover:shadow-[0_14px_30px_-12px_rgb(193_154_62/0.95)] focus-visible:outline-gold-300",
  navy:
    "bg-navy-900 text-white shadow-[0_10px_24px_-14px_rgb(10_28_69/0.7)] hover:bg-navy-700 hover:shadow-[0_14px_30px_-14px_rgb(10_28_69/0.8)]",
  outlineLight: "border border-white/35 text-white hover:border-white hover:bg-white hover:text-navy-950",
  outlineDark: "border border-navy-900/30 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
};

/** Classes communes aux boutons (liens ou <button>). */
export function buttonClass(variant: ButtonVariant = "gold", className?: string): string {
  return cn(
    "group/btn inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-center",
    "font-display text-[0.8125rem] font-semibold uppercase tracking-[0.1em]",
    "transition-[background-color,color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
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
