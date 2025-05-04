"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  FileSpreadsheet,
  FileText,
  BarChart,
  PieChart,
  LineChart,
  Download,
  Eye,
  Copy,
  Star,
  Search,
  Filter,
} from "lucide-react"

export default function ReportTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const templates = {
    performance: [
      {
        id: "perf-1",
        title: "Monthly Performance Report",
        description: "Comprehensive overview of all marketing channels and campaigns.",
        type: "Dashboard",
        format: "PDF/Excel",
        rating: 4.8,
        downloads: 1245,
        popular: true,
      },
      {
        id: "perf-2",
        title: "Campaign Performance Analysis",
        description: "Detailed analysis of individual campaign performance metrics.",
        type: "Dashboard",
        format: "PDF/Excel",
        rating: 4.6,
        downloads: 987,
        popular: false,
      },
      {
        id: "perf-3",
        title: "Channel Comparison Report",
        description: "Side-by-side comparison of different marketing channels.",
        type: "Comparison",
        format: "PDF/Excel",
        rating: 4.5,
        downloads: 876,
        popular: false,
      },
    ],
    analytics: [
      {
        id: "ana-1",
        title: "Website Traffic Analysis",
        description: "Detailed breakdown of website traffic sources and behavior.",
        type: "Analytics",
        format: "PDF/Excel",
        rating: 4.9,
        downloads: 1532,
        popular: true,
      },
      {
        id: "ana-2",
        title: "Conversion Funnel Report",
        description: "Analysis of user journey through conversion funnel stages.",
        type: "Analytics",
        format: "PDF/Excel",
        rating: 4.7,
        downloads: 1123,
        popular: false,
      },
      {
        id: "ana-3",
        title: "User Behavior Analysis",
        description: "Insights into user behavior patterns on your website.",
        type: "Analytics",
        format: "PDF/Excel",
        rating: 4.6,
        downloads: 954,
        popular: false,
      },
    ],
    social: [
      {
        id: "soc-1",
        title: "Social Media Performance Report",
        description: "Comprehensive analysis of all social media channels.",
        type: "Social",
        format: "PDF/Excel",
        rating: 4.8,
        downloads: 1345,
        popular: true,
      },
      {
        id: "soc-2",
        title: "Content Engagement Analysis",
        description: "Detailed breakdown of content performance across platforms.",
        type: "Social",
        format: "PDF/Excel",
        rating: 4.7,
        downloads: 1087,
        popular: false,
      },
      {
        id: "soc-3",
        title: "Audience Growth Report",
        description: "Track audience growth and engagement over time.",
        type: "Social",
        format: "PDF/Excel",
        rating: 4.5,
        downloads: 932,
        popular: false,
      },
    ],
    client: [
      {
        id: "cli-1",
        title: "Client Monthly Report",
        description: "Professional report template for client reporting.",
        type: "Client",
        format: "PDF/PowerPoint",
        rating: 4.9,
        downloads: 1876,
        popular: true,
      },
      {
        id: "cli-2",
        title: "Executive Summary Dashboard",
        description: "High-level overview of key metrics for executives.",
        type: "Client",
        format: "PDF/PowerPoint",
        rating: 4.8,
        downloads: 1543,
        popular: false,
      },
      {
        id: "cli-3",
        title: "Campaign Results Presentation",
        description: "Presentation template for campaign results.",
        type: "Client",
        format: "PDF/PowerPoint",
        rating: 4.7,
        downloads: 1298,
        popular: false,
      },
    ],
  }

  const getTemplateIcon = (type: string) => {
    switch (type) {
      case "Dashboard":
        return <BarChart className="h-5 w-5" />
      case "Comparison":
        return <PieChart className="h-5 w-5" />
      case "Analytics":
        return <LineChart className="h-5 w-5" />
      case "Social":
        return <BarChart className="h-5 w-5" />
      case "Client":
        return <FileText className="h-5 w-5" />
      default:
        return <FileSpreadsheet className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Dashboard":
        return "bg-blue-100 text-blue-800"
      case "Comparison":
        return "bg-purple-100 text-purple-800"
      case "Analytics":
        return "bg-green-100 text-green-800"
      case "Social":
        return "bg-pink-100 text-pink-800"
      case "Client":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filterTemplates = (templates: any[]) => {
    if (!searchQuery) return templates
    return templates.filter(
      (template) =>
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.type.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Report Templates</h1>
        <p className="text-muted-foreground">Professional templates for creating marketing reports and presentations</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search templates..."
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

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="client">Client Reporting</TabsTrigger>
        </TabsList>

        {Object.entries(templates).map(([category, templateList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filterTemplates(templateList).map((template) => (
                <Card key={template.id} className="flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-md ${getTypeColor(template.type)}`}>
                          {getTemplateIcon(template.type)}
                        </div>
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                      </div>
                      {template.popular && <Badge className="bg-amber-100 text-amber-800">Popular</Badge>}
                    </div>
                    <CardDescription className="mt-2">{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Type:</span>
                        <Badge variant="outline">{template.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Format:</span>
                        <span>{template.format}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Rating:</span>
                        <span className="flex items-center">
                          <Star className="h-3 w-3 fill-amber-500 text-amber-500 mr-1" />
                          {template.rating}/5
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">Downloads:</span>
                        <span>{template.downloads}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setSelectedTemplate(template.id)}>
                      <Eye className="mr-2 h-4 w-4" />
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

            {filterTemplates(templateList).length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No templates found matching your search criteria.</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {selectedTemplate && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Template Preview</CardTitle>
                <CardDescription>Preview of the selected report template</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedTemplate(null)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md p-4 bg-muted/20">
              <div className="aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">Template preview would appear here</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Copy className="mr-2 h-4 w-4" />
              Duplicate & Edit
            </Button>
            <Button className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download Template
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Custom Report Builder</CardTitle>
          <CardDescription>Create custom reports by combining elements from different templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="report-name">Report Name</Label>
              <Input id="report-name" placeholder="Enter report name" />
            </div>
            <div className="space-y-2">
              <Label>Select Sections</Label>
              <div className="grid gap-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="section-1" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="section-1">Executive Summary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="section-2" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="section-2">Performance Metrics</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="section-3" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="section-3">Channel Breakdown</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="section-4" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="section-4">Campaign Analysis</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="section-5" className="h-4 w-4 rounded border-gray-300" />
                  <Label htmlFor="section-5">Recommendations</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Create Custom Report</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
