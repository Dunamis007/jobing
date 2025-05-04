"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  FileText,
  Building,
  Wallet,
  UserCheck,
  Languages,
  MapPin,
  Home,
  HelpCircle,
  Calendar,
  Globe,
  AlertTriangle,
  Heart,
  Star,
  ChevronRight,
  Download,
  ExternalLink,
  MessageSquare,
} from "lucide-react"

// Mock data for the travel guide
const popularDestinations = [
  {
    id: 1,
    name: "United Kingdom",
    region: "Europe",
    visaComplexity: "Medium",
    averageCost: "$2,500 - $3,500",
    popularCities: ["London", "Manchester", "Edinburgh"],
    image: "/placeholder.svg?height=100&width=200",
    rating: 4.7,
    reviews: 342,
  },
  {
    id: 2,
    name: "Canada",
    region: "North America",
    visaComplexity: "Medium",
    averageCost: "$2,000 - $3,000",
    popularCities: ["Toronto", "Vancouver", "Montreal"],
    image: "/placeholder.svg?height=100&width=200",
    rating: 4.8,
    reviews: 289,
  },
  {
    id: 3,
    name: "Australia",
    region: "Oceania",
    visaComplexity: "Medium",
    averageCost: "$3,000 - $4,000",
    popularCities: ["Sydney", "Melbourne", "Brisbane"],
    image: "/placeholder.svg?height=100&width=200",
    rating: 4.6,
    reviews: 256,
  },
  {
    id: 4,
    name: "United States",
    region: "North America",
    visaComplexity: "High",
    averageCost: "$3,500 - $5,000",
    popularCities: ["New York", "Los Angeles", "Chicago"],
    image: "/placeholder.svg?height=100&width=200",
    rating: 4.5,
    reviews: 412,
  },
]

const recentGuides = [
  {
    id: 1,
    title: "Complete Guide to UK Student Visa Application",
    category: "Visa",
    date: "2 days ago",
    readTime: "15 min read",
    isNew: true,
  },
  {
    id: 2,
    title: "Financial Planning for International Travel: Budgeting Tips",
    category: "Financial",
    date: "1 week ago",
    readTime: "12 min read",
    isNew: true,
  },
  {
    id: 3,
    title: "Cultural Etiquette: Do's and Don'ts in Asian Countries",
    category: "Cultural",
    date: "2 weeks ago",
    readTime: "10 min read",
    isNew: false,
  },
  {
    id: 4,
    title: "How to Find Reliable Travel Agents for International Trips",
    category: "Agents",
    date: "3 weeks ago",
    readTime: "8 min read",
    isNew: false,
  },
]

const upcomingWebinars = [
  {
    id: 1,
    title: "Navigating the US Visa Interview Process",
    date: "May 15, 2023",
    time: "2:00 PM - 3:30 PM",
    host: "Sarah Johnson",
    hostTitle: "Immigration Consultant",
    attendees: 156,
  },
  {
    id: 2,
    title: "Budget Travel: Making the Most of Your Money Abroad",
    date: "May 22, 2023",
    time: "1:00 PM - 2:00 PM",
    host: "Michael Chen",
    hostTitle: "Travel Financial Advisor",
    attendees: 98,
  },
  {
    id: 3,
    title: "Health and Safety Tips for International Travelers",
    date: "May 29, 2023",
    time: "3:00 PM - 4:00 PM",
    host: "Dr. Emily Rodriguez",
    hostTitle: "Travel Medicine Specialist",
    attendees: 124,
  },
]

const travelerStories = [
  {
    id: 1,
    title: "My First Month in London: Challenges and Triumphs",
    author: "David Oyelowo",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "April 28, 2023",
    excerpt: "Moving to London was both exciting and overwhelming. Here's how I navigated the first month...",
    likes: 87,
    comments: 23,
  },
  {
    id: 2,
    title: "How I Secured Affordable Accommodation in Toronto",
    author: "Chioma Eze",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "April 15, 2023",
    excerpt: "Finding a place to stay in Toronto seemed impossible until I discovered these resources...",
    likes: 124,
    comments: 45,
  },
  {
    id: 3,
    title: "Navigating Cultural Differences in Japan: My Experience",
    author: "Tunde Bakare",
    authorImage: "/placeholder.svg?height=40&width=40",
    date: "March 30, 2023",
    excerpt: "Japan's culture is fascinating but can be challenging for newcomers. Here's what I learned...",
    likes: 156,
    comments: 37,
  },
]

