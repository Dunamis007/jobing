"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BookOpen,
  Brain,
  LineChart,
  Users,
  Trophy,
  Coins,
  Settings,
  LogOut,
  PlaneTakeoff,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function DashboardSidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Mock user data - in a real app, this would come from a context or API
  const userData = {
    name: "Chioma Okonkwo",
    level: 7,
    xp: 2340,
    xpToNextLevel: 3000,
    program: "IJMB Program",
  }

  const sidebarLinks = [
    { name: "Dashboard", href: "/dashboard", icon: LineChart, active: true },
    { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
    { name: "Study Clans", href: "/dashboard/clans", icon: Users },
    { name: "Challenges", href: "/dashboard/challenges", icon: Trophy },
    { name: "EduCoin Wallet", href: "/dashboard/wallet", icon: Coins },
    { name: "Travel Abroad", href: "/dashboard/travel-abroad", icon: PlaneTakeoff },
    { name: "Academic Progress", href: "/dashboard/progress", icon: GraduationCap },
    { name: "Brain Health", href: "/dashboard/brain-health", icon: Brain },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=DT"
              alt="Dunamis Tutors Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                  <span className="text-lg font-medium text-[#0e3b62]">{userData.name.charAt(0)}</span>
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0e3b62] text-[10px] font-medium text-white">
                  {userData.level}
                </div>
              </div>
              <div>
                <h3 className="font-medium">{userData.name}</h3>
                <p className="text-sm text-gray-500">{userData.program}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>
                  XP: {userData.xp}/{userData.xpToNextLevel}
                </span>
                <span>Level {userData.level}</span>
              </div>
              <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2" />
            </div>
          </div>

          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                  link.active ? "bg-[#0e3b62]/10 text-[#0e3b62] font-medium" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            ))}

            <Link href="/logout" className="flex items-center gap-3 rounded-md px-3 py-2 text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 bg-white border-r">
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=DT"
              alt="Dunamis Tutors Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <span className="text-lg font-medium text-[#0e3b62]">{userData.name.charAt(0)}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0e3b62] text-[10px] font-medium text-white">
                    {userData.level}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{userData.name}</h3>
                  <p className="text-sm text-gray-500">{userData.program}</p>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>
                    XP: {userData.xp}/{userData.xpToNextLevel}
                  </span>
                  <span>Level {userData.level}</span>
                </div>
                <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2" />
              </div>
            </div>

            <nav className="space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 ${
                    link.active ? "bg-[#0e3b62]/10 text-[#0e3b62] font-medium" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              ))}

              <Link
                href="/logout"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed bottom-4 right-4 lg:hidden z-40">
        <Button
          onClick={() => setMobileMenuOpen(true)}
          size="icon"
          className="h-12 w-12 rounded-full bg-[#0e3b62] shadow-lg"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </>
  )
}
