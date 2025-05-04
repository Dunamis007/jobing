"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Award, Clock, ArrowRight, CheckCircle, AlertTriangle, Info } from "lucide-react"

export default function EthicalMarketingPage() {
  const courses = {
    principles: [
      {
        id: 1,
        title: "Ethical Marketing Fundamentals",
        description: "Learn the core principles of ethical marketing practices.",
        progress: 0,
        duration: "4 hours",
        lessons: 10,
        certification: "Ethical Marketing Foundations",
        level: "Beginner",
      },
      {
        id: 2,
        title: "Transparency in Marketing",
        description: "Strategies for maintaining transparency with customers and stakeholders.",
        progress: 0,
        duration: "3 hours",
        lessons: 8,
        certification: "Transparency Certification",
        level: "Intermediate",
      },
      {
        id: 3,
        title: "Inclusive Marketing Practices",
        description: "Create marketing campaigns that are inclusive and representative.",
        progress: 0,
        duration: "5 hours",
        lessons: 12,
        certification: "Inclusive Marketing",
        level: "Intermediate",
      },
    ],
    compliance: [
      {
        id: 4,
        title: "Data Privacy Regulations",
        description: "Navigate GDPR, CCPA, and other data privacy regulations in marketing.",
        progress: 0,
        duration: "6 hours",
        lessons: 15,
        certification: "Data Privacy Compliance",
        level: "Advanced",
      },
      {
        id: 5,
        title: "Ethical Email Marketing",
        description: "Best practices for permission-based email marketing.",
        progress: 0,
        duration: "4 hours",
        lessons: 10,
        certification: "Ethical Email Marketing",
        level: "Intermediate",
      },
      {
        id: 6,
        title: "Truth in Advertising",
        description: "Ensure your advertising claims are truthful and substantiated.",
        progress: 0,
        duration: "3 hours",
        lessons: 8,
        certification: "Truth in Advertising",
        level: "Beginner",
      },
    ],
    sustainability: [
      {
        id: 7,
        title: "Sustainable Marketing Strategies",
        description: "Develop marketing approaches that support environmental sustainability.",
        progress: 0,
        duration: "5 hours",
        lessons: 12,
        certification: "Sustainable Marketing",
        level: "Intermediate",
      },
      {
        id: 8,
        title: "Green Marketing Principles",
        description: "Authentic marketing of environmentally friendly products and services.",
        progress: 0,
        duration: "4 hours",
        lessons: 10,
        certification: "Green Marketing",
        level: "Intermediate",
      },
      {
        id: 9,
        title: "Social Impact Marketing",
        description: "Marketing strategies that highlight social responsibility and impact.",
        progress: 0,
        duration: "6 hours",
        lessons: 14,
        certification: "Social Impact Marketing",
        level: "Advanced",
      },
    ],
  }

  const guidelines = [
    {
      title: "Honesty & Transparency",
      description:
        "Always be truthful in your marketing claims and transparent about your products, services, and business practices.",
      icon: CheckCircle,
      type: "do",
    },
    {
      title: "Respect User Privacy",
      description: "Obtain proper consent for data collection and be clear about how user data will be used.",
      icon: CheckCircle,
      type: "do",
    },
    {
      title: "Inclusive Representation",
      description: "Ensure your marketing materials represent diverse audiences and avoid stereotypes.",
      icon: CheckCircle,
      type: "do",
    },
    {
      title: "Misleading Claims",
      description: "Avoid making exaggerated or unsubstantiated claims about your products or services.",
      icon: AlertTriangle,
      type: "dont",
    },
    {
      title: "Exploitative Tactics",
      description: "Don't use manipulative techniques that exploit vulnerabilities or create false urgency.",
      icon: AlertTriangle,
      type: "dont",
    },
    {
      title: "Hidden Fees or Conditions",
      description: "Never hide important information about pricing, terms, or conditions in fine print.",
      icon: AlertTriangle,
      type: "dont",
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

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Ethical Marketing</h1>
        <p className="text-muted-foreground">
          Learn responsible and ethical digital marketing practices that build trust and protect consumers
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Ethical Marketing Guidelines</CardTitle>
          <CardDescription>Key principles to follow for responsible and ethical marketing practices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center text-green-700">
                <CheckCircle className="mr-2 h-5 w-5" />
                Do's
              </h3>

              <div className="space-y-3">
                {guidelines
                  .filter((g) => g.type === "do")
                  .map((guideline, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="shrink-0 mt-0.5">
                        <guideline.icon className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{guideline.title}</h4>
                        <p className="text-sm text-muted-foreground">{guideline.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold flex items-center text-red-700">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Don'ts
              </h3>
              <div className="space-y-3">
                {guidelines
                  .filter((g) => g.type === "dont")
                  .map((guideline, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="shrink-0 mt-0.5">
                        <guideline.icon className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{guideline.title}</h4>
                        <p className="text-sm text-muted-foreground">{guideline.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="principles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="principles">Core Principles</TabsTrigger>
          <TabsTrigger value="compliance">Compliance & Regulations</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
        </TabsList>

        {Object.entries(courses).map(([category, courseList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courseList.map((course) => (
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
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1 col-span-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span>{course.certification}</span>
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

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                <div>
                  <CardTitle>Why Ethical Marketing Matters</CardTitle>
                  <CardDescription>The importance of ethical practices in digital marketing</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Ethical marketing isn't just about following rules—it's about building trust with your audience,
                  protecting your brand reputation, and contributing positively to society. In today's transparent
                  digital world, consumers increasingly support businesses that demonstrate ethical practices.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="font-medium">Builds Trust</h4>
                    <p className="text-sm text-muted-foreground">
                      Honest marketing builds long-term customer trust and loyalty.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Reduces Risk</h4>
                    <p className="text-sm text-muted-foreground">
                      Ethical practices help avoid legal issues and reputation damage.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Drives Growth</h4>
                    <p className="text-sm text-muted-foreground">
                      Consumers increasingly prefer brands with ethical practices.
                    </p>
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
