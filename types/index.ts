export interface Program {
  id: string
  title: string
  description: string
  icon: string
  href: string
  color: string
  features: string[]
  price: string
  type: "online" | "in-person"
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface Difference {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  enrolledPrograms: string[]
  progress: Record<string, number>
  createdAt: Date
}

export interface Course {
  id: string
  title: string
  description: string
  modules: Module[]
  duration: string
  level: "beginner" | "intermediate" | "advanced"
  price: string
}

export interface Module {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  duration: string
  isLocked: boolean
}

export interface Lesson {
  id: string
  title: string
  content: string
  type: "video" | "text" | "quiz" | "assignment"
  duration: string
  isCompleted: boolean
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}
