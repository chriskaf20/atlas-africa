/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — ENGLISH
 * ─────────────────────────────────────────────────────────────────────────
 *  Traduction de `fr.ts` : même structure, mêmes champs. Quand un texte
 *  change dans `fr.ts`, reportez la modification ici.
 *  Les champs `id`, `icon`, `value`, `serviceValue`, `src`, `image`, `video`
 *  doivent rester identiques à ceux du français.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { Content } from "./fr";

export const en: Content = {
  meta: {
    title: "ATLAS AFRICA GROUP — Your business partner in Lubumbashi, DRC",
    description:
      "ATLAS AFRICA GROUP SARL supports companies and investors in the DRC: business development, supply and logistics, staffing and site services, digital communication. Based in Lubumbashi, Haut-Katanga.",
    keywords: [
      "ATLAS AFRICA GROUP",
      "Lubumbashi",
      "Haut-Katanga",
      "DRC",
      "business development",
      "business introduction",
      "procurement",
      "logistics",
      "chauffeur service",
      "recruitment",
      "industrial cleaning",
      "website design",
      "online advertising",
      "LED advertising screens",
    ],
    ogImageAlt: "ATLAS AFRICA GROUP — Your business partner in the DRC",
  },

  nav: {
    home: "Home",
    services: "Our services",
    sectors: "Sectors",
    work: "Our work",
    about: "About",
    contact: "Contact",
    cta: "Request a quote",
    skipToContent: "Skip to content",
    mainLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeLinkLabel: "ATLAS AFRICA GROUP — back to home",
    languageLabel: "Language",
    offers: "Offers",
  },

  common: {
    quoteCta: "Request a quote",
    servicesCta: "Explore our services",
    discoverPole: "Explore this division",
    poleLabel: "Division",
    newBadge: "New",
    viewCase: "View the project",
    allWork: "All our work",
    whatsappCta: "Chat on WhatsApp",
    whatsappMessage: "Hello, I would like to talk to ATLAS AFRICA GROUP about…",
    mediaSoon: "Visual coming soon",
    videoSoon: "Video coming soon",
    figuresNote: "Figures to be published soon.",
    discoverOffer: "View the offer",
    callShort: "Call",
    quoteShort: "Quote",
    quickActions: "Quick actions",
    offerLabel: "Offer",
    directContact: "Or contact us directly",
    breadcrumbLabel: "Breadcrumb",
  },

  poles: [
    {
      id: "business-projects",
      number: "01",
      icon: "briefcase",
      name: "Business & Projects",
      badge: null,
      tagline: "Opening the right doors, structuring your projects.",
      summary:
        "We help you enter the Congolese market, find the right partners and carry out your projects, from study to delivery.",
      services: [
        {
          icon: "handshake",
          title: "Business development",
          badge: null,
          description: null,
          items: [
            "Business introductions",
            "Partner search",
            "Commercial representation",
            "Negotiation support",
            "Support for setting up in the DRC",
          ],
        },
        {
          icon: "clipboard",
          title: "Studies and project management",
          badge: null,
          description: null,
          items: [
            "Market and feasibility studies",
            "Business plans",
            "Project structuring",
            "Planning",
            "Coordination and delivery follow-up",
          ],
        },
        {
          icon: "energy",
          title: "Technology and energy",
          badge: null,
          description: null,
          items: [
            "Digital solutions",
            "Digitalisation of management processes",
            "Solar and energy-efficiency projects, with technical partners",
          ],
        },
      ],
      faq: [
        {
          question: "Do you support foreign companies setting up in the DRC?",
          answer:
            "Yes. We search for partners, provide commercial representation, help with negotiation and support you as you set up locally.",
        },
        {
          question: "Can you work on a single stage of a project?",
          answer:
            "Yes. You can entrust us with a study alone (market, feasibility, business plan) or with full coordination of the project, from structuring to delivery follow-up.",
        },
        {
          question: "How does a collaboration start?",
          answer:
            "With a conversation to qualify your need. We then send you a proposal, followed by a contract that sets out what will be delivered.",
        },
      ],
      showcase: null,
      featured: null,
    },
    {
      id: "supply-logistics",
      number: "02",
      icon: "truck",
      name: "Supply & Logistics",
      badge: null,
      tagline: "Sourcing, shipping, moving.",
      summary:
        "From sourcing to delivery, we secure your supplies and organise your flows with qualified operators.",
      services: [
        {
          icon: "package",
          title: "Procurement and trade",
          badge: null,
          description: null,
          items: [
            "Supplier sourcing and qualification",
            "Purchasing",
            "Trading",
            "Import-export",
            "Supply of equipment and consumables",
          ],
        },
        {
          icon: "warehouse",
          title: "Transport and logistics",
          badge: null,
          description: null,
          items: ["Shipment organisation", "Warehousing", "Distribution with qualified operators"],
        },
        {
          icon: "car",
          title: "AAG Mobilité",
          badge: null,
          description: "Premium chauffeur-driven transport.",
          items: [
            "Saloon car and Prado SUV",
            "Hotel and airport transfers",
            "Vehicles on hire for companies",
            "Lubumbashi – Likasi – Kolwezi missions",
          ],
        },
      ],
      faq: [
        {
          question: "What can you supply?",
          answer:
            "Equipment and consumables. We source and qualify suppliers, then handle purchasing, trading and import-export according to your need.",
        },
        {
          question: "Which routes does AAG Mobilité cover?",
          answer:
            "In Lubumbashi, for transfers between hotels and the airport, and along the Lubumbashi – Likasi – Kolwezi route for missions.",
        },
        {
          question: "Do you transport goods yourselves?",
          answer:
            "We organise shipments, warehousing and distribution with qualified operators, and you keep a single point of contact.",
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
      tagline: "The teams and services that keep your sites running.",
      summary:
        "Staff, cleanliness, environment: we take care of support functions so your teams can focus on their core work.",
      services: [
        {
          icon: "userCheck",
          title: "Human resources",
          badge: null,
          description: null,
          items: ["Recruitment and selection", "Staff provision", "Training", "Outsourced services"],
        },
        {
          icon: "sparkles",
          title: "AAG Cleaning",
          badge: null,
          description: null,
          items: [
            "Regular cleaning of offices, shops and residences",
            "Deep cleaning",
            "Post-construction cleaning",
            "Industrial cleaning",
          ],
        },
        {
          icon: "drone",
          title: "Drone cleaning",
          badge: "Coming soon",
          description: null,
          items: ["Façades", "Roofs", "Solar panels"],
        },
        {
          icon: "leaf",
          title: "Environment",
          badge: null,
          description: null,
          items: ["Green space maintenance", "Sanitation", "Waste management with authorised partners"],
        },
      ],
      faq: [
        {
          question: "Which premises do you clean?",
          answer:
            "Offices, shops and residences, on a regular basis. We also provide deep cleaning, post-construction cleaning and industrial cleaning.",
        },
        {
          question: "Is drone cleaning already available?",
          answer:
            "Not yet. This service for façades, roofs and solar panels will be offered soon: contact us to be told when it launches.",
        },
        {
          question: "Can you provide staff?",
          answer:
            "Yes. We recruit, select and provide staff, and we also offer training and outsourced services.",
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
      badge: "New",
      tagline: "Making your business visible where your customers look for you.",
      summary:
        "Website, video, online advertising and local presence: everything it takes to be found, then chosen.",
      services: [
        {
          icon: "monitor",
          title: "Custom website design",
          badge: null,
          description: "Modern websites that reflect your company's image.",
          items: [],
        },
        {
          icon: "dashboard",
          title: "Business management systems",
          badge: null,
          description:
            "Custom tools to manage your sales, stock, invoicing, staff and customers from a single place.",
          items: [],
        },
        {
          icon: "video",
          title: "Advertising video production",
          badge: null,
          description: "Striking video content, designed to be remembered.",
          items: [],
        },
        {
          icon: "target",
          title: "Targeted advertising campaigns",
          badge: null,
          description: "Visible campaigns on Google, Google Maps and social media.",
          items: [],
        },
        {
          icon: "mapPin",
          title: "Local presence optimisation",
          badge: null,
          description: "Creation and management of your Google profile to attract local customers.",
          items: [],
        },
      ],
      faq: [
        {
          question: "What does the all-in-one offer include?",
          answer: "A website, advertising, video and monthly follow-up, combined in a single offer.",
        },
        {
          question: "Which channels do you run campaigns on?",
          answer:
            "Google, Google Maps and social media. In Lubumbashi, your messages can also be shown on the LED Atlas screens.",
        },
        {
          question: "Do you also build management tools?",
          answer:
            "Yes. We design custom management systems for your sales, stock, invoicing, staff and customers.",
        },
      ],
      showcase: {
        title: "Our video work",
        intro: "Two films produced by our team for projects carried out in Lubumbashi.",
        items: [
          {
            src: "/media/led-atlas.mp4",
            poster: "/media/led-atlas-poster.jpg",
            title: "LED Atlas",
            caption: "Presentation film for the LED screen network (in French)",
            orientation: "landscape",
          },
          {
            src: "/media/zando-yetu.mp4",
            poster: "/media/zando-yetu-poster.jpg",
            title: "Zando Yeto",
            caption: "Launch video for the online shop (in French)",
            orientation: "portrait",
          },
        ],
      },
      featured: {
        eyebrow: "All-in-one offer",
        title: "Monthly follow-up and full support",
        description:
          "Website, advertising, video and regular follow-up combined in a single offer, designed to generate leads from the first month.",
        items: ["Website", "Advertising", "Video", "Regular follow-up"],
        cta: "Launch my visibility",
        serviceValue: "offre-cle-en-main",
      },
    },
  ],

  offers: [
    {
      id: "aag-mobilite",
      name: "AAG Mobilité",
      icon: "car",
      serviceTitle: "AAG Mobilité",
      metaTitle: "AAG Mobilité — chauffeur-driven transport in Lubumbashi",
      metaDescription:
        "AAG Mobilité: premium chauffeur-driven transport in Lubumbashi (saloon car and Prado SUV), hotel and airport transfers, vehicles on hire for companies, Lubumbashi – Likasi – Kolwezi missions.",
      eyebrow: "Supply & Logistics",
      title: "Chauffeur-driven travel in Lubumbashi and across Haut-Katanga.",
      intro:
        "Premium transport for your executives, teams and visitors: a suitable vehicle, a driver, and a single point of contact to organise it all.",
      summary: "Premium chauffeur-driven transport, transfers and missions.",
      featuresTitle: "What the offer includes",
      features: [
        { icon: "car", title: "Saloon car or Prado SUV", text: "The vehicle is chosen to suit the route and the number of passengers." },
        { icon: "concierge", title: "Hotel and airport transfers", text: "Pick-up on arrival and drop-off on departure." },
        { icon: "briefcase", title: "Vehicles on hire for companies", text: "A chauffeur-driven vehicle reserved for your teams and visitors." },
        { icon: "mapPin", title: "Lubumbashi – Likasi – Kolwezi missions", text: "Business travel along the Haut-Katanga mining corridor." },
      ],
      media: null,
      formTitle: "Book a vehicle",
      formIntro: "Tell us the date, the route and the number of passengers: we will contact you to confirm.",
      serviceValue: "aag-mobilite",
    },
    {
      id: "aag-cleaning",
      name: "AAG Cleaning",
      icon: "sparkles",
      serviceTitle: "AAG Cleaning",
      metaTitle: "AAG Cleaning — professional cleaning in Lubumbashi",
      metaDescription:
        "AAG Cleaning: regular cleaning of offices, shops and residences in Lubumbashi, deep cleaning, post-construction cleaning and industrial cleaning.",
      eyebrow: "People & Facilities",
      title: "Clean premises, maintained by a professional team.",
      intro:
        "Regular cleaning or a one-off job: we look after the cleanliness of your offices, shops, residences and sites.",
      summary: "Regular cleaning, deep cleaning and industrial cleaning.",
      featuresTitle: "What the offer includes",
      features: [
        { icon: "building", title: "Regular cleaning", text: "Offices, shops and residences, at a frequency we agree together." },
        { icon: "sparkles", title: "Deep cleaning", text: "A complete job to bring your premises back to a clean state." },
        { icon: "clipboard", title: "Post-construction cleaning", text: "Premises ready to be handed over or occupied after the works." },
        { icon: "factory", title: "Industrial cleaning", text: "Services suited to industrial sites and facilities." },
      ],
      media: null,
      formTitle: "Request a cleaning quote",
      formIntro: "Describe your premises (type, approximate area, desired frequency): we will contact you.",
      serviceValue: "aag-cleaning",
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      icon: "monitorPlay",
      serviceTitle: "",
      metaTitle: "LED Atlas — advertising on LED screens in Lubumbashi",
      metaDescription:
        "LED Atlas: run your advertising on a network of LED screens in Lubumbashi. High-definition screens, visible day and night, with a broadcast report for each campaign.",
      eyebrow: "Digital & Communication",
      title: "Your brand on the LED screens of Lubumbashi.",
      intro:
        "A network of LED advertising screens that shows your messages in images and motion, on busy roads in the city.",
      summary: "Advertising on a network of LED screens in Lubumbashi.",
      featuresTitle: "What the offer includes",
      features: [
        { icon: "monitorPlay", title: "High-definition LED screens", text: "A bright, animated display, visible day and night." },
        { icon: "mapPin", title: "Locations in Lubumbashi", text: "Screens installed on busy roads in the city." },
        { icon: "megaphone", title: "Your spots on air", text: "Your messages are scheduled and shown across the network." },
        { icon: "clipboard", title: "Broadcast report", text: "A record of when your spot was shown, for each campaign." },
      ],
      media: {
        video: "/media/led-atlas.mp4",
        poster: "/media/led-atlas-poster.jpg",
        alt: "Presentation film for the LED Atlas screen network (in French)",
      },
      formTitle: "Book advertising space",
      formIntro: "Tell us about your brand and the period you want: we will send you the available locations.",
      serviceValue: "led-atlas",
    },
  ],

  sectors: [
    { icon: "pickaxe", label: "Mining" },
    { icon: "fuel", label: "Oil and gas" },
    { icon: "zap", label: "Energy" },
    { icon: "factory", label: "Industry" },
    { icon: "building", label: "Construction and real estate" },
    { icon: "store", label: "Trade" },
    { icon: "concierge", label: "Services" },
    { icon: "landmark", label: "Public and private organisations" },
  ],

  method: [
    {
      title: "Qualification",
      description: "We listen to your need and define the scope, constraints and priorities together.",
    },
    {
      title: "Proposal and contract",
      description:
        "You receive a clear proposal: services, resources, timeline and terms. The contract sets out each party's commitments.",
    },
    {
      title: "Delivery",
      description:
        "We mobilise the resources and qualified partners, coordinate the work and keep you informed.",
    },
    {
      title: "Handover and follow-up",
      description:
        "We check with you what has been delivered, then remain available for follow-up and adjustments.",
    },
  ],

  caseStudies: [
    {
      id: "zando-yeto",
      name: "Zando Yeto",
      sector: "Fashion",
      icon: "shoppingBag",
      headline: "A fashion brand, visible and sold online.",
      summary:
        "E-commerce website, video and advertising campaigns: a complete set-up to present the collections and sell online.",
      image: "/media/zando-yetu-card.jpg",
      video: "/media/zando-yetu.mp4",
      videoPoster: "/media/zando-yetu-poster.jpg",
      videoLabel: "Zando Yeto launch video (in French)",
      imageAlt: "Preview of the Zando Yeto e-commerce website",
      deliverablesTitle: "What we delivered",
      deliverables: [
        {
          icon: "monitor",
          title: "E-commerce website",
          description: "An online shop to present the collections and take orders.",
          image: null,
        },
        {
          icon: "video",
          title: "Video",
          description: "An advertising video to make the brand known.",
          image: null,
        },
        {
          icon: "target",
          title: "Advertising campaigns",
          description: "Targeted campaigns to bring visitors to the shop.",
          image: null,
        },
      ],
      statsTitle: "In figures",
      stats: [
        { value: "—", label: "Products online" },
        { value: "—", label: "Video views" },
        { value: "—", label: "People reached by the campaigns" },
      ],
      cta: "Start a similar project",
      serviceValue: "digital-communication",
      advertisers: null,
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      sector: "Outdoor advertising",
      icon: "monitorPlay",
      headline: "A network of LED advertising screens in Lubumbashi.",
      summary:
        "LED screens installed in Lubumbashi to show advertisers' messages, in images and motion.",
      image: "/media/led-atlas-poster.jpg",
      video: null,
      videoPoster: null,
      videoLabel: "",
      imageAlt: "LED Atlas advertising screen in Lubumbashi",
      deliverablesTitle: "The set-up",
      deliverables: [
        {
          icon: "monitorPlay",
          title: "LED screens",
          description: "A bright, animated display, visible day and night.",
          image: null,
        },
        {
          icon: "mapPin",
          title: "Locations in Lubumbashi",
          description: "Screens installed on busy roads in the city.",
          image: null,
        },
        {
          icon: "megaphone",
          title: "Broadcasting for advertisers",
          description: "Your spots scheduled and shown across the network.",
          image: null,
        },
      ],
      statsTitle: "In figures",
      stats: [
        { value: "—", label: "Screens in service" },
        { value: "—", label: "Locations" },
        { value: "—", label: "Broadcast hours per day" },
      ],
      cta: "Advertise on LED Atlas",
      serviceValue: "led-atlas",
      advertisers: {
        title: "For advertisers",
        intro: "Show your brand on the LED Atlas screens. Here is what we make available to you.",
        locationsTitle: "Locations",
        locations: [
          { name: "Location 1", detail: "Address and description to be confirmed" },
          { name: "Location 2", detail: "Address and description to be confirmed" },
          { name: "Location 3", detail: "Address and description to be confirmed" },
        ],
        visibilityTitle: "Visibility",
        visibility: [
          { value: "—", label: "Daily passers-by in front of the screens" },
          { value: "—", label: "Times your spot is shown per day" },
          { value: "—", label: "Broadcast hours" },
        ],
        videoTitle: "Demonstration video",
        video: "/media/led-atlas.mp4",
        videoPoster: "/media/led-atlas-poster.jpg",
        videoCaption: "See how the screens look in situ (video in French).",
      },
    },
  ],

  home: {
    hero: {
      eyebrow: "Lubumbashi · Haut-Katanga · DRC",
      title: "Your business in the DRC,",
      rotating: ["developed.", "supplied.", "staffed.", "made visible."],
      titleFull: "Your business in the DRC, developed, supplied, staffed and made visible.",
      subtitle:
        "One partner in Lubumbashi to find the right partners, secure your supplies, mobilise staff and get your company known. In the DRC, and tomorrow across Africa.",
      statsLabel: "ATLAS AFRICA GROUP in figures",
      stats: [
        { value: 4, suffix: "", label: "complementary divisions" },
        { value: 14, suffix: "", label: "available services" },
        { value: 8, suffix: "", label: "sectors served" },
        { value: 1, suffix: "", label: "point of contact for your whole project" },
      ],
      floating: [
        { title: "Lubumbashi – Likasi – Kolwezi", text: "Assignments, transfers and deliveries" },
      ],
    },

    about: {
      eyebrow: "About us",
      statement: [
        { text: "We believe in one simple thing:" },
        { text: "what is agreed gets done.", accent: true },
        { text: "With method, with" },
        { text: "efficiency,", accent: true },
        { text: "and a single point of contact, we move your projects forward in the DRC." },
      ] as { text: string; accent?: boolean }[],
      valuesTitle: "Our values",
      cta: "Find out who we are",
    },
    poles: {
      eyebrow: "Our divisions",
      title: "Four divisions to cover all your needs.",
      intro:
        "From the first business contact to the day-to-day running of your sites, a single partner coordinates the skills you need.",
      tabsLabel: "Choose a division",
      servicesLabel: "Services in this division",
      offerLabel: "Featured offer",
      quoteCta: "Request a quote",
    },


    integration: {
      eyebrow: "How it works",
      title: "One project, four divisions, one point of contact.",
      intro:
        "Example: a company sets up in Kolwezi. Here is how our divisions work in sequence so that everything is ready, without multiplying contractors.",
      scenarioLabel: "Typical scenario",
      stepLabel: "Step",
      steps: [
        {
          pole: "business-projects",
          title: "Prepare the set-up",
          text: "Market and feasibility studies, search for local partners, negotiation support.",
          items: ["Feasibility study", "Partners identified", "Negotiation support"],
        },
        {
          pole: "supply-logistics",
          title: "Equip and ship",
          text: "Equipment sourcing, purchasing, import and shipments organised to the site. AAG Mobilité handles staff travel.",
          items: ["Vetted suppliers", "Organised shipments", "Chauffeur-driven transport"],
        },
        {
          pole: "people-facilities",
          title: "Mobilise the teams",
          text: "Recruitment and provision of staff, training, office upkeep and site cleaning.",
          items: ["Staff recruited", "Teams trained", "Site maintained"],
        },
        {
          pole: "digital-communication",
          title: "Manage and get known",
          text: "Custom management tools, website, targeted campaigns and local presence to attract your first customers.",
          items: ["Management tool", "Website", "Local visibility"],
        },
      ],
      methodTitle: "Our method, at every step",
      cta: "Describe my project",
    },

    tracking: {
      eyebrow: "Supply & Logistics",
      title: "Your goods tracked, from supplier to site.",
      intro:
        "We organise every shipment with qualified operators and keep you informed at each step. Here is the typical journey of a container to Haut-Katanga.",
      exampleBadge: "Example journey",
      referenceLabel: "Reference",
      reference: "AAG-EXP-0418",
      cargoLabel: "Cargo",
      cargo: "40' container · industrial equipment",
      originLabel: "Origin",
      origin: "Port of Dar es Salaam",
      destinationLabel: "Destination",
      destination: "Kolwezi, Lualaba",
      statusLabel: "Current step",
      progressLabel: "Progress",
      stepsLabel: "Journey steps",
      steps: [
        {
          label: "Order confirmed",
          place: "Vetted supplier",
          text: "The supplier is selected, the price negotiated and the order placed.",
        },
        {
          label: "Arrival at port",
          place: "Dar es Salaam",
          text: "The container is received and its collection organised.",
        },
        {
          label: "Road transit",
          place: "Tanzania – Zambia corridor",
          text: "Carried by semi-trailer truck with a qualified haulier.",
        },
        {
          label: "Border crossing",
          place: "Kasumbalesa",
          text: "Import formalities followed up with our partners.",
        },
        {
          label: "Delivered on site",
          place: "Lubumbashi · Kolwezi",
          text: "Warehousing if needed, then delivery to the agreed address.",
        },
      ],
      play: "Play the animation",
      pause: "Pause the animation",
      note: "Illustration: each journey is defined with you according to origin, cargo and destination.",
      cta: "Organise a shipment",
      serviceValue: "supply-logistics",
    },
    sectors: {
      eyebrow: "Sectors served",
      title: "Alongside the players who drive Katanga's economy.",
      intro: "We work with companies, investors and institutions, whatever their sector.",
      previous: "Previous sector",
      next: "Next sector",
      cta: "Talk about your project",
      details: {
        pickaxe: {
          text: "Equipment and consumables, staff transport, personnel and upkeep of mining sites.",
          tags: ["Supply", "Mobility", "Staffing"],
        },
        fuel: {
          text: "Supplies, logistics and site services for oil and gas operators.",
          tags: ["Logistics", "Site services"],
        },
        zap: {
          text: "Solar and energy-efficiency projects, carried out with technical partners.",
          tags: ["Studies", "Solar", "Partners"],
        },
        factory: {
          text: "Sourcing, industrial cleaning and staff to keep your facilities running.",
          tags: ["Sourcing", "Industrial cleaning"],
        },
        building: {
          text: "Project coordination, post-construction cleaning and premises restoration.",
          tags: ["Projects", "Post-construction"],
        },
        store: {
          text: "Website, online shop, ad campaigns and LED screens to sell more.",
          tags: ["Digital", "Advertising", "LED"],
        },
        concierge: {
          text: "Chauffeur-driven transport, premises upkeep and custom management tools.",
          tags: ["Mobility", "Upkeep", "Management"],
        },
        landmark: {
          text: "Studies, project support and outsourced services for organisations.",
          tags: ["Studies", "Outsourced services"],
        },
      } as Record<string, { text: string; tags: string[] }>,
    },
    contact: {
      eyebrow: "Contact",
      title: "A project, a need? Let's talk.",
      text: "Describe your need in a few lines. We will contact you to clarify it and send you a proposal.",
    },
  },

  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "The four divisions of ATLAS AFRICA GROUP: Business & Projects, Supply & Logistics, People & Facilities, Digital & Communication. Services for companies and investors in the DRC.",
    eyebrow: "Our services",
    title: "Everything it takes to do business in the DRC.",
    intro:
      "Four complementary divisions, a single point of contact. Choose one service or entrust us with your whole project.",
    polesNavLabel: "Quick access to divisions",
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Not sure where to start?",
      text: "Tell us about your situation: we will point you to the right services.",
      button: "Request a quote",
    },
  },

  workPage: {
    metaTitle: "Our work",
    metaDescription:
      "ATLAS AFRICA GROUP case studies: Zando Yeto (e-commerce website, video and advertising campaigns) and LED Atlas (network of LED advertising screens in Lubumbashi).",
    eyebrow: "Our work",
    title: "What we do, in practice.",
    intro:
      "Two projects that show how we work: a precise need, a complete set-up, and follow-up over time.",
    casesNavLabel: "Quick access to projects",
    cta: {
      title: "Your project could be next.",
      text: "Let's talk about your goals and how we can help you reach them.",
      button: "Request a quote",
    },
  },

  aboutPage: {
    metaTitle: "About",
    metaDescription:
      "ATLAS AFRICA GROUP SARL, a company based in Lubumbashi: our vision, mission, values and approach — an operating company first, then a group.",
    eyebrow: "About",
    title: "A Congolese company with an African ambition.",
    intro:
      "ATLAS AFRICA GROUP SARL is based in Lubumbashi, in Haut-Katanga. We help those who do business and invest in the DRC to see their projects through.",
    vision: {
      eyebrow: "Vision",
      title: "To become a leading partner in the DRC, then in Africa.",
      text: "We want to be the partner people turn to in order to develop and deliver their business: first in the DRC, and tomorrow across the continent.",
    },
    mission: {
      eyebrow: "Mission",
      title: "Seeing our clients' projects through.",
      text: "Helping companies and investors find the right partners, structure their projects and mobilise the resources they need: suppliers, logistics, staff, site services and communication.",
    },
    values: {
      eyebrow: "Values",
      title: "What guides our work.",
      items: [
        { icon: "shield", title: "Reliability", text: "We keep our commitments: what is agreed is delivered." },
        { icon: "eye", title: "Transparency", text: "Clear proposals, precise contracts, regular updates." },
        { icon: "award", title: "Quality", text: "Qualified partners and services checked at handover." },
        { icon: "heartHandshake", title: "Local commitment", text: "We work with the skills and companies of Haut-Katanga." },
      ],
    },
    approach: {
      eyebrow: "Our approach",
      title: "An operating company first, then a group.",
      intro: "We move forward step by step: deliver first, then grow on what has proved itself.",
      steps: [
        {
          label: "Today",
          title: "An operating company",
          text: "Concrete services, delivered in Lubumbashi and Haut-Katanga through four complementary divisions.",
        },
        {
          label: "Tomorrow",
          title: "A group",
          text: "Activities that grow step by step, first in the DRC, then towards other African countries.",
        },
      ],
    },
    sectors: {
      eyebrow: "Sectors served",
      title: "We work with every sector of the economy.",
    },
    cta: {
      title: "Let's work together.",
      text: "Tell us about your project: we will tell you how we can contribute.",
      button: "Contact us",
    },
  },

  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Contact ATLAS AFRICA GROUP SARL in Lubumbashi (Haut-Katanga, DRC): quote request, contact form, WhatsApp, phone and email.",
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    intro: "Fill in the form or write to us on WhatsApp. We will get back to you to clarify your need.",
    formTitle: "Your request",
    detailsTitle: "Our contact details",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    country: "Democratic Republic of the Congo",
    mapTitle: "Find us",
    mapIframeTitle: "Google Maps map of Lubumbashi",
    mapPlaceholder: "Lubumbashi, Haut-Katanga",
    mapOpen: "Open in Google Maps",
  },

  form: {
    name: "Full name",
    company: "Company",
    phone: "Phone",
    email: "Email",
    service: "Service required",
    message: "Message",
    optional: "optional",
    requiredHint: "Fields marked with an asterisk (*) are required.",
    servicePlaceholder: "Select a service",
    messagePlaceholder: "Describe your need in a few lines…",
    submit: "Send my request",
    sending: "Sending…",
    serviceOptions: [
      { value: "business-projects", label: "Business & Projects" },
      { value: "supply-logistics", label: "Supply & Logistics" },
      { value: "people-facilities", label: "People & Facilities" },
      { value: "digital-communication", label: "Digital & Communication" },
      { value: "offre-cle-en-main", label: "Digital — all-in-one offer" },
      { value: "led-atlas", label: "LED Atlas — advertising screens" },
      { value: "aag-mobilite", label: "AAG Mobilité — chauffeur-driven transport" },
      { value: "aag-cleaning", label: "AAG Cleaning — cleaning" },
      { value: "autre", label: "Other request" },
    ],
    errors: {
      required: "This field is required.",
      nameTooShort: "Please enter your full name.",
      invalidEmail: "This email address does not look valid.",
      invalidPhone: "This phone number does not look valid.",
      messageTooShort: "Your message is a little short: please describe your need.",
      tooLong: "This text is too long.",
      summary: "Please correct the highlighted fields.",
    },
    success: {
      title: "Your request has been sent.",
      text: "Thank you for your trust. We will contact you to clarify your need.",
      again: "Send another request",
    },
    failure: {
      generic: "Your request could not be sent. Try again in a moment, or contact us by WhatsApp or phone.",
      notConfigured: "The form is not active yet. Please contact us by WhatsApp or phone.",
    },
  },

  footer: {
    tagline: "Your partner to develop and deliver your business in the DRC, and tomorrow across Africa.",
    navTitle: "Navigation",
    polesTitle: "Our divisions",
    offersTitle: "Our offers",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    location: "Lubumbashi, Haut-Katanga, DRC",
  },

  notFound: {
    eyebrow: "Error 404",
    title: "This page cannot be found.",
    text: "The link may be wrong, or the page may have moved.",
    home: "Back to home",
    contact: "Contact us",
  },
};
