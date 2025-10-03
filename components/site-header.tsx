"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-dunamis-navy text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <img src="https://i.imgur.com/dvWoOpc.jpeg" alt="Dunamis Edtech" className="h-10 w-10 rounded" />
          <span className="font-bold text-xl">Dunamis Edtech</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium leading-none text-dunamis-navy">Online Programs</h4>
                    <Link
                      href="/programs/ai-tutoring"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">AI Tutoring</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Master artificial intelligence and machine learning
                      </p>
                    </Link>
                    <Link
                      href="/programs/coding"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">Coding</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn programming from scratch to advanced
                      </p>
                    </Link>
                    <Link
                      href="/programs/digital-marketing"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">Digital Marketing</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Become a digital marketing expert
                      </p>
                    </Link>
                    <Link
                      href="/programs/ielts"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">IELTS</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Prepare for IELTS with expert guidance
                      </p>
                    </Link>
                    <Link
                      href="/programs/travel-abroad"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">Travel Abroad</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get guidance for studying abroad
                      </p>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium leading-none text-dunamis-navy">In-Person Programs</h4>
                    <Link
                      href="/programs/jamb"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">JAMB</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Ace your JAMB examination
                      </p>
                    </Link>
                    <Link
                      href="/programs/jupeb"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">JUPEB</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Direct university admission program
                      </p>
                    </Link>
                    <Link
                      href="/programs/ijmb"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-dunamis-navy">IJMB</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Interim Joint Matriculation Board program
                      </p>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-dunamis-orange transition-colors">
                Home
              </Link>
              <div className="space-y-2">
                <p className="text-lg font-medium">Programs</p>
                <div className="ml-4 space-y-2">
                  <Link
                    href="/programs/ai-tutoring"
                    className="block text-sm hover:text-dunamis-orange transition-colors"
                  >
                    AI Tutoring
                  </Link>
                  <Link href="/programs/coding" className="block text-sm hover:text-dunamis-orange transition-colors">
                    Coding
                  </Link>
                  <Link
                    href="/programs/digital-marketing"
                    className="block text-sm hover:text-dunamis-orange transition-colors"
                  >
                    Digital Marketing
                  </Link>
                  <Link href="/programs/ielts" className="block text-sm hover:text-dunamis-orange transition-colors">
                    IELTS
                  </Link>
                  <Link
                    href="/programs/travel-abroad"
                    className="block text-sm hover:text-dunamis-orange transition-colors"
                  >
                    Travel Abroad
                  </Link>
                  <Link href="/programs/jamb" className="block text-sm hover:text-dunamis-orange transition-colors">
                    JAMB
                  </Link>
                  <Link href="/programs/jupeb" className="block text-sm hover:text-dunamis-orange transition-colors">
                    JUPEB
                  </Link>
                  <Link href="/programs/ijmb" className="block text-sm hover:text-dunamis-orange transition-colors">
                    IJMB
                  </Link>
                </div>
              </div>
              <Link href="/blog" className="text-lg font-medium hover:text-dunamis-orange transition-colors">
                Blog
              </Link>
              <Link href="/dashboard" className="text-lg font-medium hover:text-dunamis-orange transition-colors">
                Dashboard
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-dunamis-orange transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0 mt-4">
                <Link href="/register">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
