"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { enhancedAssignmentsService, type EnhancedAssignment } from "@/lib/firebase-service-enhanced"
import { Loader2, Search, FileText, Calendar, Clock, CheckCircle, Upload, Info } from "lucide-react"
import { format, isAfter, addDays } from "date-fns"

export default function AssignmentsPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [assignments, setAssignments] = useState<EnhancedAssignment[]>([])
  const [selectedSubject, setSelectedSubject] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAssignment, setSelectedAssignment] = useState<EnhancedAssignment | null>(null)
  const [submissionContent, setSubmissionContent] = useState("")
  const [submissionFile, setSubmissionFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (user) {
      loadAssignments()
    }
  }, [user, selectedSubject])

  const loadAssignments = async () => {
    try {
      setLoading(true)

      if (!user) return

      if (selectedSubject === "all") {
        // Load assignments for all subjects
        const subjects = ["Mathematics", "English", "Physics", "Chemistry", "Biology"]
        let allAssignments: EnhancedAssignment[] = []
        let anyGenerated = false

        for (const subject of subjects) {
          const result = await enhancedAssignmentsService.getAssignmentsBySubject(subject, user.uid)
          allAssignments = [...allAssignments, ...result.assignments]
          if (result.isGenerated) anyGenerated = true
        }

        setAssignments(allAssignments)
        setIsGenerated(anyGenerated)
      } else {
        // Load assignments for specific subject
        const result = await enhancedAssignmentsService.getAssignmentsBySubject(selectedSubject, user.uid)
        setAssignments(result.assignments)
        setIsGenerated(result.isGenerated || false)
      }
    } catch (error) {
      console.error("Error loading assignments:", error)
      toast({
        title: "Error",
        description: "Failed to load assignments. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      loadAssignments()
      return
    }

    // Filter assignments based on search query
    const filtered = assignments.filter(
      (assignment) =>
        assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setAssignments(filtered)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSubmissionFile(e.target.files[0])
    }
  }

  const handleSubmitAssignment = async () => {
    if (!user || !selectedAssignment) return

    if (!submissionContent.trim() && !submissionFile) {
      toast({
        title: "Submission Required",
        description: "Please provide either text content or a file for your submission.",
        variant: "destructive",
      })
      return
    }

    try {
      setSubmitting(true)

      await enhancedAssignmentsService.submitAssignmentWithFile(
        selectedAssignment.id,
        user.uid,
        submissionContent,
        submissionFile || undefined,
      )

      toast({
        title: "Assignment Submitted",
        description: "Your assignment has been submitted successfully.",
      })

      // Reset form
      setSubmissionContent("")
      setSubmissionFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      // Close dialog
      setSubmitDialogOpen(false)

      // Reload assignments
      await loadAssignments()
    } catch (error) {
      console.error("Error submitting assignment:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your assignment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A"

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000)
    return format(date, "PPP")
  }

  const getStatusBadge = (assignment: EnhancedAssignment) => {
    const dueDate = assignment.dueDate?.toDate
      ? assignment.dueDate.toDate()
      : new Date(assignment.dueDate.seconds * 1000)
    const now = new Date()

    if (assignment.status === "submitted" || assignment.hasSubmitted) {
      return <Badge className="bg-green-500">Submitted</Badge>
    } else if (isAfter(now, dueDate)) {
      return <Badge variant="destructive">Overdue</Badge>
    } else if (isAfter(now, addDays(dueDate, -2))) {
      return <Badge variant="destructive">Due Soon</Badge>
    } else {
      return <Badge variant="outline">Pending</Badge>
    }
  }

  const getDaysRemaining = (dueDate: any) => {
    const date = dueDate?.toDate ? dueDate.toDate() : new Date(dueDate.seconds * 1000)
    const now = new Date()

    if (isAfter(now, date)) {
      return "Overdue"
    }

    const diffTime = date.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return `${diffDays} day${diffDays !== 1 ? "s" : ""} remaining`
  }

  // Filter assignments based on status
  const categorizedAssignments = {
    pending: assignments.filter((a) => a.status !== "submitted" && !a.hasSubmitted),
    submitted: assignments.filter((a) => a.status === "submitted" || a.hasSubmitted),
    all: assignments,
  }

  // Available subjects
  const subjects = ["all", "Mathematics", "English", "Physics", "Chemistry", "Biology", "Computer Science", "Economics"]

  return (
    <DashboardShell>
      <DashboardHeader heading="Assignments" text="View and submit your assignments" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject === "all" ? "All Subjects" : subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search assignments..."
                className="pl-8 flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button onClick={handleSearch} className="ml-2">
                Search
              </Button>
            </div>
          </div>
        </div>

        {isGenerated && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>AI-Generated Content</AlertTitle>
            <AlertDescription>These are AI-generated assignments for demonstration purposes.</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="pending" className="space-y-4">
          <TabsList>
            <TabsTrigger value="pending">
              Pending
              <Badge variant="secondary" className="ml-2">
                {categorizedAssignments.pending.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="submitted">
              Submitted
              <Badge variant="secondary" className="ml-2">
                {categorizedAssignments.submitted.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="all">
              All
              <Badge variant="secondary" className="ml-2">
                {categorizedAssignments.all.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          {["pending", "submitted", "all"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              {loading ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <Skeleton className="h-5 w-3/4 mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </CardContent>
                      <CardFooter>
                        <Skeleton className="h-9 w-full" />
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : categorizedAssignments[tab as keyof typeof categorizedAssignments].length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No assignments found</h3>
                    <p className="text-muted-foreground text-center">
                      {tab === "pending"
                        ? "You have no pending assignments"
                        : tab === "submitted"
                          ? "You have not submitted any assignments yet"
                          : "No assignments found for the selected criteria"}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categorizedAssignments[tab as keyof typeof categorizedAssignments].map((assignment) => (
                    <Card key={assignment.id} className="flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <CardTitle>{assignment.title}</CardTitle>
                            <CardDescription>{assignment.subject}</CardDescription>
                          </div>
                          {getStatusBadge(assignment)}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Due: {formatDate(assignment.dueDate)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{getDaysRemaining(assignment.dueDate)}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-3">{assignment.description}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        {assignment.status === "submitted" || assignment.hasSubmitted ? (
                          <Button variant="outline" className="w-full" disabled>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Submitted
                          </Button>
                        ) : (
                          <Button
                            className="w-full"
                            onClick={() => {
                              setSelectedAssignment(assignment)
                              setSubmitDialogOpen(true)
                            }}
                          >
                            <Upload className="mr-2 h-4 w-4" />
                            Submit Assignment
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Submit Assignment Dialog */}
      <Dialog open={submitDialogOpen} onOpenChange={setSubmitDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedAssignment && (
            <>
              <DialogHeader>
                <DialogTitle>Submit Assignment: {selectedAssignment.title}</DialogTitle>
                <DialogDescription>
                  Due: {formatDate(selectedAssignment.dueDate)} ({getDaysRemaining(selectedAssignment.dueDate)})
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="p-4 rounded-md bg-muted">
                  <h3 className="font-medium mb-2">Assignment Description:</h3>
                  <p>{selectedAssignment.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="submission">Your Answer</Label>
                    <Textarea
                      id="submission"
                      placeholder="Type your answer here..."
                      value={submissionContent}
                      onChange={(e) => setSubmissionContent(e.target.value)}
                      rows={6}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="file">Attachment (Optional)</Label>
                    <Input id="file" type="file" ref={fileInputRef} onChange={handleFileChange} />
                    {submissionFile && (
                      <p className="text-sm text-muted-foreground">
                        Selected file: {submissionFile.name} ({(submissionFile.size / 1024).toFixed(2)} KB)
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setSubmitDialogOpen(false)} disabled={submitting}>
                  Cancel
                </Button>
                <Button onClick={handleSubmitAssignment} disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Assignment
                    </>
                  )}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}
