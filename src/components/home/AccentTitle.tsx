import { cn } from "@/lib/cn";

/**
 * Titre éditorial : le texte vient du contenu (simple chaîne) et sa fin est
 * mise en valeur (semi-gras italique), sans rien écrire en dur.
 *
 * Règle de découpe :
 *  - si le titre contient une virgule, la partie qui suit la dernière virgule
 *    est mise en valeur (quand elle reste courte) ;
 *  - sinon, les `words` derniers mots.
 */

const MAX_ACCENT_WORDS = 6;

export function splitAccent(text: string, words = 3): { lead: string; accent: string } {
  const comma = text.lastIndexOf(", ");
  if (comma > 0) {
    const tail = text.slice(comma + 2).trim();
    if (tail && tail.split(/\s+/).length <= MAX_ACCENT_WORDS) {
      return { lead: text.slice(0, comma + 1), accent: tail };
    }
  }

  const parts = text.trim().split(/\s+/);
  // Titre très court : on garde au moins un mot sans mise en valeur.
  const count = Math.max(1, Math.min(words, parts.length - 1));
  if (parts.length < 2) return { lead: "", accent: text };
  return {
    lead: parts.slice(0, parts.length - count).join(" "),
    accent: parts.slice(parts.length - count).join(" "),
  };
}

type AccentTitleProps = {
  text: string;
  /** Nombre de mots mis en valeur quand le titre n'a pas de virgule. */
  words?: number;
  as?: "h2" | "h3";
  id?: string;
  className?: string;
  /** Classes de la partie mise en valeur (couleur selon le fond). */
  accentClassName?: string;
};

export function AccentTitle({
  text,
  words = 3,
  as: Heading = "h2",
  id,
  className,
  accentClassName,
}: AccentTitleProps) {
  const { lead, accent } = splitAccent(text, words);
  return (
    <Heading id={id} className={className}>
      {lead ? <>{lead} </> : null}
      <span className={cn("font-semibold italic", accentClassName)}>{accent}</span>
    </Heading>
  );
}
