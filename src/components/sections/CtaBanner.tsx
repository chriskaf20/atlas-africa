import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { ButtonLink, buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/content/site";

type CtaBannerProps = {
  title: string;
  text: string;
  button: { href: string; label: string };
  whatsapp: { label: string; message: string };
};

/** Bandeau d'appel à l'action placé en bas des pages intérieures. */
export function CtaBanner({ title, text, button, whatsapp }: CtaBannerProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="pattern-lines pattern-drift absolute inset-0 -z-10" />
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gold-500" />
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <ButtonLink href={button.href} variant="gold" arrow>
            {button.label}
          </ButtonLink>
          <a
            href={whatsappUrl(whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("outlineLight")}
          >
            <WhatsAppIcon className="h-4 w-4" />
            {whatsapp.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
