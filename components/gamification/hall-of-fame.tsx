"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Trophy, Star, Calendar } from "lucide-react"

interface HallOfFameEntry {
  week: string
  winner: {
    name: string
    avatar: string
    project: string
    score: number
  }
}

export function HallOfFame() {
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly" | "allTime">("weekly")

  const hallOfFame: HallOfFameEntry[] = [
    {
      week: "Last Week",
      winner: {
        name: "Oluwaseun Adeyemi",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "E-commerce Platform with React & Node",
        score: 98,
      },
    },
    {
      week: "Two Weeks Ago",
      winner: {
        name: "Tunde Olaoluwa",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Real-time Chat Application",
        score: 95,
      },
    },
    {
      week: "Three Weeks Ago",
      winner: {
        name: "Amina Ibrahim",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Task Management Dashboard",
        score: 94,
      },
    },
  ]

  const monthlyWinners = [
    {
      month: "May 2024",
      winner: {
        name: "David Okonkwo",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "AI-Powered Learning Platform",
        score: 99,
      },
    },
    {
      month: "April 2024",
      winner: {
        name: "Sarah Adeyemi",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Blockchain Wallet Application",
        score: 97,
      },
    },
  ]

  const allTimeWinners = [
    {
      season: "Spring 2024",
      winner: {
        name: "Oluwaseun Adeyemi",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "E-commerce Platform with React & Node",
        score: 98,
        badges: ["Full-Stack Master", "UI/UX Expert"],
      },
    },
    {
      season: "Winter 2023",
      winner: {
        name: "Amina Ibrahim",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Healthcare Management System",
        score: 99,
        badges: ["Backend Specialist", "Database Expert"],
      },
    },
  ]

  return (
    <Card className="border-2 border-yellow-200">
      <CardHeader className="bg-yellow-50">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Hall of Fame
          </CardTitle>
          <div className="flex gap-1">
            <Button
              size="sm"
              variant={timeframe === "weekly" ? "default" : "outline"}
              onClick={() => setTimeframe("weekly")}
              className={timeframe === "weekly" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
            >
              Weekly
            </Button>
            <Button
              size="sm"
              variant={timeframe === "monthly" ? "default" : "outline"}
              onClick={() => setTimeframe("monthly")}
              className={timeframe === "monthly" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
            >
              Monthly
            </Button>
            <Button
              size="sm"
              variant={timeframe === "allTime" ? "default" : "outline"}
              onClick={() => setTimeframe("allTime")}
              className={timeframe === "allTime" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
            >
              All Time
            </Button>
          </div>
        </div>
        <CardDescription>Celebrating our top project performers</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {timeframe === "weekly" && (
          <div className="space-y-6">
            {hallOfFame.map((entry, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {entry.week}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
                      <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1">
                        <Trophy className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold">{entry.winner.name}</h4>
                    <p className="text-sm text-gray-600">{entry.winner.project}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge className="bg-yellow-500 text-white text-xs">Score: {entry.winner.score}/100</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {timeframe === "monthly" && (
          <div className="space-y-6">
            {monthlyWinners.map((entry, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {entry.month}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
                      <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1">
                        <Trophy className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold">{entry.winner.name}</h4>
                    <p className="text-sm text-gray-600">{entry.winner.project}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge className="bg-yellow-500 text-white text-xs">Score: {entry.winner.score}/100</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {timeframe === "allTime" && (
          <div className="space-y-6">
            {allTimeWinners.map((entry, index) => (
              <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  {entry.season}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
                      <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-white rounded-full p-1">
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{entry.winner.name}</h4>
                    <p className="text-sm text-gray-600">{entry.winner.project}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge className="bg-yellow-500 text-white text-xs">Score: {entry.winner.score}/100</Badge>
                      {entry.winner.badges?.map((badge, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
