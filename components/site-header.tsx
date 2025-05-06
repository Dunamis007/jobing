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
    { name: "JAMB Programs", href: "/programs/jamb", icon: GraduationCap },
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
                src="https://i.ibb.co/gLBYv3wv/04369-B17-59-A4-47-CE-B625-5-DB36-C766-F54.jpg"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-dunamis-primary">Dunamis Tutors</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {programs.map((program) => (
            <Link
              key={program.name}
              href={program.href}
              className="text-sm font-medium text-dunamis-primary hover:text-dunamis-secondary transition-colors"
            >
              {program.name}
            </Link>
          ))}
          <Link
            href="/programs/travel-abroad"
            className="flex items-center gap-1 text-sm font-medium text-dunamis-primary hover:text-dunamis-secondary transition-colors"
          >
            <PlaneTakeoff className="h-4 w-4" />
            <span>Travel Abroad</span>
            <Badge className="ml-1 bg-dunamis-primary hover:bg-dunamis-secondary">Popular</Badge>
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
              <Button variant="ghost" size="sm" className="text-dunamis-primary">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-dunamis-primary hover:bg-dunamis-secondary text-white">
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
                  className="text-sm font-medium text-dunamis-primary hover:text-dunamis-secondary transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <program.icon className="h-4 w-4" />
                  {program.name}
                </Link>
              ))}
              <Link
                href="/programs/travel-abroad"
                className="text-sm font-medium text-dunamis-primary hover:text-dunamis-secondary transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PlaneTakeoff className="h-4 w-4" />
                <span>Travel Abroad</span>
                <Badge className="ml-1 bg-dunamis-primary hover:bg-dunamis-secondary">Popular</Badge>
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-dunamis-primary">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-dunamis-primary hover:bg-dunamis-secondary text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
