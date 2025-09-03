import { Suspense } from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { ErrorBoundary } from "@/components/error-boundary"
import { LoadingSection } from "@/components/loading"
import { HeroSection } from "@/components/sections/hero-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DifferenceSection } from "@/components/sections/difference-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"
import { programs, features, differencePoints, testimonials } from "@/data/homepage"
import { generateOrganizationStructuredData, generateWebsiteStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  keywords: [
    "AI tutoring Nigeria",
    "coding courses online",
    "IELTS preparation",
    "JUPEB classes",
    "digital marketing training",
    "online education Nigeria",
    "IJMB program",
    "JAMB preparation",
    "travel abroad guidance",
  ],
  authors: [{ name: "Dunamis Tutors" }],
  creator: "Dunamis Tutors",
  publisher: "Dunamis Tutors",
  metadataBase: new URL("https://dunamistutors.com"),
  alternates: {
    canonical: "https://dunamistutors.com/",
  },
  openGraph: {
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    url: "https://dunamistutors.com/",
    siteName: "Dunamis Tutors",
    images: [
      {
        url: "/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Dunamis Tutors - Africa's First AI-Powered Learning Platform",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    images: ["/placeholder-logo.png"],
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
  },
}

export default function HomePage() {
  const organizationData = generateOrganizationStructuredData()
  const websiteData = generateWebsiteStructuredData()

  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSection />}>
            <HeroSection
              title="Africa's First AI-Powered Learning Platform"
              description="Dunamis Tutors is an AI-powered online institution offering in-demand digital skills like AI, Digital Marketing, and Freelancing—alongside IJMB, JUPEB, and IELTS—through a gamified, presentation-based system that guarantees employment and global readiness"
              primaryCTA={{
                text: "Get Started",
                href: "/register",
              }}
              secondaryCTA={{
                text: "Explore Programs",
                href: "#programs",
              }}
              heroImage={{
                src: "https://i.ibb.co/CpdGnRzm/personal.png",
                alt: "Dunamis Tutors - Personalized Learning Experience",
              }}
            />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<LoadingSection />}>
            <ProgramsSection
              title="From Coding to Campus — Learn. Build. Launch."
              description="Choose from our wide range of educational programs designed to help you succeed."
              programs={programs}
            />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<LoadingSection />}>
            <FeaturesSection
              title="Why Choose Dunamis Tutors?"
              description="We are committed to providing quality education and personalized guidance to help you succeed."
              features={features}
            />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<LoadingSection />}>
            <DifferenceSection
              title="Our Difference"
              description="Experience learning like never before with our innovative approach to education."
              points={differencePoints}
            />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<LoadingSection />}>
            <TestimonialsSection
              title="What Our Students Say"
              description="Hear from our students about their experience with Dunamis Tutors."
              testimonials={testimonials}
            />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<LoadingSection />}>
            <CTASection
              title="Ready to Start Your Learning Journey?"
              description="Join Dunamis Tutors today and take the first step towards achieving your academic and career goals."
              primaryCTA={{
                text: "Get Started",
                href: "/register",
              }}
              secondaryCTA={{
                text: "Contact Us",
                href: "/contact",
              }}
            />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}
