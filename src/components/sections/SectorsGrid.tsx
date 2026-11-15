import { Icon } from "@/components/ui/Icon";
import type { Content } from "@/content";

type SectorsGridProps = {
  sectors: Content["sectors"];
};

/** Secteurs servis : grille d'icônes séparées par des filets fins. */
export function SectorsGrid({ sectors }: SectorsGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
      {sectors.map((sector) => (
        <li key={sector.label} className="group flex flex-col gap-5 bg-white p-6 transition-colors duration-300 hover:bg-mist sm:p-8">
          <span className="grid h-12 w-12 place-items-center icon-tile transition-transform duration-300 group-hover:-translate-y-0.5">
            <Icon name={sector.icon} size={24} strokeWidth={1.4} />
          </span>
          <span className="font-display text-[0.9375rem] font-semibold leading-snug text-navy-900">
            {sector.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
