import type React from "react"
import type { Metadata } from "next"
import { OnlineStatus } from "@/components/dashboard/online-status"

export const metadata: Metadata = {
  title: "Dashboard | Dunamis Tutors",
  description: "Student dashboard for Dunamis Tutors",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-background md:flex">
          <div className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full bg-dunamis-primary text-white flex items-center justify-center">
                <span className="font-semibold">DT</span>
                <OnlineStatus />
              </div>
              <div>
                <p className="text-sm font-medium">Student Dashboard</p>
                <p className="text-xs text-muted-foreground">Dunamis Tutors</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4">
              <h2 className="mb-2 text-lg font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                <a
                  href="/dashboard"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground"
                >
                  Overview
                </a>
                <a
                  href="/dashboard/courses"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  My Courses
                </a>
                <a
                  href="/dashboard/schedule"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Class Schedule
                </a>
                <a
                  href="/dashboard/assignments"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Assignments
                </a>
                <a
                  href="/dashboard/resources"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Learning Resources
                </a>
                <a
                  href="/dashboard/gamification"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Achievements
                </a>
              </div>
            </div>
            <div className="mt-6 px-4">
              <h2 className="mb-2 text-lg font-semibold tracking-tight">Account</h2>
              <div className="space-y-1">
                <a
                  href="/dashboard/profile"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Profile
                </a>
                <a
                  href="/dashboard/settings"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Settings
                </a>
                <a
                  href="/dashboard/support"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Support
                </a>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
