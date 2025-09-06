"use client"

import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

// Mock authentication check
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    // Simulate auth check
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsAuthenticated(isLoggedIn)
    }

    checkAuth()
  }, [])

  return { isAuthenticated }
}

const programs = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    progress: 65,
    status: "In Progress",
    nextLesson: "Neural Networks Fundamentals",
    totalLessons: 24,
    completedLessons: 16,
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    progress: 30,
    status: "In Progress",
    nextLesson: "React Components",
    totalLessons: 32,
    completedLessons: 10,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    progress: 100,
    status: "Completed",
    nextLesson: "Course Completed",
    totalLessons: 18,
    completedLessons: 18,
  },
]

export default function DashboardPage() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF9800] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#333333] mb-2">Welcome back, Student!</h1>
        <p className="text-[#666666]">Continue your learning journey and track your progress.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Enrolled Programs</CardTitle>
            <BookOpen className="h-4 w-4 text-[#FF9800]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">3</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Hours Studied</CardTitle>
            <Clock className="h-4 w-4 text-[#FF9800]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">127</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Certificates</CardTitle>
            <Award className="h-4 w-4 text-[#FF9800]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">1</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Overall Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#FF9800]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">65%</div>
          </CardContent>
        </Card>
      </div>

      {/* Programs Progress */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#333333]">Your Programs</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-[#333333]">{program.title}</CardTitle>
                  <Badge
                    variant={program.status === "Completed" ? "default" : "secondary"}
                    className={program.status === "Completed" ? "bg-green-500" : "bg-[#FF9800]"}
                  >
                    {program.status}
                  </Badge>
                </div>
                <CardDescription className="text-[#666666]">
                  {program.completedLessons} of {program.totalLessons} lessons completed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#666666]">Progress</span>
                    <span className="text-[#333333] font-medium">{program.progress}%</span>
                  </div>
                  <Progress value={program.progress} className="h-2" />
                </div>

                <div>
                  <p className="text-sm text-[#666666] mb-2">Next Lesson:</p>
                  <p className="text-sm font-medium text-[#333333]">{program.nextLesson}</p>
                </div>

                <Button
                  className="w-full bg-[#FF9800] hover:bg-[#F57C00]"
                  asChild
                  disabled={program.status === "Completed"}
                >
                  <Link href={`/dashboard/${program.id}`}>
                    {program.status === "Completed" ? "View Certificate" : "Continue Learning"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
