"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Play,
  Download,
  CheckCircle,
  Clock,
  Users,
  Trophy,
  Star,
  Calendar,
  Monitor,
  Target,
  Award,
  MessageCircle,
  Globe,
  Zap,
  BarChart3,
  FileText,
  Video,
  Calculator,
  Leaf,
  DollarSign,
  Newspaper,
  Microscope,
  MapPin,
  Palette,
  Languages,
  Building,
  Briefcase,
} from "lucide-react"

const modules = [
  {
    id: "use-of-english",
    title: "Use of English",
    description: "Master grammar, comprehension, and essay writing for JAMB",
    icon: Languages,
    duration: "8 hours",
    lessons: 24,
    progress: 0,
    color: "bg-blue-500",
    topics: ["Grammar & Usage", "Reading Comprehension", "Essay Writing", "Vocabulary Building"],
  },
  {
    id: "mathematics",
    title: "Mathematics",
    description: "Complete mathematics coverage for all JAMB requirements",
    icon: Calculator,
    duration: "12 hours",
    lessons: 36,
    progress: 0,
    color: "bg-green-500",
    topics: ["Algebra", "Geometry", "Trigonometry", "Statistics & Probability"],
  },
  {
    id: "biology",
    title: "Biology",
    description: "Comprehensive biology for medical and science courses",
    icon: Leaf,
    duration: "10 hours",
    lessons: 30,
    progress: 0,
    color: "bg-emerald-500",
    topics: ["Cell Biology", "Genetics", "Ecology", "Human Physiology"],
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description: "Essential chemistry concepts for science students",
    icon: Microscope,
    duration: "10 hours",
    lessons: 30,
    progress: 0,
    color: "bg-purple-500",
    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Chemical Bonding"],
  },
  {
    id: "physics",
    title: "Physics",
    description: "Physics fundamentals for engineering and science",
    icon: Zap,
    duration: "10 hours",
    lessons: 30,
    progress: 0,
    color: "bg-orange-500",
    topics: ["Mechanics", "Electricity", "Waves & Optics", "Modern Physics"],
  },
  {
    id: "economics",
    title: "Economics",
    description: "Economic principles for social science students",
    icon: DollarSign,
    duration: "8 hours",
    lessons: 24,
    progress: 0,
    color: "bg-yellow-500",
    topics: ["Microeconomics", "Macroeconomics", "Development Economics", "International Trade"],
  },
  {
    id: "current-affairs",
    title: "Current Affairs",
    description: "Stay updated with Nigerian and global current affairs",
    icon: Newspaper,
    duration: "6 hours",
    lessons: 18,
    progress: 0,
    color: "bg-red-500",
    topics: ["Nigerian Politics", "Global Events", "Sports & Entertainment", "Science & Technology"],
  },
  {
    id: "geography",
    title: "Geography",
    description: "Physical and human geography for JAMB",
    icon: MapPin,
    duration: "8 hours",
    lessons: 24,
    progress: 0,
    color: "bg-teal-500",
    topics: ["Physical Geography", "Human Geography", "Map Reading", "Environmental Issues"],
  },
  {
    id: "literature",
    title: "Literature in English",
    description: "Literary analysis and appreciation",
    icon: BookOpen,
    duration: "8 hours",
    lessons: 24,
    progress: 0,
    color: "bg-indigo-500",
    topics: ["Poetry Analysis", "Prose & Drama", "Literary Devices", "African Literature"],
  },
  {
    id: "government",
    title: "Government",
    description: "Nigerian government and political systems",
    icon: Building,
    duration: "8 hours",
    lessons: 24,
    progress: 0,
    color: "bg-cyan-500",
    topics: ["Nigerian Constitution", "Political Systems", "Public Administration", "International Relations"],
  },
  {
    id: "commerce",
    title: "Commerce",
    description: "Business and commercial studies",
    icon: Briefcase,
    duration: "8 hours",
    lessons: 24,
    progress: 0,
    color: "bg-pink-500",
    topics: ["Business Organization", "Marketing", "Banking & Finance", "International Trade"],
  },
  {
    id: "fine-arts",
    title: "Fine Arts",
    description: "Visual arts and creative expression",
    icon: Palette,
    duration: "6 hours",
    lessons: 18,
    progress: 0,
    color: "bg-rose-500",
    topics: ["Drawing & Painting", "Art History", "Design Principles", "Nigerian Art"],
  },
]

