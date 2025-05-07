"use client"

import { useState } from "react"
import { Crown, Medal, Star, TrendingUp, Flame } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

// Sample user data
const sampleUsers = [
  { id: 1, name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40", score: 2450, streak: 42, coins: 3200 },
  { id: 2, name: "Maria Garcia", avatar: "/placeholder.svg?height=40&width=40", score: 2380, streak: 38, coins: 2950 },
  { id: 3, name: "David Chen", avatar: "/placeholder.svg?height=40&width=40", score: 2310, streak: 35, coins: 2800 },
  {
    id: 4,
    name: "Sarah Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 2240,
    streak: 30,
    coins: 2650,
  },
  { id: 5, name: "James Brown", avatar: "/placeholder.svg?height=40&width=40", score: 2180, streak: 28, coins: 2500 },
  { id: 6, name: "Emma Davis", avatar: "/placeholder.svg?height=40&width=40", score: 2120, streak: 25, coins: 2350 },
  {
    id: 7,
    name: "Michael Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    score: 2050,
    streak: 21,
    coins: 2200,
  },
]

interface FameBoardProps {
  className?: string
  currentUserId?: number
}

export function FameBoard({ className, currentUserId = 3 }: FameBoardProps) {
  const [category, setCategory] = useState("score")

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-5 w-5 text-yellow-500" />
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 2:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return <span className="flex h-5 w-5 items-center justify-center font-medium">{index + 1}</span>
    }
  }

  const getSortedUsers = () => {
    switch (category) {
      case "score":
        return [...sampleUsers].sort((a, b) => b.score - a.score)
      case "streak":
        return [...sampleUsers].sort((a, b) => b.streak - a.streak)
      case "coins":
        return [...sampleUsers].sort((a, b) => b.coins - a.coins)
      default:
        return sampleUsers
    }
  }

  const sortedUsers = getSortedUsers()

  return (
    <Card className={cn("", className)}>
      <CardHeader className="bg-primary/10 pb-2">
        <CardTitle className="flex items-center text-lg">
          <TrendingUp className="mr-2 h-5 w-5 text-primary" />
          Fame Board
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="score" onValueChange={setCategory}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="score">Performance</TabsTrigger>
            <TabsTrigger value="streak">Streaks</TabsTrigger>
            <TabsTrigger value="coins">EduCoins</TabsTrigger>
          </TabsList>

          <TabsContent value={category} className="mt-4">
            <ul className="space-y-2">
              {sortedUsers.map((user, index) => {
                const isCurrentUser = user.id === currentUserId
                return (
                  <motion.li
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "flex items-center justify-between rounded-md p-2",
                      isCurrentUser ? "bg-primary/10 font-medium" : "hover:bg-muted/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center">{getRankIcon(index)}</div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className={cn("text-sm", isCurrentUser && "font-medium")}>
                        {user.name} {isCurrentUser && "(You)"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      {category === "score" && <span>{user.score} pts</span>}
                      {category === "streak" && (
                        <span className="flex items-center">
                          <Flame className="mr-1 h-4 w-4 text-primary" />
                          {user.streak} days
                        </span>
                      )}
                      {category === "coins" && (
                        <span className="flex items-center">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          {user.coins}
                        </span>
                      )}
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
