"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  Trophy,
  Users,
  TrendingUp,
  Bell,
  Settings,
  LogOut,
  Brain,
  Code,
  Megaphone,
  Globe,
  GraduationCap,
} from "lucide-react"

// Mock user data - in a real app, this would come from your auth system
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  enrolledPrograms: [],
  completedCourses: 0,
  totalHours: 0,
  achievements: [],
}

const availablePrograms = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence and machine learning",
    icon: Brain,
    color: "bg-blue-500",
    duration: "12 weeks",
    students: "2,500+",
    href: "/programs/ai-tutoring",
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Full-stack development with modern technologies",
    icon: Code,
    color: "bg-green-500",
    duration: "16 weeks",
    students: "3,200+",
    href: "/programs/coding",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies and tools",
    icon: Megaphone,
    color: "bg-purple-500",
    duration: "10 weeks",
    students: "1,800+",
    href: "/programs/digital-marketing",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Comprehensive IELTS exam preparation",
    icon: Globe,
    color: "bg-orange-500",
    duration: "8 weeks",
    students: "1,200+",
    href: "/programs/ielts",
  },
  {
    id: "ijmb",
    title: "IJMB Program",
    description: "Intermediate Joint Matriculation Board preparation",
    icon: GraduationCap,
    color: "bg-red-500",
    duration: "9 months",
    students: "800+",
    href: "/programs/ijmb",
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board",
    icon: GraduationCap,
    color: "bg-indigo-500",
    duration: "9 months",
    students: "600+",
    href: "/programs/jupeb",
  },
]

export default function DashboardPage() {
  const [user, setUser] = useState(mockUser)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    // In a real app, you'd check with your auth system
    const checkAuth = () => {
      const token = localStorage.getItem("auth_token")
      if (!token) {
        router.push("/register")
        return
      }
      setIsAuthenticated(true)
    }

    checkAuth()
  }, [router])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Access Required</CardTitle>
            <CardDescription>Please register or log in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/register" className="w-full">
              <Button className="w-full bg-dunamis-primary hover:bg-dunamis-primary/90">Get Started</Button>
            </Link>
            <Link href="/login" className="w-full">
              <Button variant="outline" className="w-full bg-transparent">
                Log In
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
            <p className="text-gray-600">Continue your learning journey</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Programs</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.enrolledPrograms.length}</div>
              <p className="text-xs text-muted-foreground">
                {user.enrolledPrograms.length === 0 ? "Start your first program" : "Active programs"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.completedCourses}</div>
              <p className="text-xs text-muted-foreground">
                {user.completedCourses === 0 ? "Complete your first course" : "Courses finished"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.totalHours}</div>
              <p className="text-xs text-muted-foreground">
                {user.totalHours === 0 ? "Start learning today" : "Hours invested"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.achievements.length}</div>
              <p className="text-xs text-muted-foreground">
                {user.achievements.length === 0 ? "Earn your first badge" : "Badges earned"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Empty State - No Enrolled Programs */}
        {user.enrolledPrograms.length === 0 && (
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Start Your Learning Journey</CardTitle>
              <CardDescription>
                You haven't enrolled in any programs yet. Choose from our world-class programs below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Ready to transform your career? Our expert-led programs are designed to help you succeed.
                </p>
              </div>
              <Link href="/register">
                <Button className="bg-dunamis-primary hover:bg-dunamis-primary/90">Browse Programs</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Available Programs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Available Programs
            </CardTitle>
            <CardDescription>
              Explore our comprehensive range of programs designed to advance your career
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {availablePrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg ${program.color} text-white`}>
                        <program.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <CardDescription className="text-sm">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.students}
                      </span>
                    </div>
                    <Link href={program.href}>
                      <Button className="w-full bg-transparent" variant="outline">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
