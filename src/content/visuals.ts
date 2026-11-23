/**
 * ─────────────────────────────────────────────────────────────────────────
 *  VISUELS HIGGSFIELD — catalogue
 * ─────────────────────────────────────────────────────────────────────────
 *  Chaque visuel de la page d'accueil est décrit ici :
 *
 *   - `file`     : chemin du fichier à déposer dans /public. Dès que le
 *                  fichier existe, il remplace automatiquement l'emplacement
 *                  provisoire (relancez `npm run dev` ou `npm run build`).
 *   - `prompt`   : prompt à coller dans Higgsfield (en anglais : les modèles
 *                  y répondent mieux).
 *   - `negative` : éléments à exclure (champ « negative prompt »).
 *   - `motion`   : vidéo uniquement — mouvement de caméra conseillé.
 *   - `alt`      : description de l'image, lue par les lecteurs d'écran et
 *                  les moteurs de recherche (français et anglais).
 *   - `ratio`    : format à choisir dans Higgsfield.
 *   - `fallback` : visuel déjà disponible, affiché en attendant.
 *
 *  Direction artistique : photographie documentaire et éditoriale,
 *  réaliste, ancrée au Haut-Katanga et sur le corridor Dar es Salaam –
 *  Kasumbalesa. Ombres bleu marine profond, hautes lumières dorées, peaux
 *  au rendu naturel. Uniformes et conteneurs bleu marine, détails or ou
 *  ambre — JAMAIS de texte ni de logo dans l'image (l'IA les déforme : la
 *  marque s'ajoute au montage). Équipements de protection corrects sur
 *  les sites industriels.
 *
 *  Générer avec Higgsfield, pas à pas :
 *   1. Image : choisissez un modèle photo réaliste (par ex. Soul ou un
 *      modèle « photoreal »), réglez le `ratio` indiqué, collez `prompt`
 *      puis `negative`. Générez 4 variantes et gardez la plus crédible
 *      (mains, visages, véhicules, absence de texte).
 *   2. Retouche : corrigez les petits défauts (inpainting) ; effacez toute
 *      lettre ou pseudo-logo apparu sur les camions, gilets ou écrans.
 *   3. Agrandissement : passez l'image retenue dans l'upscaler (×2), puis
 *      exportez-la en JPG ou WebP.
 *   4. Vidéo du hero : générez d'abord l'image fixe avec `prompt`, puis
 *      utilisez « Image to Video » sur cette image avec la description
 *      `motion` (mouvement lent, 8 s, sans coupe). Gardez la première
 *      image comme `poster`.
 *
 *  Export : images en JPG ou WebP (2400 px de large maximum, moins de
 *  400 Ko) ; vidéos en MP4 H.264, 1920 × 1080, 24 ou 25 images/s, sans son,
 *  6 à 10 s, moins de 4 Mo. Pour une vidéo, déposez aussi son image fixe
 *  (`poster`). Nommez chaque fichier exactement comme dans `file`.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type VisualKind = "image" | "video";
export type VisualRatio = "16/9" | "21/9" | "3/2" | "4/3" | "4/5" | "1/1" | "3/4" | "9/16";

export type VisualSpec = {
  kind: VisualKind;
  file: string;
  /** Vidéo : image fixe affichée avant la lecture (et si l'animation est réduite). */
  poster?: string;
  ratio: VisualRatio;
  /** Titre court affiché dans l'emplacement provisoire. */
  label: { fr: string; en: string };
  alt: { fr: string; en: string };
  prompt: string;
  negative: string;
  motion?: string;
  fallback?: { file: string; kind: VisualKind; poster?: string };
};

/** Éléments à exclure, communs à tous les visuels. */
const NEGATIVE_BASE =
  "text, letters, watermark, logo, brand names, signage with words, distorted faces, extra fingers, deformed hands, cartoon, illustration, 3d render look, oversaturated colors, blurry, low resolution, stock-photo smile, flags";

/** Exclusions communes aux sites industriels (sécurité et réalisme). */
const NEGATIVE_SITE = "missing hard hats, workers without safety vests, unsafe practices, rusted equipment, litter";

