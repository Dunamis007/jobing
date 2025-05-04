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
import { Progress } from "@/components/ui/progress"
import {
  Search,
  FileText,
  Download,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Globe,
  Filter,
} from "lucide-react"

// Mock data for visa guides
const visaGuides = [
  {
    id: 1,
    country: "United Kingdom",
    visaType: "Student Visa (Tier 4)",
    complexity: "Medium",
    processingTime: "3-4 weeks",
    cost: "$400 - $500",
    requirements: [
      "Valid passport",
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of financial support",
      "English language proficiency",
      "Tuberculosis test results (if applicable)",
    ],
    steps: [
      "Create an account on the UK Visa website",
      "Complete the online application form",
      "Pay the visa fee and Immigration Health Surcharge",
      "Book and attend a biometric appointment",
      "Submit supporting documents",
      "Attend an interview (if required)",
      "Wait for a decision",
    ],
    tips: [
      "Apply at least 3 months before your course starts",
      "Ensure all documents are translated to English",
      "Keep copies of all submitted documents",
      "Check processing times during peak seasons",
    ],
    lastUpdated: "May 1, 2023",
    isPopular: true,
  },
  {
    id: 2,
    country: "United States",
    visaType: "Student Visa (F-1)",
    complexity: "High",
    processingTime: "2-3 months",
    cost: "$350 - $450",
    requirements: [
      "Valid passport",
      "Form I-20 from your school",
      "SEVIS fee payment receipt",
      "DS-160 confirmation page",
      "Proof of financial support",
      "Evidence of ties to home country",
    ],
    steps: [
      "Receive Form I-20 from your school",
      "Pay the SEVIS fee",
      "Complete the DS-160 form online",
      "Schedule a visa interview",
      "Pay the visa application fee",
      "Attend the visa interview",
      "Wait for processing",
    ],
    tips: [
      "Prepare thoroughly for the visa interview",
      "Demonstrate strong ties to your home country",
      "Be clear about your study plans and career goals",
      "Apply early to allow for administrative processing",
    ],
    lastUpdated: "April 15, 2023",
    isPopular: true,
  },
  {
    id: 3,
    country: "Canada",
    visaType: "Study Permit",
    complexity: "Medium",
    processingTime: "4-8 weeks",
    cost: "$150 - $250",
    requirements: [
      "Valid passport",
      "Letter of acceptance from a Canadian institution",
      "Proof of financial support",
      "Statement of purpose",
      "Police clearance certificate",
      "Medical examination results",
    ],
    steps: [
      "Create an account on the IRCC website",
      "Complete the online application",
      "Pay the application fee",
      "Submit biometrics (if required)",
      "Submit supporting documents",
      "Wait for processing",
    ],
    tips: [
      "Apply online for faster processing",
      "Ensure your financial documents show sufficient funds",
      "Be honest and thorough in your application",
      "Check processing times for your country",
    ],
    lastUpdated: "April 28, 2023",
    isNew: true,
  },
  {
    id: 4,
    country: "Australia",
    visaType: "Student Visa (Subclass 500)",
    complexity: "Medium",
    processingTime: "4-6 weeks",
    cost: "$450 - $550",
    requirements: [
      "Valid passport",
      "Confirmation of Enrollment (CoE)",
      "Genuine Temporary Entrant (GTE) statement",
      "Proof of financial capacity",
      "English language proficiency",
      "Health insurance",
    ],
    steps: [
      "Receive CoE from your institution",
      "Create an ImmiAccount",
      "Complete the online application",
      "Pay the visa application fee",
      "Submit supporting documents",
      "Undergo health examinations (if required)",
      "Wait for a decision",
    ],
    tips: [
      "Ensure your GTE statement is compelling",
      "Arrange health insurance before applying",
      "Check document requirements carefully",
      "Apply at least 6-8 weeks before your course starts",
    ],
    lastUpdated: "March 20, 2023",
    isPopular: false,
  },
]

export default function VisaGuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  // Filter visa guides based on search query and selected country
  const filteredGuides = visaGuides.filter(
    (guide) =>
      (activeTab === "all" || (activeTab === "popular" && guide.isPopular) || (activeTab === "new" && guide.isNew)) &&
      (selectedCountry === null || guide.country === selectedCountry) &&
      (guide.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.visaType.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Get unique countries for filter
  const countries = [...new Set(visaGuides.map((guide) => guide.country))]

  return (
    <DashboardShell>
      <DashboardHeader heading="Visa Guides" text="Comprehensive guides for visa applications to different countries">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Checklist
        </Button>
      </DashboardHeader>

      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by country or visa type..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <select
              className="px-3 py-2 rounded-md border border-input bg-background text-sm"
              value={selectedCountry || ""}
              onChange={(e) => setSelectedCountry(e.target.value || null)}
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Guides</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredGuides.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <HelpCircle className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Visa Guides Found</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    We couldn't find any visa guides matching your search criteria. Try adjusting your filters or search
                    terms.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredGuides.map((guide) => (
                  <Card key={guide.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Globe className="h-5 w-5 text-primary" />
                            <CardTitle>
                              {guide.country}: {guide.visaType}
                            </CardTitle>
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>Last updated: {guide.lastUpdated}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          {guide.isPopular && <Badge>Popular</Badge>}
                          {guide.isNew && <Badge className="bg-green-500">New</Badge>}
                          <Badge variant="outline" className="ml-2">
                            Complexity: {guide.complexity}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <h3 className="text-sm font-medium flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            Processing Time
                          </h3>
                          <p>{guide.processingTime}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-sm font-medium flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            Cost
                          </h3>
                          <p>{guide.cost}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-sm font-medium flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            Success Rate
                          </h3>
                          <div className="flex items-center gap-2">
                            <Progress value={75} className="h-2 flex-1" />
                            <span className="text-sm">75%</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium mb-3">Key Requirements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {guide.requirements.map((requirement, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{requirement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium mb-3">Application Process</h3>
                        <div className="space-y-2">
                          {guide.steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs">
                                {index + 1}
                              </div>
                              <span className="text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                          Pro Tips
                        </h3>
                        <div className="space-y-2">
                          {guide.tips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-1.5" />
                              <span className="text-sm">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Guide
                      </Button>
                      <Button>
                        View Full Guide
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="popular" className="space-y-4">
            {/* Content is filtered in the main logic */}
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            {/* Content is filtered in the main logic */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
