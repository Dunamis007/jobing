"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, LineChart, Star } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Advanced Mathematics for IJMB",
    category: "IJMB",
    rating: 4.8,
    icon: BookOpen,
    level: "Advanced",
  },
  {
    id: 2,
    title: "Introduction to Programming",
    category: "Coding",
    rating: 4.5,
    icon: Code,
    level: "Beginner",
  },
  {
    id: 3,
    title: "Digital Marketing Fundamentals",
    category: "Marketing",
    rating: 4.7,
    icon: LineChart,
    level: "Intermediate",
  },
]

export function RecommendedCoursesList() {
  return (
    <div className="space-y-3">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <course.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{course.title}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="ml-1 text-sm">{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
              </div>
            </div>
            <div className="border-t px-4 py-2 flex justify-end">
              <Button variant="ghost" size="sm">
                View Course
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
