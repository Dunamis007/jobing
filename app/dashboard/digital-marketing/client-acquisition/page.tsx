"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  UserPlus,
  Users,
  Target,
  Filter,
  Download,
  ArrowRight,
  CheckCircle,
  BarChart,
  LineChart,
  PieChart,
} from "lucide-react"

export default function ClientAcquisitionPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const strategies = [
    {
      id: "lead-generation",
      title: "Lead Generation",
      icon: UserPlus,
      tools: [
        {
          id: 1,
          title: "Lead Magnet Creator",
          description: "Create compelling lead magnets to attract potential clients.",
          features: ["Template library", "Design tools", "Conversion tracking"],
          popular: true,
        },
        {
          id: 2,
          title: "Landing Page Builder",
          description: "Build high-converting landing pages for lead capture.",
          features: ["A/B testing", "Mobile optimization", "Form integration"],
          popular: false,
        },
        {
          id: 3,
          title: "Email Capture Forms",
          description: "Create optimized forms to capture lead information.",
          features: ["Custom fields", "GDPR compliance", "Integration with CRM"],
          popular: false,
        },
      ],
    },
    {
      id: "audience-targeting",
      title: "Audience Targeting",
      icon: Target,
      tools: [
        {
          id: 4,
          title: "Audience Segmentation Tool",
          description: "Segment your audience for more targeted marketing.",
          features: ["Demographic filters", "Behavior analysis", "Custom segments"],
          popular: true,
        },
        {
          id: 5,
          title: "Competitor Audience Analyzer",
          description: "Identify and target audiences similar to your competitors'.",
          features: ["Competitor analysis", "Audience overlap", "Targeting suggestions"],
          popular: false,
        },
        {
          id: 6,
          title: "Lookalike Audience Creator",
          description: "Create audiences similar to your best customers.",
          features: ["Customer matching", "Expansion controls", "Platform integration"],
          popular: false,
        },
      ],
    },
    {
      id: "client-management",
      title: "Client Management",
      icon: Users,
      tools: [
        {
          id: 7,
          title: "Client Onboarding Kit",
          description: "Streamline the process of bringing on new clients.",
          features: ["Onboarding templates", "Process automation", "Client portal"],
          popular: true,
        },
        {
          id: 8,
          title: "Client Communication Templates",
          description: "Professional templates for client communications.",
          features: ["Email templates", "Proposal templates", "Follow-up sequences"],
          popular: false,
        },
        {
          id: 9,
          title: "Client Retention Dashboard",
          description: "Monitor and improve client retention metrics.",
          features: ["Retention analytics", "Risk indicators", "Intervention suggestions"],
          popular: false,
        },
      ],
    },
  ]

  const templates = [
    {
      id: "cold-email",
      title: "Cold Email Sequence",
      description: "5-part email sequence for cold outreach to potential clients",
      category: "Email",
      downloadCount: 1245,
      rating: 4.8,
    },
    {
      id: "discovery-call",
      title: "Discovery Call Script",
      description: "Structured script for effective discovery calls with prospects",
      category: "Sales",
      downloadCount: 987,
      rating: 4.7,
    },
    {
      id: "proposal-template",
      title: "Client Proposal Template",
      description: "Professional proposal template to win more clients",
      category: "Documents",
      downloadCount: 1532,
      rating: 4.9,
    },
    {
      id: "follow-up",
      title: "Follow-Up Sequence",
      description: "Automated follow-up sequence for leads who don't respond",
      category: "Email",
      downloadCount: 876,
      rating: 4.6,
    },
    {
      id: "social-outreach",
      title: "Social Media Outreach Templates",
      description: "Templates for reaching out to prospects on social platforms",
      category: "Social",
      downloadCount: 754,
      rating: 4.5,
    },
    {
      id: "client-onboarding",
      title: "Client Onboarding Checklist",
      description: "Comprehensive checklist for smooth client onboarding",
      category: "Process",
      downloadCount: 1123,
      rating: 4.8,
    },
  ]

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "Email":
        return "bg-blue-100 text-blue-800"
      case "Sales":
        return "bg-green-100 text-green-800"
      case "Documents":
        return "bg-purple-100 text-purple-800"
      case "Social":
        return "bg-pink-100 text-pink-800"
      case "Process":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Client Acquisition Tools</h1>
        <p className="text-muted-foreground">Tools and resources to help you attract, convert, and retain clients</p>
      </div>

      <Tabs defaultValue="lead-generation" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {strategies.map((strategy) => (
            <TabsTrigger key={strategy.id} value={strategy.id} className="flex items-center gap-1">
              <strategy.icon className="h-4 w-4" />
              <span>{strategy.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {strategies.map((strategy) => (
          <TabsContent key={strategy.id} value={strategy.id} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {strategy.tools.map((tool) => (
                <Card key={tool.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{tool.title}</CardTitle>
                      {tool.popular && <Badge className="bg-amber-100 text-amber-800">Popular</Badge>}
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Key Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full">
                      Access Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>Track the performance of your {strategy.title.toLowerCase()} efforts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <BarChart className="h-4 w-4 mr-2 text-blue-600" />
                        Conversion Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.2%</div>
                      <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <LineChart className="h-4 w-4 mr-2 text-green-600" />
                        New Clients
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">+8 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center">
                        <PieChart className="h-4 w-4 mr-2 text-purple-600" />
                        Client Acquisition Cost
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$142</div>
                      <p className="text-xs text-muted-foreground">-$18 from last month</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">Client Acquisition Templates</h2>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{template.title}</CardTitle>
                  <Badge className={getCategoryBadgeColor(template.category)}>{template.category}</Badge>
                </div>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Downloads:</span>
                    <span>{template.downloadCount}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Rating:</span>
                    <span>{template.rating}/5</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setSelectedTemplate(template.id)}>
                  Preview
                </Button>
                <Button className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Template Preview: {templates.find((t) => t.id === selectedTemplate)?.title}</CardTitle>
                <CardDescription>{templates.find((t) => t.id === selectedTemplate)?.description}</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedTemplate(null)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md p-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Subject Line</Label>
                  <Input value="Let's discuss how we can help [Company Name] with [Pain Point]" readOnly />
                </div>
                <div className="space-y-2">
                  <Label>Email Body</Label>
                  <div className="border rounded-md p-3 text-sm">
                    <p>Hi [First Name],</p>
                    <br />
                    <p>I noticed that [Company Name] has been [observation about their business].</p>
                    <br />
                    <p>
                      We've helped similar companies in [industry] to [achieve specific result] by [brief explanation of
                      solution].
                    </p>
                    <br />
                    <p>
                      Would you be open to a quick 15-minute call to discuss how we might be able to help [Company Name]
                      with [specific pain point]?
                    </p>
                    <br />
                    <p>Best regards,</p>
                    <p>[Your Name]</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Template
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
