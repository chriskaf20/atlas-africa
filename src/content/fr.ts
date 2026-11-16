/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CONTENU DU SITE — FRANÇAIS
 * ─────────────────────────────────────────────────────────────────────────
 *  Tous les textes du site sont ici. Modifiez les valeurs entre guillemets,
 *  sans toucher aux noms des champs (à gauche des « : »).
 *
 *  Les coordonnées (téléphone, e-mail, adresse, WhatsApp) sont dans
 *  `src/content/site.ts`.
 *
 *  Les champs `icon` renvoient à la liste d'icônes de
 *  `src/components/ui/Icon.tsx`.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const fr = {
  /* ───────────── Référencement (SEO) ───────────── */
  meta: {
    title: "ATLAS AFRICA GROUP — Votre partenaire d'affaires à Lubumbashi, RDC",
    description:
      "ATLAS AFRICA GROUP SARL accompagne les entreprises et les investisseurs en RDC : développement d'affaires, approvisionnement et logistique, personnel et services aux sites, communication digitale. Basé à Lubumbashi, Haut-Katanga.",
    keywords: [
      "ATLAS AFRICA GROUP",
      "Lubumbashi",
      "Haut-Katanga",
      "RDC",
      "développement d'affaires",
      "apport d'affaires",
      "approvisionnement",
      "logistique",
      "transport avec chauffeur",
      "recrutement",
      "nettoyage industriel",
      "création de site web",
      "publicité en ligne",
      "écrans LED publicitaires",
    ],
    ogImageAlt: "ATLAS AFRICA GROUP — Votre partenaire d'affaires en RDC",
  },

  /* ───────────── Navigation ───────────── */
  nav: {
    home: "Accueil",
    services: "Services",
    work: "Réalisations",
    about: "À propos",
    contact: "Contact",
    cta: "Demander un devis",
    skipToContent: "Aller au contenu",
    mainLabel: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    homeLinkLabel: "ATLAS AFRICA GROUP — retour à l'accueil",
    languageLabel: "Langue",
    offers: "Offres",
  },

  /* ───────────── Libellés communs ───────────── */
  common: {
    quoteCta: "Demander un devis",
    servicesCta: "Découvrir nos services",
    discoverPole: "Découvrir le pôle",
    poleLabel: "Pôle",
    newBadge: "Nouveau",
    viewCase: "Voir la réalisation",
    allWork: "Toutes nos réalisations",
    whatsappCta: "Discuter sur WhatsApp",
    whatsappMessage: "Bonjour, je souhaite échanger avec ATLAS AFRICA GROUP au sujet de…",
    mediaSoon: "Visuel à venir",
    videoSoon: "Vidéo à venir",
    figuresNote: "Chiffres communiqués prochainement.",
    discoverOffer: "Découvrir l'offre",
    callShort: "Appeler",
    quoteShort: "Devis",
    quickActions: "Actions rapides",
    offerLabel: "Offre",
    directContact: "Ou contactez-nous directement",
    breadcrumbLabel: "Fil d'Ariane",
  },

  /* ───────────── Les 4 pôles et leurs services ───────────── */
  poles: [
    {
      id: "business-projects",
      number: "01",
      icon: "briefcase",
      name: "Business & Projects",
      badge: null as string | null,
      tagline: "Ouvrir les bonnes portes, structurer vos projets.",
      summary:
        "Nous vous aidons à entrer sur le marché congolais, à trouver les bons partenaires et à mener vos projets, de l'étude à la réalisation.",
      services: [
        {
          icon: "handshake",
          title: "Développement d'affaires",
          badge: null as string | null,
          description: null as string | null,
          items: [
            "Apport d'affaires",
            "Recherche de partenaires",
            "Représentation commerciale",
            "Aide à la négociation",
            "Accompagnement à l'implantation en RDC",
          ],
        },
        {
          icon: "clipboard",
          title: "Études et gestion de projets",
          badge: null,
          description: null,
          items: [
            "Études de marché et de faisabilité",
            "Business plans",
            "Montage de projets",
            "Planification",
            "Coordination et suivi de réalisation",
          ],
        },
        {
          icon: "energy",
          title: "Technologies et énergie",
          badge: null,
          description: null,
          items: [
            "Solutions numériques",
            "Digitalisation des processus de gestion",
            "Projets solaires et efficacité énergétique, avec des partenaires techniques",
          ],
        },
      ],
      /** Questions fréquentes affichées sous le pôle. */
      faq: [
        {
          question: "Accompagnez-vous les entreprises étrangères qui s'implantent en RDC ?",
          answer: "Oui. Nous recherchons des partenaires, assurons une représentation commerciale, aidons à la négociation et accompagnons l'implantation sur place.",
        },
        {
          question: "Pouvez-vous intervenir sur une seule étape d'un projet ?",
          answer: "Oui. Vous pouvez nous confier une étude seule (marché, faisabilité, business plan) ou la coordination complète du projet, du montage au suivi de réalisation.",
        },
        {
          question: "Comment démarre une collaboration ?",
          answer: "Par un échange pour qualifier votre besoin. Nous vous remettons ensuite une proposition, puis un contrat qui précise ce qui sera réalisé.",
        },
      ],
      /** Vidéos et visuels présentés sous les services du pôle. */
      showcase: null as null | {
        title: string;
        intro: string;
        items: {
          src: string;
          poster: string;
          title: string;
          caption: string;
          orientation: "landscape" | "portrait";
        }[];
      },
      featured: null as null | {
        eyebrow: string;
        title: string;
        description: string;
        items: string[];
        cta: string;
        /** Valeur présélectionnée dans le formulaire de contact. */
        serviceValue: string;
      },
    },
    {
      id: "supply-logistics",
      number: "02",
      icon: "truck",
      name: "Supply & Logistics",
      badge: null,
      tagline: "Approvisionner, acheminer, déplacer.",
      summary:
        "Du sourcing à la livraison, nous sécurisons vos approvisionnements et organisons vos flux avec des opérateurs qualifiés.",
      services: [
        {
          icon: "package",
          title: "Approvisionnement et commerce",
          badge: null,
          description: null,
          items: [
            "Sourcing et qualification de fournisseurs",
            "Achats",
            "Négoce",
            "Import-export",
            "Fourniture d'équipements et de consommables",
          ],
        },
        {
          icon: "warehouse",
          title: "Transport et logistique",
          badge: null,
          description: null,
          items: [
            "Organisation des expéditions",
            "Entreposage",
            "Distribution avec des opérateurs qualifiés",
          ],
        },
        {
          icon: "car",
          title: "AAG Mobilité",
          badge: null,
          description: "Transport premium avec chauffeur.",
          items: [
            "Berline et SUV Prado",
            "Transferts hôtels et aéroport",
            "Mise à disposition pour les entreprises",
            "Missions Lubumbashi – Likasi – Kolwezi",
          ],
        },
      ],
      /** Questions fréquentes affichées sous le pôle. */
      faq: [
        {
          question: "Que pouvez-vous fournir ?",
          answer: "Des équipements et des consommables. Nous recherchons et qualifions les fournisseurs, puis nous gérons les achats, le négoce et l'import-export selon votre besoin.",
        },
        {
          question: "Sur quels trajets circule AAG Mobilité ?",
          answer: "À Lubumbashi, pour les transferts entre hôtels et aéroport, et sur l'axe Lubumbashi – Likasi – Kolwezi pour les missions.",
        },
        {
          question: "Assurez-vous vous-mêmes le transport des marchandises ?",
          answer: "Nous organisons les expéditions, l'entreposage et la distribution avec des opérateurs qualifiés, et vous gardez un seul interlocuteur.",
        },
      ],
      showcase: null,
      featured: null,
    },
    {
      id: "people-facilities",
      number: "03",
      icon: "users",
      name: "People & Facilities",
      badge: null,
      tagline: "Les équipes et les services qui font vivre vos sites.",
      summary:
        "Personnel, propreté, environnement : nous prenons en charge les fonctions de soutien pour que vos équipes se concentrent sur leur métier.",
      services: [
        {
          icon: "userCheck",
          title: "Ressources humaines",
          badge: null,
          description: null,
          items: [
            "Recrutement et sélection",
            "Mise à disposition de personnel",
            "Formation",
            "Prestations externalisées",
          ],
        },
        {
          icon: "sparkles",
          title: "AAG Cleaning",
          badge: null,
          description: null,
          items: [
            "Entretien régulier de bureaux, commerces et résidences",
            "Remise en état",
            "Nettoyage de fin de chantier",
            "Nettoyage industriel",
          ],
        },
        {
          icon: "drone",
          title: "Nettoyage par drone",
          badge: "Bientôt disponible",
          description: null,
          items: ["Façades", "Toitures", "Panneaux solaires"],
        },
        {
          icon: "leaf",
          title: "Environnement",
          badge: null,
          description: null,
          items: [
            "Entretien des espaces verts",
            "Assainissement",
            "Gestion des déchets avec des partenaires habilités",
          ],
        },
      ],
      /** Questions fréquentes affichées sous le pôle. */
      faq: [
        {
          question: "Quels locaux nettoyez-vous ?",
          answer: "Les bureaux, les commerces et les résidences, en entretien régulier. Nous assurons aussi la remise en état, le nettoyage de fin de chantier et le nettoyage industriel.",
        },
        {
          question: "Le nettoyage par drone est-il déjà disponible ?",
          answer: "Pas encore. Ce service pour façades, toitures et panneaux solaires sera bientôt proposé : contactez-nous pour être prévenu de son lancement.",
        },
        {
          question: "Pouvez-vous mettre du personnel à disposition ?",
          answer: "Oui. Nous recrutons, sélectionnons et mettons du personnel à disposition, et nous proposons aussi la formation et des prestations externalisées.",
        },
      ],
      showcase: null,
      featured: null,
    },
    {
      id: "digital-communication",
      number: "04",
      icon: "megaphone",
      name: "Digital & Communication",
      badge: "Nouveau",
      tagline: "Rendre votre entreprise visible, là où vos clients vous cherchent.",
      summary:
        "Site web, vidéo, publicité en ligne et présence locale : tout ce qu'il faut pour être trouvé, puis choisi.",
      services: [
        {
          icon: "monitor",
          title: "Création de sites web sur mesure",
          badge: null,
          description: "Des sites modernes, adaptés à l'image de votre entreprise.",
          items: [] as string[],
        },
        {
          icon: "dashboard",
          title: "Création de systèmes de gestion d'entreprise",
          badge: null,
          description:
            "Des outils sur mesure pour gérer vos ventes, vos stocks, votre facturation, votre personnel et vos clients, depuis un seul espace.",
          items: [],
        },
        {
          icon: "video",
          title: "Réalisation de vidéos publicitaires",
          badge: null,
          description: "Des contenus vidéo percutants, conçus pour marquer les esprits.",
          items: [],
        },
        {
          icon: "target",
          title: "Campagnes publicitaires ciblées",
          badge: null,
          description: "Des actions visibles sur Google, Google Maps et les réseaux sociaux.",
          items: [],
        },
        {
          icon: "mapPin",
          title: "Optimisation de la présence locale",
          badge: null,
          description:
            "Création et gestion de votre fiche Google pour attirer des clients locaux.",
          items: [],
        },
      ],
      /** Questions fréquentes affichées sous le pôle. */
      faq: [
        {
          question: "Que comprend l'offre clé en main ?",
          answer: "Un site web, de la publicité, de la vidéo et un suivi mensuel, réunis dans une seule offre.",
        },
        {
          question: "Sur quels canaux diffusez-vous les campagnes ?",
          answer: "Sur Google, Google Maps et les réseaux sociaux. À Lubumbashi, vos messages peuvent aussi passer sur les écrans LED Atlas.",
        },
        {
          question: "Créez-vous aussi des outils de gestion ?",
          answer: "Oui. Nous concevons des systèmes de gestion sur mesure pour vos ventes, vos stocks, votre facturation, votre personnel et vos clients.",
        },
      ],
      showcase: {
        title: "Nos créations en vidéo",
        intro: "Deux films réalisés par notre équipe pour des projets menés à Lubumbashi.",
        items: [
          {
            src: "/media/led-atlas.mp4",
            poster: "/media/led-atlas-poster.jpg",
            title: "LED Atlas",
            caption: "Film de présentation du réseau d'écrans LED",
            orientation: "landscape" as const,
          },
          {
            src: "/media/zando-yetu.mp4",
            poster: "/media/zando-yetu-poster.jpg",
            title: "Zando Yeto",
            caption: "Vidéo de lancement de la boutique en ligne",
            orientation: "portrait" as const,
          },
        ],
      },
      featured: {
        eyebrow: "Offre clé en main",
        title: "Suivi mensuel et accompagnement complet",
        description:
          "Site, publicité, vidéo et suivi régulier réunis dans une seule offre, conçue pour générer des prospects dès le premier mois.",
        items: ["Site web", "Publicité", "Vidéo", "Suivi régulier"],
        cta: "Lancer ma visibilité",
        serviceValue: "offre-cle-en-main",
      },
    },
  ],

  /* ───────────── Offres phares (une page chacune : /offres/…) ───────────── */
  offers: [
    {
      /** Identifiant utilisé dans l'adresse de la page. Ne pas modifier. */
      id: "aag-mobilite",
      name: "AAG Mobilité",
      icon: "car",
      /** Titre du service correspondant dans les pôles (lien « Découvrir l'offre »). */
      serviceTitle: "AAG Mobilité",
      metaTitle: "AAG Mobilité — transport avec chauffeur à Lubumbashi",
      metaDescription:
        "AAG Mobilité : transport premium avec chauffeur à Lubumbashi (berline et SUV Prado), transferts hôtels et aéroport, mise à disposition pour les entreprises, missions Lubumbashi – Likasi – Kolwezi.",
      eyebrow: "Supply & Logistics",
      title: "Vos déplacements avec chauffeur, à Lubumbashi et dans le Haut-Katanga.",
      intro:
        "Un transport premium pour vos dirigeants, vos équipes et vos visiteurs : un véhicule adapté, un chauffeur, et un seul interlocuteur pour organiser le tout.",
      summary: "Transport premium avec chauffeur, transferts et missions.",
      featuresTitle: "Ce que comprend l'offre",
      features: [
        { icon: "car", title: "Berline ou SUV Prado", text: "Le véhicule est choisi selon le trajet et le nombre de passagers." },
        { icon: "concierge", title: "Transferts hôtels et aéroport", text: "Prise en charge à l'arrivée et dépose au départ." },
        { icon: "briefcase", title: "Mise à disposition pour les entreprises", text: "Un véhicule avec chauffeur réservé pour vos équipes et vos visiteurs." },
        { icon: "mapPin", title: "Missions Lubumbashi – Likasi – Kolwezi", text: "Des déplacements professionnels sur l'axe minier du Haut-Katanga." },
      ],
      media: null as null | { video: string; poster: string; alt: string },
      formTitle: "Réserver un véhicule",
      formIntro: "Indiquez la date, le trajet et le nombre de passagers : nous vous recontactons pour confirmer.",
      serviceValue: "aag-mobilite",
    },
    {
      id: "aag-cleaning",
      name: "AAG Cleaning",
      icon: "sparkles",
      serviceTitle: "AAG Cleaning",
      metaTitle: "AAG Cleaning — nettoyage professionnel à Lubumbashi",
      metaDescription:
        "AAG Cleaning : entretien régulier de bureaux, commerces et résidences à Lubumbashi, remise en état, nettoyage de fin de chantier et nettoyage industriel.",
      eyebrow: "People & Facilities",
      title: "Des locaux propres, entretenus par une équipe professionnelle.",
      intro:
        "Entretien régulier ou intervention ponctuelle : nous prenons en charge la propreté de vos bureaux, commerces, résidences et sites.",
      summary: "Entretien régulier, remise en état et nettoyage industriel.",
      featuresTitle: "Ce que comprend l'offre",
      features: [
        { icon: "building", title: "Entretien régulier", text: "Bureaux, commerces et résidences, selon une fréquence convenue ensemble." },
        { icon: "sparkles", title: "Remise en état", text: "Une intervention complète pour retrouver des locaux propres." },
        { icon: "clipboard", title: "Nettoyage de fin de chantier", text: "Des locaux prêts à être livrés ou occupés après les travaux." },
        { icon: "factory", title: "Nettoyage industriel", text: "Des prestations adaptées aux sites et aux installations industrielles." },
      ],
      media: null,
      formTitle: "Demander un devis de nettoyage",
      formIntro: "Décrivez vos locaux (type, surface approximative, fréquence souhaitée) : nous vous recontactons.",
      serviceValue: "aag-cleaning",
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      icon: "monitorPlay",
      serviceTitle: "",
      metaTitle: "LED Atlas — publicité sur écrans LED à Lubumbashi",
      metaDescription:
        "LED Atlas : diffusez votre publicité sur un réseau d'écrans LED à Lubumbashi. Écrans haute définition, visibles de jour comme de nuit, et rapport de diffusion pour chaque campagne.",
      eyebrow: "Digital & Communication",
      title: "Votre marque sur les écrans LED de Lubumbashi.",
      intro:
        "Un réseau d'écrans publicitaires LED pour diffuser vos messages en images et en mouvement, sur des axes fréquentés de la ville.",
      summary: "Publicité sur un réseau d'écrans LED à Lubumbashi.",
      featuresTitle: "Ce que comprend l'offre",
      features: [
        { icon: "monitorPlay", title: "Écrans LED haute définition", text: "Un affichage lumineux et animé, visible de jour comme de nuit." },
        { icon: "mapPin", title: "Emplacements à Lubumbashi", text: "Des écrans implantés sur des axes fréquentés de la ville." },
        { icon: "megaphone", title: "Diffusion de vos spots", text: "Vos messages sont programmés et diffusés sur le réseau." },
        { icon: "clipboard", title: "Rapport de diffusion", text: "Un compte rendu des passages de votre spot pour chaque campagne." },
      ],
      media: {
        video: "/media/led-atlas.mp4",
        poster: "/media/led-atlas-poster.jpg",
        alt: "Film de présentation du réseau d'écrans LED Atlas",
      },
      formTitle: "Réserver un espace publicitaire",
      formIntro: "Présentez votre marque et la période souhaitée : nous vous envoyons les emplacements disponibles.",
      serviceValue: "led-atlas",
    },
  ],

  /* ───────────── Secteurs servis ───────────── */
  sectors: [
    { icon: "pickaxe", label: "Mines" },
    { icon: "fuel", label: "Hydrocarbures" },
    { icon: "zap", label: "Énergie" },
    { icon: "factory", label: "Industrie" },
    { icon: "building", label: "Construction et immobilier" },
    { icon: "store", label: "Commerce" },
    { icon: "concierge", label: "Services" },
    { icon: "landmark", label: "Organismes publics et privés" },
  ],

  /* ───────────── Méthode en 4 étapes ───────────── */
  method: [
    {
      title: "Qualification",
      description:
        "Nous écoutons votre besoin et précisons ensemble le périmètre, les contraintes et les priorités.",
    },
    {
      title: "Proposition et contrat",
      description:
        "Vous recevez une proposition claire : prestations, moyens, délais et conditions. Le contrat fixe les engagements de chacun.",
    },
    {
      title: "Réalisation",
      description:
        "Nous mobilisons les ressources et les partenaires qualifiés, coordonnons l'exécution et vous tenons informé.",
    },
    {
      title: "Réception et suivi",
      description:
        "Nous validons avec vous ce qui a été livré, puis restons disponibles pour le suivi et les ajustements.",
    },
  ],

  /* ───────────── Réalisations (études de cas) ─────────────
   *  `image` / `video` : laisser null pour afficher un emplacement provisoire,
   *  ou indiquer un fichier déposé dans /public (ex. "/realisations/zando.jpg").
   *  `stats` : remplacer « — » par la valeur réelle quand elle est disponible.
   */
  caseStudies: [
    {
      id: "zando-yeto",
      name: "Zando Yeto",
      sector: "Mode",
      icon: "shoppingBag",
      headline: "Une marque de mode, visible et vendue en ligne.",
      summary:
        "Site e-commerce, vidéo et campagnes publicitaires : un dispositif complet pour présenter les collections et vendre en ligne.",
      image: "/media/zando-yetu-card.jpg" as string | null,
      /** Vidéo de présentation (format vertical) et son image d'attente. */
      video: "/media/zando-yetu.mp4" as string | null,
      videoPoster: "/media/zando-yetu-poster.jpg" as string | null,
      videoLabel: "Vidéo de lancement Zando Yeto",
      imageAlt: "Aperçu du site e-commerce Zando Yeto",
      deliverablesTitle: "Ce que nous avons réalisé",
      deliverables: [
        {
          icon: "monitor",
          title: "Site e-commerce",
          description: "Une boutique en ligne pour présenter les collections et recevoir les commandes.",
          image: null as string | null,
        },
        {
          icon: "video",
          title: "Vidéo",
          description: "Une vidéo publicitaire pour faire connaître la marque.",
          image: null,
        },
        {
          icon: "target",
          title: "Campagnes publicitaires",
          description: "Des campagnes ciblées pour amener des visiteurs vers la boutique.",
          image: null,
        },
      ],
      statsTitle: "En chiffres",
      stats: [
        { value: "—", label: "Produits en ligne" },
        { value: "—", label: "Vues de la vidéo" },
        { value: "—", label: "Personnes touchées par les campagnes" },
      ],
      cta: "Lancer un projet similaire",
      serviceValue: "digital-communication",
      advertisers: null as null | {
        title: string;
        intro: string;
        locationsTitle: string;
        locations: { name: string; detail: string }[];
        visibilityTitle: string;
        visibility: { value: string; label: string }[];
        videoTitle: string;
        video: string | null;
        videoPoster: string | null;
        videoCaption: string;
      },
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      sector: "Affichage",
      icon: "monitorPlay",
      headline: "Un réseau d'écrans publicitaires LED à Lubumbashi.",
      summary:
        "Des écrans LED installés à Lubumbashi pour diffuser les messages des annonceurs, en images et en mouvement.",
      image: "/media/led-atlas-poster.jpg",
      video: null,
      videoPoster: null,
      videoLabel: "",
      imageAlt: "Écran publicitaire LED Atlas à Lubumbashi",
      deliverablesTitle: "Le dispositif",
      deliverables: [
        {
          icon: "monitorPlay",
          title: "Écrans LED",
          description: "Un affichage lumineux et animé, visible de jour comme de nuit.",
          image: null,
        },
        {
          icon: "mapPin",
          title: "Emplacements à Lubumbashi",
          description: "Des écrans implantés sur des axes fréquentés de la ville.",
          image: null,
        },
        {
          icon: "megaphone",
          title: "Diffusion pour les annonceurs",
          description: "Vos spots programmés et diffusés sur le réseau.",
          image: null,
        },
      ],
      statsTitle: "En chiffres",
      stats: [
        { value: "—", label: "Écrans en service" },
        { value: "—", label: "Emplacements" },
        { value: "—", label: "Heures de diffusion par jour" },
      ],
      cta: "Annoncer sur LED Atlas",
      serviceValue: "led-atlas",
      advertisers: {
        title: "Pour les annonceurs",
        intro:
          "Présentez votre marque sur les écrans LED Atlas. Voici ce que nous mettons à votre disposition.",
        locationsTitle: "Emplacements",
        locations: [
          { name: "Emplacement 1", detail: "Adresse et description à préciser" },
          { name: "Emplacement 2", detail: "Adresse et description à préciser" },
          { name: "Emplacement 3", detail: "Adresse et description à préciser" },
        ],
        visibilityTitle: "Visibilité",
        visibility: [
          { value: "—", label: "Passages quotidiens devant les écrans" },
          { value: "—", label: "Diffusions de votre spot par jour" },
          { value: "—", label: "Plage horaire de diffusion" },
        ],
        videoTitle: "Vidéo de démonstration",
        video: "/media/led-atlas.mp4",
        videoPoster: "/media/led-atlas-poster.jpg",
        videoCaption: "Découvrez le rendu des écrans en situation.",
      },
    },
  ],

  /* ───────────── Page d'accueil ───────────── */
  home: {
    hero: {
      eyebrow: "Lubumbashi · Haut-Katanga · RDC",
      title: "Votre partenaire pour développer et réaliser vos affaires en RDC,",
      titleAccent: "et demain en Afrique.",
      subtitle:
        "Nous aidons les entreprises et les investisseurs à trouver les bons partenaires, à structurer leurs projets et à mobiliser les ressources nécessaires : fournisseurs, logistique, personnel, services aux sites et communication.",
      mapAlt: "Carte de l'Afrique, la RDC et Lubumbashi mis en évidence",
      mapLabel: "Lubumbashi",
      mapSublabel: "Haut-Katanga · RDC",
      /** Courte boucle vidéo muette affichée dans le hero. */
      video: {
        src: "/media/hero-loop.mp4",
        poster: "/media/hero-loop.jpg",
        label: "LED Atlas",
        caption: "Notre réseau d'écrans à Lubumbashi",
        alt: "Animation : un écran publicitaire LED Atlas dans la ville, de jour puis de nuit",
      },
      highlights: [
        { title: "Quatre pôles", text: "complémentaires" },
        { title: "Un interlocuteur", text: "pour tout votre projet" },
        { title: "Ancrage local", text: "à Lubumbashi" },
        { title: "Partenaires", text: "qualifiés" },
      ],
    },
    offers: {
      eyebrow: "Offres phares",
      title: "Trois offres prêtes à réserver.",
      intro: "Des prestations clairement définies, que vous pouvez demander en quelques minutes.",
    },
    poles: {
      eyebrow: "Nos pôles",
      title: "Quatre pôles pour couvrir l'ensemble de vos besoins.",
      intro:
        "Du premier contact d'affaires à la vie quotidienne de vos sites, un seul partenaire coordonne les compétences dont vous avez besoin.",
    },
    sectors: {
      eyebrow: "Secteurs servis",
      title: "Aux côtés des acteurs qui font l'économie du Katanga.",
      intro:
        "Nous intervenons auprès des entreprises, des investisseurs et des institutions, quel que soit leur secteur.",
    },
    method: {
      eyebrow: "Notre méthode",
      title: "Une démarche claire, en quatre étapes.",
      intro: "Vous savez à tout moment où en est votre projet et ce qui vient ensuite.",
    },
    work: {
      eyebrow: "Réalisations",
      title: "Des projets concrets, menés à Lubumbashi.",
      intro: "Deux exemples de ce que nous réalisons pour nos clients et pour nos propres activités.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Un projet, un besoin ? Parlons-en.",
      text: "Décrivez-nous votre besoin en quelques lignes. Nous vous recontactons pour le préciser et vous adresser une proposition.",
      directTitle: "Vous préférez un échange direct ?",
    },
  },

  /* ───────────── Page Services ───────────── */
  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "Les quatre pôles d'ATLAS AFRICA GROUP : Business & Projects, Supply & Logistics, People & Facilities, Digital & Communication. Des services pour les entreprises et les investisseurs en RDC.",
    eyebrow: "Nos services",
    title: "Tout ce qu'il faut pour réaliser vos affaires en RDC.",
    intro:
      "Quatre pôles complémentaires, un seul interlocuteur. Choisissez un service ou confiez-nous l'ensemble de votre projet.",
    polesNavLabel: "Accès rapide aux pôles",
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Vous ne savez pas par où commencer ?",
      text: "Expliquez-nous votre situation : nous vous orientons vers les bons services.",
      button: "Demander un devis",
    },
  },

  /* ───────────── Page Réalisations ───────────── */
  workPage: {
    metaTitle: "Réalisations",
    metaDescription:
      "Études de cas d'ATLAS AFRICA GROUP : Zando Yeto (site e-commerce, vidéo et campagnes publicitaires) et LED Atlas (réseau d'écrans publicitaires LED à Lubumbashi).",
    eyebrow: "Réalisations",
    title: "Ce que nous faisons, concrètement.",
    intro:
      "Deux réalisations qui illustrent notre manière de travailler : un besoin précis, un dispositif complet, un suivi dans la durée.",
    casesNavLabel: "Accès rapide aux réalisations",
    cta: {
      title: "Votre projet pourrait être le prochain.",
      text: "Parlons de vos objectifs et de la manière dont nous pouvons vous aider à les atteindre.",
      button: "Demander un devis",
    },
  },

  /* ───────────── Page À propos ───────────── */
  aboutPage: {
    metaTitle: "À propos",
    metaDescription:
      "ATLAS AFRICA GROUP SARL, société basée à Lubumbashi : notre vision, notre mission, nos valeurs et notre approche — une société opérationnelle, puis un groupe.",
    eyebrow: "À propos",
    title: "Une société congolaise, une ambition africaine.",
    intro:
      "ATLAS AFRICA GROUP SARL est basée à Lubumbashi, dans le Haut-Katanga. Nous aidons ceux qui entreprennent et investissent en RDC à faire aboutir leurs projets.",
    vision: {
      eyebrow: "Vision",
      title: "Devenir un partenaire de référence en RDC, puis en Afrique.",
      text: "Nous voulons être le partenaire vers lequel on se tourne pour développer et réaliser ses affaires : d'abord en RDC, et demain sur le continent.",
    },
    mission: {
      eyebrow: "Mission",
      title: "Faire aboutir les projets de nos clients.",
      text: "Aider les entreprises et les investisseurs à trouver les bons partenaires, à structurer leurs projets et à mobiliser les ressources nécessaires : fournisseurs, logistique, personnel, services aux sites et communication.",
    },
    values: {
      eyebrow: "Valeurs",
      title: "Ce qui guide notre travail.",
      items: [
        {
          icon: "shield",
          title: "Fiabilité",
          text: "Nous tenons nos engagements : ce qui est convenu est réalisé.",
        },
        {
          icon: "eye",
          title: "Transparence",
          text: "Des propositions claires, des contrats précis, une information régulière.",
        },
        {
          icon: "award",
          title: "Qualité",
          text: "Des partenaires qualifiés et des prestations vérifiées à la réception.",
        },
        {
          icon: "heartHandshake",
          title: "Engagement local",
          text: "Nous travaillons avec les compétences et les entreprises du Haut-Katanga.",
        },
      ],
    },
    approach: {
      eyebrow: "Notre approche",
      title: "Une société opérationnelle, puis un groupe.",
      intro:
        "Nous avançons par étapes : faire d'abord, grandir ensuite sur ce qui a fait ses preuves.",
      steps: [
        {
          label: "Aujourd'hui",
          title: "Une société opérationnelle",
          text: "Des prestations concrètes, réalisées à Lubumbashi et dans le Haut-Katanga à travers quatre pôles complémentaires.",
        },
        {
          label: "Demain",
          title: "Un groupe",
          text: "Des activités qui se développent pas à pas, en RDC d'abord, puis vers d'autres pays africains.",
        },
      ],
    },
    sectors: {
      eyebrow: "Secteurs servis",
      title: "Nous travaillons avec tous les secteurs de l'économie.",
    },
    cta: {
      title: "Travaillons ensemble.",
      text: "Présentez-nous votre projet : nous vous dirons comment nous pouvons y contribuer.",
      button: "Nous contacter",
    },
  },

  /* ───────────── Page Contact ───────────── */
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Contactez ATLAS AFRICA GROUP SARL à Lubumbashi (Haut-Katanga, RDC) : demande de devis, formulaire de contact, WhatsApp, téléphone et e-mail.",
    eyebrow: "Contact",
    title: "Parlons de votre projet.",
    intro:
      "Remplissez le formulaire ou écrivez-nous sur WhatsApp. Nous revenons vers vous pour préciser votre besoin.",
    formTitle: "Votre demande",
    detailsTitle: "Nos coordonnées",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    country: "République démocratique du Congo",
    mapTitle: "Nous situer",
    mapIframeTitle: "Carte Google Maps de Lubumbashi",
    mapPlaceholder: "Lubumbashi, Haut-Katanga",
    mapOpen: "Ouvrir dans Google Maps",
  },

  /* ───────────── Formulaire de contact ───────────── */
  form: {
    name: "Nom complet",
    company: "Entreprise",
    phone: "Téléphone",
    email: "E-mail",
    service: "Service souhaité",
    message: "Message",
    optional: "facultatif",
    requiredHint: "Les champs marqués d'un astérisque (*) sont obligatoires.",
    servicePlaceholder: "Sélectionnez un service",
    messagePlaceholder: "Décrivez votre besoin en quelques lignes…",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    /** Options de la liste « Service souhaité ». Ne pas modifier les `value`. */
    serviceOptions: [
      { value: "business-projects", label: "Business & Projects" },
      { value: "supply-logistics", label: "Supply & Logistics" },
      { value: "people-facilities", label: "People & Facilities" },
      { value: "digital-communication", label: "Digital & Communication" },
      { value: "offre-cle-en-main", label: "Digital — offre clé en main" },
      { value: "led-atlas", label: "LED Atlas — affichage publicitaire" },
      { value: "aag-mobilite", label: "AAG Mobilité — transport avec chauffeur" },
      { value: "aag-cleaning", label: "AAG Cleaning — nettoyage" },
      { value: "autre", label: "Autre demande" },
    ],
    errors: {
      required: "Ce champ est obligatoire.",
      nameTooShort: "Indiquez votre nom complet.",
      invalidEmail: "Cette adresse e-mail ne semble pas valide.",
      invalidPhone: "Ce numéro de téléphone ne semble pas valide.",
      messageTooShort: "Votre message est un peu court : précisez votre besoin.",
      tooLong: "Ce texte est trop long.",
      summary: "Merci de corriger les champs signalés.",
    },
    success: {
      title: "Votre demande a bien été envoyée.",
      text: "Merci de votre confiance. Nous vous recontactons pour préciser votre besoin.",
      again: "Envoyer une autre demande",
    },
    failure: {
      generic:
        "L'envoi n'a pas abouti. Réessayez dans un instant, ou contactez-nous par WhatsApp ou par téléphone.",
      notConfigured:
        "Le formulaire n'est pas encore activé. Contactez-nous par WhatsApp ou par téléphone.",
    },
  },

  /* ───────────── Pied de page ───────────── */
  footer: {
    tagline:
      "Votre partenaire pour développer et réaliser vos affaires en RDC, et demain en Afrique.",
    navTitle: "Navigation",
    polesTitle: "Nos pôles",
    offersTitle: "Nos offres",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    location: "Lubumbashi, Haut-Katanga, RDC",
  },

  /* ───────────── Page introuvable (404) ───────────── */
  notFound: {
    eyebrow: "Erreur 404",
    title: "Cette page est introuvable.",
    text: "Le lien est peut-être erroné, ou la page a été déplacée.",
    home: "Retour à l'accueil",
    contact: "Nous contacter",
  },
};

export type Content = typeof fr;
export type Pole = Content["poles"][number];
export type PoleService = Pole["services"][number];
export type CaseStudy = Content["caseStudies"][number];
export type Offer = Content["offers"][number];
