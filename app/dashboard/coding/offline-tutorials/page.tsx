"use client"

import { useState } from "react"
import { Download, Search, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

// Mock data for tutorials
const tutorials = [
  {
    id: 1,
    title: "Complete JavaScript Fundamentals",
    description: "Learn JavaScript from scratch with practical examples and exercises",
    category: "web",
    level: "beginner",
    size: "120MB",
    format: "PDF + Video",
    downloadCount: 1245,
    lastUpdated: "2023-12-15",
    tags: ["JavaScript", "Web Development", "Frontend"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 2,
    title: "React.js Project Templates Bundle",
    description: "10 ready-to-use React project templates with source code and documentation",
    category: "web",
    level: "intermediate",
    size: "85MB",
    format: "Code + PDF",
    downloadCount: 987,
    lastUpdated: "2024-01-20",
    tags: ["React", "Templates", "Frontend"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 3,
    title: "Python Data Science Handbook",
    description: "Comprehensive guide to data analysis, visualization and machine learning with Python",
    category: "data",
    level: "intermediate",
    size: "210MB",
    format: "PDF + Jupyter Notebooks",
    downloadCount: 2341,
    lastUpdated: "2024-02-05",
    tags: ["Python", "Data Science", "Machine Learning"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 4,
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile apps with Flutter and Dart",
    category: "mobile",
    level: "intermediate",
    size: "175MB",
    format: "Video + Code",
    downloadCount: 876,
    lastUpdated: "2024-01-10",
    tags: ["Flutter", "Dart", "Mobile"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 5,
    title: "Backend Development with Node.js",
    description: "Learn to build scalable backend services with Node.js, Express and MongoDB",
    category: "web",
    level: "intermediate",
    size: "150MB",
    format: "PDF + Video + Code",
    downloadCount: 1532,
    lastUpdated: "2024-02-15",
    tags: ["Node.js", "Express", "Backend"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 6,
    title: "Game Development with Unity",
    description: "Create 2D and 3D games with Unity and C#",
    category: "game",
    level: "beginner",
    size: "320MB",
    format: "Video + Project Files",
    downloadCount: 1876,
    lastUpdated: "2024-01-25",
    tags: ["Unity", "C#", "Game Development"],
    image: "/placeholder.svg?height=100&width=250",
  },
]

// Mock data for templates
const templates = [
  {
    id: 1,
    title: "E-commerce Website Template",
    description: "Complete e-commerce website template with product listings, cart and checkout",
    category: "web",
    level: "intermediate",
    size: "45MB",
    format: "HTML/CSS/JS",
    downloadCount: 2145,
    lastUpdated: "2024-01-05",
    tags: ["E-commerce", "Web Development", "Frontend"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 2,
    title: "Portfolio Website Template",
    description: "Professional portfolio website template for developers and designers",
    category: "web",
    level: "beginner",
    size: "30MB",
    format: "HTML/CSS/JS",
    downloadCount: 1876,
    lastUpdated: "2024-02-10",
    tags: ["Portfolio", "Web Development", "Frontend"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 3,
    title: "Admin Dashboard Template",
    description: "Responsive admin dashboard template with charts, tables and forms",
    category: "web",
    level: "intermediate",
    size: "55MB",
    format: "React + Tailwind",
    downloadCount: 1543,
    lastUpdated: "2024-01-15",
    tags: ["Dashboard", "Admin", "Frontend"],
    image: "/placeholder.svg?height=100&width=250",
  },
  {
    id: 4,
    title: "Mobile App UI Kit",
    description: "UI kit for mobile apps with 50+ screens and components",
    category: "mobile",
    level: "intermediate",
    size: "65MB",
    format: "Figma + React Native",
    downloadCount: 987,
    lastUpdated: "2024-02-20",
    tags: ["UI Kit", "Mobile", "Design"],
    image: "/placeholder.svg?height=100&width=250",
  },
]

export default function OfflineTutorials() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")
  const [downloadProgress, setDownloadProgress] = useState<Record<number, number>>({})
  const [downloadedItems, setDownloadedItems] = useState<number[]>([])
  const { toast } = useToast()

  const handleDownload = (id: number, title: string) => {
    if (downloadProgress[id]) return

    // Simulate download progress
    setDownloadProgress((prev) => ({ ...prev, [id]: 1 }))

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        const newProgress = prev[id] + Math.floor(Math.random() * 10)
        if (newProgress >= 100) {
          clearInterval(interval)
          setDownloadedItems((prev) => [...prev, id])
          toast({
            title: "Download Complete",
            description: `${title} has been downloaded successfully.`,
          })
          return { ...prev, [id]: 100 }
        }
        return { ...prev, [id]: newProgress }
      })
    }, 300)
  }

  const filterItems = (items: typeof tutorials) => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
      const matchesLevel = levelFilter === "all" || item.level === levelFilter

      return matchesSearch && matchesCategory && matchesLevel
    })
  }

  const filteredTutorials = filterItems(tutorials)
  const filteredTemplates = filterItems(templates)

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Offline Tutorials & Templates</h1>
        <p className="text-muted-foreground">Download tutorials and templates for offline learning and development</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search tutorials and templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="web">Web Development</SelectItem>
              <SelectItem value="mobile">Mobile Development</SelectItem>
              <SelectItem value="data">Data Science</SelectItem>
              <SelectItem value="game">Game Development</SelectItem>
            </SelectContent>
          </Select>
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="tutorials" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="tutorials" className="space-y-4">
          {filteredTutorials.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No tutorials found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial) => (
                <Card key={tutorial.id} className="overflow-hidden">
                  <div className="h-[100px] bg-muted">
                    <img
                      src={tutorial.image || "/placeholder.svg"}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {tutorial.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="line-clamp-2 mb-2">{tutorial.description}</CardDescription>
                    <div className="flex flex-wrap justify-between text-xs text-muted-foreground">
                      <span>Size: {tutorial.size}</span>
                      <span>Format: {tutorial.format}</span>
                      <span>Updated: {tutorial.lastUpdated}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {downloadedItems.includes(tutorial.id) ? (
                      <Button variant="outline" className="w-full" disabled>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Downloaded
                      </Button>
                    ) : downloadProgress[tutorial.id] ? (
                      <div className="w-full space-y-2">
                        <Progress value={downloadProgress[tutorial.id]} className="h-2" />
                        <span className="text-xs text-center block">
                          Downloading... {downloadProgress[tutorial.id]}%
                        </span>
                      </div>
                    ) : (
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => handleDownload(tutorial.id, tutorial.title)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No templates found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <div className="h-[100px] bg-muted">
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={template.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="line-clamp-2 mb-2">{template.description}</CardDescription>
                    <div className="flex flex-wrap justify-between text-xs text-muted-foreground">
                      <span>Size: {template.size}</span>
                      <span>Format: {template.format}</span>
                      <span>Updated: {template.lastUpdated}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {downloadedItems.includes(template.id) ? (
                      <Button variant="outline" className="w-full" disabled>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Downloaded
                      </Button>
                    ) : downloadProgress[template.id] ? (
                      <div className="w-full space-y-2">
                        <Progress value={downloadProgress[template.id]} className="h-2" />
                        <span className="text-xs text-center block">
                          Downloading... {downloadProgress[template.id]}%
                        </span>
                      </div>
                    ) : (
                      <Button
                        variant="default"
                        className="w-full"
                        onClick={() => handleDownload(template.id, template.title)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
