import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  keywords: [
    "AI tutoring",
    "coding courses",
    "digital marketing",
    "IELTS preparation",
    "JUPEB",
    "IJMB",
    "JAMB",
    "online education Nigeria",
  ],
  authors: [{ name: "Dunamis Edtech" }],
  creator: "Dunamis Edtech",
  publisher: "Dunamis Edtech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dunamisedtech.com"),
  alternates: {
    canonical: "https://dunamisedtech.com",
  },
  openGraph: {
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    url: "https://dunamisedtech.com",
    siteName: "Dunamis Edtech",
    images: [
      {
        url: "https://i.imgur.com/VR3UwFi.jpeg",
        width: 1200,
        height: 630,
        alt: "Dunamis Edtech - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    images: ["https://i.imgur.com/VR3UwFi.jpeg"],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://dunamisedtech.com/" />
        <link rel="icon" href="https://i.imgur.com/VR3UwFi.jpeg" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <Toaster />
            <PerformanceMonitor />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
