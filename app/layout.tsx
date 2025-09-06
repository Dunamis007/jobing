import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"
import { PerformanceMonitor } from "@/components/performance-monitor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dunamis Tutors | Transform Your Future with Expert Learning",
    template: "%s | Dunamis Tutors",
  },
  description:
    "Leading online education platform in Nigeria. Master AI, Coding, Digital Marketing, IELTS, JUPEB, and more with expert tutors and personalized learning paths.",
  keywords: [
    "online education Nigeria",
    "AI courses",
    "coding bootcamp",
    "digital marketing",
    "IELTS preparation",
    "JUPEB program",
    "IJMB program",
    "online learning",
    "career development",
    "skill acquisition",
  ],
  authors: [{ name: "Dunamis Tutors", url: "https://dunamistutors.com" }],
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
    type: "website",
    locale: "en_US",
    url: "https://dunamistutors.com",
    siteName: "Dunamis Tutors",
    title: "Dunamis Tutors | Transform Your Future with Expert Learning",
    description:
      "Leading online education platform in Nigeria. Master AI, Coding, Digital Marketing, IELTS, JUPEB, and more with expert tutors and personalized learning paths.",
    images: [
      {
        url: "https://i.imgur.com/yhOy5P3.jpeg",
        width: 1200,
        height: 630,
        alt: "Dunamis Tutors - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Tutors | Transform Your Future with Expert Learning",
    description:
      "Leading online education platform in Nigeria. Master AI, Coding, Digital Marketing, IELTS, JUPEB, and more with expert tutors and personalized learning paths.",
    images: ["https://i.imgur.com/yhOy5P3.jpeg"],
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
  icons: {
    icon: "https://i.imgur.com/ayuLxTm.jpeg",
    shortcut: "https://i.imgur.com/ayuLxTm.jpeg",
    apple: "https://i.imgur.com/ayuLxTm.jpeg",
  },
  manifest: "/site.webmanifest",
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
        <link rel="icon" href="https://i.imgur.com/ayuLxTm.jpeg" />
        <link rel="apple-touch-icon" href="https://i.imgur.com/ayuLxTm.jpeg" />
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
