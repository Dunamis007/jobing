import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  FileText,
  Brain,
  Award,
  Target,
  Sparkles,
  Lightbulb,
  Briefcase,
  Plane,
  Building,
  FileQuestion,
  Workflow,
  Pencil,
  MessageSquare,
  Coins,
  Trophy,
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: any
  badge?: string
  userTypes?: ("JAMB Candidate" | "IJMB Student" | "JUPEB Student" | "University Student")[]
}

export const navSections = [
  {
    title: "Navigation",
    items: [
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "Courses", href: "/dashboard/courses", icon: BookOpen },
      { title: "Calendar", href: "/dashboard/calendar", icon: Calendar },
      { title: "Progress", href: "/dashboard/progress", icon: Trophy },
    ],
  },
  {
    title: "Learning",
    items: [
      { title: "AI Tutor", href: "/dashboard/ai-tutor", icon: Brain },
      { title: "Form Correction", href: "/dashboard/ai-form-correction", icon: Pencil },
      { title: "Academic Workflow", href: "/dashboard/academic-workflow", icon: Workflow },
      { title: "Assignments", href: "/dashboard/assignments", icon: FileText },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Social Challenges", href: "/dashboard/social-challenges", icon: Trophy },
      { title: "Study Groups", href: "/dashboard/community/study-groups", icon: Users },
      { title: "Forum", href: "/dashboard/community/forum", icon: MessageSquare },
      { title: "Mentor Chat", href: "/dashboard/community/mentor-chat", icon: MessageSquare },
    ],
  },
  {
    title: "Premium",
    items: [{ title: "Premium Plans", href: "/dashboard/premium", icon: Sparkles }],
  },
  {
    title: "JAMB",
    items: [
      { title: "Past Questions", href: "/dashboard/jamb/past-questions", icon: FileQuestion },
      { title: "CBT Simulator", href: "/dashboard/jamb/cbt-simulator", icon: Lightbulb },
      { title: "Mock Exams", href: "/dashboard/jamb/mock-exams", icon: FileText },
      { title: "NIN Registration", href: "/dashboard/jamb/nin-registration", icon: FileText },
      { title: "Study Planner", href: "/dashboard/jamb/study-planner", icon: Calendar },
    ],
  },
  {
    title: "IJMB & JUPEB",
    items: [
      { title: "Information Hub", href: "/dashboard/ijmb-jupeb/info-hub", icon: Lightbulb },
      { title: "Financial Aid", href: "/dashboard/ijmb-jupeb/financial-aid", icon: Briefcase },
      { title: "Center Reviews", href: "/dashboard/ijmb-jupeb/center-reviews", icon: Building },
      { title: "Study Resources", href: "/dashboard/ijmb-jupeb/resources", icon: BookOpen },
      { title: "Admission Guide", href: "/dashboard/ijmb-jupeb/admission-guide", icon: GraduationCap },
      { title: "Student Forum", href: "/dashboard/ijmb-jupeb/forum", icon: MessageSquare },
    ],
  },
  {
    title: "University",
    items: [
      { title: "Admission", href: "/dashboard/university/admission", icon: GraduationCap },
      { title: "Scholarships", href: "/dashboard/university/scholarships", icon: Award },
      { title: "Materials", href: "/dashboard/university/materials", icon: BookOpen },
    ],
  },
  {
    title: "Travel Guide",
    items: [
      { title: "Overview", href: "/dashboard/travel-guide", icon: Plane },
      { title: "Visa Application", href: "/dashboard/travel-guide/visa", icon: FileText },
      { title: "Embassy Guide", href: "/dashboard/travel-guide/embassy", icon: Building },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { title: "Training", href: "/dashboard/digital-marketing/training", icon: GraduationCap },
      { title: "Offline Resources", href: "/dashboard/digital-marketing/offline-resources", icon: BookOpen },
      { title: "Industry Courses", href: "/dashboard/digital-marketing/industry-courses", icon: Briefcase },
      { title: "Ethical Marketing", href: "/dashboard/digital-marketing/ethical-marketing", icon: Award },
      { title: "Client Acquisition", href: "/dashboard/digital-marketing/client-acquisition", icon: Users },
      { title: "ROI Tracking", href: "/dashboard/digital-marketing/roi-tracking", icon: Target },
      { title: "Report Templates", href: "/dashboard/digital-marketing/report-templates", icon: FileText },
      { title: "Payment Insights", href: "/dashboard/digital-marketing/payment-insights", icon: Coins },
      { title: "Learning Updates", href: "/dashboard/digital-marketing/learning-updates", icon: Sparkles },
    ],
  },
  {
    title: "Coding",
    items: [
      { title: "Offline Tutorials", href: "/dashboard/coding/offline-tutorials", icon: BookOpen },
      { title: "Project Courses", href: "/dashboard/coding/project-courses", icon: FileText },
      { title: "Mentor Support", href: "/dashboard/coding/mentor-support", icon: Users },
      { title: "Job Board", href: "/dashboard/coding/job-board", icon: Briefcase },
      { title: "Mental Health", href: "/dashboard/coding/mental-health", icon: Brain },
      { title: "Tech Affordability", href: "/dashboard/coding/tech-affordability", icon: Coins },
      { title: "Portfolio Builder", href: "/dashboard/coding/portfolio-builder", icon: Sparkles },
    ],
  },
]
