"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { Menu, X, PlaneTakeoff, BookOpen, GraduationCap, Code, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const programs = [
    { name: "IJMB Programs", href: "/programs/ijmb", icon: GraduationCap },
    { name: "JUPEB Programs", href: "/programs/jupeb", icon: BookOpen },
    { name: "IELTS", href: "/programs/ielts", icon: BookOpen },
    { name: "Digital Marketing", href: "/programs/digital-marketing", icon: LineChart },
    { name: "Coding", href: "/programs/coding", icon: Code },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32&text=DT"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {programs.map((program) => (
            <Link
              key={program.name}
              href={program.href}
              className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
            >
              {program.name}
            </Link>
          ))}
          <Link
            href="/programs/travel-abroad"
            className="flex items-center gap-1 text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors"
          >
            <PlaneTakeoff className="h-4 w-4" />
            <span>Travel Abroad</span>
            <Badge className="ml-1 bg-[#0e3b62] hover:bg-[#1a5c96]">Popular</Badge>
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
              <Button variant="ghost" size="sm" className="text-[#0e3b62]">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
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
              {programs.map((program) => (
                <Link
                  key={program.name}
                  href={program.href}
                  className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <program.icon className="h-4 w-4" />
                  {program.name}
                </Link>
              ))}
              <Link
                href="/programs/travel-abroad"
                className="text-sm font-medium text-[#0e3b62] hover:text-[#1a5c96] transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PlaneTakeoff className="h-4 w-4" />
                <span>Travel Abroad</span>
                <Badge className="ml-1 bg-[#0e3b62] hover:bg-[#1a5c96]">Popular</Badge>
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-[#0e3b62]">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
