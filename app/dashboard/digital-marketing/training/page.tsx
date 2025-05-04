"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, BookOpen, Award, Clock, ArrowRight, Download } from "lucide-react"

export default function TrainingModulesPage() {
  const [activeTab, setActiveTab] = useState("beginner")

  const modules = {
    beginner: [
      {
        id: 1,
        title: "Digital Marketing Fundamentals",
        description: "Learn the basics of digital marketing strategies and platforms.",
        progress: 0,
        duration: "4 hours",
        lessons: 12,
        hasSimulation: true,
        completed: false,
        certification: "Digital Marketing Basics",
      },
      {
        id: 2,
        title: "Social Media Marketing Essentials",
        description: "Master the fundamentals of marketing on major social platforms.",
        progress: 0,
        duration: "6 hours",
        lessons: 15,
        hasSimulation: true,
        completed: false,
        certification: "Social Media Marketing",
      },
      {
        id: 3,
        title: "Content Creation for Beginners",
        description: "Learn how to create engaging content for digital platforms.",
        progress: 0,
        duration: "5 hours",
        lessons: 10,
        hasSimulation: true,
        completed: false,
        certification: "Content Creation Basics",
      },
    ],
    intermediate: [
      {
        id: 4,
        title: "SEO & SEM Strategies",
        description: "Comprehensive guide to search engine optimization and marketing.",
        progress: 0,
        duration: "8 hours",
        lessons: 18,
        hasSimulation: true,
        completed: false,
        certification: "Search Marketing Professional",
      },
      {
        id: 5,
        title: "Email Marketing Campaigns",
        description: "Design and implement effective email marketing strategies.",
        progress: 0,
        duration: "6 hours",
        lessons: 14,
        hasSimulation: true,
        completed: false,
        certification: "Email Marketing Specialist",
      },
      {
        id: 6,
        title: "Analytics & Performance Tracking",
        description: "Learn to measure and analyze digital marketing performance.",
        progress: 0,
        duration: "7 hours",
        lessons: 16,
        hasSimulation: true,
        completed: false,
        certification: "Marketing Analytics",
      },
    ],
    advanced: [
      {
        id: 7,
        title: "Conversion Rate Optimization",
        description: "Advanced techniques to improve conversion rates across channels.",
        progress: 0,
        duration: "10 hours",
        lessons: 20,
        hasSimulation: true,
        completed: false,
        certification: "CRO Expert",
      },
      {
        id: 8,
        title: "Marketing Automation Mastery",
        description: "Implement sophisticated marketing automation workflows.",
        progress: 0,
        duration: "12 hours",
        lessons: 22,
        hasSimulation: true,
        completed: false,
        certification: "Marketing Automation Specialist",
      },
      {
        id: 9,
        title: "Digital Marketing Strategy & Planning",
        description: "Develop comprehensive digital marketing strategies for businesses.",
        progress: 0,
        duration: "15 hours",
        lessons: 25,
        hasSimulation: true,
        completed: false,
        certification: "Digital Marketing Strategist",
      },
    ],
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Digital Marketing Training</h1>
        <p className="text-muted-foreground">
          Hands-on training modules with real-world simulations to master digital marketing skills
        </p>
      </div>

      <Tabs defaultValue="beginner" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {Object.entries(modules).map(([level, moduleList]) => (
          <TabsContent key={level} value={level} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {moduleList.map((module) => (
                <Card key={module.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{module.title}</CardTitle>
                      {module.hasSimulation && (
                        <Badge variant="outline" className="ml-2">
                          Simulation
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{module.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1 col-span-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span>{module.certification}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Save Offline
                    </Button>
                    <Button size="sm">
                      {module.progress > 0 ? "Continue" : "Start"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Real-World Simulation</CardTitle>
                <CardDescription>Apply your knowledge in a realistic digital marketing scenario</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-grow space-y-4">
                      <h3 className="text-xl font-semibold">
                        {activeTab === "beginner" && "Social Media Campaign Simulation"}
                        {activeTab === "intermediate" && "E-commerce Marketing Simulation"}
                        {activeTab === "advanced" && "Multi-Channel Marketing Strategy Simulation"}
                      </h3>
                      <p className="text-muted-foreground">
                        {activeTab === "beginner" &&
                          "Create and manage a social media campaign for a fictional small business. Set goals, create content, and analyze results."}
                        {activeTab === "intermediate" &&
                          "Develop and implement a comprehensive marketing strategy for an e-commerce store. Includes SEO, paid ads, email marketing, and analytics."}
                        {activeTab === "advanced" &&
                          "Design an integrated marketing strategy across multiple channels for a complex business case. Includes budget allocation, performance tracking, and optimization."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Interactive</Badge>
                        <Badge variant="secondary">Real-time Feedback</Badge>
                        <Badge variant="secondary">Performance Analytics</Badge>
                      </div>
                    </div>
                    <Button className="shrink-0">
                      <Play className="mr-2 h-4 w-4" />
                      Launch Simulation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
