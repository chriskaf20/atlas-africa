import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "dark" = posé sur un fond bleu marine. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Logo de la marque.
 * Affiche le fichier indiqué dans `src/content/site.ts` (logo.src). Tant
 * qu'aucun fichier n'est fourni, un logotype provisoire le remplace.
 */
export function Logo({ tone = "light", className }: LogoProps) {
  const { src, srcOnDark, width, height } = site.logo;
  const dark = tone === "dark";
  const file = dark ? (srcOnDark ?? src) : src;

  if (file) {
    // Sans version claire, le logo est présenté sur une pastille blanche.
    const onChip = dark && !srcOnDark;
    return (
      <span className={cn("inline-flex", onChip && "rounded-[3px] bg-white p-2", className)}>
        <Image
          src={file}
          alt={site.legalName}
          width={width}
          height={height}
          priority={!dark}
          sizes="80px"
          className="h-14 w-auto lg:h-16"
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-10 w-10 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="3" fill={dark ? "#ffffff" : "#0b1f4b"} fillOpacity={dark ? 0.08 : 1} />
        <rect x="9" y="22" width="5" height="9" fill="#c9a13b" />
        <rect x="17.5" y="15.5" width="5" height="15.5" fill="#c9a13b" />
        <rect x="26" y="9" width="5" height="22" fill="#c9a13b" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-bold tracking-[0.18em]",
            dark ? "text-white" : "text-navy-900",
          )}
        >
          ATLAS
        </span>
        <span
          className={cn(
            "mt-1.5 font-display text-[0.625rem] font-semibold tracking-[0.26em]",
            dark ? "text-gold-300" : "text-gold-700",
          )}
        >
          AFRICA GROUP
        </span>
      </span>
    </span>
  );
}
