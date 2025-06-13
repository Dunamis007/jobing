"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, ExternalLink } from "lucide-react"

interface HallOfFameEntry {
  week: string
  winner: {
    name: string
    avatar: string
    project: string
    score: number
    projectUrl?: string
  }
}

export function AIHallOfFame() {
  const hallOfFame: HallOfFameEntry[] = [
    {
      week: "Last Week",
      winner: {
        name: "Chioma Okafor",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "AI-Powered Chatbot Assistant",
        score: 98,
        projectUrl: "#",
      },
    },
    {
      week: "Two Weeks Ago",
      winner: {
        name: "David Adeyemi",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Neural Network Visualizer",
        score: 96,
        projectUrl: "#",
      },
    },
    {
      week: "Three Weeks Ago",
      winner: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Sentiment Analysis Tool",
        score: 95,
        projectUrl: "#",
      },
    },
  ]

  const [activeEntry, setActiveEntry] = useState(0)

  return (
    <Card className="border-2 border-blue-200">
      <CardHeader className="bg-blue-50">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-blue-500" />
          AI Hall of Fame
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-center gap-2 mb-4">
          {hallOfFame.map((_, index) => (
            <Button
              key={index}
              variant={activeEntry === index ? "default" : "outline"}
              size="sm"
              className={activeEntry === index ? "bg-blue-500 hover:bg-blue-600" : ""}
              onClick={() => setActiveEntry(index)}
            >
              Week {hallOfFame.length - index}
            </Button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2 flex items-center justify-center gap-1">
            <Calendar className="h-4 w-4" />
            {hallOfFame[activeEntry].week}
          </p>
          <div className="relative inline-block">
            <Avatar className="h-20 w-20 mx-auto mb-3">
              <AvatarImage
                src={hallOfFame[activeEntry].winner.avatar || "/placeholder.svg"}
                alt={hallOfFame[activeEntry].winner.name}
              />
              <AvatarFallback>{hallOfFame[activeEntry].winner.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
              <Trophy className="h-4 w-4" />
            </div>
          </div>
          <h4 className="font-bold text-lg">{hallOfFame[activeEntry].winner.name}</h4>
          <p className="text-gray-600 mb-2">{hallOfFame[activeEntry].winner.project}</p>
          <Badge className="bg-blue-500 text-white mb-4">Score: {hallOfFame[activeEntry].winner.score}/100</Badge>

          {hallOfFame[activeEntry].winner.projectUrl && (
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Project
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
