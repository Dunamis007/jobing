"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  BookOpen,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Trophy,
  Users,
  Brain,
  Camera,
  Clock,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DesktopSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const sidebarItems = [
    {
      title: "Navigation",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Courses",
          href: "/dashboard/courses",
          icon: BookOpen,
        },
        {
          name: "Calendar",
          href: "/dashboard/calendar",
          icon: Calendar,
        },
        {
          name: "Progress",
          href: "/dashboard/progress",
          icon: Trophy,
        },
      ],
    },
    {
      title: "Learning",
      items: [
        {
          name: "AI Tutor",
          href: "/dashboard/ai-tutor",
          icon: Brain,
        },
        {
          name: "Form Correction",
          href: "/dashboard/ai-form-correction",
          icon: Camera,
        },
        {
          name: "Academic Workflow",
          href: "/dashboard/academic-workflow",
          icon: Clock,
        },
        {
          name: "Assignments",
          href: "/dashboard/assignments",
          icon: GraduationCap,
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          name: "Social Challenges",
          href: "/dashboard/social-challenges",
          icon: Trophy,
        },
        {
          name: "Community",
          href: "/dashboard/community",
          icon: Users,
        },
        {
          name: "Chat",
          href: "/dashboard/chat",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Premium",
      items: [
        {
          name: "Premium Plans",
          href: "/dashboard/premium",
          icon: Sparkles,
        },
      ],
    },
  ]

  return (
    <aside className="hidden border-r bg-sidebar text-sidebar-foreground md:block md:w-64 lg:w-72">
      <div className="flex h-16 items-center border-b border-sidebar-border px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6" />
          <span>Dunamis Tutors</span>
        </Link>
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-3 py-4">
          <div className="space-y-6">
            {sidebarItems.map((section, i) => (
              <div key={section.title} className="space-y-2">
                <h3 className="px-4 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item, j) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                                isActive(item.href) && "bg-sidebar-accent text-sidebar-accent-foreground",
                              )}
                            >
                              <item.icon className="mr-3 h-5 w-5" />
                              <span>{item.name}</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent side="right" className="hidden lg:block">
                            {item.name}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <Link
                href="/dashboard/settings"
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive("/dashboard/settings") && "bg-sidebar-accent text-sidebar-accent-foreground",
                )}
              >
                <Settings className="mr-3 h-5 w-5" />
                <span>Settings</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
