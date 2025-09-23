"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const programs = [
    { name: "AI Tutoring", href: "/programs/ai-tutoring" },
    { name: "Coding", href: "/programs/coding" },
    { name: "Digital Marketing", href: "/programs/digital-marketing" },
    { name: "IELTS", href: "/programs/ielts" },
    { name: "JAMB", href: "/programs/jamb" },
    { name: "JUPEB", href: "/programs/jupeb" },
    { name: "IJMB", href: "/programs/ijmb" },
    { name: "Travel Abroad", href: "/programs/travel-abroad" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-dunamis-navy text-white">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-8 flex items-center space-x-2" href="/">
            <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Tutors" className="h-10 w-10 rounded" />
            <span className="hidden font-bold text-lg sm:inline-block">Dunamis Tutors</span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link className="transition-colors hover:text-dunamis-orange text-white" href="/">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors hover:text-dunamis-orange text-white">
                <span>Programs</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {programs.map((program) => (
                  <DropdownMenuItem key={program.name} asChild>
                    <Link href={program.href} className="text-gray-900 hover:text-dunamis-navy">
                      {program.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link className="transition-colors hover:text-dunamis-orange text-white" href="/blog">
              Blog
            </Link>
            <Link className="transition-colors hover:text-dunamis-orange text-white" href="/dashboard">
              Dashboard
            </Link>
            <Link className="transition-colors hover:text-dunamis-orange text-white" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden text-white hover:text-dunamis-orange"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 bg-dunamis-navy text-white">
            <div className="flex items-center space-x-2 pb-4">
              <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Tutors" className="h-8 w-8 rounded" />
              <span className="font-bold">Dunamis Tutors</span>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="transition-colors hover:text-dunamis-orange text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="font-medium text-sm text-dunamis-orange">Programs</div>
                <div className="pl-4 space-y-2">
                  {programs.map((program) => (
                    <Link
                      key={program.name}
                      href={program.href}
                      className="block transition-colors hover:text-dunamis-orange text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="transition-colors hover:text-dunamis-orange text-white"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/dashboard"
                className="transition-colors hover:text-dunamis-orange text-white"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-dunamis-orange text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Tutors" className="h-8 w-8 rounded" />
              <span className="font-bold text-white">Dunamis Tutors</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button asChild className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
              <Link href="/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
