import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Visual } from "@/components/ui/Visual";
import type { CaseStudy, Content } from "@/content";
import { poleVisuals } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { href, poleHref, routes } from "@/lib/routes";
import { getVisual } from "@/lib/visuals";
import { AccentTitle } from "./AccentTitle";
import { PolesShowcase, type PoleShowcaseItem } from "./PolesShowcase";

type SectionProps = { locale: Locale; content: Content };

/** Titre de section éditorial (même style sur toute la page d'accueil). */
export const sectionTitle =
  "mt-5 font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl";

/* ───────────── 2. Notre proposition de valeur ───────────── */
export function ValueProposition({ content }: SectionProps) {
  const { value } = content.home;
  return (
    <section aria-labelledby="valeur-title" className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>{value.eyebrow}</Eyebrow>
            <AccentTitle id="valeur-title" text={value.title} words={3} className={cn(sectionTitle, "text-navy-900")} />
          </div>
          <p className="text-lg leading-relaxed text-muted lg:col-span-5 lg:pb-2">{value.intro}</p>
        </Reveal>
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {value.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 80} className="relative pt-6">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line" />
              <span aria-hidden="true" className="draw-line absolute left-0 top-0 h-px w-12 bg-gold-500" />
              <span className="icon-tile grid h-11 w-11 place-items-center">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="mt-5 font-display text-[1.0625rem] font-semibold leading-snug text-navy-900">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────── 3. Nos quatre pôles ───────────── */
export function PolesCards({ locale, content }: SectionProps) {
  const { poles: labels } = content.home;
  const items: PoleShowcaseItem[] = content.poles.map((pole) => {
    const visualId = poleVisuals[pole.id];
    return {
      id: pole.id,
      number: pole.number,
      name: pole.name,
      tagline: pole.tagline,
      summary: pole.summary,
      services: pole.services.filter((service) => service.delivery !== "development").map((service) => service.title),
      href: poleHref(locale, pole.id),
      visual: visualId ? getVisual(visualId, locale) : null,
    };
  });
  return (
    <section id="poles" aria-labelledby="poles-title" className="on-dark relative isolate overflow-hidden bg-navy-950 py-16 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_0%_0%,rgb(44_74_143/0.45),transparent_70%)]"
      />
      <Container>
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">{labels.eyebrow}</Eyebrow>
            <AccentTitle id="poles-title" text={labels.title} words={3} className={cn(sectionTitle, "text-white")} accentClassName="text-gold-300" />
          </div>
          <p className="text-lg leading-relaxed text-white/75 lg:col-span-5 lg:pb-2">{labels.intro}</p>
        </Reveal>
        <Reveal className="mt-12 lg:mt-16" delay={100}>
          <PolesShowcase poles={items} poleLabel={content.common.poleLabel} discoverLabel={content.common.discoverPole} />
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────── 5. Projets & Réalisations (cartes) ───────────── */
export function WorkCard({ study, locale, content }: { study: CaseStudy; locale: Locale; content: Content }) {
  const { workPage, common } = content;
  return (
    <article className="group card card-hover relative flex h-full flex-col overflow-hidden">
      <Media
        src={study.image}
        alt={study.imageAlt}
        title={study.name}
        caption={study.sector}
        ratio="aspect-[16/10]"
        rounded={false}
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
              study.status === "completed" && "bg-navy-900 text-white",
              study.status === "ongoing" && "bg-gold-200/60 text-gold-700",
              study.status === "development" && "border border-navy-900/25 text-navy-700",
            )}
          >
            {common.status[study.status]}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin aria-hidden="true" size={14} className="text-gold-700" />
            {study.location}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-navy-900">
          <Link href={`${href(locale, routes.work)}#${study.id}`} className="after:absolute after:inset-0">
            {study.name}
          </Link>
        </h3>
        <dl className="mt-4 space-y-2 text-[0.9375rem]">
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-navy-900">{workPage.fields.sector} :</dt>
            <dd className="text-muted">{study.sector}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-semibold text-navy-900">{workPage.fields.intervention} :</dt>
            <dd className="text-muted">{study.intervention}</dd>
          </div>
        </dl>
        <p
          aria-hidden="true"
          className="mt-auto flex items-center gap-2 pt-6 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-navy-900"
        >
          {workPage.viewCase}
          <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </p>
      </div>
    </article>
  );
}

export function WorkSection({ locale, content }: SectionProps) {
  const { work } = content.home;
  return (
    <section aria-labelledby="realisations-title" className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>{work.eyebrow}</Eyebrow>
            <AccentTitle id="realisations-title" text={work.title} words={3} className={cn(sectionTitle, "text-navy-900")} />
            <p className="mt-6 text-lg leading-relaxed text-muted">{work.intro}</p>
          </div>
          <ButtonLink href={href(locale, routes.work)} variant="outlineDark" arrow className="self-start lg:self-auto">
            {content.common.allWork}
          </ButtonLink>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {content.caseStudies.map((study, index) => (
            <Reveal as="li" key={study.id} delay={index * 100}>
              <WorkCard study={study} locale={locale} content={content} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────── Notre méthode : frise d'étapes ─────────────
   Grand écran : frise horizontale, une ligne dorée relie les étapes.
   Mobile : frise verticale, la ligne court à gauche des étapes. */
export function MethodTimeline({
  content,
  labels,
  tone = "light",
}: {
  content: Content;
  labels: { eyebrow: string; title: string; intro: string };
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <section
      aria-labelledby="methode-title"
      className={cn(
        "relative isolate overflow-hidden py-16 sm:py-24 lg:py-28",
        dark ? "on-dark bg-navy-950 text-white" : "bg-white",
      )}
    >
      {dark ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_100%_0%,rgb(44_74_143/0.45),transparent_70%)]"
        />
      ) : null}
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone={dark ? "dark" : "light"} className="justify-center">
            {labels.eyebrow}
          </Eyebrow>
          <AccentTitle
            id="methode-title"
            text={labels.title}
            words={3}
            className={cn(sectionTitle, dark ? "text-white" : "text-navy-900")}
            accentClassName={dark ? "text-gold-300" : "text-navy-900"}
          />
          <p className={cn("mt-6 text-lg leading-relaxed", dark ? "text-white/75" : "text-muted")}>{labels.intro}</p>
        </Reveal>

        <Reveal className="relative mt-14 lg:mt-20">
          {/* Ligne de la frise (se trace à l'apparition) */}
          <span
            aria-hidden="true"
            className={cn("absolute bottom-6 left-[1.375rem] top-6 w-px lg:hidden", dark ? "bg-white/15" : "bg-line")}
          />
          <span
            aria-hidden="true"
            className={cn("absolute left-[8%] right-[8%] top-[1.375rem] hidden h-px lg:block", dark ? "bg-white/15" : "bg-line")}
          />
          <span
            aria-hidden="true"
            className="draw-line absolute left-[8%] right-[8%] top-[1.375rem] hidden h-px bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 lg:block"
          />

          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
            {content.method.map((step, index) => (
              <li key={step.title} className="group relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <span
                  className={cn(
                    "relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border font-display text-sm font-semibold tabular-nums transition-all duration-300",
                    "group-hover:scale-110 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-navy-950",
                    dark ? "border-gold-400/70 bg-navy-950 text-gold-300" : "border-gold-500 bg-white text-gold-700",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 pt-1.5 lg:mt-6 lg:pt-0">
                  <h3 className={cn("font-display text-lg font-semibold", dark ? "text-white" : "text-navy-900")}>{step.title}</h3>
                  <p className={cn("mt-2 text-[0.9375rem] leading-relaxed", dark ? "text-white/70" : "text-muted")}>
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────── 7. Présentation du groupe ───────────── */
export function GroupTeaser({ locale, content }: SectionProps) {
  const { group } = content.home;
  const visual = getVisual("about-lubumbashi", locale);
  return (
    <section aria-labelledby="groupe-title" className="bg-mist py-16 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {visual.src ? (
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-line shadow-[0_40px_80px_-40px_rgb(11_31_75/0.45)]">
              <Visual visual={visual} sizes="(min-width: 1024px) 34vw, 90vw" decorative />
            </div>
          </Reveal>
        ) : null}
        <Reveal className={visual.src ? "lg:col-span-7" : "lg:col-span-8"} delay={120}>
          <Eyebrow>{group.eyebrow}</Eyebrow>
          <AccentTitle id="groupe-title" text={group.title} words={3} className={cn(sectionTitle, "text-navy-900")} />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{group.text}</p>
          <ButtonLink href={href(locale, routes.group)} variant="navy" arrow className="mt-9">
            {group.cta}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────── Industries & Secteurs : une ligne de texte ───────────── */
export function SectorsLine({ locale, content }: SectionProps) {
  const { sectors } = content.home;
  return (
    <section id="secteurs" aria-labelledby="secteurs-title" className="scroll-mt-24 border-y border-line bg-white py-14 sm:py-16">
      <Container>
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <Eyebrow>{sectors.eyebrow}</Eyebrow>
            <h2 id="secteurs-title" className="mt-4 font-display text-2xl font-light leading-tight tracking-[-0.01em] text-navy-900 sm:text-3xl">
              {sectors.title}
            </h2>
          </div>
          <Link
            href={href(locale, routes.sectors)}
            className="inline-flex min-h-11 shrink-0 items-center font-display text-sm font-semibold uppercase tracking-[0.12em] text-navy-900 underline decoration-gold-500 underline-offset-8 hover:decoration-2"
          >
            {sectors.cta}
          </Link>
        </Reveal>
        <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-base font-medium text-navy-900 sm:text-lg">
          {content.sectors.map((sector, index) => (
            <li key={sector.id} className="flex items-center gap-3">
              {index > 0 ? <span aria-hidden="true" className="text-gold-500">·</span> : null}
              {sector.short}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
