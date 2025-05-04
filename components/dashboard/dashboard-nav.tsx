"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Settings } from "lucide-react"
import { navSections, type NavItem } from "@/components/dashboard/nav-config"
import { useAcademicLevel } from "@/components/dashboard/academic-level-context"
import { motion } from "framer-motion"

export function DashboardNav() {
  const pathname = usePathname()
  const { academicLevel } = useAcademicLevel()

  // Filter items based on user type
  const shouldShowItem = (item: NavItem) => {
    if (!item.userTypes) return true
    return item.userTypes.includes(academicLevel)
  }

  return (
    <nav className="grid items-start px-4 py-4">
      <div className="space-y-6">
        {navSections.map((section) => {
          // Filter items for this section based on user type
          const filteredItems = section.items.filter(shouldShowItem)

          // Skip rendering the section if it has no visible items
          if (filteredItems.length === 0) return null

          return (
            <div key={section.title} className="space-y-2">
              <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{section.title}</h3>
              <div className="space-y-1">
                {filteredItems.map((item) => (
                  <motion.div key={item.href} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                        pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </span>
                      {item.badge && (
                        <span className="ml-auto text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6">
        <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/dashboard/settings"
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
              pathname === "/dashboard/settings" ? "bg-accent text-accent-foreground" : "transparent",
            )}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </motion.div>
      </div>
    </nav>
  )
}
