"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

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

export function UpcomingAssignmentsList() {
  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div key={assignment.id} className="flex flex-col space-y-2 rounded-md border p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{assignment.title}</h3>
            <Badge variant={assignment.status === "completed" ? "outline" : "secondary"}>
              {assignment.status === "completed" ? "Completed" : "Pending"}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{assignment.dueDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{assignment.dueTime}</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" size="sm">
              Start Assignment
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
