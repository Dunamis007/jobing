"use client"

import { useState, useEffect } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/auth-provider"
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Plus, Trash2, Edit, CheckCircle, Calendar, Clock, Target, Bell } from "lucide-react"
import { format, isAfter, isBefore, addDays, isToday } from "date-fns"

interface Goal {
  id: string
  title: string
  description: string
  category: string
  deadline: any
  progress: number
  completed: boolean
  createdAt: any
}

interface Reminder {
  id: string
  title: string
  description: string
  date: any
  time: string
  completed: boolean
  createdAt: any
}

export default function GoalsPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [goals, setGoals] = useState<Goal[]>([])
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [createGoalOpen, setCreateGoalOpen] = useState(false)
  const [createReminderOpen, setCreateReminderOpen] = useState(false)
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null)
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null)
  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    category: "academic",
    deadline: "",
    progress: 0,
  })
  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  })
  const [goalFilter, setGoalFilter] = useState("all")
  const [reminderFilter, setReminderFilter] = useState("upcoming")

  // Goal categories
  const goalCategories = [
    { value: "academic", label: "Academic" },
    { value: "exam", label: "Exam Preparation" },
    { value: "project", label: "Project" },
    { value: "skill", label: "Skill Development" },
    { value: "personal", label: "Personal" },
  ]

  useEffect(() => {
    if (user) {
      fetchGoals()
      fetchReminders()
    } else {
      setLoading(false)
    }
  }, [user])

  const fetchGoals = async () => {
    if (!user) return

    try {
      setLoading(true)

      const goalsRef = collection(db, "goals")
      const q = query(goalsRef, where("userId", "==", user.uid), orderBy("createdAt", "desc"))

      const querySnapshot = await getDocs(q)
      const fetchedGoals: Goal[] = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        fetchedGoals.push({
          id: doc.id,
          title: data.title,
          description: data.description,
          category: data.category,
          deadline: data.deadline,
          progress: data.progress || 0,
          completed: data.completed || false,
          createdAt: data.createdAt,
        })
      })

      setGoals(fetchedGoals)
    } catch (error) {
      console.error("Error fetching goals:", error)
      toast({
        title: "Error",
        description: "Failed to load your goals.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const fetchReminders = async () => {
    if (!user) return

    try {
      setLoading(true)

      const remindersRef = collection(db, "reminders")
      const q = query(remindersRef, where("userId", "==", user.uid), orderBy("date", "asc"))

      const querySnapshot = await getDocs(q)
      const fetchedReminders: Reminder[] = []

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        fetchedReminders.push({
          id: doc.id,
          title: data.title,
          description: data.description,
          date: data.date,
          time: data.time,
          completed: data.completed || false,
          createdAt: data.createdAt,
        })
      })

      setReminders(fetchedReminders)
    } catch (error) {
      console.error("Error fetching reminders:", error)
      toast({
        title: "Error",
        description: "Failed to load your reminders.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCreateGoal = async () => {
    if (!user) return

    if (!newGoal.title || !newGoal.category || !newGoal.deadline) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      const goalData = {
        title: newGoal.title,
        description: newGoal.description,
        category: newGoal.category,
        deadline: new Date(newGoal.deadline),
        progress: newGoal.progress,
        completed: false,
        userId: user.uid,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "goals"), goalData)

      const newGoalWithId: Goal = {
        id: docRef.id,
        title: newGoal.title,
        description: newGoal.description,
        category: newGoal.category,
        deadline: new Date(newGoal.deadline),
        progress: newGoal.progress,
        completed: false,
        createdAt: new Date(),
      }

      setGoals([newGoalWithId, ...goals])
      setNewGoal({
        title: "",
        description: "",
        category: "academic",
        deadline: "",
        progress: 0,
      })
      setCreateGoalOpen(false)

      toast({
        title: "Goal Created",
        description: "Your new goal has been created.",
      })
    } catch (error) {
      console.error("Error creating goal:", error)
      toast({
        title: "Error",
        description: "Failed to create goal.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateGoal = async () => {
    if (!user || !editingGoal) return

    if (!newGoal.title || !newGoal.category || !newGoal.deadline) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      const goalData = {
        title: newGoal.title,
        description: newGoal.description,
        category: newGoal.category,
        deadline: new Date(newGoal.deadline),
        progress: newGoal.progress,
      }

      await updateDoc(doc(db, "goals", editingGoal.id), goalData)

      setGoals(
        goals.map((goal) =>
          goal.id === editingGoal.id
            ? {
                ...goal,
                ...goalData,
                deadline: new Date(newGoal.deadline),
              }
            : goal,
        ),
      )

      setNewGoal({
        title: "",
        description: "",
        category: "academic",
        deadline: "",
        progress: 0,
      })
      setEditingGoal(null)
      setCreateGoalOpen(false)

      toast({
        title: "Goal Updated",
        description: "Your goal has been updated.",
      })
    } catch (error) {
      console.error("Error updating goal:", error)
      toast({
        title: "Error",
        description: "Failed to update goal.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteGoal = async (goalId: string) => {
    if (!user) return

    try {
      await deleteDoc(doc(db, "goals", goalId))

      setGoals(goals.filter((goal) => goal.id !== goalId))

      toast({
        title: "Goal Deleted",
        description: "The goal has been deleted.",
      })
    } catch (error) {
      console.error("Error deleting goal:", error)
      toast({
        title: "Error",
        description: "Failed to delete goal.",
        variant: "destructive",
      })
    }
  }

  const handleToggleGoalCompletion = async (goalId: string, completed: boolean) => {
    if (!user) return

    try {
      await updateDoc(doc(db, "goals", goalId), {
        completed: !completed,
        progress: !completed ? 100 : 0,
      })

      setGoals(
        goals.map((goal) =>
          goal.id === goalId ? { ...goal, completed: !completed, progress: !completed ? 100 : 0 } : goal,
        ),
      )

      toast({
        title: !completed ? "Goal Completed" : "Goal Reopened",
        description: !completed
          ? "Congratulations on completing your goal!"
          : "The goal has been marked as incomplete.",
      })
    } catch (error) {
      console.error("Error updating goal completion:", error)
      toast({
        title: "Error",
        description: "Failed to update goal status.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateGoalProgress = async (goalId: string, progress: number) => {
    if (!user) return

    try {
      await updateDoc(doc(db, "goals", goalId), {
        progress,
        completed: progress === 100,
      })

      setGoals(goals.map((goal) => (goal.id === goalId ? { ...goal, progress, completed: progress === 100 } : goal)))
    } catch (error) {
      console.error("Error updating goal progress:", error)
      toast({
        title: "Error",
        description: "Failed to update goal progress.",
        variant: "destructive",
      })
    }
  }

  const handleCreateReminder = async () => {
    if (!user) return

    if (!newReminder.title || !newReminder.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      const reminderData = {
        title: newReminder.title,
        description: newReminder.description,
        date: new Date(newReminder.date),
        time: newReminder.time,
        completed: false,
        userId: user.uid,
        createdAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, "reminders"), reminderData)

      const newReminderWithId: Reminder = {
        id: docRef.id,
        title: newReminder.title,
        description: newReminder.description,
        date: new Date(newReminder.date),
        time: newReminder.time,
        completed: false,
        createdAt: new Date(),
      }

      setReminders([...reminders, newReminderWithId].sort((a, b) => a.date.getTime() - b.date.getTime()))

      setNewReminder({
        title: "",
        description: "",
        date: "",
        time: "",
      })
      setCreateReminderOpen(false)

      toast({
        title: "Reminder Created",
        description: "Your new reminder has been created.",
      })
    } catch (error) {
      console.error("Error creating reminder:", error)
      toast({
        title: "Error",
        description: "Failed to create reminder.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateReminder = async () => {
    if (!user || !editingReminder) return

    if (!newReminder.title || !newReminder.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      const reminderData = {
        title: newReminder.title,
        description: newReminder.description,
        date: new Date(newReminder.date),
        time: newReminder.time,
      }

      await updateDoc(doc(db, "reminders", editingReminder.id), reminderData)

      setReminders(
        reminders
          .map((reminder) =>
            reminder.id === editingReminder.id
              ? {
                  ...reminder,
                  ...reminderData,
                  date: new Date(newReminder.date),
                }
              : reminder,
          )
          .sort((a, b) => a.date.getTime() - b.date.getTime()),
      )

      setNewReminder({
        title: "",
        description: "",
        date: "",
        time: "",
      })
      setEditingReminder(null)
      setCreateReminderOpen(false)

      toast({
        title: "Reminder Updated",
        description: "Your reminder has been updated.",
      })
    } catch (error) {
      console.error("Error updating reminder:", error)
      toast({
        title: "Error",
        description: "Failed to update reminder.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteReminder = async (reminderId: string) => {
    if (!user) return

    try {
      await deleteDoc(doc(db, "reminders", reminderId))

      setReminders(reminders.filter((reminder) => reminder.id !== reminderId))

      toast({
        title: "Reminder Deleted",
        description: "The reminder has been deleted.",
      })
    } catch (error) {
      console.error("Error deleting reminder:", error)
      toast({
        title: "Error",
        description: "Failed to delete reminder.",
        variant: "destructive",
      })
    }
  }

  const handleToggleReminderCompletion = async (reminderId: string, completed: boolean) => {
    if (!user) return

    try {
      await updateDoc(doc(db, "reminders", reminderId), {
        completed: !completed,
      })

      setReminders(
        reminders.map((reminder) => (reminder.id === reminderId ? { ...reminder, completed: !completed } : reminder)),
      )

      toast({
        title: !completed ? "Reminder Completed" : "Reminder Reopened",
        description: !completed
          ? "The reminder has been marked as completed."
          : "The reminder has been marked as incomplete.",
      })
    } catch (error) {
      console.error("Error updating reminder completion:", error)
      toast({
        title: "Error",
        description: "Failed to update reminder status.",
        variant: "destructive",
      })
    }
  }

  const formatDate = (date: Date) => {
    return format(date, "PPP")
  }

  const getGoalStatusBadge = (goal: Goal) => {
    const deadline = goal.deadline.toDate ? goal.deadline.toDate() : new Date(goal.deadline)

    if (goal.completed) {
      return <Badge className="bg-green-500">Completed</Badge>
    } else if (isBefore(deadline, new Date())) {
      return <Badge variant="destructive">Overdue</Badge>
    } else if (isBefore(deadline, addDays(new Date(), 3))) {
      return <Badge variant="destructive">Due Soon</Badge>
    } else {
      return <Badge variant="outline">In Progress</Badge>
    }
  }

  const getReminderStatusBadge = (reminder: Reminder) => {
    const reminderDate = reminder.date.toDate ? reminder.date.toDate() : new Date(reminder.date)

    if (reminder.completed) {
      return <Badge className="bg-green-500">Completed</Badge>
    } else if (isBefore(reminderDate, new Date())) {
      return <Badge variant="destructive">Missed</Badge>
    } else if (isToday(reminderDate)) {
      return <Badge variant="destructive">Today</Badge>
    } else if (isBefore(reminderDate, addDays(new Date(), 3))) {
      return <Badge variant="destructive">Soon</Badge>
    } else {
      return <Badge variant="outline">Upcoming</Badge>
    }
  }

  const getCategoryLabel = (category: string) => {
    const found = goalCategories.find((cat) => cat.value === category)
    return found ? found.label : category
  }

  // Filter goals
  const filteredGoals = goals.filter((goal) => {
    if (goalFilter === "all") return true
    if (goalFilter === "completed") return goal.completed
    if (goalFilter === "active") return !goal.completed
    if (goalFilter === "overdue") {
      const deadline = goal.deadline.toDate ? goal.deadline.toDate() : new Date(goal.deadline)
      return !goal.completed && isBefore(deadline, new Date())
    }
    return true
  })

  // Filter reminders
  const filteredReminders = reminders.filter((reminder) => {
    if (reminderFilter === "all") return true
    if (reminderFilter === "completed") return reminder.completed
    if (reminderFilter === "upcoming") {
      const reminderDate = reminder.date.toDate ? reminder.date.toDate() : new Date(reminder.date)
      return !reminder.completed && isAfter(reminderDate, new Date())
    }
    if (reminderFilter === "today") {
      const reminderDate = reminder.date.toDate ? reminder.date.toDate() : new Date(reminder.date)
      return isToday(reminderDate)
    }
    if (reminderFilter === "missed") {
      const reminderDate = reminder.date.toDate ? reminder.date.toDate() : new Date(reminder.date)
      return !reminder.completed && isBefore(reminderDate, new Date())
    }
    return true
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Goals & Reminders" text="Set academic goals and reminders to stay on track" />

      <Tabs defaultValue="goals" className="space-y-6">
        <TabsList>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="space-y-6">
          <div className="flex justify-between items-center">
            <Select value={goalFilter} onValueChange={setGoalFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter goals" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Goals</SelectItem>
                <SelectItem value="active">Active Goals</SelectItem>
                <SelectItem value="completed">Completed Goals</SelectItem>
                <SelectItem value="overdue">Overdue Goals</SelectItem>
              </SelectContent>
            </Select>

            <Dialog open={createGoalOpen} onOpenChange={setCreateGoalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Goal
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingGoal ? "Edit Goal" : "Create New Goal"}</DialogTitle>
                  <DialogDescription>
                    {editingGoal ? "Update your goal details" : "Set a new goal to track your progress"}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Goal Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Complete Calculus Course"
                      value={newGoal.title}
                      onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newGoal.category}
                      onValueChange={(value) => setNewGoal({ ...newGoal, category: value })}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {goalCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={newGoal.deadline}
                      onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <Label htmlFor="progress">Progress ({newGoal.progress}%)</Label>
                    </div>
                    <Input
                      id="progress"
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={newGoal.progress}
                      onChange={(e) => setNewGoal({ ...newGoal, progress: Number.parseInt(e.target.value) })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      placeholder="Add details about your goal"
                      value={newGoal.description}
                      onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCreateGoalOpen(false)
                      setEditingGoal(null)
                      setNewGoal({
                        title: "",
                        description: "",
                        category: "academic",
                        deadline: "",
                        progress: 0,
                      })
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={editingGoal ? handleUpdateGoal : handleCreateGoal}>
                    {editingGoal ? "Update Goal" : "Create Goal"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : filteredGoals.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Target className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No goals found</h3>
                <p className="text-muted-foreground text-center mb-4">
                  {goalFilter === "all" ? "You haven't created any goals yet" : `No ${goalFilter} goals found`}
                </p>
                <Button onClick={() => setCreateGoalOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Goal
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredGoals.map((goal) => (
                <Card key={goal.id} className={goal.completed ? "opacity-75" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="flex items-center gap-2">{goal.title}</CardTitle>
                        <CardDescription>Category: {getCategoryLabel(goal.category)}</CardDescription>
                      </div>
                      {getGoalStatusBadge(goal)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      {goal.description && <p className="text-sm text-muted-foreground">{goal.description}</p>}

                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                          Deadline:{" "}
                          {formatDate(goal.deadline.toDate ? goal.deadline.toDate() : new Date(goal.deadline))}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{goal.progress}%</span>
                        </div>
                        <Progress value={goal.progress} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <div className="flex justify-between w-full">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingGoal(goal)
                            setNewGoal({
                              title: goal.title,
                              description: goal.description,
                              category: goal.category,
                              deadline: format(
                                goal.deadline.toDate ? goal.deadline.toDate() : new Date(goal.deadline),
                                "yyyy-MM-dd",
                              ),
                              progress: goal.progress,
                            })
                            setCreateGoalOpen(true)
                          }}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteGoal(goal.id)}>
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                      <Button
                        variant={goal.completed ? "outline" : "default"}
                        size="sm"
                        onClick={() => handleToggleGoalCompletion(goal.id, goal.completed)}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {goal.completed ? "Mark Incomplete" : "Mark Complete"}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="reminders" className="space-y-6">
          <div className="flex justify-between items-center">
            <Select value={reminderFilter} onValueChange={setReminderFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter reminders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reminders</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="missed">Missed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>

            <Dialog open={createReminderOpen} onOpenChange={setCreateReminderOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Reminder
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingReminder ? "Edit Reminder" : "Create New Reminder"}</DialogTitle>
                  <DialogDescription>
                    {editingReminder ? "Update your reminder details" : "Set a new reminder for important events"}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-title">Reminder Title</Label>
                    <Input
                      id="reminder-title"
                      placeholder="e.g., Submit Assignment"
                      value={newReminder.title}
                      onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="reminder-date">Date</Label>
                      <Input
                        id="reminder-date"
                        type="date"
                        value={newReminder.date}
                        onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="reminder-time">Time (Optional)</Label>
                      <Input
                        id="reminder-time"
                        type="time"
                        value={newReminder.time}
                        onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reminder-description">Description (Optional)</Label>
                    <Textarea
                      id="reminder-description"
                      placeholder="Add details about this reminder"
                      value={newReminder.description}
                      onChange={(e) => setNewReminder({ ...newReminder, description: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCreateReminderOpen(false)
                      setEditingReminder(null)
                      setNewReminder({
                        title: "",
                        description: "",
                        date: "",
                        time: "",
                      })
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={editingReminder ? handleUpdateReminder : handleCreateReminder}>
                    {editingReminder ? "Update Reminder" : "Create Reminder"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {loading ? (
            <div className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : filteredReminders.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No reminders found</h3>
                <p className="text-muted-foreground text-center mb-4">
                  {reminderFilter === "all"
                    ? "You haven't created any reminders yet"
                    : `No ${reminderFilter} reminders found`}
                </p>
                <Button onClick={() => setCreateReminderOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Reminder
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredReminders.map((reminder) => (
                <Card key={reminder.id} className={reminder.completed ? "opacity-75" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{reminder.title}</CardTitle>
                      {getReminderStatusBadge(reminder)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      {reminder.description && <p className="text-sm text-muted-foreground">{reminder.description}</p>}

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {formatDate(reminder.date.toDate ? reminder.date.toDate() : new Date(reminder.date))}
                          </span>
                        </div>
                        {reminder.time && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{reminder.time}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <div className="flex justify-between w-full">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingReminder(reminder)
                            setNewReminder({
                              title: reminder.title,
                              description: reminder.description,
                              date: format(
                                reminder.date.toDate ? reminder.date.toDate() : new Date(reminder.date),
                                "yyyy-MM-dd",
                              ),
                              time: reminder.time,
                            })
                            setCreateReminderOpen(true)
                          }}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDeleteReminder(reminder.id)}>
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                      <Button
                        variant={reminder.completed ? "outline" : "default"}
                        size="sm"
                        onClick={() => handleToggleReminderCompletion(reminder.id, reminder.completed)}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {reminder.completed ? "Mark Incomplete" : "Mark Complete"}
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
