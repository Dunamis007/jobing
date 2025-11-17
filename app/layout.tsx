import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { SchemaMarkup } from "@/components/schema-markup"
import { siteConfig, schemaOrganization } from "@/lib/seo-config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description: siteConfig.description,
  keywords: [
    "AI tutoring",
    "coding bootcamp",
    "digital marketing",
    "IELTS preparation",
    "JUPEB",
    "JAMB",
    "online learning Nigeria",
    "cybersecurity training",
    "data analytics course",
  ],
  authors: [{ name: "Dunamis Edtech" }],
  creator: "Dunamis Edtech",
  publisher: "Dunamis Edtech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.logo,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
  openGraph: {
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: siteConfig.logo,
        width: 1200,
        height: 630,
        alt: "Dunamis Edtech - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunamis Edtech | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
    description: siteConfig.description,
    images: [siteConfig.logo],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={siteConfig.siteUrl} />
        <meta name="theme-color" content="#1a3a6b" />
        <SchemaMarkup schema={schemaOrganization} />
      </head>
      <body className={inter.className}>
        <AnalyticsProvider gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1" role="main">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
