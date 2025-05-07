"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const programLinks = [
    { name: "IJMB", href: "/programs/ijmb" },
    { name: "JUPEB", href: "/programs/jupeb" },
    { name: "JAMB", href: "/programs/jamb" },
    { name: "IELTS", href: "/programs/ielts" },
    { name: "Digital Marketing", href: "/programs/digital-marketing" },
    { name: "Coding", href: "/programs/coding" },
    { name: "AI Tutoring", href: "/programs/ai-tutoring" },
    { name: "Travel Abroad", href: "/programs/travel-abroad" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-dunamis-primary">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://i.ibb.co/gLBYv3wv/04369-B17-59-A4-47-CE-B625-5-DB36-C766-F54.jpg"
            alt="Dunamis Tutors Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-white">Dunamis Tutors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${isActive("/") ? "text-white" : "text-gray-300 hover:text-white"}`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1 p-0"
              >
                Programs <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-dunamis-primary border-dunamis-dark">
              {programLinks.map((program) => (
                <DropdownMenuItem
                  key={program.href}
                  className="text-gray-300 hover:text-white hover:bg-dunamis-dark focus:bg-dunamis-dark focus:text-white"
                >
                  <Link href={program.href} className="w-full">
                    {program.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/dashboard"
            className={`text-sm font-medium ${isActive("/dashboard") ? "text-white" : "text-gray-300 hover:text-white"}`}
          >
            Dashboard
          </Link>

          <Link
            href="/register"
            className={`text-sm font-medium ${isActive("/register") ? "text-white" : "text-gray-300 hover:text-white"}`}
          >
            Register
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dunamis-primary">
              Login
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-dunamis-primary border-t border-dunamis-dark">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-white" : "text-gray-300"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>

            <div className="space-y-2">
              <p className="text-sm font-medium text-white">Programs</p>
              <div className="pl-4 space-y-2">
                {programLinks.map((program) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    className="block text-sm text-gray-300 hover:text-white"
                    onClick={toggleMenu}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/dashboard"
              className={`text-sm font-medium ${isActive("/dashboard") ? "text-white" : "text-gray-300"}`}
              onClick={toggleMenu}
            >
              Dashboard
            </Link>

            <Link
              href="/register"
              className={`text-sm font-medium ${isActive("/register") ? "text-white" : "text-gray-300"}`}
              onClick={toggleMenu}
            >
              Register
            </Link>

            <Link
              href="/login"
              className={`text-sm font-medium ${isActive("/login") ? "text-white" : "text-gray-300"}`}
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
