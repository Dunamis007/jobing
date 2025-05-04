"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { DashboardHeader } from "@/components/dashboard/header"
import { MobileSidebar } from "@/components/dashboard/mobile-sidebar"
import { DesktopSidebar } from "@/components/dashboard/desktop-sidebar"
import { Background3D } from "@/components/dashboard/background-3d"
import { useAuth } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/toaster"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { user, loading } = useAuth()

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsSidebarOpen(false)
  }, [pathname])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {mounted && <Background3D />}
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-1">
        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <DesktopSidebar />

        {/* Main Content */}
        <motion.main
          className="flex-1 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container px-4 py-4 md:px-6 md:py-6 max-w-7xl mx-auto">{children}</div>
        </motion.main>
      </div>

      <Toaster />
    </div>
  )
}
