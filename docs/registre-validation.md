# Registre de validation — informations à confirmer

Document interne (non publié : le dossier `docs/` n'est pas servi par le site).
Tant qu'une information n'est pas confirmée, elle **n'apparaît pas** sur le site public.

| # | Information manquante | Page concernée | Contenu requis | Source de vérification | Action recommandée |
|---|---|---|---|---|---|
| 1 | Adresse postale complète | Contact, pied de page, données structurées, mentions légales | Rue, numéro, quartier, commune | Bail / statuts | Renseigner `streetAddress` dans `src/content/site.ts` (l'adresse s'affiche alors automatiquement) |
| 2 | Siège social (Kinshasa ?) et implantation de Lubumbashi | Le Groupe, mentions légales | Ville du siège, adresse, rôle de chaque implantation | Statuts, RCCM | Confirmer avant toute mention de Kinshasa |
| 3 | Numéro RCCM, Id. Nat., numéro d'impôt | Mentions légales | Identifiants officiels | Extrait RCCM, attestation fiscale | Ajouter dans `legalPage` une fois confirmés |
| 4 | Directeur Général et Directeur Général Adjoint | Le Groupe → Équipe dirigeante | Nom, fonction, photo professionnelle, biographie courte | Validation de la direction | Renseigner `groupPage.leadership.leaders` (la section s'affiche dès qu'il y a une entrée) |
| 5 | Histoire du groupe | Le Groupe → Notre histoire | Date de création, étapes clés | Direction, statuts | Renseigner `groupPage.history.items` (la section s'affiche dès qu'il y a une entrée) |
| 6 | Statut réel de LED Atlas | Réalisations, offre LED Atlas | Écrans installés ou en développement, nombre, emplacements confirmés | Direction commerciale | Mettre à jour `status` et `summary` de LED Atlas dans `caseStudies`, et ajouter les emplacements confirmés |
| 7 | Statistiques d'audience LED Atlas | Offre LED Atlas | Passages, diffusions, horaires mesurés | Rapports de diffusion | Ne rien publier sans mesure |
| 8 | Résultats mesurés Zando Yeto | Réalisations | Produits en ligne, vues vidéo, portée campagnes | Rapports Google / Meta | Ajouter `results` une fois les chiffres disponibles |
| 9 | Autres projets (achevés, en cours, en développement) | Réalisations, accueil | Nom, secteur, ville, intervention, statut, résultat | Contrats, bons de commande, autorisation client | Ajouter dans `caseStudies` avec l'accord du client |
| 10 | Véhicules AAG Mobilité : capacités et conditions | Offre AAG Mobilité | Nombre de places, conditions de réservation, zones, tarifs éventuels | Responsable mobilité | Compléter `offers[aag-mobilite]` |
| 11 | Service d'envoi des formulaires en production | Formulaires | Clé Resend et domaine vérifié | Tableau de bord Vercel / Resend | Vérifier `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` ; faire un envoi test |
| 12 | Intégration CRM | Formulaires | Outil utilisé (HubSpot, Zoho, tableur…) | Équipe commerciale | Brancher dans `src/lib/mailer.ts` (`deliver`) |
| 13 | Hébergeur du site | Mentions légales | Nom et adresse de l'hébergeur | Compte d'hébergement | Ajouter une section « Hébergement » dans `legalPage.sections` |
| 14 | Photographies authentiques | Toutes les pages | Photos d'équipes, de chantiers et de missions réelles, avec autorisation | Banque photo interne | Remplacer les visuels d'illustration (`src/content/visuals.ts`) |
| 15 | Agréments / autorisations (import-export, dédouanement, gestion des déchets…) | Pôles Supply et People | Liste des autorisations détenues | Documents administratifs | Ne présenter ces activités qu'« avec des partenaires habilités » tant que non confirmé |
| 16 | Profils de réseaux sociaux officiels | Pied de page, données structurées | URL LinkedIn, Facebook… | Comptes officiels | Ajouter dans `site.ts` (`sameAs`) |

## Points techniques à suivre

- **Préchargement des liens (`?_rsc=…` en 404 dans la console)** : le français est servi sans préfixe grâce à une réécriture dans `src/proxy.ts`. Le routeur de Next prend alors parfois `/mentions-legales` pour la page `[locale]` et précharge le mauvais segment. La navigation fonctionne (repli automatique), mais ces requêtes sont perdues. Correction durable : servir aussi le français sous `/fr/…` (avec redirection de l'ancien format), ou isoler la langue par défaut dans un groupe de routes statique.
- **Limite d'envois du formulaire** : en mémoire, propre à chaque instance du serveur. Pour une protection plus stricte, utiliser un stockage partagé (Vercel KV, Upstash) ou un captcha respectueux de la vie privée (Cloudflare Turnstile).
