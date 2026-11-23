/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CONTENU DU SITE — FRANÇAIS
 * ─────────────────────────────────────────────────────────────────────────
 *  Tous les textes du site sont ici. Modifiez les valeurs entre guillemets,
 *  sans toucher aux noms des champs (à gauche des « : »).
 *
 *  Les coordonnées (téléphone, e-mail, adresse, WhatsApp) sont dans
 *  `src/content/site.ts`. Les visuels sont dans `src/content/visuals.ts`.
 *
 *  Règle : ne publier que des informations confirmées. Les informations à
 *  vérifier sont listées dans `docs/registre-validation.md`.
 *
 *  Les champs `icon` renvoient à la liste d'icônes de
 *  `src/components/ui/Icon.tsx`.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { ExtraFieldKey } from "@/lib/form-schema";
import type {
  CaseStudy,
  FormFieldContent,
  Leader,
  LegalSection,
  Offer,
  Pole,
  Sector,
} from "./types";

export const fr = {
  /* ───────────── Référencement (SEO) ───────────── */
  meta: {
    title: "ATLAS AFRICA GROUP — Groupe multisectoriel en RDC",
    description:
      "ATLAS AFRICA GROUP accompagne les entreprises, les institutions et les investisseurs en RDC : développement d'affaires et de projets, approvisionnement et logistique, ressources humaines et facility management, digital, médias et communication. Basé à Lubumbashi.",
    keywords: [
      "ATLAS AFRICA GROUP",
      "groupe multisectoriel RDC",
      "services aux entreprises RDC",
      "République démocratique du Congo",
      "Congo",
      "Afrique",
      "Kinshasa",
      "Lubumbashi",
      "développement d'affaires RDC",
      "approvisionnement et logistique",
      "transport avec chauffeur Lubumbashi",
      "recrutement RDC",
      "facility management",
      "nettoyage industriel",
      "création de site web",
      "publicité digitale",
      "écrans LED publicitaires",
    ],
    ogImageAlt: "ATLAS AFRICA GROUP — Vos ambitions. Notre capacité d'action.",
  },

  /* ───────────── Navigation ───────────── */
  nav: {
    home: "Accueil",
    expertises: "Nos services",
    howItWorks: "Comment ça marche",
    sectors: "Industries & Secteurs",
    work: "Projets & Réalisations",
    group: "Le Groupe",
    contact: "Contact",
    /** Libellés courts de l'en-tête sur grand écran. */
    short: {
      expertises: "Services",
      sectors: "Secteurs",
      work: "Réalisations",
      group: "Le Groupe",
    },
    cta: "Présenter un projet",
    skipToContent: "Aller au contenu",
    mainLabel: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    homeLinkLabel: "ATLAS AFRICA GROUP — retour à l'accueil",
    languageLabel: "Langue",
    offers: "Offres",
    legal: "Mentions légales",
    privacy: "Confidentialité",
  },

  /* ───────────── Libellés communs ───────────── */
  common: {
    quoteCta: "Demander un devis",
    projectCta: "Présenter un projet",
    expertisesCta: "Découvrir nos services",
    discoverPole: "Découvrir le pôle",
    poleLabel: "Pôle",
    allWork: "Toutes nos réalisations",
    whatsappCta: "Discuter sur WhatsApp",
    whatsappMessage: "Bonjour, je souhaite échanger avec ATLAS AFRICA GROUP au sujet de…",
    discoverOffer: "Découvrir l'offre",
    callShort: "Appeler",
    quoteShort: "Devis",
    quickActions: "Actions rapides",
    offerLabel: "Offre",
    directContact: "Ou contactez-nous directement",
    breadcrumbLabel: "Fil d'Ariane",
    /** Mention posée sur les visuels d'illustration (images non contractuelles). */
    illustration: "Illustration",
    /** Qui réalise la prestation. */
    delivery: {
      internal: "Par nos équipes",
      partners: "Avec des partenaires qualifiés",
      development: "En développement",
    },
    /** Statut des projets. */
    status: {
      completed: "Réalisation achevée",
      ongoing: "En cours",
      development: "En développement",
    },
  },

  /* ───────────── Les 4 pôles d'expertise ─────────────
   *  Chaque pôle a sa page : /expertises/<id>.
   */
  poles: [
    {
      id: "business-projects",
      number: "01",
      icon: "briefcase",
      name: "Business & Projects Development",
      badge: null,
      tagline: "Ouvrir les bonnes portes, structurer vos projets.",
      summary:
        "Nous identifions les opportunités, mettons en relation les bons acteurs et structurons vos projets en RDC, de l'étude à la réalisation.",
      metaTitle: "Business & Projects Development — développement d'affaires en RDC",
      metaDescription:
        "Développement d'affaires, mise en relation B2B, structuration de projets, conseil commercial, accompagnement des investisseurs et développement de partenariats en RDC.",
      headline: "Faire avancer vos affaires et vos projets en RDC.",
      intro:
        "Entrer sur un marché, trouver des partenaires fiables, structurer un projet : nous vous accompagnons à chaque étape, avec une connaissance du terrain congolais et un réseau d'acteurs locaux.",
      problems: [
        "Vous souhaitez vous implanter en RDC sans interlocuteur fiable sur place.",
        "Vous cherchez des partenaires, des fournisseurs ou des clients qualifiés.",
        "Votre projet doit être étudié, chiffré et planifié avant d'être lancé.",
        "Vous avez besoin d'un représentant pour négocier et suivre vos intérêts localement.",
      ],
      services: [
        {
          icon: "handshake",
          title: "Développement d'affaires",
          description: null,
          items: ["Apport d'affaires", "Identification d'opportunités commerciales", "Représentation commerciale"],
          delivery: "internal",
        },
        {
          icon: "network",
          title: "Facilitation et mise en relation B2B",
          description: null,
          items: ["Recherche de partenaires et de fournisseurs", "Organisation de rencontres d'affaires", "Aide à la négociation"],
          delivery: "internal",
        },
        {
          icon: "clipboard",
          title: "Structuration et accompagnement de projets",
          description: null,
          items: [
            "Études de marché et de faisabilité",
            "Business plans et montage de projets",
            "Planification, coordination et suivi de réalisation",
          ],
          delivery: "internal",
        },
        {
          icon: "target",
          title: "Conseil et stratégie commerciale",
          description: null,
          items: ["Analyse de marché et positionnement", "Stratégie d'entrée sur le marché congolais", "Plans d'action commerciaux"],
          delivery: "internal",
        },
        {
          icon: "globe",
          title: "Accompagnement des investisseurs",
          description: null,
          items: ["Accompagnement à l'implantation en RDC", "Mise en relation avec les acteurs locaux", "Suivi de vos intérêts sur place"],
          delivery: "internal",
        },
        {
          icon: "heartHandshake",
          title: "Développement de partenariats",
          description: null,
          items: ["Partenariats commerciaux et techniques", "Alliances avec des entreprises locales", "Suivi de la relation partenaire"],
          delivery: "internal",
        },
        {
          icon: "energy",
          title: "Projets énergétiques",
          description: "Projets solaires et d'efficacité énergétique, menés avec des partenaires techniques.",
          items: [],
          delivery: "partners",
        },
      ],
      groups: [],
      sectors: ["mines", "energy", "construction", "industry", "business", "institutions"],
      advantages: [
        { title: "Connaissance du terrain", text: "Une équipe congolaise, au contact des acteurs économiques du pays." },
        { title: "Un réseau d'acteurs qualifiés", text: "Des fournisseurs, prestataires et partenaires identifiés et vérifiés." },
        { title: "Un seul interlocuteur", text: "Nous coordonnons les étapes et les intervenants de votre projet." },
        { title: "Des engagements écrits", text: "Une proposition claire, un contrat précis, un suivi régulier." },
      ],
      caseStudies: [],
      formType: "business-projects",
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
      showcase: null,
      featured: null,
    },
    {
      id: "supply-logistics",
      number: "02",
      icon: "truck",
      name: "Supply, Trading & Logistics",
      badge: null,
      tagline: "Approvisionner, acheminer, livrer.",
      summary:
        "Du sourcing à la livraison, nous sécurisons vos approvisionnements et coordonnons vos flux avec des opérateurs qualifiés.",
      metaTitle: "Supply, Trading & Logistics — approvisionnement et logistique en RDC",
      metaDescription:
        "Sourcing et approvisionnement, commerce B2B, transport et logistique, coordination de la chaîne d'approvisionnement et transport avec chauffeur (AAG Mobilité) dans le Haut-Katanga.",
      headline: "Vos approvisionnements sécurisés, de la commande à votre site.",
      intro:
        "Nous identifions les bons fournisseurs, organisons l'acheminement avec des opérateurs qualifiés et vous tenons informé à chaque étape, jusqu'à la livraison.",
      problems: [
        "Vos équipements ou consommables arrivent en retard sur site.",
        "Vous multipliez les fournisseurs et les transporteurs sans coordination.",
        "Vous avez besoin de produits difficiles à trouver localement.",
        "Vos équipes et vos visiteurs doivent se déplacer en sécurité.",
      ],
      services: [
        {
          icon: "package",
          title: "Approvisionnement et sourcing",
          description: null,
          items: ["Sourcing et qualification de fournisseurs", "Achats", "Fourniture d'équipements et de consommables"],
          delivery: "internal",
        },
        {
          icon: "store",
          title: "Commerce B2B",
          description: null,
          items: ["Négoce", "Fourniture aux entreprises et aux sites"],
          delivery: "internal",
        },
        {
          icon: "route",
          title: "Coordination de la chaîne d'approvisionnement",
          description: null,
          items: ["Planification des flux", "Suivi des commandes et des expéditions", "Un interlocuteur pour tous les intervenants"],
          delivery: "internal",
        },
        {
          icon: "warehouse",
          title: "Transport et logistique",
          description: null,
          items: ["Organisation des expéditions", "Entreposage", "Livraison sur site"],
          delivery: "partners",
        },
        {
          icon: "truck",
          title: "Solutions de distribution",
          description: null,
          items: ["Distribution avec des opérateurs qualifiés", "Tournées de livraison"],
          delivery: "partners",
        },
        {
          icon: "globe",
          title: "Appui aux opérations d'import-export",
          description: "Organisation et suivi de vos opérations d'import-export, avec des partenaires habilités.",
          items: [],
          delivery: "partners",
        },
        {
          icon: "car",
          title: "AAG Mobilité",
          description: "Transport premium avec chauffeur.",
          items: ["Berline et SUV Prado", "Transferts hôtels et aéroport", "Mise à disposition pour les entreprises", "Missions Lubumbashi – Likasi – Kolwezi"],
          delivery: "internal",
        },
      ],
      groups: [],
      sectors: ["mines", "energy", "construction", "industry", "business"],
      advantages: [
        { title: "Des fournisseurs vérifiés", text: "Chaque fournisseur est qualifié avant la première commande." },
        { title: "Un suivi à chaque étape", text: "Vous savez à tout moment où en est votre commande." },
        { title: "Des opérateurs qualifiés", text: "Transport, entreposage et formalités confiés à des partenaires reconnus." },
        { title: "Ancrage en RDC", text: "Nous connaissons les axes logistiques du pays et leurs contraintes." },
      ],
      caseStudies: [],
      formType: "supply-logistics",
      faq: [
        {
          question: "Que pouvez-vous fournir ?",
          answer: "Des équipements et des consommables. Nous recherchons et qualifions les fournisseurs, puis nous gérons les achats et le négoce selon votre besoin.",
        },
        {
          question: "Assurez-vous vous-mêmes le transport des marchandises ?",
          answer: "Nous organisons les expéditions, l'entreposage et la distribution avec des opérateurs qualifiés, et vous gardez un seul interlocuteur.",
        },
        {
          question: "Sur quels trajets circule AAG Mobilité ?",
          answer: "À Lubumbashi, pour les transferts entre hôtels et aéroport, et sur l'axe Lubumbashi – Likasi – Kolwezi pour les missions.",
        },
      ],
      showcase: null,
      featured: null,
    },
    {
      id: "people-facilities",
      number: "03",
      icon: "users",
      name: "People, Facilities & Environment",
      badge: null,
      tagline: "Les équipes et les services qui font vivre vos sites.",
      summary:
        "Personnel, propreté, entretien, environnement : nous prenons en charge les fonctions de soutien pour que vos équipes se concentrent sur leur métier.",
      metaTitle: "People, Facilities & Environment — RH, nettoyage et facility management",
      metaDescription:
        "Recrutement et mise à disposition de personnel, facility management, nettoyage professionnel et industriel (AAG Cleaning), entretien de bâtiments, assainissement et services environnementaux à Lubumbashi.",
      headline: "Des sites entretenus, des équipes disponibles.",
      intro:
        "Nous recrutons et mettons à disposition du personnel, et nous assurons l'entretien de vos locaux et de vos installations, pour que vos activités ne s'arrêtent jamais.",
      problems: [
        "Vous devez renforcer vos équipes rapidement, avec des profils fiables.",
        "L'entretien de vos bureaux ou de votre site mobilise trop de ressources internes.",
        "Un chantier se termine et les locaux doivent être livrés propres.",
        "Vous devez gérer vos espaces verts, l'assainissement ou vos déchets dans les règles.",
      ],
      services: [
        {
          icon: "users",
          title: "Recrutement et placement",
          description: null,
          items: ["Recrutement et sélection", "Mise à disposition de personnel"],
          delivery: "internal",
        },
        {
          icon: "userCheck",
          title: "Gestion des ressources humaines",
          description: null,
          items: ["Prestations externalisées", "Formation des équipes"],
          delivery: "internal",
        },
        {
          icon: "building",
          title: "Facility management",
          description: null,
          items: ["Coordination des services aux sites", "Gestion des prestataires d'entretien", "Suivi de la qualité des prestations"],
          delivery: "internal",
        },
        {
          icon: "sparkles",
          title: "Nettoyage professionnel et industriel",
          description: "Les prestations d'AAG Cleaning.",
          items: ["Entretien régulier de bureaux, commerces et résidences", "Remise en état", "Nettoyage de fin de chantier", "Nettoyage industriel"],
          delivery: "internal",
        },
        {
          icon: "wrench",
          title: "Entretien de bâtiments et d'installations",
          description: null,
          items: ["Maintenance courante", "Entretien des installations"],
          delivery: "partners",
        },
        {
          icon: "leaf",
          title: "Assainissement et services environnementaux",
          description: null,
          items: ["Entretien des espaces verts", "Assainissement", "Gestion des déchets avec des partenaires habilités"],
          delivery: "partners",
        },
        {
          icon: "drone",
          title: "Nettoyage par drone",
          description: null,
          items: ["Façades", "Toitures", "Panneaux solaires"],
          delivery: "development",
        },
      ],
      groups: [],
      sectors: ["mines", "industry", "construction", "business", "institutions", "energy"],
      advantages: [
        { title: "Des équipes encadrées", text: "Chaque intervention est préparée et suivie par un responsable." },
        { title: "Des prestations contrôlées", text: "La qualité est vérifiée avec vous à la réception." },
        { title: "Le respect de vos consignes", text: "Nos équipes appliquent les règles de sécurité de vos sites." },
        { title: "De la souplesse", text: "Interventions ponctuelles ou contrats d'entretien réguliers." },
      ],
      caseStudies: [],
      formType: "people-facilities",
      faq: [
        {
          question: "Quels locaux nettoyez-vous ?",
          answer: "Les bureaux, les commerces et les résidences, en entretien régulier. Nous assurons aussi la remise en état, le nettoyage de fin de chantier et le nettoyage industriel.",
        },
        {
          question: "Pouvez-vous mettre du personnel à disposition ?",
          answer: "Oui. Nous recrutons, sélectionnons et mettons du personnel à disposition, et nous proposons aussi la formation et des prestations externalisées.",
        },
        {
          question: "Le nettoyage par drone est-il déjà disponible ?",
          answer: "Pas encore. Ce service pour façades, toitures et panneaux solaires est en développement : contactez-nous pour être prévenu de son lancement.",
        },
      ],
      showcase: null,
      featured: null,
    },
    {
      id: "digital-communication",
      number: "04",
      icon: "megaphone",
      name: "Digital, Media & Communication",
      badge: null,
      tagline: "Rendre votre entreprise visible, là où vos clients vous cherchent.",
      summary:
        "Solutions numériques, marketing et création, médias et affichage dynamique : tout ce qu'il faut pour être trouvé, puis choisi.",
      metaTitle: "Digital, Media & Communication — sites web, marketing et écrans LED",
      metaDescription:
        "Création de sites internet, digitalisation des processus, communication institutionnelle, identité de marque, vidéos, publicité digitale et affichage dynamique sur écrans LED à Lubumbashi.",
      headline: "Être trouvé, être choisi.",
      intro:
        "Du site internet à l'écran de rue, nous concevons et diffusons les outils qui rendent votre entreprise visible et simplifient sa gestion.",
      problems: [
        "Vos clients ne vous trouvent pas sur Google ni sur les réseaux sociaux.",
        "Votre image ne reflète pas le sérieux de votre entreprise.",
        "Vous gérez encore vos ventes, vos stocks ou votre facturation sur papier.",
        "Vous voulez toucher votre public au-delà du digital.",
      ],
      groups: [
        { id: "digital", title: "Digital Solutions", text: "Des outils numériques qui simplifient votre gestion." },
        { id: "creative", title: "Marketing & Creative", text: "Une image de marque claire et des contenus qui marquent." },
        { id: "media", title: "Media & Outdoor Advertising", text: "Votre message diffusé en ligne et sur les écrans de la ville." },
      ],
      services: [
        {
          icon: "monitor",
          title: "Création de sites internet",
          description: "Des sites modernes, adaptés à l'image de votre entreprise.",
          items: [],
          delivery: "internal",
          group: "digital",
        },
        {
          icon: "dashboard",
          title: "Digitalisation des processus",
          description: "Des outils sur mesure pour gérer vos ventes, vos stocks, votre facturation, votre personnel et vos clients, depuis un seul espace.",
          items: [],
          delivery: "internal",
          group: "digital",
        },
        {
          icon: "presentation",
          title: "Communication institutionnelle",
          description: "Présentations, supports et messages pour vos partenaires, vos clients et les institutions.",
          items: [],
          delivery: "internal",
          group: "creative",
        },
        {
          icon: "palette",
          title: "Marketing et identité de marque",
          description: "Positionnement, identité visuelle et présence locale sur Google pour attirer vos clients.",
          items: [],
          delivery: "internal",
          group: "creative",
        },
        {
          icon: "video",
          title: "Production de contenus visuels",
          description: "Des vidéos publicitaires et des contenus percutants, conçus pour marquer les esprits.",
          items: [],
          delivery: "internal",
          group: "creative",
        },
        {
          icon: "target",
          title: "Publicité digitale",
          description: "Des campagnes ciblées sur Google, Google Maps et les réseaux sociaux.",
          items: [],
          delivery: "internal",
          group: "media",
        },
        {
          icon: "monitorPlay",
          title: "Affichage dynamique et écrans LED",
          description: "Vos spots diffusés sur le réseau d'écrans LED Atlas à Lubumbashi.",
          items: [],
          delivery: "internal",
          group: "media",
        },
      ],
      sectors: ["industry", "business", "institutions", "construction"],
      advantages: [
        { title: "Créatif et technique", text: "Une même équipe conçoit, développe et diffuse." },
        { title: "Des réalisations concrètes", text: "Zando Yeto et LED Atlas : des projets menés à Lubumbashi." },
        { title: "Une offre clé en main", text: "Site, publicité, vidéo et suivi mensuel réunis." },
        { title: "En ligne et dans la rue", text: "Du digital aux écrans LED de la ville." },
      ],
      caseStudies: ["zando-yeto", "led-atlas"],
      formType: "digital-communication",
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
            orientation: "landscape",
          },
          {
            src: "/media/zando-yetu.mp4",
            poster: "/media/zando-yetu-poster.jpg",
            title: "Zando Yeto",
            caption: "Vidéo de lancement de la boutique en ligne",
            orientation: "portrait",
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
  ] as Pole[],

  /* ───────────── Offres spécialisées (une page chacune : /offres/…) ───────────── */
  offers: [
    {
      id: "aag-cleaning",
      name: "AAG Cleaning",
      icon: "sparkles",
      serviceTitle: "Nettoyage professionnel et industriel",
      metaTitle: "AAG Cleaning — nettoyage professionnel et industriel à Lubumbashi",
      metaDescription:
        "AAG Cleaning : nettoyage de bureaux, nettoyage industriel, nettoyage après construction, entretien de bâtiments et contrats d'entretien périodiques à Lubumbashi.",
      eyebrow: "People, Facilities & Environment",
      title: "Des locaux propres, entretenus par une équipe professionnelle.",
      intro:
        "Entretien régulier ou intervention ponctuelle : nous prenons en charge la propreté de vos bureaux, commerces, résidences et sites industriels, avec un contrôle de la qualité à chaque passage.",
      summary: "Nettoyage de bureaux, industriel et après construction.",
      status: null,
      featuresTitle: "Nos prestations",
      features: [
        { icon: "building", title: "Nettoyage de bureaux", text: "Bureaux, commerces et résidences, selon une fréquence convenue ensemble." },
        { icon: "factory", title: "Nettoyage industriel", text: "Des prestations adaptées aux sites et aux installations industrielles." },
        { icon: "clipboard", title: "Nettoyage après construction", text: "Des locaux prêts à être livrés ou occupés après les travaux." },
        { icon: "wrench", title: "Entretien de bâtiments", text: "L'entretien courant de vos espaces communs et de vos installations." },
        { icon: "sparkles", title: "Surfaces et mobilier", text: "Le traitement des sols, des vitres, des surfaces et du mobilier." },
        { icon: "calendar", title: "Contrats périodiques", text: "Un planning d'entretien régulier, ajusté à votre activité." },
        { icon: "shield", title: "Qualité et sécurité", text: "Un contrôle à chaque intervention et le respect des consignes de vos sites." },
      ],
      process: {
        title: "Comment se déroule une intervention",
        steps: [
          { title: "Visite et évaluation", text: "Nous visitons vos locaux pour comprendre vos besoins." },
          { title: "Devis détaillé", text: "Vous recevez une proposition claire : prestations, fréquence, prix." },
          { title: "Planification", text: "Nous fixons ensemble les horaires et les modalités d'intervention." },
          { title: "Intervention", text: "Nos équipes interviennent avec le matériel adapté." },
          { title: "Contrôle qualité", text: "Nous vérifions la prestation avec vous et ajustons si besoin." },
        ],
      },
      media: null,
      formTitle: "Demander un devis de nettoyage",
      formIntro: "Décrivez vos locaux (type, surface approximative, fréquence souhaitée) : nous vous recontactons.",
      serviceValue: "aag-cleaning",
    },
    {
      id: "aag-mobilite",
      name: "AAG Mobilité",
      icon: "car",
      serviceTitle: "AAG Mobilité",
      metaTitle: "AAG Mobilité — transport avec chauffeur à Lubumbashi",
      metaDescription:
        "AAG Mobilité : transport premium avec chauffeur à Lubumbashi (berline et SUV Prado), transferts hôtels et aéroport, mise à disposition pour les entreprises, missions Lubumbashi – Likasi – Kolwezi.",
      eyebrow: "Supply, Trading & Logistics",
      title: "Vos déplacements avec chauffeur, à Lubumbashi et dans le Haut-Katanga.",
      intro:
        "Un transport premium pour vos dirigeants, vos équipes et vos visiteurs : un véhicule adapté, un chauffeur, et un seul interlocuteur pour organiser le tout.",
      summary: "Transport premium avec chauffeur, transferts et missions.",
      status: null,
      featuresTitle: "Véhicules et trajets",
      features: [
        { icon: "car", title: "Berline ou SUV Prado", text: "Le véhicule est choisi selon le trajet et le nombre de passagers." },
        { icon: "concierge", title: "Transferts hôtels et aéroport", text: "Prise en charge à l'arrivée et dépose au départ." },
        { icon: "briefcase", title: "Mise à disposition pour les entreprises", text: "Un véhicule avec chauffeur réservé pour vos équipes et vos visiteurs." },
        { icon: "mapPin", title: "Missions Lubumbashi – Likasi – Kolwezi", text: "Des déplacements professionnels sur l'axe minier du Haut-Katanga." },
      ],
      process: {
        title: "Comment réserver",
        steps: [
          { title: "Votre demande", text: "Indiquez la date, le trajet et le nombre de passagers." },
          { title: "Confirmation", text: "Nous vous confirmons le véhicule, l'horaire et les conditions." },
          { title: "Prise en charge", text: "Votre chauffeur vous attend au lieu et à l'heure convenus." },
        ],
      },
      media: null,
      formTitle: "Réserver un véhicule",
      formIntro: "Indiquez la date, le trajet et le nombre de passagers : nous vous recontactons pour confirmer.",
      serviceValue: "aag-mobilite",
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      icon: "monitorPlay",
      serviceTitle: "Affichage dynamique et écrans LED",
      metaTitle: "LED Atlas — publicité sur écrans LED à Lubumbashi",
      metaDescription:
        "LED Atlas : affichage dynamique (DOOH) sur un réseau d'écrans LED à Lubumbashi. Diffusion de vos spots, rapport de diffusion et partenariats pour les annonceurs.",
      eyebrow: "Digital, Media & Communication",
      title: "Votre marque sur les écrans LED de Lubumbashi.",
      intro:
        "LED Atlas est notre service d'affichage dynamique : vos messages diffusés en images et en mouvement, sur des écrans LED installés à Lubumbashi.",
      summary: "Affichage dynamique sur écrans LED à Lubumbashi.",
      status: null,
      featuresTitle: "Le concept",
      features: [
        { icon: "monitorPlay", title: "Écrans LED haute définition", text: "Un affichage lumineux et animé, visible de jour comme de nuit." },
        { icon: "megaphone", title: "Diffusion de vos spots", text: "Vos messages sont programmés et diffusés sur le réseau." },
        { icon: "clipboard", title: "Rapport de diffusion", text: "Un compte rendu des passages de votre spot pour chaque campagne." },
        { icon: "handshake", title: "Partenariats", text: "Annonceurs, agences et propriétaires d'emplacements : parlons-en." },
      ],
      process: {
        title: "Comment fonctionne une campagne",
        steps: [
          { title: "Votre brief", text: "Votre marque, votre message et la période souhaitée." },
          { title: "Le spot", text: "Vous fournissez votre visuel, ou notre équipe le crée pour vous." },
          { title: "La programmation", text: "Nous planifions les créneaux de diffusion de votre campagne." },
          { title: "Le rapport", text: "Vous recevez le compte rendu de diffusion à la fin de la campagne." },
        ],
      },
      media: {
        video: "/media/led-atlas.mp4",
        poster: "/media/led-atlas-poster.jpg",
        alt: "Film de présentation du réseau d'écrans LED Atlas",
      },
      formTitle: "Annoncer sur LED Atlas",
      formIntro: "Présentez votre marque et la période souhaitée : nous revenons vers vous avec une proposition.",
      serviceValue: "led-atlas",
    },
  ] as Offer[],

  /* ───────────── Industries & Secteurs ───────────── */
  sectors: [
    {
      id: "mines",
      icon: "pickaxe",
      label: "Mines et ressources naturelles",
      short: "Mines",
      text: "Équipements et consommables, transport des équipes, personnel et entretien des sites miniers en RDC.",
      needs: ["Fournitures et pièces pour les sites", "Transport du personnel", "Main-d'œuvre et entretien des sites"],
      poles: ["supply-logistics", "people-facilities", "business-projects"],
    },
    {
      id: "energy",
      icon: "zap",
      label: "Énergie et hydrocarbures",
      short: "Énergie",
      text: "Projets solaires et d'efficacité énergétique avec des partenaires techniques, fournitures et services aux sites.",
      needs: ["Études de projets énergétiques", "Approvisionnement des sites", "Services aux installations"],
      poles: ["business-projects", "supply-logistics", "people-facilities"],
    },
    {
      id: "construction",
      icon: "building",
      label: "Construction et infrastructures",
      short: "Construction",
      text: "Coordination de projets, approvisionnement de chantier, nettoyage de fin de chantier et remise en état.",
      needs: ["Montage et suivi de projets", "Approvisionnement de chantier", "Nettoyage après travaux"],
      poles: ["business-projects", "supply-logistics", "people-facilities"],
    },
    {
      id: "industry",
      icon: "factory",
      label: "Industrie et commerce",
      short: "Industrie et commerce",
      text: "Sourcing, logistique, nettoyage industriel, sites internet et campagnes pour vendre davantage.",
      needs: ["Sourcing et logistique", "Nettoyage industriel", "Visibilité et ventes en ligne"],
      poles: ["supply-logistics", "people-facilities", "digital-communication"],
    },
    {
      id: "business",
      icon: "briefcase",
      label: "Entreprises et immobilier",
      short: "Entreprises et immobilier",
      text: "Entretien de bureaux et de résidences, transport avec chauffeur, outils de gestion et communication.",
      needs: ["Entretien des locaux", "Déplacements des équipes", "Outils de gestion et communication"],
      poles: ["people-facilities", "supply-logistics", "digital-communication"],
    },
    {
      id: "institutions",
      icon: "landmark",
      label: "Institutions et organisations",
      short: "Institutions",
      text: "Études, accompagnement de projets, prestations externalisées et communication institutionnelle.",
      needs: ["Études et accompagnement", "Prestations externalisées", "Communication institutionnelle"],
      poles: ["business-projects", "people-facilities", "digital-communication"],
    },
  ] as Sector[],

  /* ───────────── Notre méthode (5 étapes) ───────────── */
  method: [
    {
      title: "Analyse des besoins",
      description: "Nous écoutons votre besoin et précisons ensemble le périmètre, les contraintes et les priorités.",
    },
    {
      title: "Identification de solutions",
      description: "Nous identifions les solutions, les ressources et les partenaires adaptés à votre situation.",
    },
    {
      title: "Proposition commerciale",
      description: "Vous recevez une proposition claire : prestations, moyens, délais et conditions. Le contrat fixe les engagements de chacun.",
    },
    {
      title: "Coordination et exécution",
      description: "Nous mobilisons les équipes et les partenaires qualifiés, coordonnons l'exécution et vous tenons informé.",
    },
    {
      title: "Suivi et amélioration",
      description: "Nous validons avec vous ce qui a été livré, puis ajustons nos prestations dans la durée.",
    },
  ],

  /* ───────────── Projets & Réalisations ─────────────
   *  Uniquement des projets réels. `status` : "completed" (achevé),
   *  "ongoing" (en cours) ou "development" (en développement).
   *  `results` : uniquement des chiffres mesurés (sinon, laisser vide).
   */
  caseStudies: [
    {
      id: "zando-yeto",
      name: "Zando Yeto",
      sector: "Mode et commerce en ligne",
      icon: "shoppingBag",
      status: "completed",
      location: "Lubumbashi",
      intervention: "Site e-commerce, vidéo publicitaire et campagnes ciblées",
      poles: ["digital-communication"],
      headline: "Une marque de mode, visible et vendue en ligne.",
      summary:
        "Site e-commerce, vidéo et campagnes publicitaires : un dispositif complet pour présenter les collections et vendre en ligne.",
      image: "/media/zando-yetu-card.jpg",
      video: "/media/zando-yetu.mp4",
      videoPoster: "/media/zando-yetu-poster.jpg",
      videoLabel: "Vidéo de lancement Zando Yeto",
      imageAlt: "Aperçu du site e-commerce Zando Yeto",
      deliverablesTitle: "Ce que nous avons réalisé",
      deliverables: [
        { icon: "monitor", title: "Site e-commerce", description: "Une boutique en ligne pour présenter les collections et recevoir les commandes." },
        { icon: "video", title: "Vidéo", description: "Une vidéo publicitaire pour faire connaître la marque." },
        { icon: "target", title: "Campagnes publicitaires", description: "Des campagnes ciblées pour amener des visiteurs vers la boutique." },
      ],
      resultsTitle: "Résultats",
      results: [],
      cta: "Lancer un projet similaire",
      serviceValue: "digital-communication",
      advertisers: null,
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      sector: "Affichage dynamique",
      icon: "monitorPlay",
      status: "ongoing",
      location: "Lubumbashi",
      intervention: "Réseau d'écrans publicitaires LED et diffusion pour les annonceurs",
      poles: ["digital-communication"],
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
        { icon: "monitorPlay", title: "Écrans LED", description: "Un affichage lumineux et animé, visible de jour comme de nuit." },
        { icon: "mapPin", title: "Emplacements à Lubumbashi", description: "Des écrans implantés sur des axes fréquentés de la ville." },
        { icon: "megaphone", title: "Diffusion pour les annonceurs", description: "Vos spots programmés et diffusés sur le réseau." },
      ],
      resultsTitle: "Résultats",
      results: [],
      cta: "Annoncer sur LED Atlas",
      serviceValue: "led-atlas",
      advertisers: {
        title: "Pour les annonceurs",
        intro: "Présentez votre marque sur les écrans LED Atlas : découvrez le rendu des écrans en situation.",
        videoTitle: "Vidéo de démonstration",
        video: "/media/led-atlas.mp4",
        videoPoster: "/media/led-atlas-poster.jpg",
        videoCaption: "Le rendu des écrans LED Atlas en situation.",
      },
    },
  ] as CaseStudy[],


  /* ───────────── Page d'accueil ───────────── */
  home: {
    hero: {
      eyebrow: "Groupe multisectoriel · RDC · Afrique",
      title: "Vos ambitions.",
      titleAccent: "Notre capacité d'action.",
      subtitle:
        "Atlas Africa Group accompagne les entreprises, les institutions et les investisseurs dans le développement de leurs activités, la structuration de leurs projets et la mise en œuvre de solutions opérationnelles en République démocratique du Congo.",
    },
    value: {
      eyebrow: "Notre proposition de valeur",
      title: "Pourquoi choisir Atlas Africa Group.",
      intro:
        "Un groupe multisectoriel, présent dans tous les domaines utiles à vos activités, avec un seul interlocuteur pour les coordonner.",
      items: [
        { icon: "mapPin", title: "Compréhension du marché congolais", text: "Une équipe congolaise, au contact des acteurs économiques de tout le pays." },
        { icon: "layers", title: "Approche multisectorielle", text: "Quatre pôles complémentaires, des affaires à la vie quotidienne de vos sites." },
        { icon: "handshake", title: "Développement de partenariats", text: "Nous travaillons avec des partenaires qualifiés et les entreprises locales." },
        { icon: "userCheck", title: "Accompagnement personnalisé", text: "Chaque proposition part de votre besoin réel, pas d'un catalogue." },
        { icon: "route", title: "Coordination des services et des projets", text: "Un seul interlocuteur coordonne les intervenants, du premier échange au suivi." },
      ],
    },
    poles: {
      eyebrow: "Nos quatre pôles",
      title: "Quatre expertises, un seul partenaire.",
      intro: "Du premier contact d'affaires à la vie quotidienne de vos sites, nous coordonnons les compétences dont vous avez besoin.",
    },
    sectors: {
      eyebrow: "Industries & Secteurs",
      title: "Aux côtés des acteurs qui font l'économie du Congo et de l'Afrique.",
      intro: "Nous intervenons auprès des entreprises, des investisseurs et des institutions, dans tous les grands secteurs.",
      cta: "Tous les secteurs",
      previous: "Secteur précédent",
      next: "Secteur suivant",
    },
    work: {
      eyebrow: "Projets & Réalisations",
      title: "Des projets réels, avec leur statut actuel.",
      intro: "Nous ne présentons que des projets authentiques, menés par nos équipes.",
    },
    group: {
      eyebrow: "Le Groupe",
      title: "Une société congolaise, une ambition africaine.",
      text: "ATLAS AFRICA GROUP SARL est une société congolaise qui intervient dans toute la RDC. Société opérationnelle aujourd'hui, groupe demain : nous grandissons pas à pas, en RDC d'abord, puis vers d'autres pays africains.",
      cta: "Découvrir le groupe",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre prochain projet.",
      text: "Décrivez votre besoin en quelques lignes : nous vous recontactons pour le préciser et vous adresser une proposition.",
    },
  },

  /* ───────────── Page « Nos expertises » ───────────── */
  expertisesPage: {
    metaTitle: "Nos services",
    metaDescription:
      "Les quatre pôles d'ATLAS AFRICA GROUP : Business & Projects Development, Supply, Trading & Logistics, People, Facilities & Environment, Digital, Media & Communication.",
    eyebrow: "Nos services",
    title: "Tous nos services, expliqués pôle par pôle.",
    intro:
      "Choisissez un service précis ou confiez-nous l'ensemble de votre projet : nous coordonnons les compétences internes et les partenaires qualifiés, avec un seul interlocuteur.",
    showAll: "Voir tous les services",
    showLess: "Réduire",
    servicesCount: "services",
    offers: {
      eyebrow: "Offres spécialisées",
      title: "Trois offres prêtes à réserver.",
      intro: "Des prestations clairement définies, que vous pouvez demander en quelques minutes.",
    },
    cta: {
      title: "Vous ne savez pas par où commencer ?",
      text: "Expliquez-nous votre situation : nous vous orientons vers les bons services.",
      button: "Présenter un projet",
    },
  },

  /* ───────────── Page « Comment ça marche » ───────────── */
  howItWorksPage: {
    metaTitle: "Comment ça marche",
    metaDescription: "Comment ATLAS AFRICA GROUP coordonne ses quatre pôles pour vos projets : un scénario type et notre méthode en cinq étapes.",
    eyebrow: "Comment ça marche",
    title: "Un projet, quatre pôles, un seul interlocuteur.",
    intro: "Découvrez comment nos pôles s'enchaînent sur un projet, puis notre méthode, étape par étape.",
    integration: {
      eyebrow: "Comment nos pôles travaillent ensemble",
      title: "Un projet, quatre pôles, un seul interlocuteur.",
      intro:
        "Exemple : une entreprise s'installe à Kolwezi. Voici comment nos pôles s'enchaînent pour que tout soit prêt, sans multiplier les prestataires.",
      scenarioLabel: "Scénario type",
      stepLabel: "Étape",
      steps: [
        {
          pole: "business-projects",
          title: "Préparer l'implantation",
          text: "Étude de marché et de faisabilité, recherche de partenaires locaux, aide à la négociation.",
          items: ["Étude de faisabilité", "Partenaires identifiés", "Négociation accompagnée"],
        },
        {
          pole: "supply-logistics",
          title: "Équiper et acheminer",
          text: "Sourcing des équipements, achats et organisation des expéditions jusqu'au site. AAG Mobilité assure les déplacements des équipes.",
          items: ["Fournisseurs qualifiés", "Expéditions organisées", "Transport avec chauffeur"],
        },
        {
          pole: "people-facilities",
          title: "Mobiliser les équipes",
          text: "Recrutement et mise à disposition de personnel, formation, entretien des locaux et nettoyage du site.",
          items: ["Personnel recruté", "Équipes formées", "Site entretenu"],
        },
        {
          pole: "digital-communication",
          title: "Gérer et se faire connaître",
          text: "Outils de gestion sur mesure, site internet, campagnes ciblées et présence locale pour attirer vos premiers clients.",
          items: ["Outil de gestion", "Site internet", "Visibilité locale"],
        },
      ],
    },
    method: {
      eyebrow: "Notre méthode, à chaque étape",
      title: "Cinq étapes, du premier échange au suivi.",
      intro: "Vous savez à tout moment où en est votre projet et ce qui vient ensuite.",
    },
    cta: {
      title: "Prêt à démarrer ?",
      text: "Décrivez votre besoin : nous vous recontactons pour la première étape, l'analyse.",
      button: "Présenter un projet",
    },
  },

  /* ───────────── Page d'un pôle (libellés communs) ───────────── */
  polePage: {
    problemsTitle: "Les besoins auxquels nous répondons",
    servicesTitle: "Nos services",
    deliveryNote:
      "Pour chaque service, nous indiquons s'il est réalisé par nos équipes, avec des partenaires qualifiés, ou s'il est en développement.",
    sectorsTitle: "Secteurs concernés",
    advantagesTitle: "Pourquoi travailler avec nous",
    methodTitle: "Notre méthode d'intervention",
    referencesTitle: "Références",
    offersTitle: "Offres spécialisées",
    faqTitle: "Questions fréquentes",
    formTitle: "Parlons de votre besoin",
    formIntro: "Décrivez votre besoin : nous vous recontactons pour le préciser et vous adresser une proposition.",
    otherPoles: "Nos autres expertises",
  },

  /* ───────────── Page « Industries & Secteurs » ───────────── */
  sectorsPage: {
    metaTitle: "Industries & Secteurs",
    metaDescription:
      "Mines, énergie, construction, industrie, entreprises et institutions : les secteurs accompagnés par ATLAS AFRICA GROUP en RDC.",
    eyebrow: "Industries & Secteurs",
    title: "Un partenaire pour tous les grands secteurs de l'économie congolaise.",
    intro:
      "Chaque secteur a ses contraintes. Nous mobilisons, pour chacun, les pôles et les partenaires adaptés.",
    needsTitle: "Besoins fréquents",
    polesTitle: "Pôles mobilisés",
    cta: {
      title: "Votre secteur n'apparaît pas ?",
      text: "Nous intervenons dans tous les domaines utiles à vos activités. Parlons de votre besoin.",
      button: "Présenter un projet",
    },
  },

  /* ───────────── Page « Projets & Réalisations » ───────────── */
  workPage: {
    metaTitle: "Projets & Réalisations",
    metaDescription:
      "Projets d'ATLAS AFRICA GROUP, classés selon leur statut réel : Zando Yeto (site e-commerce, vidéo et campagnes) et LED Atlas (écrans publicitaires LED à Lubumbashi).",
    eyebrow: "Projets & Réalisations",
    title: "Ce que nous faisons, concrètement.",
    intro:
      "Nous ne présentons que des projets réels, avec leur statut actuel. Chaque projet indique notre contribution exacte.",
    groups: {
      completed: { title: "Réalisations achevées", intro: "Des projets livrés." },
      ongoing: { title: "En cours", intro: "Des projets et des activités en cours." },
      development: { title: "Projets en développement", intro: "Des projets en préparation." },
    },
    fields: {
      sector: "Secteur",
      location: "Zone",
      intervention: "Notre intervention",
      status: "Statut",
    },
    viewCase: "Voir le projet",
    cta: {
      title: "Votre projet pourrait être le prochain.",
      text: "Parlons de vos objectifs et de la manière dont nous pouvons vous aider à les atteindre.",
      button: "Présenter un projet",
    },
  },

  /* ───────────── Page « Le Groupe » ───────────── */
  groupPage: {
    metaTitle: "Le Groupe",
    metaDescription:
      "ATLAS AFRICA GROUP SARL, groupe multisectoriel congolais tourné vers l'Afrique : qui nous sommes, notre mission, notre vision, nos valeurs, notre modèle opérationnel et notre implantation.",
    eyebrow: "Le Groupe",
    title: "Une société congolaise, une ambition africaine.",
    intro:
      "ATLAS AFRICA GROUP SARL est une société congolaise. Nous aidons ceux qui entreprennent et investissent en RDC, et bientôt dans d'autres pays d'Afrique, à faire aboutir leurs projets.",
    who: {
      eyebrow: "Qui sommes-nous ?",
      title: "Un groupe multisectoriel, un seul interlocuteur.",
      text: "Nous intervenons dans tous les domaines utiles aux entreprises, aux institutions et aux investisseurs : affaires et projets, approvisionnement et logistique, ressources humaines et services aux sites, digital, médias et communication. Nous coordonnons nos équipes et des partenaires qualifiés pour livrer des solutions complètes.",
    },
    /** Notre histoire : section masquée tant que la liste est vide (voir le registre de validation). */
    history: {
      eyebrow: "Notre histoire",
      title: "Les étapes clés",
      items: [] as { year: string; text: string }[],
    },
    vision: {
      eyebrow: "Notre vision",
      title: "Devenir un partenaire de référence en RDC, puis en Afrique.",
      text: "Nous voulons être le partenaire vers lequel on se tourne pour développer et réaliser ses affaires : d'abord en RDC, et demain sur le continent.",
    },
    mission: {
      eyebrow: "Notre mission",
      title: "Faire aboutir les projets de nos clients.",
      text: "Aider les entreprises et les investisseurs à trouver les bons partenaires, à structurer leurs projets et à mobiliser les ressources nécessaires : fournisseurs, logistique, personnel, services aux sites et communication.",
    },
    values: {
      eyebrow: "Nos valeurs",
      title: "Ce qui guide notre travail.",
      items: [
        { icon: "shield", title: "Fiabilité", text: "Nous tenons nos engagements : ce qui est convenu est réalisé." },
        { icon: "eye", title: "Transparence", text: "Des propositions claires, des contrats précis, une information régulière." },
        { icon: "award", title: "Qualité", text: "Des partenaires qualifiés et des prestations vérifiées à la réception." },
        { icon: "heartHandshake", title: "Engagement local", text: "Nous travaillons avec les compétences et les entreprises congolaises." },
      ],
    },
    model: {
      eyebrow: "Notre modèle opérationnel",
      title: "Nos équipes, des partenaires qualifiés, un seul interlocuteur.",
      intro: "Nous indiquons toujours qui réalise chaque prestation.",
      items: [
        { title: "Nos équipes", text: "Les prestations que nous réalisons nous-mêmes : coordination, conseil, nettoyage, recrutement, création digitale, AAG Mobilité, LED Atlas." },
        { title: "Nos partenaires qualifiés", text: "Les prestations confiées à des partenaires que nous sélectionnons et suivons : transport, entreposage, formalités, gestion des déchets, projets énergétiques." },
        { title: "Nos projets en développement", text: "Les services en préparation, annoncés comme tels, comme le nettoyage par drone." },
      ],
      steps: [
        { label: "Aujourd'hui", title: "Une société opérationnelle", text: "Des prestations concrètes, réalisées en RDC à travers quatre pôles complémentaires." },
        { label: "Demain", title: "Un groupe", text: "Des activités qui se développent pas à pas, en RDC d'abord, puis vers d'autres pays africains." },
      ],
    },
    /** Équipe dirigeante : section masquée tant que la liste est vide. */
    leadership: {
      eyebrow: "Notre équipe dirigeante",
      title: "La direction du groupe",
      leaders: [] as Leader[],
    },
    presence: {
      eyebrow: "Notre implantation",
      title: "Présents en RDC, tournés vers l'Afrique.",
      text: "Nous intervenons dans toute la République démocratique du Congo et préparons notre développement vers d'autres pays africains.",
      places: [
        { city: "République démocratique du Congo", region: "Base opérationnelle : Lubumbashi", role: "Aujourd'hui" },
        { city: "Afrique", region: "Développement progressif, pays par pays", role: "Demain" },
      ],
    },
    commitment: {
      eyebrow: "Notre engagement professionnel",
      title: "Des engagements simples, tenus.",
      items: [
        "Une proposition écrite et un contrat avant chaque mission.",
        "Un interlocuteur désigné, joignable pendant toute la mission.",
        "Des partenaires sélectionnés et suivis par nos équipes.",
        "La confidentialité des informations que vous nous confiez.",
        "Le respect des consignes de sécurité de vos sites.",
      ],
    },
    cta: {
      title: "Travaillons ensemble.",
      text: "Présentez-nous votre projet : nous vous dirons comment nous pouvons y contribuer.",
      button: "Présenter un projet",
    },
  },

  /* ───────────── Page Contact ───────────── */
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Contactez ATLAS AFRICA GROUP, partout en RDC : demande de devis, formulaires spécialisés, WhatsApp, téléphone et e-mail.",
    eyebrow: "Contact",
    title: "Parlons de votre projet.",
    intro:
      "Choisissez le service concerné : le formulaire s'adapte à votre demande. Vous pouvez aussi nous écrire sur WhatsApp.",
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

  /* ───────────── Formulaires ───────────── */
  form: {
    name: "Nom complet",
    company: "Entreprise ou organisation",
    phone: "Téléphone",
    email: "E-mail",
    service: "Service concerné",
    message: "Description du besoin",
    optional: "facultatif",
    requiredHint: "Les champs marqués d'un astérisque (*) sont obligatoires.",
    servicePlaceholder: "Sélectionnez un service",
    messagePlaceholder: "Décrivez votre besoin en quelques lignes…",
    detailsTitle: "Précisions sur votre demande",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours…",
    privacyNote: "Vos informations servent uniquement à traiter votre demande.",
    privacyLink: "Politique de confidentialité",
    /** Options de la liste « Service concerné ». Ne pas modifier les `value`. */
    serviceOptions: [
      { value: "business-projects", label: "Développement d'affaires et projets" },
      { value: "supply-logistics", label: "Approvisionnement et commerce" },
      { value: "logistics", label: "Transport et logistique" },
      { value: "hr", label: "Ressources humaines et recrutement" },
      { value: "people-facilities", label: "Facility management et environnement" },
      { value: "aag-cleaning", label: "AAG Cleaning — nettoyage" },
      { value: "aag-mobilite", label: "AAG Mobilité — transport avec chauffeur" },
      { value: "digital-communication", label: "Digital, médias et communication" },
      { value: "offre-cle-en-main", label: "Digital — offre clé en main" },
      { value: "led-atlas", label: "LED Atlas — publicité sur écrans LED" },
      { value: "partenariat", label: "Demande de partenariat" },
      { value: "autre", label: "Autre demande" },
    ],
    /** Libellés des champs complémentaires (affichés selon le service choisi). */
    fields: {
      location: { label: "Ville ou site concerné", placeholder: "Ex. Kinshasa, Lubumbashi, Kolwezi…" },
      timeline: { label: "Échéance souhaitée", options: ["Dès que possible", "Sous un mois", "D'ici trois mois", "Plus tard"] },
      projectType: { label: "Nature du projet", placeholder: "Ex. implantation, site internet, étude…" },
      sector: {
        label: "Secteur d'activité",
        options: ["Mines et ressources naturelles", "Énergie et hydrocarbures", "Construction et infrastructures", "Industrie et commerce", "Entreprises et immobilier", "Institutions et organisations", "Autre"],
      },
      stage: { label: "Stade du projet", options: ["Idée", "Étude en cours", "Financement en cours", "Prêt à démarrer"] },
      products: { label: "Produits ou équipements recherchés" },
      quantity: { label: "Quantités estimées" },
      origin: { label: "Origine de la marchandise" },
      destination: { label: "Destination" },
      cargo: { label: "Nature de la marchandise", placeholder: "Ex. conteneur 40', palettes…" },
      need: { label: "Type de besoin", options: ["Recrutement", "Mise à disposition de personnel", "Formation", "Prestations externalisées"] },
      headcount: { label: "Nombre de personnes" },
      profile: { label: "Profils recherchés" },
      duration: { label: "Durée de la mission" },
      premises: { label: "Type de locaux", options: ["Bureaux", "Commerce", "Résidence", "Site industriel", "Chantier"] },
      surface: { label: "Surface approximative", placeholder: "Ex. 300 m²" },
      frequency: { label: "Fréquence souhaitée", options: ["Intervention ponctuelle", "Chaque semaine", "Plusieurs fois par semaine", "Chaque jour"] },
      date: { label: "Date du trajet" },
      route: { label: "Trajet", placeholder: "Ex. aéroport → hôtel, Lubumbashi → Kolwezi" },
      passengers: { label: "Nombre de passagers" },
      vehicle: { label: "Véhicule souhaité", options: ["Berline", "SUV Prado", "Indifférent"] },
      brand: { label: "Marque à promouvoir" },
      period: { label: "Période de diffusion souhaitée" },
      objective: { label: "Objectif de la campagne" },
      organization: { label: "Organisation" },
      partnershipType: { label: "Type de partenariat", options: ["Commercial", "Technique", "Fournisseur", "Investissement", "Autre"] },
      country: { label: "Pays" },
    } as Record<ExtraFieldKey, FormFieldContent>,
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
      tooMany: "Vous avez envoyé plusieurs demandes en peu de temps. Réessayez dans quelques minutes.",
    },
  },

  /* ───────────── Mentions légales ───────────── */
  legalPage: {
    metaTitle: "Mentions légales",
    metaDescription: "Mentions légales du site d'ATLAS AFRICA GROUP SARL.",
    eyebrow: "Informations légales",
    title: "Mentions légales",
    intro: "Informations sur l'éditeur du site et les conditions d'utilisation.",
    sections: [
      {
        title: "Éditeur du site",
        paragraphs: [
          "Le site atlasafricagroup.com est édité par ATLAS AFRICA GROUP SARL, société à responsabilité limitée basée à Lubumbashi, Haut-Katanga, République démocratique du Congo.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "Les textes, logos, vidéos et éléments graphiques de ce site sont la propriété d'ATLAS AFRICA GROUP SARL, sauf mention contraire. Toute reproduction sans autorisation écrite est interdite.",
        ],
      },
      {
        title: "Visuels d'illustration",
        paragraphs: [
          "Certaines images du site sont des visuels d'illustration, signalés comme tels. Ils ne représentent pas des réalisations ou des installations d'ATLAS AFRICA GROUP. Les projets réels sont présentés dans la rubrique « Projets & Réalisations ».",
        ],
      },
      {
        title: "Responsabilité",
        paragraphs: [
          "Les informations publiées sur ce site sont fournies à titre indicatif. Les prestations, conditions et délais sont précisés dans chaque proposition commerciale et chaque contrat.",
        ],
      },
      {
        title: "Données personnelles",
        paragraphs: [
          "Le traitement des informations transmises par les formulaires est décrit dans notre politique de confidentialité.",
        ],
      },
    ] as LegalSection[],
  },

  /* ───────────── Politique de confidentialité ───────────── */
  privacyPage: {
    metaTitle: "Politique de confidentialité",
    metaDescription: "Comment ATLAS AFRICA GROUP traite les informations transmises par les formulaires du site.",
    eyebrow: "Informations légales",
    title: "Politique de confidentialité",
    intro: "Ce que nous faisons des informations que vous nous transmettez.",
    sections: [
      {
        title: "Responsable du traitement",
        paragraphs: ["ATLAS AFRICA GROUP SARL, Lubumbashi, Haut-Katanga, République démocratique du Congo."],
      },
      {
        title: "Données collectées",
        paragraphs: [
          "Lorsque vous utilisez un formulaire, nous recevons les informations que vous saisissez : nom, entreprise, téléphone, e-mail, service concerné, description de votre besoin et précisions éventuelles.",
        ],
      },
      {
        title: "Utilisation",
        paragraphs: [
          "Ces informations servent uniquement à répondre à votre demande et à assurer le suivi de la relation commerciale. Elles ne sont ni vendues ni cédées à des tiers.",
        ],
      },
      {
        title: "Destinataires",
        paragraphs: [
          "Les demandes sont reçues par l'équipe d'ATLAS AFRICA GROUP. Elles transitent par un service d'envoi d'e-mails utilisé uniquement pour leur acheminement.",
        ],
      },
      {
        title: "Durée de conservation",
        paragraphs: [
          "Les informations sont conservées le temps nécessaire au traitement de votre demande et au suivi de la relation commerciale.",
        ],
      },
      {
        title: "Vos droits",
        paragraphs: [
          "Vous pouvez demander à consulter, corriger ou supprimer vos informations en écrivant à l'adresse e-mail indiquée sur la page Contact.",
        ],
      },
      {
        title: "Cookies et services tiers",
        paragraphs: [
          "Ce site n'utilise pas de cookies publicitaires ni de mesure d'audience. La carte de la page Contact (Google Maps) se charge lorsque vous faites défiler la page jusqu'à elle ; Google peut alors appliquer ses propres règles et cookies. Les liens WhatsApp ouvrent le service de WhatsApp, soumis à ses propres conditions.",
        ],
      },
    ] as LegalSection[],
  },

  /* ───────────── Pied de page ───────────── */
  footer: {
    tagline: "Groupe multisectoriel congolais, tourné vers l'Afrique. Vos ambitions, notre capacité d'action.",
    navTitle: "Navigation",
    polesTitle: "Nos expertises",
    offersTitle: "Nos offres",
    contactTitle: "Contact",
    legalTitle: "Informations légales",
    rights: "Tous droits réservés.",
    location: "République démocratique du Congo · Afrique",
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
