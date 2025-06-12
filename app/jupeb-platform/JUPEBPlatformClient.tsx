"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Clock,
  Download,
  Play,
  Users,
  Award,
  Calendar,
  MessageCircle,
  Star,
  CheckCircle,
  Globe,
  FileText,
  Video,
  Brain,
  Target,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  GraduationCap,
} from "lucide-react"

export function JUPEBPlatformClient() {
  const [activeTab, setActiveTab] = useState("home")
  const [currency, setCurrency] = useState("NGN")

  const modules = [
    {
      id: 1,
      title: "Literature-in-English",
      duration: "8 weeks",
      lessons: 24,
      progress: 75,
      status: "In Progress",
      description: "Comprehensive study of prose, poetry, and drama",
      topics: ["African Literature", "Poetry Analysis", "Drama Studies", "Literary Criticism"],
    },
    {
      id: 2,
      title: "Government",
      duration: "6 weeks",
      lessons: 18,
      progress: 60,
      status: "In Progress",
      description: "Political science and governance systems",
      topics: ["Political Theory", "Nigerian Government", "International Relations", "Public Administration"],
    },
    {
      id: 3,
      title: "Economics",
      duration: "8 weeks",
      lessons: 22,
      progress: 45,
      status: "Available",
      description: "Micro and macroeconomic principles",
      topics: ["Microeconomics", "Macroeconomics", "Development Economics", "Economic Systems"],
    },
    {
      id: 4,
      title: "Christian Religious Studies",
      duration: "6 weeks",
      lessons: 16,
      progress: 30,
      status: "Available",
      description: "Biblical studies and Christian theology",
      topics: ["Old Testament", "New Testament", "Christian Ethics", "Church History"],
    },
    {
      id: 5,
      title: "General Paper",
      duration: "4 weeks",
      lessons: 12,
      progress: 20,
      status: "Available",
      description: "Critical thinking and current affairs",
      topics: ["Current Affairs", "Critical Analysis", "Essay Writing", "Logical Reasoning"],
    },
  ]

  const learningTrack = [
    {
      phase: "Orientation",
      weeks: "Week 1",
      status: "completed",
      description: "Program introduction and study methods",
    },
    { phase: "Subject Mastery", weeks: "Weeks 2-6", status: "current", description: "Deep dive into core subjects" },
    {
      phase: "Past Question Practice",
      weeks: "Weeks 7-10",
      status: "upcoming",
      description: "Extensive practice with past papers",
    },
    {
      phase: "Final Exam Prep",
      weeks: "Weeks 11-12",
      status: "upcoming",
      description: "Intensive revision and mock exams",
    },
  ]

  const testimonials = [
    {
      name: "Blessing Adebayo",
      university: "University of Ibadan",
      course: "English Language",
      image: "/placeholder.svg?height=40&width=40",
      text: "JUPEB opened doors to my dream course at UI. The Literature preparation was exceptional!",
    },
    {
      name: "Emmanuel Okafor",
      university: "University of Lagos",
      course: "Political Science",
      image: "/placeholder.svg?height=40&width=40",
      text: "The Government module helped me excel in my JUPEB exams and secure admission to UNILAG.",
    },
    {
      name: "Grace Yakubu",
      university: "Ahmadu Bello University",
      course: "Economics",
      image: "/placeholder.svg?height=40&width=40",
      text: "Comprehensive Economics preparation that made the difference in my university admission.",
    },
  ]

  const cohorts = [
    { date: "2024-02-20", time: "10:00 AM", timezone: "WAT (Nigeria)", spots: 30, enrolled: 22 },
    { date: "2024-03-05", time: "2:00 PM", timezone: "WAT (Nigeria)", spots: 25, enrolled: 18 },
    { date: "2024-03-20", time: "11:00 AM", timezone: "WAT (Nigeria)", spots: 30, enrolled: 20 },
  ]

  const pricing = {
    NGN: { free: "₦0", core: "₦179,000", premium: "₦259,000" },
    USD: { free: "$0", core: "$269", premium: "$389" },
    GBP: { free: "£0", core: "£219", premium: "£319" },
  }

  const renderHome = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to JUPEB Excellence Program</h1>
        <p className="text-lg mb-6">
          Master the Joint Universities Preliminary Examinations Board and secure your university admission
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">5 Core Subjects</span>
            </div>
            <p className="text-sm">Arts and Social Sciences focus</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">12-Week Program</span>
            </div>
            <p className="text-sm">Intensive university preparation</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold">University Ready</span>
            </div>
            <p className="text-sm">Direct entry qualification</p>
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Your Progress Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Overall Completion</span>
              <span className="font-semibold">46%</span>
            </div>
            <Progress value={46} className="h-2" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              {modules.map((module) => (
                <div key={module.id} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium">{module.title.split("-")[0]}</p>
                  <p className="text-xs text-gray-500">{module.progress}%</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Track */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Learning Track Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningTrack.map((phase, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    phase.status === "completed"
                      ? "bg-green-500 text-white"
                      : phase.status === "current"
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {phase.status === "completed" ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{phase.phase}</h3>
                    <span className="text-sm text-gray-500">{phase.weeks}</span>
                  </div>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certificate Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Program Completion Certificate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">
                Earn your JUPEB Program Completion Certificate upon successfully finishing all modules and assessments.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Share your achievement on LinkedIn and showcase your university readiness to admissions committees.
              </p>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Award className="h-4 w-4 mr-2" />
              View Certificate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderCurriculum = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">JUPEB Curriculum</h2>
        <Badge variant="secondary">5 Core Subjects</Badge>
      </div>

      <div className="grid gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {module.title}
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </div>
                <Badge variant={module.status === "In Progress" ? "default" : "secondary"}>{module.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    {module.lessons} lessons
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Progress</span>
                    <span className="text-sm font-medium">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700">
                    <Play className="h-4 w-4" />
                    Watch Videos
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Revision Docs
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <Brain className="h-4 w-4" />
                    MCQ Quiz
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderCohort = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Join a Cohort</h2>
        <p className="text-gray-600">Learn with peers in structured group sessions</p>
      </div>

      <div className="grid gap-4">
        {cohorts.map((cohort, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">JUPEB Cohort {index + 1}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {cohort.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {cohort.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {cohort.timezone}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    {cohort.enrolled}/{cohort.spots} enrolled
                  </p>
                  <Button className="mt-2 bg-purple-600 hover:bg-purple-700">Join Cohort</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Pricing Plans
            <div className="flex items-center gap-2">
              <Button variant={currency === "NGN" ? "default" : "outline"} size="sm" onClick={() => setCurrency("NGN")}>
                NGN
              </Button>
              <Button variant={currency === "USD" ? "default" : "outline"} size="sm" onClick={() => setCurrency("USD")}>
                USD
              </Button>
              <Button variant={currency === "GBP" ? "default" : "outline"} size="sm" onClick={() => setCurrency("GBP")}>
                GBP
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Free Trial</CardTitle>
                <CardDescription>Get started with basic access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{pricing[currency].free}</div>
                <ul className="space-y-2 text-sm">
                  <li>• 2 weeks access</li>
                  <li>• Basic materials</li>
                  <li>• Community access</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-500">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Core Program</CardTitle>
                <CardDescription>Complete JUPEB preparation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{pricing[currency].core}</div>
                <ul className="space-y-2 text-sm">
                  <li>• Full curriculum access</li>
                  <li>• Past questions bank</li>
                  <li>• MCQ practice tests</li>
                  <li>• WhatsApp support</li>
                </ul>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Choose Core</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Premium support & mentorship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">{pricing[currency].premium}</div>
                <ul className="space-y-2 text-sm">
                  <li>• Everything in Core</li>
                  <li>• 1-on-1 tutoring</li>
                  <li>• University guidance</li>
                  <li>• Priority support</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderResources = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Learning Resources</h2>
        <p className="text-gray-600">Access comprehensive study materials and tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Past Questions Bank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Access 10+ years of JUPEB past questions with detailed solutions
            </p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Download Questions</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Revision Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Comprehensive revision notes for all subjects</p>
            <Button className="w-full" variant="outline">
              View Documents
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Video Lectures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">High-quality video lectures by expert tutors</p>
            <Button className="w-full" variant="outline">
              Watch Videos
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              MCQ Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Multiple choice questions for exam practice</p>
            <Button className="w-full" variant="outline">
              Practice MCQs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              University Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Complete guide to Nigerian universities and admission requirements
            </p>
            <Button className="w-full" variant="outline">
              View Guide
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Syllabus Download
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Official JUPEB syllabus for all subjects</p>
            <Button className="w-full" variant="outline">
              Download PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">About JUPEB Program</h2>
        <p className="text-gray-600 leading-relaxed">
          The Joint Universities Preliminary Examinations Board (JUPEB) program is a nationally recognized advanced
          level program that provides an alternative route to university admission in Nigeria. Our comprehensive program
          is designed to prepare students for success in the JUPEB examinations and secure direct entry admission into
          200 level in Nigerian universities, particularly for Arts and Social Sciences courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Program Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Direct entry into 200 level
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Skip JAMB requirements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Nationally recognized certificate
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Arts & Social Sciences focus
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                University placement assistance
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Success Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">University Admission Rate</span>
                  <span className="text-sm font-medium">93%</span>
                </div>
                <Progress value={93} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Student Satisfaction</span>
                  <span className="text-sm font-medium">96%</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Course Completion Rate</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials */}
      <Card>
        <CardHeader>
          <CardTitle>Student Success Stories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.course}, {testimonial.university}
                    </p>
                  </div>
                </div>
                <p className="text-sm italic">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderCommunity = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Join Our Community</h2>
        <p className="text-gray-600">Connect with fellow JUPEB students and alumni</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Study Groups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Join subject-specific WhatsApp groups for peer support and study discussions
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-green-600 hover:bg-green-700">Join General Group</Button>
              <Button className="w-full" variant="outline">
                Join Subject Groups
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Study Partners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Find study partners in your area or online for collaborative learning
            </p>
            <Button className="w-full" variant="outline">
              Find Study Partners
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Community Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Community Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold">New Literature Analysis Available</p>
              <p className="text-sm text-gray-600">Deep dive into African poetry analysis techniques</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold">Success Story: Admission to UI</p>
              <p className="text-sm text-gray-600">
                Congratulations to Blessing for gaining admission to study English
              </p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="font-semibold">Study Tips: Government</p>
              <p className="text-sm text-gray-600">New video on Nigerian political system</p>
              <p className="text-xs text-gray-500">3 days ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></div>
              <span className="text-xl font-bold">JUPEB Excellence</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Support
              </Button>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Award className="h-4 w-4 mr-2" />
                Get Certificate
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 space-y-2">
            <nav className="space-y-1">
              {[
                { id: "home", label: "Home", icon: BookOpen },
                { id: "curriculum", label: "Curriculum", icon: Brain },
                { id: "cohort", label: "Join Cohort", icon: Users },
                { id: "resources", label: "Resources", icon: FileText },
                { id: "about", label: "About", icon: Award },
                { id: "community", label: "Community", icon: MessageCircle },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-purple-100 text-purple-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "home" && renderHome()}
            {activeTab === "curriculum" && renderCurriculum()}
            {activeTab === "cohort" && renderCohort()}
            {activeTab === "resources" && renderResources()}
            {activeTab === "about" && renderAbout()}
            {activeTab === "community" && renderCommunity()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"></div>
                <span className="text-xl font-bold">JUPEB Excellence</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering students to achieve university admission through comprehensive JUPEB preparation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  +234 123 456 7890
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  jupeb@dunamistutors.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Lagos, Nigeria
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
              <div className="mt-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Dunamis Tutors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
