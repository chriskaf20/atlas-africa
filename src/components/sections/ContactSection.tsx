import { ContactLinks } from "@/components/contact/ContactLinks";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { Content } from "@/content";
import type { Locale } from "@/i18n/config";

type ContactSectionProps = {
  locale: Locale;
  content: Content;
};

/** Bandeau d'appel à l'action et formulaire court (bas de la page d'accueil). */
export function ContactSection({ locale, content }: ContactSectionProps) {
  const { contact } = content.home;
  const { contactPage, common } = content;

  return (
    <section id="contact" className="bg-mist py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="card grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="on-dark relative isolate bg-navy-900 p-8 text-white sm:p-12">
            <div aria-hidden="true" className="pattern-lines absolute inset-0 -z-10" />
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gold-500" />
            <Eyebrow tone="dark">{contact.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{contact.text}</p>

            <p className="mt-10 font-display text-sm font-semibold text-white">{contact.directTitle}</p>
            <ContactLinks
              tone="dark"
              className="mt-2"
              whatsappMessage={common.whatsappMessage}
              labels={{
                whatsapp: contactPage.whatsappLabel,
                phone: contactPage.phoneLabel,
                email: contactPage.emailLabel,
              }}
            />
          </div>

          <div className="p-8 sm:p-12">
            <ContactForm variant="short" content={content.form} locale={locale} />
          </div>
        </div>
      </Container>
    </section>
  );
}
