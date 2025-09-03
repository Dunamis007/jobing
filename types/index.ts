export interface Program {
  id: string
  name: string
  title: string
  description: string
  icon: string
  href: string
  registerHref: string
  featured?: boolean
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
  avatar?: string
}

export interface DifferencePoint {
  id: string
  title: string
  description: string
  icon: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogImage: string
  structuredData?: any
}
