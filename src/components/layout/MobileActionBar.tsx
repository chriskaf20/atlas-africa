import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { site, whatsappUrl } from "@/content/site";

type MobileActionBarProps = {
  /** Nom de la barre, lu par les lecteurs d'écran. */
  label: string;
  call: string;
  whatsapp: string;
  quote: { href: string; label: string };
  whatsappMessage: string;
};

const itemClass =
  "flex min-h-14 flex-col items-center justify-center gap-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em]";

/**
 * Appeler, WhatsApp, devis : les trois actions utiles, toujours sous le pouce.
 * Remplace le bouton WhatsApp flottant sur petit écran (il masquait le texte).
 */
export function MobileActionBar({ label, call, whatsapp, quote, whatsappMessage }: MobileActionBarProps) {
  return (
    <nav
      aria-label={label}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_30px_-18px_rgb(11_31_75/0.35)] backdrop-blur-md lg:hidden print:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a href={`tel:${site.contact.phoneE164}`} className={`${itemClass} text-navy-900`}>
            <Phone aria-hidden="true" size={20} strokeWidth={1.75} />
            {call}
          </a>
        </li>
        <li className="border-x border-line">
          <a
            href={whatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemClass} text-whatsapp`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            {whatsapp}
          </a>
        </li>
        <li>
          <Link href={quote.href} className={`${itemClass} bg-navy-900 text-white`}>
            <FileText aria-hidden="true" size={20} strokeWidth={1.75} />
            {quote.label}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
