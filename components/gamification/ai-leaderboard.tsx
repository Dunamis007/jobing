"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Gift } from "lucide-react"

interface LeaderboardEntry {
  id: number
  name: string
  avatar: string
  points: number
  streak: number
  tier: "Bronze" | "Silver" | "Gold"
  badges?: string[]
}

export function AILeaderboard() {
  const weeklyLeaderboard: LeaderboardEntry[] = [
    {
      id: 1,
      name: "Chioma Eze",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      streak: 14,
      tier: "Gold",
      badges: ["AI Explorer", "Prompt Engineer"],
    },
    {
      id: 2,
      name: "Tunde Bakare",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 980,
      streak: 10,
      tier: "Silver",
      badges: ["ML Pipeline Master"],
    },
    {
      id: 3,
      name: "Amina Ibrahim",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 875,
      streak: 7,
      tier: "Silver",
      badges: ["Neural Network Architect"],
    },
    {
      id: 4,
      name: "David Okonkwo",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 720,
      streak: 5,
      tier: "Bronze",
    },
    {
      id: 5,
      name: "Sarah Adeyemi",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 650,
      streak: 4,
      tier: "Bronze",
    },
  ]

  const monthlyLeaderboard: LeaderboardEntry[] = [
    {
      id: 6,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 4250,
      streak: 30,
      tier: "Gold",
      badges: ["AI Researcher", "LLM Expert"],
    },
    {
      id: 7,
      name: "Fatima Al-Hassan",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 3980,
      streak: 28,
      tier: "Gold",
      badges: ["Data Scientist"],
    },
    {
      id: 8,
      name: "Daniel Park",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 3875,
      streak: 25,
      tier: "Silver",
      badges: ["CV Specialist"],
    },
    {
      id: 9,
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 3720,
      streak: 22,
      tier: "Silver",
    },
    {
      id: 10,
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 3650,
      streak: 20,
      tier: "Bronze",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          AI Excellence Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="space-y-4">
            {weeklyLeaderboard.map((entry, index) => (
              <div key={entry.id} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0
                      ? "bg-yellow-500"
                      : index === 1
                        ? "bg-gray-400"
                        : index === 2
                          ? "bg-amber-700"
                          : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </div>
                <Avatar>
                  <AvatarImage src={entry.avatar || "/placeholder.svg"} alt={entry.name} />
                  <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{entry.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">{entry.points} points</p>
                    {entry.badges && entry.badges.length > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {entry.badges[0]}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Badge
                    className={`${
                      entry.tier === "Gold" ? "bg-yellow-500" : entry.tier === "Silver" ? "bg-gray-400" : "bg-amber-700"
                    } text-white`}
                  >
                    {entry.tier}
                  </Badge>
                  <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Gift className="h-3 w-3" />
                    {entry.streak}d streak
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="monthly" className="space-y-4">
            {monthlyLeaderboard.map((entry, index) => (
              <div key={entry.id} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0
                      ? "bg-yellow-500"
                      : index === 1
                        ? "bg-gray-400"
                        : index === 2
                          ? "bg-amber-700"
                          : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </div>
                <Avatar>
                  <AvatarImage src={entry.avatar || "/placeholder.svg"} alt={entry.name} />
                  <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium">{entry.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">{entry.points} points</p>
                    {entry.badges && entry.badges.length > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {entry.badges[0]}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Badge
                    className={`${
                      entry.tier === "Gold" ? "bg-yellow-500" : entry.tier === "Silver" ? "bg-gray-400" : "bg-amber-700"
                    } text-white`}
                  >
                    {entry.tier}
                  </Badge>
                  <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3" />
                    {entry.streak}d streak
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
