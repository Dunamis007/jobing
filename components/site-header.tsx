"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const onlinePrograms = [
    { name: "AI Tutoring", href: "/programs/ai-tutoring" },
    { name: "Coding", href: "/programs/coding" },
    { name: "Digital Marketing", href: "/programs/digital-marketing" },
    { name: "IELTS", href: "/programs/ielts" },
    { name: "Travel Abroad", href: "/programs/travel-abroad" },
  ]

  const inPersonPrograms = [
    { name: "JAMB", href: "/programs/jamb" },
    { name: "JUPEB", href: "/programs/jupeb" },
    { name: "IJMB", href: "/programs/ijmb" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <img src="https://i.imgur.com/VR3UwFi.jpeg" alt="Dunamis Edtech" className="h-8 w-8 rounded" />
            <span className="hidden font-bold sm:inline-block">Dunamis Edtech</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
                <span>Online Programs</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {onlinePrograms.map((program) => (
                  <DropdownMenuItem key={program.name} asChild>
                    <Link href={program.href}>{program.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground/60">
                <span>In-Person Programs</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {inPersonPrograms.map((program) => (
                  <DropdownMenuItem key={program.name} asChild>
                    <Link href={program.href}>{program.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/blog">
              Blog
            </Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="flex items-center space-x-2 pb-4">
              <img src="https://i.imgur.com/VR3UwFi.jpeg" alt="Dunamis Edtech" className="h-8 w-8 rounded" />
              <span className="font-bold">Dunamis Edtech</span>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-2">
                <div className="font-medium text-sm">Online Programs</div>
                <div className="pl-4 space-y-2">
                  {onlinePrograms.map((program) => (
                    <Link
                      key={program.name}
                      href={program.href}
                      className="block transition-colors hover:text-foreground/80 text-foreground/60"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-sm">In-Person Programs</div>
                <div className="pl-4 space-y-2">
                  {inPersonPrograms.map((program) => (
                    <Link
                      key={program.name}
                      href={program.href}
                      className="block transition-colors hover:text-foreground/80 text-foreground/60"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <img src="https://i.imgur.com/VR3UwFi.jpeg" alt="Dunamis Edtech" className="h-8 w-8 rounded" />
              <span className="font-bold">Dunamis Edtech</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
