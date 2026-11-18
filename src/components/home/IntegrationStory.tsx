import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { Content } from "@/content";
import { poleVisuals } from "@/content/visuals";
import type { Locale } from "@/i18n/config";
import { contactHref } from "@/lib/routes";
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
  const { integration } = content.home;
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

        {/* ───── La méthode, en une ligne (le détail se discute au premier échange) ───── */}
        <div className="mt-14 flex flex-col gap-8 border-t border-line pt-10 lg:mt-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold-700">
              {integration.methodTitle}
            </h3>
            <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              {content.method.map((step, index) => (
                <li key={step.title} className="flex items-center gap-3 font-display text-[0.9375rem] font-semibold text-navy-900">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/60 text-xs tabular-nums text-gold-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                  {index < content.method.length - 1 ? (
                    <span aria-hidden="true" className="hidden h-px w-6 bg-gold-500/60 sm:block" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
          <ButtonLink href={contactHref(locale)} variant="gold" arrow className="shrink-0 self-start lg:self-auto">
            {integration.cta}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
