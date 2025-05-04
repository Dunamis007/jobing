"use client"

import { useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, FileText, CheckCircle, AlertCircle, BookOpen } from "lucide-react"

export default function MockExamsPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject))
    } else {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="JAMB Mock Exams" text="Practice with realistic JAMB-style mock exams" />

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="available">Available Exams</TabsTrigger>
          <TabsTrigger value="completed">Completed Exams</TabsTrigger>
          <TabsTrigger value="analytics">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Full Mock Examination</CardTitle>
              <CardDescription>Complete a full JAMB mock exam with all your selected subjects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "English",
                  "Mathematics",
                  "Physics",
                  "Chemistry",
                  "Biology",
                  "Literature",
                  "Government",
                  "Economics",
                ].map((subject) => (
                  <div
                    key={subject}
                    className={`rounded-lg border p-3 cursor-pointer transition-colors ${
                      selectedSubjects.includes(subject) ? "border-primary bg-primary/5" : "hover:border-primary/50"
                    }`}
                    onClick={() => toggleSubject(subject)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span className="font-medium">{subject}</span>
                      </div>
                      {selectedSubjects.includes(subject) && <CheckCircle className="h-4 w-4 text-primary" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border p-4 bg-muted/50">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h3 className="font-medium">Exam Configuration</h3>
                    <p className="text-sm text-muted-foreground">
                      Select at least 4 subjects including English and Mathematics
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Duration: 2 hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={
                  selectedSubjects.length < 4 ||
                  !selectedSubjects.includes("English") ||
                  !selectedSubjects.includes("Mathematics")
                }
              >
                Start Mock Exam
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>Subject Practice</CardTitle>
                  <Badge>Recommended</Badge>
                </div>
                <CardDescription>Focus on one subject at a time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Practice with subject-specific questions to improve your weak areas.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>30 minutes per subject</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Choose Subject
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Timed Challenges</CardTitle>
                <CardDescription>Test your speed and accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Quick 15-minute challenges with randomized questions across subjects.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>15 minutes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Start Challenge
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Past Questions</CardTitle>
                <CardDescription>Practice with real JAMB questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">Access and practice with questions from previous JAMB examinations.</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>2018-2023 available</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Browse Questions
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Mock Exams</CardTitle>
                <CardDescription>Your recently completed mock examinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Full Mock Exam</h3>
                        <p className="text-xs text-muted-foreground">Completed on May 15, 2023</p>
                      </div>
                      <Badge variant="outline">280/400</Badge>
                    </div>
                    <Progress value={70} className="h-2" />
                    <div className="mt-2 text-xs text-right">70% - Good</div>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">Mathematics Practice</h3>
                        <p className="text-xs text-muted-foreground">Completed on May 10, 2023</p>
                      </div>
                      <Badge variant="outline">85/100</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="mt-2 text-xs text-right">85% - Excellent</div>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">English Practice</h3>
                        <p className="text-xs text-muted-foreground">Completed on May 8, 2023</p>
                      </div>
                      <Badge variant="outline">72/100</Badge>
                    </div>
                    <Progress value={72} className="h-2" />
                    <div className="mt-2 text-xs text-right">72% - Good</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
                <CardDescription>Your overall performance in mock exams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">76%</div>
                      <p className="text-xs text-muted-foreground">Average Score</p>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">Exams Completed</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Subject Performance</h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>English</span>
                          <span>72%</span>
                        </div>
                        <Progress value={72} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Mathematics</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Physics</span>
                          <span>68%</span>
                        </div>
                        <Progress value={68} className="h-1.5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Chemistry</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>Detailed analysis of your mock exam performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Strengths & Weaknesses</h3>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <h4 className="font-medium">Strong Areas</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        <span>Mathematics: Algebra and Calculus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        <span>English: Reading Comprehension</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        <span>Chemistry: Organic Chemistry</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <h4 className="font-medium">Areas for Improvement</h4>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        <span>Physics: Electricity and Magnetism</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        <span>English: Verbal Reasoning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                        <span>Mathematics: Trigonometry</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Time Management</h3>
                <div className="rounded-lg border p-3">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Average Time per Question</div>
                      <div className="text-2xl font-bold">1m 24s</div>
                      <div className="text-xs text-muted-foreground">Target: Under 1m 30s</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Questions Skipped</div>
                      <div className="text-2xl font-bold">8%</div>
                      <div className="text-xs text-muted-foreground">Target: Under 5%</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Time Management Score</div>
                      <div className="text-2xl font-bold">Good</div>
                      <div className="text-xs text-muted-foreground">Improved from "Fair"</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Recommended Study Plan</h3>
                <div className="rounded-lg border p-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium">1</span>
                      </div>
                      <span>Focus on Physics: Electricity and Magnetism (2 hours/week)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium">2</span>
                      </div>
                      <span>Practice English Verbal Reasoning questions daily (30 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium">3</span>
                      </div>
                      <span>Review Mathematics Trigonometry concepts and practice problems (3 hours/week)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-medium">4</span>
                      </div>
                      <span>Take timed practice tests weekly to improve time management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Personalized Study Plan</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
