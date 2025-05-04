"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Clock, Download, Target, Trophy } from "lucide-react"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { useAuth } from "@/components/auth-provider"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProgressPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize with zero values for new users
  const [progressData, setProgressData] = useState({
    totalStudyTime: 0,
    studyTimeChange: 0,
    lessonsCompleted: 0,
    totalLessons: 0,
    averageScore: 0,
    scoreImprovement: 0,
    achievements: 0,
    newAchievements: 0,
    weeklyData: Array(7)
      .fill(0)
      .map((_, i) => ({
        name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
        hours: 0,
      })),
    subjectData: [] as {
      name: string
      progress: number
      total: number
      completed: number
    }[],
    monthlyData: Array(6)
      .fill(0)
      .map((_, i) => ({
        name: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i],
        score: 0,
      })),
  })

  useEffect(() => {
    async function fetchUserProgressData() {
      if (!user) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)

        // Fetch user progress data from Firestore
        const userProgressRef = doc(db, "userProgress", user.uid)
        const userProgressSnap = await getDoc(userProgressRef)

        if (userProgressSnap.exists()) {
          // User has existing progress data
          const data = userProgressSnap.data()

          setProgressData({
            totalStudyTime: data.totalStudyTime || 0,
            studyTimeChange: data.studyTimeChange || 0,
            lessonsCompleted: data.lessonsCompleted || 0,
            totalLessons: data.totalLessons || 0,
            averageScore: data.averageScore || 0,
            scoreImprovement: data.scoreImprovement || 0,
            achievements: data.achievements || 0,
            newAchievements: data.newAchievements || 0,
            weeklyData:
              data.weeklyData ||
              Array(7)
                .fill(0)
                .map((_, i) => ({
                  name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
                  hours: 0,
                })),
            subjectData: data.subjectData || [],
            monthlyData:
              data.monthlyData ||
              Array(6)
                .fill(0)
                .map((_, i) => ({
                  name: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i],
                  score: 0,
                })),
          })
        } else {
          // New user with no progress data - keep default zero values
          console.log("No progress data found for new user")
        }
      } catch (err) {
        console.error("Error fetching progress data:", err)
        setError("Failed to load progress data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchUserProgressData()
  }, [user])

  if (loading) {
    return <ProgressSkeleton />
  }

  if (error) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">{error}</p>
        <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    )
  }

  // Calculate completion percentage
  const completionPercentage =
    progressData.totalLessons > 0 ? Math.round((progressData.lessonsCompleted / progressData.totalLessons) * 100) : 0

  // Calculate weekly study hours total
  const weeklyTotal = progressData.weeklyData.reduce((sum, day) => sum + day.hours, 0)
  const dailyAverage = weeklyTotal > 0 ? (weeklyTotal / progressData.weeklyData.length).toFixed(1) : "0.0"

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress Tracking</h1>
        <p className="text-muted-foreground">Monitor your academic performance and learning journey</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.totalStudyTime.toFixed(1)} hrs</div>
            <p className="text-xs text-muted-foreground">
              {progressData.studyTimeChange > 0 ? "+" : ""}
              {progressData.studyTimeChange.toFixed(1)} hrs from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {progressData.lessonsCompleted}/{progressData.totalLessons || 1}
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.averageScore}%</div>
            <p className="text-xs text-muted-foreground">
              {progressData.scoreImprovement > 0 ? "+" : ""}
              {progressData.scoreImprovement}% improvement
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progressData.achievements}</div>
            <p className="text-xs text-muted-foreground">{progressData.newAchievements} new this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Study Hours</CardTitle>
                <CardDescription>Your study time distribution for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <Chart className="h-[300px]">
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={progressData.weeklyData}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 20,
                        }}
                      >
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}h`}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              className="border-none bg-background p-2 shadow-md"
                              items={[
                                {
                                  label: "Hours",
                                  value: (value) => `${value}h`,
                                  color: "hsl(var(--primary))",
                                },
                              ]}
                            />
                          }
                        />
                        <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </Chart>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <div>Total: {weeklyTotal.toFixed(1)} hours</div>
                  <div className="text-muted-foreground">Daily Average: {dailyAverage} hours</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
                <CardDescription>Your average test scores over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <Chart className="h-[300px]">
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={progressData.monthlyData}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 20,
                        }}
                      >
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                          stroke="#888888"
                          fontSize={12}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(value) => `${value}%`}
                          domain={[0, 100]}
                        />
                        <ChartTooltip
                          content={
                            <ChartTooltipContent
                              className="border-none bg-background p-2 shadow-md"
                              items={[
                                {
                                  label: "Score",
                                  value: (value) => `${value}%`,
                                  color: "hsl(var(--primary))",
                                },
                              ]}
                            />
                          }
                        />
                        <Line
                          type="monotone"
                          dataKey="score"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </Chart>
                <div className="mt-2 flex items-center justify-between text-sm">
                  {progressData.monthlyData.length > 0 ? (
                    <>
                      <div className="text-muted-foreground">Starting: {progressData.monthlyData[0].score}%</div>
                      <div>Current: {progressData.monthlyData[progressData.monthlyData.length - 1].score}%</div>
                      <div className="text-primary">
                        {progressData.scoreImprovement > 0 ? "+" : ""}
                        {progressData.scoreImprovement}% improvement
                      </div>
                    </>
                  ) : (
                    <div className="w-full text-center text-muted-foreground">No performance data available yet</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
              <CardDescription>Track your progress across different subjects</CardDescription>
            </CardHeader>
            <CardContent>
              {progressData.subjectData.length > 0 ? (
                <div className="space-y-6">
                  {progressData.subjectData.map((subject) => (
                    <div key={subject.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{subject.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {subject.completed}/{subject.total} lessons
                        </div>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">{subject.progress}% complete</div>
                        <Badge variant={subject.progress >= 75 ? "default" : "outline"}>
                          {subject.progress >= 75 ? "On Track" : "In Progress"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-muted-foreground">
                  <p>No subject progress data available yet.</p>
                  <p className="mt-2">Start learning to see your progress here!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Badges and rewards earned through your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              {progressData.achievements > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 p-6 flex items-center justify-center">
                      <Award className="h-12 w-12 text-primary" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Perfect Attendance</h3>
                      <p className="text-sm text-muted-foreground">Completed 7 consecutive days of study</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 p-6 flex items-center justify-center">
                      <Trophy className="h-12 w-12 text-primary" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Math Master</h3>
                      <p className="text-sm text-muted-foreground">Scored 90% or higher on 5 math tests</p>
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <div className="bg-primary/10 p-6 flex items-center justify-center">
                      <Target className="h-12 w-12 text-primary" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Goal Crusher</h3>
                      <p className="text-sm text-muted-foreground">Completed all weekly goals for 4 weeks</p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="py-8 text-center text-muted-foreground">
                  <p>No achievements earned yet.</p>
                  <p className="mt-2">Complete learning activities to earn achievements!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Progress Reports</CardTitle>
              <CardDescription>Download detailed reports of your academic progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">Monthly Progress Report</h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed analysis of your performance across all subjects
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1" disabled={progressData.totalStudyTime === 0}>
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">Subject-wise Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        In-depth report on your performance in each subject
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      disabled={progressData.subjectData.length === 0}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">Study Time Report</h3>
                      <p className="text-sm text-muted-foreground">
                        Analysis of your study patterns and time management
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1" disabled={weeklyTotal === 0}>
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProgressSkeleton() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[350px] mt-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-5 w-[120px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[80px]" />
                <Skeleton className="h-4 w-[100px] mt-2" />
              </CardContent>
            </Card>
          ))}
      </div>

      <div>
        <Skeleton className="h-10 w-[300px]" />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-4 w-[200px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[300px] w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-4 w-[200px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-[300px] w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
