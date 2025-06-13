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
  Wallet,
  TrendingUp,
  Gift,
  AlertCircle,
  Trophy,
  Building,
  Briefcase,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

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

interface Transaction {
  id: number
  type: "topup" | "spend" | "earn" | "decay"
  amount: number
  description: string
  date: Date
}

interface LeaderboardEntry {
  id: number
  name: string
  avatar: string
  points: number
  streak: number
  tier: "Bronze" | "Silver" | "Gold"
}

interface PricingTier {
  id: string
  name: string
  priceUSD: number
  priceNGN: number
  period: string
  features: string[]
  popular: boolean
  color: string
  buttonColor: string
}

export function AIPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN">("USD")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [eduCoins, setEduCoins] = useState(500)
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [topupAmount, setTopupAmount] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [streakDays, setStreakDays] = useState(3)
  const [showCareerGame, setShowCareerGame] = useState(false)
  const [userTier, setUserTier] = useState<"Free" | "Bronze" | "Silver" | "Gold">("Free")

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
      timeWall: 7,
      coinCost: 250,
    },
    {
      id: 6,
      title: "Advanced NLP Techniques",
      duration: "6 hours",
      completed: false,
      locked: true,
      lessons: 12,
      description: "Advanced natural language processing and transformer models",
      progress: 0,
      timeLeft: "Locked",
      badge: "NLP Specialist",
      pdfUrl: "/pdfs/advanced-nlp.pdf",
      timeWall: 14,
      coinCost: 350,
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

  const transactions: Transaction[] = [
    {
      id: 1,
      type: "topup",
      amount: 500,
      description: "Initial balance",
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      type: "earn",
      amount: 50,
      description: "Quiz completion bonus",
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    },
    {
      id: 3,
      type: "earn",
      amount: 25,
      description: "Daily streak bonus (3 days)",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: 4,
      type: "spend",
      amount: -100,
      description: "Unlocked resource: Advanced Prompt Engineering",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: 5,
      type: "decay",
      amount: -25,
      description: "Weekly coin decay (10%)",
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },
  ]

  const leaderboard: LeaderboardEntry[] = [
    {
      id: 1,
      name: "Chioma Eze",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      streak: 14,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Tunde Bakare",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 980,
      streak: 10,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Amina Ibrahim",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 875,
      streak: 7,
      tier: "Silver",
    },
    {
      id: 4,
      name: "David Okonkwo",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 720,
      streak: 5,
      tier: "Bronze",
    },
    {
      id: 5,
      name: "Sarah Adeyemi",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 650,
      streak: 4,
      tier: "Bronze",
    },
  ]

  const hallOfFame = [
    {
      week: "Last Week",
      winner: {
        name: "Chioma Eze",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "AI-Powered Customer Service Bot",
        score: 98,
      },
    },
    {
      week: "Two Weeks Ago",
      winner: {
        name: "Tunde Bakare",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Sentiment Analysis Dashboard",
        score: 95,
      },
    },
    {
      week: "Three Weeks Ago",
      winner: {
        name: "Amina Ibrahim",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Predictive Analytics Tool",
        score: 94,
      },
    },
  ]

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModule = modules.find((m) => m.id === activeModule)
  const currentModuleProgress = currentModule?.progress || 0

  const pricingTiers: PricingTier[] = [
    {
      id: "free",
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
      id: "bronze",
      name: "Bronze Tier",
      priceUSD: 49,
      priceNGN: 20000,
      period: "Monthly",
      features: [
        "Access to all modules",
        "Community forum access",
        "All quizzes and assessments",
        "Basic certificate",
        "Email support",
        "Weekly group mentorship",
      ],
      popular: false,
      color: "border-amber-700",
      buttonColor: "bg-amber-700 hover:bg-amber-800",
    },
    {
      id: "silver",
      name: "Silver Tier",
      priceUSD: 89,
      priceNGN: 35000,
      period: "Monthly",
      features: [
        "Everything in Bronze",
        "Priority support",
        "1 monthly 1-on-1 mentorship",
        "Advanced certificate",
        "Job placement assistance",
        "Resume review",
        "500 EduCoins monthly",
      ],
      popular: true,
      color: "border-gray-400",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
    },
    {
      id: "gold",
      name: "Gold Tier",
      priceUSD: 129,
      priceNGN: 50000,
      period: "Monthly",
      features: [
        "Everything in Silver",
        "Weekly 1-on-1 mentorship",
        "Premium certificate",
        "Guaranteed job placement",
        "LinkedIn profile optimization",
        "Mock interviews",
        "1000 EduCoins monthly",
        "Lifetime access to updates",
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

  const careerGameItems = [
    {
      name: "Virtual Office",
      level: 1,
      maxLevel: 3,
      cost: 100,
      description: "Upgrade your virtual workspace for better productivity",
      benefits: ["Faster module completion", "+5% quiz score boost"],
    },
    {
      name: "Mentorship Access",
      level: 0,
      maxLevel: 2,
      cost: 200,
      description: "Unlock access to industry mentors",
      benefits: ["Weekly 1-on-1 sessions", "Career guidance"],
    },
    {
      name: "Learning Tools",
      level: 1,
      maxLevel: 3,
      cost: 150,
      description: "Enhance your learning with premium tools",
      benefits: ["Advanced tutorials", "Premium resources"],
    },
    {
      name: "Networking",
      level: 0,
      maxLevel: 2,
      cost: 175,
      description: "Expand your professional network",
      benefits: ["Industry connections", "Job referrals"],
    },
  ]

  const shareToLinkedIn = (badge: string) => {
    const text = `I just earned the ${badge} badge from Dunamis Tutors AI Bootcamp! 🚀 #AI #MachineLearning #TechEducation`
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href,
    )}&summary=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  const downloadBadge = (badge: string) => {
    // Simulate badge download
    const link = document.createElement("a")
    link.href = `/badges/${badge.toLowerCase().replace(/\s+/g, "-")}.png`
    link.download = `${badge}-badge.png`
    link.click()
  }

  const handleTopup = () => {
    const amount = Number.parseInt(topupAmount)
    if (!isNaN(amount) && amount > 0) {
      setEduCoins(eduCoins + amount)
      setShowWalletModal(false)
      setNotificationMessage(`Successfully added ${amount} EduCoins to your wallet!`)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  const unlockModule = (moduleId: number) => {
    const module = modules.find((m) => m.id === moduleId)
    if (module && module.coinCost && eduCoins >= module.coinCost) {
      setEduCoins(eduCoins - module.coinCost)
      // In a real app, we would update the module's locked status in the database
      setNotificationMessage(`Successfully unlocked ${module.title}!`)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    } else {
      setNotificationMessage("Not enough EduCoins to unlock this module!")
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  const upgradeCareerItem = (itemIndex: number) => {
    const item = careerGameItems[itemIndex]
    if (eduCoins >= item.cost) {
      setEduCoins(eduCoins - item.cost)
      // In a real app, we would update the item's level in the database
      setNotificationMessage(`Successfully upgraded ${item.name}!`)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    } else {
      setNotificationMessage("Not enough EduCoins to upgrade this item!")
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  const upgradeTier = (tierId: string) => {
    const tier = pricingTiers.find((t) => t.id === tierId)
    if (tier) {
      setUserTier(tier.name as "Free" | "Bronze" | "Silver" | "Gold")
      setNotificationMessage(`Successfully upgraded to ${tier.name}!`)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
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

            {/* EduCoin Gamification Highlight */}
            <Card className="border-2 border-dunamis-primary">
              <CardHeader className="bg-dunamis-primary text-white">
                <CardTitle className="text-center">EduCoin Gamified Learning</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Wallet className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Earn & Spend EduCoins</h3>
                    <p className="text-gray-600">Complete activities to earn coins and unlock premium content</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Climb the Leaderboard</h3>
                    <p className="text-gray-600">Compete with peers and earn a spot in our Hall of Fame</p>
                  </div>
                  <div className="text-center">
                    <Gift className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Unlock Rewards</h3>
                    <p className="text-gray-600">Earn badges, certificates, and real-world opportunities</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <Button onClick={() => setShowCareerGame(true)}>
                    <Briefcase className="h-4 w-4 mr-2" />
                    Career Game
                  </Button>
                  <Button variant="outline" onClick={() => setCurrentView("curriculum")}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard Preview */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Top Performers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboard.slice(0, 3).map((entry, index) => (
                      <div key={entry.id} className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0
                              ? "bg-yellow-500"
                              : index === 1
                                ? "bg-gray-400"
                                : index === 2
                                  ? "bg-amber-700"
                                  : "bg-gray-200"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <Avatar>
                          <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{entry.name}</p>
                          <p className="text-sm text-gray-500">{entry.points} points</p>
                        </div>
                        <Badge
                          className={`${
                            entry.tier === "Gold"
                              ? "bg-yellow-500"
                              : entry.tier === "Silver"
                                ? "bg-gray-400"
                                : "bg-amber-700"
                          } text-white`}
                        >
                          {entry.tier}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="w-full mt-2" onClick={() => setCurrentView("community")}>
                    View Full Leaderboard
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Hall of Fame
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hallOfFame.slice(0, 1).map((entry, index) => (
                      <div key={index} className="text-center">
                        <p className="text-sm text-gray-500 mb-2">{entry.week}</p>
                        <Avatar className="w-16 h-16 mx-auto mb-2">
                          <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h4 className="font-bold">{entry.winner.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{entry.winner.project}</p>
                        <Badge className="bg-yellow-500 text-white">Score: {entry.winner.score}/100</Badge>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="w-full mt-2" onClick={() => setCurrentView("community")}>
                    View All Winners
                  </Button>
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

            {/* Call to Action */}
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-dunamis-primary mb-4">Ready to Start Your AI Journey?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Choose the path that works best for you. Start with our free track or apply for the full bootcamp
                experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="outline">
                  Join Free Track
                </Button>
                <Button size="lg" className="bg-dunamis-primary hover:bg-dunamis-secondary">
                  Apply to Full Bootcamp
                </Button>
              </div>
            </div>
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
                          onClick={() => {
                            setShowQuiz(false)
                            setEduCoins(eduCoins + 50)
                            setNotificationMessage("Quiz completed! You earned 50 EduCoins!")
                            setShowNotification(true)
                            setTimeout(() => setShowNotification(false), 3000)
                          }}
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

                {/* Locked Module Unlock */}
                {currentModule?.locked && currentModule?.timeWall && currentModule?.coinCost && (
                  <Card className="mt-6 border-2 border-dunamis-primary">
                    <CardHeader className="bg-dunamis-primary/10">
                      <CardTitle className="flex items-center gap-2">
                        <Lock className="h-5 w-5" />
                        Unlock This Module
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="border rounded-lg p-4 text-center">
                          <Clock className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                          <h3 className="font-bold mb-1">Time Wall</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Wait {currentModule.timeWall} days to unlock this module for free
                          </p>
                          <p className="text-xs text-gray-500">
                            Unlocks on {new Date(Date.now() + currentModule.timeWall * 86400000).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="border-2 border-dunamis-primary rounded-lg p-4 text-center">
                          <Wallet className="h-10 w-10 text-dunamis-primary mx-auto mb-2" />
                          <h3 className="font-bold mb-1">Unlock Instantly</h3>
                          <p className="text-sm text-gray-600 mb-3">
                            Use {currentModule.coinCost} EduCoins to unlock now
                          </p>
                          <Button
                            onClick={() => unlockModule(currentModule.id)}
                            disabled={eduCoins < currentModule.coinCost}
                            className="bg-dunamis-primary hover:bg-dunamis-secondary"
                          >
                            Unlock Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div>
                {/* EduWallet Summary */}
                <Card className="mb-6 border-2 border-dunamis-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-dunamis-primary" />
                      Your EduWallet
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <p className="text-3xl font-bold text-dunamis-primary">{eduCoins}</p>
                      <p className="text-sm text-gray-500">EduCoins Available</p>
                    </div>
                    <div className="space-y-2">
                      <Button
                        className="w-full bg-dunamis-primary hover:bg-dunamis-secondary"
                        onClick={() => setShowWalletModal(true)}
                      >
                        <DollarSign className="h-4 w-4 mr-2" />
                        Top Up
                      </Button>
                      <Dialog open={showWalletModal} onOpenChange={setShowWalletModal}>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Top Up Your EduWallet</DialogTitle>
                            <DialogDescription>Add EduCoins to unlock premium content and features</DialogDescription>
                          </DialogHeader>
                          <Tabs defaultValue="ngn">
                            <TabsList className="grid w-full grid-cols-2">
                              <TabsTrigger value="ngn">Naira (₦)</TabsTrigger>
                              <TabsTrigger value="usd">USD ($)</TabsTrigger>
                            </TabsList>
                            <TabsContent value="ngn" className="space-y-4">
                              <div className="grid grid-cols-3 gap-2 my-4">
                                <Button
                                  variant="outline"
                                  onClick={() => setTopupAmount("500")}
                                  className={topupAmount === "500" ? "border-dunamis-primary" : ""}
                                >
                                  ₦500
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setTopupAmount("1000")}
                                  className={topupAmount === "1000" ? "border-dunamis-primary" : ""}
                                >
                                  ₦1,000
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setTopupAmount("2000")}
                                  className={topupAmount === "2000" ? "border-dunamis-primary" : ""}
                                >
                                  ₦2,000
                                </Button>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm">Or enter custom amount:</label>
                                <Input
                                  type="number"
                                  placeholder="Enter amount in Naira"
                                  value={topupAmount}
                                  onChange={(e) => setTopupAmount(e.target.value)}
                                />
                              </div>
                              <Button
                                className="w-full bg-dunamis-primary hover:bg-dunamis-secondary"
                                onClick={handleTopup}
                              >
                                Pay with Paystack
                              </Button>
                            </TabsContent>
                            <TabsContent value="usd" className="space-y-4">
                              <div className="grid grid-cols-3 gap-2 my-4">
                                <Button
                                  variant="outline"
                                  onClick={() => setTopupAmount("5")}
                                  className={topupAmount === "5" ? "border-dunamis-primary" : ""}
                                >
                                  $5
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setTopupAmount("10")}
                                  className={topupAmount === "10" ? "border-dunamis-primary" : ""}
                                >
                                  $10
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setTopupAmount("20")}
                                  className={topupAmount === "20" ? "border-dunamis-primary" : ""}
                                >
                                  $20
                                </Button>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm">Or enter custom amount:</label>
                                <Input
                                  type="number"
                                  placeholder="Enter amount in USD"
                                  value={topupAmount}
                                  onChange={(e) => setTopupAmount(e.target.value)}
                                />
                              </div>
                              <Button
                                className="w-full bg-dunamis-primary hover:bg-dunamis-secondary"
                                onClick={handleTopup}
                              >
                                Pay with Stripe
                              </Button>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>

                      <Button variant="outline" className="w-full" onClick={() => setShowWalletModal(true)}>
                        <Clock className="h-4 w-4 mr-2" />
                        Transaction History
                      </Button>
                    </div>

                    {/* Streak Bonus */}
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm flex items-center gap-1">
                          <Gift className="h-4 w-4 text-yellow-500" />
                          Daily Streak
                        </p>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                          {streakDays} days
                        </Badge>
                      </div>
                      <Progress value={(streakDays % 7) * (100 / 7)} className="h-1 mb-2" />
                      <p className="text-xs text-gray-500">Log in tomorrow to earn {10 + streakDays * 5} EduCoins!</p>
                    </div>

                    {/* Coin Decay Warning */}
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 text-red-600 mb-1">
                        <AlertCircle className="h-4 w-4" />
                        <p className="font-medium text-sm">Coin Decay Warning</p>
                      </div>
                      <p className="text-xs text-gray-600">
                        Unused EduCoins decay by 10% weekly. Next decay:{" "}
                        {new Date(Date.now() + 7 * 86400000).toLocaleDateString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Enhanced Learning Track Timeline */}
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
              <div className="grid md:grid-cols-4 gap-4">
                {pricingTiers.map((tier) => (
                  <Card
                    key={tier.id}
                    className={`relative ${tier.color} ${tier.popular ? "ring-2 ring-dunamis-primary" : ""}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-dunamis-primary text-white">Most Popular</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      <div className="text-3xl font-bold mt-2">
                        {currency === "USD" ? `$${tier.priceUSD}` : `₦${tier.priceNGN.toLocaleString()}`}
                        <span className="text-sm font-normal text-gray-500">/{tier.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${tier.buttonColor}`} onClick={() => upgradeTier(tier.id)}>
                        {tier.id === "free" ? "Start Free" : "Upgrade Now"}
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
                Access our comprehensive collection of AI learning materials
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg border hover:border-dunamis-primary hover:bg-gray-50 transition-colors"
                          >
                            <div className="bg-dunamis-primary/10 p-2 rounded-full">
                              <item.icon className="h-5 w-5 text-dunamis-primary" />
                            </div>
                            <span className="flex-1">{item.name}</span>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "about":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">About AI Mastery Bootcamp</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn how our globally competitive bootcamp is transforming careers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  At Dunamis Tutors, we're committed to democratizing AI education and making it accessible to students
                  across Nigeria and beyond. Our AI Mastery Bootcamp is designed to equip you with the skills needed to
                  thrive in the rapidly evolving field of artificial intelligence.
                </p>
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-700">
                  We believe in learning by doing. Our curriculum combines theoretical foundations with hands-on
                  projects, real-world applications, and mentorship from industry experts. The EduCoin gamified economy
                  adds an engaging layer to your learning journey, rewarding progress and fostering healthy competition.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Comprehensive Curriculum</p>
                      <p className="text-sm text-gray-600">From AI fundamentals to advanced deep learning techniques</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Global Cohort Experience</p>
                      <p className="text-sm text-gray-600">Learn alongside peers from Nigeria, UK, US, and beyond</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Industry Recognition</p>
                      <p className="text-sm text-gray-600">Earn certificates and badges valued by top employers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">EduCoin Gamified Economy</p>
                      <p className="text-sm text-gray-600">Earn and spend EduCoins to enhance your learning journey</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Career Support</p>
                      <p className="text-sm text-gray-600">
                        Job placement assistance, resume reviews, and interview prep
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Partners</h3>
                  <p className="text-gray-600">
                    We collaborate with leading tech companies to ensure our curriculum meets industry standards
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Instructors</h3>
                  <p className="text-gray-600">
                    Learn from experienced AI practitioners with backgrounds at top tech companies
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                  <p className="text-gray-600">Have questions? Reach out to our team for more information</p>
                  <Button className="mt-4 bg-dunamis-primary hover:bg-dunamis-secondary">Get in Touch</Button>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )

      case "community":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Community Hub</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Connect with fellow learners, share insights, and celebrate achievements
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircleMore className="h-5 w-5" />
                      Discussion Forum
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {communityPosts.map((post) => (
                      <div key={post.id} className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{post.author}</p>
                            <p className="text-xs text-gray-500">{post.timestamp}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{post.content}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {post.tags.map((tag, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4 text-sm text-gray-500">
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
                    ))}
                    <div className="flex gap-2">
                      <Input placeholder="Share your thoughts or questions..." />
                      <Button className="bg-dunamis-primary hover:bg-dunamis-secondary">Post</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Leaderboard */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      Leaderboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboard.map((entry, index) => (
                        <div key={entry.id} className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              index === 0
                                ? "bg-yellow-500"
                                : index === 1
                                  ? "bg-gray-400"
                                  : index === 2
                                    ? "bg-amber-700"
                                    : "bg-gray-200"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <Avatar>
                            <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">{entry.name}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-gray-500">{entry.points} points</p>
                              <Badge
                                className={`${
                                  entry.tier === "Gold"
                                    ? "bg-yellow-500"
                                    : entry.tier === "Silver"
                                      ? "bg-gray-400"
                                      : "bg-amber-700"
                                } text-white text-xs`}
                              >
                                {entry.tier}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-1">
                            <Gift className="h-3 w-3" />
                            {entry.streak}d
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Hall of Fame */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-500" />
                      Hall of Fame
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {hallOfFame.map((entry, index) => (
                        <div key={index} className="text-center">
                          <p className="text-sm text-gray-500 mb-2">{entry.week}</p>
                          <Avatar className="w-16 h-16 mx-auto mb-2">
                            <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <h4 className="font-bold">{entry.winner.name}</h4>
                          <p className="text-sm text-gray-600 mb-1">{entry.winner.project}</p>
                          <Badge className="bg-yellow-500 text-white">Score: {entry.winner.score}/100</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Peer Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>T</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Tayo</span> just upgraded to{" "}
                            <Badge className="bg-yellow-500 text-white">Gold Tier</Badge>
                          </p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Amina</span> earned the{" "}
                            <Badge variant="outline">Prompt Engineer</Badge> badge
                          </p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>D</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">David</span> is on a{" "}
                            <Badge className="bg-green-500 text-white">7-day streak</Badge>
                          </p>
                          <p className="text-xs text-gray-500">1 day ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-8">
      {/* Career Game Modal */}
      <Dialog open={showCareerGame} onOpenChange={setShowCareerGame}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Career Game</DialogTitle>
            <DialogDescription>Upgrade your virtual learning environment using EduCoins</DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            {careerGameItems.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">
                      Level {item.level}/{item.maxLevel}
                    </span>
                    <Badge variant="outline">{item.cost} EduCoins</Badge>
                  </div>
                  <Progress value={(item.level / item.maxLevel) * 100} className="h-2 mb-3" />
                  <div className="space-y-1 mb-4">
                    {item.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-dunamis-primary hover:bg-dunamis-secondary"
                    disabled={item.level >= item.maxLevel || eduCoins < item.cost}
                    onClick={() => upgradeCareerItem(index)}
                  >
                    {item.level >= item.maxLevel ? "Maxed Out" : "Upgrade"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Your EduWallet</p>
              <p className="text-2xl font-bold text-dunamis-primary">{eduCoins} EduCoins</p>
            </div>
            <Button onClick={() => setShowWalletModal(true)}>Top Up</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-dunamis-primary text-white p-4 rounded-lg shadow-lg z-50 max-w-md">
          {notificationMessage}
        </div>
      )}

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <div className="md:w-64 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                currentView === item.id ? "bg-dunamis-primary text-white" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}

          {/* EduWallet Mini Display */}
          <div className="mt-6 p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium flex items-center gap-1">
                <Wallet className="h-4 w-4 text-dunamis-primary" />
                EduWallet
              </p>
              <Badge variant="outline" className="cursor-pointer" onClick={() => setShowWalletModal(true)}>
                {eduCoins}
              </Badge>
            </div>
            <Button
              size="sm"
              className="w-full bg-dunamis-primary hover:bg-dunamis-secondary"
              onClick={() => setShowWalletModal(true)}
            >
              Manage
            </Button>
          </div>

          {/* User Tier */}
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Current Plan</p>
            <Badge
              className={`${
                userTier === "Gold"
                  ? "bg-yellow-500"
                  : userTier === "Silver"
                    ? "bg-gray-400"
                    : userTier === "Bronze"
                      ? "bg-amber-700"
                      : "bg-gray-600"
              } text-white`}
            >
              {userTier} Tier
            </Badge>
            <Button size="sm" variant="link" className="w-full mt-2 p-0" onClick={() => setCurrentView("cohort")}>
              Upgrade Plan
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  )
}
