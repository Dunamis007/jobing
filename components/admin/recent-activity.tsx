"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AdminRecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JD",
      },
      action: "enrolled in",
      target: "Advanced Mathematics",
      time: "10 minutes ago",
      type: "enrollment",
    },
    {
      id: 2,
      user: {
        name: "Sarah Smith",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SS",
      },
      action: "completed",
      target: "Introduction to Physics",
      time: "25 minutes ago",
      type: "completion",
    },
    {
      id: 3,
      user: {
        name: "Michael Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MJ",
      },
      action: "upgraded to",
      target: "Premium Plan",
      time: "1 hour ago",
      type: "subscription",
    },
    {
      id: 4,
      user: {
        name: "Emily Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "EB",
      },
      action: "created",
      target: "new account",
      time: "2 hours ago",
      type: "registration",
    },
    {
      id: 5,
      user: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DW",
      },
      action: "submitted",
      target: "assignment",
      time: "3 hours ago",
      type: "submission",
    },
  ]

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "enrollment":
        return "default"
      case "completion":
        return "success"
      case "subscription":
        return "premium"
      case "registration":
        return "outline"
      case "submission":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{activity.time}</span>
              <Badge variant={getBadgeVariant(activity.type) as any} className="text-xs">
                {activity.type}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
