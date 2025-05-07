"use client"

import { useEffect, useState } from "react"
import { Calendar, Flame } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface StreakCounterProps {
  currentStreak?: number
  longestStreak?: number
  className?: string
}

export function StreakCounter({ currentStreak = 0, longestStreak = 0, className }: StreakCounterProps) {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Trigger animation when streak changes
    setShowAnimation(true)
    const timer = setTimeout(() => setShowAnimation(false), 2000)
    return () => clearTimeout(timer)
  }, [currentStreak])

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="bg-primary/10 pb-2">
        <CardTitle className="flex items-center text-lg">
          <Flame className="mr-2 h-5 w-5 text-primary" />
          Learning Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{currentStreak}</span>
            <span className="text-xs text-muted-foreground">Current</span>
          </div>

          <AnimatePresence>
            {showAnimation && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Flame className="h-16 w-16 text-primary/60" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">{longestStreak}</span>
            <span className="text-xs text-muted-foreground">Best</span>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-1 flex justify-between text-xs">
            <span>Streak Progress</span>
            <span>
              {currentStreak % 7}/{7} days
            </span>
          </div>
          <Progress value={((currentStreak % 7) * 100) / 7} className="h-2" />
          <p className="mt-2 text-xs text-muted-foreground">
            <Calendar className="mr-1 inline h-3 w-3" />
            Complete today's lesson to maintain your streak!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
