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

interface PlatformClientProps {
  programType: "ai" | "coding" | "marketing"
  modules: Module[]
  cohortSessions: CohortSession[]
}

export function PlatformClient({ programType, modules, cohortSessions }: PlatformClientProps) {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Get program-specific title
  const getProgramTitle = () => {
    switch (programType) {
      case "ai":
        return "AI Mastery Bootcamp"
      case "coding":
        return "Coding Bootcamp"
      case "marketing":
        return "Digital Marketing Mastery"
      default:
        return "Learning Platform"
    }
  }

  // Get program-specific color
  const getProgramColor = () => {
    switch (programType) {
      case "ai":
        return "text-dunamis-primary"
      case "coding":
        return "text-blue-600"
      case "marketing":
        return "text-green-600"
      default:
        return "text-dunamis-primary"
    }
  }

  // Sample quiz questions
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the main advantage of using AI in education?",
      options: [
        "Replacing teachers",
        "Personalized learning experiences",
        "Reducing education costs",
        "Eliminating homework",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which of these is NOT a common application of AI?",
      options: ["Natural Language Processing", "Computer Vision", "Time Travel Prediction", "Recommendation Systems"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "What does ML stand for in AI?",
      options: ["Multiple Learning", "Machine Language", "Machine Learning", "Modern Logic"],
      correctAnswer: 2,
    },
  ]

  const handleModuleUnlock = (moduleId: number) => {
    // In a real app, this would update the module's locked status
    console.log(`Unlocked module ${moduleId}`)
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <PeerNotification />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">{getProgramTitle()}</h1>
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
                            <BookOpen className={`mr-2 h-5 w-5 ${getProgramColor()}`} />
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
                            {module.timeLeft && <span>{module.timeLeft} left</span>}
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
                  <CardTitle>Learning Resources</CardTitle>
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
                            <span>Module 1 Handbook.pdf</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Download className="mr-2 h-4 w-4 text-blue-500" />
                            <span>Practice Exercises.pdf</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Download className="mr-2 h-4 w-4 text-blue-500" />
                            <span>Cheat Sheet.pdf</span>
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
                            <span>Introduction to the Course</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Play className="mr-2 h-4 w-4 text-red-500" />
                            <span>Practical Demonstration</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <Play className="mr-2 h-4 w-4 text-red-500" />
                            <span>Advanced Techniques</span>
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
                            <span>Industry Documentation</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>Practice Playground</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>Community Forum</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <div className="flex items-center">
                            <ExternalLink className="mr-2 h-4 w-4 text-green-500" />
                            <span>Additional Exercises</span>
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
                  <CardTitle>About This Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    This comprehensive program is designed to take you from beginner to professional in the field of{" "}
                    {programType === "ai"
                      ? "Artificial Intelligence"
                      : programType === "coding"
                        ? "Software Development"
                        : "Digital Marketing"}
                    . Through a carefully structured curriculum, hands-on projects, and expert mentorship, you'll gain
                    the skills and confidence needed to excel in this high-demand field.
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
                        {programType === "ai" && (
                          <>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Fundamentals of AI and Machine Learning</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Neural Networks and Deep Learning</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Natural Language Processing</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Computer Vision Applications</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>AI Ethics and Responsible AI</span>
                            </li>
                          </>
                        )}

                        {programType === "coding" && (
                          <>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Programming Fundamentals</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Web Development (Frontend & Backend)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>Database Design and Management</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>API Development and Integration</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                              <span>DevOps and Deployment</span>
                            </li>
                          </>
                        )}

                        {programType === "marketing" && (
                          <>
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
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">Certification</h3>
                    <div className="flex items-center p-4 border rounded-md bg-muted">
                      <Award className="h-12 w-12 text-yellow-500 mr-4" />
                      <div>
                        <h4 className="font-medium">
                          {programType === "ai"
                            ? "AI Mastery Certificate"
                            : programType === "coding"
                              ? "Professional Coding Certificate"
                              : "Digital Marketing Professional Certificate"}
                        </h4>
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
                  <p>Connect with fellow learners, share your progress, and get help from the community.</p>

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
                          <h4 className="font-medium">Industry Expert Talk</h4>
                          <p className="text-sm text-muted-foreground">Next Tuesday, 6:00 PM WAT</p>
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <h4 className="font-medium">Project Showcase</h4>
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

          <StreakBonus currentStreak={12} />

          <HallOfFame />

          <CareerGame variant="compact" />

          <UpgradePlan variant="compact" program={programType} />
        </div>
      </div>
    </div>
  )
}
