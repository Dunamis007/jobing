import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Calendar,
  ChevronRight,
  Coins,
  LineChart,
  Lightbulb,
  Zap,
  Trophy,
  Users,
  BookOpen,
  PlaneTakeoff,
} from "lucide-react"

export const metadata: Metadata = {
  title: "NeuroPulse Dashboard | Dunamis Tutors",
  description: "Your personalized NeuroPulse learning dashboard with Dunamis Tutors.",
}

export default function NeuroPulseDashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1 lg:ml-72">
        <div className="container py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0e3b62]">NeuroPulse™ Dashboard</h1>
            <p className="text-gray-500">Your personalized learning experience based on your cognitive profile</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Cognitive Profile</CardTitle>
                <CardDescription>Your learning style and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-[#0e3b62]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#0e3b62]">Visual Learner</p>
                    <p className="text-sm text-gray-500">You learn best through seeing</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Visual</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auditory</span>
                    <span className="text-sm text-gray-500">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Reading/Writing</span>
                    <span className="text-sm text-gray-500">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Kinesthetic</span>
                    <span className="text-sm text-gray-500">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Update Profile
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Brain Health</CardTitle>
                <CardDescription>Your cognitive wellness metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Focus Score</p>
                        <p className="font-bold text-green-600">Good</p>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Memory Retention</p>
                        <p className="font-bold text-yellow-600">Moderate</p>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">Problem Solving</p>
                        <p className="font-bold text-blue-600">Excellent</p>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/brain-health">
                    View Detailed Report
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Learning Analytics</CardTitle>
                <CardDescription>Your study patterns and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[180px] w-full">
                  <Image
                    src="/placeholder.svg?height=180&width=320&text=Learning+Analytics+Chart"
                    alt="Learning Analytics Chart"
                    width={320}
                    height={180}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#0e3b62]/5 p-3 text-center">
                    <p className="text-sm text-gray-500">Study Time</p>
                    <p className="text-lg font-bold text-[#0e3b62]">24.5 hrs</p>
                    <p className="text-xs text-green-600">↑ 12% this week</p>
                  </div>
                  <div className="rounded-lg bg-[#0e3b62]/5 p-3 text-center">
                    <p className="text-sm text-gray-500">Completion Rate</p>
                    <p className="text-lg font-bold text-[#0e3b62]">78%</p>
                    <p className="text-xs text-green-600">↑ 5% this week</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Analytics
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Personalized Learning Path</CardTitle>
                <CardDescription>Recommended activities based on your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                      <BookOpen className="h-4 w-4 text-[#0e3b62]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">IJMB Mathematics: Calculus Fundamentals</p>
                      <p className="text-sm text-gray-500">Visual learning module with interactive diagrams</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Progress value={30} className="h-2 flex-1" />
                        <span className="text-xs text-gray-500">30%</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                      Continue
                    </Button>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                      <PlaneTakeoff className="h-4 w-4 text-[#0e3b62]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Study Abroad: University Selection Guide</p>
                      <p className="text-sm text-gray-500">Visual comparison of international universities</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Progress value={0} className="h-2 flex-1" />
                        <span className="text-xs text-gray-500">0%</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                      Start
                    </Button>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                      <LineChart className="h-4 w-4 text-[#0e3b62]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">IJMB Physics: Force and Motion</p>
                      <p className="text-sm text-gray-500">Interactive simulations and visual examples</p>
                      <div className="mt-1 flex items-center gap-2">
                        <Progress value={0} className="h-2 flex-1" />
                        <span className="text-xs text-gray-500">0%</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                      Start
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Recommendations
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Gamification Elements</CardTitle>
                <CardDescription>Your achievements and rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="achievements">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    <TabsTrigger value="challenges">Challenges</TabsTrigger>
                    <TabsTrigger value="rewards">Rewards</TabsTrigger>
                  </TabsList>
                  <TabsContent value="achievements" className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-[#0e3b62]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Early Bird</p>
                        <p className="text-sm text-gray-500">Completed 5 lessons before 9 AM</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-[#0e3b62]" />
                        <span className="font-medium text-[#0e3b62]">100</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-[#0e3b62]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Math Wizard</p>
                        <p className="text-sm text-gray-500">Scored 90% on 3 consecutive math tests</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-[#0e3b62]" />
                        <span className="font-medium text-[#0e3b62]">250</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="challenges" className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-[#0e3b62]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Complete 5 IJMB Practice Tests</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Progress value={60} className="h-2 flex-1" />
                          <span className="text-xs text-gray-500">3/5</span>
                        </div>
                        <p className="text-xs text-gray-500">3 days left</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-[#0e3b62]" />
                        <span className="font-medium text-[#0e3b62]">200</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-[#0e3b62]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Maintain a 7-day Study Streak</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Progress value={85} className="h-2 flex-1" />
                          <span className="text-xs text-gray-500">6/7</span>
                        </div>
                        <p className="text-xs text-gray-500">1 day left</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-[#0e3b62]" />
                        <span className="font-medium text-[#0e3b62]">150</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="rewards" className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-[#0e3b62]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Premium Study Materials</p>
                        <p className="text-sm text-gray-500">Unlock exclusive study materials</p>
                      </div>
                      <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                        100 <Coins className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-[#0e3b62]" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">One-on-One Tutoring</p>
                        <p className="text-sm text-gray-500">30-minute personalized session</p>
                      </div>
                      <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                        500 <Coins className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/wallet">
                    View EduCoin Wallet
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Classes</CardTitle>
                <CardDescription>Your scheduled classes based on your learning profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                      <Calendar className="h-4 w-4 text-[#0e3b62]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">IJMB Mathematics: Visual Calculus</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Today</span>
                        <span>•</span>
                        <span>3:00 PM - 4:30 PM</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Format:</span> Visual learning with interactive diagrams
                      </p>
                    </div>
                    <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]">
                      Join Class
                    </Button>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#0e3b62]/10 p-2">
                      <Calendar className="h-4 w-4 text-[#0e3b62]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Study Abroad: Visual University Tour</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Tomorrow</span>
                        <span>•</span>
                        <span>2:00 PM - 3:00 PM</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Format:</span> Virtual tour with visual comparisons
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Set Reminder
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Classes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
