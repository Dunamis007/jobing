"use client"

import { useState, useEffect, useRef } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import { doc, getDoc, updateDoc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Play, Pause, RotateCcw, Clock, BookOpen, CheckCircle, BarChart3, Save } from "lucide-react"

export default function StudyTimerPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [goal, setGoal] = useState(25)
  const [sessions, setSessions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [totalStudyTime, setTotalStudyTime] = useState(0)
  const [todayStudyTime, setTodayStudyTime] = useState(0)
  const [weekStudyTime, setWeekStudyTime] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Available subjects
  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Literature",
    "Economics",
    "Computer Science",
    "Geography",
    "History",
  ]

  // Preset study durations (in minutes)
  const presetDurations = [15, 25, 30, 45, 60, 90, 120]

  useEffect(() => {
    if (user) {
      fetchStudySessions()
      fetchStudyStats()
    } else {
      setLoading(false)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [user])

  const fetchStudySessions = async () => {
    if (!user) return

    try {
      setLoading(true)

      // Get recent study sessions
      const sessionsRef = collection(db, "users", user.uid, "studySessions")
      const sessionsSnapshot = await getDoc(doc(db, "users", user.uid, "studyData", "sessions"))

      if (sessionsSnapshot.exists()) {
        const data = sessionsSnapshot.data()
        setSessions(data.recentSessions || [])
      } else {
        setSessions([])
      }
    } catch (error) {
      console.error("Error fetching study sessions:", error)
      toast({
        title: "Error",
        description: "Failed to load your study sessions.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchStudyStats = async () => {
    if (!user) return

    try {
      // Get study stats
      const statsSnapshot = await getDoc(doc(db, "users", user.uid, "studyData", "stats"))

      if (statsSnapshot.exists()) {
        const data = statsSnapshot.data()
        setTotalStudyTime(data.totalTime || 0)
        setTodayStudyTime(data.todayTime || 0)
        setWeekStudyTime(data.weekTime || 0)
      } else {
        setTotalStudyTime(0)
        setTodayStudyTime(0)
        setWeekStudyTime(0)
      }
    } catch (error) {
      console.error("Error fetching study stats:", error)
    }
  }

  const startTimer = () => {
    if (!subject) {
      toast({
        title: "Subject Required",
        description: "Please select a subject before starting the timer.",
        variant: "destructive",
      })
      return
    }

    setIsRunning(true)
    const startTime = Date.now() - time * 1000

    intervalRef.current = setInterval(() => {
      setTime((Date.now() - startTime) / 1000)
    }, 1000)
  }

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsRunning(false)
  }

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIsRunning(false)
    setTime(0)
  }

  const saveSession = async () => {
    if (!user || time < 60) {
      toast({
        title: "Cannot Save Session",
        description: "Study for at least 1 minute before saving a session.",
        variant: "destructive",
      })
      return
    }

    try {
      setSaving(true)

      // Convert seconds to minutes
      const duration = Math.round(time / 60)

      // Create session data
      const sessionData = {
        subject,
        topic: topic || `Study session - ${subject}`,
        duration,
        date: serverTimestamp(),
        userId: user.uid,
      }

      // Add to study sessions collection
      await addDoc(collection(db, "users", user.uid, "studySessions"), sessionData)

      // Update recent sessions list
      const recentSession = {
        ...sessionData,
        date: new Date().toISOString(),
      }

      const updatedSessions = [recentSession, ...sessions.slice(0, 9)]
      await setDoc(doc(db, "users", user.uid, "studyData", "sessions"), {
        recentSessions: updatedSessions,
      })

      // Update study stats
      const statsRef = doc(db, "users", user.uid, "studyData", "stats")
      const statsSnapshot = await getDoc(statsRef)

      if (statsSnapshot.exists()) {
        const data = statsSnapshot.data()
        await updateDoc(statsRef, {
          totalTime: (data.totalTime || 0) + duration,
          todayTime: (data.todayTime || 0) + duration,
          weekTime: (data.weekTime || 0) + duration,
        })
      } else {
        await setDoc(statsRef, {
          totalTime: duration,
          todayTime: duration,
          weekTime: duration,
        })
      }

      // Update user progress data
      const userProgressRef = doc(db, "userProgress", user.uid)
      const userProgressSnap = await getDoc(userProgressRef)

      if (userProgressSnap.exists()) {
        const progressData = userProgressSnap.data()

        // Update total study time
        const totalStudyTime = (progressData.totalStudyTime || 0) + duration / 60

        // Update weekly data
        const dayOfWeek = new Date().getDay() // 0 = Sunday, 1 = Monday, etc.
        const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1 // Convert to 0 = Monday, 6 = Sunday

        const weeklyData =
          progressData.weeklyData ||
          Array(7)
            .fill(0)
            .map((_, i) => ({
              name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
              hours: 0,
            }))

        weeklyData[dayIndex].hours += duration / 60

        await updateDoc(userProgressRef, {
          totalStudyTime,
          studyTimeChange: totalStudyTime - (progressData.totalStudyTime || 0),
          weeklyData,
        })
      } else {
        // Create new progress data for new user
        const dayOfWeek = new Date().getDay()
        const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1

        const weeklyData = Array(7)
          .fill(0)
          .map((_, i) => ({
            name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
            hours: 0,
          }))

        weeklyData[dayIndex].hours = duration / 60

        await setDoc(userProgressRef, {
          totalStudyTime: duration / 60,
          studyTimeChange: duration / 60,
          lessonsCompleted: 0,
          totalLessons: 0,
          averageScore: 0,
          scoreImprovement: 0,
          achievements: 0,
          newAchievements: 0,
          weeklyData,
          subjectData: [],
          monthlyData: Array(6)
            .fill(0)
            .map((_, i) => ({
              name: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i],
              score: 0,
            })),
        })
      }

      // Update UI
      setSessions(updatedSessions)
      setTotalStudyTime((prev) => prev + duration)
      setTodayStudyTime((prev) => prev + duration)
      setWeekStudyTime((prev) => prev + duration)

      // Reset timer
      resetTimer()

      toast({
        title: "Session Saved",
        description: `You've studied ${subject} for ${formatTime(time)} minutes.`,
      })
    } catch (error) {
      console.error("Error saving study session:", error)
      toast({
        title: "Error",
        description: "Failed to save your study session. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    return `${hours > 0 ? `${hours}:` : ""}${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  const getProgressPercentage = () => {
    if (goal <= 0) return 0
    const minutesStudied = Math.floor(time / 60)
    return Math.min(Math.round((minutesStudied / goal) * 100), 100)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Study Timer" text="Track your study sessions and boost your productivity" />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Study Session</CardTitle>
              <CardDescription>Set up your study session and track your progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select value={subject} onValueChange={setSubject} disabled={isRunning}>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subj) => (
                      <SelectItem key={subj} value={subj}>
                        {subj}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">Topic (Optional)</Label>
                <Input
                  id="topic"
                  placeholder="What are you studying?"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  disabled={isRunning}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="goal">Study Goal (minutes)</Label>
                  <span className="text-sm text-muted-foreground">{goal} min</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {presetDurations.map((duration) => (
                    <Button
                      key={duration}
                      variant={goal === duration ? "default" : "outline"}
                      size="sm"
                      onClick={() => setGoal(duration)}
                      disabled={isRunning}
                    >
                      {duration}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <div className="text-center mb-4">
                  <div className="text-6xl font-bold tabular-nums">{formatTime(time)}</div>
                  <div className="text-sm text-muted-foreground mt-1">{Math.floor(time / 60)} minutes studied</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{getProgressPercentage()}%</span>
                  </div>
                  <Progress value={getProgressPercentage()} className="h-2" />
                </div>

                <div className="flex gap-2 mt-6">
                  {!isRunning ? (
                    <Button className="flex-1" onClick={startTimer} disabled={!subject}>
                      <Play className="mr-2 h-4 w-4" />
                      Start
                    </Button>
                  ) : (
                    <Button className="flex-1" onClick={pauseTimer} variant="outline">
                      <Pause className="mr-2 h-4 w-4" />
                      Pause
                    </Button>
                  )}
                  <Button variant="outline" onClick={resetTimer} disabled={time === 0}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="default" onClick={saveSession} disabled={time < 60 || saving}>
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Stats</CardTitle>
              <CardDescription>Your study time statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1 text-center">
                  <div className="flex justify-center">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">{totalStudyTime}</div>
                  <p className="text-xs text-muted-foreground">Total Minutes</p>
                </div>
                <div className="space-y-1 text-center">
                  <div className="flex justify-center">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">{todayStudyTime}</div>
                  <p className="text-xs text-muted-foreground">Today's Minutes</p>
                </div>
                <div className="space-y-1 text-center">
                  <div className="flex justify-center">
                    <BarChart3 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold">{weekStudyTime}</div>
                  <p className="text-xs text-muted-foreground">This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Study Sessions</CardTitle>
              <CardDescription>Your last 10 study sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              ) : sessions.length === 0 ? (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No study sessions yet</h3>
                  <p className="text-muted-foreground">Start your first study session to track your progress</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sessions.map((session, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg border">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{session.subject}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-1">{session.topic}</p>
                          </div>
                          <Badge variant="outline">{session.duration} min</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{formatDate(session.date)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" disabled={sessions.length === 0}>
                View All Sessions
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}
