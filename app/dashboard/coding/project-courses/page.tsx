"use client"

import { useState } from "react"
import { Search, Star, Clock, Users, BookOpen, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "Build a Full-Stack E-commerce App",
    description: "Create a complete e-commerce platform with Next.js, Tailwind CSS, and Stripe",
    category: "web",
    level: "intermediate",
    price: "Free",
    duration: "12 hours",
    students: 2145,
    rating: 4.7,
    tags: ["Next.js", "React", "E-commerce", "Stripe"],
    image: "/placeholder.svg?height=100&width=250",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
    lastUpdated: "2024-02-15",
  },
  {
    id: 2,
    title: "Build a Social Media App with React Native",
    description: "Develop a cross-platform social media app with React Native and Firebase",
    category: "mobile",
    level: "intermediate",
    price: "$15",
    duration: "15 hours",
    students: 1876,
    rating: 4.5,
    tags: ["React Native", "Firebase", "Mobile"],
    image: "/placeholder.svg?height=100&width=250",
    techStack: ["React Native", "Firebase", "Redux", "Expo"],
    lastUpdated: "2024-01-20",
  },
  {
    id: 3,
    title: "Machine Learning for Beginners",
    description: "Learn the fundamentals of machine learning with Python and scikit-learn",
    category: "data",
    level: "beginner",
    price: "Free",
    duration: "10 hours",
    students: 3241,
    rating: 4.8,
    tags: ["Python", "Machine Learning", "Data Science"],
    image: "/placeholder.svg?height=100&width=250",
    techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    lastUpdated: "2024-01-10",
  },
  {
    id: 4,
    title: "Build a Blockchain from Scratch",
    description: "Create your own blockchain and cryptocurrency with JavaScript",
    category: "blockchain",
    level: "advanced",
    price: "$20",
    duration: "18 hours",
    students: 1243,
    rating: 4.6,
    tags: ["Blockchain", "Cryptocurrency", "JavaScript"],
    image: "/placeholder.svg?height=100&width=250",
    techStack: ["JavaScript", "Node.js", "Express", "Crypto"],
    lastUpdated: "2024-02-05",
  },
  {
    id: 5,
    title: "Game Development with Unity",
    description: "Build 2D and 3D games with Unity and C#",
    category: "game",
    level: "beginner",
    price: "Free",
    duration: "20 hours",
    students: 2876,
    rating: 4.5,
    tags: ["Unity", "C#", "Game Development"],
    image: "/placeholder.svg?height=100&width=250",
    techStack: ["Unity", "C#", "Blender"],
    lastUpdated: "2024-01-15",
  },
  {
    id: 6,
    title: "DevOps for Developers",
    description: "Learn CI/CD, Docker, Kubernetes and cloud deployment",
    category: "devops",
    level: "intermediate",
    price: "$25",
    duration: "16 hours",
    students: 1532,
    rating: 4.7,
    tags: ["DevOps", "Docker", "Kubernetes", "CI/CD"],
    image: "/placeholder.svg?height=100&width=250",
    techStack: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Terraform"],
    lastUpdated: "2024-02-10",
  },
]

export default function ProjectCourses() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const { toast } = useToast()

  const handleEnroll = (courseId: number, courseTitle: string) => {
    toast({
      title: "Enrolled Successfully",
      description: `You have enrolled in "${courseTitle}". You can now access the course materials.`,
    })
  }

  const filterCourses = () => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = categoryFilter === "all" || course.category === categoryFilter
      const matchesLevel = levelFilter === "all" || course.level === levelFilter
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "free" && course.price === "Free") ||
        (priceFilter === "paid" && course.price !== "Free")

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice
    })
  }

  const filteredCourses = filterCourses()

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Project-Based Coding Courses</h1>
        <p className="text-muted-foreground">Learn by building real-world projects with modern tech stacks</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="mobile">Mobile Development</SelectItem>
              <SelectItem value="data">Data Science</SelectItem>
              <SelectItem value="blockchain">Blockchain</SelectItem>
              <SelectItem value="game">Game Development</SelectItem>
              <SelectItem value="devops">DevOps</SelectItem>
            </SelectContent>
          </Select>
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No courses found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="flex flex-col overflow-hidden">
              <div className="h-[150px] bg-muted relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={course.price === "Free" ? "default" : "secondary"}>{course.price}</Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                  <span className="mx-1">•</span>
                  <Users className="h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <CardDescription className="line-clamp-2 mb-4">{course.description}</CardDescription>
                <div className="flex flex-wrap gap-1 mb-3">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2 border-t">
                <div className="w-full">
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-xs text-muted-foreground">Tech Stack:</span>
                    {course.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1" onClick={() => handleEnroll(course.id, course.title)}>
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="icon">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
