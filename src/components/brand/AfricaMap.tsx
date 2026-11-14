import { africaMap } from "@/lib/africa-map";
import { cn } from "@/lib/cn";

type AfricaMapProps = {
  /** Description lue par les lecteurs d'écran. Vide = carte purement décorative. */
  alt?: string;
  /** Étiquette affichée à côté de Lubumbashi. */
  label?: string;
  sublabel?: string;
  className?: string;
};

/**
 * Carte de l'Afrique en points dorés : la RDC ressort en plus clair et
 * Lubumbashi est marqué d'un repère. Rendu côté serveur, sans JavaScript.
 */
export function AfricaMap({ alt, label, sublabel, className }: AfricaMapProps) {
  const { width, height, dotSize, continentPath, drcPath, hq } = africaMap;

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
        {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
      >
        {/* Cercles qui partent de Lubumbashi : la RDC aujourd'hui, l'Afrique demain. */}
        <circle cx={hq.x} cy={hq.y} r="62" stroke="#d6b45c" strokeOpacity="0.5" />
        <circle cx={hq.x} cy={hq.y} r="135" stroke="#d6b45c" strokeOpacity="0.3" />
        <circle cx={hq.x} cy={hq.y} r="225" stroke="#d6b45c" strokeOpacity="0.16" />

        <path
          d={continentPath}
          stroke="#c9a13b"
          strokeOpacity="0.5"
          strokeWidth={dotSize}
          strokeLinecap="round"
        />
        <path d={drcPath} stroke="#f0dfb4" strokeWidth={dotSize} strokeLinecap="round" />

        <circle className="pulse-ring" cx={hq.x} cy={hq.y} r="9" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx={hq.x} cy={hq.y} r="7.5" fill="#ffffff" />
        <circle cx={hq.x} cy={hq.y} r="3.5" fill="#0b1f4b" />
      </svg>

      {label ? (
        <div
          aria-hidden="true"
          className="absolute hidden -translate-y-1/2 translate-x-5 border border-gold-400/50 bg-navy-950/90 px-3.5 py-2.5 lg:block"
          style={{ left: `${(hq.x / width) * 100}%`, top: `${(hq.y / height) * 100}%` }}
        >
          <p className="font-display text-sm font-semibold leading-none text-white">{label}</p>
          {sublabel ? (
            <p className="mt-1.5 whitespace-nowrap font-display text-[0.625rem] font-semibold uppercase leading-none tracking-[0.18em] text-gold-300">
              {sublabel}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
