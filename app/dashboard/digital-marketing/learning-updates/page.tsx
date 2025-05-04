"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Calendar, BookOpen, FileText, Bell, ArrowRight } from "lucide-react"

export default function LearningUpdatesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const updates = {
    latest: [
      {
        id: 1,
        title: "iOS 17 Privacy Changes: Impact on Digital Marketing",
        description: "Learn how the latest iOS privacy features affect tracking and advertising.",
        date: "2 days ago",
        category: "Privacy",
        isNew: true,
      },
      {
        id: 2,
        title: "Google Analytics 4 Advanced Techniques",
        description: "Master the latest GA4 features for better data insights and reporting.",
        date: "5 days ago",
        category: "Analytics",
        isNew: true,
      },
      {
        id: 3,
        title: "Meta's New Ad Targeting Options",
        description: "Explore the latest targeting capabilities across Facebook and Instagram.",
        date: "1 week ago",
        category: "Social Media",
        isNew: false,
      },
      {
        id: 4,
        title: "TikTok Marketing API Updates",
        description: "New developer tools for TikTok marketing automation and integration.",
        date: "2 weeks ago",
        category: "Social Media",
        isNew: false,
      },
    ],
    courses: [
      {
        id: 1,
        title: "Advanced SEO Masterclass 2023",
        description: "Updated with the latest algorithm changes and optimization techniques.",
        date: "Updated 3 days ago",
        category: "SEO",
        isNew: true,
        progress: 0,
      },
      {
        id: 2,
        title: "Content Marketing Strategy",
        description: "Fresh examples and case studies from successful campaigns.",
        date: "Updated 1 week ago",
        category: "Content",
        isNew: true,
        progress: 25,
      },
      {
        id: 3,
        title: "Email Marketing Automation",
        description: "New modules on AI-powered personalization and segmentation.",
        date: "Updated 2 weeks ago",
        category: "Email",
        isNew: false,
        progress: 68,
      },
      {
        id: 4,
        title: "Digital Marketing Analytics",
        description: "Completely revamped with GA4 and modern tracking methods.",
        date: "Updated 3 weeks ago",
        category: "Analytics",
        isNew: false,
        progress: 42,
      },
    ],
    resources: [
      {
        id: 1,
        title: "2023 Digital Marketing Benchmark Report",
        description: "Comprehensive industry benchmarks across all digital channels.",
        date: "Added 1 day ago",
        category: "Report",
        isNew: true,
        type: "PDF",
      },
      {
        id: 2,
        title: "Social Media Content Calendar Template",
        description: "Updated template with AI integration and performance tracking.",
        date: "Added 4 days ago",
        category: "Template",
        isNew: true,
        type: "Spreadsheet",
      },
      {
        id: 3,
        title: "Marketing Budget Calculator",
        description: "New ROI forecasting features and channel allocation optimizer.",
        date: "Added 1 week ago",
        category: "Tool",
        isNew: false,
        type: "Spreadsheet",
      },
      {
        id: 4,
        title: "SEO Audit Checklist",
        description: "Updated for 2023 with Core Web Vitals and AI content considerations.",
        date: "Added 2 weeks ago",
        category: "Checklist",
        isNew: false,
        type: "PDF",
      },
    ],
  }

  const filteredUpdates = {
    latest: updates.latest.filter(
      (update) =>
        update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.description.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
    courses: updates.courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
    resources: updates.resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Learning Updates</h1>
        <p className="text-muted-foreground">
          Stay current with the latest digital marketing updates, course refreshes, and new resources.
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search updates..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="latest" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="latest">
            <Bell className="mr-2 h-4 w-4" />
            Latest
          </TabsTrigger>
          <TabsTrigger value="courses">
            <BookOpen className="mr-2 h-4 w-4" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="resources">
            <FileText className="mr-2 h-4 w-4" />
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="latest" className="space-y-4">
          {filteredUpdates.latest.length > 0 ? (
            filteredUpdates.latest.map((update) => (
              <Card key={update.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center">
                        {update.title}
                        {update.isNew && <Badge className="ml-2 bg-green-500 hover:bg-green-600">New</Badge>}
                      </CardTitle>
                      <CardDescription className="mt-1">{update.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {update.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{update.category}</Badge>
                    <Button variant="ghost" size="sm" className="text-sm">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <p className="text-muted-foreground mb-2">No updates found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          {filteredUpdates.courses.length > 0 ? (
            filteredUpdates.courses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center">
                        {course.title}
                        {course.isNew && <Badge className="ml-2 bg-green-500 hover:bg-green-600">Updated</Badge>}
                      </CardTitle>
                      <CardDescription className="mt-1">{course.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {course.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{course.progress}% complete</span>
                      <span className="text-sm font-medium">{course.progress > 0 ? "Continue" : "Start"} Learning</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Button variant="ghost" size="sm" className="text-sm">
                        View Course <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <p className="text-muted-foreground mb-2">No courses found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          {filteredUpdates.resources.length > 0 ? (
            filteredUpdates.resources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center">
                        {resource.title}
                        {resource.isNew && <Badge className="ml-2 bg-green-500 hover:bg-green-600">New</Badge>}
                      </CardTitle>
                      <CardDescription className="mt-1">{resource.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {resource.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="text-sm">
                      Download <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10">
                <p className="text-muted-foreground mb-2">No resources found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
