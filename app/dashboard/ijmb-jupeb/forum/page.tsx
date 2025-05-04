"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ThumbsUp, MessageCircle, Clock, Plus, Send, Eye } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"

export default function StudentForum() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("ijmb")
  const [topics, setTopics] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [loading, setLoading] = useState(true)
  const [newTopicOpen, setNewTopicOpen] = useState(false)
  const [newTopicForm, setNewTopicForm] = useState({
    title: "",
    content: "",
    category: "general",
  })

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topicsRef = collection(db, `${activeTab}-forum-topics`)
        let q = query(topicsRef)

        if (filterCategory !== "all") {
          q = query(q, where("category", "==", filterCategory))
        }

        q = query(q, orderBy("lastActivity", "desc"))

        const snapshot = await getDocs(q)

        if (!snapshot.empty) {
          const topicsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setTopics(topicsData)
        } else {
          // Fallback to AI-generated content if no data
          setTopics(generateFallbackTopics())
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching topics:", error)
        // Fallback to AI-generated content on error
        setTopics(generateFallbackTopics())
        setLoading(false)
      }
    }

    fetchTopics()
  }, [activeTab, filterCategory])

  const generateFallbackTopics = () => {
    const categories = ["general", "admission", "academics", "exams", "centers"]
    const titles = [
      "How to prepare for IJMB/JUPEB exams?",
      "Best study centers in Lagos?",
      "Can I use IJMB/JUPEB for Medicine?",
      "How to balance work and studies?",
      "What subjects should I choose for Engineering?",
      "IJMB/JUPEB vs Direct JAMB: Which is better?",
      "How to get accommodation near study centers?",
      "Tips for scoring A in Mathematics",
      "Is online IJMB/JUPEB program reliable?",
      "How to apply for direct entry with IJMB/JUPEB?",
    ]

    return Array(10)
      .fill(0)
      .map((_, i) => {
        const date = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        return {
          id: `topic-${i + 1}`,
          title: titles[i],
          content: `This is a discussion about ${titles[i].toLowerCase()} Please share your experiences and advice.`,
          author: {
            id: `user-${i + 1}`,
            name: `Student${i + 1}`,
            avatar: null,
          },
          category: categories[i % categories.length],
          createdAt: date.toISOString(),
          lastActivity: new Date(date.getTime() + Math.random() * 5 * 24 * 60 * 60 * 1000).toISOString(),
          views: Math.floor(Math.random() * 500) + 50,
          replies: Math.floor(Math.random() * 30) + 1,
          likes: Math.floor(Math.random() * 20),
          isSticky: i === 0,
          isLocked: i === 9,
        }
      })
  }

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleCreateTopic = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newTopicForm.title.trim() || !newTopicForm.content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both a title and content for your topic.",
        variant: "destructive",
      })
      return
    }

    try {
      // In a real app, you would add this to Firestore
      // For now, we'll just show a success message

      toast({
        title: "Topic Created",
        description: "Your topic has been posted successfully!",
      })

      setNewTopicOpen(false)
      setNewTopicForm({
        title: "",
        content: "",
        category: "general",
      })
    } catch (error) {
      console.error("Error creating topic:", error)
      toast({
        title: "Error",
        description: "There was a problem creating your topic. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "general":
        return <Badge variant="default">General</Badge>
      case "admission":
        return <Badge variant="secondary">Admission</Badge>
      case "academics":
        return <Badge variant="outline">Academics</Badge>
      case "exams":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Exams</Badge>
      case "centers":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Centers</Badge>
      default:
        return <Badge variant="outline">{category}</Badge>
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Forum</h1>
          <p className="text-muted-foreground">Connect with other IJMB & JUPEB students</p>
        </div>
        <Button onClick={() => setNewTopicOpen(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Topic
        </Button>
      </div>

      <Tabs defaultValue="ijmb" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ijmb">IJMB Forum</TabsTrigger>
          <TabsTrigger value="jupeb">JUPEB Forum</TabsTrigger>
        </TabsList>

        <TabsContent value="ijmb" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search topics..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="filter-category" className="sr-only">
                Filter by category
              </Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger id="filter-category" className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="admission">Admission</SelectItem>
                  <SelectItem value="academics">Academics</SelectItem>
                  <SelectItem value="exams">Exams</SelectItem>
                  <SelectItem value="centers">Centers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic) => (
                <Card key={topic.id} className={`overflow-hidden ${topic.isSticky ? "border-primary" : ""}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {topic.isSticky && <Badge variant="default">Sticky</Badge>}
                          {topic.isLocked && <Badge variant="destructive">Locked</Badge>}
                          <span>{topic.title}</span>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                            <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{topic.author.name}</span>
                          <span>•</span>
                          <span>{new Date(topic.createdAt).toLocaleDateString()}</span>
                        </CardDescription>
                      </div>
                      {getCategoryBadge(topic.category)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm line-clamp-2">{topic.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{topic.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{topic.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{topic.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Last reply {new Date(topic.lastActivity).toLocaleDateString()}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No topics found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setFilterCategory("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="jupeb" className="space-y-6">
          {/* Same structure as IJMB tab, data will be loaded based on activeTab */}
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search topics..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="filter-category-jupeb" className="sr-only">
                Filter by category
              </Label>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger id="filter-category-jupeb" className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="admission">Admission</SelectItem>
                  <SelectItem value="academics">Academics</SelectItem>
                  <SelectItem value="exams">Exams</SelectItem>
                  <SelectItem value="centers">Centers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic) => (
                <Card key={topic.id} className={`overflow-hidden ${topic.isSticky ? "border-primary" : ""}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">
                          {topic.isSticky && <Badge variant="default">Sticky</Badge>}
                          {topic.isLocked && <Badge variant="destructive">Locked</Badge>}
                          <span>{topic.title}</span>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                            <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{topic.author.name}</span>
                          <span>•</span>
                          <span>{new Date(topic.createdAt).toLocaleDateString()}</span>
                        </CardDescription>
                      </div>
                      {getCategoryBadge(topic.category)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="text-sm line-clamp-2">{topic.content}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{topic.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{topic.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{topic.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Last reply {new Date(topic.lastActivity).toLocaleDateString()}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No topics found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setFilterCategory("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={newTopicOpen} onOpenChange={setNewTopicOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Topic</DialogTitle>
            <DialogDescription>Start a new discussion in the {activeTab.toUpperCase()} forum</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreateTopic} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic-title">Title</Label>
              <Input
                id="topic-title"
                placeholder="Enter a descriptive title for your topic"
                value={newTopicForm.title}
                onChange={(e) => setNewTopicForm({ ...newTopicForm, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic-category">Category</Label>
              <Select
                value={newTopicForm.category}
                onValueChange={(value) => setNewTopicForm({ ...newTopicForm, category: value })}
              >
                <SelectTrigger id="topic-category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="admission">Admission</SelectItem>
                  <SelectItem value="academics">Academics</SelectItem>
                  <SelectItem value="exams">Exams</SelectItem>
                  <SelectItem value="centers">Centers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic-content">Content</Label>
              <Textarea
                id="topic-content"
                placeholder="Share your thoughts, questions, or experiences..."
                value={newTopicForm.content}
                onChange={(e) => setNewTopicForm({ ...newTopicForm, content: e.target.value })}
                className="min-h-[200px]"
                required
              />
            </div>

            <DialogFooter>
              <Button type="submit" className="flex items-center gap-2">
                Post Topic
                <Send className="h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
