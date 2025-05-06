import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dunamis Tutors - Personalized Learning for Academic Excellence",
  description:
    "Dunamis Tutors offers personalized learning programs for IJMB, JUPEB, IELTS, Digital Marketing, Coding, and Study Abroad opportunities.",
  keywords:
    "Dunamis Tutors, IJMB program, JUPEB program, IELTS preparation, digital marketing courses, coding bootcamp, study abroad, personalized learning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
