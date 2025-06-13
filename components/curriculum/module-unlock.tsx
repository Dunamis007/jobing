"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { CoinsIcon as Coin, Clock, Lock, Unlock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleUnlockProps {
  moduleId: number
  moduleName: string
  coinCost: number
  timeRemaining: number // in days
  onUnlock: (moduleId: number) => void
  className?: string
}

export function ModuleUnlock({
  moduleId,
  moduleName,
  coinCost,
  timeRemaining,
  onUnlock,
  className,
}: ModuleUnlockProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [unlocking, setUnlocking] = useState(false)
  const [unlockSuccess, setUnlockSuccess] = useState(false)

  const handleUnlock = () => {
    setUnlocking(true)
    // Simulate API call
    setTimeout(() => {
      setUnlocking(false)
      setUnlockSuccess(true)
      setTimeout(() => {
        setShowDialog(false)
        setUnlockSuccess(false)
        onUnlock(moduleId)
      }, 1500)
    }, 1000)
  }

  const timeProgress = Math.max(0, Math.min(100, ((7 - timeRemaining) / 7) * 100))

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className={cn("flex items-center gap-2", className)}
        onClick={() => setShowDialog(true)}
      >
        <Lock className="h-3 w-3" />
        Unlock
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Unlock {moduleName}</DialogTitle>
            <DialogDescription>
              This module is currently locked. You can wait {timeRemaining} more days or unlock it instantly with
              EduCoins.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  Time Wall Progress
                </span>
                <span>{timeRemaining} days remaining</span>
              </div>
              <Progress value={timeProgress} className="h-2" />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or unlock instantly</span>
              </div>
            </div>

            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Coin className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="font-medium">{coinCost} EduCoins</span>
                </div>
                <Button onClick={handleUnlock} disabled={unlocking || unlockSuccess} className="gap-2">
                  {unlocking ? (
                    "Processing..."
                  ) : unlockSuccess ? (
                    <>
                      <Unlock className="h-4 w-4" />
                      Unlocked!
                    </>
                  ) : (
                    <>
                      <Unlock className="h-4 w-4" />
                      Unlock Now
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
