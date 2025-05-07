"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function OnlineStatus({ className }: { className?: string }) {
  const [isOnline, setIsOnline] = useState(true)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    // Set up blink interval
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 1000)

    // Set up activity detection
    let inactivityTimer: NodeJS.Timeout

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer)
      setIsOnline(true)
      inactivityTimer = setTimeout(() => {
        setIsOnline(false)
      }, 300000) // 5 minutes of inactivity
    }

    // Add event listeners for user activity
    window.addEventListener("mousemove", resetInactivityTimer)
    window.addEventListener("keypress", resetInactivityTimer)
    window.addEventListener("click", resetInactivityTimer)
    window.addEventListener("scroll", resetInactivityTimer)

    // Initial setup
    resetInactivityTimer()

    // Cleanup
    return () => {
      clearInterval(blinkInterval)
      clearTimeout(inactivityTimer)
      window.removeEventListener("mousemove", resetInactivityTimer)
      window.removeEventListener("keypress", resetInactivityTimer)
      window.removeEventListener("click", resetInactivityTimer)
      window.removeEventListener("scroll", resetInactivityTimer)
    }
  }, [])

  if (!isOnline) return null

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn("absolute top-0 right-0 h-3 w-3 rounded-full bg-green-500", isBlinking ? "animate-pulse" : "")}
      />
    </div>
  )
}
