export interface Program {
  id: string
  title: string
  description: string
  icon: string
  href: string
  color: string
  features: string[]
  price?: string
}

export interface Feature {
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

export interface Difference {
  id: string
  title: string
  description: string
  icon: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
}
