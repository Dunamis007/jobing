"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, Check, Info, Star, X } from "lucide-react"

import { cn } from "@/lib/utils"

export type NotificationType = "success" | "info" | "reward" | "reminder"

interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  duration?: number
}

interface NotificationSystemProps {
  className?: string
}

export function NotificationSystem({ className }: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  // Demo notifications for testing
  useEffect(() => {
    const demoNotifications = [
      {
        id: "1",
        type: "success" as NotificationType,
        title: "Lesson Completed!",
        message: "You've completed Introduction to AI. Great job!",
        duration: 5000,
      },
      {
        id: "2",
        type: "reward" as NotificationType,
        title: "Coins Earned!",
        message: "You've earned 50 EduCoins for your consistency.",
        duration: 6000,
      },
      {
        id: "3",
        type: "reminder" as NotificationType,
        title: "Don't Break Your Streak!",
        message: "It's been 20 hours since your last lesson.",
        duration: 7000,
      },
    ]

    // Show demo notifications with delays
    const timers = demoNotifications.map((notification, index) => {
      return setTimeout(() => {
        setNotifications((prev) => [...prev, notification])

        // Auto remove after duration
        setTimeout(() => {
          removeNotification(notification.id)
        }, notification.duration || 5000)
      }, index * 2000) // Stagger notifications
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return <Check className="h-5 w-5 text-green-500" />
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "reward":
        return <Star className="h-5 w-5 text-yellow-500" />
      case "reminder":
        return <Bell className="h-5 w-5 text-orange-500" />
      default:
        return <Info className="h-5 w-5" />
    }
  }

  const getBackgroundColor = (type: NotificationType) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
      case "info":
        return "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
      case "reward":
        return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800"
      case "reminder":
        return "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800"
      default:
        return "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
    }
  }

  return (
    <div className={cn("fixed right-4 top-4 z-50 flex flex-col gap-2", className)}>
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            className={cn(
              "flex w-80 items-start gap-3 rounded-lg border p-4 shadow-md",
              getBackgroundColor(notification.type),
            )}
          >
            <div className="mt-0.5">{getIcon(notification.type)}</div>
            <div className="flex-1">
              <h4 className="font-medium">{notification.title}</h4>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
