import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { generateSEO } from "@/lib/seo"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = generateSEO({
  title: "Dunamis Tutors | Learn AI, Coding, IELTS, JUPEB & More Online in Nigeria",
  description:
    "Join Dunamis Tutors for expert-led online programs in AI, Coding, Digital Marketing, IELTS, JUPEB, and more. Access flexible learning, mentorship, and certification—all in one place",
  canonicalUrl: "https://dunamistutors.com/",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main className="container mx-auto py-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
