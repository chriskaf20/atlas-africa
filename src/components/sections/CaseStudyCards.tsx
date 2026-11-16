import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";
import { href, routes } from "@/lib/routes";

type CaseStudyCardsProps = {
  locale: Locale;
  content: Content;
};

/** Aperçu des réalisations (page d'accueil). */
export function CaseStudyCards({ locale, content }: CaseStudyCardsProps) {
  const { caseStudies, common } = content;

  return (
    <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 pt-1 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:gap-6 md:overflow-visible md:p-0 md:grid-cols-2 md:gap-8">
      {caseStudies.map((study, index) => (
        <Reveal as="li" key={study.id} delay={index * 120} className="w-[86%] shrink-0 snap-center sm:w-[60%] md:w-auto">
          <article className="card card-hover group relative flex h-full flex-col overflow-hidden">
            <Media
              src={study.image}
              alt={study.imageAlt}
              title={study.name}
              caption={common.mediaSoon}
              rounded={false}
            />
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold-700">
                {study.sector}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy-900">
                <Link
                  href={`${href(locale, routes.work)}#${study.id}`}
                  className="after:absolute after:inset-0"
                >
                  {study.name}
                </Link>
              </h3>
              <p className="mt-3 text-muted">{study.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.deliverables.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-full border border-line bg-mist px-3 py-1.5 font-display text-xs font-medium text-navy-900"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
              <p
                aria-hidden="true"
                className="mt-auto flex items-center gap-2 pt-8 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
              >
                {common.viewCase}
                <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
