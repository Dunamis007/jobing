"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, User } from "lucide-react"

export function DashboardToggle() {
  const router = useRouter()
  const pathname = usePathname()

  const isPersonalized = pathname === "/dashboard/personalized"

  const handleToggle = () => {
    if (isPersonalized) {
      router.push("/dashboard")
    } else {
      router.push("/dashboard/personalized")
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleToggle}>
      {isPersonalized ? (
        <>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          General Dashboard
        </>
      ) : (
        <>
          <User className="mr-2 h-4 w-4" />
          Personalized Dashboard
        </>
      )}
    </Button>
  )
}
