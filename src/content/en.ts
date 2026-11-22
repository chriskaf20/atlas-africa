/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — ENGLISH
 * ─────────────────────────────────────────────────────────────────────────
 *  Same structure as `fr.ts` (enforced by the `Content` type).
 *  Only publish confirmed information (see `docs/registre-validation.md`).
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { ExtraFieldKey } from "@/lib/form-schema";
import type { Content } from "./fr";
import type {
  CaseStudy,
  FormFieldContent,
  Leader,
  LegalSection,
  Offer,
  Pole,
  Sector,
} from "./types";

export const en: Content = {
  meta: {
    title: "ATLAS AFRICA GROUP — Multi-sector group in the DRC",
    description:
      "ATLAS AFRICA GROUP supports companies, institutions and investors in the DRC: business and project development, supply and logistics, human resources and facility management, digital, media and communication. Based in Lubumbashi.",
    keywords: [
      "ATLAS AFRICA GROUP",
      "multi-sector group DRC",
      "B2B services DRC",
      "Lubumbashi",
      "Haut-Katanga",
      "business development DRC",
      "supply and logistics",
      "chauffeur service Lubumbashi",
      "recruitment DRC",
      "facility management",
      "industrial cleaning",
      "website design",
      "digital advertising",
      "LED advertising screens",
    ],
    ogImageAlt: "ATLAS AFRICA GROUP — Your ambitions. Our capacity to act.",
  },

  nav: {
    home: "Home",
    expertises: "Our services",
    howItWorks: "How it works",
    sectors: "Industries & Sectors",
    work: "Projects & Track record",
    group: "The Group",
    contact: "Contact",
    short: {
      expertises: "Services",
      sectors: "Sectors",
      work: "Projects",
      group: "The Group",
    },
    cta: "Submit a project",
    skipToContent: "Skip to content",
    mainLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeLinkLabel: "ATLAS AFRICA GROUP — back to home",
    languageLabel: "Language",
    offers: "Offers",
    legal: "Legal notice",
    privacy: "Privacy",
  },

  common: {
    quoteCta: "Request a quote",
    projectCta: "Submit a project",
    expertisesCta: "Explore our services",
    discoverPole: "Explore this division",
    poleLabel: "Division",
    allWork: "All our projects",
    whatsappCta: "Chat on WhatsApp",
    whatsappMessage: "Hello, I would like to talk with ATLAS AFRICA GROUP about…",
    discoverOffer: "See the offer",
    callShort: "Call",
    quoteShort: "Quote",
    quickActions: "Quick actions",
    offerLabel: "Offer",
    directContact: "Or contact us directly",
    breadcrumbLabel: "Breadcrumb",
    illustration: "Illustration",
    delivery: {
      internal: "By our teams",
      partners: "With qualified partners",
      development: "In development",
    },
    status: {
      completed: "Completed",
      ongoing: "Ongoing",
      development: "In development",
    },
  },

  poles: [
    {
      id: "business-projects",
      number: "01",
      icon: "briefcase",
      name: "Business & Projects Development",
      badge: null,
      tagline: "Opening the right doors, structuring your projects.",
      summary:
        "We identify opportunities, connect the right players and structure your projects in the DRC, from study to delivery.",
      metaTitle: "Business & Projects Development — business development in the DRC",
      metaDescription:
        "Business development, B2B matchmaking, project structuring, commercial advice, investor support and partnership development in the DRC.",
      headline: "Moving your business and projects forward in the DRC.",
      intro:
        "Entering a market, finding reliable partners, structuring a project: we support you at every step, with on-the-ground knowledge of the Congolese market and a network of local players.",
      problems: [
        "You want to set up in the DRC without a reliable contact on the ground.",
        "You are looking for qualified partners, suppliers or customers.",
        "Your project needs to be studied, costed and planned before it starts.",
        "You need a representative to negotiate and follow up on your interests locally.",
      ],
      services: [
        {
          icon: "handshake",
          title: "Business development",
          description: null,
          items: ["Business introduction", "Identification of commercial opportunities", "Commercial representation"],
          delivery: "internal",
        },
        {
          icon: "network",
          title: "B2B facilitation and matchmaking",
          description: null,
          items: ["Search for partners and suppliers", "Business meetings", "Negotiation support"],
          delivery: "internal",
        },
        {
          icon: "clipboard",
          title: "Project structuring and support",
          description: null,
          items: ["Market and feasibility studies", "Business plans and project set-up", "Planning, coordination and delivery follow-up"],
          delivery: "internal",
        },
        {
          icon: "target",
          title: "Commercial advice and strategy",
          description: null,
          items: ["Market analysis and positioning", "Strategy to enter the Congolese market", "Commercial action plans"],
          delivery: "internal",
        },
        {
          icon: "globe",
          title: "Investor support",
          description: null,
          items: ["Support to set up in the DRC", "Introductions to local players", "Follow-up of your interests on the ground"],
          delivery: "internal",
        },
        {
          icon: "heartHandshake",
          title: "Partnership development",
          description: null,
          items: ["Commercial and technical partnerships", "Alliances with local companies", "Partner relationship follow-up"],
          delivery: "internal",
        },
        {
          icon: "energy",
          title: "Energy projects",
          description: "Solar and energy-efficiency projects, carried out with technical partners.",
          items: [],
          delivery: "partners",
        },
      ],
      groups: [],
      sectors: ["mines", "energy", "construction", "industry", "business", "institutions"],
      advantages: [
        { title: "On-the-ground knowledge", text: "A team based in Lubumbashi, in touch with the economic players of Haut-Katanga." },
        { title: "A network of qualified players", text: "Suppliers, contractors and partners identified and vetted." },
        { title: "One point of contact", text: "We coordinate the steps and contributors of your project." },
        { title: "Written commitments", text: "A clear proposal, a precise contract, regular updates." },
      ],
      caseStudies: [],
      formType: "business-projects",
      faq: [
        {
          question: "Do you support foreign companies setting up in the DRC?",
          answer: "Yes. We look for partners, provide commercial representation, support negotiations and help you set up on the ground.",
        },
        {
          question: "Can you handle just one stage of a project?",
          answer: "Yes. You can entrust us with a single study (market, feasibility, business plan) or the full coordination of the project, from set-up to delivery follow-up.",
        },
        {
          question: "How does a collaboration start?",
          answer: "With a conversation to qualify your need. We then send you a proposal, followed by a contract stating what will be delivered.",
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
      tagline: "Sourcing, shipping, delivering.",
      summary:
        "From sourcing to delivery, we secure your supplies and coordinate your flows with qualified operators.",
      metaTitle: "Supply, Trading & Logistics — supply and logistics in the DRC",
      metaDescription:
        "Sourcing and procurement, B2B trading, transport and logistics, supply-chain coordination and chauffeur-driven transport (AAG Mobilité) in Haut-Katanga.",
      headline: "Your supplies secured, from order to site.",
      intro:
        "We identify the right suppliers, organise shipping with qualified operators and keep you informed at every step, through to delivery.",
      problems: [
        "Your equipment or consumables reach the site late.",
        "You juggle suppliers and hauliers without coordination.",
        "You need products that are hard to find locally.",
        "Your teams and visitors need to travel safely in Haut-Katanga.",
      ],
      services: [
        {
          icon: "package",
          title: "Procurement and sourcing",
          description: null,
          items: ["Supplier sourcing and vetting", "Purchasing", "Supply of equipment and consumables"],
          delivery: "internal",
        },
        {
          icon: "store",
          title: "B2B trading",
          description: null,
          items: ["Trading", "Supplies for companies and sites"],
          delivery: "internal",
        },
        {
          icon: "route",
          title: "Supply-chain coordination",
          description: null,
          items: ["Flow planning", "Order and shipment tracking", "One point of contact for all contributors"],
          delivery: "internal",
        },
        {
          icon: "warehouse",
          title: "Transport and logistics",
          description: null,
          items: ["Shipment organisation", "Warehousing", "Delivery to site"],
          delivery: "partners",
        },
        {
          icon: "truck",
          title: "Distribution solutions",
          description: null,
          items: ["Distribution with qualified operators", "Delivery rounds"],
          delivery: "partners",
        },
        {
          icon: "globe",
          title: "Import-export support",
          description: "Organisation and follow-up of your import-export operations, with licensed partners.",
          items: [],
          delivery: "partners",
        },
        {
          icon: "car",
          title: "AAG Mobilité",
          description: "Premium chauffeur-driven transport.",
          items: ["Sedan and Prado SUV", "Hotel and airport transfers", "Vehicles at companies' disposal", "Lubumbashi – Likasi – Kolwezi assignments"],
          delivery: "internal",
        },
      ],
      groups: [],
      sectors: ["mines", "energy", "construction", "industry", "business"],
      advantages: [
        { title: "Vetted suppliers", text: "Every supplier is qualified before the first order." },
        { title: "Follow-up at every step", text: "You know where your order stands at all times." },
        { title: "Qualified operators", text: "Transport, warehousing and formalities handled by recognised partners." },
        { title: "Rooted in Haut-Katanga", text: "Lubumbashi, Likasi, Kolwezi: we know the routes and their constraints." },
      ],
      caseStudies: [],
      formType: "supply-logistics",
      faq: [
        {
          question: "What can you supply?",
          answer: "Equipment and consumables. We find and vet suppliers, then handle purchasing and trading to suit your needs.",
        },
        {
          question: "Do you transport the goods yourselves?",
          answer: "We organise shipments, warehousing and distribution with qualified operators, and you keep a single point of contact.",
        },
        {
          question: "Which routes does AAG Mobilité cover?",
          answer: "Lubumbashi, for hotel and airport transfers, and the Lubumbashi – Likasi – Kolwezi corridor for assignments.",
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
      tagline: "The teams and services that keep your sites running.",
      summary:
        "Staff, cleaning, maintenance, environment: we take care of support functions so your teams can focus on their core business.",
      metaTitle: "People, Facilities & Environment — HR, cleaning and facility management",
      metaDescription:
        "Recruitment and staff provision, facility management, professional and industrial cleaning (AAG Cleaning), building maintenance, sanitation and environmental services in Lubumbashi.",
      headline: "Well-kept sites, available teams.",
      intro:
        "We recruit and provide staff, and we maintain your premises and facilities so that your activities never stop.",
      problems: [
        "You need to strengthen your teams quickly, with reliable profiles.",
        "Cleaning your offices or site takes up too many internal resources.",
        "A construction project is ending and the premises must be handed over clean.",
        "You need to manage green spaces, sanitation or waste properly.",
      ],
      services: [
        {
          icon: "users",
          title: "Recruitment and placement",
          description: null,
          items: ["Recruitment and selection", "Staff provision"],
          delivery: "internal",
        },
        {
          icon: "userCheck",
          title: "Human resources management",
          description: null,
          items: ["Outsourced services", "Team training"],
          delivery: "internal",
        },
        {
          icon: "building",
          title: "Facility management",
          description: null,
          items: ["Coordination of site services", "Management of maintenance contractors", "Service quality follow-up"],
          delivery: "internal",
        },
        {
          icon: "sparkles",
          title: "Professional and industrial cleaning",
          description: "AAG Cleaning's services.",
          items: ["Regular cleaning of offices, shops and homes", "Deep cleaning", "Post-construction cleaning", "Industrial cleaning"],
          delivery: "internal",
        },
        {
          icon: "wrench",
          title: "Building and facility maintenance",
          description: null,
          items: ["Routine maintenance", "Upkeep of installations"],
          delivery: "partners",
        },
        {
          icon: "leaf",
          title: "Sanitation and environmental services",
          description: null,
          items: ["Green space maintenance", "Sanitation", "Waste management with licensed partners"],
          delivery: "partners",
        },
        {
          icon: "drone",
          title: "Drone cleaning",
          description: null,
          items: ["Façades", "Roofs", "Solar panels"],
          delivery: "development",
        },
      ],
      groups: [],
      sectors: ["mines", "industry", "construction", "business", "institutions", "energy"],
      advantages: [
        { title: "Supervised teams", text: "Every job is prepared and followed up by a supervisor." },
        { title: "Checked services", text: "Quality is checked with you at handover." },
        { title: "Your rules respected", text: "Our teams follow your sites' safety rules." },
        { title: "Flexibility", text: "One-off jobs or regular maintenance contracts." },
      ],
      caseStudies: [],
      formType: "people-facilities",
      faq: [
        {
          question: "What premises do you clean?",
          answer: "Offices, shops and homes, on a regular basis. We also handle deep cleaning, post-construction cleaning and industrial cleaning.",
        },
        {
          question: "Can you provide staff?",
          answer: "Yes. We recruit, select and provide staff, and we also offer training and outsourced services.",
        },
        {
          question: "Is drone cleaning already available?",
          answer: "Not yet. This service for façades, roofs and solar panels is in development: contact us to be notified when it launches.",
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
      tagline: "Making your business visible where your customers look for you.",
      summary:
        "Digital solutions, marketing and creative, media and dynamic signage: everything you need to be found, then chosen.",
      metaTitle: "Digital, Media & Communication — websites, marketing and LED screens",
      metaDescription:
        "Website design, process digitalisation, corporate communication, brand identity, videos, digital advertising and dynamic signage on LED screens in Lubumbashi.",
      headline: "Be found, be chosen.",
      intro:
        "From websites to street screens, we design and run the tools that make your business visible and simplify its management.",
      problems: [
        "Your customers cannot find you on Google or social media.",
        "Your image does not reflect how serious your business is.",
        "You still manage sales, stock or invoicing on paper.",
        "You want to reach the Lubumbashi public beyond digital.",
      ],
      groups: [
        { id: "digital", title: "Digital Solutions", text: "Digital tools that simplify your management." },
        { id: "creative", title: "Marketing & Creative", text: "A clear brand image and content that stands out." },
        { id: "media", title: "Media & Outdoor Advertising", text: "Your message online and on the city's screens." },
      ],
      services: [
        {
          icon: "monitor",
          title: "Website design",
          description: "Modern websites, tailored to your company's image.",
          items: [],
          delivery: "internal",
          group: "digital",
        },
        {
          icon: "dashboard",
          title: "Process digitalisation",
          description: "Custom tools to manage your sales, stock, invoicing, staff and customers from a single place.",
          items: [],
          delivery: "internal",
          group: "digital",
        },
        {
          icon: "presentation",
          title: "Corporate communication",
          description: "Presentations, materials and messages for your partners, customers and institutions.",
          items: [],
          delivery: "internal",
          group: "creative",
        },
        {
          icon: "palette",
          title: "Marketing and brand identity",
          description: "Positioning, visual identity and local presence on Google to attract customers.",
          items: [],
          delivery: "internal",
          group: "creative",
        },
        {
          icon: "video",
          title: "Visual content production",
          description: "Advertising videos and striking content, designed to be remembered.",
          items: [],
          delivery: "internal",
          group: "creative",
        },
        {
          icon: "target",
          title: "Digital advertising",
          description: "Targeted campaigns on Google, Google Maps and social media.",
          items: [],
          delivery: "internal",
          group: "media",
        },
        {
          icon: "monitorPlay",
          title: "Dynamic signage and LED screens",
          description: "Your ads broadcast on the LED Atlas screen network in Lubumbashi.",
          items: [],
          delivery: "internal",
          group: "media",
        },
      ],
      sectors: ["industry", "business", "institutions", "construction"],
      advantages: [
        { title: "Creative and technical", text: "One team designs, builds and broadcasts." },
        { title: "Real projects", text: "Zando Yeto and LED Atlas: projects delivered in Lubumbashi." },
        { title: "An all-in-one offer", text: "Website, advertising, video and monthly follow-up together." },
        { title: "Online and on the street", text: "From digital to the city's LED screens." },
      ],
      caseStudies: ["zando-yeto", "led-atlas"],
      formType: "digital-communication",
      faq: [
        {
          question: "What does the all-in-one offer include?",
          answer: "A website, advertising, video and monthly follow-up, combined in a single offer.",
        },
        {
          question: "Which channels do you run campaigns on?",
          answer: "Google, Google Maps and social media. In Lubumbashi, your messages can also appear on the LED Atlas screens.",
        },
        {
          question: "Do you also build management tools?",
          answer: "Yes. We design custom management systems for your sales, stock, invoicing, staff and customers.",
        },
      ],
      showcase: {
        title: "Our video work",
        intro: "Two films made by our team for projects carried out in Lubumbashi (in French).",
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
          "Website, advertising, video and regular follow-up in a single offer, designed to generate leads from the first month.",
        items: ["Website", "Advertising", "Video", "Regular follow-up"],
        cta: "Launch my visibility",
        serviceValue: "offre-cle-en-main",
      },
    },
  ] as Pole[],

  offers: [
    {
      id: "aag-cleaning",
      name: "AAG Cleaning",
      icon: "sparkles",
      serviceTitle: "Professional and industrial cleaning",
      metaTitle: "AAG Cleaning — professional and industrial cleaning in Lubumbashi",
      metaDescription:
        "AAG Cleaning: office cleaning, industrial cleaning, post-construction cleaning, building upkeep and regular maintenance contracts in Lubumbashi.",
      eyebrow: "People, Facilities & Environment",
      title: "Clean premises, maintained by a professional team.",
      intro:
        "Regular maintenance or one-off jobs: we take care of cleaning your offices, shops, homes and industrial sites, with a quality check on every visit.",
      summary: "Office, industrial and post-construction cleaning.",
      status: null,
      featuresTitle: "Our services",
      features: [
        { icon: "building", title: "Office cleaning", text: "Offices, shops and homes, at a frequency agreed together." },
        { icon: "factory", title: "Industrial cleaning", text: "Services adapted to industrial sites and installations." },
        { icon: "clipboard", title: "Post-construction cleaning", text: "Premises ready to be handed over or occupied after works." },
        { icon: "wrench", title: "Building upkeep", text: "Routine upkeep of your common areas and installations." },
        { icon: "sparkles", title: "Surfaces and furniture", text: "Care of floors, windows, surfaces and furniture." },
        { icon: "calendar", title: "Regular contracts", text: "A maintenance schedule adjusted to your activity." },
        { icon: "shield", title: "Quality and safety", text: "A check on every job and respect for your sites' rules." },
      ],
      process: {
        title: "How a job works",
        steps: [
          { title: "Visit and assessment", text: "We visit your premises to understand your needs." },
          { title: "Detailed quote", text: "You receive a clear proposal: services, frequency, price." },
          { title: "Scheduling", text: "We agree on times and working arrangements together." },
          { title: "The job", text: "Our teams work with the right equipment." },
          { title: "Quality check", text: "We review the work with you and adjust if needed." },
        ],
      },
      media: null,
      formTitle: "Request a cleaning quote",
      formIntro: "Describe your premises (type, approximate area, desired frequency): we will get back to you.",
      serviceValue: "aag-cleaning",
    },
    {
      id: "aag-mobilite",
      name: "AAG Mobilité",
      icon: "car",
      serviceTitle: "AAG Mobilité",
      metaTitle: "AAG Mobilité — chauffeur-driven transport in Lubumbashi",
      metaDescription:
        "AAG Mobilité: premium chauffeur-driven transport in Lubumbashi (sedan and Prado SUV), hotel and airport transfers, vehicles for companies, Lubumbashi – Likasi – Kolwezi assignments.",
      eyebrow: "Supply, Trading & Logistics",
      title: "Chauffeur-driven travel in Lubumbashi and Haut-Katanga.",
      intro:
        "Premium transport for your executives, teams and visitors: the right vehicle, a driver, and a single point of contact to organise everything.",
      summary: "Premium chauffeur-driven transport, transfers and assignments.",
      status: null,
      featuresTitle: "Vehicles and routes",
      features: [
        { icon: "car", title: "Sedan or Prado SUV", text: "The vehicle is chosen according to the route and number of passengers." },
        { icon: "concierge", title: "Hotel and airport transfers", text: "Pick-up on arrival and drop-off on departure." },
        { icon: "briefcase", title: "Vehicles for companies", text: "A car and driver reserved for your teams and visitors." },
        { icon: "mapPin", title: "Lubumbashi – Likasi – Kolwezi assignments", text: "Business travel along Haut-Katanga's mining corridor." },
      ],
      process: {
        title: "How to book",
        steps: [
          { title: "Your request", text: "Tell us the date, route and number of passengers." },
          { title: "Confirmation", text: "We confirm the vehicle, time and conditions." },
          { title: "Pick-up", text: "Your driver meets you at the agreed place and time." },
        ],
      },
      media: null,
      formTitle: "Book a vehicle",
      formIntro: "Tell us the date, route and number of passengers: we will contact you to confirm.",
      serviceValue: "aag-mobilite",
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      icon: "monitorPlay",
      serviceTitle: "Dynamic signage and LED screens",
      metaTitle: "LED Atlas — LED screen advertising in Lubumbashi",
      metaDescription:
        "LED Atlas: dynamic signage (DOOH) on an LED screen network in Lubumbashi. Ad broadcasting, broadcast reports and partnerships for advertisers.",
      eyebrow: "Digital, Media & Communication",
      title: "Your brand on Lubumbashi's LED screens.",
      intro:
        "LED Atlas is our dynamic signage service: your messages broadcast in moving images on LED screens installed in Lubumbashi.",
      summary: "Dynamic signage on LED screens in Lubumbashi.",
      status: null,
      featuresTitle: "The concept",
      features: [
        { icon: "monitorPlay", title: "High-definition LED screens", text: "Bright, animated display, visible day and night." },
        { icon: "megaphone", title: "Broadcasting your ads", text: "Your messages are scheduled and broadcast on the network." },
        { icon: "clipboard", title: "Broadcast report", text: "A report of your ad's airings for each campaign." },
        { icon: "handshake", title: "Partnerships", text: "Advertisers, agencies and site owners: let's talk." },
      ],
      process: {
        title: "How a campaign works",
        steps: [
          { title: "Your brief", text: "Your brand, your message and the desired period." },
          { title: "The ad", text: "You provide your visual, or our team creates it for you." },
          { title: "Scheduling", text: "We plan the broadcast slots for your campaign." },
          { title: "The report", text: "You receive the broadcast report at the end of the campaign." },
        ],
      },
      media: {
        video: "/media/led-atlas.mp4",
        poster: "/media/led-atlas-poster.jpg",
        alt: "Presentation film for the LED Atlas screen network",
      },
      formTitle: "Advertise on LED Atlas",
      formIntro: "Tell us about your brand and the desired period: we will come back to you with a proposal.",
      serviceValue: "led-atlas",
    },
  ] as Offer[],

  sectors: [
    {
      id: "mines",
      icon: "pickaxe",
      label: "Mining and natural resources",
      short: "Mining",
      text: "Equipment and consumables, staff transport, personnel and upkeep of mining sites in Haut-Katanga and Lualaba.",
      needs: ["Supplies and parts for sites", "Staff transport", "Workforce and site upkeep"],
      poles: ["supply-logistics", "people-facilities", "business-projects"],
    },
    {
      id: "energy",
      icon: "zap",
      label: "Energy and oil & gas",
      short: "Energy",
      text: "Solar and energy-efficiency projects with technical partners, supplies and site services.",
      needs: ["Energy project studies", "Site supplies", "Facility services"],
      poles: ["business-projects", "supply-logistics", "people-facilities"],
    },
    {
      id: "construction",
      icon: "building",
      label: "Construction and infrastructure",
      short: "Construction",
      text: "Project coordination, site supplies, post-construction cleaning and refurbishment.",
      needs: ["Project set-up and follow-up", "Site supplies", "Post-works cleaning"],
      poles: ["business-projects", "supply-logistics", "people-facilities"],
    },
    {
      id: "industry",
      icon: "factory",
      label: "Industry and trade",
      short: "Industry and trade",
      text: "Sourcing, logistics, industrial cleaning, websites and campaigns to sell more.",
      needs: ["Sourcing and logistics", "Industrial cleaning", "Visibility and online sales"],
      poles: ["supply-logistics", "people-facilities", "digital-communication"],
    },
    {
      id: "business",
      icon: "briefcase",
      label: "Companies and real estate",
      short: "Companies and real estate",
      text: "Office and residence cleaning, chauffeur-driven transport, management tools and communication.",
      needs: ["Premises upkeep", "Staff travel", "Management tools and communication"],
      poles: ["people-facilities", "supply-logistics", "digital-communication"],
    },
    {
      id: "institutions",
      icon: "landmark",
      label: "Institutions and organisations",
      short: "Institutions",
      text: "Studies, project support, outsourced services and corporate communication.",
      needs: ["Studies and support", "Outsourced services", "Corporate communication"],
      poles: ["business-projects", "people-facilities", "digital-communication"],
    },
  ] as Sector[],

  method: [
    {
      title: "Needs analysis",
      description: "We listen to your need and define the scope, constraints and priorities together.",
    },
    {
      title: "Identifying solutions",
      description: "We identify the solutions, resources and partners that fit your situation.",
    },
    {
      title: "Commercial proposal",
      description: "You receive a clear proposal: services, resources, timelines and terms. The contract sets out everyone's commitments.",
    },
    {
      title: "Coordination and delivery",
      description: "We mobilise teams and qualified partners, coordinate delivery and keep you informed.",
    },
    {
      title: "Follow-up and improvement",
      description: "We review what was delivered with you, then adjust our services over time.",
    },
  ],

  caseStudies: [
    {
      id: "zando-yeto",
      name: "Zando Yeto",
      sector: "Fashion and e-commerce",
      icon: "shoppingBag",
      status: "completed",
      location: "Lubumbashi",
      intervention: "E-commerce website, advertising video and targeted campaigns",
      poles: ["digital-communication"],
      headline: "A fashion brand, visible and selling online.",
      summary:
        "E-commerce website, video and advertising campaigns: a complete set-up to showcase the collections and sell online.",
      image: "/media/zando-yetu-card.jpg",
      video: "/media/zando-yetu.mp4",
      videoPoster: "/media/zando-yetu-poster.jpg",
      videoLabel: "Zando Yeto launch video (in French)",
      imageAlt: "Preview of the Zando Yeto e-commerce website",
      deliverablesTitle: "What we delivered",
      deliverables: [
        { icon: "monitor", title: "E-commerce website", description: "An online shop to showcase the collections and take orders." },
        { icon: "video", title: "Video", description: "An advertising video to raise the brand's profile." },
        { icon: "target", title: "Advertising campaigns", description: "Targeted campaigns to bring visitors to the shop." },
      ],
      resultsTitle: "Results",
      results: [],
      cta: "Start a similar project",
      serviceValue: "digital-communication",
      advertisers: null,
    },
    {
      id: "led-atlas",
      name: "LED Atlas",
      sector: "Dynamic signage",
      icon: "monitorPlay",
      status: "ongoing",
      location: "Lubumbashi",
      intervention: "LED advertising screen network and broadcasting for advertisers",
      poles: ["digital-communication"],
      headline: "An LED advertising screen network in Lubumbashi.",
      summary:
        "LED screens installed in Lubumbashi to broadcast advertisers' messages in moving images.",
      image: "/media/led-atlas-poster.jpg",
      video: null,
      videoPoster: null,
      videoLabel: "",
      imageAlt: "LED Atlas advertising screen in Lubumbashi",
      deliverablesTitle: "The set-up",
      deliverables: [
        { icon: "monitorPlay", title: "LED screens", description: "Bright, animated display, visible day and night." },
        { icon: "mapPin", title: "Locations in Lubumbashi", description: "Screens placed on busy roads in the city." },
        { icon: "megaphone", title: "Broadcasting for advertisers", description: "Your ads scheduled and broadcast on the network." },
      ],
      resultsTitle: "Results",
      results: [],
      cta: "Advertise on LED Atlas",
      serviceValue: "led-atlas",
      advertisers: {
        title: "For advertisers",
        intro: "Present your brand on the LED Atlas screens: see how the screens look in situ.",
        videoTitle: "Demo video",
        video: "/media/led-atlas.mp4",
        videoPoster: "/media/led-atlas-poster.jpg",
        videoCaption: "The LED Atlas screens in situ (video in French).",
      },
    },
  ] as CaseStudy[],


  home: {
    hero: {
      eyebrow: "Multi-sector group · Lubumbashi · DRC",
      title: "Your ambitions.",
      titleAccent: "Our capacity to act.",
      subtitle:
        "Atlas Africa Group supports companies, institutions and investors in developing their activities, structuring their projects and implementing operational solutions in the Democratic Republic of the Congo.",
    },
    value: {
      eyebrow: "Our value proposition",
      title: "Why choose Atlas Africa Group.",
      intro:
        "A multi-sector group, active in every field your business needs, with a single point of contact to coordinate it all.",
      items: [
        { icon: "mapPin", title: "Understanding of the Congolese market", text: "A team based in Lubumbashi, in touch with the economic players of Haut-Katanga." },
        { icon: "layers", title: "Multi-sector approach", text: "Four complementary divisions, from business to the daily running of your sites." },
        { icon: "handshake", title: "Partnership development", text: "We work with qualified partners and local companies." },
        { icon: "userCheck", title: "Tailored support", text: "Every proposal starts from your real need, not from a catalogue." },
        { icon: "route", title: "Coordination of services and projects", text: "One point of contact coordinates all contributors, from first call to follow-up." },
      ],
    },
    poles: {
      eyebrow: "Our four divisions",
      title: "Four areas of expertise, one partner.",
      intro: "From the first business contact to the daily running of your sites, we coordinate the skills you need.",
    },
    sectors: {
      eyebrow: "Industries & Sectors",
      title: "Alongside the players driving the economy of the Congo and Africa.",
      intro: "We work with companies, investors and institutions across all major sectors.",
      cta: "All sectors",
      previous: "Previous sector",
      next: "Next sector",
    },
    work: {
      eyebrow: "Projects & Track record",
      title: "Real projects, with their current status.",
      intro: "We only present genuine projects carried out by our teams.",
    },
    group: {
      eyebrow: "The Group",
      title: "A Congolese company with an African ambition.",
      text: "ATLAS AFRICA GROUP SARL is based in Lubumbashi, in Haut-Katanga. An operating company today, a group tomorrow: we are growing step by step, in the DRC first, then into other African countries.",
      cta: "Discover the group",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your next project.",
      text: "Describe your need in a few lines: we will contact you to clarify it and send you a proposal.",
    },
  },

  expertisesPage: {
    metaTitle: "Our services",
    metaDescription:
      "ATLAS AFRICA GROUP's four divisions: Business & Projects Development, Supply, Trading & Logistics, People, Facilities & Environment, Digital, Media & Communication.",
    eyebrow: "Our services",
    title: "All our services, explained division by division.",
    intro:
      "Choose a specific service or entrust us with your whole project: we coordinate our in-house skills and qualified partners, with a single point of contact.",
    showAll: "See all services",
    showLess: "Show less",
    servicesCount: "services",
    offers: {
      eyebrow: "Specialised offers",
      title: "Three offers ready to book.",
      intro: "Clearly defined services that you can request in a few minutes.",
    },
    cta: {
      title: "Not sure where to start?",
      text: "Tell us about your situation: we will point you to the right services.",
      button: "Submit a project",
    },
  },

  howItWorksPage: {
    metaTitle: "How it works",
    metaDescription: "How ATLAS AFRICA GROUP coordinates its four divisions for your projects: a typical scenario and our five-step method.",
    eyebrow: "How it works",
    title: "One project, four divisions, one point of contact.",
    intro: "See how our divisions work in sequence on a project, then our method, step by step.",
    integration: {
      eyebrow: "How our divisions work together",
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
          text: "Equipment sourcing, purchasing and shipments organised to the site. AAG Mobilité handles staff travel.",
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
    },
    method: {
      eyebrow: "Our method, at every step",
      title: "Five steps, from first call to follow-up.",
      intro: "At any time, you know where your project stands and what comes next.",
    },
    cta: {
      title: "Ready to start?",
      text: "Describe your need: we will contact you for the first step, the analysis.",
      button: "Submit a project",
    },
  },

  polePage: {
    problemsTitle: "The needs we address",
    servicesTitle: "Our services",
    deliveryNote:
      "For each service, we state whether it is delivered by our teams, with qualified partners, or still in development.",
    sectorsTitle: "Sectors concerned",
    advantagesTitle: "Why work with us",
    methodTitle: "How we work",
    referencesTitle: "References",
    offersTitle: "Specialised offers",
    faqTitle: "Frequently asked questions",
    formTitle: "Let's talk about your need",
    formIntro: "Describe your need: we will contact you to clarify it and send you a proposal.",
    otherPoles: "Our other areas of expertise",
  },

  sectorsPage: {
    metaTitle: "Industries & Sectors",
    metaDescription:
      "Mining, energy, construction, industry, companies and institutions: the sectors ATLAS AFRICA GROUP supports in the DRC.",
    eyebrow: "Industries & Sectors",
    title: "A partner for every major sector of the Congolese economy.",
    intro: "Every sector has its constraints. For each one, we mobilise the right divisions and partners.",
    needsTitle: "Frequent needs",
    polesTitle: "Divisions involved",
    cta: {
      title: "Your sector is not listed?",
      text: "We work in every field your business needs. Let's talk about it.",
      button: "Submit a project",
    },
  },

  workPage: {
    metaTitle: "Projects & Track record",
    metaDescription:
      "ATLAS AFRICA GROUP projects, sorted by their real status: Zando Yeto (e-commerce website, video and campaigns) and LED Atlas (LED advertising screens in Lubumbashi).",
    eyebrow: "Projects & Track record",
    title: "What we do, in practice.",
    intro:
      "We only present real projects, with their current status. Each project states our exact contribution.",
    groups: {
      completed: { title: "Completed projects", intro: "Projects delivered." },
      ongoing: { title: "Ongoing", intro: "Projects and activities in progress." },
      development: { title: "Projects in development", intro: "Projects in preparation." },
    },
    fields: {
      sector: "Sector",
      location: "Area",
      intervention: "Our contribution",
      status: "Status",
    },
    viewCase: "View the project",
    cta: {
      title: "Your project could be next.",
      text: "Let's talk about your goals and how we can help you reach them.",
      button: "Submit a project",
    },
  },

  groupPage: {
    metaTitle: "The Group",
    metaDescription:
      "ATLAS AFRICA GROUP SARL, a multi-sector group based in Lubumbashi: who we are, our mission, vision, values, operating model and presence.",
    eyebrow: "The Group",
    title: "A Congolese company with an African ambition.",
    intro:
      "ATLAS AFRICA GROUP SARL is based in Lubumbashi, in Haut-Katanga. We help those who do business and invest in the DRC to see their projects through.",
    who: {
      eyebrow: "Who we are",
      title: "A multi-sector group, one point of contact.",
      text: "We work in every field that companies, institutions and investors need: business and projects, supply and logistics, human resources and site services, digital, media and communication. We coordinate our teams and qualified partners to deliver complete solutions.",
    },
    history: {
      eyebrow: "Our history",
      title: "Key milestones",
      items: [] as { year: string; text: string }[],
    },
    vision: {
      eyebrow: "Our vision",
      title: "To become a leading partner in the DRC, then across Africa.",
      text: "We want to be the partner people turn to when developing and delivering their business: first in the DRC, and tomorrow across the continent.",
    },
    mission: {
      eyebrow: "Our mission",
      title: "To see our clients' projects through.",
      text: "Helping companies and investors find the right partners, structure their projects and mobilise the resources they need: suppliers, logistics, staff, site services and communication.",
    },
    values: {
      eyebrow: "Our values",
      title: "What guides our work.",
      items: [
        { icon: "shield", title: "Reliability", text: "We keep our commitments: what is agreed gets done." },
        { icon: "eye", title: "Transparency", text: "Clear proposals, precise contracts, regular updates." },
        { icon: "award", title: "Quality", text: "Qualified partners and services checked at handover." },
        { icon: "heartHandshake", title: "Local commitment", text: "We work with the skills and companies of Haut-Katanga." },
      ],
    },
    model: {
      eyebrow: "Our operating model",
      title: "Our teams, qualified partners, one point of contact.",
      intro: "We always state who delivers each service.",
      items: [
        { title: "Our teams", text: "The services we deliver ourselves: coordination, advice, cleaning, recruitment, digital creation, AAG Mobilité, LED Atlas." },
        { title: "Our qualified partners", text: "Services entrusted to partners we select and monitor: transport, warehousing, formalities, waste management, energy projects." },
        { title: "Our projects in development", text: "Services being prepared, announced as such, like drone cleaning." },
      ],
      steps: [
        { label: "Today", title: "An operating company", text: "Concrete services delivered in Lubumbashi and Haut-Katanga through four complementary divisions." },
        { label: "Tomorrow", title: "A group", text: "Activities growing step by step, first in the DRC, then into other African countries." },
      ],
    },
    leadership: {
      eyebrow: "Our leadership",
      title: "The group's management",
      leaders: [] as Leader[],
    },
    presence: {
      eyebrow: "Where we are",
      title: "Based in Lubumbashi, at the heart of Haut-Katanga.",
      text: "From Lubumbashi, we operate across Haut-Katanga and along the Lubumbashi – Likasi – Kolwezi mining corridor.",
      places: [{ city: "Lubumbashi", region: "Haut-Katanga · DRC", role: "Operational base" }],
    },
    commitment: {
      eyebrow: "Our professional commitment",
      title: "Simple commitments, kept.",
      items: [
        "A written proposal and a contract before every assignment.",
        "A named contact, reachable throughout the assignment.",
        "Partners selected and monitored by our teams.",
        "Confidentiality of the information you share with us.",
        "Respect for your sites' safety rules.",
      ],
    },
    cta: {
      title: "Let's work together.",
      text: "Tell us about your project: we will tell you how we can contribute.",
      button: "Submit a project",
    },
  },

  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Contact ATLAS AFRICA GROUP in Lubumbashi (Haut-Katanga, DRC): quote requests, specialised forms, WhatsApp, phone and email.",
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    intro: "Choose the service concerned: the form adapts to your request. You can also message us on WhatsApp.",
    formTitle: "Your request",
    detailsTitle: "Our details",
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
    company: "Company or organisation",
    phone: "Phone",
    email: "Email",
    service: "Service concerned",
    message: "Description of your need",
    optional: "optional",
    requiredHint: "Fields marked with an asterisk (*) are required.",
    servicePlaceholder: "Select a service",
    messagePlaceholder: "Describe your need in a few lines…",
    detailsTitle: "Details of your request",
    submit: "Send my request",
    sending: "Sending…",
    privacyNote: "Your information is used only to handle your request.",
    privacyLink: "Privacy policy",
    serviceOptions: [
      { value: "business-projects", label: "Business and project development" },
      { value: "supply-logistics", label: "Procurement and trading" },
      { value: "logistics", label: "Transport and logistics" },
      { value: "hr", label: "Human resources and recruitment" },
      { value: "people-facilities", label: "Facility management and environment" },
      { value: "aag-cleaning", label: "AAG Cleaning — cleaning" },
      { value: "aag-mobilite", label: "AAG Mobilité — chauffeur-driven transport" },
      { value: "digital-communication", label: "Digital, media and communication" },
      { value: "offre-cle-en-main", label: "Digital — all-in-one offer" },
      { value: "led-atlas", label: "LED Atlas — LED screen advertising" },
      { value: "partenariat", label: "Partnership request" },
      { value: "autre", label: "Other request" },
    ],
    fields: {
      location: { label: "City or site concerned", placeholder: "e.g. Lubumbashi, Kolwezi…" },
      timeline: { label: "Desired timeline", options: ["As soon as possible", "Within a month", "Within three months", "Later"] },
      projectType: { label: "Type of project", placeholder: "e.g. set-up, website, study…" },
      sector: {
        label: "Business sector",
        options: ["Mining and natural resources", "Energy and oil & gas", "Construction and infrastructure", "Industry and trade", "Companies and real estate", "Institutions and organisations", "Other"],
      },
      stage: { label: "Project stage", options: ["Idea", "Study in progress", "Financing in progress", "Ready to start"] },
      products: { label: "Products or equipment needed" },
      quantity: { label: "Estimated quantities" },
      origin: { label: "Origin of the goods" },
      destination: { label: "Destination" },
      cargo: { label: "Type of goods", placeholder: "e.g. 40' container, pallets…" },
      need: { label: "Type of need", options: ["Recruitment", "Staff provision", "Training", "Outsourced services"] },
      headcount: { label: "Number of people" },
      profile: { label: "Profiles needed" },
      duration: { label: "Assignment length" },
      premises: { label: "Type of premises", options: ["Offices", "Shop", "Residence", "Industrial site", "Construction site"] },
      surface: { label: "Approximate area", placeholder: "e.g. 300 m²" },
      frequency: { label: "Desired frequency", options: ["One-off job", "Weekly", "Several times a week", "Daily"] },
      date: { label: "Date of travel" },
      route: { label: "Route", placeholder: "e.g. airport → hotel, Lubumbashi → Kolwezi" },
      passengers: { label: "Number of passengers" },
      vehicle: { label: "Preferred vehicle", options: ["Sedan", "Prado SUV", "No preference"] },
      brand: { label: "Brand to promote" },
      period: { label: "Desired broadcast period" },
      objective: { label: "Campaign objective" },
      organization: { label: "Organisation" },
      partnershipType: { label: "Type of partnership", options: ["Commercial", "Technical", "Supplier", "Investment", "Other"] },
      country: { label: "Country" },
    } as Record<ExtraFieldKey, FormFieldContent>,
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
      tooMany: "You have sent several requests in a short time. Please try again in a few minutes.",
    },
  },

  legalPage: {
    metaTitle: "Legal notice",
    metaDescription: "Legal notice for the ATLAS AFRICA GROUP SARL website.",
    eyebrow: "Legal information",
    title: "Legal notice",
    intro: "Information about the website publisher and terms of use.",
    sections: [
      {
        title: "Publisher",
        paragraphs: [
          "The atlasafricagroup.com website is published by ATLAS AFRICA GROUP SARL, a limited liability company based in Lubumbashi, Haut-Katanga, Democratic Republic of the Congo.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The texts, logos, videos and graphic elements on this website belong to ATLAS AFRICA GROUP SARL unless stated otherwise. Any reproduction without written permission is prohibited.",
        ],
      },
      {
        title: "Illustrative images",
        paragraphs: [
          "Some images on this website are illustrations and are labelled as such. They do not depict ATLAS AFRICA GROUP's projects or facilities. Real projects are presented in the \"Projects & Track record\" section.",
        ],
      },
      {
        title: "Liability",
        paragraphs: [
          "The information on this website is provided for guidance. Services, terms and timelines are set out in each commercial proposal and contract.",
        ],
      },
      {
        title: "Personal data",
        paragraphs: ["How we handle information sent through our forms is described in our privacy policy."],
      },
    ] as LegalSection[],
  },

  privacyPage: {
    metaTitle: "Privacy policy",
    metaDescription: "How ATLAS AFRICA GROUP handles information sent through the website's forms.",
    eyebrow: "Legal information",
    title: "Privacy policy",
    intro: "What we do with the information you send us.",
    sections: [
      {
        title: "Data controller",
        paragraphs: ["ATLAS AFRICA GROUP SARL, Lubumbashi, Haut-Katanga, Democratic Republic of the Congo."],
      },
      {
        title: "Data collected",
        paragraphs: [
          "When you use a form, we receive the information you enter: name, company, phone, email, service concerned, description of your need and any details.",
        ],
      },
      {
        title: "Use",
        paragraphs: [
          "This information is used only to respond to your request and to follow up on the business relationship. It is never sold or passed on to third parties.",
        ],
      },
      {
        title: "Recipients",
        paragraphs: [
          "Requests are received by the ATLAS AFRICA GROUP team. They pass through an email delivery service used solely to route them.",
        ],
      },
      {
        title: "Retention",
        paragraphs: ["Information is kept for as long as needed to handle your request and follow up on the business relationship."],
      },
      {
        title: "Your rights",
        paragraphs: ["You can ask to see, correct or delete your information by writing to the email address shown on the Contact page."],
      },
      {
        title: "Cookies and third-party services",
        paragraphs: [
          "This website uses no advertising cookies or audience measurement. The map on the Contact page (Google Maps) loads when you scroll down to it; Google may then apply its own rules and cookies. WhatsApp links open WhatsApp's service, subject to its own terms.",
        ],
      },
    ] as LegalSection[],
  },

  footer: {
    tagline: "A multi-sector group based in Lubumbashi. Your ambitions, our capacity to act.",
    navTitle: "Navigation",
    polesTitle: "Our expertise",
    offersTitle: "Our offers",
    contactTitle: "Contact",
    legalTitle: "Legal information",
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
