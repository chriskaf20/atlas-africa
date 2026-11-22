import { Container } from "@/components/ui/Container";
import type { LegalSection } from "@/content";

/** Corps des pages légales : sections titrées, texte lisible. */
export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold text-navy-900">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
