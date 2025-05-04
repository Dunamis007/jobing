"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Brain, Clock, Share2, Trophy, Users } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function SocialChallengesPage() {
  const [activeTab, setActiveTab] = useState("leaderboard")

  const leaderboardData = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      rank: 1,
      subjects: ["Mathematics", "Physics"],
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1120,
      rank: 2,
      subjects: ["Chemistry", "Biology"],
    },
    {
      id: 3,
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 980,
      rank: 3,
      subjects: ["Programming", "Mathematics"],
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 850,
      rank: 4,
      subjects: ["Digital Marketing", "Business"],
    },
    {
      id: 5,
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 780,
      rank: 5,
      subjects: ["Physics", "Chemistry"],
    },
  ]

  const activeChallenges = [
    {
      id: 1,
      title: "Mathematics Marathon",
      description: "Complete 50 calculus problems in 7 days",
      participants: 128,
      deadline: "3 days left",
      progress: 65,
      category: "Mathematics",
      difficulty: "Advanced",
    },
    {
      id: 2,
      title: "Coding Challenge",
      description: "Build a functional web application in 14 days",
      participants: 87,
      deadline: "10 days left",
      progress: 40,
      category: "Programming",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Science Quiz Bowl",
      description: "Answer 100 science questions with at least 80% accuracy",
      participants: 156,
      deadline: "5 days left",
      progress: 75,
      category: "Science",
      difficulty: "Intermediate",
    },
  ]

  const completedChallenges = [
    {
      id: 1,
      title: "Physics Problem Set",
      description: "Complete 30 physics problems in 5 days",
      participants: 95,
      score: 92,
      category: "Physics",
      difficulty: "Advanced",
      reward: "Physics Master Badge",
    },
    {
      id: 2,
      title: "Essay Writing Sprint",
      description: "Write 5 essays on different topics in 7 days",
      participants: 112,
      score: 88,
      category: "English",
      difficulty: "Intermediate",
      reward: "Writer's Excellence Badge",
    },
  ]

  const joinChallenge = (challengeId: number) => {
    toast({
      title: "Challenge Joined",
      description: "You have successfully joined this challenge!",
    })
  }

  const shareProgress = (challengeId: number) => {
    toast({
      title: "Progress Shared",
      description: "Your progress has been shared with your peers!",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Social Challenges</h1>
        <p className="text-muted-foreground">Compete with peers, earn rewards, and track your progress</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#7</div>
            <p className="text-xs text-muted-foreground">Top 5% of all students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points Earned</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">720</div>
            <p className="text-xs text-muted-foreground">+150 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Challenges</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 due this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 new this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="active">Active Challenges</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
        </TabsList>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global Leaderboard</CardTitle>
              <CardDescription>Top performers across all subjects and challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {leaderboardData.map((user, index) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold">
                        {user.rank}
                      </div>
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <div className="flex gap-1 mt-1">
                          {user.subjects.map((subject) => (
                            <Badge key={subject} variant="outline" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{user.points.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full Leaderboard
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {activeChallenges.map((challenge) => (
              <Card key={challenge.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{challenge.title}</CardTitle>
                    <Badge>{challenge.category}</Badge>
                  </div>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{challenge.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{challenge.deadline}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Your Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button variant="outline" className="w-1/2" onClick={() => shareProgress(challenge.id)}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button className="w-1/2">Continue</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {completedChallenges.map((challenge) => (
              <Card key={challenge.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{challenge.title}</CardTitle>
                    <Badge variant="outline">{challenge.category}</Badge>
                  </div>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{challenge.participants} participants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="font-medium">Score: {challenge.score}%</span>
                    </div>
                  </div>
                  <div className="rounded-md border p-3 bg-primary/5 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Reward: {challenge.reward}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2">
                  <Button variant="outline" className="w-1/2" onClick={() => shareProgress(challenge.id)}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="secondary" className="w-1/2">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discover" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Discover New Challenges</CardTitle>
              <CardDescription>Find and join challenges that match your interests and skill level</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">JUPEB Physics Challenge</CardTitle>
                      <Badge>Physics</Badge>
                    </div>
                    <CardDescription>Solve 40 JUPEB-level physics problems</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>76 participants</span>
                      </div>
                      <Badge variant="outline">Intermediate</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => joinChallenge(1)}>
                      Join Challenge
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Digital Marketing Sprint</CardTitle>
                      <Badge>Marketing</Badge>
                    </div>
                    <CardDescription>Create a marketing campaign in 10 days</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>42 participants</span>
                      </div>
                      <Badge variant="outline">Beginner</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => joinChallenge(2)}>
                      Join Challenge
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Browse All Challenges
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
