"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Brain,
  Flame,
  Trophy,
  Zap,
  Coins,
  Users,
  Bell,
  Settings,
  LogOut,
  Calendar,
  Heart,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NeuroPulseDashboard() {
  const [useLegacyDashboard, setUseLegacyDashboard] = useState(false)

  // Mock user data
  const userData = {
    name: "Chioma Okonkwo",
    level: 7,
    xp: 2340,
    xpToNextLevel: 3000,
    streak: 12,
    eduCoins: 1250,
    program: "IJMB Program",
    clan: "Lagos Lions",
    clanRank: 3,
    stateRank: 17,
    nationalRank: 156,
    zodiacSign: "Leo",
    learningStyle: "Visual",
    dopamineLevel: 78,
    achievements: [
      { name: "First Lesson", icon: BookOpen, date: "2 days ago" },
      { name: "3-Day Streak", icon: Flame, date: "9 days ago" },
      { name: "Quiz Master", icon: Brain, date: "1 week ago" },
    ],
    dailyGoals: [
      { name: "Complete Physics Practice", progress: 100 },
      { name: "Mathematics Exercise", progress: 75 },
      { name: "Chemistry Review", progress: 0 },
    ],
    upcomingLessons: [
      { name: "Physics: Mechanics", time: "Today, 3:00 PM", duration: "45 min" },
      { name: "Mathematics: Calculus", time: "Tomorrow, 10:00 AM", duration: "30 min" },
      { name: "Chemistry: Organic Chemistry", time: "Wed, 2:00 PM", duration: "60 min" },
    ],
    recentActivities: [
      { action: "Completed", item: "Physics Quiz 3", time: "2 hours ago", xp: 120, coins: 35 },
      { action: "Submitted", item: "Mathematics Assignment", time: "Yesterday", xp: 200, coins: 50 },
      { action: "Watched", item: "Chemistry Video Lecture", time: "2 days ago", xp: 75, coins: 20 },
    ],
    studyClan: {
      name: "Lagos Lions",
      members: 24,
      weeklyPoints: 1250,
      rank: 3,
      challenges: [
        { name: "Group Study Session", status: "Completed", reward: 200 },
        { name: "Weekly Quiz Challenge", status: "In Progress", reward: 300 },
        { name: "Resource Sharing", status: "Not Started", reward: 150 },
      ],
    },
  }

  if (useLegacyDashboard) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-white">
          <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold">Dunamis Tutors</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => setUseLegacyDashboard(false)}>
                Switch to NeuroPulse
              </Button>
              <Link href="/logout">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-6">Welcome back, {userData.name}</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Physics</span>
                        <span className="text-sm text-gray-500">75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Mathematics</span>
                        <span className="text-sm text-gray-500">60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Chemistry</span>
                        <span className="text-sm text-gray-500">45%</span>
                      </div>
                      <Progress value={45} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.upcomingLessons.map((lesson, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{lesson.name}</h4>
                          <p className="text-sm text-gray-500">
                            {lesson.time} • {lesson.duration}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.recentActivities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="rounded-full bg-blue-100 p-2 text-blue-700">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            {activity.action} {activity.item}
                          </h4>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Brain className="h-6 w-6 text-blue-700" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">
                N
              </span>
            </div>
            <span className="text-xl font-bold">NeuroPulse</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium">{userData.name}</span>
                  <span className="text-xs text-gray-500">{userData.program}</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-700">{userData.name.charAt(0)}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Switch id="dashboard-toggle" checked={useLegacyDashboard} onCheckedChange={setUseLegacyDashboard} />
                <Label htmlFor="dashboard-toggle" className="ml-2 text-xs">
                  Legacy Dashboard
                </Label>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-700 font-medium">Level</p>
                  <h3 className="text-2xl font-bold">{userData.level}</h3>
                  <div className="mt-1">
                    <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-1" />
                    <p className="text-xs mt-1 text-gray-600">
                      {userData.xp}/{userData.xpToNextLevel} XP to Level {userData.level + 1}
                    </p>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-700/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-blue-700" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-700 font-medium">Streak</p>
                  <h3 className="text-2xl font-bold">{userData.streak} days</h3>
                  <p className="text-xs mt-1 text-gray-600">Keep it going!</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-amber-700/10 flex items-center justify-center">
                  <Flame className="h-6 w-6 text-amber-700" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-green-700 font-medium">EduCoins</p>
                  <h3 className="text-2xl font-bold">{userData.eduCoins}</h3>
                  <p className="text-xs mt-1 text-gray-600">+105 this week</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-700/10 flex items-center justify-center">
                  <Coins className="h-6 w-6 text-green-700" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-purple-700 font-medium">Dopamine</p>
                  <h3 className="text-2xl font-bold">{userData.dopamineLevel}%</h3>
                  <p className="text-xs mt-1 text-gray-600">Learning motivation</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-700/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-700" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Your NeuroPulse Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-700">{userData.name.charAt(0)}</span>
                      </div>
                      <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold">
                        {userData.level}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg">{userData.name}</h3>
                    <p className="text-sm text-gray-500">{userData.program}</p>

                    <div className="grid grid-cols-2 gap-4 w-full mt-4">
                      <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <span className="text-xs text-gray-500">Learning Style</span>
                        <span className="font-medium">{userData.learningStyle}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <span className="text-xs text-gray-500">Zodiac Sign</span>
                        <span className="font-medium">{userData.zodiacSign}</span>
                      </div>
                    </div>

                    <div className="w-full mt-4 pt-4 border-t">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Dunamis Academy ID</span>
                        <span className="font-medium">DA-{Math.floor(10000 + Math.random() * 90000)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Member Since</span>
                        <span className="font-medium">May 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* EduCoin Wallet */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>EduCoin Wallet</CardTitle>
                  <CardDescription>Your learning currency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-4 text-white mb-4">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-xs opacity-80">Balance</p>
                        <h3 className="text-2xl font-bold">{userData.eduCoins} EC</h3>
                      </div>
                      <Coins className="h-8 w-8" />
                    </div>
                    <div className="text-xs">
                      <div className="flex justify-between mb-1">
                        <span>Daily Decay Rate:</span>
                        <span>-5 EC/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Streak Bonus:</span>
                        <span>+50 EC (in 2 days)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Recent Transactions</h4>
                    {userData.recentActivities.map((activity, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                            <Coins className="h-3 w-3 text-green-700" />
                          </div>
                          <span>
                            {activity.action} {activity.item}
                          </span>
                        </div>
                        <span className="font-medium text-green-600">+{activity.coins} EC</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View EduCoin Store
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              {/* Knowledge Matrix */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Knowledge Matrix</CardTitle>
                  <CardDescription>Your learning landscape</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { subject: "Physics", strength: 85, color: "bg-blue-500" },
                      { subject: "Chemistry", strength: 65, color: "bg-purple-500" },
                      { subject: "Biology", strength: 40, color: "bg-green-500" },
                      { subject: "Mathematics", strength: 75, color: "bg-amber-500" },
                      { subject: "English", strength: 90, color: "bg-red-500" },
                      { subject: "Economics", strength: 50, color: "bg-indigo-500" },
                      { subject: "Geography", strength: 30, color: "bg-cyan-500" },
                      { subject: "History", strength: 45, color: "bg-pink-500" },
                      { subject: "Literature", strength: 60, color: "bg-emerald-500" },
                    ].map((item, i) => (
                      <div key={i} className="relative aspect-square rounded-md overflow-hidden">
                        <div
                          className={`absolute inset-0 ${item.color} opacity-${Math.floor(item.strength / 10)}`}
                          style={{ opacity: item.strength / 100 }}
                        ></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-1">
                          <span className="text-xs font-medium">{item.subject}</span>
                          <span className="text-xs">{item.strength}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Detailed Analysis
                  </Button>
                </CardFooter>
              </Card>

              {/* Daily Dose */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Daily Dose Learning</CardTitle>
                  <CardDescription>Personalized for your brain</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Brain className="h-4 w-4 text-blue-700" />
                        </div>
                        <div>
                          <h4 className="font-medium">Physics: Newton's Laws</h4>
                          <p className="text-xs text-gray-500">15 min • High priority</p>
                        </div>
                      </div>
                      <Progress value={0} className="h-1" />
                    </div>

                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-purple-700" />
                        </div>
                        <div>
                          <h4 className="font-medium">Mathematics: Calculus</h4>
                          <p className="text-xs text-gray-500">20 min • Medium priority</p>
                        </div>
                      </div>
                      <Progress value={0} className="h-1" />
                    </div>

                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Zap className="h-4 w-4 text-green-700" />
                        </div>
                        <div>
                          <h4 className="font-medium">Chemistry: Periodic Table</h4>
                          <p className="text-xs text-gray-500">10 min • Low priority</p>
                        </div>
                      </div>
                      <Progress value={0} className="h-1" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">Start Learning Session</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Study Clan */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Study Clan: {userData.studyClan.name}</CardTitle>
                  <CardDescription>Collaborative learning community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{userData.studyClan.members} Members</p>
                        <p className="text-xs text-gray-500">Active community</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-center">{userData.studyClan.rank}</div>
                      <p className="text-xs text-gray-500">State Rank</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-medium">Clan Challenges</h4>
                    {userData.studyClan.challenges.map((challenge, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              challenge.status === "Completed"
                                ? "bg-green-500"
                                : challenge.status === "In Progress"
                                  ? "bg-amber-500"
                                  : "bg-gray-300"
                            }`}
                          ></div>
                          <span>{challenge.name}</span>
                        </div>
                        <span className="font-medium">{challenge.reward} pts</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-amber-50 p-3 border border-amber-200">
                    <h4 className="text-sm font-medium flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-amber-700" />
                      State vs. State Rankings
                    </h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>1. Lagos State</span>
                        <span className="font-medium">12,450 pts</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>2. Abuja FCT</span>
                        <span className="font-medium">11,280 pts</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-medium text-amber-700">
                        <span>3. Rivers State</span>
                        <span>10,950 pts</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Clan Dashboard
                  </Button>
                </CardFooter>
              </Card>

              {/* Level Hologram */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Level Hologram</CardTitle>
                  <CardDescription>Your learning journey visualization</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="relative h-40 w-40 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
                    <div
                      className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-40 animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {userData.level}
                        </div>
                        <div className="text-xs text-gray-500">SCHOLAR</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current Level:</span>
                      <span className="font-medium">Scholar (Level {userData.level})</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Next Level:</span>
                      <span className="font-medium">Advanced Scholar (Level {userData.level + 1})</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>XP to Next Level:</span>
                      <span className="font-medium">{userData.xpToNextLevel - userData.xp} XP</span>
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2" />
                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                      <span>{userData.xp} XP</span>
                      <span>{userData.xpToNextLevel} XP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white py-6">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
