"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"
import { forumService } from "@/lib/firebase-service-enhanced"
import { Loader2, Search, MessageSquare, Plus, ThumbsUp, MessageCircle, Info } from "lucide-react"
import { format, formatDistanceToNow } from "date-fns"

interface ForumThread {
  id: string
  title: string
  content: string
  authorId: string
  authorName: string
  authorPhotoURL?: string
  category: string
  tags: string[]
  createdAt: any
  updatedAt: any
  replyCount: number
  upvotes: number
  isGenerated?: boolean
}

interface ForumReply {
  id: string
  threadId: string
  content: string
  authorId: string
  authorName: string
  authorPhotoURL?: string
  createdAt: any
  upvotes: number
}

export default function ForumPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [threads, setThreads] = useState<ForumThread[]>([])
  const [selectedThread, setSelectedThread] = useState<ForumThread | null>(null)
  const [replies, setReplies] = useState<ForumReply[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [replyDialogOpen, setReplyDialogOpen] = useState(false)
  const [createForm, setCreateForm] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
  })
  const [replyContent, setReplyContent] = useState("")
  const [creating, setCreating] = useState(false)
  const [replying, setReplying] = useState(false)
  const [loadingReplies, setLoadingReplies] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  useEffect(() => {
    if (user) {
      loadThreads()
    }
  }, [user, selectedCategory])

  const loadThreads = async () => {
    try {
      setLoading(true)

      const result = await forumService.getThreads(selectedCategory === "all" ? undefined : selectedCategory)
      setThreads(result.threads)
      setIsGenerated(result.isGenerated || false)
    } catch (error) {
      console.error("Error loading forum threads:", error)
      toast({
        title: "Error",
        description: "Failed to load forum threads. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      loadThreads()
      return
    }

    // Filter threads based on search query
    const filtered = threads.filter(
      (thread) =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thread.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    setThreads(filtered)
  }

  const handleSelectThread = async (thread: ForumThread) => {
    setSelectedThread(thread)

    try {
      setLoadingReplies(true)

      const result = await forumService.getReplies(thread.id)
      setReplies(result)
    } catch (error) {
      console.error("Error loading replies:", error)
      toast({
        title: "Error",
        description: "Failed to load replies. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoadingReplies(false)
    }
  }

  const handleCreateThread = async () => {
    if (!user) return

    if (!createForm.title.trim() || !createForm.content.trim() || !createForm.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      setCreating(true)

      const tags = createForm.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)

      const threadId = await forumService.createThread({
        title: createForm.title,
        content: createForm.content,
        category: createForm.category,
        tags,
        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        authorPhotoURL: user.photoURL || undefined,
      })

      toast({
        title: "Thread Created",
        description: "Your forum thread has been created successfully.",
      })

      // Reset form
      setCreateForm({
        title: "",
        content: "",
        category: "",
        tags: "",
      })

      // Close dialog
      setCreateDialogOpen(false)

      // Reload threads
      await loadThreads()

      // Select the new thread
      const newThread = await forumService.getThreadById(threadId)
      handleSelectThread(newThread)
    } catch (error) {
      console.error("Error creating thread:", error)
      toast({
        title: "Creation Failed",
        description: "There was an error creating your thread. Please try again.",
        variant: "destructive",
      })
    } finally {
      setCreating(false)
    }
  }

  const handleReply = async () => {
    if (!user || !selectedThread || !replyContent.trim()) return

    try {
      setReplying(true)

      const replyId = await forumService.createReply({
        threadId: selectedThread.id,
        content: replyContent,
        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        authorPhotoURL: user.photoURL || undefined,
      })

      toast({
        title: "Reply Posted",
        description: "Your reply has been posted successfully.",
      })

      // Reset form
      setReplyContent("")

      // Close dialog
      setReplyDialogOpen(false)

      // Reload replies
      const updatedReplies = await forumService.getReplies(selectedThread.id)
      setReplies(updatedReplies)

      // Update thread in the list
      setThreads(
        threads.map((thread) =>
          thread.id === selectedThread.id ? { ...thread, replyCount: thread.replyCount + 1 } : thread,
        ),
      )

      // Update selected thread
      setSelectedThread({
        ...selectedThread,
        replyCount: selectedThread.replyCount + 1,
      })
    } catch (error) {
      console.error("Error posting reply:", error)
      toast({
        title: "Reply Failed",
        description: "There was an error posting your reply. Please try again.",
        variant: "destructive",
      })
    } finally {
      setReplying(false)
    }
  }

  const handleUpvoteThread = async (threadId: string) => {
    if (!user) return

    try {
      await forumService.upvoteThread(threadId, user.uid)

      // Update thread in the list
      setThreads(
        threads.map((thread) => (thread.id === threadId ? { ...thread, upvotes: thread.upvotes + 1 } : thread)),
      )

      // Update selected thread if it's the one being upvoted
      if (selectedThread && selectedThread.id === threadId) {
        setSelectedThread({
          ...selectedThread,
          upvotes: selectedThread.upvotes + 1,
        })
      }
    } catch (error) {
      console.error("Error upvoting thread:", error)
      toast({
        title: "Upvote Failed",
        description: "There was an error upvoting the thread. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpvoteReply = async (replyId: string) => {
    if (!user) return

    try {
      await forumService.upvoteReply(replyId, user.uid)

      // Update reply in the list
      setReplies(replies.map((reply) => (reply.id === replyId ? { ...reply, upvotes: reply.upvotes + 1 } : reply)))
    } catch (error) {
      console.error("Error upvoting reply:", error)
      toast({
        title: "Upvote Failed",
        description: "There was an error upvoting the reply. Please try again.",
        variant: "destructive",
      })
    }
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return ""

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000)
    return format(date, "PPP")
  }

  const formatRelativeTime = (timestamp: any) => {
    if (!timestamp) return ""

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000)
    return formatDistanceToNow(date, { addSuffix: true })
  }

  // Filter threads based on search query
  const filteredThreads = threads.filter(
    (thread) =>
      thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Available categories
  const categories = [
    "all",
    "JAMB Preparation",
    "University Admission",
    "Study Tips",
    "Career Advice",
    "Scholarship Help",
    "Technical Questions",
    "General Discussion",
  ]

  return (
    <DashboardShell>
      <DashboardHeader heading="Community Forum" text="Discuss and share knowledge with other students">
        <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Thread
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Thread</DialogTitle>
              <DialogDescription>Start a new discussion in the community forum</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={createForm.title}
                  onChange={(e) => setCreateForm({ ...createForm, title: e.target.value })}
                  placeholder="Enter a descriptive title for your thread"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={createForm.category}
                  onValueChange={(value) => setCreateForm({ ...createForm, category: value })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={createForm.content}
                  onChange={(e) => setCreateForm({ ...createForm, content: e.target.value })}
                  placeholder="Describe your question or topic in detail"
                  rows={6}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={createForm.tags}
                  onChange={(e) => setCreateForm({ ...createForm, tags: e.target.value })}
                  placeholder="e.g., mathematics, calculus, homework"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setCreateDialogOpen(false)} disabled={creating}>
                Cancel
              </Button>
              <Button onClick={handleCreateThread} disabled={creating}>
                {creating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Thread"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DashboardHeader>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search threads..."
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
            <AlertDescription>These are AI-generated forum threads for demonstration purposes.</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Forum Threads</CardTitle>
                <CardDescription>
                  {filteredThreads.length} {filteredThreads.length === 1 ? "thread" : "threads"} found
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-[600px] overflow-y-auto">
                  {loading ? (
                    <div className="p-4 space-y-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                          <Skeleton className="h-5 w-3/4" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      ))}
                    </div>
                  ) : filteredThreads.length === 0 ? (
                    <div className="p-6 text-center">
                      <p className="text-muted-foreground">No threads found</p>
                      <Button variant="outline" className="mt-4" onClick={() => setCreateDialogOpen(true)}>
                        Create a Thread
                      </Button>
                    </div>
                  ) : (
                    <div className="divide-y">
                      {filteredThreads.map((thread) => (
                        <div
                          key={thread.id}
                          className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                            selectedThread?.id === thread.id ? "bg-muted" : ""
                          }`}
                          onClick={() => handleSelectThread(thread)}
                        >
                          <div className="space-y-2">
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-medium">{thread.title}</h3>
                              <Badge variant="outline">{thread.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">{thread.content}</p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <MessageCircle className="h-3.5 w-3.5" />
                                  <span>{thread.replyCount}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <ThumbsUp className="h-3.5 w-3.5" />
                                  <span>{thread.upvotes}</span>
                                </div>
                              </div>
                              <span>{formatRelativeTime(thread.createdAt)}</span>
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
            {selectedThread ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <CardTitle>{selectedThread.title}</CardTitle>
                        <CardDescription>
                          Posted by {selectedThread.authorName} • {formatRelativeTime(selectedThread.createdAt)}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{selectedThread.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={selectedThread.authorPhotoURL} />
                          <AvatarFallback>{selectedThread.authorName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-medium">{selectedThread.authorName}</span>
                              <span className="text-xs text-muted-foreground ml-2">
                                {formatDate(selectedThread.createdAt)}
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1"
                              onClick={() => handleUpvoteThread(selectedThread.id)}
                            >
                              <ThumbsUp className="h-4 w-4" />
                              <span>{selectedThread.upvotes}</span>
                            </Button>
                          </div>
                          <p className="text-sm">{selectedThread.content}</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {selectedThread.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button onClick={() => setReplyDialogOpen(true)}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Reply
                    </Button>
                  </CardFooter>
                </Card>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Replies ({selectedThread.replyCount})</h3>
                  </div>

                  {loadingReplies ? (
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <Skeleton className="h-10 w-10 rounded-full" />
                              <div className="space-y-2 flex-1">
                                <div className="flex items-center justify-between">
                                  <Skeleton className="h-4 w-32" />
                                  <Skeleton className="h-4 w-16" />
                                </div>
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : replies.length === 0 ? (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-12">
                        <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">No Replies Yet</h3>
                        <p className="text-muted-foreground text-center mb-4">Be the first to reply to this thread</p>
                        <Button onClick={() => setReplyDialogOpen(true)}>
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Reply
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="space-y-4">
                      {replies.map((reply) => (
                        <Card key={reply.id}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={reply.authorPhotoURL} />
                                <AvatarFallback>{reply.authorName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="space-y-2 flex-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="font-medium">{reply.authorName}</span>
                                    <span className="text-xs text-muted-foreground ml-2">
                                      {formatRelativeTime(reply.createdAt)}
                                    </span>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-1"
                                    onClick={() => handleUpvoteReply(reply.id)}
                                  >
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{reply.upvotes}</span>
                                  </Button>
                                </div>
                                <p className="text-sm">{reply.content}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-[600px]">
                  <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Select a Thread</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-6">
                    Choose a thread from the list to view its content and replies, or create a new thread to start a
                    discussion.
                  </p>
                  <Button onClick={() => setCreateDialogOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Thread
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Reply Dialog */}
      <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Reply to Thread</DialogTitle>
            <DialogDescription>Post your reply to "{selectedThread?.title}"</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="reply">Your Reply</Label>
              <Textarea
                id="reply"
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Type your reply here..."
                rows={6}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setReplyDialogOpen(false)} disabled={replying}>
              Cancel
            </Button>
            <Button onClick={handleReply} disabled={!replyContent.trim() || replying}>
              {replying ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Posting...
                </>
              ) : (
                "Post Reply"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardShell>
  )
}
