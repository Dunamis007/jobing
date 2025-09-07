"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "#",
    submenu: [
      { name: "AI Tutoring", href: "/programs/ai-tutoring" },
      { name: "Coding Bootcamp", href: "/programs/coding" },
      { name: "Digital Marketing", href: "/programs/digital-marketing" },
      { name: "IELTS Preparation", href: "/programs/ielts" },
      { name: "JAMB Preparation", href: "/programs/jamb" },
      { name: "JUPEB Program", href: "/programs/jupeb" },
      { name: "IJMB Program", href: "/programs/ijmb" },
      { name: "Travel Abroad", href: "/programs/travel-abroad" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Register", href: "/register" },
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://i.imgur.com/ayuLxTm.jpeg"
                alt="Dunamis Edtech"
                className="h-10 w-10 rounded-lg object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=40&width=40&text=DE"
                }}
              />
              <span className="text-xl font-bold text-[#002B5B]">Dunamis Edtech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center space-x-1 text-[#333333] hover:text-[#FF9800] font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href} className="w-full text-[#666666] hover:text-[#FF9800]">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className="text-[#333333] hover:text-[#FF9800] font-medium transition-colors">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold px-6">
              <Link href="/dashboard">Login</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <div className="font-medium text-[#333333] py-2">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block text-[#666666] hover:text-[#FF9800] py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-[#333333] hover:text-[#FF9800] font-medium py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold">
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