export const visuals = {
  /* ───── Hero ───── */
  "hero-operations": {
    kind: "video",
    file: "/media/higgsfield/hero-operations.mp4",
    poster: "/media/higgsfield/hero-operations-v2.jpg",
    ratio: "16/9",
    label: { fr: "Logistique coordonnée en RDC", en: "Coordinated logistics in the DRC" },
    alt: {
      fr: "Vue aérienne, à l'heure dorée, d'une plateforme logistique partenaire en périphérie de Lubumbashi : des conteneurs de plusieurs compagnies sont chargés sur des semi-remorques, un convoi de camions s'éloigne sur une route bordée de terre rouge et de forêt claire vers le corridor minier, tandis que deux coordinateurs en uniforme bleu marine à bandes dorées font le point sur une tablette avec le chef de quai.",
      en: "Aerial view at golden hour of a partner logistics yard on the outskirts of Lubumbashi: containers from several shipping lines are loaded onto semi-trailers, a convoy of trucks heads out along a highway lined with red earth and open woodland towards the mining corridor, while two coordinators in navy uniforms with gold stripes review the plan on a tablet with the yard supervisor.",
    },
    prompt:
      "Cinematic aerial drone photograph at golden hour over a modern, orderly third-party logistics yard on the outskirts of Lubumbashi, Haut-Katanga, DRC. Neat rows of shipping containers in mixed shipping-line colours (rust red, grey, green, blue) on clean concrete; a reach stacker lifts a 40-foot container onto a waiting semi-trailer. Beyond the yard, a convoy of semi-trailer trucks in assorted liveries leaves along a straight asphalt highway with red laterite shoulders and green miombo woodland, heading towards the copperbelt mining corridor, soft hills on the horizon. Lower right foreground: two Congolese logistics coordinators, a man and a woman in navy uniforms with amber high-visibility stripes and white hard hats, reviewing the plan on a tablet with the yard supervisor in a grey high-visibility vest. 24mm lens, high three-quarter angle. Low warm sun from the right, long shadows, light dust haze. Left third calmer and darker for headline space. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic documentary, ultra-detailed, 8k, full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, chaotic traffic, damaged containers, crowds, black smoke, potholes, night scene, motion blur, camera shake, jump cuts, morphing vehicles, flickering`,
    motion:
      "Animate the approved hero still (high-angle golden-hour yard with the convoy on the highway) with Higgsfield image-to-video. Camera: slow, steady drone dolly-in with a slight descent over the container yard, gentle parallax between the container stacks and the distant highway. Action: the reach stacker lowers the container smoothly onto the trailer, trucks roll slowly away along the red-earth highway, fine dust drifts in the low sun, the team makes small natural gestures around the tablet. Constant speed, no cuts, no zoom jumps, no shake, 8 s with a seamless loop feel (end framing close to the start). Keep the left third calm for the headline.",
  },

  /* ───── À propos ───── */
  "about-lubumbashi": {
    kind: "image",
    file: "/media/higgsfield/about-lubumbashi-v2.jpg",
    ratio: "4/3",
    label: { fr: "Équipe d'affaires congolaise", en: "Congolese business team" },
    alt: {
      fr: "Une jeune femme d'affaires congolaise, en tailleur bleu marine, contemple Lubumbashi depuis une terrasse en fin d'après-midi : des jacarandas en fleurs violettes bordent les avenues, les immeubles du centre-ville s'étendent sous un ciel doré et le terril sombre de l'ancienne fonderie de cuivre se dessine à l'horizon.",
      en: "A young Congolese businesswoman in a navy suit looks out over Lubumbashi from a rooftop terrace in the late afternoon: jacaranda trees in purple bloom line the avenues, downtown buildings stretch beneath a golden sky and the dark slag heap of the old copper smelter rises on the horizon.",
    },
    prompt:
      "Editorial portrait-format photograph of a confident young Congolese businesswoman in a tailored navy suit with a subtle gold brooch, standing at the glass balustrade of a modern rooftop terrace, looking out over Lubumbashi, Haut-Katanga, DRC, in late-afternoon light. Below, wide avenues lined with jacaranda trees in full purple bloom, low-rise downtown buildings, red laterite earth between green gardens; on the horizon the iconic dark slag heap of the historic copper smelter under a hazy golden sky. Subject in the lower third, seen from a three-quarter back angle, the city filling the frame; calm sky in the upper half for overlay text. 50mm lens, f/4, eye level. Warm rim light on her profile, soft atmospheric haze. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, natural textures, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, slums, poverty clichés, traffic jams, overcast grey sky, skyscrapers that do not exist in Lubumbashi, wide-angle distortion, posed selfie`,
  },

  /* ───── Les 4 pôles ───── */
  "pole-business": {
    kind: "image",
    file: "/media/higgsfield/pole-business-v2.jpg",
    ratio: "3/2",
    label: { fr: "Business & Projects Development", en: "Business & Projects Development" },
    alt: {
      fr: "Dans une salle de réunion lumineuse de Lubumbashi, des dirigeants congolais et des investisseurs étrangers, femmes et hommes, échangent autour d'une grande table en bois, ordinateur portable et dossiers ouverts ; par la baie vitrée, la ville baigne dans une lumière dorée de fin de journée.",
      en: "In a bright meeting room in Lubumbashi, Congolese executives and foreign investors, women and men, talk around a large wooden table with an open laptop and folders; through the floor-to-ceiling windows, the city and its jacaranda trees glow in warm late-day light, in a calm and focused atmosphere.",
    },
    prompt:
      "Editorial corporate photograph of a business meeting in a modern boardroom in Lubumbashi, DRC. Four professionals around a long walnut table: a Congolese woman executive in a navy suit leading the discussion, an older Congolese partner listening attentively, two foreign investors leaning in; open laptop, folders, a printed site map with no legible text, glasses of water. Floor-to-ceiling windows behind them reveal the city skyline and jacaranda canopies in late-afternoon sun. Medium-wide shot, 35mm lens, f/2.8, eye level, people grouped in the right two-thirds, clean darker wall and window light on the left for overlay. Warm golden window light, soft fill, navy-toned interior with brass accents. Deep navy shadows, warm gold highlights, natural skin tones. Candid, engaged expressions. Photorealistic, ultra-detailed, natural textures, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, legible documents, readable screens, cluttered table, fake handshake pose, empty office, fluorescent lighting, cubicles`,
  },
  "pole-supply": {
    kind: "image",
    file: "/media/higgsfield/pole-supply.jpg",
    ratio: "3/2",
    label: { fr: "Supply, Trading & Logistics", en: "Supply, Trading & Logistics" },
    alt: {
      fr: "Au petit matin, devant les quais de chargement d'un entrepôt moderne, une responsable logistique congolaise en gilet bleu marine à bandes dorées vérifie une expédition sur sa tablette pendant que le cariste de l'entrepôt partenaire charge des palettes d'équipements filmées dans une semi-remorque blanche.",
      en: "In the early morning, in front of the loading docks of a modern warehouse, a Congolese logistics manager in a navy vest with gold stripes checks a shipment on her tablet while the partner warehouse's forklift operator loads shrink-wrapped pallets of equipment into a white semi-trailer.",
    },
    prompt:
      "Documentary photograph at a modern distribution warehouse loading dock near Lubumbashi, DRC, early morning. In the foreground, a Congolese female logistics supervisor in her forties, navy work jacket with amber high-visibility stripes and white hard hat, checks a shipment on a rugged tablet. Behind her, the warehouse operator's forklift driver in a grey uniform loads shrink-wrapped pallets of industrial equipment into the open back of a white semi-trailer backed against a dock door; through the doors, tall pallet racking under bright LED lights. Clean concrete apron, a strip of red laterite earth and acacia trees at the edge of the frame. Medium shot, 35mm lens, f/2.8, eye level, subject on the right third, open sky and dock wall on the left for overlay. Soft low morning sun with cool blue shade, crisp air. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, aerial view, highway, convoy, port cranes, sunset, messy dock, overloaded truck`,
    fallback: { file: "/media/higgsfield/hero-operations-v2.jpg", kind: "image" },
  },
  "pole-people": {
    kind: "image",
    file: "/media/higgsfield/pole-people-v2.jpg",
    ratio: "3/2",
    label: { fr: "People, Facilities & Environment", en: "People, Facilities & Environment" },
    alt: {
      fr: "Briefing du matin sur un site du Haut-Katanga : une cheffe d'équipe congolaise s'adresse à une dizaine d'agents, femmes et hommes de tous âges, en tenue bleu marine à détails dorés, casques et gilets de sécurité, attentifs et souriants dans une douce lumière matinale.",
      en: "Morning briefing on a site in Haut-Katanga: a Congolese team leader addresses about ten staff members, women and men of all ages in navy outfits with gold details, hard hats and safety vests, attentive and smiling in soft morning light.",
    },
    prompt:
      "Warm documentary photograph of a morning team briefing at an industrial site office in Haut-Katanga, DRC. A Congolese female team leader in her thirties, navy uniform with gold high-visibility piping, holds a tablet and speaks to a semicircle of ten staff: cleaning agents, technicians and site workers, women and men, young and senior, all in navy uniforms with amber reflective details, hard hats or caps, safety boots. Behind them a tidy prefabricated site building, a cleaning equipment cart, flowering bougainvillea and red laterite ground. Medium-wide shot, 35mm lens, f/4, eye level, group in the right two-thirds, uncluttered soft background on the left for overlay. Soft low sunrise light, gentle haze, golden rim light on shoulders. Deep navy shadows, warm gold highlights, natural skin tones. Genuine, respectful, engaged expressions. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, military look, marching, crowd, identical faces, cloned people, raised fists, office interior`,
  },
  "pole-digital": {
    kind: "image",
    file: "/media/higgsfield/pole-digital-v2.jpg",
    ratio: "3/2",
    label: { fr: "Digital, Media & Communication", en: "Digital, Media & Communication" },
    alt: {
      fr: "Dans un studio créatif moderne de Lubumbashi, à la tombée de la nuit, une designer et un développeur congolais travaillent devant de grands écrans affichant des maquettes de sites et des graphiques aux tons bleu marine et or, tandis que les lumières de la ville scintillent derrière la vitre.",
      en: "In a modern creative studio in Lubumbashi at dusk, a Congolese designer and developer work in front of large screens showing website mock-ups and charts in navy and gold tones, while the city lights and a distant LED billboard twinkle behind the large window at nightfall.",
    },
    prompt:
      "Editorial photograph inside a modern digital agency studio in Lubumbashi, DRC, at blue hour. A young Congolese woman designer with braided hair and a young Congolese male developer collaborate at a large desk with two wide monitors showing abstract website wireframes, colour swatches and dashboard charts in navy and gold, with no readable text; a drawing tablet, a camera on a tripod and a small plant nearby. Behind them a floor-to-ceiling window with the city at dusk, warm street lights and the glow of a large LED billboard in the distance. Medium shot, 35mm lens, f/2, slightly over-the-shoulder angle, people on the right half, darker window area on the left for overlay. Mixed lighting: cool blue ambient, warm gold desk lamp and screen glow on faces. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, readable code, readable user interface, hacker hoodie cliché, neon cyberpunk, messy cables, glowing holograms`,
    fallback: { file: "/media/led-atlas-poster.jpg", kind: "image" },
  },
} satisfies Record<string, VisualSpec>;

export type VisualId = keyof typeof visuals;

/* ───── Correspondances : quel visuel pour quel élément du contenu ───── */

/** Visuel principal de chaque pôle (clé = identifiant du pôle). */
export const poleVisuals: Record<string, VisualId> = {
  "business-projects": "pole-business",
  "supply-logistics": "pole-supply",
  "people-facilities": "pole-people",
  "digital-communication": "pole-digital",
};
