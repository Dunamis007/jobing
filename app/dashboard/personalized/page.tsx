"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useAuth } from "@/components/auth-provider"
import { firestoreService } from "@/lib/firestore-service"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  Calendar,
  Target,
  Trophy,
  Sparkles,
  School,
  PenTool,
  ArrowRight,
  Zap,
  BarChart,
  Lightbulb,
  Coins,
} from "lucide-react"

interface UserData {
  name: string
  currentEducation: string
  targetEducation: string
  learningStyle: string
  studyGoal: string
  englishLevel: string
  targetScore: string
  testDate: string
  zodiacSign?: string
}

interface CourseData {
  id: string
  title: string
  category: string
  level: string
  progress?: number
  nextLesson?: string
}

export default function PersonalizedDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [courses, setCourses] = useState<CourseData[]>([])
  const [dataLoading, setDataLoading] = useState(true)
  const [nextExam, setNextExam] = useState<string | null>(null)
  const [daysUntilExam, setDaysUntilExam] = useState<number | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          setDataLoading(true)

          // Fetch user data
          const userDocRef = firestoreService.doc("users", user.uid)
          const userDoc = await firestoreService.getDoc(userDocRef)

          if (userDoc.exists()) {
            const data = userDoc.data() as UserData
            setUserData(data)

            // Calculate days until exam if test date is provided
            if (data.testDate) {
              const testDate = new Date(data.testDate)
              const today = new Date()
              const diffTime = testDate.getTime() - today.getTime()
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

              if (diffDays > 0) {
                setDaysUntilExam(diffDays)
                setNextExam(data.testDate)
              }
            }
          }

          // Fetch courses data
          const coursesDocRef = firestoreService.doc("users", user.uid, "preferences", "courses")
          const coursesDoc = await firestoreService.getDoc(coursesDocRef)

          if (coursesDoc.exists()) {
            const { selectedCourses } = coursesDoc.data()

            // Mock course data with progress
            const coursesWithProgress: CourseData[] = [
              {
                id: "ielts-reading",
                title: "IELTS Reading Mastery",
                category: "Reading",
                level: "All Levels",
                progress: 35,
                nextLesson: "Skimming and Scanning Techniques",
              },
              {
                id: "ielts-writing",
                title: "IELTS Writing Skills",
                category: "Writing",
                level: "All Levels",
                progress: 20,
                nextLesson: "Task 1: Describing Charts and Graphs",
              },
              {
                id: "ielts-listening",
                title: "IELTS Listening Techniques",
                category: "Listening",
                level: "All Levels",
                progress: 15,
                nextLesson: "Note-taking for Section 1",
              },
              {
                id: "ielts-speaking",
                title: "IELTS Speaking Confidence",
                category: "Speaking",
                level: "All Levels",
                progress: 10,
                nextLesson: "Part 1: Introduction and Interview",
              },
            ]

            // Filter courses based on selected courses
            const filteredCourses = coursesWithProgress.filter((course) => selectedCourses.includes(course.id))

            setCourses(filteredCourses)
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
        } finally {
          setDataLoading(false)
        }
      }
    }

    fetchUserData()
  }, [user])

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

  const handleSwitchToDashboard = () => {
    router.push("/dashboard")
  }

  if (loading || dataLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!user || !userData) {
    return null
  }

  return (
    <motion.div className="flex flex-col gap-6" variants={containerVariants} initial="hidden" animate="visible">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <DashboardHeader
          heading="Personalized Dashboard"
          text={`Welcome to your personalized IELTS preparation journey, ${userData.name}!`}
        />
        <Button variant="outline" onClick={handleSwitchToDashboard}>
          Switch to General Dashboard
        </Button>
      </div>

      <motion.div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" variants={itemVariants}>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.englishLevel || "Not Set"}</div>
            <p className="text-xs text-muted-foreground">IELTS Preparation</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.targetScore || "Not Set"}</div>
            <p className="text-xs text-muted-foreground">IELTS Band Score</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Until Exam</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{daysUntilExam || "Not Set"}</div>
            <p className="text-xs text-muted-foreground">
              {nextExam ? `Exam Date: ${new Date(nextExam).toLocaleDateString()}` : "No exam scheduled"}
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">EduCoins</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-muted-foreground">Welcome Bonus</p>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="practice">Practice Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <motion.div className="grid gap-4 grid-cols-1 lg:grid-cols-7" variants={itemVariants}>
            <Card className="lg:col-span-4 overflow-hidden">
              <CardHeader>
                <CardTitle>Your IELTS Journey</CardTitle>
                <CardDescription>
                  Personalized study plan based on your target score of {userData.targetScore}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Reading</span>
                      <span className="text-sm">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Writing</span>
                      <span className="text-sm">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Listening</span>
                      <span className="text-sm">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Speaking</span>
                      <span className="text-sm">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Personalized Recommendations</h3>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                      <span>Focus on improving your Speaking skills with daily practice sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                      <span>Complete the Reading module "Skimming and Scanning Techniques"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                      <span>Take a practice test to assess your current band score</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 overflow-hidden">
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled classes and practice tests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Reading Techniques</h4>
                        <p className="text-xs text-muted-foreground">Live Class</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Tomorrow</p>
                      <p className="text-xs text-muted-foreground">10:00 AM</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <PenTool className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Writing Task 1</h4>
                        <p className="text-xs text-muted-foreground">Practice Session</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Wed, May 8</p>
                      <p className="text-xs text-muted-foreground">2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Brain className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">AI Tutor Session</h4>
                        <p className="text-xs text-muted-foreground">Speaking Practice</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Thu, May 9</p>
                      <p className="text-xs text-muted-foreground">11:30 AM</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <BarChart className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Mock Test</h4>
                        <p className="text-xs text-muted-foreground">Full IELTS Practice</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">Sat, May 11</p>
                      <p className="text-xs text-muted-foreground">9:00 AM</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  View Full Schedule
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Study Plan for Next 7 Days</CardTitle>
                <CardDescription>Based on your learning style: {userData.learningStyle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Today</h4>
                      </div>
                      <Badge>4 hours</Badge>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>Reading: Skimming and Scanning Techniques (1 hour)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>Listening: Note-taking Practice (1 hour)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>Vocabulary: Academic Word List (1 hour)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                        <span>Speaking: Part 1 Practice with AI Tutor (1 hour)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Tomorrow</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Writing Task 1, Reading Practice, Live Class</p>
                    </div>

                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Wednesday</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Grammar Review, Listening Section 3 & 4</p>
                    </div>

                    <div className="rounded-lg border p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Thursday</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">Speaking Practice, Writing Task 2</p>
                    </div>
                  </div>

                  <Button className="w-full">
                    View Full Study Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <motion.div className="grid gap-4 grid-cols-1 md:grid-cols-2" variants={itemVariants}>
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>{course.title}</CardTitle>
                    <Badge>{course.category}</Badge>
                  </div>
                  <CardDescription>{course.level}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="rounded-lg bg-muted p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="h-4 w-4 text-primary" />
                      <h4 className="text-sm font-medium">Next Lesson</h4>
                    </div>
                    <p className="text-sm">{course.nextLesson}</p>
                  </div>

                  <Button className="w-full">
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Recommended Additional Courses</CardTitle>
                <CardDescription>Based on your learning style and goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">IELTS Vocabulary Booster</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Expand your academic vocabulary with this intensive course focused on high-frequency IELTS words.
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">Premium</Badge>
                      <Button size="sm">Enroll</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Writing Task 2 Mastery</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Learn advanced essay structures and argument techniques to score 7+ in Writing Task 2.
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">Premium</Badge>
                      <Button size="sm">Enroll</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <motion.div className="grid gap-4 grid-cols-1 md:grid-cols-2" variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Practice Tests</CardTitle>
                <CardDescription>Take full or section-specific practice tests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Full IELTS Mock Test</h4>
                      </div>
                      <Badge>3 hours</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Complete simulation of the IELTS exam with all four sections.
                    </p>
                    <Button size="sm" className="w-full">
                      Start Test
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border p-3">
                      <h4 className="text-sm font-medium mb-1">Reading Test</h4>
                      <p className="text-xs text-muted-foreground mb-2">60 minutes</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start
                      </Button>
                    </div>

                    <div className="rounded-lg border p-3">
                      <h4 className="text-sm font-medium mb-1">Listening Test</h4>
                      <p className="text-xs text-muted-foreground mb-2">40 minutes</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start
                      </Button>
                    </div>

                    <div className="rounded-lg border p-3">
                      <h4 className="text-sm font-medium mb-1">Writing Test</h4>
                      <p className="text-xs text-muted-foreground mb-2">60 minutes</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start
                      </Button>
                    </div>

                    <div className="rounded-lg border p-3">
                      <h4 className="text-sm font-medium mb-1">Speaking Test</h4>
                      <p className="text-xs text-muted-foreground mb-2">15 minutes</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Start
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>Test History</CardTitle>
                <CardDescription>Your previous test attempts and scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <h3 className="text-lg font-medium mb-1">No Tests Completed Yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take your first practice test to see your results here
                  </p>
                  <Button>Take a Practice Test</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>AI-Powered Practice</CardTitle>
                <CardDescription>Get personalized feedback and targeted practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Speaking Practice</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Practice speaking with our AI tutor and get instant feedback on pronunciation and fluency.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Start Practice
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <PenTool className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Writing Feedback</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Submit your essays and get detailed feedback on structure, grammar, and vocabulary.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Submit Essay
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Targeted Practice</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get personalized practice questions based on your weak areas.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Generate Questions
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
