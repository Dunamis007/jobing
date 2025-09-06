import {
  Brain,
  Code,
  Globe,
  GraduationCap,
  BookOpen,
  Plane,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Heart,
  MessageCircle,
  ImageIcon,
  type LucideIcon,
} from "lucide-react"

export type IconName =
  | "brain"
  | "code"
  | "globe"
  | "graduation-cap"
  | "book-open"
  | "plane"
  | "users"
  | "award"
  | "clock"
  | "check-circle"
  | "star"
  | "arrow-right"
  | "menu"
  | "x"
  | "chevron-down"
  | "mail"
  | "phone"
  | "map-pin"
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "target"
  | "zap"
  | "shield"
  | "trending-up"
  | "heart"
  | "message-circle"
  | "image"

export const iconMap: Record<IconName, LucideIcon> = {
  brain: Brain,
  code: Code,
  globe: Globe,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  plane: Plane,
  users: Users,
  award: Award,
  clock: Clock,
  "check-circle": CheckCircle,
  star: Star,
  "arrow-right": ArrowRight,
  menu: Menu,
  x: X,
  "chevron-down": ChevronDown,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  target: Target,
  zap: Zap,
  shield: Shield,
  "trending-up": TrendingUp,
  heart: Heart,
  "message-circle": MessageCircle,
  image: ImageIcon,
}
