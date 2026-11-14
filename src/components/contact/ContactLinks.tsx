import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { site, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/cn";

type ContactLinksProps = {
  labels: { whatsapp: string; phone: string; email: string };
  whatsappMessage: string;
  /** "dark" = posé sur un fond bleu marine. */
  tone?: "light" | "dark";
  className?: string;
};

/** Accès directs : WhatsApp, téléphone, e-mail. */
export function ContactLinks({ labels, whatsappMessage, tone = "light", className }: ContactLinksProps) {
  const dark = tone === "dark";
  const { contact } = site;

  const items = [
    {
      key: "whatsapp",
      label: labels.whatsapp,
      value: contact.phoneDisplay,
      href: whatsappUrl(whatsappMessage),
      external: true,
      icon: <WhatsAppIcon className="h-5 w-5" />,
    },
    {
      key: "phone",
      label: labels.phone,
      value: contact.phoneDisplay,
      href: `tel:${contact.phoneE164}`,
      external: false,
      icon: <Phone aria-hidden="true" size={20} strokeWidth={1.5} />,
    },
    {
      key: "email",
      label: labels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
      icon: <Mail aria-hidden="true" size={20} strokeWidth={1.5} />,
    },
  ];

  return (
    <ul className={cn("divide-y", dark ? "divide-white/15" : "divide-line", className)}>
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-4 py-4"
          >
            <span
              className={cn(
                "grid h-11 w-11 shrink-0 place-items-center border transition-colors",
                dark
                  ? "border-gold-400/60 text-gold-300 group-hover:border-gold-300"
                  : "border-gold-500/70 text-navy-900 group-hover:border-navy-900",
              )}
            >
              {item.icon}
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  "block font-display text-xs font-semibold uppercase tracking-[0.18em]",
                  dark ? "text-gold-300" : "text-gold-700",
                )}
              >
                {item.label}
              </span>
              <span
                className={cn(
                  "mt-0.5 block break-all font-medium underline-offset-4 group-hover:underline",
                  dark ? "text-white" : "text-navy-900",
                )}
              >
                {item.value}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
