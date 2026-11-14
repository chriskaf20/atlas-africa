import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: {
    label: string;
    home: { href: string; label: string };
    current: string;
  };
};

/** En-tête des pages intérieures. */
export function PageHero({ eyebrow, title, intro, breadcrumb }: PageHeroProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(80%_90%_at_90%_0%,rgb(27_55_118/0.9),transparent_65%),linear-gradient(180deg,#0b1f4b_0%,#06122e_100%)]"
      />
      {/* Cercles concentriques, rappel de la carte de l'accueil. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        fill="none"
        className="absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] sm:-right-24"
      >
        <circle cx="300" cy="300" r="90" stroke="#d6b45c" strokeOpacity="0.4" />
        <circle cx="300" cy="300" r="180" stroke="#d6b45c" strokeOpacity="0.24" />
        <circle cx="300" cy="300" r="290" stroke="#d6b45c" strokeOpacity="0.12" />
      </svg>

      <Container className="pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-12">
        <nav aria-label={breadcrumb.label}>
          <ol className="flex items-center gap-2 font-display text-xs font-medium tracking-wide text-white/70">
            <li>
              <Link href={breadcrumb.home.href} className="inline-flex min-h-8 items-center hover:text-white">
                {breadcrumb.home.label}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="text-white">
              {breadcrumb.current}
            </li>
          </ol>
        </nav>

        <div className="mt-10 max-w-3xl lg:mt-14">
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[2rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl sm:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>
        </div>
      </Container>
    </section>
  );
}