const learningTrack = [
  {
    week: 1,
    title: "Introduction & Syllabus Overview",
    description: "Get familiar with JAMB format, syllabus breakdown, and study strategies",
    status: "current",
    tasks: ["JAMB Registration Process", "Syllabus Analysis", "Study Plan Creation", "CBT Interface Tutorial"],
  },
  {
    week: 2,
    title: "Core Subject Mastery - Week 1",
    description: "Deep dive into Use of English and Mathematics fundamentals",
    status: "upcoming",
    tasks: ["English Grammar Basics", "Mathematical Foundations", "Practice Questions", "Weekly Assessment"],
  },
  {
    week: 3,
    title: "Core Subject Mastery - Week 2",
    description: "Focus on Science subjects and comprehension skills",
    status: "upcoming",
    tasks: ["Biology Fundamentals", "Chemistry Basics", "Physics Principles", "Reading Comprehension"],
  },
  {
    week: 4,
    title: "Core Subject Mastery - Week 3",
    description: "Social sciences and current affairs coverage",
    status: "upcoming",
    tasks: ["Economics Principles", "Government Studies", "Current Affairs Update", "Subject Integration"],
  },
  {
    week: 5,
    title: "Core Subject Mastery - Week 4",
    description: "Advanced topics and cross-subject connections",
    status: "upcoming",
    tasks: ["Advanced Mathematics", "Complex Biology Topics", "Essay Writing Skills", "Time Management"],
  },
  {
    week: 6,
    title: "Past Question Drill",
    description: "Intensive practice with previous JAMB questions",
    status: "upcoming",
    tasks: ["Past Questions Analysis", "Pattern Recognition", "Speed Practice", "Weak Area Focus"],
  },
  {
    week: 7,
    title: "Mock CBT & Final Tips",
    description: "Full mock examinations and last-minute preparation",
    status: "upcoming",
    tasks: ["Full Mock CBT Tests", "Performance Analysis", "Exam Day Strategies", "Final Review"],
  },
]

const testimonials = [
  {
    name: "Adebayo Olamide",
    score: "289/400",
    course: "Medicine",
    university: "University of Lagos",
    image: "/placeholder.svg?height=60&width=60",
    quote: "The CBT simulator was exactly like the real exam. I scored 289 and got into UNILAG Medicine!",
  },
  {
    name: "Fatima Hassan",
    score: "312/400",
    course: "Engineering",
    university: "Ahmadu Bello University",
    image: "/placeholder.svg?height=60&width=60",
    quote: "The mathematics section helped me master calculations. Scored 312 for Engineering at ABU!",
  },
  {
    name: "Chinedu Okoro",
    score: "298/400",
    course: "Law",
    university: "University of Nigeria",
    image: "/placeholder.svg?height=60&width=60",
    quote: "Use of English preparation was outstanding. Got 298 and studying Law at UNN now!",
  },
]

const successStats = [
  { label: "Success Rate", value: "94%", icon: Trophy },
  { label: "Average Score", value: "287/400", icon: Target },
  { label: "Students Placed", value: "2,847", icon: Users },
  { label: "Universities", value: "156", icon: Building },
]

