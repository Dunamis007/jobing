import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dunamis Tutors - Personalized Learning for Academic Excellence",
  description:
    "Dunamis Tutors offers personalized learning programs for IJMB, JUPEB, JAMB, IELTS, Digital Marketing, Coding, and Study Abroad opportunities.",
  keywords:
    "Dunamis Tutors, IJMB program, JUPEB program, JAMB program, IELTS preparation, digital marketing courses, coding bootcamp, study abroad, personalized learning",
  icons: {
    icon: "https://i.ibb.co/gLBYv3wv/04369-B17-59-A4-47-CE-B625-5-DB36-C766-F54.jpg",
    apple: "https://i.ibb.co/gLBYv3wv/04369-B17-59-A4-47-CE-B625-5-DB36-C766-F54.jpg",
  },
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
