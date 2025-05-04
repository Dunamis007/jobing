"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { enhancedScholarshipsService, type EnhancedScholarship } from "@/lib/firebase-service-enhanced"
import { Search, Calendar, DollarSign, ExternalLink, Award, Info } from "lucide-react"
import { format } from "date-fns"

export default function ScholarshipsPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [scholarships, setScholarships] = useState<EnhancedScholarship[]>([])
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedScholarship, setSelectedScholarship] = useState<EnhancedScholarship | null>(null)
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  useEffect(() => {
    loadScholarships()
  }, [selectedRegion])

  const loadScholarships = async () => {
    try {
      setLoading(true)

      if (selectedRegion === "all") {
        // Load scholarships from all regions
        const regions = ["europe", "america", "africa", "asia"]
        let allScholarships: EnhancedScholarship[] = []
        let anyGenerated = false

        for (const region of regions) {
          const result = await enhancedScholarshipsService.getScholarshipsByRegion(region)
          allScholarships = [...allScholarships, ...result.scholarships]
          if (result.isGenerated) anyGenerated = true
        }

        setScholarships(allScholarships)
        setIsGenerated(anyGenerated)
      } else {
        // Load scholarships for specific region
        const result = await enhancedScholarshipsService.getScholarshipsByRegion(selectedRegion.toLowerCase())
        setScholarships(result.scholarships)
        setIsGenerated(result.isGenerated || false)
      }
    } catch (error) {
      console.error("Error loading scholarships:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadScholarships()
      return
    }

    try {
      setLoading(true)
      const results = await enhancedScholarshipsService.searchScholarships(searchQuery)
      setScholarships(results)
    } catch (error) {
      console.error("Error searching scholarships:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleViewDetails = (scholarship: EnhancedScholarship) => {
    setSelectedScholarship(scholarship)
    setDetailsDialogOpen(true)
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A"

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000)
    return format(date, "PPP")
  }

  const isDeadlineSoon = (deadline: any) => {
    if (!deadline) return false

    const date = deadline.toDate ? deadline.toDate() : new Date(deadline.seconds * 1000)
    const now = new Date()
    const diffTime = date.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays <= 14 && diffDays > 0
  }

  const isDeadlinePassed = (deadline: any) => {
    if (!deadline) return false

    const date = deadline.toDate ? deadline.toDate() : new Date(deadline.seconds * 1000)
    return date < new Date()
  }

  // Filter scholarships based on search query
  const filteredScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scholarship.funding_type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Categorize scholarships by deadline
  const categorizedScholarships = {
    upcoming: filteredScholarships.filter((s) => !isDeadlinePassed(s.deadline)),
    expired: filteredScholarships.filter((s) => isDeadlinePassed(s.deadline)),
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Scholarships" text="Discover opportunities to fund your education" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="america">America</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search scholarships..."
                className="pl-8 flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button onClick={handleSearch} className="ml-2">
                Search
              </Button>
            </div>
          </div>
        </div>

        {isGenerated && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>AI-Generated Content</AlertTitle>
            <AlertDescription>
              These scholarships are AI-generated examples. Please verify with official sources before applying.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">
              Upcoming Deadlines
              <Badge variant="secondary" className="ml-2">
                {categorizedScholarships.upcoming.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="expired">
              Past Deadlines
              <Badge variant="secondary" className="ml-2">
                {categorizedScholarships.expired.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {loading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-5 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-9 w-full" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : categorizedScholarships.upcoming.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Award className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No scholarships found</h3>
                  <p className="text-muted-foreground text-center">
                    {searchQuery ? "Try a different search term" : "Check back later for new scholarship opportunities"}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorizedScholarships.upcoming.map((scholarship) => (
                  <Card key={scholarship.id} className="flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <CardTitle>{scholarship.title}</CardTitle>
                          <CardDescription>{scholarship.country}</CardDescription>
                        </div>
                        {isDeadlineSoon(scholarship.deadline) && <Badge variant="destructive">Deadline Soon</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>{scholarship.funding_type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Deadline: {formatDate(scholarship.deadline)}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">{scholarship.region}</Badge>
                          <Badge variant="outline">{scholarship.funding_type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3">{scholarship.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => handleViewDetails(scholarship)}>
                        View Details
                      </Button>
                      <Button className="flex-1" onClick={() => window.open(scholarship.apply_link, "_blank")}>
                        Apply Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="expired" className="space-y-4">
            {loading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-5 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardContent>
                    <CardFooter>
                      <Skeleton className="h-9 w-full" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : categorizedScholarships.expired.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Award className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No expired scholarships</h3>
                  <p className="text-muted-foreground text-center">
                    There are no past deadline scholarships matching your search
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorizedScholarships.expired.map((scholarship) => (
                  <Card key={scholarship.id} className="flex flex-col opacity-70">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <CardTitle>{scholarship.title}</CardTitle>
                          <CardDescription>{scholarship.country}</CardDescription>
                        </div>
                        <Badge variant="outline">Expired</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>{scholarship.funding_type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Deadline: {formatDate(scholarship.deadline)}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">{scholarship.region}</Badge>
                          <Badge variant="outline">{scholarship.funding_type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3">{scholarship.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" className="flex-1" onClick={() => handleViewDetails(scholarship)}>
                        View Details
                      </Button>
                      <Button className="flex-1" disabled>
                        Expired
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Scholarship Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedScholarship && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedScholarship.title}</DialogTitle>
                <DialogDescription>{selectedScholarship.country}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{selectedScholarship.region}</Badge>
                  <Badge variant="outline">{selectedScholarship.funding_type}</Badge>
                  {isDeadlineSoon(selectedScholarship.deadline) && <Badge variant="destructive">Deadline Soon</Badge>}
                  {isDeadlinePassed(selectedScholarship.deadline) && <Badge variant="outline">Expired</Badge>}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Funding Type
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{selectedScholarship.funding_type}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Application Deadline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{formatDate(selectedScholarship.deadline)}</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{selectedScholarship.description}</p>
                  </CardContent>
                </Card>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDetailsDialogOpen(false)}>
                  Close
                </Button>
                <Button
                  onClick={() => window.open(selectedScholarship.apply_link, "_blank")}
                  disabled={isDeadlinePassed(selectedScholarship.deadline)}
                >
                  {isDeadlinePassed(selectedScholarship.deadline) ? "Expired" : "Apply Now"}
                  {!isDeadlinePassed(selectedScholarship.deadline) && <ExternalLink className="ml-2 h-4 w-4" />}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}
