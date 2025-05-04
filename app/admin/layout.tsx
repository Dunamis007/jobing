"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Toaster } from "@/components/ui/toaster"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!loading && !user) {
        router.push("/login")
        return
      }

      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid))
          const userData = userDoc.data()

          if (!userData || userData.role !== "admin") {
            router.push("/dashboard")
          }
        } catch (error) {
          console.error("Error checking admin status:", error)
          router.push("/dashboard")
        }
      }
    }

    checkAdminStatus()
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
      <Toaster />
    </div>
  )
}
