import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    template: "%s | Dunamis Edtech",
  },
  description:
    "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
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
  authors: [{ name: "Dunamis Edtech" }],
  creator: "Dunamis Edtech",
  metadataBase: new URL("https://dunamistutors.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dunamistutors.com",
    siteName: "Dunamis Edtech",
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dunamis Edtech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description:
      "Join Dunamis Edtech for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  )
}
