"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, Calendar, School, ExternalLink, Search, Filter, Clock } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"

export default function FinancialAid() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("scholarships")
  const [scholarships, setScholarships] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const scholarshipsRef = collection(db, "scholarships")
        let q = query(
          scholarshipsRef,
          where("programType", "array-contains", activeTab === "scholarships" ? "ijmb-jupeb" : "all"),
        )

        if (filterType !== "all") {
          q = query(q, where("type", "==", filterType))
        }

        q = query(q, orderBy("deadline"))

        const snapshot = await getDocs(q)

        if (!snapshot.empty) {
          const scholarshipsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setScholarships(scholarshipsData)
        } else {
          // Fallback to AI-generated content if no data
          setScholarships(generateFallbackScholarships())
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching scholarships:", error)
        // Fallback to AI-generated content on error
        setScholarships(generateFallbackScholarships())
        setLoading(false)
      }
    }

    fetchScholarships()
  }, [activeTab, filterType])

  const generateFallbackScholarships = () => {
    return [
      {
        id: "1",
        name: "IJMB Merit Scholarship",
        provider: "Ahmadu Bello University",
        amount: "₦150,000",
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        eligibility: "Students with 5 credits in WAEC/NECO including English and Mathematics",
        type: "merit",
        description: "This scholarship covers partial tuition for outstanding students enrolling in the IJMB program.",
        applicationUrl: "https://example.com/scholarship1",
      },
      {
        id: "2",
        name: "JUPEB Financial Aid Grant",
        provider: "University of Lagos",
        amount: "₦200,000",
        deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
        eligibility: "Students from low-income backgrounds with good academic standing",
        type: "need-based",
        description: "Financial aid grant for students who demonstrate financial need and academic potential.",
        applicationUrl: "https://example.com/scholarship2",
      },
      {
        id: "3",
        name: "Science and Technology Scholarship",
        provider: "Federal Ministry of Education",
        amount: "₦250,000",
        deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
        eligibility: "Students pursuing science and technology courses through IJMB or JUPEB",
        type: "field-specific",
        description:
          "Scholarship for students interested in STEM fields to encourage more participation in science and technology.",
        applicationUrl: "https://example.com/scholarship3",
      },
      {
        id: "4",
        name: "Female Education Initiative",
        provider: "Women in Education NGO",
        amount: "₦180,000",
        deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
        eligibility: "Female students enrolling in IJMB or JUPEB programs",
        type: "diversity",
        description:
          "Scholarship aimed at increasing female participation in higher education through alternative entry programs.",
        applicationUrl: "https://example.com/scholarship4",
      },
      {
        id: "5",
        name: "Rural Students Scholarship",
        provider: "Community Development Foundation",
        amount: "₦220,000",
        deadline: new Date(Date.now() + 75 * 24 * 60 * 60 * 1000).toISOString(),
        eligibility: "Students from rural areas pursuing IJMB or JUPEB",
        type: "need-based",
        description: "Scholarship designed to support students from underserved rural communities.",
        applicationUrl: "https://example.com/scholarship5",
      },
    ]
  }

  const filteredScholarships = scholarships.filter(
    (scholarship) =>
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleApply = (url: string) => {
    window.open(url, "_blank")
    toast({
      title: "Application Started",
      description: "You're being redirected to the application page.",
    })
  }

  const getDaysRemaining = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const diffTime = deadlineDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Financial Aid</h1>
        <p className="text-muted-foreground">Scholarships and financial assistance for IJMB & JUPEB students</p>
      </div>

      <Tabs defaultValue="scholarships" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="grants">Grants & Loans</TabsTrigger>
        </TabsList>

        <TabsContent value="scholarships" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search scholarships..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="filter-type" className="sr-only">
                Filter by type
              </Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter-type" className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="merit">Merit-based</SelectItem>
                  <SelectItem value="need-based">Need-based</SelectItem>
                  <SelectItem value="field-specific">Field-specific</SelectItem>
                  <SelectItem value="diversity">Diversity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map((scholarship) => (
                <Card key={scholarship.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle>{scholarship.name}</CardTitle>
                      <Badge
                        variant={
                          scholarship.type === "merit"
                            ? "default"
                            : scholarship.type === "need-based"
                              ? "secondary"
                              : scholarship.type === "field-specific"
                                ? "outline"
                                : "destructive"
                        }
                      >
                        {scholarship.type.replace("-", " ")}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-1">
                      <School className="h-3.5 w-3.5" />
                      {scholarship.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex justify-between mb-3">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{scholarship.amount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {getDaysRemaining(scholarship.deadline)} days left
                        </span>
                      </div>
                    </div>
                    <p className="text-sm mb-3">{scholarship.description}</p>
                    <div className="bg-muted p-2 rounded-md">
                      <p className="text-xs font-medium">Eligibility:</p>
                      <p className="text-xs">{scholarship.eligibility}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => handleApply(scholarship.applicationUrl)}
                      className="w-full flex items-center gap-2"
                    >
                      Apply Now
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No scholarships found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setFilterType("all")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="grants" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search grants and loans..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Label htmlFor="filter-type-grants" className="sr-only">
                Filter by type
              </Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger id="filter-type-grants" className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="grant">Grants</SelectItem>
                  <SelectItem value="loan">Loans</SelectItem>
                  <SelectItem value="work-study">Work-Study</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Coming Soon
              </CardTitle>
              <CardDescription>We're currently updating our grants and loans database</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8">
                Our comprehensive database of grants and loans for IJMB and JUPEB students is being updated. Check back
                soon for more information on financial assistance options.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">Notify Me When Available</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
