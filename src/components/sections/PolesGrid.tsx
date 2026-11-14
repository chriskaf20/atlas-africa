import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { href, routes } from "@/lib/routes";

type PolesGridProps = {
  locale: Locale;
  content: Content;
};

/** Les 4 pôles en cartes cliquables (vers la page Services). */
export function PolesGrid({ locale, content }: PolesGridProps) {
  const { poles, common } = content;

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {poles.map((pole, index) => (
        <Reveal as="li" key={pole.id} delay={(index % 2) * 120}>
          <article className="group relative flex h-full flex-col border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-[0_30px_60px_-35px_rgb(11_31_75/0.45)] sm:p-9">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-0.5 w-16 bg-gold-500 transition-[width] duration-500 ease-out group-hover:w-full"
            />

            <div className="flex items-start justify-between gap-4">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                {common.poleLabel} {pole.number}
              </p>
              <Icon name={pole.icon} size={30} strokeWidth={1.25} className="shrink-0 text-navy-900" />
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold tracking-tight text-navy-900">
                <Link
                  href={`${href(locale, routes.services)}#${pole.id}`}
                  className="after:absolute after:inset-0"
                >
                  {pole.name}
                </Link>
              </h3>
              {pole.badge ? <Badge>{pole.badge}</Badge> : null}
            </div>
            <p className="mt-3 text-muted">{pole.tagline}</p>

            <ul className="mt-7 space-y-2.5 border-t border-line pt-6 text-[0.9375rem] text-ink">
              {pole.services.map((service) => (
                <li key={service.title} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-500" />
                  {service.title}
                </li>
              ))}
            </ul>

            <p
              aria-hidden="true"
              className="mt-auto flex items-center gap-2 pt-8 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
            >
              {common.discoverPole}
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
