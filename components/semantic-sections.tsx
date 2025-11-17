// Semantic HTML5 section components
interface SemanticSectionProps {
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

export function HeroSectionWrapper({ children, className = "", ariaLabel = "Hero Section" }: SemanticSectionProps) {
  return (
    <section aria-label={ariaLabel} className={className} role="region">
      {children}
    </section>
  )
}

export function ProgramsSectionWrapper({ children, className = "", ariaLabel = "Our Programs" }: SemanticSectionProps) {
  return (
    <section aria-label={ariaLabel} className={className} role="region">
      {children}
    </section>
  )
}

export function FeaturesSectionWrapper({ children, className = "", ariaLabel = "Features" }: SemanticSectionProps) {
  return (
    <section aria-label={ariaLabel} className={className} role="region">
      {children}
    </section>
  )
}

export function TestimonialsSectionWrapper({ children, className = "", ariaLabel = "Testimonials" }: SemanticSectionProps) {
  return (
    <section aria-label={ariaLabel} className={className} role="region">
      {children}
    </section>
  )
}

export function CTASectionWrapper({ children, className = "", ariaLabel = "Call to Action" }: SemanticSectionProps) {
  return (
    <section aria-label={ariaLabel} className={className} role="region">
      {children}
    </section>
  )
}

export function DifferenceSectionWrapper({ children, className = "", ariaLabel = "Why Choose Us" }: SemanticSectionProps) {
  return (
    <section aria-label={ariaLabel} className={className} role="region">
      {children}
    </section>
  )
}
