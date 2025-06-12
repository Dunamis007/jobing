"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
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
  Home,
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
  CalendarIcon,
  Globe,
  DollarSign,
  Share2,
  Headphones,
  Mic,
  PenTool,
  Eye,
  MessageCircleMore,
  ThumbsUp,
  Reply,
  Volume2,
  Timer,
  BarChart3,
  TrendingUp,
} from "lucide-react"

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
  bandScore?: number
  badge?: string
  pdfUrl?: string
  audioUrl?: string
  videoUrl?: string
}

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  audioUrl?: string
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
  type: "listening" | "speaking" | "writing" | "reading"
}

interface Testimonial {
  id: number
  name: string
  role: string
  country: string
  content: string
  rating: number
  avatar: string
  bandScore: number
  targetScore: number
}

interface CommunityPost {
  id: number
  author: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  replies: number
  tags: string[]
}

interface IELTSTestDate {
  id: number
  date: Date
  type: "Academic" | "General Training"
  location: string
  registrationDeadline: Date
  fee: string
}

export function IELTSPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN" | "GBP">("USD")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [bandScoreInput, setBandScoreInput] = useState({ listening: 7, reading: 6.5, writing: 6, speaking: 7 })

  const modules: Module[] = [
    {
      id: 1,
      title: "Listening Skills",
      duration: "2 hours",
      completed: true,
      locked: false,
      lessons: 8,
      description: "Master IELTS listening with various accents and question types",
      progress: 100,
      timeLeft: "Completed",
      bandScore: 7.5,
      badge: "Listening Expert",
      pdfUrl: "/pdfs/ielts-listening.pdf",
      audioUrl: "/audio/listening-practice.mp3",
      videoUrl: "/videos/listening-strategies.mp4",
    },
    {
      id: 2,
      title: "Reading Comprehension",
      duration: "2.5 hours",
      completed: true,
      locked: false,
      lessons: 10,
      description: "Develop speed reading and comprehension skills for Academic/General texts",
      progress: 100,
      timeLeft: "Completed",
      bandScore: 7.0,
      badge: "Reading Master",
      pdfUrl: "/pdfs/ielts-reading.pdf",
      videoUrl: "/videos/reading-techniques.mp4",
    },
    {
      id: 3,
      title: "Writing Task 1 & 2",
      duration: "3 hours",
      completed: false,
      locked: false,
      lessons: 12,
      description: "Essay writing, graph description, and letter writing techniques",
      progress: 65,
      timeLeft: "1 hour left",
      badge: "Writing Specialist",
      pdfUrl: "/pdfs/ielts-writing.pdf",
      videoUrl: "/videos/writing-masterclass.mp4",
    },
    {
      id: 4,
      title: "Speaking Practice",
      duration: "2 hours",
      completed: false,
      locked: false,
      lessons: 9,
      description: "Fluency, pronunciation, and confidence building for all speaking parts",
      progress: 30,
      timeLeft: "1.5 hours left",
      badge: "Speaking Champion",
      pdfUrl: "/pdfs/ielts-speaking.pdf",
      audioUrl: "/audio/speaking-samples.mp3",
      videoUrl: "/videos/speaking-practice.mp4",
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the main topic of the conversation?",
      options: ["University application", "Job interview", "Travel planning", "Restaurant booking"],
      correctAnswer: 0,
      audioUrl: "/audio/listening-q1.mp3",
    },
    {
      id: 2,
      question: "According to the passage, what is the primary benefit of renewable energy?",
      options: ["Cost effectiveness", "Environmental protection", "Job creation", "Energy independence"],
      correctAnswer: 1,
    },
  ]

  const cohortSessions: CohortSession[] = [
    {
      id: 1,
      title: "Listening Skills Workshop",
      date: new Date(2024, 2, 15),
      time: "6:00 PM - 8:00 PM",
      timezone: "Nigeria (WAT)",
      instructor: "Sarah Johnson (IELTS Examiner)",
      attendees: 24,
      maxAttendees: 30,
      whatsappLink: "https://chat.whatsapp.com/nigeria-ielts-listening",
      type: "listening",
    },
    {
      id: 2,
      title: "Speaking Practice Session",
      date: new Date(2024, 2, 16),
      time: "7:00 PM - 9:00 PM",
      timezone: "UK (GMT)",
      instructor: "Michael Thompson (Native Speaker)",
      attendees: 18,
      maxAttendees: 25,
      whatsappLink: "https://chat.whatsapp.com/uk-ielts-speaking",
      type: "speaking",
    },
    {
      id: 3,
      title: "Writing Masterclass",
      date: new Date(2024, 2, 17),
      time: "8:00 PM - 10:00 PM",
      timezone: "Canada (EST)",
      instructor: "Dr. Emma Wilson",
      attendees: 22,
      maxAttendees: 28,
      whatsappLink: "https://chat.whatsapp.com/canada-ielts-writing",
      type: "writing",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Adebayo Ogundimu",
      role: "Software Engineer",
      country: "Canada",
      content:
        "I went from band 6.0 to 8.5 in just 8 weeks! The structured approach and mock tests were game-changers for my immigration process.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      bandScore: 8.5,
      targetScore: 7.0,
    },
    {
      id: 2,
      name: "Fatima Al-Rashid",
      role: "Medical Student",
      country: "UK",
      content:
        "The speaking practice sessions boosted my confidence tremendously. Achieved band 7.5 and got into my dream university!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      bandScore: 7.5,
      targetScore: 7.0,
    },
    {
      id: 3,
      name: "James Rodriguez",
      role: "Business Analyst",
      country: "Australia",
      content:
        "Excellent preparation materials and expert guidance. The writing module helped me achieve band 8.0 in writing!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      bandScore: 8.0,
      targetScore: 7.5,
    },
  ]

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Just completed my IELTS test! The listening practice sessions really helped. Got 8.0 in listening! 🎉 Thanks to the amazing community support.",
      timestamp: "2 hours ago",
      likes: 28,
      replies: 12,
      tags: ["listening", "success-story", "band-8"],
    },
    {
      id: 2,
      author: "Ahmed Hassan",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Sharing my writing Task 2 essay on environmental protection. Would love feedback from the community before my test next week!",
      timestamp: "5 hours ago",
      likes: 15,
      replies: 8,
      tags: ["writing", "task-2", "feedback"],
    },
    {
      id: 3,
      author: "Maria Santos",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The speaking practice with native speakers was incredible! Feeling much more confident about Part 3 discussions now.",
      timestamp: "1 day ago",
      likes: 22,
      replies: 6,
      tags: ["speaking", "confidence", "part-3"],
    },
  ]

  const ieltsTestDates: IELTSTestDate[] = [
    {
      id: 1,
      date: new Date(2024, 2, 23),
      type: "Academic",
      location: "Lagos, Nigeria",
      registrationDeadline: new Date(2024, 2, 9),
      fee: "₦85,000",
    },
    {
      id: 2,
      date: new Date(2024, 2, 30),
      type: "General Training",
      location: "Abuja, Nigeria",
      registrationDeadline: new Date(2024, 2, 16),
      fee: "₦85,000",
    },
    {
      id: 3,
      date: new Date(2024, 3, 6),
      type: "Academic",
      location: "London, UK",
      registrationDeadline: new Date(2024, 2, 23),
      fee: "£170",
    },
  ]

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModule = modules.find((m) => m.id === activeModule)
  const currentModuleProgress = currentModule?.progress || 0

  const pricingTiers = [
    {
      name: "Free Practice",
      priceUSD: 0,
      priceNGN: 0,
      priceGBP: 0,
      period: "Forever",
      features: [
        "Access to 2 modules",
        "Basic practice tests",
        "Community forum access",
        "Study materials download",
        "Email support",
      ],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "IELTS Bootcamp",
      priceUSD: 39,
      priceNGN: 29000,
      priceGBP: 29,
      period: "8-Week Program",
      features: [
        "All 4 skill modules",
        "Live practice sessions",
        "Mock test simulations",
        "Band score predictor",
        "Downloadable resources",
        "WhatsApp study groups",
        "Certificate of completion",
        "Priority support",
      ],
      popular: true,
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Premium Coaching",
      priceUSD: 89,
      priceNGN: 69000,
      priceGBP: 69,
      period: "Personal Mentorship",
      features: [
        "Everything in Bootcamp",
        "1-on-1 speaking practice",
        "Personal writing feedback",
        "Custom study plan",
        "Exam registration guidance",
        "University application help",
        "Dedicated mentor",
        "Guaranteed band improvement",
      ],
      popular: false,
      color: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
  ]

  const learningTrack = [
    {
      phase: "Beginner Foundation",
      weeks: "1-2",
      status: "completed",
      color: "bg-green-500",
      modules: ["Basic Skills", "Test Format"],
    },
    {
      phase: "Core Skills Development",
      weeks: "3-5",
      status: "current",
      color: "bg-blue-600",
      modules: ["Listening", "Reading", "Writing Basics"],
    },
    {
      phase: "Advanced Practice",
      weeks: "6-7",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Complex Writing", "Fluent Speaking"],
    },
    {
      phase: "Mock Exam Simulation",
      weeks: "8",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Full Practice Tests", "Final Tips"],
    },
  ]

  const resources = [
    {
      category: "Practice Tools",
      items: [
        { name: "Band Score Simulator", url: "#band-simulator", icon: BarChart3 },
        { name: "Speaking Practice AI", url: "#speaking-ai", icon: Mic },
        { name: "Writing Checker", url: "#writing-checker", icon: PenTool },
      ],
    },
    {
      category: "Audio & Video Content",
      items: [
        { name: "Listening Practice Library", url: "#listening-library", icon: Headphones },
        { name: "Speaking Sample Answers", url: "#speaking-samples", icon: Volume2 },
        { name: "Pronunciation Guide", url: "#pronunciation", icon: Play },
      ],
    },
    {
      category: "Study Materials",
      items: [
        { name: "Vocabulary Builder", url: "/pdfs/ielts-vocabulary.pdf", icon: FileText },
        { name: "Grammar Essentials", url: "/pdfs/ielts-grammar.pdf", icon: FileText },
        { name: "Writing Templates", url: "/pdfs/writing-templates.pdf", icon: FileText },
      ],
    },
    {
      category: "Test Information",
      items: [
        { name: "Test Centers Locator", url: "https://ielts.org/book-a-test", icon: Globe },
        { name: "Registration Guide", url: "#registration-guide", icon: CalendarIcon },
        { name: "Score Requirements", url: "#score-requirements", icon: Target },
      ],
    },
  ]

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "cohort", label: "Join Cohort", icon: Users },
    { id: "resources", label: "Resources", icon: FileText },
    { id: "about", label: "About", icon: Info },
    { id: "community", label: "Community", icon: MessageCircle },
  ]

  const calculateOverallBand = () => {
    const { listening, reading, writing, speaking } = bandScoreInput
    return ((listening + reading + writing + speaking) / 4).toFixed(1)
  }

  const shareToLinkedIn = (badge: string) => {
    const text = `I just earned the ${badge} badge from Dunamis Tutors IELTS Program! 🚀 #IELTS #EnglishProficiency #StudyAbroad`
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const downloadBadge = (badge: string) => {
    const link = document.createElement("a")
    link.href = `/badges/${badge.toLowerCase().replace(/\s+/g, "-")}.png`
    link.download = `${badge}-badge.png`
    link.click()
  }

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-4">IELTS Mastery Program</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Achieve your target band score with our comprehensive IELTS preparation program designed for global
                success
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Band Score Guarantee</h3>
                  <p className="text-gray-600">
                    Structured learning path with proven strategies to achieve your target band
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Expert Native Instructors</h3>
                  <p className="text-gray-600">Learn from certified IELTS examiners and native English speakers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
                  <p className="text-gray-600">
                    Certificates recognized by universities and immigration authorities worldwide
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Success Statistics */}
            <section className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">Our Success Record</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">92%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">7.8</div>
                  <div className="text-sm text-gray-600">Average Band Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">3,247</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">8 Weeks</div>
                  <div className="text-sm text-gray-600">Average Prep Time</div>
                </div>
              </div>
            </section>

            {/* Testimonial Carousel */}
            <section className="py-8">
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-blue-600">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role} • {testimonial.country}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-800">Band {testimonial.bandScore}</Badge>
                        <span className="text-xs text-gray-500">(Target: {testimonial.targetScore})</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )

      case "curriculum":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-600">IELTS Curriculum</h2>
              <Badge variant="secondary" className="text-sm">
                {modules.filter((m) => m.completed).length} of {modules.length} modules completed
              </Badge>
            </div>

            {/* Enhanced Module Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        {currentModule?.id === 1 && <Headphones className="h-5 w-5" />}
                        {currentModule?.id === 2 && <Eye className="h-5 w-5" />}
                        {currentModule?.id === 3 && <PenTool className="h-5 w-5" />}
                        {currentModule?.id === 4 && <Mic className="h-5 w-5" />}
                        {currentModule?.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {currentModule?.badge && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge
                                  className="bg-blue-500 text-white cursor-pointer"
                                  onClick={() => currentModule.badge && shareToLinkedIn(currentModule.badge)}
                                >
                                  <Award className="h-3 w-3 mr-1" />
                                  {currentModule.badge}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Click to share on LinkedIn</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                        {currentModule?.pdfUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(currentModule.pdfUrl, "_blank")}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </Button>
                        )}
                        {currentModule?.audioUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(currentModule.audioUrl, "_blank")}
                          >
                            <Volume2 className="h-4 w-4 mr-1" />
                            Audio
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {currentModule?.timeLeft}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Estimated time to completion</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {currentModule?.lessons} lessons
                      </span>
                      {currentModule?.bandScore && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              Band: {currentModule.bandScore}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Your current band score for this skill</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{currentModuleProgress}%</span>
                      </div>
                      <Progress value={currentModuleProgress} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600">Video content for {currentModule?.title}</p>
                        <p className="text-sm text-gray-500 mt-2">Interactive lessons with native speakers</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{currentModule?.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      <Button onClick={() => setShowQuiz(true)} className="bg-blue-600 hover:bg-blue-700">
                        <Timer className="h-4 w-4 mr-1" />
                        Timed Practice
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Worksheets
                      </Button>
                      {currentModule?.audioUrl && (
                        <Button variant="outline">
                          <Headphones className="h-4 w-4 mr-1" />
                          Audio Practice
                        </Button>
                      )}
                      {currentModule?.badge && (
                        <Button
                          variant="outline"
                          onClick={() => currentModule.badge && downloadBadge(currentModule.badge)}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Badge
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Quiz Section */}
                {showQuiz && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Timed Practice Quiz</CardTitle>
                      <p className="text-sm text-gray-600">Simulate real IELTS test conditions</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {quizQuestions.map((question) => (
                        <div key={question.id} className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">{question.question}</h4>
                            {question.audioUrl && (
                              <Button size="sm" variant="outline">
                                <Volume2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          <div className="space-y-2">
                            {question.options.map((option, index) => (
                              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  value={index}
                                  onChange={() => setQuizAnswers({ ...quizAnswers, [question.id]: index })}
                                  className="text-blue-600"
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-2">
                        <Button onClick={() => setShowQuiz(false)} className="bg-blue-600 hover:bg-blue-700">
                          Submit Quiz
                        </Button>
                        <Button variant="outline" onClick={() => setShowQuiz(false)}>
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Enhanced Learning Track Timeline */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">8-Week Learning Track</CardTitle>
                    <p className="text-sm text-gray-600">Structured path to band score success</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {learningTrack.map((phase, index) => (
                      <div key={index} className="relative">
                        <button className="w-full text-left p-3 rounded-lg border hover:border-blue-500 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full ${phase.color}`} />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{phase.phase}</p>
                              <p className="text-xs text-gray-500">Week {phase.weeks}</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {phase.modules.map((module, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {module}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {phase.status === "completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                          </div>
                        </button>
                        {index < learningTrack.length - 1 && (
                          <div className="absolute left-5 top-full w-0.5 h-4 bg-gray-200" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Band Score Certificate */}
                <Card className="mt-6">
                  <CardContent className="p-6 text-center">
                    <Award className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">IELTS Readiness Certificate</h3>
                    <p className="text-sm text-gray-600 mb-4">Complete all modules to earn your certificate</p>
                    <Progress value={overallProgress} className="mb-2" />
                    <p className="text-xs text-gray-500 mb-4">{Math.round(overallProgress)}% Complete</p>
                    <div className="space-y-2">
                      <Button size="sm" className="w-full bg-blue-600" disabled={overallProgress < 100}>
                        <Download className="h-4 w-4 mr-1" />
                        Download Certificate
                      </Button>
                      <Button size="sm" variant="outline" className="w-full" disabled={overallProgress < 100}>
                        <Share2 className="h-4 w-4 mr-1" />
                        Share Achievement
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Earned Badges */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Skill Badges</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {modules
                      .filter((m) => m.completed && m.badge)
                      .map((module) => (
                        <div key={module.id} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-blue-500" />
                            <span className="text-sm font-medium">{module.badge}</span>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => module.badge && downloadBadge(module.badge)}
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => module.badge && shareToLinkedIn(module.badge)}
                            >
                              <Share2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      case "cohort":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Join Live IELTS Cohorts</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Practice with expert instructors and fellow test-takers across multiple timezones
              </p>
            </div>

            {/* Interactive Calendar */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      Upcoming Practice Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cohortSessions.map((session) => (
                        <Card key={session.id} className="border-l-4 border-l-blue-600">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold">{session.title}</h4>
                                <p className="text-sm text-gray-600">{session.instructor}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className="bg-blue-600 text-white">
                                  {session.attendees}/{session.maxAttendees}
                                </Badge>
                                {session.type === "listening" && <Headphones className="h-4 w-4 text-blue-600" />}
                                {session.type === "speaking" && <Mic className="h-4 w-4 text-blue-600" />}
                                {session.type === "writing" && <PenTool className="h-4 w-4 text-blue-600" />}
                                {session.type === "reading" && <Eye className="h-4 w-4 text-blue-600" />}
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-blue-600" />
                                {session.timezone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-blue-600" />
                                {session.time}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Join Session
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(session.whatsappLink, "_blank")}
                              >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                WhatsApp
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* IELTS Test Dates */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      Upcoming IELTS Test Dates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ieltsTestDates.map((testDate) => (
                        <Card key={testDate.id} className="border-l-4 border-l-green-500">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-semibold">{testDate.type}</h4>
                                <p className="text-sm text-gray-600">{testDate.location}</p>
                              </div>
                              <Badge className="bg-green-100 text-green-800">{testDate.fee}</Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                              <div>
                                <span className="text-gray-500">Test Date:</span>
                                <p className="font-medium">{testDate.date.toLocaleDateString()}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Registration Deadline:</span>
                                <p className="font-medium">{testDate.registrationDeadline.toLocaleDateString()}</p>
                              </div>
                            </div>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Register Now
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar View</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                    <Button className="w-full mt-4" variant="outline">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing Section with Currency Toggle */}
            <section className="py-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Choose Your IELTS Preparation Plan</h3>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className={currency === "USD" ? "font-semibold" : "text-gray-500"}>USD</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrency(currency === "USD" ? "NGN" : currency === "NGN" ? "GBP" : "USD")}
                    className="h-8 w-16"
                  >
                    <DollarSign className="h-4 w-4" />
                  </Button>
                  <span className={currency === "NGN" ? "font-semibold" : "text-gray-500"}>NGN</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrency(currency === "USD" ? "NGN" : currency === "NGN" ? "GBP" : "USD")}
                    className="h-8 w-16"
                  >
                    <DollarSign className="h-4 w-4" />
                  </Button>
                  <span className={currency === "GBP" ? "font-semibold" : "text-gray-500"}>GBP</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`relative ${tier.color} ${tier.popular ? "ring-2 ring-blue-600" : ""}`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      <div className="text-3xl font-bold text-blue-600">
                        {currency === "USD" && `$${tier.priceUSD}`}
                        {currency === "NGN" && `₦${tier.priceNGN.toLocaleString()}`}
                        {currency === "GBP" && `£${tier.priceGBP}`}
                        <span className="text-sm font-normal text-gray-500">/{tier.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${tier.buttonColor} text-white`}>
                        {tier.priceUSD === 0 ? "Start Free" : "Get Started"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )

      case "resources":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">IELTS Resources & Tools</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access comprehensive study materials, practice tools, and test information
              </p>
            </div>

            {/* Band Score Simulator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Band Score Simulator
                </CardTitle>
                <p className="text-sm text-gray-600">Calculate your overall IELTS band score</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Listening</label>
                      <Input
                        type="number"
                        min="0"
                        max="9"
                        step="0.5"
                        value={bandScoreInput.listening}
                        onChange={(e) =>
                          setBandScoreInput({ ...bandScoreInput, listening: Number.parseFloat(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Reading</label>
                      <Input
                        type="number"
                        min="0"
                        max="9"
                        step="0.5"
                        value={bandScoreInput.reading}
                        onChange={(e) =>
                          setBandScoreInput({ ...bandScoreInput, reading: Number.parseFloat(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Writing</label>
                      <Input
                        type="number"
                        min="0"
                        max="9"
                        step="0.5"
                        value={bandScoreInput.writing}
                        onChange={(e) =>
                          setBandScoreInput({ ...bandScoreInput, writing: Number.parseFloat(e.target.value) })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Speaking</label>
                      <Input
                        type="number"
                        min="0"
                        max="9"
                        step="0.5"
                        value={bandScoreInput.speaking}
                        onChange={(e) =>
                          setBandScoreInput({ ...bandScoreInput, speaking: Number.parseFloat(e.target.value) })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-600 mb-2">{calculateOverallBand()}</div>
                      <p className="text-lg text-gray-600">Overall Band Score</p>
                      <div className="mt-4">
                        <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">
                          {Number.parseFloat(calculateOverallBand()) >= 7.0
                            ? "Excellent!"
                            : Number.parseFloat(calculateOverallBand()) >= 6.5
                              ? "Good progress"
                              : "Keep practicing!"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-8">
              {resources.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => window.open(item.url, "_blank")}
                        >
                          <CardContent className="p-4 flex items-center gap-3">
                            <item.icon className="h-8 w-8 text-blue-600" />
                            <div>
                              <h4 className="font-medium">{item.name}</h4>
                              <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Video Tutorial */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Tutorial: IELTS Speaking Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">IELTS Speaking: How to Achieve Band 8+</p>
                    <p className="text-sm text-gray-500 mt-2">Expert tips from certified IELTS examiners</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "community":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">IELTS Learning Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with fellow test-takers, share experiences, and get support from the community
              </p>
            </div>

            {/* Community Feed */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Feed</CardTitle>
                    <Button className="ml-auto">
                      <MessageCircleMore className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {communityPosts.map((post) => (
                      <Card key={post.id} className="border-l-4 border-l-blue-600">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <Users className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">{post.author}</span>
                                <span className="text-sm text-gray-500">{post.timestamp}</span>
                              </div>
                              <p className="text-gray-700 mb-3">{post.content}</p>
                              <div className="flex flex-wrap gap-1 mb-3">
                                {post.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <button className="flex items-center gap-1 hover:text-blue-600">
                                  <ThumbsUp className="h-4 w-4" />
                                  {post.likes}
                                </button>
                                <button className="flex items-center gap-1 hover:text-blue-600">
                                  <Reply className="h-4 w-4" />
                                  {post.replies}
                                </button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">4,892</div>
                      <div className="text-sm text-gray-500">Active Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">7.8</div>
                      <div className="text-sm text-gray-500">Average Band Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">92%</div>
                      <div className="text-sm text-gray-500">Success Rate</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Study Groups</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Speaking Practice Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <PenTool className="h-4 w-4 mr-2" />
                      Writing Feedback Circle
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Headphones className="h-4 w-4 mr-2" />
                      Listening Club
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="h-4 w-4 mr-2" />
                      Reading Comprehension
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Coming Soon</h2>
            <p className="text-gray-600">This section is under development</p>
          </div>
        )
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Enhanced Top Progress Bar */}
        <div className="bg-white border-b sticky top-0 z-40">
          <div className="container px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-lg font-bold text-blue-600">IELTS Mastery Program</h1>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">Module {activeModule}</Badge>
                <Badge className="bg-blue-600 text-white">{Math.round(overallProgress)}% Complete</Badge>
              </div>
            </div>
            <Progress value={currentModuleProgress} className="h-2" />
          </div>
        </div>

        <div className="flex">
          {/* Enhanced Left Sidebar Navigation */}
          <div className="w-64 bg-white border-r min-h-screen sticky top-16">
            <div className="p-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      currentView === item.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                ))}
              </nav>

              {currentView === "curriculum" && (
                <div className="mt-8">
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-3">Skills</h3>
                  <div className="space-y-2">
                    {modules.map((module) => (
                      <TooltipProvider key={module.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => !module.locked && setActiveModule(module.id)}
                              className={`w-full text-left p-3 rounded-lg border transition-colors ${
                                activeModule === module.id
                                  ? "border-blue-600 bg-blue-50"
                                  : "border-gray-200 hover:border-gray-300"
                              } ${module.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                              disabled={module.locked}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-sm">{module.title}</span>
                                {module.completed ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : module.locked ? (
                                  <Lock className="h-4 w-4 text-gray-400" />
                                ) : null}
                              </div>
                              <div className="mb-2">
                                <Progress value={module.progress} className="h-1" />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Clock className="h-3 w-3" />
                                {module.timeLeft}
                                {module.bandScore && (
                                  <>
                                    <span>•</span>
                                    <span>Band: {module.bandScore}</span>
                                  </>
                                )}
                              </div>
                              {module.badge && (
                                <Badge className="mt-2 text-xs bg-blue-100 text-blue-800">{module.badge}</Badge>
                              )}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{module.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="container px-6 py-8">{renderContent()}</div>

            {/* Enhanced Footer */}
            <footer className="bg-blue-600 text-white py-12">
              <div className="container px-6">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                    <p className="text-blue-100 mb-4">
                      Get the latest IELTS tips, test dates, and exclusive study materials.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      />
                      <Button className="w-full bg-blue-500 hover:bg-blue-400">
                        <Mail className="h-4 w-4 mr-2" />
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open("https://chat.whatsapp.com/ielts-study-group", "_blank")}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp Study Group
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        <Users className="h-4 w-4 mr-2" />
                        Speaking Practice Partners
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Test Date Reminders
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex gap-4 mb-6">
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open("https://linkedin.com/company/dunamis-tutors", "_blank")}
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open("https://youtube.com/@dunamistutors", "_blank")}
                      >
                        <Youtube className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open("https://twitter.com/dunamistutors", "_blank")}
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm text-blue-100">
                      <p>📧 ielts@dunamistutors.com</p>
                      <p>📱 +234 902 080 3096</p>
                      <p>📍 Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <div className="space-y-2 text-sm">
                      <a href="#" className="block text-blue-100 hover:text-white">
                        Test Registration
                      </a>
                      <a href="#" className="block text-blue-100 hover:text-white">
                        Score Requirements
                      </a>
                      <a href="#" className="block text-blue-100 hover:text-white">
                        Study Abroad Guide
                      </a>
                      <a href="#" className="block text-blue-100 hover:text-white">
                        Immigration Support
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                  <p className="text-blue-100">
                    © 2024 Dunamis Tutors. All rights reserved. | Your Gateway to Global Opportunities
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
