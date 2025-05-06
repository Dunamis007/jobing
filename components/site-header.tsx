"use client"

import Link from "next/link"
import { useState } from "react"
import { BookOpen, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold">Dunamis Tutors</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/programs/ijmb" className="text-sm font-medium hover:text-blue-700 transition-colors">
            IJMB Programs
          </Link>
          <Link href="/programs/jupeb" className="text-sm font-medium hover:text-blue-700 transition-colors">
            JUPEB Programs
          </Link>
          <Link
            href="/programs/digital-marketing"
            className="text-sm font-medium hover:text-blue-700 transition-colors"
          >
            Digital Marketing
          </Link>
          <Link href="/programs/coding" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Coding
          </Link>
          <Link href="/programs/ai-tutoring" className="text-sm font-medium hover:text-blue-700 transition-colors">
            AI Tutoring
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 px-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/programs/ijmb"
                className="text-sm font-medium hover:text-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                IJMB Programs
              </Link>
              <Link
                href="/programs/jupeb"
                className="text-sm font-medium hover:text-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                JUPEB Programs
              </Link>
              <Link
                href="/programs/digital-marketing"
                className="text-sm font-medium hover:text-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link
                href="/programs/coding"
                className="text-sm font-medium hover:text-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coding
              </Link>
              <Link
                href="/programs/ai-tutoring"
                className="text-sm font-medium hover:text-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Tutoring
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-700 hover:bg-blue-800">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
