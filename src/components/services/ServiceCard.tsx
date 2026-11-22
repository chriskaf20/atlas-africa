import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { Content, Delivery, PoleService } from "@/content";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { offerHref } from "@/lib/routes";

/**
 * Carte d'un service : icône, intitulé, description ou détail, et qui le
 * réalise (nos équipes, des partenaires qualifiés, ou en développement).
 */
const deliveryStyle: Record<Delivery, string> = {
  internal: "border-navy-900/20 bg-navy-900/[0.04] text-navy-800",
  partners: "border-gold-500/50 bg-gold-200/30 text-gold-700",
  development: "border-dashed border-navy-900/30 text-muted",
};

export function ServiceCard({
  service,
  locale,
  content,
}: {
  service: PoleService;
  locale: Locale;
  content: Content;
}) {
  const offer = content.offers.find((item) => item.serviceTitle === service.title);
  return (
    <article
      className={cn(
        "card card-hover group relative flex h-full flex-col p-6 sm:p-7",
        service.delivery === "development" && "border-dashed",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="icon-tile grid h-12 w-12 shrink-0 place-items-center">
          <Icon name={service.icon} size={24} strokeWidth={1.4} />
        </span>
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 text-right font-display text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.1em]",
            deliveryStyle[service.delivery],
          )}
        >
          {content.common.delivery[service.delivery]}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-snug text-navy-900">{service.title}</h3>
      {service.description ? <p className="mt-3 text-muted">{service.description}</p> : null}
      {service.items.length > 0 ? (
        <ul className="mt-4 space-y-2 text-[0.9375rem] text-ink">
          {service.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {offer ? (
        <Link
          href={offerHref(locale, offer.id)}
          className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900 after:absolute after:inset-0"
        >
          {content.common.discoverOffer} · {offer.name}
          <ArrowRight aria-hidden="true" size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      ) : null}
    </article>
  );
}

export function ServicesGrid({ services, locale, content }: { services: PoleService[]; locale: Locale; content: Content }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal as="li" key={service.title} delay={(index % 3) * 80}>
          <ServiceCard service={service} locale={locale} content={content} />
        </Reveal>
      ))}
    </ul>
  );
}

