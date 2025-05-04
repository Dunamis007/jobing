"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  BookOpen,
  Brain,
  CheckCircle2,
  AlertCircle,
  CalendarIcon,
  Plus,
  Trash2,
  Loader2,
} from "lucide-react"
import { auth } from "@/lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

interface StudySession {
  id: string
  subject: string
  topic: string
  date: string
  startTime: string
  endTime: string
  completed: boolean
  notes?: string
}

interface StudyPlan {
  id: string
  name: string
  subjects: string[]
  examDate: string
  sessions: StudySession[]
  createdAt: Date
}

export default function StudyPlanner() {
  const router = useRouter()
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [studyPlans, setStudyPlans] = useState<StudyPlan[]>([])
  const [selectedPlan, setSelectedPlan] = useState<StudyPlan | null>(null)
  const [newPlanName, setNewPlanName] = useState("")
  const [examDate, setExamDate] = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [studyHoursPerDay, setStudyHoursPerDay] = useState(2)
  const [strengths, setStrengths] = useState("")
  const [weaknesses, setWeaknesses] = useState("")

  const subjects = [
    "English Language",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Literature",
    "Government",
    "Economics",
    "Geography",
    "Accounting",
    "Commerce",
    "History",
    "CRK/IRK",
    "Agricultural Science",
    "French",
    "Yoruba/Igbo/Hausa",
  ]

  useEffect(() => {
    // Simulate loading study plans from database
    setTimeout(() => {
      const samplePlans: StudyPlan[] = [
        {
          id: "plan1",
          name: "JAMB 2024 Preparation",
          subjects: ["English Language", "Mathematics", "Physics", "Chemistry"],
          examDate: "2024-04-15",
          sessions: [
            {
              id: "session1",
              subject: "English Language",
              topic: "Comprehension and Summary",
              date: "2024-01-10",
              startTime: "16:00",
              endTime: "18:00",
              completed: true,
              notes: "Focused on reading techniques and identifying main ideas",
            },
            {
              id: "session2",
              subject: "Mathematics",
              topic: "Algebra and Equations",
              date: "2024-01-11",
              startTime: "16:00",
              endTime: "18:00",
              completed: true,
            },
            {
              id: "session3",
              subject: "Physics",
              topic: "Mechanics - Forces and Motion",
              date: "2024-01-12",
              startTime: "16:00",
              endTime: "18:00",
              completed: false,
            },
            {
              id: "session4",
              subject: "Chemistry",
              topic: "Periodic Table and Elements",
              date: "2024-01-13",
              startTime: "16:00",
              endTime: "18:00",
              completed: false,
            },
          ],
          createdAt: new Date("2024-01-05"),
        },
      ]

      setStudyPlans(samplePlans)
      if (samplePlans.length > 0) {
        setSelectedPlan(samplePlans[0])
      }
      setLoading(false)
    }, 1500)
  }, [])

  const handleSubjectToggle = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject))
    } else {
      setSelectedSubjects([...selectedSubjects, subject])
    }
  }

  const generateStudyPlan = () => {
    if (!newPlanName || !examDate || selectedSubjects.length === 0) {
      alert("Please fill in all required fields")
      return
    }

    setGenerating(true)

    // Simulate AI generating a study plan
    setTimeout(() => {
      const today = new Date()
      const examDateObj = new Date(examDate)
      const daysUntilExam = Math.floor((examDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

      if (daysUntilExam <= 0) {
        alert("Exam date must be in the future")
        setGenerating(false)
        return
      }

      // Generate study sessions based on subjects and available days
      const sessions: StudySession[] = []
      const currentDate = new Date(today)
      let sessionId = 1

      // Simple algorithm to distribute subjects across available days
      const topicsBySubject: Record<string, string[]> = {
        "English Language": [
          "Comprehension and Summary",
          "Lexis and Structure",
          "Oral English",
          "Literature and Poetry",
          "Essay Writing",
        ],
        Mathematics: [
          "Algebra and Equations",
          "Geometry and Trigonometry",
          "Statistics and Probability",
          "Calculus",
          "Matrices and Vectors",
        ],
        Physics: [
          "Mechanics - Forces and Motion",
          "Waves and Optics",
          "Electricity and Magnetism",
          "Modern Physics",
          "Heat and Thermodynamics",
        ],
        Chemistry: [
          "Periodic Table and Elements",
          "Chemical Bonding",
          "Organic Chemistry",
          "Physical Chemistry",
          "Analytical Chemistry",
        ],
        Biology: [
          "Cell Biology",
          "Genetics and Evolution",
          "Human Anatomy and Physiology",
          "Ecology and Environment",
          "Plant Biology",
        ],
      }

      // Fill in topics for other subjects
      subjects.forEach((subject) => {
        if (!topicsBySubject[subject]) {
          topicsBySubject[subject] = [
            "Topic 1 - Fundamentals",
            "Topic 2 - Intermediate Concepts",
            "Topic 3 - Advanced Concepts",
            "Topic 4 - Problem Solving",
            "Topic 5 - Exam Preparation",
          ]
        }
      })

      // Create study sessions
      for (let day = 0; day < Math.min(daysUntilExam, 60); day++) {
        // Skip weekends in this simple example
        if (currentDate.getDay() === 0) {
          currentDate.setDate(currentDate.getDate() + 1)
          continue
        }

        const subjectIndex = day % selectedSubjects.length
        const subject = selectedSubjects[subjectIndex]
        const topicIndex = Math.floor(day / selectedSubjects.length) % topicsBySubject[subject].length
        const topic = topicsBySubject[subject][topicIndex]

        sessions.push({
          id: `session${sessionId++}`,
          subject,
          topic,
          date: currentDate.toISOString().split("T")[0],
          startTime: "16:00",
          endTime: `${16 + studyHoursPerDay}:00`,
          completed: false,
        })

        currentDate.setDate(currentDate.getDate() + 1)
      }

      const newPlan: StudyPlan = {
        id: `plan${studyPlans.length + 1}`,
        name: newPlanName,
        subjects: selectedSubjects,
        examDate,
        sessions,
        createdAt: new Date(),
      }

      setStudyPlans([...studyPlans, newPlan])
      setSelectedPlan(newPlan)
      setGenerating(false)
    }, 3000)
  }

  const markSessionCompleted = (sessionId: string, completed: boolean) => {
    if (!selectedPlan) return

    const updatedSessions = selectedPlan.sessions.map((session) =>
      session.id === sessionId ? { ...session, completed } : session,
    )

    const updatedPlan = { ...selectedPlan, sessions: updatedSessions }
    setSelectedPlan(updatedPlan)

    const updatedPlans = studyPlans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan))
    setStudyPlans(updatedPlans)
  }

  const addSession = (newSession: Omit<StudySession, "id">) => {
    if (!selectedPlan) return

    const sessionId = `session${Date.now()}`
    const session: StudySession = {
      id: sessionId,
      ...newSession,
    }

    const updatedSessions = [...selectedPlan.sessions, session].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    )

    const updatedPlan = { ...selectedPlan, sessions: updatedSessions }
    setSelectedPlan(updatedPlan)

    const updatedPlans = studyPlans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan))
    setStudyPlans(updatedPlans)
  }

  const deleteSession = (sessionId: string) => {
    if (!selectedPlan) return

    const updatedSessions = selectedPlan.sessions.filter((session) => session.id !== sessionId)
    const updatedPlan = { ...selectedPlan, sessions: updatedSessions }
    setSelectedPlan(updatedPlan)

    const updatedPlans = studyPlans.map((plan) => (plan.id === selectedPlan.id ? updatedPlan : plan))
    setStudyPlans(updatedPlans)
  }

  const calculateProgress = () => {
    if (!selectedPlan || selectedPlan.sessions.length === 0) return 0

    const completedSessions = selectedPlan.sessions.filter((session) => session.completed).length
    return Math.round((completedSessions / selectedPlan.sessions.length) * 100)
  }

  const getUpcomingSessions = () => {
    if (!selectedPlan) return []

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return selectedPlan.sessions
      .filter((session) => {
        const sessionDate = new Date(session.date)
        sessionDate.setHours(0, 0, 0, 0)
        return sessionDate >= today && !session.completed
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <Skeleton className="mb-6 h-8 w-64" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <Skeleton className="h-5 w-32" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold">AI Study Planner</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Study Plans</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studyPlans.length > 0 ? (
                studyPlans.map((plan) => (
                  <Button
                    key={plan.id}
                    variant={selectedPlan?.id === plan.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedPlan(plan)}
                  >
                    <div className="flex flex-1 items-center justify-between">
                      <span>{plan.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(plan.examDate).toLocaleDateString()}
                      </span>
                    </div>
                  </Button>
                ))
              ) : (
                <p className="text-center text-sm text-muted-foreground">No study plans yet</p>
              )}

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Plan
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create AI-Powered Study Plan</DialogTitle>
                    <DialogDescription>
                      Our AI will generate a personalized study plan based on your preferences and exam date.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="plan-name">Plan Name</Label>
                      <Input
                        id="plan-name"
                        value={newPlanName}
                        onChange={(e) => setNewPlanName(e.target.value)}
                        placeholder="e.g., JAMB 2024 Preparation"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exam-date">Exam Date</Label>
                      <Input
                        id="exam-date"
                        type="date"
                        value={examDate}
                        onChange={(e) => setExamDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Select Subjects (4 recommended)</Label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {subjects.map((subject) => (
                          <div key={subject} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={subject}
                              checked={selectedSubjects.includes(subject)}
                              onChange={() => handleSubjectToggle(subject)}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <Label htmlFor={subject} className="text-sm">
                              {subject}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="study-hours">Study Hours Per Day</Label>
                      <Input
                        id="study-hours"
                        type="number"
                        min="1"
                        max="8"
                        value={studyHoursPerDay}
                        onChange={(e) => setStudyHoursPerDay(Number.parseInt(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="strengths">Your Strengths (Optional)</Label>
                      <Textarea
                        id="strengths"
                        value={strengths}
                        onChange={(e) => setStrengths(e.target.value)}
                        placeholder="Subjects or topics you're good at"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weaknesses">Areas to Improve (Optional)</Label>
                      <Textarea
                        id="weaknesses"
                        value={weaknesses}
                        onChange={(e) => setWeaknesses(e.target.value)}
                        placeholder="Subjects or topics you find challenging"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={generateStudyPlan} disabled={generating}>
                      {generating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating Plan...
                        </>
                      ) : (
                        <>
                          <Brain className="mr-2 h-4 w-4" />
                          Generate AI Study Plan
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          {selectedPlan ? (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{selectedPlan.name}</CardTitle>
                    <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Exam: {new Date(selectedPlan.examDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardDescription>Subjects: {selectedPlan.subjects.join(", ")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-muted-foreground">{calculateProgress()}% Complete</span>
                    </div>
                    <Progress value={calculateProgress()} className="h-2" />
                  </div>

                  <Tabs defaultValue="upcoming">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="all">All Sessions</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upcoming" className="mt-4 space-y-4">
                      {getUpcomingSessions().length > 0 ? (
                        getUpcomingSessions().map((session) => (
                          <Card key={session.id}>
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-medium">{session.subject}</h3>
                                  <p className="text-sm text-muted-foreground">{session.topic}</p>
                                  <div className="mt-2 flex items-center gap-4">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Calendar className="mr-1 h-4 w-4" />
                                      {new Date(session.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <Clock className="mr-1 h-4 w-4" />
                                      {session.startTime} - {session.endTime}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => markSessionCompleted(session.id, true)}
                                  >
                                    <CheckCircle2 className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" onClick={() => deleteSession(session.id)}>
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      ) : (
                        <div className="rounded-lg border border-dashed p-8 text-center">
                          <p className="text-muted-foreground">No upcoming study sessions</p>
                        </div>
                      )}

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Study Session
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add Study Session</DialogTitle>
                            <DialogDescription>Create a new study session for your plan</DialogDescription>
                          </DialogHeader>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault()
                              const formData = new FormData(e.currentTarget)
                              addSession({
                                subject: formData.get("subject") as string,
                                topic: formData.get("topic") as string,
                                date: formData.get("date") as string,
                                startTime: formData.get("start-time") as string,
                                endTime: formData.get("end-time") as string,
                                completed: false,
                              })
                              e.currentTarget.reset()
                              document.querySelector<HTMLButtonElement>("[data-dismiss]")?.click()
                            }}
                            className="grid gap-4 py-4"
                          >
                            <div className="space-y-2">
                              <Label htmlFor="subject">Subject</Label>
                              <select
                                id="subject"
                                name="subject"
                                className="w-full rounded-md border border-input bg-background px-3 py-2"
                                required
                              >
                                {selectedPlan.subjects.map((subject) => (
                                  <option key={subject} value={subject}>
                                    {subject}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="topic">Topic</Label>
                              <Input id="topic" name="topic" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="date">Date</Label>
                              <Input id="date" name="date" type="date" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="start-time">Start Time</Label>
                                <Input id="start-time" name="start-time" type="time" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="end-time">End Time</Label>
                                <Input id="end-time" name="end-time" type="time" required />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="button" variant="outline" data-dismiss>
                                Cancel
                              </Button>
                              <Button type="submit">Add Session</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </TabsContent>
                    <TabsContent value="all" className="mt-4 space-y-4">
                      {selectedPlan.sessions.length > 0 ? (
                        selectedPlan.sessions
                          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                          .map((session) => (
                            <Card key={session.id}>
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-medium">{session.subject}</h3>
                                    <p className="text-sm text-muted-foreground">{session.topic}</p>
                                    <div className="mt-2 flex items-center gap-4">
                                      <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-1 h-4 w-4" />
                                        {new Date(session.date).toLocaleDateString()}
                                      </div>
                                      <div className="flex items-center text-sm text-muted-foreground">
                                        <Clock className="mr-1 h-4 w-4" />
                                        {session.startTime} - {session.endTime}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-2">
                                    {session.completed ? (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => markSessionCompleted(session.id, false)}
                                      >
                                        <AlertCircle className="h-4 w-4" />
                                      </Button>
                                    ) : (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => markSessionCompleted(session.id, true)}
                                      >
                                        <CheckCircle2 className="h-4 w-4" />
                                      </Button>
                                    )}
                                    <Button size="sm" variant="outline" onClick={() => deleteSession(session.id)}>
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                      ) : (
                        <div className="rounded-lg border border-dashed p-8 text-center">
                          <p className="text-muted-foreground">No study sessions in this plan</p>
                        </div>
                      )}
                    </TabsContent>
                    <TabsContent value="completed" className="mt-4 space-y-4">
                      {selectedPlan.sessions.filter((session) => session.completed).length > 0 ? (
                        selectedPlan.sessions
                          .filter((session) => session.completed)
                          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                          .map((session) => (
                            <Card key={session.id}>
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-medium">{session.subject}</h3>
                                    <p className="text-sm text-muted-foreground">{session.topic}</p>
                                    <div className="mt-2 flex items-center gap-4">
                                      <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-1 h-4 w-4" />
                                        {new Date(session.date).toLocaleDateString()}
                                      </div>
                                      <div className="flex items-center text-sm text-muted-foreground">
                                        <Clock className="mr-1 h-4 w-4" />
                                        {session.startTime} - {session.endTime}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => markSessionCompleted(session.id, false)}
                                    >
                                      <AlertCircle className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={() => deleteSession(session.id)}>
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                      ) : (
                        <div className="rounded-lg border border-dashed p-8 text-center">
                          <p className="text-muted-foreground">No completed study sessions</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Resources</CardTitle>
                  <CardDescription>Recommended resources for your selected subjects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedPlan.subjects.map((subject) => (
                      <div key={subject} className="rounded-lg border p-4">
                        <h3 className="mb-2 font-medium">{subject}</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              Recommended Textbook for {subject}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              JAMB Past Questions for {subject}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              Video Tutorials for {subject}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={() => router.push("/dashboard/jamb/materials")}>
                    View All Study Materials
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Create Your First Study Plan</h3>
                <p className="mb-6 text-center text-muted-foreground">
                  Our AI will create a personalized study plan based on your exam date, subjects, and preferences.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Plan
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Create AI-Powered Study Plan</DialogTitle>
                      <DialogDescription>
                        Our AI will generate a personalized study plan based on your preferences and exam date.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="plan-name">Plan Name</Label>
                        <Input
                          id="plan-name"
                          value={newPlanName}
                          onChange={(e) => setNewPlanName(e.target.value)}
                          placeholder="e.g., JAMB 2024 Preparation"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="exam-date">Exam Date</Label>
                        <Input
                          id="exam-date"
                          type="date"
                          value={examDate}
                          onChange={(e) => setExamDate(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Select Subjects (4 recommended)</Label>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {subjects.map((subject) => (
                            <div key={subject} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={subject}
                                checked={selectedSubjects.includes(subject)}
                                onChange={() => handleSubjectToggle(subject)}
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <Label htmlFor={subject} className="text-sm">
                                {subject}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="study-hours">Study Hours Per Day</Label>
                        <Input
                          id="study-hours"
                          type="number"
                          min="1"
                          max="8"
                          value={studyHoursPerDay}
                          onChange={(e) => setStudyHoursPerDay(Number.parseInt(e.target.value))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="strengths">Your Strengths (Optional)</Label>
                        <Textarea
                          id="strengths"
                          value={strengths}
                          onChange={(e) => setStrengths(e.target.value)}
                          placeholder="Subjects or topics you're good at"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weaknesses">Areas to Improve (Optional)</Label>
                        <Textarea
                          id="weaknesses"
                          value={weaknesses}
                          onChange={(e) => setWeaknesses(e.target.value)}
                          placeholder="Subjects or topics you find challenging"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={generateStudyPlan} disabled={generating}>
                        {generating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating Plan...
                          </>
                        ) : (
                          <>
                            <Brain className="mr-2 h-4 w-4" />
                            Generate AI Study Plan
                          </>
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
