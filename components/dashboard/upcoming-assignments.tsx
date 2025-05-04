"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"

const assignments = [
  {
    id: 1,
    title: "Mathematics Assignment",
    dueDate: "2023-05-15",
    dueTime: "11:59 PM",
    subject: "Mathematics",
    status: "pending",
  },
  {
    id: 2,
    title: "Physics Lab Report",
    dueDate: "2023-05-17",
    dueTime: "11:59 PM",
    subject: "Physics",
    status: "pending",
  },
  {
    id: 3,
    title: "Programming Project",
    dueDate: "2023-05-20",
    dueTime: "11:59 PM",
    subject: "Computer Science",
    status: "pending",
  },
]

export function UpcomingAssignments() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
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
        <CardTitle>Upcoming Assignments</CardTitle>
        <CardDescription>You have {assignments.length} assignments due this week</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="space-y-4" variants={container} initial="hidden" animate="show">
          {assignments.map((assignment) => (
            <motion.div
              key={assignment.id}
              variants={item}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-md border p-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{assignment.title}</h3>
                  <Badge variant={assignment.status === "completed" ? "outline" : "secondary"}>
                    {assignment.status === "completed" ? "Completed" : "Pending"}
                  </Badge>
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{assignment.dueTime}</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Start Assignment
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}
