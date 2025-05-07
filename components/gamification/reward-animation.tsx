"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

import { cn } from "@/lib/utils"

interface RewardAnimationProps {
  show: boolean
  type?: "coins" | "level" | "achievement"
  value?: number | string
  message?: string
  onComplete?: () => void
  className?: string
}

export function RewardAnimation({ show, type = "coins", value, message, onComplete, className }: RewardAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      // Hide after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  const getContent = () => {
    switch (type) {
      case "coins":
        return (
          <>
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500 text-white"
            >
              <span className="text-3xl font-bold">+{value}</span>
            </motion.div>
            <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold">
              EduCoins Earned!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              className="text-center text-sm text-muted-foreground"
            >
              {message || "Great job! Keep up the good work."}
            </motion.p>
          </>
        )
      case "level":
        return (
          <>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white"
            >
              <span className="text-4xl font-bold">{value}</span>
            </motion.div>
            <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold">
              Level Up!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              className="text-center text-sm text-muted-foreground"
            >
              {message || "You've reached a new milestone!"}
            </motion.p>
          </>
        )
      case "achievement":
        return (
          <>
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              <span className="text-3xl">🏆</span>
            </motion.div>
            <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold">
              Achievement Unlocked!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              className="text-center text-sm text-muted-foreground"
            >
              {message || `You've earned the "${value}" badge!`}
            </motion.p>
          </>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", className)}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="flex flex-col items-center rounded-lg bg-white p-8 shadow-lg dark:bg-slate-900"
          >
            {getContent()}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsVisible(false)
                onComplete?.()
              }}
              className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              Awesome!
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
