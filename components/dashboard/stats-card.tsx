"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
  progress?: number
  highlight?: boolean
}

export function StatsCard({ title, value, description, icon, progress, highlight }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
        highlight && "ring-2 ring-primary/50",
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {highlight && <div className="absolute -right-12 -top-12 h-24 w-24 rotate-45 bg-primary/10" />}

      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {icon && (
              <motion.div whileHover={{ rotate: 15 }} className="rounded-full bg-primary/10 p-1">
                {icon}
              </motion.div>
            )}
          </div>
          <div className="space-y-1">
            <motion.p
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {value}
            </motion.p>
            {progress !== undefined && (
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.3, duration: 0.5 }}>
                <Progress value={progress} className="h-1.5" />
              </motion.div>
            )}
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
