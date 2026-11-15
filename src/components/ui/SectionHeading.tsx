import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

type EyebrowProps = {
  children: ReactNode;
  /** "dark" = posé sur un fond bleu marine. */
  tone?: Tone;
  className?: string;
};

/** Petit intitulé en capitales, précédé d'un filet doré. */
export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-gold-300" : "text-gold-700",
        className,
      )}
    >
      <span aria-hidden="true" className="draw-line h-px w-8 shrink-0 bg-gold-500" />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: Tone;
  /** Niveau du titre (h2 par défaut). */
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Heading
        className={cn(
          "mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </Heading>
      {intro ? (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/75" : "text-muted")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
