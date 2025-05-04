"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Calendar, Target } from "lucide-react"
import { motion } from "framer-motion"

export function AiStudyPlan() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>AI Study Plan</CardTitle>
        <CardDescription>Personalized for your learning goals</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="flex items-center gap-4 rounded-md border p-3 transition-all duration-200 hover:shadow-sm"
          >
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"
              whileHover={{ rotate: 15 }}
            >
              <Brain className="h-5 w-5 text-primary" />
            </motion.div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Focus on Calculus</p>
              <p className="text-sm text-muted-foreground">Complete 2 practice tests</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="flex items-center gap-4 rounded-md border p-3 transition-all duration-200 hover:shadow-sm"
          >
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"
              whileHover={{ rotate: 15 }}
            >
              <Calendar className="h-5 w-5 text-primary" />
            </motion.div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Review Session</p>
              <p className="text-sm text-muted-foreground">Physics concepts at 4 PM</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="flex items-center gap-4 rounded-md border p-3 transition-all duration-200 hover:shadow-sm"
          >
            <motion.div
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10"
              whileHover={{ rotate: 15 }}
            >
              <Target className="h-5 w-5 text-primary" />
            </motion.div>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Complete Assignment</p>
              <p className="text-sm text-muted-foreground">Programming fundamentals</p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}
