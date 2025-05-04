"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Video, Headphones, Search, Clock, Filter } from "lucide-react"

export default function OfflineResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const resources = {
    guides: [
      {
        id: 1,
        title: "Complete SEO Guide 2023",
        description: "Comprehensive guide to search engine optimization strategies.",
        type: "PDF",
        size: "15.2 MB",
        duration: null,
        downloadCount: 1245,
        lastUpdated: "2023-10-15",
      },
      {
        id: 2,
        title: "Social Media Marketing Handbook",
        description: "In-depth strategies for all major social media platforms.",
        type: "PDF",
        size: "12.8 MB",
        duration: null,
        downloadCount: 987,
        lastUpdated: "2023-11-02",
      },
      {
        id: 3,
        title: "Email Marketing Templates Collection",
        description: "Ready-to-use templates for various email marketing campaigns.",
        type: "ZIP",
        size: "8.5 MB",
        duration: null,
        downloadCount: 756,
        lastUpdated: "2023-09-28",
      },
    ],
    videos: [
      {
        id: 4,
        title: "Google Ads Masterclass",
        description: "Complete video course on Google Ads campaign management.",
        type: "MP4",
        size: "1.2 GB",
        duration: "4h 32m",
        downloadCount: 823,
        lastUpdated: "2023-10-05",
      },
      {
        id: 5,
        title: "Content Creation Workshop",
        description: "Learn to create engaging content for multiple platforms.",
        type: "MP4",
        size: "950 MB",
        duration: "3h 15m",
        downloadCount: 612,
        lastUpdated: "2023-11-10",
      },
      {
        id: 6,
        title: "Analytics & Reporting Tutorial",
        description: "Step-by-step guide to digital marketing analytics.",
        type: "MP4",
        size: "875 MB",
        duration: "2h 45m",
        downloadCount: 543,
        lastUpdated: "2023-09-15",
      },
    ],
    tools: [
      {
        id: 7,
        title: "Marketing ROI Calculator",
        description: "Excel tool to calculate return on marketing investments.",
        type: "XLSX",
        size: "2.3 MB",
        duration: null,
        downloadCount: 1532,
        lastUpdated: "2023-10-22",
      },
      {
        id: 8,
        title: "Social Media Content Calendar",
        description: "Customizable content planning template for social media.",
        type: "XLSX",
        size: "1.8 MB",
        duration: null,
        downloadCount: 1245,
        lastUpdated: "2023-11-05",
      },
      {
        id: 9,
        title: "SEO Audit Checklist",
        description: "Comprehensive checklist for conducting SEO audits.",
        type: "PDF",
        size: "3.5 MB",
        duration: null,
        downloadCount: 987,
        lastUpdated: "2023-09-30",
      },
    ],
    podcasts: [
      {
        id: 10,
        title: "Digital Marketing Trends 2023",
        description: "Discussion on the latest trends in digital marketing.",
        type: "MP3",
        size: "85 MB",
        duration: "58m",
        downloadCount: 432,
        lastUpdated: "2023-10-18",
      },
      {
        id: 11,
        title: "Conversion Optimization Strategies",
        description: "Expert insights on improving conversion rates.",
        type: "MP3",
        size: "92 MB",
        duration: "1h 05m",
        downloadCount: 365,
        lastUpdated: "2023-11-08",
      },
      {
        id: 12,
        title: "Marketing Automation Deep Dive",
        description: "Detailed exploration of marketing automation techniques.",
        type: "MP3",
        size: "78 MB",
        duration: "52m",
        downloadCount: 298,
        lastUpdated: "2023-09-25",
      },
    ],
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
      case "ZIP":
      case "XLSX":
        return <FileText className="h-5 w-5" />
      case "MP4":
        return <Video className="h-5 w-5" />
      case "MP3":
        return <Headphones className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-red-100 text-red-800"
      case "ZIP":
        return "bg-purple-100 text-purple-800"
      case "XLSX":
        return "bg-green-100 text-green-800"
      case "MP4":
        return "bg-blue-100 text-blue-800"
      case "MP3":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filterResources = (resources: any[]) => {
    if (!searchQuery) return resources
    return resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Offline Resources</h1>
        <p className="text-muted-foreground">
          Download resources for offline access to continue learning without an internet connection
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="sm:w-auto w-full">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        </TabsList>

        {Object.entries(resources).map(([category, resourceList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterResources(resourceList).map((resource) => (
                <Card key={resource.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-md ${getTypeColor(resource.type)}`}>
                          {getResourceIcon(resource.type)}
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="mt-2">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Type:</span>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Size:</span>
                        <span>{resource.size}</span>
                      </div>
                      {resource.duration && (
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Duration:</span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {resource.duration}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 col-span-2 mt-1">
                        <span className="font-medium">Last Updated:</span>
                        <span>{resource.lastUpdated}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download for Offline Use
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filterResources(resourceList).length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No resources found matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Offline Access Instructions</CardTitle>
          <CardDescription>How to access and use downloaded resources without an internet connection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">1. Download Resources</h3>
            <p className="text-sm text-muted-foreground">
              Click the "Download for Offline Use" button on any resource you want to access offline.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">2. Access Downloaded Content</h3>
            <p className="text-sm text-muted-foreground">
              All downloaded content is available in the "My Downloads" section, accessible even without an internet
              connection.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">3. Sync Progress</h3>
            <p className="text-sm text-muted-foreground">
              Your learning progress is automatically synced when you reconnect to the internet.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