export default function TravelGuidePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("overview")

  // Filter destinations based on search query
  const filteredDestinations = popularDestinations.filter(
    (destination) =>
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.popularCities.some((city) => city.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <DashboardShell>
      <DashboardHeader heading="Travel Guide" text="Comprehensive resources for planning your international travel">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Travel Checklist
        </Button>
      </DashboardHeader>

      <div className="space-y-6">
        {/* Search and Quick Links */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search destinations, guides, or resources..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Visa Guides
            </Button>
            <Button variant="outline" size="sm">
              <Wallet className="mr-2 h-4 w-4" />
              Financial Tools
            </Button>
            <Button variant="outline" size="sm">
              <Languages className="mr-2 h-4 w-4" />
              Cultural Tips
            </Button>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Featured Destinations */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Popular Destinations</h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredDestinations.map((destination) => (
                  <Card key={destination.id} className="overflow-hidden">
                    <div className="relative h-32">
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2">{destination.region}</Badge>
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-lg">{destination.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{destination.rating}</span>
                        <span className="mx-1">•</span>
                        <span>{destination.reviews} reviews</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-muted-foreground">Visa Complexity</p>
                          <p className="font-medium">{destination.visaComplexity}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Avg. Cost</p>
                          <p className="font-medium">{destination.averageCost}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Guides */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Guides</h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentGuides.map((guide) => (
                  <Card key={guide.id} className="flex">
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{guide.category}</Badge>
                        {guide.isNew && <Badge className="bg-green-500">New</Badge>}
                      </div>
                      <h3 className="font-medium mb-1">{guide.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{guide.date}</span>
                        <span className="mx-1">•</span>
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center pr-4">
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Webinars */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Upcoming Webinars</h2>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingWebinars.map((webinar) => (
                  <Card key={webinar.id}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{webinar.title}</CardTitle>
                          <CardDescription>
                            {webinar.date} • {webinar.time}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{webinar.attendees} attending</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src="/placeholder.svg?height=30&width=30" alt={webinar.host} />
                          <AvatarFallback>{webinar.host.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{webinar.host}</p>
                          <p className="text-xs text-muted-foreground">{webinar.hostTitle}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button size="sm">Register Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>Essential resources for your travel planning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <FileText className="h-6 w-6" />
                    <span>Visa Guides</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <Building className="h-6 w-6" />
                    <span>Embassy Contacts</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <Wallet className="h-6 w-6" />
                    <span>Financial Tools</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <UserCheck className="h-6 w-6" />
                    <span>Verified Agents</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <Languages className="h-6 w-6" />
                    <span>Cultural Guide</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <MapPin className="h-6 w-6" />
                    <span>Itinerary Planner</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <Home className="h-6 w-6" />
                    <span>Accommodation</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 gap-2">
                    <HelpCircle className="h-6 w-6" />
                    <span>Post-Arrival Help</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Destinations Tab */}
          <TabsContent value="destinations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Explore Destinations</CardTitle>
                <CardDescription>Detailed information about popular travel destinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDestinations.map((destination) => (
                    <div key={destination.id} className="border rounded-lg overflow-hidden">
                      <div className="relative h-40">
                        <img
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 text-white">
                          <h3 className="text-xl font-bold">{destination.name}</h3>
                          <p className="text-sm opacity-90">{destination.region}</p>
                        </div>
                        <Badge className="absolute top-2 right-2">{destination.region}</Badge>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Visa Complexity</p>
                            <p className="font-medium">{destination.visaComplexity}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Average Cost</p>
                            <p className="font-medium">{destination.averageCost}</p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="text-sm text-muted-foreground mb-1">Popular Cities</p>
                          <div className="flex flex-wrap gap-2">
                            {destination.popularCities.map((city, index) => (
                              <Badge key={index} variant="outline">
                                {city}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{destination.rating}</span>
                            <span className="text-sm text-muted-foreground ml-1">({destination.reviews} reviews)</span>
                          </div>
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Visa Guides */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Visa Guides</CardTitle>
                  </div>
                  <CardDescription>Step-by-step visa application guides</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">UK Student Visa Guide</span>
                      </div>
                      <Badge variant="outline">Updated</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">US Tourist Visa Guide</span>
                      </div>
                      <Badge variant="outline">Popular</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Canada Work Visa Guide</span>
                      </div>
                      <Badge className="bg-green-500">New</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Australia Student Visa</span>
                      </div>
                      <Badge variant="outline">Popular</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Visa Guides
                  </Button>
                </CardFooter>
              </Card>

              {/* Embassy Contacts */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    <CardTitle>Embassy Contacts</CardTitle>
                  </div>
                  <CardDescription>Directory of embassy and consulate contacts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50">
                      <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">UK Embassy in Nigeria</p>
                        <p className="text-xs text-muted-foreground">Lagos & Abuja Offices</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Button variant="ghost" size="xs" className="h-6 px-2">
                            <ExternalLink className="h-3 w-3 mr-1" /> Website
                          </Button>
                          <Button variant="ghost" size="xs" className="h-6 px-2">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50">
                      <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">US Embassy in Nigeria</p>
                        <p className="text-xs text-muted-foreground">Lagos & Abuja Offices</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Button variant="ghost" size="xs" className="h-6 px-2">
                            <ExternalLink className="h-3 w-3 mr-1" /> Website
                          </Button>
                          <Button variant="ghost" size="xs" className="h-6 px-2">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50">
                      <Building className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Canadian Embassy in Nigeria</p>
                        <p className="text-xs text-muted-foreground">Lagos Office</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Button variant="ghost" size="xs" className="h-6 px-2">
                            <ExternalLink className="h-3 w-3 mr-1" /> Website
                          </Button>
                          <Button variant="ghost" size="xs" className="h-6 px-2">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Embassy Contacts
                  </Button>
                </CardFooter>
              </Card>

              {/* Financial Planning */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-primary" />
                    <CardTitle>Financial Planning</CardTitle>
                  </div>
                  <CardDescription>Tools and resources for travel budgeting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-md bg-muted/50">
                      <h4 className="text-sm font-medium mb-1">Travel Budget Calculator</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        Plan your expenses with our interactive calculator
                      </p>
                      <Button size="sm" className="w-full">
                        Launch Calculator
                      </Button>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50">
                      <h4 className="text-sm font-medium mb-1">Currency Converter</h4>
                      <p className="text-xs text-muted-foreground mb-2">Real-time exchange rates for 160+ currencies</p>
                      <Button size="sm" className="w-full">
                        Convert Currency
                      </Button>
                    </div>
                    <div className="p-3 rounded-md bg-muted/50">
                      <h4 className="text-sm font-medium mb-1">Cost of Living Comparison</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        Compare living costs between cities worldwide
                      </p>
                      <Button size="sm" className="w-full">
                        Compare Costs
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Access All Financial Tools
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Safety & Health Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <CardTitle>Safety & Health Information</CardTitle>
                </div>
                <CardDescription>Essential health and safety resources for travelers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-md border">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <h3 className="font-medium">Health Requirements</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Vaccination requirements, health insurance, and medical recommendations for different countries.
                    </p>
                    <Button variant="outline" size="sm">
                      View Health Guide
                    </Button>
                  </div>
                  <div className="p-4 rounded-md border">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h3 className="font-medium">Safety Advisories</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Current travel advisories, safety tips, and emergency contact information for travelers.
                    </p>
                    <Button variant="outline" size="sm">
                      Check Advisories
                    </Button>
                  </div>
                  <div className="p-4 rounded-md border">
                    <div className="flex items-center gap-2 mb-2">
                      <Languages className="h-5 w-5 text-blue-500" />
                      <h3 className="font-medium">Cultural Guidelines</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Cultural norms, etiquette, and language basics to help you navigate different countries.
                    </p>
                    <Button variant="outline" size="sm">
                      Explore Guidelines
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            {/* Traveler Stories */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Traveler Stories</h2>
                <Button variant="outline" size="sm">
                  Share Your Experience
                </Button>
              </div>
              <div className="space-y-4">
                {travelerStories.map((story) => (
                  <Card key={story.id}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={story.authorImage} alt={story.author} />
                          <AvatarFallback>{story.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{story.title}</CardTitle>
                          <CardDescription>
                            By {story.author} • {story.date}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p className="text-sm text-muted-foreground">{story.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Heart className="h-4 w-4" /> {story.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <MessageSquare className="h-4 w-4" /> {story.comments}
                        </Button>
                      </div>
                      <Button size="sm">Read More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Community Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Community Resources</CardTitle>
                <CardDescription>Connect with fellow travelers and access shared resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-md border">
                    <h3 className="font-medium mb-2">Travel Forums</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Join discussions with experienced travelers and get answers to your questions.
                    </p>
                    <Progress value={75} className="h-1 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1,245 members</span>
                      <span>Active now</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-md border">
                    <h3 className="font-medium mb-2">Resource Library</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Access user-contributed guides, templates, and checklists for travel planning.
                    </p>
                    <Progress value={60} className="h-1 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>350+ resources</span>
                      <span>Updated daily</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-md border">
                    <h3 className="font-medium mb-2">Travel Buddies</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Find travel companions heading to the same destination as you.
                    </p>
                    <Progress value={40} className="h-1 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>520 active travelers</span>
                      <span>Find a match</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-md border">
                    <h3 className="font-medium mb-2">Local Guides Network</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect with locals who can show you around or provide insider tips.
                    </p>
                    <Progress value={85} className="h-1 mb-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>750+ guides</span>
                      <span>In 120+ countries</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Our Community</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
