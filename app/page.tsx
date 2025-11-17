import type { Metadata } from "next"
import { ErrorBoundary } from "@/components/error-boundary"
import { HeroSection } from "@/components/sections/hero-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DifferenceSection } from "@/components/sections/difference-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Online Learning Platform in Nigeria | Dunamis Edtech - AI, Coding & IELTS Courses",
  description:
    "Learn AI, Coding, IELTS, JUPEB, and Digital Marketing online with Dunamis Edtech. Get expert training, flexible learning, and career-ready certifications in Nigeria.",
  keywords: [
    "online learning platform Nigeria",
    "online courses Nigeria",
    "AI training Nigeria",
    "coding classes Nigeria",
    "IELTS online course",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.dunamisedtech.com"),
  alternates: {
    canonical: "https://www.dunamisedtech.com/",
  },
  openGraph: {
    title: "Dunamis Edtech | Online Courses in AI, Coding, IELTS & More",
    description:
      "Join thousands of learners upgrading their skills online with Dunamis Edtech. Learn AI, Coding, IELTS, JUPEB, and Digital Marketing from certified experts.",
    url: "https://www.dunamisedtech.com/",
    type: "website",
    images: [
      {
        url: "https://www.dunamisedtech.com/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Dunamis Edtech Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Edtech | Learn AI, Coding, IELTS & More Online",
    description: "Flexible, expert-led online courses with certification. Upgrade your skills today.",
    images: ["https://www.dunamisedtech.com/images/preview.jpg"],
  },
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <ProgramsSection />
        <FeaturesSection />
        <DifferenceSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </ErrorBoundary>
  )
}
