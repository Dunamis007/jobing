"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading, paymentVerified, paymentLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    } else if (!loading && !paymentLoading && user && !paymentVerified) {
      // If user is logged in but payment is not verified, redirect to registration
      // Allow access only to the personalized dashboard which will show payment required message
      if (pathname !== "/dashboard/personalized") {
        router.push("/register/ielts")
      }
    }
  }, [user, loading, paymentVerified, paymentLoading, router, pathname])

  if (loading || paymentLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <DashboardShell>{children}</DashboardShell>
}
