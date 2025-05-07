import type { Metadata } from "next"
import { Award, BookOpen, Calendar, Clock, Flame, Star, Trophy, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StreakCounter } from "@/components/gamification/streak-counter"
import { FameBoard } from "@/components/gamification/fame-board"
import { AchievementBadge } from "@/components/gamification/achievement-badge"
import GamificationClient from "./client"

export const metadata: Metadata = {
  title: "Achievements & Progress | Dunamis Tutors",
  description: "Track your learning progress and achievements",
}

export default function GamificationDashboard() {
  return (
    <div className="container py-6">
      <GamificationClient />

      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Learning Journey</h1>
        <p className="text-muted-foreground">Track your progress, achievements, and compare with other learners</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Learning Progress</CardTitle>
              <CardDescription>Your current learning statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <BookOpen className="mr-2 h-5 w-5 text-primary" />
                      Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">3</span>
                      <span className="text-sm text-muted-foreground">of 5 enrolled</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">2 courses in progress</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">42</span>
                      <span className="text-sm text-muted-foreground">this month</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">+15% from last month</p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Star className="mr-2 h-5 w-5 text-yellow-500" />
                      EduCoins
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold">2,450</span>
                      <span className="text-sm text-muted-foreground">balance</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">+350 earned this week</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="mb-4 font-medium">Your Achievements</h3>
                <div className="flex flex-wrap gap-4">
                  <AchievementBadge
                    title="Fast Learner"
                    description="Complete 5 lessons in a single day"
                    icon={<Clock className="h-full w-full" />}
                    level="gold"
                    isNew={true}
                  />
                  <AchievementBadge
                    title="Streak Master"
                    description="Maintain a 30-day learning streak"
                    icon={<Flame className="h-full w-full" />}
                    level="silver"
                  />
                  <AchievementBadge
                    title="Quiz Whiz"
                    description="Score 100% on 10 quizzes"
                    icon={<Award className="h-full w-full" />}
                    level="bronze"
                  />
                  <AchievementBadge
                    title="Social Learner"
                    description="Participate in 5 group study sessions"
                    icon={<Users className="h-full w-full" />}
                    level="bronze"
                  />
                  <AchievementBadge
                    title="Early Bird"
                    description="Complete 10 lessons before 8 AM"
                    icon={<Calendar className="h-full w-full" />}
                    level="bronze"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Achievements
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <StreakCounter currentStreak={28} longestStreak={35} />
          <FameBoard />
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Trophy className="mr-2 h-5 w-5 text-primary" />
              Recommended Challenges
            </CardTitle>
            <CardDescription>Complete these challenges to earn more rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Daily Quiz Champion</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">Score 90% or higher on today's challenge quiz</p>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Reward: 100 EduCoins</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button size="sm" className="w-full">
                    Start Challenge
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Study Marathon</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">Complete 3 lessons in a single session</p>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Reward: 150 EduCoins</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button size="sm" className="w-full">
                    Accept Challenge
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Perfect Week</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">Study every day this week (5/7 days completed)</p>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Reward: 300 EduCoins + Badge</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button size="sm" className="w-full">
                    View Progress
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client-side notification system */}
      <div id="notification-container" />
    </div>
  )
}
