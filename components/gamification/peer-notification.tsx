"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Star, Trophy, ArrowUp, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface PeerNotification {
  id: string
  type: "upgrade" | "achievement" | "streak"
  user: {
    name: string
    avatar: string
  }
  message: string
  timestamp: Date
}

interface PeerNotificationProps {
  className?: string
}

export function PeerNotification({ className }: PeerNotificationProps) {
  const [notifications, setNotifications] = useState<PeerNotification[]>([])
  const [currentNotification, setCurrentNotification] = useState<PeerNotification | null>(null)

  // Sample notifications for demo
  const sampleNotifications: PeerNotification[] = [
    {
      id: "1",
      type: "upgrade",
      user: {
        name: "Tayo Adeleke",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      message: "just upgraded to Gold Tier!",
      timestamp: new Date(),
    },
    {
      id: "2",
      type: "achievement",
      user: {
        name: "Amina Ibrahim",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      message: "earned the 'Code Master' badge!",
      timestamp: new Date(),
    },
    {
      id: "3",
      type: "streak",
      user: {
        name: "Daniel Osei",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      message: "is on a 30-day learning streak!",
      timestamp: new Date(),
    },
  ]

  useEffect(() => {
    // Show notifications at random intervals
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * sampleNotifications.length)
      const notification = {
        ...sampleNotifications[randomIndex],
        id: `${Date.now()}`,
        timestamp: new Date(),
      }

      setCurrentNotification(notification)

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setCurrentNotification(null)
      }, 5000)
    }

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(showRandomNotification, 5000)

    // Show subsequent notifications every 15-30 seconds
    const intervalTimer = setInterval(() => {
      if (Math.random() > 0.5) {
        showRandomNotification()
      }
    }, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case "upgrade":
        return <ArrowUp className="h-4 w-4 text-purple-500" />
      case "achievement":
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case "streak":
        return <Star className="h-4 w-4 text-orange-500" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "upgrade":
        return "bg-purple-50 border-purple-200"
      case "achievement":
        return "bg-yellow-50 border-yellow-200"
      case "streak":
        return "bg-orange-50 border-orange-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className={cn("fixed bottom-4 right-4 z-50", className)}>
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={cn(
              "flex items-center gap-3 rounded-lg border p-3 shadow-md w-72",
              getBackgroundColor(currentNotification.type),
            )}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={currentNotification.user.avatar || "/placeholder.svg"}
                alt={currentNotification.user.name}
              />
              <AvatarFallback>{currentNotification.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-1">
                {getIcon(currentNotification.type)}
                <p className="text-sm font-medium">
                  <span className="font-semibold">{currentNotification.user.name}</span> {currentNotification.message}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">Just now</p>
            </div>
            <button
              onClick={() => setCurrentNotification(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
