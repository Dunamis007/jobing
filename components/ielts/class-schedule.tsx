"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { firestoreService } from "@/lib/firestore-service"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import {
  Calendar,
  Clock,
  Play,
  CheckCircle,
  Lock,
  Users,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  AlertCircle,
  Coins,
} from "lucide-react"

interface ClassSession {
  id: string
  title: string
  description: string
  startTime: string // HH:MM format
  endTime: string // HH:MM format
  days: string[] // "monday", "tuesday", etc.
  instructor: string
  skill: "reading" | "listening" | "speaking" | "writing" | "mixed"
  level: "beginner" | "intermediate" | "advanced"
  capacity: number
  enrolled: number
  coinCost: number
  isLocked: boolean
}

export function ClassSchedule() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [classes, setClasses] = useState<ClassSession[]>([])
  const [enrolledClasses, setEnrolledClasses] = useState<string[]>([])
  const [currentDay, setCurrentDay] = useState<string>("")
  const [currentTime, setCurrentTime] = useState<string>("")
  const [walletBalance, setWalletBalance] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  // Initialize data
  useEffect(() => {
    if (!user) return

    const fetchData = async () => {
      try {
        // Get current day and time
        const now = new Date()
        const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        setCurrentDay(days[now.getDay()])
        setCurrentTime(`${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`)

        // Fetch wallet balance
        const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
        const walletDoc = await firestoreService.getDoc(walletDocRef)

        if (walletDoc.exists) {
          setWalletBalance(walletDoc.data().balance || 0)
        }

        // Fetch enrolled classes
        const enrollmentsCollectionRef = firestoreService.collection("users", user.uid, "enrollments")
        const enrollmentDocs = await firestoreService.getDocs(enrollmentsCollectionRef)

        const enrolledClassIds = enrollmentDocs.docs.map((doc) => doc.data().classId)
        setEnrolledClasses(enrolledClassIds)

        // Mock class data (in a real app, this would come from Firestore)
        const mockClasses: ClassSession[] = [
          {
            id: "reading-morning",
            title: "IELTS Reading Strategies",
            description: "Learn essential reading techniques for IELTS success",
            startTime: "10:00",
            endTime: "12:00",
            days: ["monday", "wednesday", "friday"],
            instructor: "Dr. Sarah Johnson",
            skill: "reading",
            level: "intermediate",
            capacity: 20,
            enrolled: 12,
            coinCost: 100,
            isLocked: false,
          },
          {
            id: "listening-afternoon",
            title: "IELTS Listening Mastery",
            description: "Improve your listening skills with practice tests and strategies",
            startTime: "12:30",
            endTime: "14:30",
            days: ["monday", "wednesday", "friday"],
            instructor: "Prof. Michael Chen",
            skill: "listening",
            level: "intermediate",
            capacity: 20,
            enrolled: 15,
            coinCost: 100,
            isLocked: false,
          },
          {
            id: "speaking-early-evening",
            title: "IELTS Speaking Confidence",
            description: "Build confidence and fluency for the speaking section",
            startTime: "15:00",
            endTime: "16:00",
            days: ["tuesday", "thursday"],
            instructor: "Emma Wilson",
            skill: "speaking",
            level: "intermediate",
            capacity: 15,
            enrolled: 8,
            coinCost: 150,
            isLocked: true,
          },
          {
            id: "writing-evening",
            title: "IELTS Writing Workshop",
            description: "Master Task 1 and Task 2 writing with structured approaches",
            startTime: "16:00",
            endTime: "17:30",
            days: ["tuesday", "thursday"],
            instructor: "Dr. James Peterson",
            skill: "writing",
            level: "advanced",
            capacity: 15,
            enrolled: 10,
            coinCost: 150,
            isLocked: true,
          },
        ]

        setClasses(mockClasses)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        toast({
          title: "Error",
          description: "Failed to load class schedule. Please try again.",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchData()

    // Update current time every minute
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(`${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`)
    }, 60000)

    return () => clearInterval(interval)
  }, [user, toast])

  // Check if a class is currently in session
  const isClassInSession = (classItem: ClassSession) => {
    return classItem.days.includes(currentDay) && currentTime >= classItem.startTime && currentTime < classItem.endTime
  }

  // Check if a class is available to join (within 10 minutes of start time)
  const isClassAvailableToJoin = (classItem: ClassSession) => {
    if (!classItem.days.includes(currentDay)) return false

    const [currentHour, currentMinute] = currentTime.split(":").map(Number)
    const [startHour, startMinute] = classItem.startTime.split(":").map(Number)

    const currentTotalMinutes = currentHour * 60 + currentMinute
    const startTotalMinutes = startHour * 60 + startMinute

    // Class is available to join if it's within 10 minutes of start time or already started
    return (
      (startTotalMinutes - currentTotalMinutes <= 10 && startTotalMinutes - currentTotalMinutes >= 0) ||
      isClassInSession(classItem)
    )
  }

  // Enroll in a class
  const enrollInClass = async (classItem: ClassSession) => {
    if (!user) return

    try {
      // Check if user has enough coins
      if (walletBalance < classItem.coinCost) {
        toast({
          title: "Insufficient EduCoins",
          description: `You need ${classItem.coinCost} EduCoins to enroll in this class. You currently have ${walletBalance} EduCoins.`,
          variant: "destructive",
        })
        return
      }

      // Deduct coins from wallet
      const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
      await firestoreService.updateDoc(walletDocRef, {
        balance: walletBalance - classItem.coinCost,
        lastUpdated: new Date().toISOString(),
      })

      // Record transaction
      const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
      await firestoreService.addDoc(transactionsCollectionRef, {
        amount: classItem.coinCost,
        type: "debit",
        description: `Enrolled in "${classItem.title}" class`,
        category: "enrollment",
        createdAt: new Date().toISOString(),
      })

      // Record enrollment
      const enrollmentsCollectionRef = firestoreService.collection("users", user.uid, "enrollments")
      await firestoreService.addDoc(enrollmentsCollectionRef, {
        classId: classItem.id,
        title: classItem.title,
        instructor: classItem.instructor,
        skill: classItem.skill,
        startTime: classItem.startTime,
        endTime: classItem.endTime,
        days: classItem.days,
        enrolledAt: new Date().toISOString(),
      })

      // Update local state
      setWalletBalance(walletBalance - classItem.coinCost)
      setEnrolledClasses([...enrolledClasses, classItem.id])

      toast({
        title: "Enrollment successful!",
        description: `You have successfully enrolled in "${classItem.title}". You can now join this class during scheduled times.`,
      })
    } catch (error) {
      console.error("Error enrolling in class:", error)
      toast({
        title: "Enrollment failed",
        description: "Failed to enroll in the class. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Join a class session
  const joinClassSession = (classItem: ClassSession) => {
    if (!isClassAvailableToJoin(classItem)) {
      toast({
        title: "Class not available",
        description: "This class is not currently in session or available to join.",
        variant: "destructive",
      })
      return
    }

    if (!enrolledClasses.includes(classItem.id)) {
      toast({
        title: "Not enrolled",
        description: "You need to enroll in this class before you can join a session.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would redirect to a virtual classroom
    toast({
      title: "Joining class...",
      description: `You are now joining "${classItem.title}" with ${classItem.instructor}.`,
    })

    // Record attendance
    if (user) {
      const attendanceCollectionRef = firestoreService.collection("users", user.uid, "attendance")
      firestoreService
        .addDoc(attendanceCollectionRef, {
          classId: classItem.id,
          title: classItem.title,
          instructor: classItem.instructor,
          date: new Date().toISOString(),
        })
        .then(() => {
          // Award coins for attendance
          const attendanceReward = 20

          const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
          firestoreService.updateDoc(walletDocRef, {
            balance: walletBalance + attendanceReward,
            lastUpdated: new Date().toISOString(),
          })

          // Record transaction
          const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
          firestoreService.addDoc(transactionsCollectionRef, {
            amount: attendanceReward,
            type: "credit",
            description: `Attendance reward for "${classItem.title}"`,
            category: "attendance",
            createdAt: new Date().toISOString(),
          })

          // Update local state
          setWalletBalance(walletBalance + attendanceReward)

          toast({
            title: "Attendance recorded",
            description: `You've earned ${attendanceReward} EduCoins for attending this class!`,
          })
        })
        .catch((error) => {
          console.error("Error recording attendance:", error)
        })
    }
  }

  // Get skill icon
  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "reading":
        return <BookOpen className="h-4 w-4" />
      case "listening":
        return <Headphones className="h-4 w-4" />
      case "speaking":
        return <Mic className="h-4 w-4" />
      case "writing":
        return <PenTool className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  // Render class card
  const renderClassCard = (classItem: ClassSession) => {
    const isEnrolled = enrolledClasses.includes(classItem.id)
    const inSession = isClassInSession(classItem)
    const availableToJoin = isClassAvailableToJoin(classItem)

    return (
      <Card key={classItem.id} className={`overflow-hidden ${inSession ? "border-primary" : ""}`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle>{classItem.title}</CardTitle>
                {inSession && (
                  <Badge variant="default" className="bg-success text-success-foreground">
                    Live Now
                  </Badge>
                )}
              </div>
              <CardDescription>{classItem.description}</CardDescription>
            </div>
            <Badge variant="outline" className="flex items-center gap-1 capitalize">
              {getSkillIcon(classItem.skill)}
              <span>{classItem.skill}</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pb-2">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                {classItem.startTime} - {classItem.endTime}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{classItem.days.map((day) => day.charAt(0).toUpperCase() + day.slice(1)).join(", ")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>
                {classItem.enrolled}/{classItem.capacity} Students
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <span className="text-muted-foreground">Instructor:</span>
              <span className="font-medium">{classItem.instructor}</span>
            </div>
            <div className="flex items-center gap-1">
              <Coins className="h-4 w-4 text-primary" />
              <span className="font-medium">{classItem.coinCost} EduCoins</span>
            </div>
          </div>

          {classItem.isLocked && !isEnrolled && (
            <div className="flex items-center gap-2 bg-secondary p-2 rounded-md text-sm">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span>This class requires enrollment to join</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-2">
          {isEnrolled ? (
            <Button
              onClick={() => joinClassSession(classItem)}
              disabled={!availableToJoin}
              className="w-full"
              variant={availableToJoin ? "default" : "outline"}
            >
              {availableToJoin ? (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Join Class
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Enrolled
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={() => enrollInClass(classItem)}
              disabled={walletBalance < classItem.coinCost}
              className="w-full"
            >
              {walletBalance < classItem.coinCost ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Insufficient Coins
                </>
              ) : (
                <>
                  Enroll ({classItem.coinCost} <Coins className="mx-1 h-4 w-4" />)
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Class Schedule</h2>
          <p className="text-muted-foreground">Join live classes with expert instructors</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">
            Current time: <span className="font-medium">{currentTime}</span>
          </div>
          <Badge variant="outline" className="capitalize">
            {currentDay}
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="all">All Classes</TabsTrigger>
          <TabsTrigger value="enrolled">My Classes</TabsTrigger>
          <TabsTrigger value="morning">Morning</TabsTrigger>
          <TabsTrigger value="afternoon">Afternoon</TabsTrigger>
          <TabsTrigger value="evening">Evening</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {classes.map((classItem) => renderClassCard(classItem))}
        </TabsContent>

        <TabsContent value="enrolled" className="space-y-4">
          {classes
            .filter((classItem) => enrolledClasses.includes(classItem.id))
            .map((classItem) => renderClassCard(classItem))}

          {enrolledClasses.length === 0 && (
            <div className="text-center py-8">
              <h3 className="font-medium mb-2">No Enrolled Classes</h3>
              <p className="text-muted-foreground mb-4">You haven't enrolled in any classes yet.</p>
              <Button onClick={() => document.querySelector('[data-value="all"]')?.click()}>Browse Classes</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="morning" className="space-y-4">
          {classes
            .filter((classItem) => {
              const [hour] = classItem.startTime.split(":").map(Number)
              return hour >= 8 && hour < 12
            })
            .map((classItem) => renderClassCard(classItem))}
        </TabsContent>

        <TabsContent value="afternoon" className="space-y-4">
          {classes
            .filter((classItem) => {
              const [hour] = classItem.startTime.split(":").map(Number)
              return hour >= 12 && hour < 15
            })
            .map((classItem) => renderClassCard(classItem))}
        </TabsContent>

        <TabsContent value="evening" className="space-y-4">
          {classes
            .filter((classItem) => {
              const [hour] = classItem.startTime.split(":").map(Number)
              return hour >= 15 && hour < 18
            })
            .map((classItem) => renderClassCard(classItem))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
