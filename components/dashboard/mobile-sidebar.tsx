"use client"

import { useEffect } from "react"
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
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname()

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (isOpen && event.target instanceof HTMLElement) {
        if (!event.target.closest('[data-sidebar="mobile"]')) {
          onClose()
        }
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    // Prevent scrolling when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  }

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Backdrop overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
        initial="closed"
        animate="open"
        exit="closed"
        variants={overlayVariants}
      />

      {/* Sidebar */}
      <motion.div
        className="fixed inset-y-0 left-0 z-50 w-72 bg-sidebar text-sidebar-foreground"
        data-sidebar="mobile"
        initial="closed"
        animate="open"
        exit="closed"
        variants={sidebarVariants}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>Dunamis Tutors</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-sidebar-foreground">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="px-2 py-4">
            <div className="space-y-6">
              <div>
                <h3 className="px-4 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">
                  Navigation
                </h3>
                <div className="mt-2 space-y-1">
                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/courses">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/courses") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <BookOpen className="mr-2 h-4 w-4" />
                        Courses
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/calendar">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/calendar") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Calendar
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/progress">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/progress") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Trophy className="mr-2 h-4 w-4" />
                        Progress
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="px-4 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">
                  Learning
                </h3>
                <div className="mt-2 space-y-1">
                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/ai-tutor">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/ai-tutor") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Brain className="mr-2 h-4 w-4" />
                        AI Tutor
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/ai-form-correction">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/ai-form-correction") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Form Correction
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/academic-workflow">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/academic-workflow") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        Academic Workflow
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/assignments">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/assignments") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <GraduationCap className="mr-2 h-4 w-4" />
                        Assignments
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="px-4 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">
                  Community
                </h3>
                <div className="mt-2 space-y-1">
                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/social-challenges">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/social-challenges") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Trophy className="mr-2 h-4 w-4" />
                        Social Challenges
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/community">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/community") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Users className="mr-2 h-4 w-4" />
                        Community
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/chat">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/chat") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="px-4 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">
                  Premium
                </h3>
                <div className="mt-2 space-y-1">
                  <motion.div variants={itemVariants}>
                    <Link href="/dashboard/premium">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${isActive("/dashboard/premium") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                      >
                        <Sparkles className="mr-2 h-4 w-4" />
                        Premium Plans
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 py-2">
              <Link href="/dashboard/settings">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${isActive("/dashboard/settings") ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50"}`}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </Link>
            </div>
          </div>
        </ScrollArea>
      </motion.div>
    </>
  )
}
