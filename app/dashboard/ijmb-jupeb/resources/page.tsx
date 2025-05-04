"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, FileText, BookOpen, Video, Clock, Eye, BookMarked } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"

export default function StudyResources() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("materials")
  const [activeProgram, setActiveProgram] = useState("ijmb")
  const [resources, setResources] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSubject, setFilterSubject] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const resourcesRef = collection(db, `${activeProgram}-${activeTab}`)
        let q = query(resourcesRef)

        if (filterSubject !== "all") {
          q = query(q, where("subject", "==", filterSubject))
        }

        q = query(q, orderBy("uploadDate", "desc"))

        const snapshot = await getDocs(q)

        if (!snapshot.empty) {
          const resourcesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setResources(resourcesData)
        } else {
          // Fallback to AI-generated content if no data
          setResources(generateFallbackResources())
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching resources:", error)
        // Fallback to AI-generated content on error
        setResources(generateFallbackResources())
        setLoading(false)
      }
    }

    fetchResources()
  }, [activeTab, activeProgram, filterSubject])

  const generateFallbackResources = () => {
    const subjects = [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Economics",
      "Government",
      "Literature",
      "Geography",
    ]
    const resourceTypes = {
      materials: ["Textbook", "Lecture Notes", "Summary", "Handout"],
      pastQuestions: ["2022 Exam", "2021 Exam", "2020 Exam", "Practice Questions"],
      videos: ["Lecture", "Tutorial", "Explanation", "Review"],
    }

    return Array(12)
      .fill(0)
      .map((_, i) => {
        const subject = subjects[i % subjects.length]
        const type =
          resourceTypes[activeTab as keyof typeof resourceTypes][
            i % resourceTypes[activeTab as keyof typeof resourceTypes].length
          ]

        return {
          id: `resource-${i + 1}`,
          title: `${subject} ${type}`,
          description: `Comprehensive ${type.toLowerCase()} for ${subject} ${activeProgram.toUpperCase()} preparation.`,
          subject: subject,
          fileType: activeTab === "videos" ? "video" : "pdf",
          fileSize:
            activeTab === "videos"
              ? `${Math.floor(Math.random() * 500) + 100} MB`
              : `${Math.floor(Math.random() * 10) + 1} MB`,
          uploadDate: new Date(Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000).toISOString(),
          author: `${activeProgram.toUpperCase()} Team`,
          downloadCount: Math.floor(Math.random() * 1000) + 50,
          viewCount: Math.floor(Math.random() * 5000) + 100,
          duration:
            activeTab === "videos"
              ? `${Math.floor(Math.random() * 60) + 10}:${Math.floor(Math.random() * 60)
                  .toString()
                  .padStart(2, "0")}`
              : null,
          url: "#",
        }
      })
  }

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDownload = (resource: any) => {
    toast({
      title: "Download Started",
      description: `${resource.title} will be downloaded shortly.`,
    })
  }

  const getResourceIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <FileText className="h-5 w-5" />
      case "doc":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const getSubjects = () => {
    const subjects =
      activeProgram === "ijmb"
        ? ["Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Government"]
        : ["Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Literature"]

    return subjects
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Study Resources</h1>
        <p className="text-muted-foreground">Access study materials, past questions, and video lectures</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Tabs defaultValue="ijmb" value={activeProgram} onValueChange={setActiveProgram} className="w-full md:w-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ijmb">IJMB</TabsTrigger>
            <TabsTrigger value="jupeb">JUPEB</TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs defaultValue="materials" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="materials">Study Materials</TabsTrigger>
            <TabsTrigger value="pastQuestions">Past Questions</TabsTrigger>
            <TabsTrigger value="videos">Video Lectures</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="filter-subject" className="sr-only">
            Filter by subject
          </Label>
          <Select value={filterSubject} onValueChange={setFilterSubject}>
            <SelectTrigger id="filter-subject" className="w-[180px]">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {getSubjects().map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    {getResourceIcon(resource.fileType)}
                    <span className="text-base">{resource.title}</span>
                  </CardTitle>
                  <Badge variant="outline">{resource.subject}</Badge>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center gap-1">
                    <BookMarked className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{resource.fileType.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                  </div>
                  {resource.duration && (
                    <div className="flex items-center gap-1">
                      <Video className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>{resource.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{resource.viewCount} views</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">{resource.fileSize}</div>
                <Button onClick={() => handleDownload(resource)} className="flex items-center gap-2" size="sm">
                  <Download className="h-4 w-4" />
                  {resource.fileType === "video" ? "Watch" : "Download"}
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-3 flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground">No resources found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setFilterSubject("all")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
