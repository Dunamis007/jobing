"use client"

import { useAuth } from "@/components/auth-provider"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Brain, Calendar, Clock, Target, Trophy, Sparkles, School, PenTool, Award, Users } from "lucide-react"
import { LearningProgressChart } from "@/components/dashboard/learning-progress-chart"
import { UpcomingAssignmentsList } from "@/components/dashboard/upcoming-assignments-list"
import { RecommendedCoursesList } from "@/components/dashboard/recommended-courses-list"
import { StudyPlanList } from "@/components/dashboard/study-plan-list"
import { AcademicLevelSelector } from "@/components/dashboard/academic-level-selector"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAcademicLevel } from "@/components/dashboard/academic-level-context"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const { user } = useAuth()
  const { academicLevel } = useAcademicLevel()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.div className="flex flex-col gap-6" variants={containerVariants} initial="hidden" animate="visible">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <DashboardHeader heading="Dashboard" text={`Welcome back, ${user?.displayName || "Student"}!`} />
        <AcademicLevelSelector />
      </div>

      <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/36</div>
            <Progress value={66} className="h-2" />
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 hrs</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {academicLevel === "JAMB Candidate" && <TabsTrigger value="jamb">JAMB Prep</TabsTrigger>}
          {(academicLevel === "University Student" ||
            academicLevel === "IJMB Student" ||
            academicLevel === "JUPEB Student") && <TabsTrigger value="university">University</TabsTrigger>}
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <motion.div className="grid gap-4 grid-cols-1 lg:grid-cols-7" variants={itemVariants}>
            <Card className="lg:col-span-4 overflow-hidden">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LearningProgressChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 overflow-hidden">
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
                <CardDescription>You have 3 assignments due this week</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingAssignmentsList />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="grid gap-4 grid-cols-1 lg:grid-cols-7" variants={itemVariants}>
            <Card className="lg:col-span-3 overflow-hidden">
              <CardHeader>
                <CardTitle>AI Study Plan</CardTitle>
                <CardDescription>Personalized for your learning goals</CardDescription>
              </CardHeader>
              <CardContent>
                <StudyPlanList />
              </CardContent>
            </Card>

            <Card className="lg:col-span-4 overflow-hidden">
              <CardHeader>
                <CardTitle>Recommended Courses</CardTitle>
                <CardDescription>Based on your learning patterns and goals</CardDescription>
              </CardHeader>
              <CardContent>
                <RecommendedCoursesList />
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="jamb" className="space-y-4">
          <motion.div className="grid gap-4 grid-cols-1 md:grid-cols-2" variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>JAMB Mock Exams</CardTitle>
                <CardDescription>Practice with timed mock exams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <PenTool className="h-4 w-4 text-primary" />
                      <span className="font-medium">Full Mock Exam</span>
                    </div>
                    <span className="text-sm text-muted-foreground">400 marks</span>
                  </div>
                  <Progress value={0} className="h-2" />
                  <p className="text-xs text-muted-foreground">Not started</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <PenTool className="h-4 w-4 text-primary" />
                      <span className="font-medium">Subject-based Practice</span>
                    </div>
                    <span className="text-sm text-muted-foreground">100 marks per subject</span>
                  </div>
                  <Progress value={35} className="h-2" />
                  <p className="text-xs text-muted-foreground">2/4 subjects completed</p>
                </div>

                <Button className="w-full">Start Practice Exam</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Past Questions Analysis</CardTitle>
                <CardDescription>Review and practice with past JAMB questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">1,200+</div>
                      <p className="text-xs text-muted-foreground">Questions Available</p>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <div className="text-2xl font-bold">68%</div>
                      <p className="text-xs text-muted-foreground">Avg. Score</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Recent Topics</h4>
                    <ul className="space-y-1">
                      <li className="text-sm flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Mathematics: Calculus</span>
                      </li>
                      <li className="text-sm flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>English: Comprehension</span>
                      </li>
                      <li className="text-sm flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Physics: Mechanics</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full">Practice Past Questions</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>JAMB Performance Analytics</CardTitle>
                <CardDescription>Track your progress across subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">English</span>
                        <span className="text-sm">72/100</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Mathematics</span>
                        <span className="text-sm">85/100</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Physics</span>
                        <span className="text-sm">68/100</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Chemistry</span>
                        <span className="text-sm">75/100</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">AI Recommendations</h3>
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>
                          Focus on improving your Physics score with more practice on Mechanics and Electricity
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>Review English comprehension passages daily to improve your reading speed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>Your Mathematics score is strong - maintain with weekly practice tests</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="university" className="space-y-4">
          <motion.div className="grid gap-4 grid-cols-1 md:grid-cols-2" variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Admission Guide</CardTitle>
                <CardDescription>Stay updated on admission processes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <School className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">University Requirements</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Check eligibility criteria and application deadlines for your preferred institutions.
                  </p>
                  <Button variant="link" className="px-0 h-auto mt-2">
                    View Requirements
                  </Button>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">Important Dates</h4>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>JAMB Registration</span>
                      <span className="text-muted-foreground">Feb 15 - Mar 30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Post-UTME Screening</span>
                      <span className="text-muted-foreground">Jul 10 - Aug 5</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Admission List</span>
                      <span className="text-muted-foreground">Sep 15</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full">Check Eligibility</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Scholarships & Financial Aid</CardTitle>
                <CardDescription>Discover opportunities to fund your education</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Federal Scholarship</h4>
                      </div>
                      <Badge>New</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Applications open until June 30th. Full tuition coverage for eligible students.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Merit-Based Scholarships</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available at multiple universities based on academic performance.
                    </p>
                  </div>

                  <div className="rounded-lg border p-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">Private Foundations</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Various deadlines throughout the year. Check eligibility criteria.
                    </p>
                  </div>
                </div>

                <Button className="w-full">Browse All Scholarships</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Academic Resources</CardTitle>
                <CardDescription>Access materials and support for university courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Course Materials</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Access textbooks, lecture notes, and study guides for your courses.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Browse Library
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Academic Mentorship</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect with senior students and professors for guidance and support.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Find Mentors
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Study Groups</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Join or create study groups for collaborative learning and peer support.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Join Groups
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
