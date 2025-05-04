"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardToggle } from "@/components/dashboard/dashboard-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Check if we're on the personalized dashboard
  const isPersonalizedDashboard = pathname === "/dashboard/personalized"

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      {!isMobile && <DashboardSidebar />}
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center px-4 sticky top-0 bg-background z-10">
          <div className="flex w-full justify-between items-center">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                  <DashboardSidebar />
                </SheetContent>
              </Sheet>
            )}
            <div className="ml-auto">
              <DashboardToggle />
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
