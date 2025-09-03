import { Suspense } from "react"
import type { Metadata } from "next"
import { ErrorBoundary } from "@/components/error-boundary"
import { Loading } from "@/components/loading"
import { HeroSection } from "@/components/sections/hero-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DifferenceSection } from "@/components/sections/difference-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateEducationalOrganizationSchema,
} from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  keywords: [
    "online learning Nigeria",
    "AI courses Nigeria",
    "coding bootcamp Nigeria",
    "IELTS preparation Nigeria",
    "JUPEB program Nigeria",
    "JAMB preparation",
    "digital marketing courses",
    "online tutoring Nigeria",
  ],
  authors: [{ name: "Dunamis Tutors" }],
  creator: "Dunamis Tutors",
  publisher: "Dunamis Tutors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dunamistutors.com"),
  alternates: {
    canonical: "https://dunamistutors.com",
  },
  openGraph: {
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    url: "https://dunamistutors.com",
    siteName: "Dunamis Tutors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dunamis Tutors - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    images: ["/og-image.jpg"],
    creator: "@dunamistutors",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema()
  const educationalSchema = generateEducationalOrganizationSchema()

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema, educationalSchema]),
        }}
      />

      <ErrorBoundary>
        <main className="min-h-screen">
          <Suspense fallback={<Loading message="Loading homepage..." />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<Loading message="Loading programs..." />}>
            <ProgramsSection />
          </Suspense>

          <Suspense fallback={<Loading message="Loading features..." />}>
            <FeaturesSection />
          </Suspense>

          <Suspense fallback={<Loading message="Loading content..." />}>
            <DifferenceSection />
          </Suspense>

          <Suspense fallback={<Loading message="Loading testimonials..." />}>
            <TestimonialsSection />
          </Suspense>

          <Suspense fallback={<Loading message="Loading final section..." />}>
            <CTASection />
          </Suspense>
        </main>
      </ErrorBoundary>
    </>
  )
}
