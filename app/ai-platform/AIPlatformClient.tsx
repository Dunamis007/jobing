"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
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
} from "lucide-react"

interface Module {
  id: number
  title: string
  duration: string
  completed: boolean
  locked: boolean
  lessons: number
  description: string
}

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

export function AIPlatformClient() {
  const [activeModule, setActiveModule] = useState(1)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({})
  const [currentView, setCurrentView] = useState("curriculum")

  const modules: Module[] = [
    {
      id: 1,
      title: "Introduction to AI",
      duration: "2 hours",
      completed: true,
      locked: false,
      lessons: 5,
      description: "Fundamentals of artificial intelligence and machine learning",
    },
    {
      id: 2,
      title: "Machine Learning Basics",
      duration: "3 hours",
      completed: true,
      locked: false,
      lessons: 7,
      description: "Core concepts of supervised and unsupervised learning",
    },
    {
      id: 3,
      title: "Neural Networks",
      duration: "4 hours",
      completed: false,
      locked: false,
      lessons: 8,
      description: "Deep dive into neural network architectures",
    },
    {
      id: 4,
      title: "Deep Learning",
      duration: "5 hours",
      completed: false,
      locked: false,
      lessons: 10,
      description: "Advanced deep learning techniques and applications",
    },
    {
      id: 5,
      title: "AI Ethics & Future",
      duration: "2 hours",
      completed: false,
      locked: true,
      lessons: 4,
      description: "Ethical considerations and future of AI technology",
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
      question: "Which of the following is a type of machine learning?",
      options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "All of the above"],
      correctAnswer: 3,
    },
  ]

  const overallProgress = (modules.filter((m) => m.completed).length / modules.length) * 100
  const currentModuleProgress = activeModule <= 2 ? 100 : activeModule === 3 ? 60 : 0

  const pricingTiers = [
    {
      name: "Free Track",
      price: "$0",
      period: "Forever",
      features: [
        "Access to 3 basic modules",
        "Community forum access",
        "Basic quizzes",
        "Certificate of participation",
      ],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Professional",
      price: "$399",
      period: "Lifetime Access",
      features: [
        "All 15 modules",
        "Live cohort sessions",
        "1-on-1 mentorship",
        "Industry projects",
        "Professional certificate",
        "Job placement support",
      ],
      popular: true,
      color: "border-dunamis-primary",
      buttonColor: "bg-dunamis-primary hover:bg-dunamis-secondary",
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "Team License",
      features: [
        "Everything in Professional",
        "Team dashboard",
        "Custom learning paths",
        "Priority support",
        "Advanced analytics",
        "White-label option",
      ],
      popular: false,
      color: "border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ]

  const learningTrack = [
    { phase: "Foundation", weeks: "1-2", status: "completed" },
    { phase: "Core Concepts", weeks: "3-6", status: "current" },
    { phase: "Advanced Topics", weeks: "7-10", status: "upcoming" },
    { phase: "Specialization", weeks: "11-12", status: "upcoming" },
    { phase: "Capstone Project", weeks: "13-14", status: "upcoming" },
    { phase: "Certification", weeks: "15", status: "upcoming" },
  ]

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "curriculum", label: "Curriculum", icon: BookOpen },
    { id: "cohort", label: "Join Cohort", icon: Users },
    { id: "resources", label: "Resources", icon: FileText },
    { id: "about", label: "About", icon: Info },
    { id: "community", label: "Community", icon: MessageCircle },
  ]

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-dunamis-primary mb-4">Welcome to AI Mastery</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master artificial intelligence with our comprehensive, Google Digital Garage-style learning platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
                  <p className="text-gray-600">AI-powered curriculum that adapts to your pace and learning style</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Live Cohorts</h3>
                  <p className="text-gray-600">Join live sessions with expert instructors and fellow learners</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-dunamis-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
                  <p className="text-gray-600">Earn certificates recognized by leading tech companies</p>
                </CardContent>
              </Card>
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

            {/* Module Content */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      {modules.find((m) => m.id === activeModule)?.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {modules.find((m) => m.id === activeModule)?.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {modules.find((m) => m.id === activeModule)?.lessons} lessons
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-dunamis-primary mx-auto mb-4" />
                        <p className="text-gray-600">Video content for Module {activeModule}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{modules.find((m) => m.id === activeModule)?.description}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setShowQuiz(true)}
                        className="bg-dunamis-primary hover:bg-dunamis-secondary"
                      >
                        Take Quiz
                      </Button>
                      <Button variant="outline">Download Resources</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quiz Section */}
                {showQuiz && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Module Quiz</CardTitle>
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
                      <Button
                        onClick={() => setShowQuiz(false)}
                        className="bg-dunamis-primary hover:bg-dunamis-secondary"
                      >
                        Submit Quiz
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Learning Track Timeline */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Learning Track</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {learningTrack.map((phase, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            phase.status === "completed"
                              ? "bg-green-500"
                              : phase.status === "current"
                                ? "bg-dunamis-primary"
                                : "bg-gray-300"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{phase.phase}</p>
                          <p className="text-xs text-gray-500">Week {phase.weeks}</p>
                        </div>
                        {phase.status === "completed" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Certification Badge */}
                <Card className="mt-6">
                  <CardContent className="p-6 text-center">
                    <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">AI Mastery Certificate</h3>
                    <p className="text-sm text-gray-600 mb-4">Complete all modules to earn your certificate</p>
                    <Progress value={overallProgress} className="mb-2" />
                    <p className="text-xs text-gray-500">{Math.round(overallProgress)}% Complete</p>
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
              <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Join Live Cohorts</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn alongside peers with expert instructors in our interactive live sessions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Next Cohort Starting</CardTitle>
                  <Badge className="w-fit">March 15, 2024</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>Duration:</span> <span>8 weeks</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Schedule:</span> <span>Mon, Wed, Fri</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Time:</span> <span>6:00 PM WAT</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Spots Available:</span> <span>12/20</span>
                    </p>
                  </div>
                  <Button className="w-full bg-dunamis-primary hover:bg-dunamis-secondary">Reserve Your Spot</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Live interactive sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Direct access to instructors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Peer collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Real-time Q&A</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Group projects</span>
                  </div>
                </CardContent>
              </Card>
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
    <div className="min-h-screen bg-gray-50">
      {/* Top Progress Bar */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-bold text-dunamis-primary">AI Learning Platform</h1>
            <Badge variant="secondary">Module {activeModule} Progress</Badge>
          </div>
          <Progress value={currentModuleProgress} className="h-2" />
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar Navigation */}
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
                    <button
                      key={module.id}
                      onClick={() => !module.locked && setActiveModule(module.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        activeModule === module.id
                          ? "border-dunamis-primary bg-dunamis-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      } ${module.locked ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={module.locked}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{module.title}</span>
                        {module.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : module.locked ? (
                          <Lock className="h-4 w-4 text-gray-400" />
                        ) : null}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        {module.duration}
                        <span>•</span>
                        <span>{module.lessons} lessons</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="container px-6 py-8">{renderContent()}</div>

          {/* Pricing Section */}
          {currentView === "home" && (
            <section className="bg-white py-16">
              <div className="container px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-dunamis-primary mb-4">Choose Your Learning Path</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Start free or unlock the full potential with our comprehensive programs
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                          {tier.price}
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
                          {tier.price === "$0" ? "Start Free" : "Get Started"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Footer */}
          <footer className="bg-dunamis-primary text-white py-12">
            <div className="container px-6">
              <div className="grid md:grid-cols-3 gap-8">
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
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp Group
                    </Button>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      <Users className="h-4 w-4 mr-2" />
                      Discord Community
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Youtube className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-300">© 2024 Dunamis Tutors. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
