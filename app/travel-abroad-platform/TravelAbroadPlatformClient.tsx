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
  GraduationCap,
  MessageCircleMore,
  ThumbsUp,
  Reply,
  FileCheck,
  Building,
  StampIcon as Passport,
  CreditCard,
  Phone,
  Video,
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
  checklistItems?: number
  countries?: string[]
}

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface WebinarSession {
  id: number
  title: string
  date: Date
  time: string
  timezone: string
  instructor: string
  attendees: number
  maxAttendees: number
  whatsappLink: string
  country: string
  topic: string
}

interface Testimonial {
  id: number
  name: string
  role: string
  university: string
  country: string
  content: string
  rating: number
  avatar: string
  badge: string
  beforeAfter: string
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
  country: string
}

export function TravelAbroadPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedCountry, setSelectedCountry] = useState("All Countries")

  const modules: Module[] = [
    {
      id: 1,
      title: "Study Abroad Basics",
      duration: "2 hours",
      completed: true,
      locked: false,
      lessons: 6,
      description: "Essential foundations for planning your international education journey",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 92,
      badge: "Study Abroad Explorer",
      pdfUrl: "/pdfs/study-abroad-basics.pdf",
      checklistItems: 8,
      countries: ["US", "UK", "Canada", "Germany"],
    },
    {
      id: 2,
      title: "Visa Application Process",
      duration: "3 hours",
      completed: true,
      locked: false,
      lessons: 8,
      description: "Step-by-step guidance through visa applications and embassy procedures",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 88,
      badge: "Visa Navigator",
      pdfUrl: "/pdfs/visa-application-guide.pdf",
      checklistItems: 15,
      countries: ["US", "UK", "Canada", "Germany"],
    },
    {
      id: 3,
      title: "Scholarships & Grants",
      duration: "2.5 hours",
      completed: false,
      locked: false,
      lessons: 7,
      description: "Find and apply for funding opportunities to support your education",
      progress: 65,
      timeLeft: "1 hour left",
      badge: "Funding Expert",
      pdfUrl: "/pdfs/scholarship-guide.pdf",
      checklistItems: 12,
      countries: ["US", "UK", "Canada", "Germany"],
    },
    {
      id: 4,
      title: "Accommodation & Housing",
      duration: "2 hours",
      completed: false,
      locked: false,
      lessons: 5,
      description: "Secure safe and affordable housing options in your destination country",
      progress: 30,
      timeLeft: "1.5 hours left",
      badge: "Housing Specialist",
      pdfUrl: "/pdfs/accommodation-guide.pdf",
      checklistItems: 10,
      countries: ["US", "UK", "Canada", "Germany"],
    },
    {
      id: 5,
      title: "Cultural Adjustment",
      duration: "1.5 hours",
      completed: false,
      locked: true,
      lessons: 4,
      description: "Prepare for cultural differences and build adaptation strategies",
      progress: 0,
      timeLeft: "Locked",
      badge: "Cultural Ambassador",
      pdfUrl: "/pdfs/cultural-adjustment.pdf",
      checklistItems: 6,
      countries: ["US", "UK", "Canada", "Germany"],
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the first step in planning to study abroad?",
      options: [
        "Apply for a visa",
        "Research universities and programs",
        "Book accommodation",
        "Learn the local language",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which document is typically NOT required for a student visa application?",
      options: ["Passport", "Bank statements", "Birth certificate", "High school diploma"],
      correctAnswer: 2,
    },
  ]

  const webinarSessions: WebinarSession[] = [
    {
      id: 1,
      title: "US University Applications Masterclass",
      date: new Date(2024, 2, 20),
      time: "7:00 PM - 9:00 PM",
      timezone: "Nigeria (WAT)",
      instructor: "Dr. Sarah Johnson",
      attendees: 45,
      maxAttendees: 100,
      whatsappLink: "https://chat.whatsapp.com/usa-study-group",
      country: "USA",
      topic: "Application Process",
    },
    {
      id: 2,
      title: "UK Student Visa Workshop",
      date: new Date(2024, 2, 22),
      time: "6:00 PM - 8:00 PM",
      timezone: "UK (GMT)",
      instructor: "Michael Thompson",
      attendees: 38,
      maxAttendees: 75,
      whatsappLink: "https://chat.whatsapp.com/uk-study-group",
      country: "UK",
      topic: "Visa Process",
    },
    {
      id: 3,
      title: "Canadian Immigration & Study Permits",
      date: new Date(2024, 2, 25),
      time: "8:00 PM - 10:00 PM",
      timezone: "Canada (EST)",
      instructor: "Emma Rodriguez",
      attendees: 32,
      maxAttendees: 60,
      whatsappLink: "https://chat.whatsapp.com/canada-study-group",
      country: "Canada",
      topic: "Immigration",
    },
    {
      id: 4,
      title: "German Universities & DAAD Scholarships",
      date: new Date(2024, 2, 28),
      time: "5:00 PM - 7:00 PM",
      timezone: "Germany (CET)",
      instructor: "Prof. Klaus Weber",
      attendees: 28,
      maxAttendees: 50,
      whatsappLink: "https://chat.whatsapp.com/germany-study-group",
      country: "Germany",
      topic: "Scholarships",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Adaora Nwankwo",
      role: "Master's Student",
      university: "Harvard University",
      country: "USA",
      content:
        "This platform guided me through every step of my journey to Harvard. The visa process seemed impossible until I found their step-by-step guides!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Global Explorer",
      beforeAfter: "From Lagos to Harvard",
    },
    {
      id: 2,
      name: "Kemi Oladele",
      role: "PhD Candidate",
      university: "Oxford University",
      country: "UK",
      content:
        "The scholarship module helped me secure a full funding for my PhD at Oxford. I couldn't have done it without their comprehensive guides.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Funding Expert",
      beforeAfter: "From Ibadan to Oxford",
    },
    {
      id: 3,
      name: "Chinedu Okoro",
      role: "Undergraduate",
      university: "University of Toronto",
      country: "Canada",
      content:
        "The cultural adjustment module prepared me so well for life in Canada. I felt confident from day one thanks to their practical advice.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Cultural Ambassador",
      beforeAfter: "From Enugu to Toronto",
    },
  ]

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: "Blessing Adebayo",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Just got my US student visa approved! 🎉 The embassy interview tips from the Visa Application module were spot on. Happy to share my experience with anyone preparing.",
      timestamp: "3 hours ago",
      likes: 28,
      replies: 12,
      tags: ["visa-success", "usa", "interview-tips"],
      country: "USA",
    },
    {
      id: 2,
      author: "David Okafor",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Sharing my scholarship application template that helped me get funding for my Master's in the UK. The Scholarships module framework really works!",
      timestamp: "1 day ago",
      likes: 45,
      replies: 18,
      tags: ["scholarship", "uk", "template-share"],
      country: "UK",
    },
    {
      id: 3,
      author: "Grace Eze",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Found amazing student accommodation in Toronto using the Housing module checklist. The safety tips and budget calculator were incredibly helpful!",
      timestamp: "2 days ago",
      likes: 22,
      replies: 8,
      tags: ["accommodation", "canada", "safety-tips"],
      country: "Canada",
    },
  ]

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModule = modules.find((m) => m.id === activeModule)
  const currentModuleProgress = currentModule?.progress || 0

  const pricingTiers = [
    {
      name: "Free Webinars",
      priceUSD: 0,
      priceNGN: 0,
      period: "Forever",
      features: [
        "Access to live webinars",
        "Basic country guides",
        "Community forum access",
        "Email newsletter",
        "Basic checklists",
      ],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Study Abroad Bootcamp",
      priceUSD: 69,
      priceNGN: 49000,
      period: "8-Week Program",
      features: [
        "All 5 comprehensive modules",
        "Country-specific guides (US, UK, Canada, Germany)",
        "Downloadable visa templates",
        "Embassy checklists",
        "Timeline planners",
        "WhatsApp country groups",
        "Global Explorer Badge",
        "Email support",
      ],
      popular: true,
      color: "border-dunamis-primary",
      buttonColor: "bg-dunamis-primary hover:bg-dunamis-secondary",
    },
    {
      name: "Premium Consultation",
      priceUSD: 139,
      priceNGN: 99000,
      period: "One-on-One Services",
      features: [
        "Everything in Bootcamp",
        "1-on-1 consultation sessions",
        "Personal application review",
        "Mock visa interviews",
        "University selection guidance",
        "Scholarship application support",
        "Priority WhatsApp support",
        "Success guarantee",
      ],
      popular: false,
      color: "border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ]

  const learningTrack = [
    {
      phase: "Pre-Application",
      weeks: "1-2",
      status: "completed",
      color: "bg-green-500",
      modules: ["Study Abroad Basics"],
    },
    {
      phase: "Document Preparation",
      weeks: "3-4",
      status: "current",
      color: "bg-dunamis-primary",
      modules: ["Visa Application", "Scholarships"],
    },
    {
      phase: "Interviews & Visa Filing",
      weeks: "5-6",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Visa Process", "Interview Prep"],
    },
    {
      phase: "Post-Arrival Support",
      weeks: "7-8",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Accommodation", "Cultural Adjustment"],
    },
  ]

  const resources = [
    {
      category: "Country-Specific Guides",
      items: [
        { name: "USA Study Guide", url: "/pdfs/usa-complete-guide.pdf", icon: FileText, flag: "🇺🇸" },
        { name: "UK Education System", url: "/pdfs/uk-education-guide.pdf", icon: FileText, flag: "🇬🇧" },
        { name: "Canada Immigration Guide", url: "/pdfs/canada-immigration.pdf", icon: FileText, flag: "🇨🇦" },
        { name: "Germany Study Opportunities", url: "/pdfs/germany-study-guide.pdf", icon: FileText, flag: "🇩🇪" },
      ],
    },
    {
      category: "Visa Templates & Checklists",
      items: [
        { name: "F-1 Visa Application Template", url: "/templates/f1-visa-template.pdf", icon: FileCheck },
        { name: "UK Tier 4 Checklist", url: "/templates/uk-tier4-checklist.pdf", icon: FileCheck },
        { name: "Canada Study Permit Guide", url: "/templates/canada-permit-guide.pdf", icon: FileCheck },
        { name: "Germany Student Visa Kit", url: "/templates/germany-visa-kit.pdf", icon: FileCheck },
      ],
    },
    {
      category: "Interactive Tools",
      items: [
        { name: "University Finder Tool", url: "#", icon: Building },
        { name: "Scholarship Database", url: "#", icon: CreditCard },
        { name: "Cost of Living Calculator", url: "#", icon: DollarSign },
        { name: "Timeline Planner", url: "#", icon: CalendarIcon },
      ],
    },
    {
      category: "Embassy Resources",
      items: [
        { name: "US Embassy Contacts", url: "/resources/us-embassy-contacts.pdf", icon: Phone },
        { name: "UK Visa Centers", url: "/resources/uk-visa-centers.pdf", icon: Phone },
        { name: "Canadian Consulates", url: "/resources/canada-consulates.pdf", icon: Phone },
        { name: "German Embassy Info", url: "/resources/germany-embassy.pdf", icon: Phone },
      ],
    },
  ]

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "webinars", label: "Live Webinars", icon: Video },
    { id: "resources", label: "Resources", icon: FileText },
    { id: "about", label: "About", icon: Info },
    { id: "community", label: "Community", icon: MessageCircle },
  ]

  const countries = ["All Countries", "USA", "UK", "Canada", "Germany"]

  const shareToLinkedIn = (badge: string) => {
    const text = `I just earned the ${badge} badge from Dunamis Tutors Travel Abroad Program! 🌍 Ready for my international education journey! #StudyAbroad #GlobalEducation #TravelAbroad`
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
              <h1 className="text-4xl font-bold text-dunamis-primary mb-4">Study Abroad Success Platform</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your complete guide to studying abroad - from application to arrival and beyond
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global University Access</h3>
                  <p className="text-gray-600">Connect with top universities across USA, UK, Canada, and Germany</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Passport className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Visa Success Guarantee</h3>
                  <p className="text-gray-600">Step-by-step visa guidance with 95% approval success rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Scholarship Support</h3>
                  <p className="text-gray-600">Access funding opportunities worth millions in scholarships</p>
                </CardContent>
              </Card>
            </div>

            {/* Success Statistics */}
            <section className="bg-dunamis-primary text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Our Success Stories</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">2,500+</div>
                  <div className="text-sm opacity-90">Students Placed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-90">Visa Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$50M+</div>
                  <div className="text-sm opacity-90">Scholarships Secured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">40+</div>
                  <div className="text-sm opacity-90">Partner Universities</div>
                </div>
              </div>
            </section>

            {/* Testimonial Carousel */}
            <section className="py-8">
              <h2 className="text-2xl font-bold text-center text-dunamis-primary mb-8">Student Success Stories</h2>
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
                          <GraduationCap className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-dunamis-primary">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role} at {testimonial.university}
                          </p>
                          <p className="text-xs text-gray-400">{testimonial.beforeAfter}</p>
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
              <h2 className="text-2xl font-bold text-dunamis-primary">Study Abroad Curriculum</h2>
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
                            Guide
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
                      <span className="flex items-center gap-1">
                        <FileCheck className="h-4 w-4" />
                        {currentModule?.checklistItems} checklist items
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
                        <p className="text-gray-600">Video guide for {currentModule?.title}</p>
                        <p className="text-sm text-gray-500 mt-2">Interactive content with country-specific examples</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{currentModule?.description}</p>

                    {/* Country Coverage */}
                    {currentModule?.countries && (
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-medium text-gray-600">Covers:</span>
                        {currentModule.countries.map((country) => (
                          <Badge key={country} variant="outline" className="text-xs">
                            {country === "US" && "🇺🇸"} {country === "UK" && "🇬🇧"}
                            {country === "Canada" && "🇨🇦"} {country === "Germany" && "🇩🇪"} {country}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        onClick={() => setShowQuiz(true)}
                        className="bg-dunamis-primary hover:bg-dunamis-secondary"
                      >
                        Take Assessment
                      </Button>
                      <Button variant="outline">Download Checklist</Button>
                      <Button variant="outline">Timeline Planner</Button>
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
                      <CardTitle>Module Assessment</CardTitle>
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
                          Submit Assessment
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
                    <CardTitle className="text-lg">8-Week Journey Timeline</CardTitle>
                    <p className="text-sm text-gray-600">Your path to studying abroad</p>
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
                    <h3 className="font-bold mb-2">Global Explorer Badge</h3>
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
                        Share Achievement
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

      case "webinars":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Live Study Abroad Webinars</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join expert-led sessions covering university applications, visa processes, and country-specific guidance
              </p>
            </div>

            {/* Country Filter */}
            <div className="flex justify-center">
              <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
                {countries.map((country) => (
                  <Button
                    key={country}
                    size="sm"
                    variant={selectedCountry === country ? "default" : "ghost"}
                    onClick={() => setSelectedCountry(country)}
                    className={selectedCountry === country ? "bg-dunamis-primary text-white" : ""}
                  >
                    {country === "USA" && "🇺🇸"} {country === "UK" && "🇬🇧"}
                    {country === "Canada" && "🇨🇦"} {country === "Germany" && "🇩🇪"} {country}
                  </Button>
                ))}
              </div>
            </div>

            {/* Interactive Calendar */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5" />
                      Upcoming Webinars
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {webinarSessions
                        .filter((session) => selectedCountry === "All Countries" || session.country === selectedCountry)
                        .map((session) => (
                          <Card key={session.id} className="border-l-4 border-l-dunamis-primary">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h4 className="font-semibold">{session.title}</h4>
                                  <p className="text-sm text-gray-600">{session.instructor}</p>
                                  <Badge variant="outline" className="mt-1 text-xs">
                                    {session.country === "USA" && "🇺🇸"} {session.country === "UK" && "🇬🇧"}
                                    {session.country === "Canada" && "🇨🇦"} {session.country === "Germany" && "🇩🇪"}
                                    {session.topic}
                                  </Badge>
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
                                  Register Free
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => window.open(session.whatsappLink, "_blank")}
                                >
                                  <MessageSquare className="h-4 w-4 mr-1" />
                                  Join Group
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
                      Add to Calendar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>WhatsApp Study Groups</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      🇺🇸 USA Study Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🇬🇧 UK Study Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🇨🇦 Canada Study Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🇩🇪 Germany Study Group
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pricing Section with Currency Toggle */}
            <section className="py-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dunamis-primary mb-4">Choose Your Study Abroad Path</h3>
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
                        {tier.priceUSD === 0 ? "Join Free" : "Get Started"}
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Study Abroad Resources</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access comprehensive guides, templates, and tools for your international education journey
              </p>
            </div>

            <div className="grid gap-8">
              {resources.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <Card
                          key={itemIndex}
                          className="hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => window.open(item.url, "_blank")}
                        >
                          <CardContent className="p-4 flex items-center gap-3">
                            <item.icon className="h-8 w-8 text-dunamis-primary" />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">
                                {"flag" in item && item.flag} {item.name}
                              </h4>
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

            {/* Featured Resource */}
            <Card>
              <CardHeader>
                <CardTitle>Featured: Complete University Application Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <CalendarIcon className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Timeline Planner</p>
                    <p className="text-sm text-gray-500 mt-2">Plan your entire study abroad journey month by month</p>
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Study Abroad Community</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with fellow students, share experiences, and get support from our global community
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
                      Share Update
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {communityPosts.map((post) => (
                      <Card key={post.id} className="border-l-4 border-l-dunamis-primary">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <GraduationCap className="h-5 w-5 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold">{post.author}</span>
                                <Badge variant="outline" className="text-xs">
                                  {post.country === "USA" && "🇺🇸"} {post.country === "UK" && "🇬🇧"}
                                  {post.country === "Canada" && "🇨🇦"} {post.country === "Germany" && "🇩🇪"}
                                  {post.country}
                                </Badge>
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
                      <div className="text-2xl font-bold text-dunamis-primary">2,500+</div>
                      <div className="text-sm text-gray-500">Students Placed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dunamis-primary">95%</div>
                      <div className="text-sm text-gray-500">Visa Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-dunamis-primary">40+</div>
                      <div className="text-sm text-gray-500">Partner Universities</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Country Groups</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      🇺🇸 USA Study Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🇬🇧 UK Study Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🇨🇦 Canada Study Group
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🇩🇪 Germany Study Group
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
              <h1 className="text-lg font-bold text-dunamis-primary">Study Abroad Success Platform</h1>
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
                      Get the latest updates on study abroad opportunities, visa changes, and scholarship deadlines.
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
                    <h3 className="text-xl font-bold mb-4">Country Groups</h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open("https://chat.whatsapp.com/usa-study-group", "_blank")}
                      >
                        🇺🇸 USA Study Group
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        🇬🇧 UK Study Group
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        🇨🇦 Canada Study Group
                      </Button>
                      <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                        🇩🇪 Germany Study Group
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
                    © 2024 Dunamis Tutors. All rights reserved. | Your Gateway to Global Education
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
