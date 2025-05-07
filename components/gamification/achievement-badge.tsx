"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface AchievementBadgeProps {
  title: string
  description: string
  icon?: React.ReactNode
  level?: "bronze" | "silver" | "gold" | "platinum"
  isNew?: boolean
  className?: string
}

export function AchievementBadge({
  title,
  description,
  icon = <Award />,
  level = "bronze",
  isNew = false,
  className,
}: AchievementBadgeProps) {
  const [showAnimation, setShowAnimation] = useState(isNew)

  useEffect(() => {
    if (isNew) {
      const timer = setTimeout(() => setShowAnimation(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [isNew])

  const levelColors = {
    bronze: "bg-amber-700/20 border-amber-700/50 text-amber-700",
    silver: "bg-slate-300/20 border-slate-400/50 text-slate-500",
    gold: "bg-yellow-400/20 border-yellow-500/50 text-yellow-600",
    platinum: "bg-cyan-400/20 border-cyan-500/50 text-cyan-600",
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={cn(
                "flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 p-2",
                levelColors[level],
                className,
              )}
            >
              <div className="h-8 w-8">{icon}</div>
              <span className="mt-1 text-[10px] font-medium">{title}</span>
            </motion.div>

            <AnimatePresence>
              {showAnimation && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 1 }}
                  exit={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.5, repeat: 3, repeatType: "reverse" }}
                  className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white"
                >
                  <Check className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>

            {isNew && (
              <Badge variant="secondary" className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px]">
                NEW!
              </Badge>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className="text-center">
            <p className="font-medium">{title}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
            <p className="mt-1 text-xs font-medium capitalize">{level} Level</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
