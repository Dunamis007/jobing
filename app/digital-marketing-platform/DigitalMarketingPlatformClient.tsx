"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar } from "@/components/ui/calendar"
import {
  BookOpen,
  Play,
  CheckCircle,
  Lock,
  Award,
  Users,
  MessageCircle,
  FileText,
  Info,
  Clock,
  Target,
  Linkedin,
  Youtube,
  Twitter,
  MessageSquare,
  Mail,
  Download,
  ExternalLink,
  Star,
  Globe,
} from "lucide-react"

import { EduWallet } from "@/components/edu-wallet/edu-wallet"
import { HallOfFame } from "@/components/gamification/hall-of-fame"
import { UpgradePlan } from "@/components/pricing/upgrade-plan"
import { ModuleUnlock } from "@/components/curriculum/module-unlock"
import { PeerNotification } from "@/components/gamification/peer-notification"
import { StreakBonus } from "@/components/gamification/streak-bonus"
import { CareerGame } from "@/components/gamification/career-game"
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
  timeWall?: number // days remaining before unlock
  coinCost?: number // coins to unlock immediately
}

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface CohortSession {
  id: number
  title: string
  date: Date
  time: string
  timezone: string
  instructor: string
  attendees: number
  maxAttendees: number
  whatsappLink: string
}

