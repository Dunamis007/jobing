"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle, Clock, FileText, School, Search } from "lucide-react"

export default function AdmissionGuidePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <DashboardShell>
      <DashboardHeader
        heading="University Admission Guide"
        text="Everything you need to know about university admissions"
      />

      <Tabs defaultValue="requirements" className="space-y-4">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex">
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="requirements" className="space-y-4">
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle>Find University Requirements</CardTitle>
              <CardDescription>Search for specific universities to view their admission requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search universities..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:w-[60%] md:w-[40%]">
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Universities</SelectItem>
                      <SelectItem value="federal">Federal Universities</SelectItem>
                      <SelectItem value="state">State Universities</SelectItem>
                      <SelectItem value="private">Private Universities</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="north">Northern Nigeria</SelectItem>
                      <SelectItem value="south">Southern Nigeria</SelectItem>
                      <SelectItem value="east">Eastern Nigeria</SelectItem>
                      <SelectItem value="west">Western Nigeria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>University of Lagos</CardTitle>
                  <Badge>Federal</Badge>
                </div>
                <CardDescription>Lagos, Nigeria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">JAMB Cut-off Mark</h4>
                  <p className="text-sm">200/400</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">O'Level Requirements</h4>
                  <p className="text-sm">5 Credits including English and Mathematics</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Post-UTME</h4>
                  <p className="text-sm">Required, minimum score varies by department</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Requirements
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>University of Ibadan</CardTitle>
                  <Badge>Federal</Badge>
                </div>
                <CardDescription>Ibadan, Nigeria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">JAMB Cut-off Mark</h4>
                  <p className="text-sm">200/400</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">O'Level Requirements</h4>
                  <p className="text-sm">5 Credits including English and Mathematics</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Post-UTME</h4>
                  <p className="text-sm">Required, minimum score varies by department</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Requirements
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>Covenant University</CardTitle>
                  <Badge>Private</Badge>
                </div>
                <CardDescription>Ota, Nigeria</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">JAMB Cut-off Mark</h4>
                  <p className="text-sm">180/400</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">O'Level Requirements</h4>
                  <p className="text-sm">5 Credits including English and Mathematics</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-medium">Post-UTME</h4>
                  <p className="text-sm">Required, includes interview</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Requirements
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admission Timeline 2023/2024</CardTitle>
              <CardDescription>Key dates for the current admission cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">JAMB Registration</h3>
                    </div>
                    <p className="text-sm">February 15 - March 30, 2023</p>
                    <p className="text-sm text-muted-foreground">
                      Register for the Unified Tertiary Matriculation Examination (UTME)
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">JAMB Examination</h3>
                    </div>
                    <p className="text-sm">April 15 - May 10, 2023</p>
                    <p className="text-sm text-muted-foreground">Sit for the UTME at designated centers</p>
                  </div>
                </div>

                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">JAMB Results Release</h3>
                    </div>
                    <p className="text-sm">May 20 - June 5, 2023</p>
                    <p className="text-sm text-muted-foreground">Check your JAMB results online</p>
                  </div>
                </div>

                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Post-UTME Screening</h3>
                    </div>
                    <p className="text-sm">July 10 - August 5, 2023</p>
                    <p className="text-sm text-muted-foreground">
                      Register and participate in university-specific screening exercises
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 pb-6 border-l border-muted">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Admission Lists Release</h3>
                    </div>
                    <p className="text-sm">September 15 - October 30, 2023</p>
                    <p className="text-sm text-muted-foreground">
                      Universities release merit, supplementary, and other admission lists
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">Registration & Matriculation</h3>
                    </div>
                    <p className="text-sm">November - December 2023</p>
                    <p className="text-sm text-muted-foreground">Complete registration at your admitted institution</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Admission Guides</CardTitle>
                <CardDescription>Comprehensive guides for university admission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">JAMB UTME Guide</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Complete guide to JAMB registration, preparation, and examination
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-1">
                    Download PDF
                  </Button>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Post-UTME Preparation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tips and strategies for excelling in university screening tests
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-1">
                    Download PDF
                  </Button>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">University Application Checklist</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step checklist for your university application process
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-1">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Visual guides for admission processes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <School className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">JAMB Registration Tutorial</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Step-by-step video guide for JAMB registration</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>15 minutes</span>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <School className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">How to Choose the Right University</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Factors to consider when selecting universities</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>20 minutes</span>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <School className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Post-UTME Interview Tips</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">How to prepare for and excel in admission interviews</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>25 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Success Stories</CardTitle>
                <CardDescription>Learn from those who succeeded</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">From 180 to Medicine at UNILAG</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    How I improved my JAMB score and got admitted to study Medicine
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-1">
                    Read Story
                  </Button>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">My Journey to Engineering at UI</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Strategies that helped me secure admission to study Engineering
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-1">
                    Read Story
                  </Button>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">How I Got a Scholarship at Covenant</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    My approach to securing both admission and a scholarship
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-1">
                    Read Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Admission FAQs</CardTitle>
              <CardDescription>Common questions about the university admission process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-3">
                <h4 className="font-medium mb-1">What is the difference between UTME and Direct Entry?</h4>
                <p className="text-sm text-muted-foreground">
                  UTME (Unified Tertiary Matriculation Examination) is for candidates seeking admission into the first
                  year of undergraduate programs, while Direct Entry is for candidates with advanced qualifications
                  (like A-Levels, ND, HND) seeking admission into the second or third year.
                </p>
              </div>

              <div className="rounded-lg border p-3">
                <h4 className="font-medium mb-1">
                  Can I change my course or institution after submitting my JAMB form?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Yes, JAMB typically provides a window for change of course and/or institution after the initial
                  registration. This is called the Change of Course/Institution period and usually comes with a fee.
                </p>
              </div>

              <div className="rounded-lg border p-3">
                <h4 className="font-medium mb-1">
                  What happens if I don't meet the cut-off mark for my preferred course?
                </h4>
                <p className="text-sm text-muted-foreground">
                  If you don't meet the cut-off mark for your preferred course, you may be offered an alternative course
                  within the same institution, or you can consider other institutions with lower cut-off marks for the
                  same course.
                </p>
              </div>

              <div className="rounded-lg border p-3">
                <h4 className="font-medium mb-1">Is Post-UTME compulsory for all universities?</h4>
                <p className="text-sm text-muted-foreground">
                  Most universities in Nigeria conduct Post-UTME screening, but the format varies. Some conduct written
                  tests, others do interviews, while some simply screen credentials. Always check the specific
                  requirements of your chosen institution.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
