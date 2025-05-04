"use client"

import { Brain, Calendar, Target } from "lucide-react"

export function StudyPlanList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
          <Brain className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Focus on Calculus</p>
          <p className="text-sm text-muted-foreground">Complete 2 practice tests</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Review Session</p>
          <p className="text-sm text-muted-foreground">Physics concepts at 4 PM</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
          <Target className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">Complete Assignment</p>
          <p className="text-sm text-muted-foreground">Programming fundamentals</p>
        </div>
      </div>
    </div>
  )
}
