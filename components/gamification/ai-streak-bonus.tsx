"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Flame, Gift, Calendar, CoinsIcon as Coin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

interface AIStreakBonusProps {
  currentStreak: number
  className?: string
}

export function AIStreakBonus({ currentStreak, className }: AIStreakBonusProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [claimInProgress, setClaimInProgress] = useState(false)

  const streakMilestones = [
    { days: 3, coins: 50 },
    { days: 7, coins: 100 },
    { days: 14, coins: 200 },
    { days: 21, coins: 300 },
    { days: 30, coins: 500 },
  ]

  const currentMilestone = streakMilestones.filter((m) => currentStreak >= m.days).pop()
  const nextMilestone = streakMilestones.find((m) => currentStreak < m.days)

  const handleClaim = () => {
    setClaimInProgress(true)
    // Simulate API call
    setTimeout(() => {
      setClaimed(true)
      setClaimInProgress(false)
    }, 1000)
  }

  // Calculate days until coin decay (assuming weekly decay)
  const today = new Date()
  const dayOfWeek = today.getDay() // 0 = Sunday, 1 = Monday, etc.
  const daysUntilDecay = dayOfWeek === 0 ? 7 : 7 - dayOfWeek // Decay happens on Sunday
  const decayDate = new Date(today.getTime() + daysUntilDecay * 24 * 60 * 60 * 1000)

  return (
    <>
      <Card className={cn("border-orange-200", className)}>
        <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 pb-2">
          <CardTitle className="flex items-center text-lg">
            <Flame className="mr-2 h-5 w-5 text-orange-500" />
            AI Learning Streak
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Flame className="h-6 w-6 text-orange-500 mr-2" />
              <span className="text-2xl font-bold">{currentStreak}</span>
              <span className="text-sm text-muted-foreground ml-1">days</span>
            </div>
            {currentMilestone && !claimed && (
              <Button size="sm" onClick={() => setShowDialog(true)}>
                <Gift className="mr-1 h-4 w-4" />
                Claim Bonus
              </Button>
            )}
          </div>

          {nextMilestone && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Next milestone: {nextMilestone.days} days</span>
                <span className="flex items-center">
                  <Coin className="mr-1 h-4 w-4 text-yellow-500" />
                  {nextMilestone.coins}
                </span>
              </div>
              <Progress value={(currentStreak / nextMilestone.days) * 100} />
              <p className="text-xs text-muted-foreground flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {nextMilestone.days - currentStreak} more days to unlock {nextMilestone.coins} EduCoins
              </p>
            </div>
          )}

          <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 text-red-600 mb-1">
              <Clock className="h-4 w-4" />
              <p className="font-medium text-sm">Coin Decay Warning</p>
            </div>
            <p className="text-xs text-gray-600">
              Unused EduCoins decay by 10% weekly. Next decay: {decayDate.toLocaleDateString()}
            </p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">AI Streak Bonus Reward!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            {claimed ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  >
                    <Coin className="h-16 w-16 text-yellow-500" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">{currentMilestone?.coins} EduCoins Added!</h3>
                <p className="text-muted-foreground mb-4">
                  Congratulations on your {currentStreak}-day AI learning streak!
                </p>
                <Button onClick={() => setShowDialog(false)}>Continue Learning</Button>
              </motion.div>
            ) : (
              <>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  className="mb-4"
                >
                  <Gift className="h-16 w-16 text-orange-500" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{currentStreak}-Day AI Learning Streak!</h3>
                <p className="text-muted-foreground mb-6">
                  You've unlocked a bonus of {currentMilestone?.coins} EduCoins!
                </p>
                <Button onClick={handleClaim} disabled={claimInProgress} className="gap-2">
                  {claimInProgress ? (
                    "Processing..."
                  ) : (
                    <>
                      <Coin className="h-4 w-4" />
                      Claim {currentMilestone?.coins} EduCoins
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
