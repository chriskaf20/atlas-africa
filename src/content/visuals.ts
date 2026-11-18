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
    poster: "/media/higgsfield/hero-operations.jpg",
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
    file: "/media/higgsfield/about-lubumbashi.jpg",
    ratio: "4/5",
    label: { fr: "Lubumbashi, Haut-Katanga", en: "Lubumbashi, Haut-Katanga" },
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
    file: "/media/higgsfield/pole-business.jpg",
    ratio: "3/2",
    label: { fr: "Business & Projects", en: "Business & Projects" },
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
    label: { fr: "Supply & Logistics", en: "Supply & Logistics" },
    alt: {
      fr: "Au petit matin, devant les quais de chargement d'un entrepôt moderne, une responsable logistique congolaise en gilet bleu marine à bandes dorées vérifie une expédition sur sa tablette pendant que le cariste de l'entrepôt partenaire charge des palettes d'équipements filmées dans une semi-remorque blanche.",
      en: "In the early morning, in front of the loading docks of a modern warehouse, a Congolese logistics manager in a navy vest with gold stripes checks a shipment on her tablet while the partner warehouse's forklift operator loads shrink-wrapped pallets of equipment into a white semi-trailer.",
    },
    prompt:
      "Documentary photograph at a modern distribution warehouse loading dock near Lubumbashi, DRC, early morning. In the foreground, a Congolese female logistics supervisor in her forties, navy work jacket with amber high-visibility stripes and white hard hat, checks a shipment on a rugged tablet. Behind her, the warehouse operator's forklift driver in a grey uniform loads shrink-wrapped pallets of industrial equipment into the open back of a white semi-trailer backed against a dock door; through the doors, tall pallet racking under bright LED lights. Clean concrete apron, a strip of red laterite earth and acacia trees at the edge of the frame. Medium shot, 35mm lens, f/2.8, eye level, subject on the right third, open sky and dock wall on the left for overlay. Soft low morning sun with cool blue shade, crisp air. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, aerial view, highway, convoy, port cranes, sunset, messy dock, overloaded truck`,
  },
  "pole-people": {
    kind: "image",
    file: "/media/higgsfield/pole-people.jpg",
    ratio: "3/2",
    label: { fr: "People & Facilities", en: "People & Facilities" },
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
    file: "/media/higgsfield/pole-digital.jpg",
    ratio: "3/2",
    label: { fr: "Digital & Communication", en: "Digital & Communication" },
    alt: {
      fr: "Dans un studio créatif moderne de Lubumbashi, à la tombée de la nuit, une designer et un développeur congolais travaillent devant de grands écrans affichant des maquettes de sites et des graphiques aux tons bleu marine et or, tandis que les lumières de la ville scintillent derrière la vitre.",
      en: "In a modern creative studio in Lubumbashi at dusk, a Congolese designer and developer work in front of large screens showing website mock-ups and charts in navy and gold tones, while the city lights and a distant LED billboard twinkle behind the large window at nightfall.",
    },
    prompt:
      "Editorial photograph inside a modern digital agency studio in Lubumbashi, DRC, at blue hour. A young Congolese woman designer with braided hair and a young Congolese male developer collaborate at a large desk with two wide monitors showing abstract website wireframes, colour swatches and dashboard charts in navy and gold, with no readable text; a drawing tablet, a camera on a tripod and a small plant nearby. Behind them a floor-to-ceiling window with the city at dusk, warm street lights and the glow of a large LED billboard in the distance. Medium shot, 35mm lens, f/2, slightly over-the-shoulder angle, people on the right half, darker window area on the left for overlay. Mixed lighting: cool blue ambient, warm gold desk lamp and screen glow on faces. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, readable code, readable user interface, hacker hoodie cliché, neon cyberpunk, messy cables, glowing holograms`,
    fallback: { file: "/media/led-atlas-poster.jpg", kind: "image" },
  },

  /* ───── Suivi de conteneur : un visuel par étape ───── */
  "track-order": {
    kind: "image",
    file: "/media/higgsfield/track-order.jpg",
    ratio: "16/9",
    label: { fr: "Commande confirmée", en: "Order confirmed" },
    alt: {
      fr: "Dans l'atelier d'expédition d'un fournisseur d'équipements industriels, une coordinatrice en gilet bleu marine à bandes dorées pose le scellé sur un conteneur bleu marine de 40 pieds chargé de caisses en bois, pendant qu'un collègue valide la commande sur sa tablette, sous une lumière matinale dorée.",
      en: "In the dispatch bay of an industrial equipment supplier, a coordinator in a navy vest with gold stripes fits the seal on a 40-foot navy container loaded with wooden crates, while a colleague confirms the order on his tablet, in golden morning light.",
    },
    prompt:
      "Wide cinematic documentary photograph at the dispatch bay of an industrial equipment supplier's factory, early morning. A deep navy 40-foot shipping container with doors wide open reveals neatly braced wooden crates and strapped machinery parts. A Congolese female logistics coordinator in her thirties in a navy vest with amber high-visibility stripes, hard hat and gloves fixes a yellow bolt seal on the container door handle; beside her, a male supplier quality inspector in grey overalls confirms the order on a rugged tablet. Large factory doors open behind them onto a bright yard, overhead crane and steel beams in soft focus. Wide 16:9 composition, 35mm lens, f/4, eye level, subjects slightly right of centre, open space left. Golden low sunlight streaming through the factory doors, light haze, cool navy shade inside. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, container markings, readable seal numbers, port cranes, ships, highway, empty container, handshake`,
  },
  "track-port": {
    kind: "image",
    file: "/media/higgsfield/track-port.jpg",
    ratio: "16/9",
    label: { fr: "Arrivée au port", en: "Arrival at port" },
    alt: {
      fr: "Le port à conteneurs de Dar es Salaam au lever du soleil, baigné d'une lumière dorée : de grandes grues portiques déchargent un porte-conteneurs amarré sur l'océan Indien calme, des piles de conteneurs bleu marine et colorés s'alignent sur le quai et des camions attendent leur chargement.",
      en: "The container port of Dar es Salaam at sunrise, bathed in golden African light: huge gantry cranes unload a container ship moored on the calm Indian Ocean, stacks of navy and colourful containers line the quay and trucks wait to be loaded.",
    },
    prompt:
      "Aerial drone photograph of a modern container terminal at the port of Dar es Salaam, Tanzania, at sunrise, bathed in golden African light. A large container ship moored alongside the quay, three towering ship-to-shore gantry cranes lifting containers; orderly stacks of containers, many deep navy with some muted terracotta and grey ones, in long geometric rows; straddle carriers and a line of semi-trailer trucks waiting at the gate. The calm Indian Ocean shimmering gold, dhows and palm-lined coastline in the distance, soft morning mist over the water. Wide 16:9 cinematic composition, 24mm lens, f/5.6, high oblique angle, strong leading lines from the cranes, sky and sea giving negative space on the left. Warm golden sun low on the horizon, long shadows, glowing haze. Deep navy shadows, warm gold highlights. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, container company logos, readable container codes, empty port, rusted cranes, storm, oil spill, cruise ship, night`,
  },
  "track-road": {
    kind: "image",
    file: "/media/higgsfield/track-road.jpg",
    ratio: "16/9",
    label: { fr: "Transit routier", en: "Road transit" },
    alt: {
      fr: "En fin d'après-midi, une file de semi-remorques de transporteurs variés, chargées de conteneurs de différentes couleurs, roule sur une route asphaltée moderne qui traverse la savane arborée du corridor Tanzanie – Zambie, entre bas-côtés de terre rouge et collines bleutées, sous un ciel immense teinté d'or.",
      en: "In the late afternoon, a line of semi-trailer trucks from various hauliers, carrying containers of different colours, drives along a modern asphalt highway across the wooded savanna of the Tanzania–Zambia corridor, between red-earth verges, golden grass, a lone baobab and bluish hills fading into the haze, under a vast gold-tinted sky.",
    },
    prompt:
      "Cinematic telephoto photograph of semi-trailer trucks on a modern highway crossing the wooded savanna of the Tanzania–Zambia corridor in late afternoon. Four clean trucks with cabs in assorted liveries (white, red, silver) and flatbed trailers, each carrying a single 40-foot container of a different shipping-line colour, travel in an orderly line along a smooth two-lane asphalt road with fresh white edge lines and red laterite shoulders. Miombo woodland and golden dry grass on both sides, a baobab tree on a gentle rise, layered blue hills fading into haze on the horizon. Side-on low angle from the roadside, 200mm lens, f/5.6, strong compression stacking the trucks, slight heat shimmer above the asphalt. Warm low sun behind the camera lighting the trucks in gold, a vast sky with soft cumulus taking the upper half. Deep navy shadows, warm gold highlights. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, truck brand badges, readable plates, accident, potholes, overloaded trucks, aerial view, logistics yard, warehouse, dust storm, night`,
  },
  "track-border": {
    kind: "image",
    file: "/media/higgsfield/track-border.jpg",
    ratio: "16/9",
    label: { fr: "Passage de la frontière", en: "Border crossing" },
    alt: {
      fr: "Au poste frontière de Kasumbalesa, dans une zone d'inspection ordonnée sous un grand auvent métallique, un transitaire partenaire en gilet gris présente les documents d'expédition à un agent des douanes, tandis qu'une coordinatrice en gilet bleu marine à bandes dorées suit le dossier sur sa tablette, à côté d'un camion chargé d'un conteneur.",
      en: "At the Kasumbalesa border post, in an orderly inspection area beneath a large steel canopy, a partner clearing agent in a grey vest presents shipping documents to a customs officer, while a coordinator in a navy vest with gold stripes follows the file on her tablet, beside a truck carrying a container.",
    },
    prompt:
      "Wide documentary photograph at a modern, orderly customs inspection area at the Kasumbalesa border crossing between Zambia and the DRC, mid-morning. Under a large white steel canopy, a semi-trailer truck carrying a 40-foot shipping container is parked in a marked inspection lane. In the foreground, a Congolese clearing agent from a partner customs broker, grey vest and lanyard, presents digital shipping documents to a male customs officer in a plain khaki uniform without insignia; beside them a Congolese female coordinator in her thirties, navy vest with amber reflective stripes, follows the file on a tablet. All calm and professional. In the background, a short orderly queue of trucks, a low administrative building and red laterite earth under a clear sky. Wide 16:9 composition, 35mm lens, f/4, eye level, people on the right third, open lane on the left. Bright warm sunlight, soft shade under the canopy. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, national emblems, uniform badges, readable documents, chaotic congestion, crowds, bribery gesture, police weapons, barbed wire`,
  },
  "track-delivery": {
    kind: "image",
    file: "/media/higgsfield/track-delivery.jpg",
    ratio: "16/9",
    label: { fr: "Livré sur site", en: "Delivered on site" },
    alt: {
      fr: "Livraison sur un site industriel près de Kolwezi au coucher du soleil : un chariot télescopique décharge une caisse d'équipement d'un conteneur bleu marine posé sur une semi-remorque, tandis que le responsable du site et un livreur en tenue bleu marine à bandes dorées confirment la réception sur une tablette, sur fond de terre rouge et de collines.",
      en: "Delivery to an industrial site near Kolwezi at sunset: a telehandler unloads an equipment crate from a navy container on a semi-trailer, while the site manager and a delivery agent in navy workwear with gold stripes confirm receipt on a tablet, against a backdrop of red earth and hills.",
    },
    prompt:
      "Wide cinematic photograph of a delivery arriving at an industrial site warehouse near Kolwezi, Lualaba, DRC, at sunset. A semi-trailer carrying a deep navy 40-foot container with doors open is parked on compacted red laterite ground; a telehandler lifts a large wooden equipment crate out onto the ground. In the foreground, a Congolese male site manager in a white hard hat and orange vest and a Congolese female delivery agent in a navy uniform with amber high-visibility stripes look at a tablet together, she points to the screen to confirm receipt, both satisfied. Behind them a modern steel warehouse, stacked materials and distant terraced copperbelt hills. Wide 16:9 composition, 35mm lens, f/5.6, eye level, people left of centre, sky open on the right. Warm low golden sun, long shadows, red dust glowing. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, damaged crate, broken goods, mud, rain, open-pit mine close-up, highway, port cranes`,
  },

  /* ───── Secteurs ───── */
  "sector-mining": {
    kind: "image",
    file: "/media/higgsfield/sector-mining.jpg",
    ratio: "4/5",
    label: { fr: "Mines", en: "Mining" },
    alt: {
      fr: "Une ingénieure des mines congolaise, casque blanc, gilet orange et lunettes de protection, se tient au bord d'une immense mine de cuivre à ciel ouvert du Haut-Katanga, aux gradins de terre rouge et ocre, avec au fond des engins de transport et une eau turquoise, sous une lumière dorée de fin de journée.",
      en: "A Congolese woman mining engineer in a white hard hat, orange vest and safety glasses stands at the edge of a vast open-pit copper mine in Haut-Katanga, with terraced benches of red and ochre earth, haul trucks and turquoise water far below, in golden late-day light.",
    },
    prompt:
      "Epic editorial portrait-format photograph at the rim of a vast open-pit copper and cobalt mine in the copperbelt of Haut-Katanga, DRC, late afternoon. In the lower foreground, a Congolese female mining engineer in her thirties stands on a safe viewing platform behind a safety berm, white hard hat, orange high-visibility vest over navy coveralls, safety glasses and a radio, gazing out over the pit. Below, terraced benches of red, ochre and copper-green rock spiral down to turquoise water; tiny haul trucks and an excavator on the ramps; light dust plumes. Hazy horizon with miombo woodland, upper half of the frame calm sky for overlay. 35mm lens, f/8, slightly low angle from behind and to the side. Warm golden side light, long shadows sculpting the terraces. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, natural rock textures, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, artisanal mining, child labour, people in the pit without PPE, environmental disaster, toxic smoke, standing on cliff edge`,
  },
  "sector-oil-gas": {
    kind: "image",
    file: "/media/higgsfield/sector-oil-gas.jpg",
    ratio: "4/5",
    label: { fr: "Hydrocarbures", en: "Oil and gas" },
    alt: {
      fr: "Dans un dépôt de carburant moderne et soigné, un technicien congolais en combinaison ignifugée bleu marine, casque et gants, contrôle une vanne sur une conduite argentée, devant de grands réservoirs blancs et un camion-citerne à quai, sous un ciel clair du matin.",
      en: "At a modern, well-kept fuel depot, a Congolese technician in navy flame-resistant coveralls, hard hat and gloves checks a valve on a silver pipeline, in front of large white storage tanks and a tanker truck at the loading bay, beneath a clear morning sky.",
    },
    prompt:
      "Clean industrial portrait-format photograph at a modern fuel storage and distribution depot serving the copperbelt, DRC, morning. In the foreground, a Congolese male technician in his forties wearing navy flame-resistant coveralls with amber reflective bands, white hard hat, safety glasses and gloves turns a large yellow valve wheel on a polished silver pipeline manifold while checking a pressure gauge. Behind him, massive white cylindrical storage tanks with steel stairways, a tidy pipe rack and a navy tanker truck at an overhead loading gantry; red laterite earth and acacia trees beyond the security fence. 50mm lens, f/4, low three-quarter angle, technician in the lower half, tanks and clear sky filling the upper part for overlay. Bright golden morning sun, crisp shadows, metallic reflections. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, flames, explosion, oil spill, black smoke, offshore rig, roadside fuel smuggling, jerrycans, readable gauge numbers`,
  },
  "sector-energy": {
    kind: "image",
    file: "/media/higgsfield/sector-energy.jpg",
    ratio: "4/5",
    label: { fr: "Énergie", en: "Energy" },
    alt: {
      fr: "Au lever du soleil, une ingénieure énergie congolaise, casque blanc et gilet bleu marine à bandes dorées, marche entre de longues rangées de panneaux solaires d'une centrale installée dans la savane du Haut-Katanga, tablette à la main, sous un ciel rose et doré.",
      en: "At sunrise, a Congolese woman energy engineer in a white hard hat and navy vest with gold stripes walks between long rows of solar panels at a plant set in the savanna of Haut-Katanga, tablet in hand, beneath a pink and golden sky.",
    },
    prompt:
      "Inspiring portrait-format photograph of a utility-scale ground-mounted solar farm in the savanna of Haut-Katanga, DRC, at sunrise. Endless rows of dark blue photovoltaic panels on steel trackers converge towards the horizon, mirroring the pink and gold sky. In the middle ground, a Congolese female energy engineer in her late twenties, white hard hat, navy vest with amber reflective stripes, walks along the gravel aisle with a tablet, checking the installation. Red laterite earth between rows, sparse miombo trees and a distant substation silhouetted on the horizon, morning mist in the low ground. 35mm lens, f/8, low angle with strong converging lines, sky occupying the upper third for overlay. Soft warm sunrise backlight, golden rim light on the panel edges and the engineer. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, rooftop, drone, broken panels, wind turbines, coal plant, smoke stacks, snow, desert dunes`,
  },
  "sector-industry": {
    kind: "image",
    file: "/media/higgsfield/sector-industry.jpg",
    ratio: "4/5",
    label: { fr: "Industrie", en: "Industry" },
    alt: {
      fr: "Dans une usine moderne de transformation du cuivre, un technicien congolais casqué et en tenue bleu marine à détails dorés vérifie sur une tablette des piles de cathodes de cuivre brillantes, dans un grand hall industriel propre baigné d'une lumière chaude et dorée.",
      en: "In a modern copper processing plant, a Congolese technician in a hard hat and navy workwear with gold details checks stacks of shiny copper cathodes on a tablet, in a large, clean industrial hall with an overhead crane and steel walkways, bathed in warm golden light.",
    },
    prompt:
      "Striking portrait-format industrial photograph inside a modern copper refining plant in the copperbelt, DRC. In the foreground, neat stacks of freshly harvested copper cathode sheets with a rich metallic salmon-gold sheen, strapped on pallets. A Congolese male technician in his thirties, white hard hat, navy coveralls with amber reflective bands, safety glasses and gloves, inspects them while recording data on a rugged tablet. Behind him, a long, clean electrowinning tank hall with an overhead gantry crane, steel walkways and yellow safety railings receding into soft haze. 35mm lens, f/4, low angle, technician in the lower half, the hall's tall structure and light shafts filling the top for overlay. Warm golden light beams from high windows through steam, cool navy shadows. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, metallic textures, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, molten metal splashes, sparks, fire, dirty factory, child workers, old decaying plant`,
  },
  "sector-construction": {
    kind: "image",
    file: "/media/higgsfield/sector-construction.jpg",
    ratio: "4/5",
    label: { fr: "Construction et immobilier", en: "Construction and real estate" },
    alt: {
      fr: "Sur le chantier d'un immeuble moderne à Lubumbashi, une cheffe de projet congolaise casquée, en gilet bleu marine à bandes dorées, consulte des plans sur sa tablette avec un chef de chantier, devant une structure en béton et en verre et une grue à tour qui se détache sur le ciel doré.",
      en: "On the construction site of a modern building in Lubumbashi, a Congolese woman project manager in a hard hat and navy vest with gold stripes reviews plans on her tablet with a site foreman, in front of a concrete and glass structure and a tower crane silhouetted against the golden sky.",
    },
    prompt:
      "Dynamic portrait-format photograph on the construction site of a modern mid-rise office and residential building in Lubumbashi, DRC, late afternoon. In the foreground, a Congolese female project manager in her thirties, white hard hat, navy vest with amber reflective stripes, reviews architectural plans on a tablet with a senior Congolese site foreman in a yellow hard hat and orange vest, both pointing at the building. Behind them, a six-storey reinforced concrete frame with the first floors already clad in glass, scaffolding, workers in full PPE on the upper slab, and a tower crane rising into the sky. Red laterite earth, neat stacks of rebar, jacaranda trees at the site edge. 28mm lens, f/5.6, low angle looking up, people in the lower third, crane and sky above for overlay. Warm golden sidelight, long shadows. Deep navy shadows, warm gold highlights, natural skin tones. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, ${NEGATIVE_SITE}, collapsed structure, workers at height without harness, mud, ruins, informal housing`,
  },
  "sector-retail": {
    kind: "image",
    file: "/media/higgsfield/sector-retail.jpg",
    ratio: "4/5",
    label: { fr: "Commerce", en: "Retail and trade" },
    alt: {
      fr: "Dans une boutique de mode élégante de Lubumbashi, une créatrice congolaise souriante arrange des vêtements en wax aux motifs bleu marine et or sur un portant, pendant qu'une cliente essaie une veste devant un miroir, dans une lumière chaude et douce.",
      en: "In an elegant fashion boutique in Lubumbashi, a smiling Congolese designer arranges navy and gold wax-print garments on a rail while a young customer tries on a tailored jacket in front of a tall arched mirror, in warm, soft afternoon light.",
    },
    prompt:
      "Stylish portrait-format lifestyle photograph inside a contemporary fashion boutique in Lubumbashi, DRC, afternoon. A Congolese woman designer and shop owner in her thirties, elegant navy dress and gold earrings, smiles as she arranges tailored garments in navy, gold and terracotta wax-print fabrics on a brass clothing rail. In the background, a young Congolese customer tries on a structured wax-print jacket in front of a tall arched mirror. Light wooden floor, folded fabrics on shelves, a woven basket, potted palm, large shop window with soft street light. 50mm lens, f/2, eye level, shallow depth of field, owner in the lower two-thirds, clean warm wall above for overlay. Warm golden window light, soft fill, inviting glow. Deep navy shadows, warm gold highlights, natural skin tones. Joyful, entrepreneurial, modern African style. Photorealistic, ultra-detailed, rich fabric textures, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, price tags, shop signage, clothing brand labels, crowded market stall, mannequins with faces, cluttered shelves`,
  },
  "sector-services": {
    kind: "image",
    file: "/media/higgsfield/sector-services.jpg",
    ratio: "4/5",
    label: { fr: "Services", en: "Services" },
    alt: {
      fr: "À la réception d'un hôtel d'affaires élégant de Lubumbashi, un réceptionniste congolais en costume bleu marine accueille avec courtoisie un voyageur d'affaires, tandis qu'une employée remet une clé à une cliente, dans un décor de bois sombre, de marbre et de lumières dorées.",
      en: "At the reception of an elegant business hotel in Lubumbashi, a Congolese receptionist in a navy suit courteously welcomes a business traveller, while a colleague hands a key card to a guest, in a setting of dark wood, marble and golden lights.",
    },
    prompt:
      "Refined portrait-format hospitality photograph at the reception desk of an upscale business hotel in Lubumbashi, DRC, early evening. A Congolese male receptionist in his thirties, tailored navy suit with a discreet gold name pin without text, greets a Congolese business traveller with a leather briefcase; to the side, a young Congolese female colleague in a navy blazer hands a key card to a smiling female guest. Dark walnut and marble reception desk, brass pendant lights, a large vase of tropical flowers, a lounge softly blurred behind. 35mm lens, f/2.2, eye level from the lobby side, people in the lower half, warm ceiling and pendant lights above for overlay. Warm golden ambient light, soft highlights on marble, cosy contrast. Deep navy shadows, warm gold highlights, natural skin tones. Courteous, professional, welcoming mood. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, hotel logo, readable name badges, servile poses, empty lobby, harsh flash, cheap motel`,
  },
  "sector-public": {
    kind: "image",
    file: "/media/higgsfield/sector-public.jpg",
    ratio: "4/5",
    label: { fr: "Organismes publics et privés", en: "Public and private bodies" },
    alt: {
      fr: "Dans une salle de conférence institutionnelle lumineuse, des responsables congolais d'organismes publics et privés, femmes et hommes de différents âges, écoutent une consultante en tailleur bleu marine présenter un projet d'étude, autour d'une grande table en arc de cercle, sous de hautes fenêtres.",
      en: "In a bright institutional conference room, Congolese leaders of public and private bodies, women and men of different ages, listen to a consultant in a navy suit presenting a study project on a large screen, around a curved wooden table beneath tall windows, in a respectful and constructive atmosphere.",
    },
    prompt:
      "Dignified portrait-format photograph of a consultation meeting in the conference hall of a public institution in Lubumbashi, DRC. Around a large curved wooden table with microphones and water carafes, Congolese officials and private-sector partners, women and men aged 30 to 65 in suits and elegant wax-print attire, listen attentively. Standing at the head, a Congolese female consultant in a tailored navy suit presents a project, gesturing towards a large screen showing an abstract map and chart in navy and gold, with no readable text. Tall windows with sheer curtains, high ceiling, warm wood panelling. 35mm lens, f/4, slightly elevated angle from the back of the room, consultant sharp, upper part of the frame (ceiling and windows) clean for overlay. Soft natural daylight with warm golden tones, gentle contrast. Deep navy shadows, warm gold highlights, natural skin tones. Respectful, constructive mood. Photorealistic, ultra-detailed, 8k, shot on full-frame camera.",
    negative: `${NEGATIVE_BASE}, national emblems, political portraits on walls, readable nameplates, readable slides, military uniforms, protest, bored attendees`,
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

/** Visuel de chaque étape du suivi de conteneur (même ordre que `home.tracking.steps`). */
export const trackingVisuals: VisualId[] = [
  "track-order",
  "track-port",
  "track-road",
  "track-border",
  "track-delivery",
];

/** Visuel de chaque secteur (clé = champ `icon` du secteur). */
export const sectorVisuals: Record<string, VisualId> = {
  pickaxe: "sector-mining",
  fuel: "sector-oil-gas",
  zap: "sector-energy",
  factory: "sector-industry",
  building: "sector-construction",
  store: "sector-retail",
  concierge: "sector-services",
  landmark: "sector-public",
};
