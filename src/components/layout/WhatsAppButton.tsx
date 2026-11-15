import { WhatsAppIcon } from "@/components/brand/WhatsAppIcon";
import { whatsappUrl } from "@/content/site";

type WhatsAppButtonProps = {
  label: string;
  /** Message prérempli dans la conversation. */
  message: string;
};

/** Bouton WhatsApp flottant, présent sur toutes les pages. */
export function WhatsAppButton({ label, message }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 sm:right-6 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(6_18_46/0.55)] ring-2 ring-white transition-transform duration-200 hover:scale-105 print:hidden"
    >
      <span aria-hidden="true" className="wa-ping absolute inset-0 rounded-full bg-whatsapp" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
