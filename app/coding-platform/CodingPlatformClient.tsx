"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Laptop,
  Briefcase,
  ThumbsUp,
  Reply,
  Terminal,
  Wallet,
  CoinsIcon,
  Gift,
  TrendingUp,
  AlertCircle,
  Trophy,
  Bell,
  X,
  ArrowUp,
  Flame,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

interface LeaderboardEntry {
  id: number
  name: string
  avatar: string
  points: number
  streak: number
  tier: "Bronze" | "Silver" | "Gold"
}

interface HallOfFameEntry {
  week: string
  winner: {
    name: string
    avatar: string
    project: string
    score: number
  }
}

interface CareerGameItem {
  id: string
  name: string
  level: number
  maxLevel: number
  cost: number
  description: string
  benefits: string[]
  icon: React.ElementType
}

interface PeerNotification {
  id: string
  type: "upgrade" | "achievement" | "streak"
  user: {
    name: string
    avatar: string
  }
  message: string
  timestamp: Date
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

export function CodingPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")
  const [currency, setCurrency] = useState<"USD" | "NGN">("NGN")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [eduCoins, setEduCoins] = useState(500)
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [showTransactionHistory, setShowTransactionHistory] = useState(false)
  const [topupAmount, setTopupAmount] = useState(1000)
  const [streakDays, setStreakDays] = useState(7)
  const [showCareerGame, setShowCareerGame] = useState(false)
  const [userTier, setUserTier] = useState<"Free" | "Bronze" | "Silver" | "Gold">("Free")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [currentNotification, setCurrentNotification] = useState<PeerNotification | null>(null)
  const [showStreakBonus, setShowStreakBonus] = useState(false)
  const [claimedBonus, setClaimedBonus] = useState(false)
  const [showCalendlyModal, setShowCalendlyModal] = useState(false)

  // Detect user location for currency
  useEffect(() => {
    // In a real app, this would be an API call to detect location
    // For demo purposes, we'll randomly set it
    const randomCountry = Math.random() > 0.5
    setCurrency(randomCountry ? "NGN" : "USD")
  }, [])

