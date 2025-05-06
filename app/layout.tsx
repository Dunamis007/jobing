import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dunamis Tutors | Personalized Learning for Academic Excellence",
    template: "%s | Dunamis Tutors",
  },
  description:
    "AI-powered academic support for IJMB, JUPEB, digital marketing, and coding programs. Transform your learning experience with personalized study plans.",
  keywords: [
    "IJMB programs",
    "JUPEB preparation",
    "digital marketing courses",
    "coding bootcamp",
    "AI tutoring",
    "personalized learning",
    "academic excellence",
    "Nigerian universities",
    "direct entry programs",
    "online education",
  ],
  authors: [{ name: "Dunamis Tutors" }],
  creator: "Dunamis Tutors",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://dunamistutors.com",
    title: "Dunamis Tutors | Personalized Learning for Academic Excellence",
    description:
      "AI-powered academic support for IJMB, JUPEB, digital marketing, and coding programs. Transform your learning experience with personalized study plans.",
    siteName: "Dunamis Tutors",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
