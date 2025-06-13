"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Flame, Gift, Calendar, CoinsIcon as Coin } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"
import { AlertCircle } from "lucide-react"

interface StreakBonusProps {
  currentStreak: number
  className?: string
}

export function StreakBonus({ currentStreak, className }: StreakBonusProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [claimed, setClaimed] = useState(false)
  const [claimInProgress, setClaimInProgress] = useState(false)
  const [streakDays, setStreakDays] = useState(currentStreak)
  const [eduCoins, setEduCoins] = useState(0)
  const [showStreakBonus, setShowStreakBonus] = useState(false)
  const [claimedBonus, setClaimedBonus] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")

  const streakMilestones = [
    { days: 3, coins: 50 },
    { days: 7, coins: 100 },
    { days: 14, coins: 200 },
    { days: 21, coins: 300 },
    { days: 30, coins: 500 },
  ]

  const currentMilestone = streakMilestones.filter((m) => streakDays >= m.days).pop()
  const nextMilestone = streakMilestones.find((m) => streakDays < m.days)

  const handleClaim = () => {
    setClaimInProgress(true)
    // Simulate API call
    setTimeout(() => {
      setClaimed(true)
      setClaimInProgress(false)
    }, 1000)
  }

  useEffect(() => {
    if (streakDays % 7 === 0 && !claimedBonus) {
      setTimeout(() => {
        setShowStreakBonus(true)
      }, 3000)
    }
  }, [streakDays, claimedBonus])

  const claimStreakBonus = () => {
    const bonusAmount = streakDays >= 30 ? 500 : streakDays >= 14 ? 200 : streakDays >= 7 ? 100 : 50
    setEduCoins(eduCoins + bonusAmount)
    setClaimedBonus(true)
    setShowStreakBonus(false)
    setNotificationMessage(`Claimed ${bonusAmount} EduCoins for your ${streakDays}-day streak!`)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  return (
    <>
      {showNotification && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{notificationMessage}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <AlertCircle className="h-6 w-6" />
          </span>
        </div>
      )}

      <Card className={cn("border-orange-200", className)}>
        <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 pb-2">
          <CardTitle className="flex items-center text-lg">
            <Flame className="mr-2 h-5 w-5 text-orange-500" />
            Streak Bonus
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Flame className="h-6 w-6 text-orange-500 mr-2" />
              <span className="text-2xl font-bold">{streakDays}</span>
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
              <Progress value={(streakDays / nextMilestone.days) * 100} />
              <p className="text-xs text-muted-foreground flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {nextMilestone.days - streakDays} more days to unlock {nextMilestone.coins} EduCoins
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {showStreakBonus && (
        <Dialog open={true} onOpenChange={() => setShowStreakBonus(false)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center">Streak Bonus Reward!</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center py-6">
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
                <p className="text-muted-foreground mb-4">Congratulations on your {streakDays}-day streak!</p>
                <Button onClick={() => setShowStreakBonus(false)}>Continue Learning</Button>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Streak Bonus Reward!</DialogTitle>
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
                <p className="text-muted-foreground mb-4">Congratulations on your {streakDays}-day streak!</p>
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
                <h3 className="text-xl font-bold mb-2">{streakDays}-Day Streak Achieved!</h3>
                <p className="text-muted-foreground mb-6">
                  You've unlocked a bonus of {currentMilestone?.coins} EduCoins!
                </p>
                <Button onClick={claimStreakBonus} disabled={claimInProgress} className="gap-2">
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
