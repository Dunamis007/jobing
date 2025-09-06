"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Brain, Code, Megaphone, Globe, GraduationCap, Plane } from "lucide-react"

const onlinePrograms = [
  {
    title: "AI Tutoring",
    href: "/programs/ai-tutoring",
    description: "Master artificial intelligence and machine learning",
    icon: Brain,
  },
  {
    title: "Coding Bootcamp",
    href: "/programs/coding",
    description: "Full-stack development with modern technologies",
    icon: Code,
  },
  {
    title: "Digital Marketing",
    href: "/programs/digital-marketing",
    description: "Master digital marketing strategies and tools",
    icon: Megaphone,
  },
  {
    title: "IELTS Preparation",
    href: "/programs/ielts",
    description: "Comprehensive IELTS exam preparation",
    icon: Globe,
  },
  {
    title: "Travel Abroad",
    href: "/programs/travel-abroad",
    description: "Complete guidance for studying abroad",
    icon: Plane,
  },
]

const inPersonPrograms = [
  {
    title: "IJMB Program",
    href: "/programs/ijmb",
    description: "Intermediate Joint Matriculation Board preparation",
    icon: GraduationCap,
  },
  {
    title: "JUPEB Program",
    href: "/programs/jupeb",
    description: "Joint Universities Preliminary Examinations Board",
    icon: GraduationCap,
  },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-dunamis-primary/95 backdrop-blur supports-[backdrop-filter]:bg-dunamis-primary/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/ayuLxTm.jpeg"
            alt="Dunamis Edtech"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-white">Dunamis Edtech</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white">
                Programs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-gray-900">Online Programs</h4>
                    <ul className="space-y-3">
                      {onlinePrograms.map((program) => (
                        <li key={program.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={program.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2">
                                <program.icon className="h-4 w-4 text-dunamis-primary" />
                                <div className="text-sm font-medium leading-none">{program.title}</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {program.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-medium text-gray-900">In-Person Programs</h4>
                    <ul className="space-y-3">
                      {inPersonPrograms.map((program) => (
                        <li key={program.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={program.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2">
                                <program.icon className="h-4 w-4 text-dunamis-primary" />
                                <div className="text-sm font-medium leading-none">{program.title}</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {program.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/register" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Register
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:inline-flex">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dunamis-primary bg-transparent"
            >
              Login
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-dunamis-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Online Programs</h4>
                  {onlinePrograms.map((program) => (
                    <Link
                      key={program.title}
                      href={program.href}
                      className="block py-2 text-sm hover:text-dunamis-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">In-Person Programs</h4>
                  {inPersonPrograms.map((program) => (
                    <Link
                      key={program.title}
                      href={program.href}
                      className="block py-2 text-sm hover:text-dunamis-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-dunamis-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/dashboard"
                  className="text-lg font-medium hover:text-dunamis-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/register"
                  className="text-lg font-medium hover:text-dunamis-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-medium hover:text-dunamis-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
