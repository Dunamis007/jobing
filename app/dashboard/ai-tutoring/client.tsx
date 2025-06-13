"use client"

import { useEffect, useState } from "react"
import { AIPeerNotification } from "@/components/gamification/ai-peer-notification"
import { RewardAnimation } from "@/components/gamification/reward-animation"

export default function AITutoringClient() {
  const [showReward, setShowReward] = useState(false)

  useEffect(() => {
    // Show reward animation after a delay for demo purposes
    const timer = setTimeout(() => {
      setShowReward(true)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <AIPeerNotification />
      {showReward && <RewardAnimation amount={50} onComplete={() => setShowReward(false)} />}
    </>
  )
}
