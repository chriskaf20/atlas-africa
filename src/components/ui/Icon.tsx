import {
  Award,
  Briefcase,
  Building2,
  CarFront,
  Clapperboard,
  ClipboardList,
  ConciergeBell,
  Drone,
  Eye,
  Factory,
  Fuel,
  Handshake,
  HeartHandshake,
  Landmark,
  Leaf,
  MapPin,
  Megaphone,
  MonitorPlay,
  MonitorSmartphone,
  LayoutDashboard,
  PackageSearch,
  Pickaxe,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  SunMedium,
  Target,
  Truck,
  UserCheck,
  Users,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Icônes utilisables dans le fichier de contenu (champ `icon`).
 * Pour en ajouter une : l'importer depuis lucide-react (https://lucide.dev/icons)
 * et lui donner un nom ici.
 */
const icons = {
  award: Award,
  briefcase: Briefcase,
  building: Building2,
  car: CarFront,
  clipboard: ClipboardList,
  concierge: ConciergeBell,
  drone: Drone,
  energy: SunMedium,
  eye: Eye,
  factory: Factory,
  fuel: Fuel,
  handshake: Handshake,
  heartHandshake: HeartHandshake,
  landmark: Landmark,
  leaf: Leaf,
  mapPin: MapPin,
  megaphone: Megaphone,
  monitor: MonitorSmartphone,
  dashboard: LayoutDashboard,
  monitorPlay: MonitorPlay,
  package: PackageSearch,
  pickaxe: Pickaxe,
  shield: ShieldCheck,
  shoppingBag: ShoppingBag,
  sparkles: Sparkles,
  store: Store,
  target: Target,
  truck: Truck,
  userCheck: UserCheck,
  users: Users,
  video: Clapperboard,
  warehouse: Warehouse,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/** Icône décorative (masquée aux lecteurs d'écran : le texte voisin porte le sens). */
export function Icon({ name, size = 24, strokeWidth = 1.5, className }: IconProps) {
  const Glyph: LucideIcon = icons[name as IconName] ?? Briefcase;
  return <Glyph aria-hidden="true" size={size} strokeWidth={strokeWidth} className={className} />;
}
