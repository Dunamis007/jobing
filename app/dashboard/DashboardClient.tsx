"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Bell,
  BookOpen,
  Brain,
  Calendar,
  ChevronRight,
  Clock,
  Coins,
  Flame,
  GraduationCap,
  LineChart,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Sparkles,
  Star,
  Trophy,
  User,
  Users,
  X,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function DashboardClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [useLegacyDashboard, setUseLegacyDashboard] = useState(false)

  // Mock data
  const userData = {
    name: "Chioma Okonkwo",
    level: 7,
    xp: 2340,
    xpToNextLevel: 3000,
    streak: 12,
    eduCoins: 1250,
    program: "IELTS Preparation",
    clan: "Lagos Lions",
    clanRank: 3,
    stateRank: 17,
    nationalRank: 156,
    zodiac: "Leo",
    learningStyle: "Visual",
    dopamineLevel: 78,
    achievements: [
      { name: "First Lesson", icon: BookOpen, date: "2 days ago" },
      { name: "3-Day Streak", icon: Flame, date: "9 days ago" },
      { name: "Quiz Master", icon: Brain, date: "1 week ago" },
    ],
    dailyGoals: [
      { name: "Complete Reading Practice", progress: 100 },
      { name: "Vocabulary Builder", progress: 75 },
      { name: "Speaking Exercise", progress: 0 },
    ],
    upcomingLessons: [
      { name: "IELTS Writing Task 2", time: "Today, 3:00 PM", duration: "45 min" },
      { name: "Listening Practice - Section 3", time: "Tomorrow, 10:00 AM", duration: "30 min" },
      { name: "Grammar Masterclass", time: "Wed, 2:00 PM", duration: "60 min" },
    ],
    recentActivities: [
      { action: "Completed", item: "Reading Practice Test 3", time: "2 hours ago", xp: 120, coins: 35 },
      { action: "Submitted", item: "Writing Task 1 Essay", time: "Yesterday", xp: 200, coins: 50 },
      { action: "Joined", item: "Speaking Practice Group", time: "2 days ago", xp: 80, coins: 20 },
    ],
    eduCoinHistory: [
      { action: "Earned", amount: 35, reason: "Completed Reading Practice", date: "Today" },
      { action: "Spent", amount: -100, reason: "Unlocked Premium Resource", date: "Yesterday" },
      { action: "Earned", amount: 50, reason: "Streak Bonus", date: "Yesterday" },
      { action: "Earned", amount: 20, reason: "Daily Login", date: "2 days ago" },
    ],
    knowledgeMatrix: [
      { skill: "Reading", mastery: 78 },
      { skill: "Writing", mastery: 65 },
      { skill: "Listening", mastery: 82 },
      { skill: "Speaking", mastery: 58 },
      { skill: "Grammar", mastery: 70 },
      { skill: "Vocabulary", mastery: 62 },
    ],
    studyClans: [
      { name: "Lagos Lions", members: 24, rank: 3, points: 12450 },
      { name: "Abuja Eagles", members: 18, rank: 7, points: 9870 },
      { name: "Enugu Tigers", members: 15, rank: 12, points: 7650 },
    ],
  }

  // If user selects legacy dashboard, redirect to the old dashboard
  if (useLegacyDashboard) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-white">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32&text=DT"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => setUseLegacyDashboard(false)}>
                Switch to NeuroPulse
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6">
          <div className="container">
            <h1 className="text-2xl font-bold mb-6">Legacy Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the legacy dashboard view. Switch back to NeuroPulse for the enhanced experience.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg transition-transform duration-300 lg:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=DT"
              alt="Dunamis Tutors Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-[#0e3b62]" />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0e3b62] text-[10px] font-medium text-white">
                  {userData.level}
                </div>
              </div>
              <div>
                <h3 className="font-medium">{userData.name}</h3>
                <p className="text-sm text-gray-500">{userData.program}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>
                  XP: {userData.xp}/{userData.xpToNextLevel}
                </span>
                <span>Level {userData.level}</span>
              </div>
              <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2" />
            </div>
          </div>
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-md bg-[#0e3b62]/10 px-3 py-2 text-[#0e3b62] font-medium"
            >
              <LineChart className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/courses"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <BookOpen className="h-5 w-5" />
              <span>My Courses</span>
            </Link>
            <Link
              href="/dashboard/challenges"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Trophy className="h-5 w-5" />
              <span>Challenges</span>
            </Link>
            <Link
              href="/dashboard/clans"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Users className="h-5 w-5" />
              <span>Study Clans</span>
            </Link>
            <Link
              href="/dashboard/wallet"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Coins className="h-5 w-5" />
              <span>EduCoin Wallet</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 bg-white border-r">
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32&text=DT"
              alt="Dunamis Tutors Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-[#0e3b62]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0e3b62] text-[10px] font-medium text-white">
                    {userData.level}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{userData.name}</h3>
                  <p className="text-sm text-gray-500">{userData.program}</p>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>
                    XP: {userData.xp}/{userData.xpToNextLevel}
                  </span>
                  <span>Level {userData.level}</span>
                </div>
                <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2" />
              </div>
            </div>
            <nav className="space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-md bg-[#0e3b62]/10 px-3 py-2 text-[#0e3b62] font-medium"
              >
                <LineChart className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/courses"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                <BookOpen className="h-5 w-5" />
                <span>My Courses</span>
              </Link>
              <Link
                href="/dashboard/challenges"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Trophy className="h-5 w-5" />
                <span>Challenges</span>
              </Link>
              <Link
                href="/dashboard/clans"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Users className="h-5 w-5" />
                <span>Study Clans</span>
              </Link>
              <Link
                href="/dashboard/wallet"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Coins className="h-5 w-5" />
                <span>EduCoin Wallet</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-72 flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b bg-white">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-xl font-bold text-[#0e3b62]">NeuroPulse Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch id="legacy-toggle" checked={useLegacyDashboard} onCheckedChange={setUseLegacyDashboard} />
                <Label htmlFor="legacy-toggle" className="text-sm">
                  Legacy Dashboard
                </Label>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                        3
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You have 3 notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Messages</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Level Hologram */}
            <Card className="bg-gradient-to-br from-[#0e3b62] to-[#1a5c96] text-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white/70">Level Hologram</p>
                    <div className="flex items-baseline gap-1">
                      <h3 className="text-3xl font-bold">{userData.level}</h3>
                      <span className="text-sm text-white/70">/ 50</span>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress to Level {userData.level + 1}</span>
                    <span>{Math.round((userData.xp / userData.xpToNextLevel) * 100)}%</span>
                  </div>
                  <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-1.5 bg-white/20" />
                </div>
              </CardContent>
            </Card>

            {/* EduCoin Wallet */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">EduCoin Wallet</p>
                    <div className="flex items-baseline gap-1">
                      <h3 className="text-3xl font-bold text-[#0e3b62]">{userData.eduCoins}</h3>
                      <span className="text-sm text-gray-500">coins</span>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <Coins className="h-6 w-6 text-[#0e3b62]" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/wallet" className="text-sm text-[#0e3b62] font-medium flex items-center">
                    View Wallet
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Learning Streak</p>
                    <div className="flex items-baseline gap-1">
                      <h3 className="text-3xl font-bold text-[#0e3b62]">{userData.streak}</h3>
                      <span className="text-sm text-gray-500">days</span>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <Flame className="h-6 w-6 text-[#0e3b62]" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Next streak bonus: <span className="font-medium text-[#0e3b62]">+50 coins</span> in 2 days
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dopamine Meter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Dopamine Meter</p>
                    <div className="flex items-baseline gap-1">
                      <h3 className="text-3xl font-bold text-[#0e3b62]">{userData.dopamineLevel}%</h3>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-[#0e3b62]" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Progress value={userData.dopamineLevel} className="h-1.5" />
                  <p className="text-xs text-gray-500">Your learning motivation is high today!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personalized Info Row */}
          <div className="mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <Star className="h-5 w-5 text-[#0e3b62]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Zodiac Sign</p>
                      <p className="font-medium">{userData.zodiac}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-[#0e3b62]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Learning Style</p>
                      <p className="font-medium">{userData.learningStyle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#0e3b62]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Study Clan</p>
                      <p className="font-medium">{userData.clan}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-[#0e3b62]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">State Rank</p>
                      <p className="font-medium">#{userData.stateRank}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Daily Dose Learning */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-[#0e3b62]" />
                      Daily Dose Learning
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="text-[#0e3b62]">
                      View All
                    </Button>
                  </div>
                  <CardDescription>Personalized learning content for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.dailyGoals.map((goal, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{goal.name}</p>
                          <p className="text-sm text-gray-500">Complete this today to earn XP</p>
                        </div>
                        <div className="w-24">
                          <Progress value={goal.progress} className="h-2 mb-1" />
                          <p className="text-xs text-right">{goal.progress}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Lessons */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#0e3b62]" />
                      Upcoming Lessons
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="text-[#0e3b62]">
                      View Calendar
                    </Button>
                  </div>
                  <CardDescription>Your scheduled lessons for the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.upcomingLessons.map((lesson, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{lesson.name}</p>
                          <p className="text-sm text-gray-500">
                            {lesson.time} ({lesson.duration})
                          </p>
                        </div>
                        <Clock className="h-5 w-5 text-gray-500" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#0e3b62]" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription>Your latest learning activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            {activity.action} <span className="text-[#0e3b62]">{activity.item}</span>
                          </p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                        <div className="text-sm text-gray-500">
                          + {activity.xp} XP, + {activity.coins} coins
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Study Clans Leaderboard */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#0e3b62]" />
                    Study Clans Leaderboard
                  </CardTitle>
                  <CardDescription>Top clans in your network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.studyClans.map((clan, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{clan.name}</p>
                          <p className="text-sm text-gray-500">{clan.members} members</p>
                        </div>
                        <div className="text-sm text-gray-500">Rank: {clan.rank}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
