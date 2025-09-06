"use client"

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Megaphone, Globe, GraduationCap, BookOpen, Plane, User, Settings, LogOut } from "lucide-react"
import { Loading } from "@/components/loading"

const programs = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence with personalized learning",
    icon: Brain,
    color: "bg-blue-500",
    enrolled: false,
    progress: 0,
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Full-stack development with modern technologies",
    icon: Code,
    color: "bg-green-500",
    enrolled: false,
    progress: 0,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies",
    icon: Megaphone,
    color: "bg-purple-500",
    enrolled: false,
    progress: 0,
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Achieve your target IELTS score",
    icon: Globe,
    color: "bg-red-500",
    enrolled: false,
    progress: 0,
  },
  {
    id: "ijmb",
    title: "IJMB Program",
    description: "Interim Joint Matriculation Board preparation",
    icon: GraduationCap,
    color: "bg-yellow-500",
    enrolled: false,
    progress: 0,
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board",
    icon: BookOpen,
    color: "bg-indigo-500",
    enrolled: false,
    progress: 0,
  },
  {
    id: "travel-abroad",
    title: "Travel Abroad",
    description: "Complete guidance for studying abroad",
    icon: Plane,
    color: "bg-teal-500",
    enrolled: false,
    progress: 0,
  },
]

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        // Simulate auth check - replace with actual auth logic
        const token = localStorage.getItem("auth_token")
        if (!token) {
          setIsAuthenticated(false)
          return
        }

        // Simulate user data fetch
        const userData = {
          name: "John Doe",
          email: "john@example.com",
          enrolledPrograms: [],
        }

        setUser(userData)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Auth check failed:", error)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [])

  if (isAuthenticated === null) {
    return <Loading text="Loading dashboard..." />
  }

  if (!isAuthenticated) {
    redirect("/register")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name || "Student"}!</h1>
              <p className="text-gray-600 mt-2">Continue your learning journey with Dunamis Tutors</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Enrolled Programs</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed Courses</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Certificates</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Study Hours</p>
                  <p className="text-2xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Empty State */}
        <Card className="mb-8">
          <CardContent className="p-12 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-dunamis-primary/10">
              <GraduationCap className="h-8 w-8 text-dunamis-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Learning Journey</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              You haven't enrolled in any programs yet. Explore our comprehensive courses and start building your future
              today.
            </p>
            <Link href="/register">
              <Button className="bg-dunamis-primary hover:bg-dunamis-primary/90">Browse Programs</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Available Programs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Programs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${program.color}`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/register/${program.id}`}>
                    <Button className="w-full bg-dunamis-primary hover:bg-dunamis-primary/90">Enroll Now</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
