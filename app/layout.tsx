import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ErrorBoundary from "@/components/error-boundary"
import PerformanceMonitor from "@/components/performance-monitor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  keywords:
    "AI tutoring, coding bootcamp, digital marketing, IELTS preparation, JUPEB, JAMB, online learning, Nigeria education, programming courses, machine learning",
  authors: [{ name: "Dunamis Edtech" }],
  creator: "Dunamis Edtech",
  publisher: "Dunamis Edtech",
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
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    url: "https://dunamistutors.com",
    siteName: "Dunamis Edtech",
    images: [
      {
        url: "https://i.imgur.com/ayuLxTm.jpeg",
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
    images: ["https://i.imgur.com/ayuLxTm.jpeg"],
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
  icons: {
    icon: [
      { url: "https://i.imgur.com/ayuLxTm.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "https://i.imgur.com/ayuLxTm.jpeg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "https://i.imgur.com/ayuLxTm.jpeg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "https://i.imgur.com/ayuLxTm.jpeg",
  },
  manifest: "/manifest.json",
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
        <link rel="canonical" href="https://dunamistutors.com/" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