export function DigitalMarketingPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

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

  // Digital Marketing specific quiz questions
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Which of the following is NOT a social media platform?",
      options: ["Instagram", "Twitter", "Google Analytics", "LinkedIn"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "What does SEO stand for?",
      options: [
        "Search Engine Optimization",
        "Social Engagement Opportunities",
        "Search Engine Operations",
        "Social Email Outreach",
      ],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "Which metric is most important when measuring email marketing success?",
      options: ["Open rate", "Click-through rate", "Conversion rate", "All of the above"],
      correctAnswer: 3,
    },
    {
      id: 4,
      question: "What is a key component of content marketing?",
      options: [
        "Creating content only for search engines",
        "Focusing on quantity over quality",
        "Creating valuable content for your target audience",
        "Posting the same content across all platforms",
      ],
      correctAnswer: 2,
    },
  ]

  // Digital Marketing specific cohort sessions
  const cohortSessions: CohortSession[] = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      date: new Date(2024, 5, 15),
      time: "6:00 PM - 8:00 PM",
      timezone: "Nigeria (WAT)",
      instructor: "Folake Adeyemi",
      attendees: 18,
      maxAttendees: 25,
      whatsappLink: "https://chat.whatsapp.com/nigeria-marketing-cohort",
    },
    {
      id: 2,
      title: "Social Media Strategy Masterclass",
      date: new Date(2024, 5, 16),
      time: "7:00 PM - 9:00 PM",
      timezone: "UK (GMT)",
      instructor: "James Wilson",
      attendees: 22,
      maxAttendees: 30,
      whatsappLink: "https://chat.whatsapp.com/uk-marketing-cohort",
    },
    {
      id: 3,
      title: "SEO Workshop",
      date: new Date(2024, 5, 17),
      time: "8:00 PM - 10:00 PM",
      timezone: "US Eastern (EST)",
      instructor: "Sarah Johnson",
      attendees: 15,
      maxAttendees: 20,
      whatsappLink: "https://chat.whatsapp.com/us-marketing-cohort",
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
              <h1 className="text-3xl font-bold">Digital Marketing Mastery</h1>
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

          {/* Navigation */}
          <div className="flex overflow-x-auto pb-2 mb-6 border-b">
            <Button
              variant={currentView === "curriculum" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setCurrentView("curriculum")}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Curriculum
            </Button>
            <Button
              variant={currentView === "cohort" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setCurrentView("cohort")}
            >
              <Users className="mr-2 h-4 w-4" />
              Join Cohort
            </Button>
            <Button
              variant={currentView === "resources" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setCurrentView("resources")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Resources
            </Button>
            <Button
              variant={currentView === "about" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setCurrentView("about")}
            >
              <Info className="mr-2 h-4 w-4" />
              About
            </Button>
            <Button
              variant={currentView === "community" ? "default" : "ghost"}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
              onClick={() => setCurrentView("community")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Community
            </Button>
          </div>

          {/* Curriculum View */}
          {currentView === "curriculum" && (
            <div className="space-y-6">
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
                            <Lock className="mr-2 h-5 w-5 text-gray-400" />
                          ) : (
                            <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                          )}
                          Module {module.id}
                        </CardTitle>
                        {module.locked && module.timeWall !== undefined && (
                          <ModuleUnlock
                            moduleId={module.id}
                            moduleName={`Module ${module.id}`}
                            coinCost={module.coinCost || 200}
                            timeRemaining={module.timeWall}
                            onUnlock={handleModuleUnlock}
                          />
                        )}
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
                        <div className="mt-2 flex items-center">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center text-xs">
                                  <Target className="mr-1 h-3 w-3 text-orange-500" />
                                  Quiz Score: {module.quizScore}%
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>You scored {module.quizScore}% on this module's quiz</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      )}
                      {module.badge && (
                        <div className="mt-2">
                          <Badge variant="outline" className="text-xs">
                            <Award className="mr-1 h-3 w-3 text-yellow-500" />
                            {module.badge}
                          </Badge>
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
                        <Download className="h-4 w-4" />
                        Download Materials
                      </Button>
                    )}
                    <Button variant="outline" onClick={() => setShowQuiz(true)} className="gap-2">
                      <Target className="h-4 w-4" />
                      Take Quiz
                    </Button>
                  </div>

                  {/* Quiz Section */}
                  {showQuiz && (
                    <Card className="mt-4 border-dashed">
                      <CardHeader>
                        <CardTitle className="text-lg">Module Quiz</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {quizQuestions.map((q) => (
                          <div key={q.id} className="space-y-2">
                            <h4 className="font-medium">{q.question}</h4>
                            <div className="space-y-2">
                              {q.options.map((option, index) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    type="radio"
                                    id={`q${q.id}-${index}`}
                                    name={`question-${q.id}`}
                                    className="mr-2"
                                    checked={quizAnswers[q.id] === index}
                                    onChange={() => setQuizAnswers({ ...quizAnswers, [q.id]: index })}
                                  />
                                  <label htmlFor={`q${q.id}-${index}`}>{option}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowQuiz(false)}>
                            Cancel
                          </Button>
                          <Button>Submit Answers</Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Cohort View */}
          {currentView === "cohort" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Join a Learning Cohort</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Join a cohort to learn with peers and get guidance from instructors. Select your preferred timezone
                    and session below.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Select Date</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="border rounded-md p-2"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Available Sessions</h3>
                      <div className="space-y-2">
                        {cohortSessions
                          .filter(
                            (session) => selectedDate && session.date.toDateString() === selectedDate.toDateString(),
                          )
                          .map((session) => (
                            <Card key={session.id} className="p-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{session.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {session.time} ({session.timezone})
                                  </p>
                                  <p className="text-sm">Instructor: {session.instructor}</p>
                                </div>
                                <div className="text-right">
                                  <Badge variant="outline">
                                    {session.attendees}/{session.maxAttendees} Spots
                                  </Badge>
                                  <div className="mt-2">
                                    <Button size="sm" className="gap-1">
                                      <Users className="h-3 w-3" />
                                      Join
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        {selectedDate &&
                          cohortSessions.filter(
                            (session) => session.date.toDateString() === selectedDate.toDateString(),
                          ).length === 0 && (
                            <p className="text-muted-foreground">
                              No sessions available on this date. Please select another date.
                            </p>
                          )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-muted rounded-md">
                    <h3 className="text-lg font-medium mb-2">WhatsApp Study Groups</h3>
                    <p className="mb-2">
                      Join our WhatsApp study groups to connect with fellow students and get additional support.
                    </p>
                    <Button variant="outline" className="gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Join WhatsApp Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Resources View */}
          {currentView === "resources" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Marketing Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-blue-500" />
                          Study Materials
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Download className="mr-2 h-4 w-4 text-blue-500" />
                            <span>Digital Marketing Handbook.pdf</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Download className="mr-2 h-4 w-4 text-blue-500" />
                            <span>Social Media Strategy Template.pdf</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Download className="mr-2 h-4 w-4 text-blue-500" />
                            <span>SEO Checklist.pdf</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Youtube className="mr-2 h-5 w-5 text-red-500" />
                          Video Tutorials
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Play className="mr-2 h-4 w-4 text-red-500" />
                            <span>Introduction to Digital Marketing</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Play className="mr-2 h-4 w-4 text-red-500" />
                            <span>Social Media Marketing Masterclass</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Play className="mr-2 h-4 w-4 text-red-500" />
                            <span>SEO Techniques for 2024</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-green-500" />
                        External Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>Google Digital Garage</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>HubSpot Academy</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>Moz SEO Learning Center</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>Facebook Blueprint</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          )}

          {/* About View */}
          {currentView === "about" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Digital Marketing Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    This comprehensive program is designed to take you from beginner to professional in the field of
                    Digital Marketing. Through a carefully structured curriculum, hands-on projects, and expert
                    mentorship, you'll gain the skills and confidence needed to excel in this high-demand field.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Program Highlights</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Comprehensive curriculum designed by industry experts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Hands-on projects to build your portfolio</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Mentorship from experienced professionals</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Industry-recognized certification</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Job placement assistance for top performers</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">What You'll Learn</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Digital Marketing Strategy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Search Engine Optimization (SEO)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Social Media Marketing</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Content Marketing and Creation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Analytics and Performance Tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">Certification</h3>
                    <div className="flex items-center p-4 border rounded-md bg-muted">
                      <Award className="h-12 w-12 text-yellow-500 mr-4" />
                      <div>
                        <h4 className="font-medium">Digital Marketing Professional Certificate</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete all modules and pass the final assessment to earn your certificate. Our certificates
                          are recognized by leading companies in the industry.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Button className="gap-2">
                      <Users className="h-4 w-4" />
                      Join Free Track
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Star className="h-4 w-4" />
                      Apply to Full Bootcamp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Community View */}
          {currentView === "community" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Connect with fellow digital marketers, share your progress, and get help from the community.</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
                          Discussion Forum
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Ask questions, share insights, and help others in our community forum.
                        </p>
                        <Button className="w-full">Visit Forum</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Linkedin className="mr-2 h-5 w-5 text-blue-600" />
                          LinkedIn Group
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Connect with alumni and industry professionals in our LinkedIn group.
                        </p>
                        <Button className="w-full">Join Group</Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Twitter className="mr-2 h-5 w-5 text-blue-400" />
                          Twitter Community
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Follow us on Twitter for updates, tips, and community highlights.
                        </p>
                        <Button className="w-full">Follow Us</Button>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Weekly Q&A Session</h4>
                          <p className="text-sm text-muted-foreground">Friday, 4:00 PM WAT</p>
                        </div>
                        <Button size="sm">Join</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Industry Expert Talk: Social Media Trends</h4>
                          <p className="text-sm text-muted-foreground">Next Tuesday, 6:00 PM WAT</p>
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Campaign Showcase</h4>
                          <p className="text-sm text-muted-foreground">Next Thursday, 5:00 PM WAT</p>
                        </div>
                        <Button size="sm">RSVP</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 bg-muted rounded-md">
                    <h3 className="text-lg font-medium mb-2">Need Help?</h3>
                    <p className="mb-4">
                      Our support team is here to help you with any questions or issues you may have.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Support
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Live Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          <EduWallet />

          <StreakBonus currentStreak={5} />

          <HallOfFame />

          <CareerGame />

          <UpgradePlan />
        </div>
      </div>
    </div>
  )
}
