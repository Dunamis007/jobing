"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const programs = [
    { name: "AI Tutoring", href: "/programs/ai-tutoring" },
    { name: "Coding Bootcamp", href: "/programs/coding" },
    { name: "Digital Marketing", href: "/programs/digital-marketing" },
    { name: "IELTS Preparation", href: "/programs/ielts" },
    { name: "IJMB Program", href: "/programs/ijmb" },
    { name: "JUPEB Program", href: "/programs/jupeb" },
    { name: "JAMB Preparation", href: "/programs/jamb" },
    { name: "Travel Abroad Consulting", href: "/programs/travel-abroad" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-dunamis-navy border-dunamis-navy">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/dvWoOpc.jpeg"
            alt="Dunamis Edtech Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white">Dunamis Edtech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-dunamis-orange transition-colors">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium text-white hover:text-dunamis-orange transition-colors">
              Programs
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {programs.map((program) => (
                <DropdownMenuItem key={program.href} asChild>
                  <Link href={program.href} className="w-full">
                    {program.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/blog" className="text-sm font-medium text-white hover:text-dunamis-orange transition-colors">
            Blog
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-medium text-white hover:text-dunamis-orange transition-colors"
          >
            Dashboard
          </Link>

          <Link href="/contact" className="text-sm font-medium text-white hover:text-dunamis-orange transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-dunamis-orange">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-dunamis-navy border-dunamis-navy">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium text-white hover:text-dunamis-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <p className="text-lg font-medium text-white">Programs</p>
                <div className="pl-4 space-y-2">
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      className="block text-sm text-gray-300 hover:text-dunamis-orange transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="text-lg font-medium text-white hover:text-dunamis-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/dashboard"
                className="text-lg font-medium text-white hover:text-dunamis-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                href="/contact"
                className="text-lg font-medium text-white hover:text-dunamis-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Button asChild className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0 w-full mt-4">
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
