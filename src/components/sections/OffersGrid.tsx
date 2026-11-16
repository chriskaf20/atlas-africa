import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { offerHref } from "@/lib/routes";

type OffersGridProps = {
  locale: Locale;
  content: Content;
};

/** Les offres phares en cartes cliquables (vers leur page dédiée). */
export function OffersGrid({ locale, content }: OffersGridProps) {
  const { offers, common } = content;

  return (
    <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 pt-1 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:gap-6 md:overflow-visible md:p-0 md:grid-cols-3">
      {offers.map((offer, index) => (
        <Reveal as="li" key={offer.id} delay={index * 110} className="w-[82%] shrink-0 snap-center sm:w-[46%] md:w-auto">
          <article className="card card-hover group relative flex h-full flex-col p-7 sm:p-8">
            <span className="icon-tile grid h-14 w-14 place-items-center">
              <Icon name={offer.icon} size={28} strokeWidth={1.4} />
            </span>
            <p className="mt-7 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
              {offer.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-900">
              <Link href={offerHref(locale, offer.id)} className="after:absolute after:inset-0">
                {offer.name}
              </Link>
            </h3>
            <p className="mt-3 text-muted">{offer.summary}</p>
            <p
              aria-hidden="true"
              className="mt-auto flex items-center gap-2 pt-8 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
            >
              {common.discoverOffer}
              <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
            </p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
