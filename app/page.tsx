import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "@/components/sections/hero-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DifferenceSection } from "@/components/sections/difference-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { HeroSkeleton, ProgramsSkeleton, ContentSkeleton } from "@/components/section-skeleton"
import { SchemaMarkup, FAQSchema } from "@/components/schema-markup"
import {
  HeroSectionWrapper,
  ProgramsSectionWrapper,
  FeaturesSectionWrapper,
  DifferenceSectionWrapper,
  TestimonialsSectionWrapper,
  CTASectionWrapper,
} from "@/components/semantic-sections"

export const metadata: Metadata = {
  title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Transform your career with Dunamis Edtech's comprehensive online and on-campus programs in AI, Cybersecurity, Data Analysis, Coding, Digital Marketing, IELTS, JUPEB, and JAMB preparation.",
  keywords: [
    "online learning platform Nigeria",
    "AI training",
    "coding bootcamp",
    "IELTS preparation",
    "cybersecurity course",
    "data analytics training",
  ],
  openGraph: {
    title: "Dunamis Edtech | Online Courses in AI, Coding, IELTS & More",
    description:
      "Join thousands of learners upgrading their skills with Dunamis Edtech. Expert-led programs with certification.",
    type: "website",
  },
}

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Dunamis Edtech - Online Learning Platform",
  description:
    "Comprehensive online education platform offering courses in AI, Coding, Cybersecurity, Data Analytics, Digital Marketing, IELTS, JUPEB, and JAMB preparation",
  image: "https://i.imgur.com/dvWoOpc.jpeg",
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={homePageSchema} />
      <FAQSchema />

      <div className="flex flex-col min-h-screen">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroSectionWrapper className="w-full">
            <HeroSection />
          </HeroSectionWrapper>
        </Suspense>

        <Suspense fallback={<ProgramsSkeleton />}>
          <ProgramsSectionWrapper className="w-full">
            <ProgramsSection />
          </ProgramsSectionWrapper>
        </Suspense>

        <Suspense fallback={<ContentSkeleton />}>
          <FeaturesSectionWrapper className="w-full">
            <FeaturesSection />
          </FeaturesSectionWrapper>
        </Suspense>

        <Suspense fallback={<ContentSkeleton />}>
          <DifferenceSectionWrapper className="w-full">
            <DifferenceSection />
          </DifferenceSectionWrapper>
        </Suspense>

        <Suspense fallback={<ContentSkeleton />}>
          <TestimonialsSectionWrapper className="w-full">
            <TestimonialsSection />
          </TestimonialsSectionWrapper>
        </Suspense>

        <Suspense fallback={<ContentSkeleton />}>
          <CTASectionWrapper className="w-full">
            <CTASection />
          </CTASectionWrapper>
        </Suspense>
      </div>
    </>
  )
}
