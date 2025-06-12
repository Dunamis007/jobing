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
  TrendingUp,
  BarChart3,
  Megaphone,
  PenTool,
  Eye,
  MessageCircleMore,
  ThumbsUp,
  Reply,
  Search,
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

export function DigitalMarketingPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const modules: Module[] = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      duration: "2.5 hours",
      completed: true,
      locked: false,
      lessons: 6,
      description: "Introduction to digital marketing landscape, channels, and consumer behavior",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 92,
      badge: "Marketing Foundation",
      pdfUrl: "/pdfs/digital-marketing-fundamentals.pdf",
    },
    {
      id: 2,
      title: "SEO Basics",
      duration: "3 hours",
      completed: true,
      locked: false,
      lessons: 8,
      description: "Search engine optimization fundamentals, keyword research, and on-page SEO",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 88,
      badge: "SEO Specialist",
      pdfUrl: "/pdfs/seo-basics.pdf",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      duration: "3.5 hours",
      completed: false,
      locked: false,
      lessons: 9,
      description: "Platform-specific strategies, content planning, and community management",
      progress: 65,
      timeLeft: "1.2 hours left",
      badge: "Social Media Strategist",
      pdfUrl: "/pdfs/social-media-strategy.pdf",
    },
    {
      id: 4,
      title: "Email Marketing",
      duration: "2.5 hours",
      completed: false,
      locked: false,
      lessons: 7,
      description: "Email campaign design, automation, segmentation, and performance tracking",
      progress: 30,
      timeLeft: "1.8 hours left",
      badge: "Email Marketing Pro",
      pdfUrl: "/pdfs/email-marketing.pdf",
    },
    {
      id: 5,
      title: "Content Creation",
      duration: "4 hours",
      completed: false,
      locked: false,
      lessons: 10,
      description: "Visual content, copywriting, video marketing, and brand storytelling",
      progress: 15,
      timeLeft: "3.4 hours left",
      badge: "Content Creator",
      pdfUrl: "/pdfs/content-creation.pdf",
    },
    {
      id: 6,
      title: "Ad Campaigns & Analytics",
      duration: "3.5 hours",
      completed: false,
      locked: true,
      lessons: 9,
      description: "Paid advertising, campaign optimization, and data-driven decision making",
      progress: 0,
      timeLeft: "Locked",
      badge: "Analytics Expert",
      pdfUrl: "/pdfs/ad-campaigns-analytics.pdf",
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary goal of digital marketing?",
      options: [
        "To increase website traffic only",
        "To connect with target audience and drive profitable customer action",
        "To create viral content",
        "To reduce marketing costs",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which metric is most important for measuring SEO success?",
      options: ["Page views", "Organic traffic growth", "Social media followers", "Email subscribers"],
      correctAnswer: 1,
    },
  ]

  const cohortSessions: CohortSession[] = [
    {
      id: 1,
      title: "Digital Marketing Strategy Workshop",
      date: new Date(2024, 2, 18),
      time: "7:00 PM - 9:00 PM",
      timezone: "Nigeria (WAT)",
      instructor: "Sarah Adebayo",
      attendees: 24,
      maxAttendees: 30,
      whatsappLink: "https://chat.whatsapp.com/nigeria-marketing-cohort",
    },
    {
      id: 2,
      title: "SEO & Content Marketing Masterclass",
      date: new Date(2024, 2, 19),
      time: "8:00 PM - 10:00 PM",
      timezone: "UK (GMT)",
      instructor: "James Wilson",
      attendees: 18,
      maxAttendees: 25,
      whatsappLink: "https://chat.whatsapp.com/uk-marketing-cohort",
    },
    {
      id: 3,
      title: "Social Media & Paid Ads Deep Dive",
      date: new Date(2024, 2, 20),
      time: "9:00 PM - 11:00 PM",
      timezone: "US Eastern (EST)",
      instructor: "Maria Rodriguez",
      attendees: 21,
      maxAttendees: 28,
      whatsappLink: "https://chat.whatsapp.com/us-marketing-cohort",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Chioma Okwu",
      role: "Digital Marketing Manager",
      company: "Jumia",
      content:
        "This program transformed my career! I went from zero marketing knowledge to managing campaigns for one of Africa's largest e-commerce platforms.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Marketing Strategist Graduate",
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Growth Marketing Lead",
      company: "Flutterwave",
      content:
        "The hands-on approach and real campaign projects gave me the confidence to land my dream job in fintech marketing.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Analytics Expert",
    },
    {
      id: 3,
      name: "Aisha Mohammed",
      role: "Social Media Strategist",
      company: "Paystack",
      content:
        "The social media module alone was worth the entire course fee. Now I'm driving engagement for a unicorn startup!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Social Media Strategist",
    },
  ]

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: "Jennifer Adams",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Just launched my first Facebook ad campaign using the strategies from Module 6! Got a 3.2x ROAS in the first week. The targeting techniques are game-changing!",
      timestamp: "3 hours ago",
      likes: 18,
      replies: 7,
      tags: ["facebook-ads", "roas", "success-story"],
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Sharing my SEO case study - increased organic traffic by 150% in 3 months using the keyword research framework from Module 2. Happy to share the spreadsheet!",
      timestamp: "6 hours ago",
      likes: 32,
      replies: 12,
      tags: ["seo", "case-study", "organic-traffic"],
    },
    {
      id: 3,
      author: "Fatima Al-Hassan",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The email marketing automation I built following Module 4 is generating 25% of our monthly revenue. The segmentation strategies are incredibly powerful!",
      timestamp: "1 day ago",
      likes: 24,
      replies: 9,
      tags: ["email-marketing", "automation", "revenue"],
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
        "Access to 2 basic modules",
        "Community forum access",
        "Basic templates",
        "Certificate of participation",
        "Email support",
      ],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Marketing Bootcamp",
      priceUSD: 199,
      priceNGN: 299000,
      period: "Lifetime Access",
      features: [
        "All 6 core modules",
        "Live cohort sessions",
        "Marketing templates & tools",
        "Campaign project reviews",
        "Professional certificate",
        "Job placement support",
        "WhatsApp community",
        "Priority support",
      ],
      popular: true,
      color: "border-orange-500",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      name: "Accelerator Access",
      priceUSD: 299,
      priceNGN: 449000,
      period: "Premium + Live Coaching",
      features: [
        "Everything in Bootcamp",
        "1-on-1 marketing coaching",
        "Live campaign reviews",
        "Advanced analytics training",
        "Industry networking events",
        "Freelance client referrals",
        "Advanced certification",
        "Dedicated success manager",
      ],
      popular: false,
      color: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  const learningTrack = [
    {
      phase: "Foundation",
      weeks: "1-2",
      status: "completed",
      color: "bg-green-500",
      modules: ["Digital Marketing Fundamentals"],
    },
    {
      phase: "Traffic Growth",
      weeks: "3-5",
      status: "current",
      color: "bg-orange-500",
      modules: ["SEO Basics", "Content Creation"],
    },
    {
      phase: "Engagement & Content",
      weeks: "6-8",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Social Media Strategy", "Email Marketing"],
    },
    {
      phase: "Paid Ads",
      weeks: "9-10",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Ad Campaigns & Analytics"],
    },
    {
      phase: "Analytics & Reporting",
      weeks: "11-12",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Advanced Analytics"],
    },
    {
      phase: "Final Campaign Project",
      weeks: "13-14",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Capstone Campaign"],
    },
    { phase: "Certification", weeks: "15", status: "upcoming", color: "bg-gray-300", modules: ["Certificate Exam"] },
  ]

  const resources = [
    {
      category: "Marketing Tools",
      items: [
        { name: "Google Trends", url: "https://trends.google.com", icon: TrendingUp },
        { name: "Meta Ads Library", url: "https://www.facebook.com/ads/library", icon: Eye },
        { name: "Canva Design Studio", url: "https://canva.com", icon: PenTool },
      ],
    },
    {
      category: "Analytics Platforms",
      items: [
        { name: "Google Analytics", url: "https://analytics.google.com", icon: BarChart3 },
        { name: "SEMrush", url: "https://semrush.com", icon: Search },
        { name: "Hootsuite Analytics", url: "https://hootsuite.com", icon: Target },
      ],
    },
    {
      category: "Templates & Resources",
      items: [
        { name: "Marketing Calendar Template", url: "/templates/marketing-calendar.xlsx", icon: FileText },
        { name: "Campaign Planning Guide", url: "/pdfs/campaign-planning.pdf", icon: FileText },
        { name: "Social Media Templates", url: "/templates/social-media-pack.zip", icon: FileText },
      ],
    },
    {
      category: "Video Tutorials",
      items: [
        { name: "Facebook Ads Masterclass", url: "#", icon: Play },
        { name: "SEO Strategy Workshop", url: "#", icon: Play },
        { name: "Email Marketing Automation", url: "#", icon: Play },
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
    const text = `I just earned the ${badge} badge from Dunamis Tutors Digital Marketing Bootcamp! 🚀 #DigitalMarketing #Marketing #GrowthHacking`
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
              <h1 className="text-4xl font-bold text-orange-600 mb-4">Digital Marketing Mastery Bootcamp</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master digital marketing with our comprehensive bootcamp designed for modern marketers and entrepreneurs
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-orange-200">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Results-Driven Learning</h3>
                  <p className="text-gray-600">Learn by creating real campaigns that generate measurable results</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Live Marketing Cohorts</h3>
                  <p className="text-gray-600">Join live sessions with marketing experts across multiple timezones</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                  <p className="text-gray-600">Earn certificates recognized by leading marketing agencies and brands</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial Carousel */}
            <section className="py-8">
              <h2 className="text-2xl font-bold text-center text-orange-600 mb-8">Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="h-full border-orange-100">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-orange-600">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-orange-500 text-white text-xs">{testimonial.badge}</Badge>
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
              <h2 className="text-2xl font-bold text-orange-600">Digital Marketing Curriculum</h2>
              <Badge variant="secondary" className="text-sm">
                {modules.filter((m) => m.completed).length} of {modules.length} modules completed
              </Badge>
            </div>

            {/* Enhanced Module Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-orange-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Play className="h-5 w-5 text-orange-500" />
                        {currentModule?.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        {currentModule?.badge && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Badge
                                  className="bg-orange-500 text-white cursor-pointer"
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
                    <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Video content for {currentModule?.title}</p>
                        <p className="text-sm text-gray-500 mt-2">Interactive marketing tutorials and case studies</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{currentModule?.description}</p>
                    <div className="flex gap-2">
                      <Button onClick={() => setShowQuiz(true)} className="bg-orange-500 hover:bg-orange-600">
                        Take Quiz
                      </Button>
                      <Button variant="outline">Download Templates</Button>
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
                  <Card className="mt-6 border-orange-200">
                    <CardHeader>
                      <CardTitle>Module Quiz</CardTitle>
                      <p className="text-sm text-gray-600">Test your marketing knowledge and earn your badge</p>
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
                                  className="text-orange-500"
                                />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex gap-2">
                        <Button onClick={() => setShowQuiz(false)} className="bg-orange-500 hover:bg-orange-600">
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
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Interactive Learning Track</CardTitle>
                    <p className="text-sm text-gray-600">Click milestones to explore</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {learningTrack.map((phase, index) => (
                      <div key={index} className="relative">
                        <button className="w-full text-left p-3 rounded-lg border hover:border-orange-500 transition-colors">
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
                <Card className="mt-6 border-orange-200">
                  <CardContent className="p-6 text-center">
                    <Award className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Digital Marketing Strategist Certificate</h3>
                    <p className="text-sm text-gray-600 mb-4">Complete all modules to earn your certificate</p>
                    <Progress value={overallProgress} className="mb-2" />
                    <p className="text-xs text-gray-500 mb-4">{Math.round(overallProgress)}% Complete</p>
                    <div className="space-y-2">
                      <Button
                        size="sm"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        disabled={overallProgress < 100}
                      >
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
                <Card className="mt-6 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Earned Badges</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {modules
                      .filter((m) => m.completed && m.badge)
                      .map((module) => (
                        <div key={module.id} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-orange-500" />
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
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Join Global Marketing Cohorts</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn alongside marketing professionals with expert instructors across Nigeria, UK, and US Eastern
                timezones
              </p>
            </div>

            {/* Interactive Calendar */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-orange-500" />
                      Upcoming Marketing Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {cohortSessions.map((session) => (
                        <Card key={session.id} className="border-l-4 border-l-orange-500">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold">{session.title}</h4>
                                <p className="text-sm text-gray-600">{session.instructor}</p>
                              </div>
                              <Badge className="bg-orange-500 text-white">
                                {session.attendees}/{session.maxAttendees}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                              <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-orange-500" />
                                {session.timezone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-orange-500" />
                                {session.time}
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
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
                <Card className="border-orange-200">
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
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Choose Your Marketing Path</h3>
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
                    className={`relative ${tier.color} ${tier.popular ? "ring-2 ring-orange-500" : ""}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      <div className="text-3xl font-bold text-orange-600">
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
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Marketing Resources & Tools</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access professional marketing tools, templates, and resources to accelerate your campaigns
              </p>
            </div>

            <div className="grid gap-8">
              {resources.map((category, index) => (
                <Card key={index} className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-600">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="hover:shadow-md transition-shadow cursor-pointer border-orange-100 hover:border-orange-300"
                          onClick={() => window.open(item.url, "_blank")}
                        >
                          <CardContent className="p-4 flex items-center gap-3">
                            <item.icon className="h-8 w-8 text-orange-500" />
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

            {/* Embedded Tools Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle>Google Trends Embed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                      <p className="text-gray-600">Google Trends Integration</p>
                      <p className="text-sm text-gray-500 mt-2">Research trending keywords and topics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle>Canva Design Studio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PenTool className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                      <p className="text-gray-600">Canva Integration</p>
                      <p className="text-sm text-gray-500 mt-2">Create stunning marketing visuals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "community":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Marketing Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with fellow marketers, share campaigns, and get feedback from the community
              </p>
            </div>

            {/* Community Feed */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle>Community Feed</CardTitle>
                    <Button className="ml-auto bg-orange-500 hover:bg-orange-600">
                      <MessageCircleMore className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {communityPosts.map((post) => (
                      <Card key={post.id} className="border-l-4 border-l-orange-500">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                              <Users className="h-5 w-5 text-orange-500" />
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
                                <button className="flex items-center gap-1 hover:text-orange-500">
                                  <ThumbsUp className="h-4 w-4" />
                                  {post.likes}
                                </button>
                                <button className="flex items-center gap-1 hover:text-orange-500">
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
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle>Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">1,847</div>
                      <div className="text-sm text-gray-500">Active Marketers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">234</div>
                      <div className="text-sm text-gray-500">Campaigns Shared</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">92%</div>
                      <div className="text-sm text-gray-500">Success Rate</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6 border-orange-200">
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
                      Marketing Masterminds
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Megaphone className="h-4 w-4 mr-2" />
                      Campaign Gallery
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
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Coming Soon</h2>
            <p className="text-gray-600">This section is under development</p>
          </div>
        )
    }
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
        {/* Enhanced Top Progress Bar */}
        <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
          <div className="container px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-lg font-bold text-orange-600">Digital Marketing Mastery</h1>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">Module {activeModule}</Badge>
                <Badge className="bg-orange-500 text-white">{Math.round(overallProgress)}% Complete</Badge>
              </div>
            </div>
            <Progress value={currentModuleProgress} className="h-2" />
          </div>
        </div>

        <div className="flex">
          {/* Enhanced Left Sidebar Navigation */}
          <div className="w-64 bg-white border-r min-h-screen sticky top-16 shadow-sm">
            <div className="p-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      currentView === item.id ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-orange-50"
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
                                  ? "border-orange-500 bg-orange-50"
                                  : "border-gray-200 hover:border-orange-300"
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
                                <Badge className="mt-2 text-xs bg-orange-100 text-orange-800">{module.badge}</Badge>
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

            {/* Enhanced Marketing Footer */}
            <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
              <div className="container px-6">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Stay Ahead of Marketing Trends</h3>
                    <p className="text-orange-100 mb-4">
                      Get the latest marketing insights, campaign strategies, and exclusive content delivered to your
                      inbox.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-orange-200"
                      />
                      <Button className="w-full bg-white text-orange-600 hover:bg-orange-50">
                        <Mail className="h-4 w-4 mr-2" />
                        Subscribe to Marketing Tips
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Join Marketing Community</h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open("https://chat.whatsapp.com/dunamis-marketing-community", "_blank")}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp Marketers
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        <Users className="h-4 w-4 mr-2" />
                        Marketing Masterminds
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        Live Sessions Calendar
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Follow Our Marketing Journey</h3>
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
                    <div className="space-y-2 text-sm text-orange-100">
                      <p>📧 marketing@dunamistutors.com</p>
                      <p>📱 09020803096</p>
                      <p>📍 Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Access</h3>
                    <div className="space-y-2 text-sm">
                      <a href="#" className="block text-orange-100 hover:text-white">
                        Marketing Resources
                      </a>
                      <a href="#" className="block text-orange-100 hover:text-white">
                        Campaign Templates
                      </a>
                      <a href="#" className="block text-orange-100 hover:text-white">
                        Success Stories
                      </a>
                      <a href="#" className="block text-orange-100 hover:text-white">
                        Marketing Support
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                  <p className="text-orange-100">
                    © 2024 Dunamis Tutors. All rights reserved. | Powered by Marketing Excellence
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
