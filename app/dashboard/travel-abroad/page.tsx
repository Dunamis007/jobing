"use client"

import { useState, useEffect } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { studyAbroadService, type StudyAbroadInfo } from "@/lib/firebase-service-enhanced"
import { Loader2, Search, Plane, DollarSign, Calendar, FileText, Info, Globe, School } from "lucide-react"

export default function TravelAbroadPage() {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState<{ country: string; region: string }[]>([])
  const [selectedRegion, setSelectedRegion] = useState<string>("all")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [countryInfo, setCountryInfo] = useState<StudyAbroadInfo | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isGenerated, setIsGenerated] = useState(false)
  const [aiQuestion, setAiQuestion] = useState("")
  const [aiAnswer, setAiAnswer] = useState("")
  const [askingAi, setAskingAi] = useState(false)

  useEffect(() => {
    loadCountries()
  }, [])

  useEffect(() => {
    if (selectedCountry) {
      loadCountryInfo(selectedCountry)
    }
  }, [selectedCountry])

  const loadCountries = async () => {
    try {
      setLoading(true)
      const result = await studyAbroadService.getAvailableCountries()
      setCountries(result)
    } catch (error) {
      console.error("Error loading countries:", error)
      toast({
        title: "Error",
        description: "Failed to load countries. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const loadCountryInfo = async (country: string) => {
    try {
      setLoading(true)
      const result = await studyAbroadService.getStudyAbroadInfo(country)
      setCountryInfo(result.info)
      setIsGenerated(result.isGenerated || false)
    } catch (error) {
      console.error("Error loading country info:", error)
      toast({
        title: "Error",
        description: "Failed to load country information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAskAi = async () => {
    if (!aiQuestion.trim()) return

    try {
      setAskingAi(true)

      // In a real implementation, this would call an API endpoint
      // For now, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setAiAnswer(`Here's some information about ${aiQuestion} for studying abroad:

1. Research the country's education system and visa requirements
2. Check for scholarship opportunities specific to your field of study
3. Consider the cost of living and tuition fees
4. Look into language requirements and available language courses
5. Connect with alumni or current students for firsthand experiences

Would you like more specific information about any of these aspects?`)
    } catch (error) {
      console.error("Error asking AI:", error)
      toast({
        title: "Error",
        description: "Failed to get an answer. Please try again.",
        variant: "destructive",
      })
    } finally {
      setAskingAi(false)
    }
  }

  // Filter countries by region and search query
  const filteredCountries = countries.filter(
    (country) =>
      (selectedRegion === "all" || country.region.toLowerCase() === selectedRegion.toLowerCase()) &&
      country.country.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Available regions
  const regions = ["all", "Europe", "America", "Africa", "Asia", "Australia"]

  return (
    <DashboardShell>
      <DashboardHeader heading="Study Abroad" text="Explore opportunities to study in universities around the world" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region === "all" ? "All Regions" : region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search countries..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Countries</CardTitle>
                <CardDescription>Select a country to view study abroad information</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[500px] overflow-y-auto">
                  {loading && countries.length === 0 ? (
                    <div className="p-4 space-y-3">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <Skeleton key={i} className="h-8 w-full" />
                      ))}
                    </div>
                  ) : filteredCountries.length === 0 ? (
                    <div className="p-6 text-center">
                      <p className="text-muted-foreground">No countries found</p>
                    </div>
                  ) : (
                    <div className="divide-y">
                      {filteredCountries.map((country) => (
                        <div
                          key={country.country}
                          className={`p-3 cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedCountry === country.country ? "bg-muted" : ""
                          }`}
                          onClick={() => setSelectedCountry(country.country)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-muted-foreground" />
                              <span>{country.country}</span>
                            </div>
                            <Badge variant="outline">{country.region}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            {selectedCountry && countryInfo ? (
              <div className="space-y-6">
                {isGenerated && (
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>AI-Generated Content</AlertTitle>
                    <AlertDescription>
                      This information is AI-generated and may not be completely accurate. Please verify with official
                      sources.
                    </AlertDescription>
                  </Alert>
                )}

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{countryInfo.country}</CardTitle>
                        <CardDescription>Study Abroad Information</CardDescription>
                      </div>
                      <Badge>{countryInfo.region}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-2">
                          <School className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Top Universities</h3>
                            <ul className="mt-2 space-y-1">
                              {countryInfo.top_universities.map((university, index) => (
                                <li key={index} className="text-sm">
                                  • {university}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Cost of Living</h3>
                            <p className="text-sm mt-1">{countryInfo.cost_of_living}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-2">
                          <FileText className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Visa Requirements</h3>
                            <p className="text-sm mt-1">{countryInfo.visa_requirements}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Calendar className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Application Process</h3>
                            <p className="text-sm mt-1">{countryInfo.application_process}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3">Required Documents</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {countryInfo.required_documents.map((document, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ask AI Assistant</CardTitle>
                    <CardDescription>
                      Have questions about studying in {countryInfo.country}? Ask our AI assistant.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder={`E.g., How can I find scholarships in ${countryInfo.country}?`}
                        value={aiQuestion}
                        onChange={(e) => setAiQuestion(e.target.value)}
                      />
                      <Button onClick={handleAskAi} disabled={!aiQuestion.trim() || askingAi}>
                        {askingAi ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Asking...
                          </>
                        ) : (
                          "Ask"
                        )}
                      </Button>
                    </div>

                    {aiAnswer && (
                      <div className="p-4 rounded-md bg-muted/50">
                        <p className="whitespace-pre-line">{aiAnswer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-[500px]">
                  <Plane className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Select a Country</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Choose a country from the list to view information about studying abroad, including visa
                    requirements, top universities, and application processes.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
