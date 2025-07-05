import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { generateSEO } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

/**
 * Global <head> metadata (title, description, canonical, etc.)
 * generated from `lib/seo.ts`.
 */
export const metadata: Metadata = generateSEO({})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <head>
        {/* The canonical tag is already injected via `metadata.alternates.canonical`,
            but having it here ensures older crawlers also see it. */}
        <link rel="canonical" href="https://dunamistutors.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
