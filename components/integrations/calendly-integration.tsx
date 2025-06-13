"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, Users, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface MentorSession {
  id: string
  title: string
  mentor: string
  date: string
  time: string
  duration: string
  spots: number
  category: string
}

export function CalendlyIntegration() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [selectedSession, setSelectedSession] = useState<MentorSession | null>(null)

  const mentorSessions: MentorSession[] = [
    {
      id: "1",
      title: "AI Career Guidance",
      mentor: "Dr. Ade Johnson",
      date: "June 15, 2025",
      time: "10:00 AM",
      duration: "45 min",
      spots: 3,
      category: "career",
    },
    {
      id: "2",
      title: "Neural Network Workshop",
      mentor: "Prof. Sarah Chen",
      date: "June 16, 2025",
      time: "2:00 PM",
      duration: "60 min",
      spots: 5,
      category: "technical",
    },
    {
      id: "3",
      title: "AI Ethics Discussion",
      mentor: "Dr. Michael Osei",
      date: "June 17, 2025",
      time: "11:00 AM",
      duration: "45 min",
      spots: 8,
      category: "ethics",
    },
    {
      id: "4",
      title: "Prompt Engineering Masterclass",
      mentor: "Amina Ibrahim",
      date: "June 18, 2025",
      time: "3:00 PM",
      duration: "90 min",
      spots: 10,
      category: "technical",
    },
  ]

  const handleSessionSelect = (session: MentorSession) => {
    setSelectedSession(session)
    setShowCalendly(true)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            Upcoming AI Mentor Sessions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mentorSessions.map((session) => (
              <div key={session.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{session.title}</h4>
                    <p className="text-sm text-gray-500">with {session.mentor}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      session.category === "technical"
                        ? "border-blue-200 text-blue-600"
                        : session.category === "career"
                          ? "border-green-200 text-green-600"
                          : "border-purple-200 text-purple-600"
                    }
                  >
                    {session.category === "technical"
                      ? "Technical"
                      : session.category === "career"
                        ? "Career"
                        : "Ethics"}
                  </Badge>
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {session.time} ({session.duration})
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{session.spots} spots left</span>
                  </div>
                </div>
                <div className="mt-3">
                  <Button size="sm" onClick={() => handleSessionSelect(session)}>
                    Reserve Spot
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-blue-500" />
              {selectedSession?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="h-[400px] border rounded-md">
            {/* This would be replaced with an actual Calendly embed */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Calendly Integration</h3>
                <p className="text-gray-600 mb-4">
                  In a real implementation, this would be a Calendly embed for scheduling with {selectedSession?.mentor}
                  .
                </p>
                <Button onClick={() => setShowCalendly(false)}>Close Preview</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
