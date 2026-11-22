import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { Content } from "@/content";
import { poleVisuals } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { getVisual } from "@/lib/visuals";
import { splitAccent } from "./AccentTitle";
import { StorySteps, type StoryStep } from "./StorySteps";

type IntegrationStoryProps = {
  locale: Locale;
  content: Content;
};

/**
 * Comment ça marche (#comment-ca-marche) : un scénario type où les quatre
 * pôles s'enchaînent. Sur grand écran, un visuel reste fixé à gauche et
 * change au fil des étapes ; sur mobile, chaque étape porte son visuel.
 * En dessous, la méthode en quatre temps et un appel à l'action.
 */
export function IntegrationStory({ locale, content }: IntegrationStoryProps) {
  const { integration } = content.howItWorksPage;
  const { lead, accent } = splitAccent(integration.title);

  const steps: StoryStep[] = integration.steps.map((step) => {
    const pole = content.poles.find((item) => item.id === step.pole);
    const visualId = poleVisuals[step.pole];
    return {
      title: step.title,
      text: step.text,
      items: step.items,
      pole: pole ? { number: pole.number, name: pole.name, icon: pole.icon } : null,
      visual: visualId ? getVisual(visualId, locale) : null,
    };
  });

  return (
    <section
      id="comment-ca-marche"
      aria-labelledby="comment-ca-marche-title"
      className="relative bg-mist py-16 sm:py-24 lg:py-32"
    >
      <Container>
        {/* ───── En-tête ───── */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow tone="light">{integration.eyebrow}</Eyebrow>
            <h2
              id="comment-ca-marche-title"
              className="mt-6 font-display text-[2rem] font-light leading-[1.05] tracking-[-0.02em] text-navy-900 sm:text-5xl lg:text-6xl"
            >
              {lead ? <>{lead} </> : null}
              <span className="font-semibold italic">{accent}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <Badge tone="gold">{integration.scenarioLabel}</Badge>
            <p className="mt-4 text-lg leading-relaxed text-muted">{integration.intro}</p>
          </div>
        </div>

        {/* ───── Le scénario, étape par étape ───── */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <StorySteps
            steps={steps}
            stepLabel={integration.stepLabel}
            poleLabel={content.common.poleLabel}
            listLabel={integration.scenarioLabel}
          />
        </div>

      </Container>
    </section>
  );
}
