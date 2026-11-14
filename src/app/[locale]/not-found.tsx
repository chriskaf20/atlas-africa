import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { getContent } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { contactHref, href, routes } from "@/lib/routes";

export default function NotFound() {
  const locale = defaultLocale;
  const { notFound: t } = getContent(locale);
  return (
    <section className="py-28 lg:py-40">
      <Container className="max-w-2xl">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h1 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-5 text-lg text-muted">{t.text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={href(locale, routes.home)} variant="navy" arrow>
            {t.home}
          </ButtonLink>
          <ButtonLink href={contactHref(locale)} variant="outlineDark">
            {t.contact}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
