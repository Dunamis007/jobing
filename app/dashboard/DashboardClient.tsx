"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Calendar, ChevronRight, Clock, Coins, LineChart, PlaneTakeoff, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export function DashboardClient() {
  const [showLegacyDashboard, setShowLegacyDashboard] = useState(false)

  // Mock data
  const userData = {
    name: "Chioma Okonkwo",
    level: 7,
    xp: 2340,
    xpToNextLevel: 3000,
    program: "IJMB Program",
    eduCoins: 2450,
    streak: 12,
    completedCourses: 3,
    activeCourses: 2,
  }

  const upcomingClasses = [
    {
      id: "class1",
      title: "IJMB Mathematics",
      date: "Today",
      time: "3:00 PM - 4:30 PM",
      tutor: "Dr. Adebayo",
    },
    {
      id: "class2",
      title: "IJMB Physics",
      date: "Tomorrow",
      time: "10:00 AM - 11:30 AM",
      tutor: "Prof. Okafor",
    },
    {
      id: "class3",
      title: "Study Abroad Preparation",
      date: "Wed, May 8",
      time: "2:00 PM - 3:00 PM",
      tutor: "Mrs. Nwosu",
    },
  ]

  const challenges = [
    {
      id: "challenge1",
      title: "Complete 5 IJMB Practice Tests",
      progress: 60,
      reward: 200,
      deadline: "3 days left",
    },
    {
      id: "challenge2",
      title: "Maintain a 7-day Study Streak",
      progress: 85,
      reward: 150,
      deadline: "2 days left",
    },
    {
      id: "challenge3",
      title: "Join a Study Clan Discussion",
      progress: 0,
      reward: 100,
      deadline: "5 days left",
    },
  ]

  const studyClans = [
    {
      id: "clan1",
      name: "IJMB Science Warriors",
      members: 24,
      activity: "High",
    },
    {
      id: "clan2",
      name: "Study Abroad Aspirants",
      members: 36,
      activity: "Very High",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1 lg:ml-72">
        <div className="container py-6">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#0e3b62]">Welcome back, {userData.name}!</h1>
              <p className="text-gray-500">Here's your learning progress and upcoming activities</p>
            </div>
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <span className="text-sm text-gray-500">Legacy Dashboard</span>
              <button
                onClick={() => setShowLegacyDashboard(!showLegacyDashboard)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showLegacyDashboard ? "bg-[#0e3b62]" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    showLegacyDashboard ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm text-gray-500">NeuroPulse Dashboard</span>
            </div>
          </div>

          {showLegacyDashboard ? (
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Your Courses</CardTitle>
                  <CardDescription>Track your progress across all courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">IJMB Mathematics</p>
                        <p className="text-sm text-gray-500">12 modules completed</p>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">IJMB Physics</p>
                        <p className="text-sm text-gray-500">8 modules completed</p>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Study Abroad Preparation</p>
                        <p className="text-sm text-gray-500">3 modules completed</p>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Courses
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Upcoming Classes</CardTitle>
                    <CardDescription>Your scheduled classes for the week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingClasses.map((cls) => (
                        <div key={cls.id} className="flex items-start gap-4">
                          <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                            <Calendar className="h-4 w-4 text-[#0e3b62]" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{cls.title}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{cls.date}</span>
                              <span>•</span>
                              <span>{cls.time}</span>
                            </div>
                            <p className="text-sm text-gray-500">Tutor: {cls.tutor}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            Join
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Classes
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Study Resources</CardTitle>
                    <CardDescription>Access your study materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                          <BookOpen className="h-4 w-4 text-[#0e3b62]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">IJMB Study Materials</p>
                          <p className="text-sm text-gray-500">Textbooks, notes, and practice questions</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Access
                        </Button>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                          <PlaneTakeoff className="h-4 w-4 text-[#0e3b62]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Study Abroad Resources</p>
                          <p className="text-sm text-gray-500">University guides and application templates</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Access
                        </Button>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                          <LineChart className="h-4 w-4 text-[#0e3b62]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Practice Tests</p>
                          <p className="text-sm text-gray-500">Mock exams and assessments</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Access
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Resources
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ) : (
            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Learning Progress</CardTitle>
                    <CardDescription>Your current level and XP</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#0e3b62]">{userData.level}</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0e3b62] text-[10px] font-medium text-white">
                          <Zap className="h-3 w-3" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Level {userData.level}</span>
                          <span className="text-sm text-gray-500">Level {userData.level + 1}</span>
                        </div>
                        <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-2 mt-1" />
                        <p className="mt-1 text-xs text-gray-500">
                          {userData.xp}/{userData.xpToNextLevel} XP to next level
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>EduCoin Balance</CardTitle>
                    <CardDescription>Your reward currency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Coins className="h-8 w-8 text-[#0e3b62]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#0e3b62]">{userData.eduCoins}</p>
                        <p className="text-sm text-gray-500">EduCoins Available</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/dashboard/wallet">
                        View Wallet
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Study Streak</CardTitle>
                    <CardDescription>Your consecutive learning days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Clock className="h-8 w-8 text-[#0e3b62]" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#0e3b62]">{userData.streak} Days</p>
                        <p className="text-sm text-gray-500">Current Streak</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View History
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Active Challenges</CardTitle>
                    <CardDescription>Complete challenges to earn EduCoins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {challenges.map((challenge) => (
                        <div key={challenge.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{challenge.title}</p>
                            <div className="flex items-center gap-1 text-sm">
                              <Coins className="h-4 w-4 text-[#0e3b62]" />
                              <span className="font-medium text-[#0e3b62]">{challenge.reward}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress value={challenge.progress} className="h-2 flex-1" />
                            <span className="text-xs text-gray-500">{challenge.progress}%</span>
                          </div>
                          <p className="text-xs text-gray-500">{challenge.deadline}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/dashboard/challenges">
                        View All Challenges
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Your Study Clans</CardTitle>
                    <CardDescription>Collaborative learning groups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {studyClans.map((clan) => (
                        <div key={clan.id} className="flex items-start gap-4">
                          <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                            <Users className="h-4 w-4 text-[#0e3b62]" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{clan.name}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{clan.members} members</span>
                              <span>•</span>
                              <span>Activity: {clan.activity}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Join
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/dashboard/clans">
                        View All Clans
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Upcoming Classes</CardTitle>
                  <CardDescription>Your scheduled classes for the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="today">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="today">Today</TabsTrigger>
                      <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    </TabsList>
                    <TabsContent value="today" className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                          <Calendar className="h-4 w-4 text-[#0e3b62]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">IJMB Mathematics</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Today</span>
                            <span>•</span>
                            <span>3:00 PM - 4:30 PM</span>
                          </div>
                          <p className="text-sm text-gray-500">Tutor: Dr. Adebayo</p>
                        </div>
                        <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                          Join Class
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="tomorrow" className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                          <Calendar className="h-4 w-4 text-[#0e3b62]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">IJMB Physics</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Tomorrow</span>
                            <span>•</span>
                            <span>10:00 AM - 11:30 AM</span>
                          </div>
                          <p className="text-sm text-gray-500">Tutor: Prof. Okafor</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Set Reminder
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="upcoming" className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                          <Calendar className="h-4 w-4 text-[#0e3b62]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">Study Abroad Preparation</p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Wed, May 8</span>
                            <span>•</span>
                            <span>2:00 PM - 3:00 PM</span>
                          </div>
                          <p className="text-sm text-gray-500">Tutor: Mrs. Nwosu</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Set Reminder
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Classes
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
