"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { mentorService, type Mentor } from "@/lib/firebase-service-enhanced"
import { Loader2, Send, Search, MessageSquare, Info } from "lucide-react"
import { format } from "date-fns"

interface ChatMessage {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: any
  isRead: boolean
}

export default function MentorChatPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [mentors, setMentors] = useState<Mentor[]>([])
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [messageText, setMessageText] = useState("")
  const [sending, setSending] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all")
  const [isGenerated, setIsGenerated] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (user) {
      loadMentors()
    }
  }, [user, selectedSpecialty])

  useEffect(() => {
    // Scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const loadMentors = async () => {
    try {
      setLoading(true)

      if (selectedSpecialty === "all") {
        const result = await mentorService.getMentors()
        setMentors(result.mentors)
        setIsGenerated(result.isGenerated || false)
      } else {
        const result = await mentorService.getMentorsBySpecialty(selectedSpecialty)
        setMentors(result.mentors)
        setIsGenerated(result.isGenerated || false)
      }
    } catch (error) {
      console.error("Error loading mentors:", error)
      toast({
        title: "Error",
        description: "Failed to load mentors. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSelectMentor = async (mentor: Mentor) => {
    setSelectedMentor(mentor)

    try {
      // In a real implementation, this would load messages from Firestore
      // For now, we'll simulate some messages
      const simulatedMessages: ChatMessage[] = [
        {
          id: "1",
          senderId: user?.uid || "",
          receiverId: mentor.id,
          content: "Hello, I need help with a problem in " + mentor.specialty,
          timestamp: { toDate: () => new Date(Date.now() - 3600000) },
          isRead: true,
        },
        {
          id: "2",
          senderId: mentor.id,
          receiverId: user?.uid || "",
          content: `Hi there! I'm ${mentor.name}, and I'd be happy to help you with ${mentor.specialty}. What specific problem are you facing?`,
          timestamp: { toDate: () => new Date(Date.now() - 3500000) },
          isRead: true,
        },
      ]

      setMessages(simulatedMessages)
    } catch (error) {
      console.error("Error loading messages:", error)
      toast({
        title: "Error",
        description: "Failed to load messages. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleSendMessage = async () => {
    if (!user || !selectedMentor || !messageText.trim()) return

    try {
      setSending(true)

      // In a real implementation, this would send a message to Firestore
      // For now, we'll simulate sending a message
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        senderId: user.uid,
        receiverId: selectedMentor.id,
        content: messageText,
        timestamp: { toDate: () => new Date() },
        isRead: false,
      }

      setMessages([...messages, newMessage])
      setMessageText("")

      // Simulate mentor response after a delay
      setTimeout(() => {
        const mentorResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          senderId: selectedMentor.id,
          receiverId: user.uid,
          content: `Thank you for your message. As a mentor specializing in ${selectedMentor.specialty}, I'll do my best to help you. Could you provide more details about your question?`,
          timestamp: { toDate: () => new Date() },
          isRead: false,
        }

        setMessages((prev) => [...prev, mentorResponse])
      }, 2000)
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (timestamp: any) => {
    if (!timestamp) return ""

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000)
    return format(date, "p")
  }

  // Filter mentors based on search query
  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Available specialties
  const specialties = [
    "all",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Computer Science",
    "Economics",
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Academic Mentor Chat" text="Connect with mentors for academic guidance and support" />

      <div className="space-y-6">
        {isGenerated && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>AI-Generated Mentors</AlertTitle>
            <AlertDescription>These are AI-generated mentor profiles for demonstration purposes.</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Find Mentors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-4">
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty} value={specialty}>
                          {specialty === "all" ? "All Specialties" : specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search mentors..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Mentors</CardTitle>
                <CardDescription>
                  {filteredMentors.length} {filteredMentors.length === 1 ? "mentor" : "mentors"} available
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[400px] overflow-y-auto">
                  {loading ? (
                    <div className="p-4 space-y-3">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-24" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : filteredMentors.length === 0 ? (
                    <div className="p-6 text-center">
                      <p className="text-muted-foreground">No mentors found</p>
                    </div>
                  ) : (
                    <div className="divide-y">
                      {filteredMentors.map((mentor) => (
                        <div
                          key={mentor.id}
                          className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedMentor?.id === mentor.id ? "bg-muted" : ""
                          }`}
                          onClick={() => handleSelectMentor(mentor)}
                        >
                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={mentor.photoURL} />
                              <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-medium">{mentor.name}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {mentor.specialty}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{mentor.bio}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{selectedMentor ? selectedMentor.name : "Select a Mentor"}</CardTitle>
                    {selectedMentor && <CardDescription>{selectedMentor.specialty} Specialist</CardDescription>}
                  </div>
                  {selectedMentor && (
                    <Badge variant="outline">
                      {selectedMentor.availability?.includes(format(new Date(), "EEEE"))
                        ? "Available Today"
                        : "Not Available Today"}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                {!selectedMentor ? (
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="text-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Mentor Selected</h3>
                      <p className="text-muted-foreground mb-4">
                        Select a mentor from the list to start a conversation
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-[500px]">
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {messages.length === 0 ? (
                          <div className="text-center py-8">
                            <p className="text-muted-foreground">No messages yet. Start the conversation!</p>
                          </div>
                        ) : (
                          messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.senderId === user?.uid ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`flex gap-3 max-w-[80%] ${message.senderId === user?.uid ? "flex-row-reverse" : ""}`}
                              >
                                <Avatar className="h-8 w-8">
                                  {message.senderId === selectedMentor.id ? (
                                    <>
                                      <AvatarImage src={selectedMentor.photoURL} />
                                      <AvatarFallback>{selectedMentor.name.charAt(0)}</AvatarFallback>
                                    </>
                                  ) : (
                                    <>
                                      <AvatarImage src={user?.photoURL || undefined} />
                                      <AvatarFallback>{user?.displayName?.charAt(0) || "U"}</AvatarFallback>
                                    </>
                                  )}
                                </Avatar>
                                <div className="space-y-1">
                                  <div
                                    className={`rounded-lg p-3 ${
                                      message.senderId === user?.uid ? "bg-primary text-primary-foreground" : "bg-muted"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-xs font-medium">
                                        {message.senderId === user?.uid ? "You" : selectedMentor.name}
                                      </span>
                                      <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                                    </div>
                                    <p>{message.content}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>
                    <div className="border-t p-4">
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Textarea
                            placeholder="Type your message..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="min-h-12 flex-1 resize-none"
                          />
                          <Button size="icon" onClick={handleSendMessage} disabled={!messageText.trim() || sending}>
                            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Press Enter to send, Shift+Enter for a new line
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
