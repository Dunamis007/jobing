import {
  Brain,
  Code,
  BarChart,
  GraduationCap,
  BookOpen,
  PlaneTakeoff,
  CheckCircle,
  type LucideIcon,
} from "lucide-react"

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  Code,
  BarChart,
  GraduationCap,
  BookOpen,
  PlaneTakeoff,
  CheckCircle,
}

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || BookOpen
}