  // Simulate peer notifications
  useEffect(() => {
    const sampleNotifications: PeerNotification[] = [
      {
        id: "1",
        type: "upgrade",
        user: {
          name: "Tayo Adeleke",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        message: "just upgraded to Gold Tier!",
        timestamp: new Date(),
      },
      {
        id: "2",
        type: "achievement",
        user: {
          name: "Amina Ibrahim",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        message: "earned the 'Code Master' badge!",
        timestamp: new Date(),
      },
      {
        id: "3",
        type: "streak",
        user: {
          name: "Daniel Osei",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        message: "is on a 30-day learning streak!",
        timestamp: new Date(),
      },
    ]

    // Show notifications at random intervals
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * sampleNotifications.length)
      const notification = {
        ...sampleNotifications[randomIndex],
        id: `${Date.now()}`,
        timestamp: new Date(),
      }

      setCurrentNotification(notification)

      // Auto dismiss after 5 seconds
      setTimeout(() => {
        setCurrentNotification(null)
      }, 5000)
    }

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(showRandomNotification, 5000)

    // Show subsequent notifications every 15-30 seconds
    const intervalTimer = setInterval(() => {
      if (Math.random() > 0.5) {
        showRandomNotification()
      }
    }, 15000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(intervalTimer)
    }
  }, [])

  // Simulate streak bonus after page load
  useEffect(() => {
    if (streakDays % 7 === 0 && !claimedBonus) {
      setTimeout(() => {
        setShowStreakBonus(true)
      }, 3000)
    }
  }, [streakDays, claimedBonus])

  const modules: Module[] = [
    {
      id: 1,
      title: "Introduction to Programming",
      duration: "3 hours",
      completed: true,
      locked: false,
      lessons: 6,
      description: "Learn programming fundamentals with JavaScript and basic algorithms",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 92,
      badge: "Coding Fundamentals",
      pdfUrl: "/pdfs/intro-programming.pdf",
    },
    {
      id: 2,
      title: "Frontend Basics",
      duration: "5 hours",
      completed: true,
      locked: false,
      lessons: 8,
      description: "Master HTML, CSS, and JavaScript for responsive web design",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 85,
      badge: "Frontend Developer",
      pdfUrl: "/pdfs/frontend-basics.pdf",
    },
    {
      id: 3,
      title: "Backend Development",
      duration: "6 hours",
      completed: false,
      locked: false,
      lessons: 10,
      description: "Build server-side applications with Node.js, Express, and databases",
      progress: 60,
      timeLeft: "2.5 hours left",
      badge: "Backend Developer",
      pdfUrl: "/pdfs/backend-dev.pdf",
    },
    {
      id: 4,
      title: "Version Control & Git",
      duration: "3 hours",
      completed: false,
      locked: false,
      lessons: 5,
      description: "Master Git workflow, GitHub collaboration, and deployment",
      progress: 20,
      timeLeft: "2.5 hours left",
      badge: "Git Master",
      pdfUrl: "/pdfs/git-version-control.pdf",
    },
    {
      id: 5,
      title: "Build a Portfolio Project",
      duration: "8 hours",
      completed: false,
      locked: true,
      lessons: 12,
      description: "Create a full-stack application from scratch to showcase your skills",
      progress: 0,
      timeLeft: "Locked",
      badge: "Full-Stack Developer",
      pdfUrl: "/pdfs/portfolio-project.pdf",
      timeWall: 7,
      coinCost: 300,
    },
    {
      id: 6,
      title: "Advanced JavaScript Patterns",
      duration: "4 hours",
      completed: false,
      locked: true,
      lessons: 8,
      description: "Learn advanced JavaScript concepts, design patterns, and optimization techniques",
      progress: 0,
      timeLeft: "Locked",
      badge: "JS Ninja",
      pdfUrl: "/pdfs/advanced-js.pdf",
      timeWall: 14,
      coinCost: 500,
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["String", "Boolean", "Integer", "Object"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "Which CSS property is used to control the spacing between elements?",
      options: ["spacing", "margin", "padding", "gap"],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "What is the correct way to create a function in JavaScript?",
      options: ["function = myFunction()", "function myFunction()", "create myFunction()", "new function myFunction()"],
      correctAnswer: 1,
    },
  ]

  const cohortSessions: CohortSession[] = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      date: new Date(2024, 2, 18),
      time: "6:00 PM - 8:00 PM",
      timezone: "Nigeria (WAT)",
      instructor: "Emmanuel Okonkwo",
      attendees: 16,
      maxAttendees: 25,
      whatsappLink: "https://chat.whatsapp.com/nigeria-coding-cohort",
    },
    {
      id: 2,
      title: "React & Modern JavaScript",
      date: new Date(2024, 2, 19),
      time: "7:00 PM - 9:00 PM",
      timezone: "UK (GMT)",
      instructor: "Jessica Williams",
      attendees: 20,
      maxAttendees: 30,
      whatsappLink: "https://chat.whatsapp.com/uk-coding-cohort",
    },
    {
      id: 3,
      title: "Backend with Node.js",
      date: new Date(2024, 2, 20),
      time: "8:00 PM - 10:00 PM",
      timezone: "US Eastern (EST)",
      instructor: "David Rodriguez",
      attendees: 14,
      maxAttendees: 20,
      whatsappLink: "https://chat.whatsapp.com/us-coding-cohort",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Chioma Nwosu",
      role: "Frontend Developer",
      company: "Microsoft",
      content:
        "This coding bootcamp transformed my career. I went from zero coding knowledge to landing a job at Microsoft in just 4 months!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Full-Stack Graduate",
    },
    {
      id: 2,
      name: "Mark Johnson",
      role: "Software Engineer",
      company: "Paystack",
      content:
        "The project-based approach was exactly what I needed. I built a real portfolio that impressed employers and got multiple job offers.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Backend Developer",
    },
    {
      id: 3,
      name: "Aisha Mohammed",
      role: "Web Developer",
      company: "Flutterwave",
      content:
        "The mentorship was incredible. Having experienced developers review my code and guide me made all the difference in my learning journey.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "Frontend Developer",
    },
  ]

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: "Daniel Osei",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Just deployed my first React app to Vercel! The Frontend Basics module really helped me understand component architecture. Check it out: https://my-portfolio.vercel.app",
      timestamp: "3 hours ago",
      likes: 15,
      replies: 7,
      tags: ["react", "frontend", "project-showcase"],
    },
    {
      id: 2,
      author: "Sarah Kimani",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Struggling with MongoDB aggregation pipelines. Has anyone completed the Backend module exercise on data analytics? Could use some help!",
      timestamp: "6 hours ago",
      likes: 8,
      replies: 12,
      tags: ["mongodb", "backend", "help-needed"],
    },
    {
      id: 3,
      author: "Michael Adebayo",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The Git workflow tutorial saved my project! Finally understanding branches and merge conflicts. Highly recommend the Version Control module.",
      timestamp: "1 day ago",
      likes: 22,
      replies: 5,
      tags: ["git", "version-control", "recommendation"],
    },
  ]

  const transactions = [
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
      description: "Unlocked resource: Advanced React Patterns",
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
      name: "Oluwaseun Adeyemi",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      streak: 14,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Tunde Olaoluwa",
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

  const hallOfFame: HallOfFameEntry[] = [
    {
      week: "Last Week",
      winner: {
        name: "Oluwaseun Adeyemi",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "E-commerce Platform with React & Node",
        score: 98,
      },
    },
    {
      week: "Two Weeks Ago",
      winner: {
        name: "Tunde Olaoluwa",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Real-time Chat Application",
        score: 95,
      },
    },
    {
      week: "Three Weeks Ago",
      winner: {
        name: "Amina Ibrahim",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Task Management Dashboard",
        score: 94,
      },
    },
  ]

  const careerGameItems: CareerGameItem[] = [
    {
      id: "workspace",
      name: "Virtual Workspace",
      level: 1,
      maxLevel: 3,
      cost: 200,
      description: "Upgrade your virtual coding environment for better productivity",
      benefits: ["Faster module completion", "+5% quiz score boost", "Premium code editor"],
      icon: Laptop,
    },
    {
      id: "mentorship",
      name: "Mentorship Access",
      level: 0,
      maxLevel: 3,
      cost: 300,
      description: "Unlock access to industry mentors",
      benefits: ["Weekly group sessions", "Code reviews", "Career guidance"],
      icon: Users,
    },
    {
      id: "resources",
      name: "Learning Resources",
      level: 1,
      maxLevel: 3,
      cost: 150,
      description: "Enhance your learning with premium tools and content",
      benefits: ["Advanced tutorials", "Premium templates", "Industry case studies"],
      icon: BookOpen,
    },
    {
      id: "networking",
      name: "Industry Network",
      level: 0,
      maxLevel: 2,
      cost: 250,
      description: "Expand your professional network",
      benefits: ["Industry connections", "Job referrals", "Networking events"],
      icon: Briefcase,
    },
  ]

  const pricingTiers = [
    {
      id: "bronze",
      name: "Bronze Tier",
      priceUSD: 29,
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
      priceUSD: 49,
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
      priceUSD: 69,
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
    {
      phase: "Beginner",
      weeks: "1-2",
      status: "completed",
      color: "bg-green-500",
      modules: ["Introduction to Programming"],
    },
    {
      phase: "Core Web",
      weeks: "3-6",
      status: "current",
      color: "bg-dunamis-primary",
      modules: ["Frontend Basics", "Backend Development"],
    },
    {
      phase: "Backend & APIs",
      weeks: "7-10",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Backend Development", "APIs & Integration"],
    },
    {
      phase: "GitHub Project",
      weeks: "11-12",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Version Control & Git", "Collaborative Development"],
    },
    {
      phase: "Final Build Showcase",
      weeks: "13-14",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Build a Portfolio Project"],
    },
  ]

  const resources = [
    {
      category: "Code Playgrounds",
      items: [
        { name: "CodePen", url: "https://codepen.io", icon: Code },
        { name: "JSFiddle", url: "https://jsfiddle.net", icon: Code },
        { name: "Replit", url: "https://replit.com", icon: Terminal },
      ],
    },
    {
      category: "Video Tutorials",
      items: [
        { name: "HTML & CSS Basics", url: "#", icon: Play },
        { name: "JavaScript Fundamentals", url: "#", icon: Play },
        { name: "Node.js Crash Course", url: "#", icon: Play },
      ],
    },
    {
      category: "Cheat Sheets & PDFs",
      items: [
        { name: "HTML5 Tags Reference", url: "/pdfs/html5-cheatsheet.pdf", icon: FileText },
        { name: "CSS Flexbox & Grid", url: "/pdfs/css-layout.pdf", icon: FileText },
        { name: "Git Command Reference", url: "/pdfs/git-commands.pdf", icon: FileText },
      ],
    },
    {
      category: "GitHub Repositories",
      items: [
        { name: "Frontend Starter Templates", url: "https://github.com/dunamis-code/frontend-templates", icon: Code },
        { name: "Node.js Project Boilerplate", url: "https://github.com/dunamis-code/node-starter", icon: Code },
        {
          name: "Full-Stack Portfolio Examples",
          url: "https://github.com/dunamis-code/portfolio-examples",
          icon: Code,
        },
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

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModule = modules.find((m) => m.id === activeModule)
  const currentModuleProgress = currentModule?.progress || 0

  const shareToLinkedIn = (badge: string) => {
    const text = `I just earned the ${badge} badge from Dunamis Tutors Coding Bootcamp! 🚀 #WebDevelopment #Coding #TechEducation`
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

  const handleTopup = () => {
    // In a real app, this would integrate with Paystack
    setEduCoins(eduCoins + topupAmount)
    setShowWalletModal(false)
    setNotificationMessage(`Successfully added ${topupAmount} EduCoins to your wallet!`)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
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

  const upgradeCareerItem = (itemId: string) => {
    const item = careerGameItems.find((i) => i.id === itemId)
    if (item && eduCoins >= item.cost) {
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
      setUserTier(tier.name as "Bronze" | "Silver" | "Gold")
      setNotificationMessage(`Successfully upgraded to ${tier.name}!`)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  const claimStreakBonus = () => {
    const bonusAmount = streakDays >= 30 ? 500 : streakDays >= 14 ? 200 : streakDays >= 7 ? 100 : 50
    setEduCoins(eduCoins + bonusAmount)
    setClaimedBonus(true)
    setShowStreakBonus(false)
    setNotificationMessage(`Claimed ${bonusAmount} EduCoins for your ${streakDays}-day streak!`)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "upgrade":
        return <ArrowUp className="h-4 w-4 text-purple-500" />
      case "achievement":
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case "streak":
        return <Star className="h-4 w-4 text-orange-500" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "upgrade":
        return "bg-purple-50 border-purple-200"
      case "achievement":
        return "bg-yellow-50 border-yellow-200"
      case "streak":
        return "bg-orange-50 border-orange-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-dunamis-primary mb-4">Coding Bootcamp</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master full-stack web development with our comprehensive, project-based coding program
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Laptop className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Project-Based Learning</h3>
                  <p className="text-gray-600">Build real-world projects for your professional portfolio</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Expert Mentorship</h3>
                  <p className="text-gray-600">Learn from experienced developers across Nigeria and globally</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Job-Ready Skills</h3>
                  <p className="text-gray-600">Develop the exact skills employers are looking for in tech</p>
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
                          <AvatarImage src={entry.avatar || "/placeholder.svg"} alt={entry.name} />
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
                          <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
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
              <h2 className="text-2xl font-bold text-center text-dunamis-primary mb-8">Developer Success Stories</h2>
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
              <h2 className="text-2xl font-bold text-dunamis-primary mb-4">Ready to Start Your Coding Journey?</h2>
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
              <h2 className="text-2xl font-bold text-dunamis-primary">Coding Curriculum</h2>
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
                        <Code className="h-5 w-5" />
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
                        <p className="text-gray-600">Video tutorial for {currentModule?.title}</p>
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
                      <Button variant="outline">Code Examples</Button>
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
                      <p className="text-sm text-gray-600">Test your coding knowledge and earn your badge</p>
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
                <Card className="mb-6 border-2 border-yellow-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-yellow-500" />
                      EduWallet
                    </CardTitle>
                    <CardDescription>Your learning currency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-center">
                        <CoinsIcon className="h-6 w-6 text-yellow-500 mr-2" />
                        <span className="text-3xl font-bold">{eduCoins}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        ₦1 = 1 EduCoin
                      </Badge>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        className="flex-1 bg-dunamis-primary hover:bg-dunamis-secondary"
                        onClick={() => setShowWalletModal(true)}
                      >
                        Top Up
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setShowTransactionHistory(true)}
                      >
                        History
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
                    <CardTitle className="text-lg">Developer Learning Path</CardTitle>
                    <p className="text-sm text-gray-600">Your journey to becoming a full-stack developer</p>
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

                {/* Full-Stack Fundamentals Badge */}
                <Card className="mt-6">
                  <CardContent className="p-6 text-center">
                    <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Full-Stack Fundamentals Badge</h3>
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
                    <CardTitle className="text-lg">Developer Badges</CardTitle>
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Join Live Coding Cohorts</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn alongside peers with expert developers across Nigeria, UK, and US Eastern timezones
              </p>
            </div>

            {/* Interactive Calendar */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      Upcoming Coding Sessions
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
                              <Button
                                size="sm"
                                className="bg-dunamis-primary hover:bg-dunamis-secondary"
                                onClick={() => setShowCalendlyModal(true)}
                              >
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
                <h3 className="text-2xl font-bold text-dunamis-primary mb-2">Upgrade Your Learning Experience</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose the plan that best fits your learning goals and budget
                </p>
                <div className="flex items-center justify-center mt-4 gap-2">
                  <span className={currency === "USD" ? "font-bold" : ""}>USD</span>
                  <button
                    onClick={() => setCurrency(currency === "USD" ? "NGN" : "USD")}
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        currency === "NGN" ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className={currency === "NGN" ? "font-bold" : ""}>NGN</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingTiers.map((tier) => (
                  <Card key={tier.id} className={`relative ${tier.popular ? "border-2 " + tier.color : ""}`}>
                    {tier.popular && (
                      <div className="absolute top-0 right-0 bg-dunamis-primary text-white text-xs py-1 px-3 rounded-bl-lg rounded-tr-lg">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{tier.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">
                          {currency === "USD" ? "$" + tier.priceUSD : "₦" + tier.priceNGN.toLocaleString()}
                        </span>
                        <span className="text-gray-500">/{tier.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${tier.buttonColor}`} onClick={() => upgradeTier(tier.id)}>
                        Upgrade Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )

      case "resources":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dunamis-primary">Learning Resources</h2>

            <Tabs defaultValue="code-playgrounds" className="w-full">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="code-playgrounds">Code Playgrounds</TabsTrigger>
                <TabsTrigger value="video-tutorials">Video Tutorials</TabsTrigger>
                <TabsTrigger value="cheat-sheets">Cheat Sheets</TabsTrigger>
                <TabsTrigger value="github-repos">GitHub Repos</TabsTrigger>
              </TabsList>

              {resources.map((category, index) => (
                <TabsContent key={index} value={category.category.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-4 flex items-center gap-3">
                          <div className="bg-dunamis-primary/10 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-dunamis-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <Button
                              variant="link"
                              className="p-0 h-auto text-dunamis-primary"
                              onClick={() => window.open(item.url, "_blank")}
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Open Resource
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Notion Integration Teaser */}
            <Card className="border-2 border-dunamis-primary">
              <CardHeader className="bg-dunamis-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Premium Learning Resources
                </CardTitle>
                <CardDescription>Unlock advanced tutorials and resources with EduCoins</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Lock className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Advanced React Patterns</h4>
                      <p className="text-xs text-gray-500 mb-2">200 EduCoins</p>
                      <Button size="sm" className="w-full" disabled={eduCoins < 200}>
                        Unlock
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Lock className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Node.js Microservices</h4>
                      <p className="text-xs text-gray-500 mb-2">300 EduCoins</p>
                      <Button size="sm" className="w-full" disabled={eduCoins < 300}>
                        Unlock
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Lock className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Full-Stack Project Templates</h4>
                      <p className="text-xs text-gray-500 mb-2">250 EduCoins</p>
                      <Button size="sm" className="w-full" disabled={eduCoins < 250}>
                        Unlock
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "about":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-dunamis-primary">About Our Coding Program</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  At Dunamis Tutors, we're committed to making quality coding education accessible to students across
                  Nigeria and beyond. Our mission is to empower the next generation of African developers with the
                  skills they need to succeed in the global tech industry.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe in learning by doing, which is why our curriculum is project-based and focused on
                  real-world applications. Our students don't just learn to code; they build a portfolio of projects
                  that demonstrate their skills to potential employers.
                </p>
                <h3 className="text-xl font-bold mb-4 mt-8">Our Approach</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Project-based learning with real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Mentorship from experienced developers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Flexible learning paths for different career goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Gamified learning to keep students engaged and motivated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Job placement assistance for top performers</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                    <p className="text-gray-600">Watch our story</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Our Instructors</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Users className="h-10 w-10 text-gray-400" />
                      </div>
                      <h4 className="font-bold">Emmanuel Okonkwo</h4>
                      <p className="text-sm text-gray-600">Lead Instructor</p>
                      <p className="text-xs text-gray-500 mt-1">10+ years in web development</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Users className="h-10 w-10 text-gray-400" />
                      </div>
                      <h4 className="font-bold">Jessica Williams</h4>
                      <p className="text-sm text-gray-600">Frontend Specialist</p>
                      <p className="text-xs text-gray-500 mt-1">React & UI/UX expert</p>
                    </CardContent>
                  </Card>
                </div>
                <h3 className="text-xl font-bold mb-4 mt-6">Connect With Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" onClick={() => window.open("https://twitter.com", "_blank")}>
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.open("https://linkedin.com", "_blank")}>
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.open("https://youtube.com", "_blank")}>
                    <Youtube className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.open("mailto:info@dunamistutors.com")}>
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case "community":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-dunamis-primary">Developer Community</h2>
              <Button className="bg-dunamis-primary hover:bg-dunamis-secondary">
                <MessageCircle className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Leaderboard Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Weekly Leaderboard
                  </CardTitle>
                  <CardDescription>Top performers this week</CardDescription>
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
                          <AvatarImage src={entry.avatar || "/placeholder.svg"} alt={entry.name} />
                          <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{entry.name}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <span>{entry.points} points</span>
                            <span>•</span>
                            <span className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 mr-0.5" />
                              {entry.streak} day streak
                            </span>
                          </div>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    Hall of Fame
                  </CardTitle>
                  <CardDescription>Weekly project showcase winners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {hallOfFame.map((entry, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <p className="text-sm text-gray-500 mb-2">{entry.week}</p>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
                            <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-bold">{entry.winner.name}</h4>
                            <p className="text-sm text-gray-600">{entry.winner.project}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Badge className="bg-yellow-500 text-white text-xs">
                                Score: {entry.winner.score}/100
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Community Posts */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Community Posts</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Recent
                  </Button>
                  <Button variant="ghost" size="sm">
                    Popular
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {communityPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.timestamp}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{post.content}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1">
                          <Reply className="h-4 w-4" />
                          {post.replies}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Enhanced Header with EduWallet */}
      <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">Coding Bootcamp</h1>
          <p className="text-gray-600">Master full-stack development with EduCoins</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Streak Counter */}
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 rounded-lg border border-orange-200">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="font-bold text-orange-700">{streakDays}</span>
            <span className="text-sm text-orange-600">day streak</span>
          </div>

          {/* EduWallet */}
          <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-lg border-2 border-yellow-300">
            <Wallet className="h-5 w-5 text-yellow-600" />
            <div className="text-right">
              <div className="flex items-center gap-1">
                <CoinsIcon className="h-4 w-4 text-yellow-500" />
                <span className="font-bold text-lg">{eduCoins}</span>
              </div>
              <p className="text-xs text-gray-500">EduCoins</p>
            </div>
            <Button size="sm" onClick={() => setShowWalletModal(true)} className="bg-yellow-500 hover:bg-yellow-600">
              <DollarSign className="h-4 w-4" />
            </Button>
          </div>

          {/* Tier Badge */}
          <Badge
            className={`${
              userTier === "Gold"
                ? "bg-yellow-500"
                : userTier === "Silver"
                  ? "bg-gray-400"
                  : userTier === "Bronze"
                    ? "bg-amber-700"
                    : "bg-gray-500"
            } text-white px-3 py-1`}
          >
            {userTier} Developer
          </Badge>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-64 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === item.id ? "bg-dunamis-primary text-white" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}

          {/* EduWallet Button */}
          <button
            onClick={() => setShowWalletModal(true)}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg border-2 border-yellow-300 bg-yellow-50 hover:bg-yellow-100 transition-colors mt-4"
          >
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">EduWallet</span>
            </div>
            <div className="flex items-center">
              <CoinsIcon className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-bold">{eduCoins}</span>
            </div>
          </button>

          {/* Career Game Button */}
          <button
            onClick={() => setShowCareerGame(true)}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg border-2 border-dunamis-primary bg-dunamis-primary/10 hover:bg-dunamis-primary/20 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-dunamis-primary" />
              <span className="font-medium">Career Game</span>
            </div>
            <ArrowUp className="h-4 w-4 text-dunamis-primary" />
          </button>

          {/* User Tier Badge */}
          <div className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100 mt-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">Current Tier</span>
            </div>
            <Badge
              className={`${
                userTier === "Gold"
                  ? "bg-yellow-500"
                  : userTier === "Silver"
                    ? "bg-gray-400"
                    : userTier === "Bronze"
                      ? "bg-amber-700"
                      : "bg-gray-500"
              } text-white`}
            >
              {userTier}
            </Badge>
          </div>

          {/* Streak Counter */}
          <div className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-gray-700">Streak</span>
            </div>
            <Badge variant="outline" className="text-yellow-600 border-yellow-300">
              {streakDays} days
            </Badge>
          </div>
        </div>

        <div className="flex-1">{renderContent()}</div>
      </div>

      {/* EduWallet Modal */}
      <Dialog open={showWalletModal} onOpenChange={setShowWalletModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-yellow-500" />
              EduWallet
            </DialogTitle>
            <DialogDescription>Manage your learning currency</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CoinsIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-2xl font-bold">{eduCoins}</span>
              </div>
              <Badge variant="outline">Available Balance</Badge>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Top Up EduCoins</h4>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" onClick={() => setTopupAmount(500)}>
                  500
                </Button>
                <Button variant="outline" onClick={() => setTopupAmount(1000)}>
                  1,000
                </Button>
                <Button variant="outline" onClick={() => setTopupAmount(2000)}>
                  2,000
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Input
                  type="number"
                  value={topupAmount}
                  onChange={(e) => setTopupAmount(Number.parseInt(e.target.value) || 0)}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500">EduCoins</span>
              </div>
              <p className="text-sm text-gray-500">
                Cost: {currency === "USD" ? "$" + (topupAmount / 1000).toFixed(2) : "₦" + topupAmount.toLocaleString()}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Payment Method</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Credit Card
                </Button>
                <Button variant="outline" className="justify-start">
                  <Globe className="h-4 w-4 mr-2" />
                  PayStack
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowWalletModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleTopup} className="bg-dunamis-primary hover:bg-dunamis-secondary">
              Top Up Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Transaction History Modal */}
      <Dialog open={showTransactionHistory} onOpenChange={setShowTransactionHistory}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Transaction History</DialogTitle>
            <DialogDescription>Your EduCoin activity</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-2 border-b last:border-0">
                <div>
                  <p className="font-medium">
                    {transaction.type === "topup"
                      ? "Top Up"
                      : transaction.type === "earn"
                        ? "Earned"
                        : transaction.type === "spend"
                          ? "Spent"
                          : "Decay"}
                  </p>
                  <p className="text-xs text-gray-500">{transaction.description}</p>
                  <p className="text-xs text-gray-400">
                    {transaction.date.toLocaleDateString()} at {transaction.date.toLocaleTimeString()}
                  </p>
                </div>
                <span className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                  {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setShowTransactionHistory(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Career Game Modal */}
      <Dialog open={showCareerGame} onOpenChange={setShowCareerGame}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-dunamis-primary" />
              Developer Career Game
            </DialogTitle>
            <DialogDescription>Upgrade your virtual learning environment</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium">Your EduCoins</p>
              <div className="flex items-center">
                <CoinsIcon className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="font-bold">{eduCoins}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerGameItems.map((item) => (
                <Card key={item.id} className="border-2 border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-dunamis-primary/10 p-2 rounded-lg">
                        <item.icon className="h-6 w-6 text-dunamis-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500">Level {item.level}</span>
                          <span className="text-xs text-gray-400">/ {item.maxLevel}</span>
                        </div>
                      </div>
                    </div>

                    <Progress value={(item.level / item.maxLevel) * 100} className="h-1 mb-3" />

                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                    <div className="space-y-1 mb-4">
                      {item.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CoinsIcon className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-bold">{item.cost}</span>
                      </div>
                      <Button
                        size="sm"
                        disabled={item.level >= item.maxLevel || eduCoins < item.cost}
                        onClick={() => upgradeCareerItem(item.id)}
                        className="bg-dunamis-primary hover:bg-dunamis-secondary"
                      >
                        {item.level >= item.maxLevel ? "Maxed" : "Upgrade"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCareerGame(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Calendly Modal */}
      <Dialog open={showCalendlyModal} onOpenChange={setShowCalendlyModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Schedule Your Session</DialogTitle>
            <DialogDescription>Book a time with your instructor</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <CalendarIcon className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                <p className="text-gray-600">Calendly integration would appear here</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowCalendlyModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Streak Bonus Modal */}
      <Dialog open={showStreakBonus} onOpenChange={setShowStreakBonus}>
        <DialogContent className="sm:max-w-[400px] bg-yellow-50 border-2 border-yellow-300">
          <div className="py-6 text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Gift className="h-10 w-10 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Streak Bonus!</h2>
            <p className="text-gray-700 mb-4">
              Congratulations on your {streakDays}-day learning streak! Claim your bonus EduCoins now.
            </p>
            <Button onClick={claimStreakBonus} className="bg-yellow-600 hover:bg-yellow-700 text-white">
              <Star className="h-4 w-4 mr-2" />
              Claim Reward
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Toast Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-dunamis-primary max-w-sm z-50"
          >
            <div className="flex items-start gap-3">
              <Bell className="h-5 w-5 text-dunamis-primary shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium">{notificationMessage}</p>
              </div>
              <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Peer Notification */}
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className={`fixed top-20 right-4 p-4 rounded-lg shadow-lg border max-w-sm z-50 ${getBackgroundColor(
              currentNotification.type,
            )}`}
          >
            <div className="flex items-start gap-3">
              {getIcon(currentNotification.type)}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={currentNotification.user.avatar || "/placeholder.svg"}
                      alt={currentNotification.user.name}
                    />
                    <AvatarFallback>{currentNotification.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="font-medium text-sm">{currentNotification.user.name}</p>
                </div>
                <p className="text-sm text-gray-600">{currentNotification.message}</p>
              </div>
              <button onClick={() => setCurrentNotification(null)} className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
