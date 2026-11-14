import { Reveal } from "@/components/ui/Reveal";
import type { Content } from "@/content";

type MethodStepsProps = {
  steps: Content["method"];
};

/** Méthode en 4 étapes, sur fond bleu marine. */
export function MethodSteps({ steps }: MethodStepsProps) {
  return (
    <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {steps.map((step, index) => (
        <Reveal as="li" key={step.title} delay={index * 110}>
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-400 font-display text-sm font-semibold text-gold-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-r from-gold-500/70 to-transparent"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/75">{step.description}</p>
        </Reveal>
      ))}
    </ol>
  );
}
