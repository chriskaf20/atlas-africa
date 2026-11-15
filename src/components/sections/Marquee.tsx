type MarqueeProps = {
  items: string[];
};

/**
 * Bandeau défilant en continu (décoratif : masqué aux lecteurs d'écran, le
 * contenu figure déjà ailleurs dans la page). La liste est répétée deux fois
 * pour boucler sans raccord ; le défilement se met en pause au survol.
 */
export function Marquee({ items }: MarqueeProps) {
  return (
    <div aria-hidden="true" className="marquee border-b border-line bg-white py-5">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-7 whitespace-nowrap pr-7 font-display text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-navy-900/75"
              >
                {item}
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
