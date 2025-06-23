import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    template: "%s | Dunamis Tutors",
  },
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  keywords: [
    "online tutoring Nigeria",
    "AI courses Nigeria",
    "coding bootcamp Nigeria",
    "IELTS preparation Nigeria",
    "JUPEB classes Nigeria",
    "JAMB coaching Nigeria",
    "digital marketing courses",
    "online education Africa",
    "tech skills training",
    "university entrance exam prep",
  ],
  authors: [{ name: "Dunamis Tutors" }],
  creator: "Dunamis Tutors",
  publisher: "Dunamis Tutors",
  metadataBase: new URL("https://dunamistutors.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dunamistutors.com",
    siteName: "Dunamis Tutors",
    title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dunamis Tutors - Online Learning Platform for Nigeria",
      },
    ],
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
  },
  category: "education",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="canonical" href="https://dunamistutors.com/" />
        <meta name="geo.region" content="NG" />
        <meta name="geo.country" content="Nigeria" />
        <meta name="geo.placename" content="Nigeria" />
        <meta name="language" content="English" />
        <meta name="target_country" content="NG" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Dunamis Tutors",
              description: "Expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more",
              url: "https://dunamistutors.com",
              logo: "https://dunamistutors.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-XXX-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
                addressRegion: "Nigeria",
              },
              sameAs: [
                "https://facebook.com/dunamistutors",
                "https://twitter.com/dunamistutors",
                "https://instagram.com/dunamistutors",
                "https://linkedin.com/company/dunamistutors",
              ],
              offers: [
                {
                  "@type": "Course",
                  name: "AI Tutoring Program",
                  description: "Comprehensive AI and machine learning course",
                  provider: {
                    "@type": "Organization",
                    name: "Dunamis Tutors",
                  },
                },
                {
                  "@type": "Course",
                  name: "Coding Bootcamp",
                  description: "Full-stack web development training",
                  provider: {
                    "@type": "Organization",
                    name: "Dunamis Tutors",
                  },
                },
                {
                  "@type": "Course",
                  name: "IELTS Preparation",
                  description: "IELTS exam preparation and practice",
                  provider: {
                    "@type": "Organization",
                    name: "Dunamis Tutors",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
