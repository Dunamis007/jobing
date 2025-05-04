"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

// Sample events data
const SAMPLE_EVENTS = [
  {
    id: "1",
    title: "Mathematics Study Session",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 15),
    type: "study",
    description: "Group study session for calculus",
  },
  {
    id: "2",
    title: "Physics Assignment Due",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
    type: "assignment",
    description: "Submit mechanics problem set",
  },
  {
    id: "3",
    title: "Mock JAMB Exam",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 25),
    type: "exam",
    description: "Full-length practice exam",
  },
  {
    id: "4",
    title: "Chemistry Lab Report",
    date: new Date(new Date().getFullYear(), new Date().getMonth(), 10),
    type: "assignment",
    description: "Complete lab report for titration experiment",
  },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState(SAMPLE_EVENTS)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "study",
    description: "",
  })

  // Get days in current month view
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  // Navigation functions
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  // Get events for a specific day
  const getEventsForDay = (day: Date) => {
    return events.filter((event) => isSameDay(event.date, day))
  }

  // Handle adding a new event
  const handleAddEvent = () => {
    if (!selectedDate || !newEvent.title) return

    const event = {
      id: Math.random().toString(36).substring(7),
      title: newEvent.title,
      date: selectedDate,
      type: newEvent.type,
      description: newEvent.description,
    }

    setEvents([...events, event])
    setNewEvent({ title: "", type: "study", description: "" })
    setIsAddEventOpen(false)

    toast({
      title: "Event added",
      description: `${event.title} has been added to your calendar.`,
    })
  }

  // Get event type badge color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "study":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "assignment":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "exam":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "meeting":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <DashboardHeader heading="Academic Calendar" text="Manage your schedule and deadlines" />
        <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Create a new event for {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "your calendar"}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  placeholder="Enter event title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Event Type</Label>
                <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value })}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="study">Study Session</SelectItem>
                    <SelectItem value="assignment">Assignment</SelectItem>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Add details about this event"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddEventOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddEvent}>Add Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>
              <div className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                {format(currentDate, "MMMM yyyy")}
              </div>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2 font-medium text-sm">
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {daysInMonth.map((day, i) => {
              const dayEvents = getEventsForDay(day)
              const isCurrentMonth = isSameMonth(day, currentDate)
              const isSelected = selectedDate ? isSameDay(day, selectedDate) : false

              return (
                <div
                  key={i}
                  className={cn(
                    "min-h-[100px] p-2 border rounded-md text-sm",
                    isCurrentMonth ? "bg-background" : "bg-muted/30 text-muted-foreground",
                    isSelected ? "ring-2 ring-primary" : "",
                    isToday(day) ? "font-bold" : "",
                  )}
                  onClick={() => {
                    setSelectedDate(day)
                    if (dayEvents.length === 0) {
                      setIsAddEventOpen(true)
                    }
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className={cn(
                        isToday(day)
                          ? "h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                          : "",
                      )}
                    >
                      {format(day, "d")}
                    </span>
                    {dayEvents.length > 0 && <Badge variant="outline">{dayEvents.length}</Badge>}
                  </div>
                  <div className="mt-2 space-y-1 max-h-[80px] overflow-y-auto">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={cn("text-xs p-1 rounded truncate", getEventTypeColor(event.type))}
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Selected day events */}
      {selectedDate && (
        <Card>
          <CardHeader>
            <CardTitle>Events for {format(selectedDate, "MMMM d, yyyy")}</CardTitle>
            <CardDescription>
              {getEventsForDay(selectedDate).length === 0
                ? "No events scheduled for this day."
                : `${getEventsForDay(selectedDate).length} events scheduled.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getEventsForDay(selectedDate).map((event) => (
                <div key={event.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{event.title}</h3>
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => setIsAddEventOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
