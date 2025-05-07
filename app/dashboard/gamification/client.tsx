"use client"

import { useEffect, useState } from "react"
import { NotificationSystem } from "@/components/gamification/notification-system"
import { RewardAnimation } from "@/components/gamification/reward-animation"

export default function GamificationClient() {
  const [showReward, setShowReward] = useState(false)

  useEffect(() => {
    // Show reward animation after a delay for demo purposes
    const timer = setTimeout(() => {
      setShowReward(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <NotificationSystem />
      <RewardAnimation
        show={showReward}
        type="level"
        value={5}
        message="You've reached Level 5! New challenges unlocked."
        onComplete={() => setShowReward(false)}
      />
    </>
  )
}
