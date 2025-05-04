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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "@/components/ui/use-toast"
import { Search, Users, UserPlus, Send, Plus, FileUp, X, FileText } from "lucide-react"
import { enhancedStudyGroupsService, type EnhancedStudyGroup } from "@/lib/firebase-service-enhanced"
import { format } from "date-fns"

export default function StudyGroupsPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [groups, setGroups] = useState<EnhancedStudyGroup[]>([])
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGroup, setSelectedGroup] = useState<EnhancedStudyGroup | null>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [messageText, setMessageText] = useState("")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [joinDialogOpen, setJoinDialogOpen] = useState(false)
  const [groupCode, setGroupCode] = useState("")
  const [createForm, setCreateForm] = useState({
    name: "",
    subject: "",
    description: "",
  })
  const [creating, setCreating] = useState(false)
  const [joining, setJoining] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messageFiles, setMessageFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Literature",
    "Computer Science",
    "Economics",
    "Business Studies",
    "Accounting",
    "Marketing",
  ]

  useEffect(() => {
    if (user) {
      loadGroups()
    }
  }, [user, selectedSubject])

  useEffect(() => {
    // Scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const loadGroups = async () => {
    try {
      setLoading(true)

      const result = await enhancedStudyGroupsService.getStudyGroups(selectedSubject)
      setGroups(result)
    } catch (error) {
      console.error("Error loading study groups:", error)
      toast({
        title: "Error",
        description: "Failed to load study groups. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSelectGroup = async (group: EnhancedStudyGroup) => {
    setSelectedGroup(group)

    // Subscribe to messages
    const unsubscribe = enhancedStudyGroupsService.getMessages(group.id, (newMessages) => {
      setMessages(newMessages)
    })

    // Return unsubscribe function for cleanup
    return unsubscribe
  }

  const handleCreateGroup = async () => {
    if (!user) return

    try {
      setCreating(true)

      const result = await enhancedStudyGroupsService.createStudyGroupWithCode({
        name: createForm.name,
        subject: createForm.subject,
        description: createForm.description,
        members: [
          {
            uid: user.uid,
            displayName: user.displayName || "Anonymous",
            photoURL: user.photoURL || undefined,
            joinedAt: new Date(),
          },
        ],
        createdBy: user.uid,
      })

      toast({
        title: "Group created",
        description: `Your study group has been created successfully. Group code: ${result.group_code}`,
      })

      // Reload groups
      await loadGroups()

      // Close dialog
      setCreateDialogOpen(false)

      // Reset form
      setCreateForm({
        name: "",
        subject: "",
        description: "",
      })

      // Select the new group
      const newGroup = await enhancedStudyGroupsService.getStudyGroupById(result.id)
      handleSelectGroup(newGroup)
    } catch (error) {
      console.error("Error creating study group:", error)
      toast({
        title: "Creation failed",
        description: "There was an error creating your study group",
        variant: "destructive",
      })
    } finally {
      setCreating(false)
    }
  }

  const handleJoinGroup = async () => {
    if (!user || !groupCode.trim()) return

    try {
      setJoining(true)

      const result = await enhancedStudyGroupsService.joinStudyGroupByCode(groupCode.trim(), {
        uid: user.uid,
        displayName: user.displayName || "Anonymous",
        photoURL: user.photoURL,
      })

      if (result.alreadyMember) {
        toast({
          title: "Already a member",
          description: "You are already a member of this group",
        })
      } else {
        toast({
          title: "Group joined",
          description: "You have successfully joined the study group",
        })
      }

      // Reload groups
      await loadGroups()

      // Close dialog
      setJoinDialogOpen(false)
      setGroupCode("")

      // Select the joined group
      const joinedGroup = await enhancedStudyGroupsService.getStudyGroupById(result.id)
      handleSelectGroup(joinedGroup)
    } catch (error) {
      console.error("Error joining study group:", error)
      toast({
        title: "Join failed",
        description: "There was an error joining the study group. Please check the group code.",
        variant: "destructive",
      })
    } finally {
      setJoining(false)
    }
  }

  const handleLeaveGroup = async (group: EnhancedStudyGroup) => {
    if (!user) return

    try {
      await enhancedStudyGroupsService.leaveStudyGroup(group.id, user.uid)

      toast({
        title: "Group left",
        description: `You have left "${group.name}"`,
      })

      // Reload groups
      await loadGroups()

      // If we left the currently selected group, deselect it
      if (selectedGroup && selectedGroup.id === group.id) {
        setSelectedGroup(null)
        setMessages([])
      }
    } catch (error) {
      console.error("Error leaving study group:", error)
      toast({
        title: "Leave failed",
        description: "There was an error leaving the study group",
        variant: "destructive",
      })
    }
  }

  const handleSendMessage = async () => {
    if (!user || !selectedGroup || (!messageText.trim() && messageFiles.length === 0)) return

    try {
      // In a real implementation, you would upload files to Firebase Storage
      // and get their download URLs
      const attachments = messageFiles.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file), // This is just for demo purposes
      }))

      await enhancedStudyGroupsService.sendMessage({
        groupId: selectedGroup.id,
        userId: user.uid,
        userName: user.displayName || "Anonymous",
        userPhotoURL: user.photoURL || undefined,
        content: messageText,
        attachments: attachments.length > 0 ? attachments : undefined,
      })

      // Clear message input
      setMessageText("")
      setMessageFiles([])
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Message failed",
        description: "There was an error sending your message",
        variant: "destructive",
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setMessageFiles([...messageFiles, ...filesArray])
    }
  }

  const removeFile = (index: number) => {
    setMessageFiles(messageFiles.filter((_, i) => i !== index))
  }

  const formatTime = (timestamp: any) => {
    if (!timestamp) return ""

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000)
    return format(date, "p")
  }

  const isUserInGroup = (group: EnhancedStudyGroup) => {
    return user ? group.members.some((member) => member.uid === user.uid) : false
  }

  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <DashboardShell>
      <DashboardHeader heading="Study Groups" text="Join or create study groups to collaborate with peers">
        <div className="flex gap-2">
          <Dialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <UserPlus className="mr-2 h-4 w-4" />
                Join Group
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
              <DialogHeader>
                <DialogTitle>Join Study Group</DialogTitle>
                <DialogDescription>Enter the group code to join an existing study group.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="groupCode">Group Code</Label>
                  <Input
                    id="groupCode"
                    value={groupCode}
                    onChange={(e) => setGroupCode(e.target.value)}
                    placeholder="Enter 6-character group code"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setJoinDialogOpen(false)} disabled={joining}>
                  Cancel
                </Button>
                <Button onClick={handleJoinGroup} disabled={!groupCode.trim() || joining}>
                  {joining ? "Joining..." : "Join Group"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Group
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Study Group</DialogTitle>
                <DialogDescription>Create a new study group to collaborate with other students.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Group Name</Label>
                  <Input
                    id="name"
                    value={createForm.name}
                    onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
                    placeholder="Enter a name for your group"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={createForm.subject}
                    onValueChange={(value) => setCreateForm({ ...createForm, subject: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={createForm.description}
                    onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
                    placeholder="Briefly describe the purpose of this group"
                    rows={3}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setCreateDialogOpen(false)} disabled={creating}>
                  Cancel
                </Button>
                <Button onClick={handleCreateGroup} disabled={!createForm.name || !createForm.subject || creating}>
                  {creating ? "Creating..." : "Create Group"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </DashboardHeader>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Find Groups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4">
                <Select value={selectedSubject || ""} onValueChange={(value) => setSelectedSubject(value || undefined)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All subjects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All subjects</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search groups..."
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
              <CardTitle>Available Groups</CardTitle>
              <CardDescription>
                {filteredGroups.length} {filteredGroups.length === 1 ? "group" : "groups"} available
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="max-h-[400px] overflow-y-auto">
                {loading ? (
                  <div className="p-4 space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    ))}
                  </div>
                ) : filteredGroups.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">No study groups found</p>
                    <Button variant="outline" className="mt-4" onClick={() => setCreateDialogOpen(true)}>
                      Create a Group
                    </Button>
                  </div>
                ) : (
                  <div className="divide-y">
                    {filteredGroups.map((group) => (
                      <div
                        key={group.id}
                        className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                          selectedGroup?.id === group.id ? "bg-muted" : ""
                        }`}
                        onClick={() => handleSelectGroup(group)}
                      >
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <h3 className="font-medium">{group.name}</h3>
                          <Badge variant="outline">{group.subject}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{group.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Users className="h-3.5 w-3.5" />
                            <span>{group.members.length} members</span>
                          </div>
                          {user &&
                            (isUserInGroup(group) ? (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  handleLeaveGroup(group)
                                }}
                              >
                                Leave
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setJoinDialogOpen(true)
                                }}
                              >
                                <UserPlus className="mr-1 h-3.5 w-3.5" />
                                Join
                              </Button>
                            ))}
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
                <CardTitle>{selectedGroup ? selectedGroup.name : "Group Chat"}</CardTitle>
                {selectedGroup && <Badge variant="outline">{selectedGroup.subject}</Badge>}
              </div>
              <CardDescription>
                {selectedGroup ? `${selectedGroup.members.length} members` : "Select a group to start chatting"}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              {!selectedGroup ? (
                <div className="h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Group Selected</h3>
                    <p className="text-muted-foreground mb-4">
                      Select a group from the list or create a new one to start chatting
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setJoinDialogOpen(true)}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Join Group
                      </Button>
                      <Button onClick={() => setCreateDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Group
                      </Button>
                    </div>
                  </div>
                </div>
              ) : !isUserInGroup(selectedGroup) ? (
                <div className="h-full flex items-center justify-center p-6">
                  <div className="text-center">
                    <UserPlus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Join Group to Chat</h3>
                    <p className="text-muted-foreground mb-4">
                      You need to join this group to participate in the discussion
                    </p>
                    <Button onClick={() => setJoinDialogOpen(true)}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Join Group
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-[500px]">
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">No messages yet. Be the first to send a message!</p>
                        </div>
                      ) : (
                        messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.userId === user?.uid ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`flex gap-3 max-w-[80%] ${message.userId === user?.uid ? "flex-row-reverse" : ""}`}
                            >
                              <Avatar className="h-8 w-8">
                                {message.userPhotoURL ? (
                                  <AvatarImage src={message.userPhotoURL} alt={message.userName} />
                                ) : (
                                  <AvatarFallback>{message.userName.charAt(0)}</AvatarFallback>
                                )}
                              </Avatar>
                              <div className="space-y-1">
                                <div
                                  className={`rounded-lg p-3 ${
                                    message.userId === user?.uid ? "bg-primary text-primary-foreground" : "bg-muted"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-medium">{message.userName}</span>
                                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                                  </div>
                                  <p>{message.content}</p>

                                  {message.attachments && message.attachments.length > 0 && (
                                    <div className="mt-2 space-y-1">
                                      {message.attachments.map((attachment: any, index: number) => (
                                        <div
                                          key={index}
                                          className={`flex items-center gap-2 p-1.5 rounded ${
                                            message.userId === user?.uid
                                              ? "bg-primary-foreground/10"
                                              : "bg-background/80"
                                          }`}
                                        >
                                          <FileText className="h-3.5 w-3.5" />
                                          <span className="text-xs truncate flex-1">{attachment.name}</span>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-6 px-2"
                                            onClick={() => window.open(attachment.url, "_blank")}
                                          >
                                            View
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  )}
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
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="icon" onClick={() => fileInputRef.current?.click()}>
                            <FileUp className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            onClick={handleSendMessage}
                            disabled={!messageText.trim() && messageFiles.length === 0}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                        <Input type="file" multiple className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                      </div>

                      {messageFiles.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {messageFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1 p-1 rounded-md border bg-muted/50 text-xs"
                            >
                              <span className="truncate max-w-[100px]">{file.name}</span>
                              <Button variant="ghost" size="icon" className="h-5 w-5" onClick={() => removeFile(index)}>
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}

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
    </DashboardShell>
  )
}
