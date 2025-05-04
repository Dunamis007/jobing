"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Filter,
  Building,
  ShoppingCart,
  Landmark,
  Plane,
  Car,
  Heart,
  Utensils,
  Tv,
  ArrowRight,
} from "lucide-react"

export default function IndustryCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const industries = [
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      courses: [
        {
          id: 1,
          title: "E-commerce Marketing Fundamentals",
          description: "Learn the essentials of marketing for online stores.",
          level: "Beginner",
          duration: "6 hours",
          modules: 12,
          progress: 0,
          certification: true,
          industry: "E-commerce",
        },
        {
          id: 2,
          title: "Conversion Rate Optimization for E-commerce",
          description: "Advanced techniques to improve online store conversions.",
          level: "Intermediate",
          duration: "8 hours",
          modules: 15,
          progress: 0,
          certification: true,
          industry: "E-commerce",
        },
        {
          id: 3,
          title: "E-commerce Analytics & Reporting",
          description: "Master data analysis for online retail businesses.",
          level: "Advanced",
          duration: "10 hours",
          modules: 18,
          progress: 0,
          certification: true,
          industry: "E-commerce",
        },
      ],
    },
    {
      id: "b2b",
      name: "B2B",
      icon: Building,
      courses: [
        {
          id: 4,
          title: "B2B Lead Generation Strategies",
          description: "Effective techniques for generating B2B leads.",
          level: "Intermediate",
          duration: "7 hours",
          modules: 14,
          progress: 0,
          certification: true,
          industry: "B2B",
        },
        {
          id: 5,
          title: "Account-Based Marketing",
          description: "Targeted marketing strategies for key business accounts.",
          level: "Advanced",
          duration: "9 hours",
          modules: 16,
          progress: 0,
          certification: true,
          industry: "B2B",
        },
        {
          id: 6,
          title: "B2B Content Marketing",
          description: "Create compelling content for business audiences.",
          level: "Intermediate",
          duration: "8 hours",
          modules: 15,
          progress: 0,
          certification: true,
          industry: "B2B",
        },
      ],
    },
    {
      id: "nonprofit",
      name: "Non-Profit",
      icon: Heart,
      courses: [
        {
          id: 7,
          title: "Digital Fundraising Strategies",
          description: "Effective online fundraising techniques for non-profits.",
          level: "Beginner",
          duration: "6 hours",
          modules: 12,
          progress: 0,
          certification: true,
          industry: "Non-Profit",
        },
        {
          id: 8,
          title: "Donor Engagement & Retention",
          description: "Strategies to engage and retain donors online.",
          level: "Intermediate",
          duration: "7 hours",
          modules: 14,
          progress: 0,
          certification: true,
          industry: "Non-Profit",
        },
        {
          id: 9,
          title: "Impact Storytelling for Non-Profits",
          description: "Craft compelling stories to showcase your organization's impact.",
          level: "Intermediate",
          duration: "5 hours",
          modules: 10,
          progress: 0,
          certification: true,
          industry: "Non-Profit",
        },
      ],
    },
    {
      id: "finance",
      name: "Finance",
      icon: Landmark,
      courses: [
        {
          id: 10,
          title: "Financial Services Marketing",
          description: "Specialized marketing strategies for financial institutions.",
          level: "Intermediate",
          duration: "8 hours",
          modules: 16,
          progress: 0,
          certification: true,
          industry: "Finance",
        },
        {
          id: 11,
          title: "Compliance in Financial Marketing",
          description: "Navigate regulations while marketing financial products.",
          level: "Advanced",
          duration: "6 hours",
          modules: 12,
          progress: 0,
          certification: true,
          industry: "Finance",
        },
        {
          id: 12,
          title: "FinTech Marketing Strategies",
          description: "Modern marketing approaches for financial technology companies.",
          level: "Advanced",
          duration: "9 hours",
          modules: 18,
          progress: 0,
          certification: true,
          industry: "Finance",
        },
      ],
    },
    {
      id: "travel",
      name: "Travel & Tourism",
      icon: Plane,
      courses: [
        {
          id: 13,
          title: "Destination Marketing",
          description: "Promote travel destinations effectively online.",
          level: "Beginner",
          duration: "7 hours",
          modules: 14,
          progress: 0,
          certification: true,
          industry: "Travel & Tourism",
        },
        {
          id: 14,
          title: "Hotel & Accommodation Marketing",
          description: "Digital strategies for hotels and accommodation providers.",
          level: "Intermediate",
          duration: "8 hours",
          modules: 16,
          progress: 0,
          certification: true,
          industry: "Travel & Tourism",
        },
        {
          id: 15,
          title: "Tour & Experience Promotion",
          description: "Market tours and travel experiences to the right audience.",
          level: "Intermediate",
          duration: "6 hours",
          modules: 12,
          progress: 0,
          certification: true,
          industry: "Travel & Tourism",
        },
      ],
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: Car,
      courses: [
        {
          id: 16,
          title: "Automotive Digital Marketing",
          description: "Specialized strategies for marketing vehicles online.",
          level: "Intermediate",
          duration: "8 hours",
          modules: 16,
          progress: 0,
          certification: true,
          industry: "Automotive",
        },
        {
          id: 17,
          title: "Dealership Lead Generation",
          description: "Generate quality leads for automotive dealerships.",
          level: "Intermediate",
          duration: "7 hours",
          modules: 14,
          progress: 0,
          certification: true,
          industry: "Automotive",
        },
        {
          id: 18,
          title: "After-Sales Marketing",
          description: "Strategies for marketing services and parts to existing customers.",
          level: "Advanced",
          duration: "6 hours",
          modules: 12,
          progress: 0,
          certification: true,
          industry: "Automotive",
        },
      ],
    },
    {
      id: "food",
      name: "Food & Beverage",
      icon: Utensils,
      courses: [
        {
          id: 19,
          title: "Restaurant Marketing",
          description: "Digital strategies for restaurants and food services.",
          level: "Beginner",
          duration: "6 hours",
          modules: 12,
          progress: 0,
          certification: true,
          industry: "Food & Beverage",
        },
        {
          id: 20,
          title: "Food Delivery App Marketing",
          description: "Strategies for marketing food delivery services.",
          level: "Intermediate",
          duration: "7 hours",
          modules: 14,
          progress: 0,
          certification: true,
          industry: "Food & Beverage",
        },
        {
          id: 21,
          title: "Beverage Brand Promotion",
          description: "Market beverages and drink brands effectively online.",
          level: "Intermediate",
          duration: "5 hours",
          modules: 10,
          progress: 0,
          certification: true,
          industry: "Food & Beverage",
        },
      ],
    },
    {
      id: "entertainment",
      name: "Entertainment & Media",
      icon: Tv,
      courses: [
        {
          id: 22,
          title: "Entertainment Marketing",
          description: "Promote entertainment products and services online.",
          level: "Intermediate",
          duration: "8 hours",
          modules: 16,
          progress: 0,
          certification: true,
          industry: "Entertainment & Media",
        },
        {
          id: 23,
          title: "Streaming Service Promotion",
          description: "Marketing strategies for audio and video streaming platforms.",
          level: "Advanced",
          duration: "9 hours",
          modules: 18,
          progress: 0,
          certification: true,
          industry: "Entertainment & Media",
        },
        {
          id: 24,
          title: "Event Marketing",
          description: "Promote live and virtual events effectively.",
          level: "Intermediate",
          duration: "7 hours",
          modules: 14,
          progress: 0,
          certification: true,
          industry: "Entertainment & Media",
        },
      ],
    },
  ]

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filterCourses = (courses: any[]) => {
    if (!searchQuery) return courses
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.level.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Industry-Specific Courses</h1>
        <p className="text-muted-foreground">
          Specialized digital marketing courses tailored to different industries and business types
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search courses by industry, title, or level..."
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

      <Tabs defaultValue={industries[0].id} className="w-full">
        <TabsList className="flex flex-wrap h-auto py-2 px-2 overflow-x-auto">
          {industries.map((industry) => (
            <TabsTrigger key={industry.id} value={industry.id} className="flex items-center gap-1 py-2">
              <industry.icon className="h-4 w-4" />
              <span>{industry.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {industries.map((industry) => (
          <TabsContent key={industry.id} value={industry.id} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterCourses(industry.courses).map((course) => (
                <Card key={course.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge className={getLevelBadgeColor(course.level)}>{course.level}</Badge>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Duration:</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Modules:</span>
                        <span>{course.modules}</span>
                      </div>
                      <div className="flex items-center gap-1 col-span-2">
                        <span className="font-medium">Industry:</span>
                        <span>{course.industry}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">
                      {course.progress > 0 ? "Continue" : "Start Course"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filterCourses(industry.courses).length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No courses found matching your search criteria.</p>
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Industry Insights: {industry.name}</CardTitle>
                <CardDescription>
                  Key digital marketing considerations specific to the {industry.name} industry
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Market Trends</h3>
                  <p className="text-sm text-muted-foreground">
                    Latest digital marketing trends and developments in the {industry.name} sector.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Key Challenges</h3>
                  <p className="text-sm text-muted-foreground">
                    Common marketing challenges faced by {industry.name} businesses and how to overcome them.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Success Metrics</h3>
                  <p className="text-sm text-muted-foreground">
                    Important KPIs and metrics to track for {industry.name} marketing campaigns.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
