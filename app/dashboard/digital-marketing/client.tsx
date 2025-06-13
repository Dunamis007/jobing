"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Play,
  CheckCircle,
  Award,
  Users,
  MessageCircle,
  FileText,
  Info,
  Clock,
  Target,
  Calendar,
} from "lucide-react"

import { EduWallet } from "@/components/edu-wallet/edu-wallet"
import { DigitalMarketingHallOfFame } from "@/components/gamification/digital-marketing-hall-of-fame"
import { DigitalMarketingUpgradePlan } from "@/components/pricing/digital-marketing-upgrade-plan"
import { ModuleUnlock } from "@/components/curriculum/module-unlock"
import { PeerNotification } from "@/components/gamification/peer-notification"
import { StreakBonus } from "@/components/gamification/streak-bonus"
import { DigitalMarketingCareerGame } from "@/components/gamification/digital-marketing-career-game"
import { NotificationSystem } from "@/components/gamification/notification-system"

interface Module {
  id: number
  title: string
  duration: string
  completed: boolean
  locked: boolean
  lessons: number
  description: string
  progress: number
  timeLeft: string
  quizScore?: number
  badge?: string
  pdfUrl?: string
  timeWall?: number
  coinCost?: number
}

interface LeaderboardEntry {
  rank: number
  name: string
  avatar: string
  points: number
  streak: number
  tier: string
}

export function DigitalMarketingDashboardClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [currentTab, setCurrentTab] = useState("curriculum")

  // Digital Marketing specific modules
  const modules: Module[] = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      duration: "3 hours",
      completed: true,
      locked: false,
      lessons: 6,
      description:
        "Introduction to digital marketing concepts and strategies. Learn the basics of online marketing channels and how they work together to create effective campaigns.",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 90,
      badge: "Digital Marketing Fundamentals",
      pdfUrl: "/pdfs/digital-marketing-basics.pdf",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      duration: "4 hours",
      completed: false,
      locked: false,
      lessons: 8,
      description:
        "Master social media platforms for business growth. Learn how to create engaging content, build a following, and measure your social media marketing success.",
      progress: 60,
      timeLeft: "1.6 hours left",
      badge: "Social Media Specialist",
      pdfUrl: "/pdfs/social-media-marketing.pdf",
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      duration: "5 hours",
      completed: false,
      locked: false,
      lessons: 10,
      description:
        "Optimize websites for better search engine rankings. Learn on-page and off-page SEO techniques to improve organic traffic.",
      progress: 30,
      timeLeft: "3.5 hours left",
      badge: "SEO Specialist",
      pdfUrl: "/pdfs/seo-guide.pdf",
    },
    {
      id: 4,
      title: "Content Marketing",
      duration: "4 hours",
      completed: false,
      locked: true,
      lessons: 8,
      description:
        "Create compelling content that drives engagement. Learn content strategy, creation, distribution, and measurement.",
      progress: 0,
      timeLeft: "Locked",
      timeWall: 3,
      coinCost: 200,
      badge: "Content Marketing Specialist",
      pdfUrl: "/pdfs/content-marketing.pdf",
    },
    {
      id: 5,
      title: "Email Marketing",
      duration: "3 hours",
      completed: false,
      locked: true,
      lessons: 6,
      description:
        "Build effective email campaigns and automation. Learn list building, segmentation, A/B testing, and analytics.",
      progress: 0,
      timeLeft: "Locked",
      timeWall: 7,
      coinCost: 250,
      badge: "Email Marketing Specialist",
      pdfUrl: "/pdfs/email-marketing.pdf",
    },
    {
      id: 6,
      title: "Digital Marketing Analytics",
      duration: "5 hours",
      completed: false,
      locked: true,
      lessons: 10,
      description:
        "Measure and analyze marketing performance. Learn to use Google Analytics, social media insights, and other analytics tools.",
      progress: 0,
      timeLeft: "Locked",
      timeWall: 14,
      coinCost: 350,
      badge: "Analytics Specialist",
      pdfUrl: "/pdfs/marketing-analytics.pdf",
    },
  ]

  // Leaderboard data
  const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Chioma Nwosu",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      streak: 14,
      tier: "Gold",
    },
    {
      rank: 2,
      name: "Tunde Bakare",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1120,
      streak: 10,
      tier: "Silver",
    },
    {
      rank: 3,
      name: "Amina Bello",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 980,
      streak: 7,
      tier: "Silver",
    },
    {
      rank: 4,
      name: "David Okonkwo",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 850,
      streak: 5,
      tier: "Bronze",
    },
    {
      rank: 5,
      name: "Sarah Adeyemi",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 720,
      streak: 3,
      tier: "Bronze",
    },
  ]

  const handleModuleUnlock = (moduleId: number) => {
    // In a real app, this would update the module's locked status
    console.log(`Unlocked module ${moduleId}`)
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <NotificationSystem />
      <PeerNotification />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Digital Marketing Dashboard</h1>
              <p className="text-muted-foreground">Your personalized learning journey</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <EduWallet variant="compact" />
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Session
              </Button>
            </div>
          </div>

          <Tabs defaultValue="curriculum" className="mb-6" onValueChange={setCurrentTab}>
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="curriculum" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden md:inline">Curriculum</span>
              </TabsTrigger>
              <TabsTrigger value="cohort" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden md:inline">Join Cohort</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden md:inline">Resources</span>
              </TabsTrigger>
              <TabsTrigger value="about" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="hidden md:inline">About</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden md:inline">Community</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="space-y-6">
              {/* Leaderboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    Weekly Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Rank</th>
                          <th className="text-left py-2 px-4">Student</th>
                          <th className="text-right py-2 px-4">Points</th>
                          <th className="text-right py-2 px-4">Streak</th>
                          <th className="text-right py-2 px-4">Tier</th>
                        </tr>
                      </thead>
                      <tbody>
                        {leaderboardData.map((entry) => (
                          <tr key={entry.rank} className="border-b last:border-0">
                            <td className="py-2 px-4">
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 font-bold text-sm">
                                {entry.rank}
                              </div>
                            </td>
                            <td className="py-2 px-4">
                              <div className="flex items-center gap-2">
                                <img
                                  src={entry.avatar || "/placeholder.svg"}
                                  alt={entry.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                />
                                <span>{entry.name}</span>
                              </div>
                            </td>
                            <td className="text-right py-2 px-4 font-medium">{entry.points}</td>
                            <td className="text-right py-2 px-4">
                              <div className="flex items-center justify-end gap-1">
                                <span>{entry.streak}</span>
                                <span className="text-orange-500">🔥</span>
                              </div>
                            </td>
                            <td className="text-right py-2 px-4">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  entry.tier === "Gold"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : entry.tier === "Silver"
                                      ? "bg-gray-100 text-gray-800"
                                      : "bg-amber-100 text-amber-800"
                                }`}
                              >
                                {entry.tier}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules.map((module) => (
                  <Card
                    key={module.id}
                    className={`cursor-pointer transition-all ${
                      activeModule === module.id ? "border-primary ring-1 ring-primary" : ""
                    }`}
                    onClick={() => !module.locked && setActiveModule(module.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg flex items-center">
                          {module.completed ? (
                            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                          ) : module.locked ? (
                            <div className="relative">
                              <Clock className="mr-2 h-5 w-5 text-gray-400" />
                              {module.timeWall !== undefined && (
                                <ModuleUnlock
                                  moduleId={module.id}
                                  moduleName={`Module ${module.id}`}
                                  coinCost={module.coinCost || 200}
                                  timeRemaining={module.timeWall}
                                  onUnlock={handleModuleUnlock}
                                />
                              )}
                            </div>
                          ) : (
                            <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                          )}
                          Module {module.id}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-medium mb-1">{module.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {module.duration}
                        </span>
                        <span className="flex items-center">
                          <BookOpen className="mr-1 h-3 w-3" />
                          {module.lessons} lessons
                        </span>
                      </div>
                      {!module.locked && (
                        <>
                          <div className="flex items-center justify-between mb-1 text-xs">
                            <span>{module.progress}% complete</span>
                            {module.timeLeft && <span>{module.timeLeft}</span>}
                          </div>
                          <Progress value={module.progress} className="h-1" />
                        </>
                      )}
                      {module.quizScore !== undefined && (
                        <div className="mt-2 flex items-center text-xs">
                          <Target className="mr-1 h-3 w-3 text-orange-500" />
                          Quiz Score: {module.quizScore}%
                        </div>
                      )}
                      {module.badge && (
                        <div className="mt-2 text-xs text-gray-500 flex items-center">
                          <Award className="mr-1 h-3 w-3 text-yellow-500" />
                          {module.badge}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Active Module Details */}
              <Card>
                <CardHeader>
                  <CardTitle>{modules.find((m) => m.id === activeModule)?.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{modules.find((m) => m.id === activeModule)?.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <Button className="gap-2">
                      <Play className="h-4 w-4" />
                      Start Learning
                    </Button>
                    {modules.find((m) => m.id === activeModule)?.pdfUrl && (
                      <Button variant="outline" className="gap-2">
                        <FileText className="h-4 w-4" />
                        Download Materials
                      </Button>
                    )}
                    <Button variant="outline" onClick={() => setShowQuiz(true)} className="gap-2">
                      <Target className="h-4 w-4" />
                      Take Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cohort">
              <Card>
                <CardHeader>
                  <CardTitle>Join a Digital Marketing Cohort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Join a cohort to learn with peers and get guidance from instructors. Select your preferred timezone
                    and session below.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendar and session selection would go here */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Calendar</h3>
                      <p className="text-sm text-gray-500">Select a date to see available sessions</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Available Sessions</h3>
                      <p className="text-sm text-gray-500">Select a date to view available sessions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Marketing Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Access study materials, video tutorials, and external resources.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Resources content would go here */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Study Materials</h3>
                      <p className="text-sm text-gray-500">Download PDFs, templates, and guides</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Video Tutorials</h3>
                      <p className="text-sm text-gray-500">Watch step-by-step video tutorials</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About Digital Marketing Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This comprehensive program is designed to take you from beginner to professional in the field of
                    Digital Marketing. Through a carefully structured curriculum, hands-on projects, and expert
                    mentorship, you'll gain the skills and confidence needed to excel in this high-demand field.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button className="gap-2">
                      <Users className="h-4 w-4" />
                      Join Free Track
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Award className="h-4 w-4" />
                      Apply to Full Bootcamp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="community">
              <Card>
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Connect with fellow digital marketers, share your progress, and get help.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Community content would go here */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Discussion Forum</h3>
                      <p className="text-sm text-gray-500">Ask questions and share insights</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">LinkedIn Group</h3>
                      <p className="text-sm text-gray-500">Connect with alumni and professionals</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Twitter Community</h3>
                      <p className="text-sm text-gray-500">Follow for updates and tips</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <EduWallet />

          <StreakBonus currentStreak={5} />

          <DigitalMarketingHallOfFame />

          <DigitalMarketingCareerGame />

          <DigitalMarketingUpgradePlan />
        </div>
      </div>
    </div>
  )
}
