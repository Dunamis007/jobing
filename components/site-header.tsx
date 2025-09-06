"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/ayuLxTm.jpeg"
            alt="Dunamis Edtech"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900">Dunamis Edtech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Home
          </Link>
          <Link href="/programs" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Programs
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Blog
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Dashboard
          </Link>
          <Link href="/register" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Register
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            asChild
          >
            <Link href="/login">Login</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/programs"
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Programs
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/dashboard"
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/register"
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-medium hover:text-orange-500 transition-colors"
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
