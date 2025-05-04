"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Filter, LineChart, Search, Star } from "lucide-react"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics for IJMB",
      description: "Master advanced mathematical concepts required for IJMB examinations.",
      category: "IJMB",
      level: "Advanced",
      rating: 4.8,
      enrolled: 245,
      duration: "12 weeks",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Physics Fundamentals",
      description: "Learn the core principles of physics with practical examples.",
      category: "JUPEB",
      level: "Intermediate",
      rating: 4.6,
      enrolled: 189,
      duration: "10 weeks",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Introduction to Programming",
      description: "Start your coding journey with this beginner-friendly programming course.",
      category: "Coding",
      level: "Beginner",
      rating: 4.9,
      enrolled: 312,
      duration: "8 weeks",
      icon: Code,
    },
    {
      id: 4,
      title: "Digital Marketing Essentials",
      description: "Learn the fundamentals of digital marketing strategies and implementation.",
      category: "Marketing",
      level: "Beginner",
      rating: 4.7,
      enrolled: 278,
      duration: "6 weeks",
      icon: LineChart,
    },
    {
      id: 5,
      title: "Chemistry for JUPEB",
      description: "Comprehensive chemistry course designed specifically for JUPEB students.",
      category: "JUPEB",
      level: "Intermediate",
      rating: 4.5,
      enrolled: 156,
      duration: "14 weeks",
      icon: BookOpen,
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      description: "Intensive web development course covering HTML, CSS, and JavaScript.",
      category: "Coding",
      level: "Intermediate",
      rating: 4.8,
      enrolled: 203,
      duration: "16 weeks",
      icon: Code,
    },
  ]

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
        <p className="text-muted-foreground">Browse and enroll in our comprehensive course catalog</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="ijmb">IJMB</TabsTrigger>
          <TabsTrigger value="jupeb">JUPEB</TabsTrigger>
          <TabsTrigger value="coding">Coding</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ijmb" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => course.category === "IJMB")
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="jupeb" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => course.category === "JUPEB")
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="coding" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => course.category === "Coding")
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="marketing" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses
              .filter((course) => course.category === "Marketing")
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CourseCard({ course }: { course: any }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <course.icon className="h-12 w-12 text-muted-foreground/50" />
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{course.category}</Badge>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="ml-1 text-sm">{course.rating}</span>
          </div>
        </div>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Badge variant="secondary">{course.level}</Badge>
            <span className="text-muted-foreground">{course.duration}</span>
          </div>
          <span className="text-muted-foreground">{course.enrolled} students</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Enroll Now</Button>
      </CardFooter>
    </Card>
  )
}
