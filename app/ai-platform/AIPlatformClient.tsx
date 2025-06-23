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
  Gift,
  AlertCircle,
  Trophy,
  Building,
  Briefcase,
  Lightbulb,
  DatabaseIcon,
  Cpu,
  Shield,
  Rocket,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Module {
  id: number
  title: string
  track: string
  weeks: string
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
  projects: string[]
  keyTopics: string[]
  trackIcon: any
  trackColor: string
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
  weeklyRank?: number
  badges?: string[]
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

interface CareerRPGItem {
  id: string
  name: string
  level: number
  maxLevel: number
  cost: number
  description: string
  realWorldBenefit: string
  icon: any
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
      title: "AI Literacy & Prompt Engineering",
      track: "Track 1",
      weeks: "Weeks 1-2",
      duration: "2 weeks",
      completed: true,
      locked: false,
      lessons: 8,
      description: "Master the fundamentals of AI and become proficient in prompt engineering with modern LLMs",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 95,
      badge: "AI Literacy Expert",
      pdfUrl: "/pdfs/ai-literacy.pdf",
      projects: [
        "Design a custom AI assistant with pre-built GPTs",
        "Generate marketing copy, ad visuals, and pitch decks",
      ],
      keyTopics: [
        "What is AI? Where is it used today?",
        "Prompt Engineering Basics – ChatGPT, Claude, Gemini",
        "Introduction to Generative AI (text, code, image, video)",
        "AI + Productivity: Research, Automation, Writing, Design",
        "Introduction to AI Ethics, Hallucination, Bias",
      ],
      trackIcon: Lightbulb,
      trackColor: "text-yellow-600",
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      track: "Track 2",
      weeks: "Weeks 3-6",
      duration: "4 weeks",
      completed: true,
      locked: false,
      lessons: 12,
      description: "Build a solid foundation in machine learning algorithms and practical applications",
      progress: 100,
      timeLeft: "Completed",
      quizScore: 88,
      badge: "ML Practitioner",
      pdfUrl: "/pdfs/ml-fundamentals.pdf",
      projects: ["Predict student dropout or customer churn", "Sales forecasting or house pricing with real datasets"],
      keyTopics: [
        "Supervised vs Unsupervised Learning",
        "Classification & Regression (Linear, Logistic)",
        "Decision Trees, Random Forests",
        "Model Evaluation (Accuracy, Precision, Recall)",
        "Feature Engineering, Overfitting",
      ],
      trackIcon: DatabaseIcon,
      trackColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Deep Learning & GenAI",
      track: "Track 3",
      weeks: "Weeks 7-10",
      duration: "4 weeks",
      completed: false,
      locked: false,
      lessons: 15,
      description: "Dive deep into neural networks, transformers, and generative AI technologies",
      progress: 60,
      timeLeft: "1.5 weeks left",
      badge: "Deep Learning Specialist",
      pdfUrl: "/pdfs/deep-learning.pdf",
      projects: [
        "Build an LLM-powered chatbot (using OpenAI or HuggingFace)",
        "Fine-tune Stable Diffusion for branded content generation",
      ],
      keyTopics: [
        "Neural Networks: Perceptron → CNN → RNN",
        "Transformers & Attention Mechanisms",
        "LLM Architecture Overview (GPT, LLaMA, Claude)",
        "Diffusion models, GANs (image/video generation)",
        "Risks: hallucination, misuse, deepfakes",
      ],
      trackIcon: Brain,
      trackColor: "text-purple-600",
    },
    {
      id: 4,
      title: "Edge AI, MLOps & Deployment",
      track: "Track 4",
      weeks: "Weeks 11-14",
      duration: "4 weeks",
      completed: false,
      locked: false,
      lessons: 14,
      description: "Learn to deploy and scale AI models in production environments",
      progress: 20,
      timeLeft: "3.2 weeks left",
      badge: "MLOps Engineer",
      pdfUrl: "/pdfs/mlops-deployment.pdf",
      projects: ["Build & deploy a sentiment classifier web app", "Optimize model to run on a Raspberry Pi"],
      keyTopics: [
        "What is MLOps? Data versioning, pipelines, CI/CD for ML",
        "Deploying models with FastAPI, Vercel, and Docker",
        "Using Cursor.dev for collaborative, AI-assisted coding",
        "Edge AI: TinyML, AI on Raspberry Pi, mobile models",
      ],
      trackIcon: Cpu,
      trackColor: "text-green-600",
    },
    {
      id: 5,
      title: "AI Product Development + Monetization",
      track: "Track 5",
      weeks: "Weeks 15-18",
      duration: "4 weeks",
      completed: false,
      locked: true,
      lessons: 16,
      description: "Transform AI knowledge into profitable products and business solutions",
      progress: 0,
      timeLeft: "Locked",
      badge: "AI Entrepreneur",
      pdfUrl: "/pdfs/ai-product-development.pdf",
      timeWall: 7,
      coinCost: 250,
      projects: ["Launch a GPT-powered product on Vercel", "Sell a custom model API on RapidAPI"],
      keyTopics: [
        "Problem discovery → AI framing",
        "User-centered AI product design",
        "No-code and low-code AI toolkits (Zapier, Peltarion, etc.)",
        "Monetization strategy: APIs, SaaS, marketplaces",
      ],
      trackIcon: Rocket,
      trackColor: "text-orange-600",
    },
    {
      id: 6,
      title: "AI for Good, Regulation & Leadership",
      track: "Track 6",
      weeks: "Weeks 19-20",
      duration: "2 weeks",
      completed: false,
      locked: true,
      lessons: 10,
      description: "Explore AI ethics, governance, and responsible leadership in the AI era",
      progress: 0,
      timeLeft: "Locked",
      badge: "AI Ethics Leader",
      pdfUrl: "/pdfs/ai-ethics-leadership.pdf",
      timeWall: 14,
      coinCost: 350,
      projects: [
        "Audit a public AI system for bias & privacy issues",
        "Write a public-facing AI ethics policy for your product",
      ],
      keyTopics: [
        "AI & Privacy, Surveillance, Deepfake Governance",
        "Responsible AI: Explainability, Fairness, Consent",
        "Open Source AI Ethics (vs proprietary China AI models)",
        "Becoming a global AI leader from an emerging economy",
      ],
      trackIcon: Shield,
      trackColor: "text-red-600",
    },
    {
      id: 7,
      title: "Capstone Project",
      track: "Capstone",
      weeks: "Weeks 21-24",
      duration: "4 weeks",
      completed: false,
      locked: true,
      lessons: 20,
      description: "Build and launch a complete AI product with ethical considerations and monetization plan",
      progress: 0,
      timeLeft: "Locked",
      badge: "AI Product Master",
      pdfUrl: "/pdfs/capstone-project.pdf",
      timeWall: 21,
      coinCost: 500,
      projects: [
        "Build a full-stack AI product including trained model, backend, and frontend",
        "Create ethical guidelines and monetization strategy",
        "Peer-reviewed code and public product launch",
      ],
      keyTopics: [
        "A trained model (NLP/CV)",
        "A backend (Python/FastAPI)",
        "Frontend (deployed with Vercel)",
        "Ethical + monetization plan",
        "Peer-reviewed code & public launch",
      ],
      trackIcon: Trophy,
      trackColor: "text-gold-600",
    },
  ]

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the primary advantage of prompt engineering in modern AI applications?",
      options: [
        "It replaces the need for training data",
        "It enables better control and customization of AI outputs",
        "It reduces computational costs",
        "It eliminates AI bias completely",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which technique is most effective for improving LLM responses?",
      options: ["Chain-of-thought prompting", "Random prompting", "Short prompts only", "Complex jargon"],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "What is a key difference between supervised and unsupervised learning?",
      options: [
        "Supervised learning uses labeled data",
        "Unsupervised learning is always more accurate",
        "Supervised learning doesn't need data",
        "They are the same thing",
      ],
      correctAnswer: 0,
    },
  ]

  const cohortSessions: CohortSession[] = [
    {
      id: 1,
      title: "AI Literacy & Prompt Engineering Workshop",
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
      title: "Machine Learning Fundamentals Deep Dive",
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
      title: "Deep Learning & GenAI Masterclass",
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
        "This bootcamp's comprehensive curriculum took me from AI novice to building production systems. The track-based approach and real projects made all the difference.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "AI Product Master",
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Data Scientist",
      company: "Microsoft",
      content:
        "The MLOps and deployment track was game-changing. I went from building models to actually shipping AI products that users love.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "MLOps Engineer",
    },
    {
      id: 3,
      name: "Fatima Al-Zahra",
      role: "AI Product Manager",
      company: "OpenAI",
      content:
        "The ethics and leadership track prepared me for real-world AI challenges. Now I'm leading responsible AI initiatives at OpenAI!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      badge: "AI Ethics Leader",
    },
  ]

  const communityPosts: CommunityPost[] = [
    {
      id: 1,
      author: "Alex Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Just completed Track 3 on Deep Learning! Building my first LLM-powered chatbot was incredible. The transformer architecture finally clicked for me. Anyone else working on the Stable Diffusion project?",
      timestamp: "2 hours ago",
      likes: 12,
      replies: 5,
      tags: ["deep-learning", "transformers", "project"],
    },
    {
      id: 2,
      author: "Priya Sharma",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Sharing my MLOps project - deployed a sentiment classifier that's now processing 10k+ requests daily! The FastAPI + Vercel combo from Track 4 is powerful. Happy to share the deployment guide!",
      timestamp: "5 hours ago",
      likes: 24,
      replies: 8,
      tags: ["mlops", "deployment", "project-share"],
    },
    {
      id: 3,
      author: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The AI Ethics module in Track 6 opened my eyes to responsible AI development. Working on auditing bias in facial recognition systems for my capstone project. This is the future of AI!",
      timestamp: "1 day ago",
      likes: 18,
      replies: 3,
      tags: ["ai-ethics", "capstone", "responsible-ai"],
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
      description: "Track 1 completion bonus",
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
      amount: -250,
      description: "Unlocked Track 5: AI Product Development",
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
        project: "AI-Powered Customer Service Bot with Ethical Guidelines",
        score: 98,
      },
    },
    {
      week: "Two Weeks Ago",
      winner: {
        name: "Tunde Bakare",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Edge AI Sentiment Analysis on Raspberry Pi",
        score: 95,
      },
    },
    {
      week: "Three Weeks Ago",
      winner: {
        name: "Amina Ibrahim",
        avatar: "/placeholder.svg?height=60&width=60",
        project: "Fine-tuned LLM for Nigerian Language Translation",
        score: 94,
      },
    },
  ]

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModule = modules.find((m) => m.id === activeModule)
  const currentModuleProgress = currentModule?.progress || 0

  const learningTrack = [
    {
      phase: "AI Literacy",
      weeks: "1-2",
      status: "completed",
      color: "bg-green-500",
      modules: ["Prompt Engineering", "Generative AI"],
    },
    {
      phase: "ML Fundamentals",
      weeks: "3-6",
      status: "completed",
      color: "bg-green-500",
      modules: ["Supervised Learning", "Model Evaluation"],
    },
    {
      phase: "Deep Learning & GenAI",
      weeks: "7-10",
      status: "current",
      color: "bg-dunamis-primary",
      modules: ["Neural Networks", "Transformers", "LLMs"],
    },
    {
      phase: "MLOps & Deployment",
      weeks: "11-14",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["CI/CD for ML", "Edge AI"],
    },
    {
      phase: "Product Development",
      weeks: "15-18",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["AI Products", "Monetization"],
    },
    {
      phase: "Ethics & Leadership",
      weeks: "19-20",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["AI Ethics", "Governance"],
    },
    {
      phase: "Capstone Project",
      weeks: "21-24",
      status: "upcoming",
      color: "bg-gray-300",
      modules: ["Full-Stack AI Product"],
    },
  ]

  const resources = [
    {
      category: "Interactive Tools",
      items: [
        { name: "OpenAI Playground", url: "https://platform.openai.com/playground", icon: Brain },
        { name: "Google Colab", url: "https://colab.research.google.com", icon: Code },
        { name: "Hugging Face Spaces", url: "https://huggingface.co/spaces", icon: Zap },
        { name: "Cursor.dev IDE", url: "https://cursor.dev", icon: Code },
      ],
    },
    {
      category: "Video Tutorials",
      items: [
        { name: "AI Literacy & Prompt Engineering Series", url: "#", icon: Play },
        { name: "Machine Learning Fundamentals", url: "#", icon: Play },
        { name: "Deep Learning & GenAI Workshop", url: "#", icon: Play },
        { name: "MLOps Deployment Masterclass", url: "#", icon: Play },
      ],
    },
    {
      category: "Cheat Sheets & PDFs",
      items: [
        { name: "Prompt Engineering Cheat Sheet", url: "/pdfs/prompt-cheatsheet.pdf", icon: FileText },
        { name: "ML Algorithms Quick Reference", url: "/pdfs/ml-algorithms.pdf", icon: FileText },
        { name: "Transformer Architecture Guide", url: "/pdfs/transformer-guide.pdf", icon: FileText },
        { name: "MLOps Best Practices", url: "/pdfs/mlops-practices.pdf", icon: FileText },
      ],
    },
    {
      category: "GitHub Repositories",
      items: [
        { name: "AI Project Templates", url: "https://github.com/dunamis-ai/templates", icon: Code },
        { name: "Prompt Engineering Examples", url: "https://github.com/dunamis-ai/prompts", icon: Code },
        { name: "ML Pipeline Boilerplate", url: "https://github.com/dunamis-ai/ml-pipeline", icon: Code },
        { name: "Capstone Project Starters", url: "https://github.com/dunamis-ai/capstone", icon: Code },
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
      name: "Virtual AI Lab",
      level: 1,
      maxLevel: 3,
      cost: 100,
      description: "Upgrade your virtual AI workspace with premium tools and resources",
      benefits: ["Access to premium AI models", "+10% project completion speed"],
    },
    {
      name: "Mentorship Access",
      level: 0,
      maxLevel: 2,
      cost: 200,
      description: "Unlock access to industry AI experts and researchers",
      benefits: ["Weekly 1-on-1 sessions", "Career guidance", "Project reviews"],
    },
    {
      name: "Advanced Learning Tools",
      level: 1,
      maxLevel: 3,
      cost: 150,
      description: "Enhance your learning with cutting-edge AI development tools",
      benefits: ["Cursor.dev Pro access", "Premium datasets", "Advanced tutorials"],
    },
    {
      name: "AI Community Network",
      level: 0,
      maxLevel: 2,
      cost: 175,
      description: "Expand your professional AI network globally",
      benefits: ["Industry connections", "Job referrals", "Collaboration opportunities"],
    },
  ]

  const pricingTiers: PricingTier[] = [
    {
      id: "free",
      name: "Free",
      priceUSD: 0,
      priceNGN: 0,
      period: "month",
      features: ["Access to basic AI literacy modules", "Community forum access", "Limited project support"],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-500 hover:bg-gray-700",
    },
    {
      id: "bronze",
      name: "Bronze",
      priceUSD: 19,
      priceNGN: 15000,
      period: "month",
      features: [
        "All free features",
        "Access to ML fundamentals modules",
        "Priority project support",
        "Weekly live Q&A sessions",
      ],
      popular: false,
      color: "border-amber-500",
      buttonColor: "bg-amber-500 hover:bg-amber-700",
    },
    {
      id: "silver",
      name: "Silver",
      priceUSD: 49,
      priceNGN: 40000,
      period: "month",
      features: [
        "All bronze features",
        "Access to deep learning & GenAI modules",
        "1-on-1 mentorship sessions",
        "Access to premium AI tools",
      ],
      popular: true,
      color: "border-gray-400",
      buttonColor: "bg-dunamis-primary hover:bg-dunamis-secondary",
    },
    {
      id: "gold",
      name: "Gold",
      priceUSD: 99,
      priceNGN: 80000,
      period: "month",
      features: [
        "All silver features",
        "Access to all modules",
        "Dedicated AI career coach",
        "Exclusive networking events",
      ],
      popular: false,
      color: "border-yellow-500",
      buttonColor: "bg-yellow-500 hover:bg-yellow-700",
    },
  ]

  const shareToLinkedIn = (badge: string) => {
    const text = `I just earned the ${badge} badge from Dunamis Tutors AI Bootcamp! 🚀 #AI #MachineLearning #TechEducation #AIEthics`
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
                Master artificial intelligence with our comprehensive 24-week program designed to compete globally
              </p>
            </div>

            {/* Program Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">6 Comprehensive Tracks</h3>
                  <p className="text-gray-600">From AI literacy to product development and ethics leadership</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Rocket className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Real-World Projects</h3>
                  <p className="text-gray-600">Build and deploy actual AI products that solve real problems</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ethics & Leadership</h3>
                  <p className="text-gray-600">Learn responsible AI development and global leadership</p>
                </CardContent>
              </Card>
            </div>

            {/* Track Overview */}
            <Card className="border-2 border-dunamis-primary">
              <CardHeader className="bg-dunamis-primary text-white">
                <CardTitle className="text-center">24-Week Comprehensive AI Program</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modules.slice(0, 6).map((module) => {
                    const IconComponent = module.trackIcon
                    return (
                      <div
                        key={module.id}
                        className="p-4 border rounded-lg hover:border-dunamis-primary transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className={`h-6 w-6 ${module.trackColor}`} />
                          <div>
                            <h4 className="font-bold text-sm">{module.track}</h4>
                            <p className="text-xs text-gray-500">{module.weeks}</p>
                          </div>
                        </div>
                        <h5 className="font-medium mb-1">{module.title}</h5>
                        <p className="text-xs text-gray-600 mb-2">{module.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {module.lessons} lessons
                        </Badge>
                      </div>
                    )
                  })}
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
                Join our comprehensive 24-week program and become a globally competitive AI professional
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
              <h2 className="text-2xl font-bold text-dunamis-primary">AI Mastery Curriculum</h2>
              <Badge variant="secondary" className="text-sm">
                {modules.filter((m) => m.completed).length} of {modules.length} tracks completed
              </Badge>
            </div>

            {/* Enhanced Module Grid */}
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3">
                <div className="grid gap-4">
                  {modules.map((module) => {
                    const IconComponent = module.trackIcon
                    return (
                      <Card
                        key={module.id}
                        className={`cursor-pointer transition-all ${
                          activeModule === module.id ? "border-dunamis-primary ring-2 ring-dunamis-primary/20" : ""
                        }`}
                        onClick={() => !module.locked && setActiveModule(module.id)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-lg bg-gray-100`}>
                                <IconComponent className={`h-6 w-6 ${module.trackColor}`} />
                              </div>
                              <div>
                                <CardTitle className="text-lg flex items-center gap-2">
                                  {module.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : module.locked ? (
                                    <Lock className="h-5 w-5 text-gray-400" />
                                  ) : (
                                    <BookOpen className="h-5 w-5 text-dunamis-primary" />
                                  )}
                                  {module.track}
                                </CardTitle>
                                <p className="text-sm text-gray-500">{module.weeks}</p>
                              </div>
                            </div>
                            {module.locked && module.timeWall !== undefined && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  unlockModule(module.id)
                                }}
                                disabled={eduCoins < (module.coinCost || 0)}
                              >
                                Unlock ({module.coinCost} coins)
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h3 className="font-bold mb-2">{module.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{module.description}</p>

                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
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
                              <Progress value={module.progress} className="h-2 mb-3" />
                            </>
                          )}

                          {/* Key Topics */}
                          <div className="mb-3">
                            <p className="text-xs font-medium text-gray-700 mb-1">Key Topics:</p>
                            <div className="flex flex-wrap gap-1">
                              {module.keyTopics.slice(0, 3).map((topic, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {topic.split(" ").slice(0, 2).join(" ")}
                                </Badge>
                              ))}
                              {module.keyTopics.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{module.keyTopics.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Projects */}
                          <div className="mb-3">
                            <p className="text-xs font-medium text-gray-700 mb-1">Projects:</p>
                            <div className="space-y-1">
                              {module.projects.map((project, idx) => (
                                <p key={idx} className="text-xs text-gray-600">
                                  • {project}
                                </p>
                              ))}
                            </div>
                          </div>

                          {module.quizScore !== undefined && (
                            <div className="flex items-center mb-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div className="flex items-center text-xs">
                                      <Target className="mr-1 h-3 w-3 text-orange-500" />
                                      Quiz Score: {module.quizScore}%
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>You scored {module.quizScore}% on this track's assessment</p>
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
                    )
                  })}
                </div>

                {/* Active Module Details */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      {currentModule?.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600">
                      {currentModule?.track} • {currentModule?.weeks}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{currentModule?.description}</p>

                    {/* Detailed Topics */}
                    <div>
                      <h4 className="font-medium mb-2">What You'll Learn:</h4>
                      <ul className="space-y-1">
                        {currentModule?.keyTopics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-medium mb-2">Hands-on Projects:</h4>
                      <ul className="space-y-1">
                        {currentModule?.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <Rocket className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button className="gap-2">
                        <Play className="h-4 w-4" />
                        Start Learning
                      </Button>
                      {currentModule?.pdfUrl && (
                        <Button variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          Download Materials
                        </Button>
                      )}
                      <Button variant="outline" onClick={() => setShowQuiz(true)} className="gap-2">
                        <Target className="h-4 w-4" />
                        Take Assessment
                      </Button>
                      {currentModule?.badge && (
                        <Button
                          variant="outline"
                          onClick={() => currentModule.badge && shareToLinkedIn(currentModule.badge)}
                          className="gap-2"
                        >
                          <Share2 className="h-4 w-4" />
                          Share Badge
                        </Button>
                      )}
                    </div>

                    {/* Quiz Section */}
                    {showQuiz && (
                      <Card className="mt-4 border-dashed">
                        <CardHeader>
                          <CardTitle className="text-lg">Track Assessment</CardTitle>
                          <p className="text-sm text-gray-600">Test your knowledge and earn your track badge</p>
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
                                setEduCoins(eduCoins + 100)
                                setNotificationMessage("Assessment completed! You earned 100 EduCoins!")
                                setShowNotification(true)
                                setTimeout(() => setShowNotification(false), 3000)
                              }}
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

                    {/* Locked Module Unlock */}
                    {currentModule?.locked && currentModule?.timeWall && currentModule?.coinCost && (
                      <Card className="mt-6 border-2 border-dunamis-primary">
                        <CardHeader className="bg-dunamis-primary/10">
                          <CardTitle className="flex items-center gap-2">
                            <Lock className="h-5 w-5" />
                            Unlock This Track
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="border rounded-lg p-4 text-center">
                              <Clock className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                              <h3 className="font-bold mb-1">Time Wall</h3>
                              <p className="text-sm text-gray-600 mb-3">
                                Wait {currentModule.timeWall} days to unlock this track for free
                              </p>
                              <p className="text-xs text-gray-500">
                                Unlocks on{" "}
                                {new Date(Date.now() + currentModule.timeWall * 86400000).toLocaleDateString()}
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
                  </CardContent>
                </Card>
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
                            <DialogDescription>Add EduCoins to unlock premium tracks and features</DialogDescription>
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
                    <CardTitle className="text-lg">24-Week Learning Journey</CardTitle>
                    <p className="text-sm text-gray-600">Click phases to explore details</p>
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
                    <p className="text-sm text-gray-600 mb-4">
                      Complete all 6 tracks + capstone to earn your certificate
                    </p>
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
                Access our comprehensive collection of AI learning materials and tools
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
                Learn how our globally competitive 24-week program is transforming careers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  At Dunamis Tutors, we're committed to democratizing AI education and making it accessible to students
                  across Nigeria and beyond. Our comprehensive 24-week AI Mastery Bootcamp is designed to equip you with
                  globally competitive skills in artificial intelligence.
                </p>
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <p className="text-gray-700">
                  We believe in learning by doing. Our track-based curriculum combines theoretical foundations with
                  hands-on projects, real-world applications, and mentorship from industry experts. The EduCoin gamified
                  economy adds an engaging layer to your learning journey.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">6 Comprehensive Tracks</p>
                      <p className="text-sm text-gray-600">
                        From AI literacy to ethics leadership and product development
                      </p>
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
                      <p className="font-medium">Real-World Projects</p>
                      <p className="text-sm text-gray-600">Build actual AI products and deploy them to production</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Ethics & Leadership Focus</p>
                      <p className="text-sm text-gray-600">Learn responsible AI development and global leadership</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Capstone Project</p>
                      <p className="text-sm text-gray-600">
                        Build and launch a complete AI product with ethical considerations
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
                    We collaborate with leading tech companies to ensure our curriculum meets global standards
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
                            <span className="font-medium">Tayo</span> just completed{" "}
                            <Badge className="bg-purple-500 text-white">Track 3: Deep Learning</Badge>
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
                            <Badge variant="outline">MLOps Engineer</Badge> badge
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
            <DialogDescription>Upgrade your virtual AI learning environment using EduCoins</DialogDescription>
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