export function JAMBPlatformClient() {
  const [activeTab, setActiveTab] = useState("curriculum")
  const [selectedModule, setSelectedModule] = useState(modules[0])
  const [currency, setCurrency] = useState("NGN")

  const pricingPlans = [
    {
      name: "Free Trial",
      price: currency === "NGN" ? "₦0" : currency === "USD" ? "$0" : "£0",
      originalPrice: null,
      features: ["Access to 2 modules", "Basic CBT practice", "Community access", "Mobile app access"],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "JAMB Bootcamp",
      price: currency === "NGN" ? "₦15,000" : currency === "USD" ? "$35" : "£28",
      originalPrice: currency === "NGN" ? "₦25,000" : currency === "USD" ? "$60" : "£48",
      features: [
        "All 12 subject modules",
        "Unlimited CBT practice",
        "Past questions (2010-2024)",
        "Mock examinations",
        "Study materials download",
        "WhatsApp support group",
        "Progress tracking",
      ],
      popular: true,
      cta: "Join Bootcamp",
    },
    {
      name: "Premium Mentorship",
      price: currency === "NGN" ? "₦35,000" : currency === "USD" ? "$85" : "£68",
      originalPrice: currency === "NGN" ? "₦50,000" : currency === "USD" ? "$120" : "£96",
      features: [
        "Everything in Bootcamp",
        "1-on-1 mentorship sessions",
        "Personalized study plan",
        "University selection guidance",
        "Post-UTME preparation",
        "Career counseling",
        "Priority support",
        "JAMB-readiness certificate",
      ],
      popular: false,
      cta: "Get Mentorship",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Dunamis Tutors
              </Link>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                JAMB Platform
              </Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`text-sm font-medium transition-colors ${
                  activeTab === "curriculum" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab("cohort")}
                className={`text-sm font-medium transition-colors ${
                  activeTab === "cohort" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Join Cohort
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`text-sm font-medium transition-colors ${
                  activeTab === "resources" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab("community")}
                className={`text-sm font-medium transition-colors ${
                  activeTab === "community" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Community
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-sm border rounded px-2 py-1"
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              🎯 JAMB 2024 Preparation Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master JAMB with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {" "}
                AI-Powered Learning
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join 2,847+ students who achieved 280+ scores using our comprehensive JAMB preparation platform. Master
              all subjects with CBT practice, past questions, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Play className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                <Monitor className="mr-2 h-5 w-5" />
                Try CBT Simulator
              </Button>
            </div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {successStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="cohort">Join Cohort</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Curriculum Tab */}
          <TabsContent value="curriculum" className="space-y-8">
            {/* Learning Track */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  7-Week JAMB Mastery Track
                </CardTitle>
                <CardDescription>
                  Structured learning path designed to maximize your JAMB score in 7 weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningTrack.map((week, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          week.status === "current"
                            ? "bg-blue-600 text-white"
                            : week.status === "completed"
                              ? "bg-green-600 text-white"
                              : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {week.week}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{week.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{week.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {week.tasks.map((task, taskIndex) => (
                            <Badge key={taskIndex} variant="secondary" className="text-xs">
                              {task}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {week.status === "current" && <Badge className="bg-blue-100 text-blue-700">Current</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module) => (
                <Card
                  key={module.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedModule(module)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${module.color} bg-opacity-10`}>
                        <module.icon
                          className={`h-6 w-6 text-white`}
                          style={{ color: module.color.replace("bg-", "").replace("-500", "") }}
                        />
                      </div>
                      <Badge variant="secondary">{module.lessons} lessons</Badge>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {module.duration}
                        </span>
                        <span>{module.progress}% complete</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                      <div className="flex flex-wrap gap-1">
                        {module.topics.slice(0, 2).map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                        {module.topics.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{module.topics.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Module Detail */}
            {selectedModule && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <selectedModule.icon className="h-6 w-6 text-blue-600" />
                    {selectedModule.title}
                  </CardTitle>
                  <CardDescription>{selectedModule.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Course Content</h4>
                      {selectedModule.topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Learning Resources</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Video className="mr-2 h-4 w-4" />
                          Instructional Videos
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Monitor className="mr-2 h-4 w-4" />
                          CBT Practice Quiz
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          PDF Booklets
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <FileText className="mr-2 h-4 w-4" />
                          Past Questions
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Quick Stats</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Duration</span>
                          <span className="text-sm font-medium">{selectedModule.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Lessons</span>
                          <span className="text-sm font-medium">{selectedModule.lessons}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Difficulty</span>
                          <span className="text-sm font-medium">Intermediate</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Certificate</span>
                          <span className="text-sm font-medium">Yes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Cohort Tab */}
          <TabsContent value="cohort" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pricing */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
                  <p className="text-gray-600">Select the perfect plan for your JAMB preparation journey</p>
                </div>
                <div className="space-y-4">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-blue-600" : ""}`}>
                      {plan.popular && <Badge className="absolute -top-2 left-4 bg-blue-600">Most Popular</Badge>}
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{plan.name}</CardTitle>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold">{plan.price}</span>
                              {plan.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Cohort Schedule */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Cohorts</h2>
                  <p className="text-gray-600">Join our next batch of JAMB candidates</p>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      January 2024 Cohort
                    </CardTitle>
                    <CardDescription>7-week intensive JAMB preparation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Start Date:</span>
                        <div className="font-medium">January 15, 2024</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <div className="font-medium">7 Weeks</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Schedule:</span>
                        <div className="font-medium">Mon-Fri, 6-8 PM</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Spots Left:</span>
                        <div className="font-medium text-orange-600">23/100</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Enrollment Progress</span>
                        <span>77%</span>
                      </div>
                      <Progress value={77} className="h-2" />
                    </div>
                    <Button className="w-full">Reserve Your Spot</Button>
                  </CardContent>
                </Card>

                {/* CBT Simulator */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Monitor className="h-5 w-5" />
                      CBT Simulator
                    </CardTitle>
                    <CardDescription>Practice with our JAMB-like interface</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Questions:</span>
                        <div className="font-medium">5,000+ Past Questions</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Subjects:</span>
                        <div className="font-medium">All JAMB Subjects</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Time Limit:</span>
                        <div className="font-medium">2 Hours</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Scoring:</span>
                        <div className="font-medium">Real-time Results</div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Monitor className="mr-2 h-4 w-4" />
                      Launch CBT Simulator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Past Questions
                  </CardTitle>
                  <CardDescription>JAMB questions from 2010-2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Available Years</span>
                      <span>15 Years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Questions</span>
                      <span>6,000+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Subjects</span>
                      <span>All Subjects</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download All
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Video Library
                  </CardTitle>
                  <CardDescription>Expert-led instructional videos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Videos</span>
                      <span>200+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Duration</span>
                      <span>80+ Hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Quality</span>
                      <span>HD 1080p</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    JAMB Certificate
                  </CardTitle>
                  <CardDescription>Earn your JAMB-readiness certificate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Requirements</span>
                      <span>80% Score</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Validity</span>
                      <span>1 Year</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>LinkedIn</span>
                      <span>Shareable</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    <Award className="mr-2 h-4 w-4" />
                    View Sample
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Study Materials */}
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Study Materials</CardTitle>
                <CardDescription>Everything you need for JAMB success</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {modules.slice(0, 8).map((module) => (
                    <div key={module.id} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <module.icon className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-sm">{module.title}</span>
                      </div>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div>📹 {Math.floor(module.lessons / 3)} Videos</div>
                        <div>📄 {Math.floor(module.lessons / 2)} PDFs</div>
                        <div>❓ {module.lessons * 10} Questions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-8">
            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  Success Stories
                </CardTitle>
                <CardDescription>Real results from our JAMB students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 border rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">
                            {testimonial.course} • {testimonial.university}
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <Badge className="bg-green-100 text-green-700">Score: {testimonial.score}</Badge>
                      </div>
                      <p className="text-sm text-gray-700 italic">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Study Groups
                  </CardTitle>
                  <CardDescription>Join subject-specific study groups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">Mathematics Group</div>
                        <div className="text-sm text-gray-600">847 members</div>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">English Group</div>
                        <div className="text-sm text-gray-600">923 members</div>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <div className="font-medium">Sciences Group</div>
                        <div className="text-sm text-gray-600">756 members</div>
                      </div>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Social Media
                  </CardTitle>
                  <CardDescription>Follow us for daily tips and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Globe className="mr-2 h-4 w-4" />
                      Telegram
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Star className="mr-2 h-4 w-4" />
                      Instagram
                    </Button>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-900 mb-1">Daily JAMB Tips</div>
                    <div className="text-sm text-blue-700">
                      Get daily practice questions and study tips sent to your phone
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  Platform Analytics
                </CardTitle>
                <CardDescription>See how our students perform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">287</div>
                    <div className="text-sm text-gray-600">Avg. Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">2,847</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">156</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
