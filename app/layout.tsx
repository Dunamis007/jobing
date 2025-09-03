import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { usePerformanceMonitoring } from "@/hooks/use-performance"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  usePerformanceMonitoring()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://dunamistutors.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#003049" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SiteHeader />
        <main role="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
