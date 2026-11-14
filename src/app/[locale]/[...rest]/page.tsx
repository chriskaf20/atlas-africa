import { notFound } from "next/navigation";

/** Toute URL inconnue affiche la page 404 aux couleurs du site. */
export default function CatchAll() {
  notFound();
}
