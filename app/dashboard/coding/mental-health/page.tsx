"use client"

import { useState } from "react"
import { Search, BookOpen, Video, Calendar, Clock, ExternalLink, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

// Mock data for resources
const resources = [
  {
    id: 1,
    title: "Managing Burnout in Tech",
    type: "Article",
    author: "Dr. Sarah Johnson",
    description:
      "Learn how to recognize the signs of burnout and strategies to prevent it in the fast-paced tech industry.",
    tags: ["Burnout", "Stress Management", "Work-Life Balance"],
    readTime: "10 min read",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Mindfulness for Programmers",
    type: "Video",
    author: "Michael Chen",
    description:
      "A guided meditation and mindfulness practice specifically designed for programmers and tech professionals.",
    tags: ["Mindfulness", "Meditation", "Focus"],
    duration: "15 min",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Overcoming Imposter Syndrome",
    type: "Article",
    author: "Dr. Emily Williams",
    description:
      "Practical strategies to overcome imposter syndrome, a common challenge for many in the tech industry.",
    tags: ["Imposter Syndrome", "Self-Confidence", "Career Growth"],
    readTime: "12 min read",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    title: "Ergonomics for Developers",
    type: "Guide",
    author: "Dr. James Wilson",
    description: "A comprehensive guide to setting up an ergonomic workspace to prevent physical strain and injury.",
    tags: ["Ergonomics", "Physical Health", "Workspace"],
    readTime: "20 min read",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 5,
    title: "Managing Anxiety During Coding Interviews",
    type: "Video",
    author: "Priya Patel",
    description: "Techniques to manage anxiety and perform at your best during technical interviews.",
    tags: ["Anxiety", "Interviews", "Career"],
    duration: "18 min",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 6,
    title: "Digital Detox for Tech Professionals",
    type: "Guide",
    author: "Alex Rodriguez",
    description: "How to take a break from technology and why it's essential for your mental health.",
    tags: ["Digital Detox", "Screen Time", "Work-Life Balance"],
    readTime: "15 min read",
    image: "/placeholder.svg?height=100&width=200",
  },
]

// Mock data for support services
const supportServices = [
  {
    id: 1,
    name: "Tech Minds Counseling",
    description: "Affordable online counseling services specifically for tech professionals.",
    services: ["Individual Counseling", "Group Therapy", "Career Counseling"],
    cost: "Starting at $30/session",
    availability: "24/7",
    website: "https://example.com",
    contact: "contact@example.com",
  },
  {
    id: 2,
    name: "Developer Wellness Program",
    description: "A holistic wellness program designed for developers and tech workers.",
    services: ["Mental Health Support", "Physical Wellness", "Work-Life Balance Coaching"],
    cost: "Free for students",
    availability: "Weekdays 9 AM - 5 PM",
    website: "https://example.com",
    contact: "support@example.com",
  },
  {
    id: 3,
    name: "Code & Calm",
    description: "Peer support network for tech professionals facing mental health challenges.",
    services: ["Peer Support Groups", "Anonymous Chat Support", "Resource Library"],
    cost: "Free",
    availability: "24/7",
    website: "https://example.com",
    contact: "help@example.com",
  },
]

// Mock data for events
const events = [
  {
    id: 1,
    title: "Mental Health in Tech Workshop",
    organizer: "TechWellness Foundation",
    date: "2024-04-15",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    description:
      "A workshop focused on mental health challenges specific to the tech industry and strategies to address them.",
    topics: ["Stress Management", "Burnout Prevention", "Healthy Work Habits"],
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Mindful Coding Retreat",
    organizer: "Code Mindfully",
    date: "2024-05-20",
    time: "9:00 AM - 5:00 PM",
    location: "Lagos, Nigeria",
    description: "A day-long retreat combining coding sessions with mindfulness practices and wellness activities.",
    topics: ["Mindfulness", "Focused Coding", "Community Building"],
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Tech Work-Life Balance Panel",
    organizer: "Balance in Tech",
    date: "2024-04-25",
    time: "6:00 PM - 8:00 PM",
    location: "Online",
    description:
      "A panel discussion with tech professionals who have successfully maintained a healthy work-life balance.",
    topics: ["Work-Life Balance", "Setting Boundaries", "Career Sustainability"],
    image: "/placeholder.svg?height=100&width=200",
  },
]

export default function MentalHealth() {
  const [searchQuery, setSearchQuery] = useState("")
  const [resourceTypeFilter, setResourceTypeFilter] = useState("all")
  const [savedResources, setSavedResources] = useState<number[]>([])
  const { toast } = useToast()

  const handleSaveResource = (resourceId: number, resourceTitle: string) => {
    if (savedResources.includes(resourceId)) {
      setSavedResources(savedResources.filter((id) => id !== resourceId))
      toast({
        title: "Resource Removed",
        description: `${resourceTitle} has been removed from your saved resources.`,
      })
    } else {
      setSavedResources([...savedResources, resourceId])
      toast({
        title: "Resource Saved",
        description: `${resourceTitle} has been saved to your resources.`,
      })
    }
  }

  const handleContactService = (serviceName: string) => {
    toast({
      title: "Contact Information Copied",
      description: `Contact information for ${serviceName} has been copied to your clipboard.`,
    })
  }

  const handleRegisterEvent = (eventId: number, eventTitle: string) => {
    toast({
      title: "Registration Successful",
      description: `You have registered for ${eventTitle}. You'll receive a confirmation email shortly.`,
    })
  }

  const filterResources = () => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesType =
        resourceTypeFilter === "all" || resource.type.toLowerCase() === resourceTypeFilter.toLowerCase()

      return matchesSearch && matchesType
    })
  }

  const filteredResources = filterResources()

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mental Health Resources</h1>
        <p className="text-muted-foreground">Support for your mental wellbeing while navigating the tech industry</p>
      </div>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="support">Support Services</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={resourceTypeFilter}
                onChange={(e) => setResourceTypeFilter(e.target.value)}
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="all">All Types</option>
                <option value="article">Articles</option>
                <option value="video">Videos</option>
                <option value="guide">Guides</option>
              </select>
            </div>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden">
                  <div className="h-[100px] bg-muted">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {resource.type}
                        </Badge>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">By {resource.author}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSaveResource(resource.id, resource.title)}
                        className={savedResources.includes(resource.id) ? "text-primary" : ""}
                      >
                        <Bookmark className={`h-5 w-5 ${savedResources.includes(resource.id) ? "fill-primary" : ""}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="line-clamp-2 mb-3">{resource.description}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {resource.type === "Video" ? (
                        <div className="flex items-center">
                          <Video className="h-4 w-4 mr-1" />
                          {resource.duration}
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {resource.readTime}
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="w-full">
                      {resource.type === "Video" ? (
                        <>
                          <Video className="h-4 w-4 mr-2" />
                          Watch Video
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read {resource.type}
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {service.cost}
                  </Badge>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Services Offered:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {service.services.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Website:</span>
                      <a
                        href={service.website}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="default" className="flex-1" onClick={() => handleContactService(service.name)}>
                    Contact
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="h-[100px] bg-muted">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">By {event.organizer}</p>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {event.location}
                    </Badge>
                  </div>
                  <CardDescription className="mb-3">{event.description}</CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {event.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => handleRegisterEvent(event.id, event.title)}
                  >
                    Register
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
