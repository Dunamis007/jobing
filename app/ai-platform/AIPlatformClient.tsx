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
  Code,
  Brain,
  Zap,
  MessageCircleMore,
  ThumbsUp,
  Reply,
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
  quizScore?: number
  badge?: string
  pdfUrl?: string
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

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  badge: string
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

export function AIPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const modules: Module[] = [
    {
      id: 1,
      title: "AI Fundamentals",
      duration: "2 hours",
      completed: true,
      locked: false,
      lessons: 5,
      description: "Introduction to artificial intelligence and machine learning concepts",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 95,
      badge: "AI Explorer",
      pdfUrl: "/pdfs/ai-fundamentals.pdf",
    },
    {
      id: 2,
      title: "Prompt Engineering",
      duration: "3 hours",
      completed: true,
      locked: false,
      lessons: 7,
      description: "Master the art of crafting effective prompts for AI models",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 88,
      badge: "Prompt Engineer",
      pdfUrl: "/pdfs/prompt-engineering.pdf",
    },
    {
      id: 3,
      title: "Machine Learning Pipeline",
      duration: "4 hours",
      completed: false,
      locked: false,
      lessons: 8,
      description: "Build end-to-end ML pipelines and data processing workflows",
      progress: 60,
      timeLeft: "1.5 hours left",
      badge: "Data Strategist",
      pdfUrl: "/pdfs/ml-pipeline.pdf",
    },
    {
      id: 4,
      title: "Deep Learning & Neural Networks",
      duration: "5 hours",
      completed: false,
      locked: false,
      lessons: 10,
      description: "Advanced neural network architectures and deep learning techniques",
      progress: 20,
      timeLeft: "4 hours left",
      badge: "Neural Network Architect",
      pdfUrl: "/pdfs/deep-learning.pdf",
    },
    {
      id: 5,
      title: "AI Ethics & Deployment",
      duration: "2 hours",
      completed: false,
      locked: true,
      lessons: 4,
      description: "Ethical AI development and production deployment strategies",
      progress: 0,
      timeLeft: "Locked",
      badge: "AI Ethics Champion",
      pdfUrl: "/pdfs/ai-ethics.pdf",
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary goal of artificial intelligence?",
      options: [
        "To replace human workers",
        "To simulate human intelligence in machines",
        "To create robots",
        "To process data faster",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which technique is most effective for prompt engineering?",
      options: ["Chain-of-thought prompting", "Random prompting", "Short prompts only", "Complex jargon"],
      correctAnswer: 0,
    },
  ]

  const cohortSessions: CohortSession[] = [
    {
      id: 1,
      title: "AI Fundamentals Workshop",
      date: new Date(2024, 2, 15),
      time: "6:00 PM - 8:00 PM",
      timezone: "Nigeria (WAT)",
      instructor: "Dr. Adebayo Ogundimu",
      attendees: 18,
      maxAttendees: 25,
      whatsappLink: "https://chat.whatsapp.com/nigeria-ai-cohort",
    },
    {
      id: 2,
      title: "Prompt Engineering Masterclass",
      date: new Date(2024, 2, 16),
      time: "7:00 PM - 9:00 PM",
      timezone: "UK (GMT)",
      instructor: "Sarah Mitchell",
      attendees: 22,
      maxAttendees: 30,
      whatsappLink: "https://chat.whatsapp.com/uk-ai-cohort",
    },
    {
      id: 3,
      title: "ML Pipeline Deep Dive",
      date: new Date(2024, 2, 17),
      time: "8:00 PM - 10:00 PM",
      timezone: "US Eastern (EST)",
      instructor: "Michael Chen",
      attendees: 15,
      maxAttendees: 20,
      whatsappLink: "https://chat.whatsapp.com/us-ai-cohort",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Amara Okafor",
      role: "AI Engineer",
      company: "Google",
      content:
        "This bootcamp transformed my career. The hands-on approach and expert mentorship helped me land my dream job at Google.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "AI Expert Graduate",
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Data Scientist",
      company: "Microsoft",
      content:
        "The curriculum is world-class. I went from beginner to building production AI systems in just 3 months.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Data Strategist",
    },
    {
      id: 3,
      name: "Fatima Al-Zahra",
      role: "ML Engineer",
      company: "OpenAI",
      content: "The prompt engineering module alone was worth the entire course fee. Now I'm working at OpenAI!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Prompt Engineer",
    },
  ]

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Just completed the Prompt Engineering module! The techniques for chain-of-thought prompting are game-changing. Anyone else working on the final project?",
      timestamp: "2 hours ago",
      likes: 12,
      replies: 5,
      tags: ["prompt-engineering", "project"],
    },
    {
      id: 2,
      author: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Sharing my ML pipeline project - built a sentiment analysis tool for customer reviews. Happy to share the code with anyone interested!",
      timestamp: "5 hours ago",
      likes: 24,
      replies: 8,
      tags: ["machine-learning", "project-share"],
    },
    {
      id: 3,
      author: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The live cohort session on neural networks was incredible. Dr. Chen's explanations made complex concepts so clear. Can't wait for the next one!",
      timestamp: "1 day ago",
      likes: 18,
      replies: 3,
      tags: ["cohort", "neural-networks"],
    },
  ]

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModule = modules.find((m) => m.id === activeModule)
  const currentModuleProgress = currentModule?.progress || 0

  const pricingTiers = [
    {
      name: "Free Track",
      priceUSD: 0,
      priceNGN: 0,
      period: "Forever",
      features: [
        "Access to 3 basic modules",
        "Community forum access",
        "Basic quizzes",
        "Certificate of participation",
        "Email support",
      ],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "AI Bootcamp",
      priceUSD: 399,
      priceNGN: 599000,
      period: "Lifetime Access",
      features: [
        "All 15 modules",
        "Live cohort sessions",
        "1-on-1 mentorship",
        "Industry projects",
        "Professional certificate",
        "Job placement support",
        "WhatsApp community",
        "Priority support",
      ],
      popular: true,
      color: "border-dunamis-primary",
      buttonColor: "bg-dunamis-primary hover:bg-dunamis-secondary",
    },
    {
      name: "AI Incubator",
      priceUSD: 799,
      priceNGN: 1199000,
      period: "Team License + Incubation",
      features: [
        "Everything in Bootcamp",
        "Startup incubation program",
        "Investor network access",
        "Custom AI solutions",
        "Advanced analytics",
        "White-label option",
        "Dedicated success manager",
        "Revenue sharing opportunities",
      ],
      popular: false,
      color: "border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ]

  const learningTrack = [
    { phase: "Foundation", weeks: "1-2", status: "completed", color: "bg-green-500", modules: ["AI Fundamentals"] },
    {
      phase: "Core Skills",
      weeks: "3-6",
      status: "current",
      color: "bg-dunamis-primary",
      modules: ["Prompt Engineering", "ML Pipeline"],
    },
    {
      phase: "Advanced Topics",
      weeks: "7-10",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Deep Learning", "Neural Networks"],
    },
    {
      phase: "Specialization",
      weeks: "11-12",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["AI Ethics", "Deployment"],
    },
    { phase: "Capstone Project", weeks: "13-14", status: "upcoming", color: "bg-gray-300", modules: ["Final Project"] },
    { phase: "Certification", weeks: "15", status: "upcoming", color: "bg-gray-300", modules: ["Certificate Exam"] },
  ]

  const resources = [
    {
      category: "Interactive Tools",
      items: [
        { name: "OpenAI Playground", url: "https://platform.openai.com/playground", icon: Brain },
        { name: "Google Colab", url: "https://colab.research.google.com", icon: Code },
        { name: "Hugging Face Spaces", url: "https://huggingface.co/spaces", icon: Zap },
      ],
    },
    {
      category: "Video Tutorials",
      items: [
        { name: "AI Fundamentals Series", url: "#", icon: Play },
        { name: "Prompt Engineering Masterclass", url: "#", icon: Play },
        { name: "ML Pipeline Workshop", url: "#", icon: Play },
      ],
    },
    {
      category: "Cheat Sheets & PDFs",
      items: [
        { name: "AI Terminology Guide", url: "/pdfs/ai-terminology.pdf", icon: FileText },
        { name: "Prompt Engineering Cheat Sheet", url: "/pdfs/prompt-cheatsheet.pdf", icon: FileText },
        { name: "ML Algorithms Quick Reference", url: "/pdfs/ml-algorithms.pdf", icon: FileText },
      ],
    },
    {
      category: "GitHub Repositories",
      items: [
        { name: "AI Project Templates", url: "https://github.com/dunamis-ai/templates", icon: Code },
        { name: "Prompt Engineering Examples", url: "https://github.com/dunamis-ai/prompts", icon: Code },
        { name: "ML Pipeline Boilerplate", url: "https://github.com/dunamis-ai/ml-pipeline", icon: Code },
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

  const shareToLinkedIn = (badge: string) => {
    const text = `I just earned the ${badge} badge from Dunamis Tutors AI Bootcamp! 🚀 #AI #MachineLearning #TechEducation`
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const downloadBadge = (badge: string) => {
    // Simulate badge download
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
              <h1 className="text-4xl font-bold text-dunamis-primary mb-4">Welcome to AI Mastery Bootcamp</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master artificial intelligence with our globally competitive bootcamp modeled after Google Digital
                Garage
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Personalized AI Learning</h3>
                  <p className="text-gray-600">AI-powered curriculum that adapts to your pace and learning style</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Live Cohorts</h3>
                  <p className="text-gray-600">Join live sessions across Nigeria, UK, and US timezones</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                  <p className="text-gray-600">Earn certificates and badges recognized by leading tech companies</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial Carousel */}
            <section className="py-8">
              <h2 className="text-2xl font-bold text-center text-dunamis-primary mb-8">Success Stories</h2>
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
                          <p className="font-semibold text-dunamis-primary">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-dunamis-accent text-white text-xs">{testimonial.badge}</Badge>
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
              <h2 className="text-2xl font-bold text-dunamis-primary">AI Curriculum</h2>
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
                        <Play className="h-5 w-5" />
                        {currentModule?.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {currentModule?.badge && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge
                                  className="bg-yellow-500 text-white cursor-pointer"
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
                      {currentModule?.quizScore && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="flex items-center gap-1">
                              <Target className="h-4 w-4" />
                              Quiz: {currentModule.quizScore}%
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Your quiz score for this module</p>
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
                        <Play className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                        <p className="text-gray-600">Video content for {currentModule?.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{currentModule?.description}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setShowQuiz(true)}
                        className="bg-dunamis-primary hover:bg-dunamis-secondary"
                      >
                        Take Quiz
                      </Button>
                      <Button variant="outline">Download Resources</Button>
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
                      <CardTitle>Module Quiz</CardTitle>
                      <p className="text-sm text-gray-600">Test your knowledge and earn your badge</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {quizQuestions.map((question) => (
                        <div key={question.id} className="space-y-3">
                          <h4 className="font-medium">{question.question}</h4>
                          <div className="space-y-2">
                            {question.options.map((option, index) => (
                              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  value={index}
                                  onChange={() => setQuizAnswers({ ...quizAnswers, [question.id]: index })}
                                  className="text-dunamis-primary"
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setShowQuiz(false)}
                          className="bg-dunamis-primary hover:bg-dunamis-secondary"
                        >
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
                    <CardTitle className="text-lg">Interactive Learning Track</CardTitle>
                    <p className="text-sm text-gray-600">Click milestones to explore</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {learningTrack.map((phase, index) => (
                      <div key={index} className="relative">
                        <button className="w-full text-left p-3 rounded-lg border hover:border-dunamis-primary transition-colors">
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

                {/* Enhanced Certification Badge */}
                <Card className="mt-6">
                  <CardContent className="p-6 text-center">
                    <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">AI Mastery Certificate</h3>
                    <p className="text-sm text-gray-600 mb-4">Complete all modules to earn your certificate</p>
                    <Progress value={overallProgress} className="mb-2" />
                    <p className="text-xs text-gray-500 mb-4">{Math.round(overallProgress)}% Complete</p>
                    <div className="space-y-2">
                      <Button size="sm" className="w-full" disabled={overallProgress < 100}>
                        <Download className="h-4 w-4 mr-1" />
                        Download Certificate
                      </Button>
                      <Button size="sm" variant="outline" className="w-full" disabled={overallProgress < 100}>
                        <Share2 className="h-4 w-4 mr-1" />
                        Share on LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Earned Badges */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Earned Badges</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {modules
                      .filter((m) => m.completed && m.badge)
                      .map((module) => (
                        <div key={module.id} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Join Global Live Cohorts</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn alongside peers with expert instructors across Nigeria, UK, and US Eastern timezones
              </p>
            </div>

            {/* Interactive Calendar */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cohortSessions.map((session) => (
                        <Card key={session.id} className="border-l-4 border-l-dunamis-primary">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold">{session.title}</h4>
                                <p className="text-sm text-gray-600">{session.instructor}</p>
                              </div>
                              <Badge className="bg-dunamis-primary text-white">
                                {session.attendees}/{session.maxAttendees}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-dunamis-primary" />
                                {session.timezone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-dunamis-primary" />
                                {session.time}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-dunamis-primary hover:bg-dunamis-secondary">
                                RSVP
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
                      Subscribe to Calendar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing Section with Currency Toggle */}
            <section className="py-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dunamis-primary mb-4">Choose Your Learning Path</h3>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className={currency === "USD" ? "font-semibold" : "text-gray-500"}>USD</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrency(currency === "USD" ? "NGN" : "USD")}
                    className="h-8 w-16"
                  >
                    <DollarSign className="h-4 w-4" />
                  </Button>
                  <span className={currency === "NGN" ? "font-semibold" : "text-gray-500"}>NGN</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingTiers.map((tier, index) => (
                  <Card
                    key={index}
                    className={`relative ${tier.color} ${tier.popular ? "ring-2 ring-dunamis-primary" : ""}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-dunamis-primary text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      <div className="text-3xl font-bold text-dunamis-primary">
                        {currency === "USD" ? `$${tier.priceUSD}` : `₦${tier.priceNGN.toLocaleString()}`}
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Learning Resources</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access curated tools, tutorials, and resources to accelerate your AI learning journey
              </p>
            </div>

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
                            <item.icon className="h-8 w-8 text-dunamis-primary" />
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

            {/* Embedded Video Section */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Tutorial</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                    <p className="text-gray-600">AI Fundamentals: Getting Started</p>
                    <p className="text-sm text-gray-500 mt-2">Introduction to artificial intelligence concepts</p>
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">AI Learning Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with fellow learners, share projects, and get help from the community
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
                      <Card key={post.id} className="border-l-4 border-l-dunamis-primary">
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
                                <button className="flex items-center gap-1 hover:text-dunamis-primary">
                                  <ThumbsUp className="h-4 w-4" />
                                  {post.likes}
                                </button>
                                <button className="flex items-center gap-1 hover:text-dunamis-primary">
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
                      <div className="text-2xl font-bold text-dunamis-primary">2,847</div>
                      <div className="text-sm text-gray-500">Active Learners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dunamis-primary">156</div>
                      <div className="text-sm text-gray-500">Projects Shared</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dunamis-primary">89%</div>
                      <div className="text-sm text-gray-500">Completion Rate</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp Groups
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Study Groups
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="h-4 w-4 mr-2" />
                      Project Gallery
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
            <h2 className="text-2xl font-bold text-dunamis-primary mb-4">Coming Soon</h2>
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
              <h1 className="text-lg font-bold text-dunamis-primary">AI Mastery Bootcamp</h1>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">Module {activeModule}</Badge>
                <Badge className="bg-dunamis-primary text-white">{Math.round(overallProgress)}% Complete</Badge>
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
                      currentView === item.id ? "bg-dunamis-primary text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </button>
                ))}
              </nav>

              {currentView === "curriculum" && (
                <div className="mt-8">
                  <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-3">Modules</h3>
                  <div className="space-y-2">
                    {modules.map((module) => (
                      <TooltipProvider key={module.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => !module.locked && setActiveModule(module.id)}
                              className={`w-full text-left p-3 rounded-lg border transition-colors ${
                                activeModule === module.id
                                  ? "border-dunamis-primary bg-dunamis-primary/5"
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
                                {module.quizScore && (
                                  <>
                                    <span>•</span>
                                    <span>Quiz: {module.quizScore}%</span>
                                  </>
                                )}
                              </div>
                              {module.badge && (
                                <Badge className="mt-2 text-xs bg-yellow-100 text-yellow-800">{module.badge}</Badge>
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
            <footer className="bg-dunamis-primary text-white py-12">
              <div className="container px-6">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
                    <p className="text-gray-300 mb-4">
                      Get the latest updates on AI trends, new courses, and exclusive content.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      />
                      <Button className="w-full bg-dunamis-accent hover:bg-dunamis-accent/90">
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
                        onClick={() => window.open("https://chat.whatsapp.com/dunamis-ai-community", "_blank")}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp Group
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        <Users className="h-4 w-4 mr-2" />
                        Discord Community
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Subscribe to Calendar
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
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>📧 dunamistutors@graduate.org</p>
                      <p>📱 09020803096</p>
                      <p>📍 Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <div className="space-y-2 text-sm">
                      <a href="#" className="block text-gray-300 hover:text-white">
                        About Us
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-white">
                        Privacy Policy
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-white">
                        Terms of Service
                      </a>
                      <a href="#" className="block text-gray-300 hover:text-white">
                        Support
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                  <p className="text-gray-300">
                    © 2024 Dunamis Tutors. All rights reserved. | Powered by AI Excellence
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
