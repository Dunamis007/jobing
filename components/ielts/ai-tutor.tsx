"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { firestoreService } from "@/lib/firestore-service"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  MessageSquare,
  Coins,
  Send,
  Loader2,
  Trash2,
  MoreVertical,
  Download,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
  attachments?: {
    type: "image" | "audio" | "document"
    url: string
  }[]
}

interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export function AITutor() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [walletBalance, setWalletBalance] = useState<number>(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize data
  useEffect(() => {
    if (!user) return

    const fetchData = async () => {
      try {
        // Fetch wallet balance
        const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
        const walletDoc = await firestoreService.getDoc(walletDocRef)

        if (walletDoc.exists) {
          setWalletBalance(walletDoc.data().balance || 0)
        }

        // Fetch conversations
        const conversationsCollectionRef = firestoreService.collection("users", user.uid, "conversations")
        const conversationDocs = await firestoreService.getDocs(conversationsCollectionRef)

        if (conversationDocs.docs.length > 0) {
          const conversationsData = conversationDocs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt),
            updatedAt: new Date(doc.data().updatedAt),
            messages: doc.data().messages.map((msg: any) => ({
              ...msg,
              timestamp: new Date(msg.timestamp),
            })),
          })) as Conversation[]

          // Sort by most recent
          conversationsData.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())

          setConversations(conversationsData)
          setActiveConversation(conversationsData[0])
        } else {
          // Create a new conversation if none exists
          createNewConversation()
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        toast({
          title: "Error",
          description: "Failed to load conversations. Please try again.",
          variant: "destructive",
        })
      }
    }

    fetchData()
  }, [user, toast])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [activeConversation?.messages])

  // Create a new conversation
  const createNewConversation = async () => {
    if (!user) return

    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: "New Conversation",
      messages: [
        {
          id: "system-1",
          role: "system",
          content:
            "I am your IELTS AI Tutor. I can help you prepare for all sections of the IELTS exam: Reading, Writing, Listening, and Speaking. How can I assist you today?",
          timestamp: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    try {
      // Save to Firestore
      const conversationsCollectionRef = firestoreService.collection("users", user.uid, "conversations")
      const docRef = await firestoreService.addDoc(conversationsCollectionRef, {
        ...newConversation,
        createdAt: newConversation.createdAt.toISOString(),
        updatedAt: newConversation.updatedAt.toISOString(),
        messages: newConversation.messages.map((msg) => ({
          ...msg,
          timestamp: msg.timestamp.toISOString(),
        })),
      })

      // Update with Firestore ID
      newConversation.id = docRef.id

      setConversations([newConversation, ...conversations])
      setActiveConversation(newConversation)
    } catch (error) {
      console.error("Error creating conversation:", error)
      toast({
        title: "Error",
        description: "Failed to create a new conversation. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Send message
  const sendMessage = async () => {
    if (!input.trim() || !activeConversation || !user) return

    const messageContent = input.trim()
    setInput("")

    // Check if user has enough coins
    const messageCost = 5 // Cost per message
    if (walletBalance < messageCost) {
      toast({
        title: "Insufficient EduCoins",
        description: `You need ${messageCost} EduCoins to send a message. You currently have ${walletBalance} EduCoins.`,
        variant: "destructive",
      })
      return
    }

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    // Update conversation with user message
    const updatedMessages = [...activeConversation.messages, userMessage]
    const updatedConversation = {
      ...activeConversation,
      messages: updatedMessages,
      updatedAt: new Date(),
    }

    setActiveConversation(updatedConversation)
    setIsLoading(true)

    try {
      // Deduct coins from wallet
      const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
      await firestoreService.updateDoc(walletDocRef, {
        balance: walletBalance - messageCost,
        lastUpdated: new Date().toISOString(),
      })

      // Record transaction
      const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
      await firestoreService.addDoc(transactionsCollectionRef, {
        amount: messageCost,
        type: "debit",
        description: "AI Tutor message",
        category: "ai-tutor",
        createdAt: new Date().toISOString(),
      })

      // Update local wallet balance
      setWalletBalance(walletBalance - messageCost)

      // In a real app, this would call OpenAI API
      // For this demo, we'll simulate a response
      setTimeout(async () => {
        const aiResponse = await generateAIResponse(messageContent)

        // Create assistant message
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: aiResponse,
          timestamp: new Date(),
        }

        // Update conversation with assistant message
        const finalMessages = [...updatedMessages, assistantMessage]
        const finalConversation = {
          ...updatedConversation,
          messages: finalMessages,
          updatedAt: new Date(),
        }

        // Update title if this is the first user message
        let finalTitle = finalConversation.title
        if (finalConversation.messages.filter((m) => m.role === "user").length === 1) {
          finalTitle = messageContent.slice(0, 30) + (messageContent.length > 30 ? "..." : "")
          finalConversation.title = finalTitle
        }

        setActiveConversation(finalConversation)

        // Update in Firestore
        const conversationDocRef = firestoreService.doc("users", user.uid, "conversations", activeConversation.id)
        await firestoreService.updateDoc(conversationDocRef, {
          title: finalTitle,
          messages: finalMessages.map((msg) => ({
            ...msg,
            timestamp: msg.timestamp.toISOString(),
          })),
          updatedAt: new Date().toISOString(),
        })

        // Update conversations list
        setConversations((prevConversations) =>
          prevConversations.map((conv) => (conv.id === activeConversation.id ? finalConversation : conv)),
        )

        setIsLoading(false)
      }, 1500)
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  // Generate AI response (mock function)
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // In a real app, this would call OpenAI API
    // For this demo, we'll return predefined responses based on keywords

    const lowerCaseMessage = userMessage.toLowerCase()

    if (lowerCaseMessage.includes("reading") || lowerCaseMessage.includes("read")) {
      return `
Here are some key strategies for the IELTS Reading section:

1. **Skimming and Scanning**: Skim to get the general idea, then scan for specific information.

2. **Time Management**: Allocate about 20 minutes per passage. Don't spend too long on any single question.

3. **Read the Questions First**: This helps you know what information to look for.

4. **Identify Keywords**: Underline key terms in questions to help locate answers in the text.

5. **Watch for Synonyms**: The text rarely uses the exact words from the questions.

6. **Don't Use Prior Knowledge**: Base your answers solely on the passage.

Would you like me to provide practice questions or explain any of these strategies in more detail?
      `
    } else if (lowerCaseMessage.includes("writing") || lowerCaseMessage.includes("write")) {
      return `
For IELTS Writing success, focus on these key areas:

**Task 1 (Academic)**
- Spend 20 minutes on this task
- Write at least 150 words
- Describe the main features and make comparisons where relevant
- Don't give opinions or explanations for data

**Task 2**
- Spend 40 minutes on this task
- Write at least 250 words
- Address all parts of the question
- Structure: introduction, 2-3 body paragraphs, conclusion
- Use a range of vocabulary and grammatical structures

**Common Issues to Avoid**
- Memorized phrases and templates
- Informal language
- Repetitive vocabulary
- Overly complex sentences that lead to errors

Would you like me to review a practice essay or provide sample questions?
      `
    } else if (lowerCaseMessage.includes("listening") || lowerCaseMessage.includes("listen")) {
      return `
To improve your IELTS Listening score:

1. **Familiarize yourself with different accents**: British, American, Australian, etc.

2. **Practice note-taking**: Develop shorthand for common words.

3. **Read instructions carefully**: Understand word limits and question types.

4. **Predict answers**: Use the time before each section to read questions and predict possible answers.

5. **Don't panic if you miss something**: Move on and focus on the next question.

6. **Check spelling and grammar**: Incorrect spelling means a wrong answer.

7. **Listen for signpost words**: "however," "although," "firstly," etc.

Would you like some practice exercises or more specific tips for a particular question type?
      `
    } else if (lowerCaseMessage.includes("speaking") || lowerCaseMessage.includes("speak")) {
      return `
For IELTS Speaking success:

**Part 1: Introduction (4-5 minutes)**
- Give extended answers (not just yes/no)
- Use a variety of vocabulary and structures
- Practice common topics: hometown, family, work/study, hobbies

**Part 2: Long Turn (3-4 minutes)**
- Use your preparation time (1 minute) effectively
- Structure your talk with an introduction, main points, and conclusion
- Include specific examples and personal experiences
- Don't memorize answers

**Part 3: Discussion (4-5 minutes)**
- Develop your answers with explanations and examples
- Express and justify opinions
- Use discourse markers to organize your thoughts

**General Tips:**
- Speak clearly and at a natural pace
- Don't worry about your accent, focus on pronunciation
- Ask for clarification if needed
- Show your personality

Would you like to practice with some sample questions?
      `
    } else if (lowerCaseMessage.includes("score") || lowerCaseMessage.includes("band")) {
      return `
IELTS scores range from 1 to 9, with half bands possible (e.g., 6.5).

**Band Score Descriptions:**
- Band 9: Expert user
- Band 8: Very good user
- Band 7: Good user
- Band 6: Competent user
- Band 5: Modest user
- Band 4: Limited user
- Band 3: Extremely limited user
- Band 2: Intermittent user
- Band 1: Non-user

Your overall score is the average of the four sections (Reading, Writing, Listening, Speaking), rounded to the nearest half or whole band.

**Common Requirements:**
- Universities often require 6.5-7.0 for undergraduate and 7.0-7.5 for postgraduate programs
- Immigration typically requires 5.5-6.0 depending on the country and visa type
- Professional registration may require 7.0-8.0 depending on the field

What score are you aiming for, and for what purpose?
      `
    } else {
      return `
I'm your IELTS AI Tutor, and I'm here to help you prepare for your test. I can assist with all four sections:

- **Reading**: Strategies, practice questions, and time management tips
- **Writing**: Essay structure, sample answers, and feedback on your writing
- **Listening**: Techniques, practice exercises, and note-taking methods
- **Speaking**: Practice questions, evaluation criteria, and fluency development

I can also provide information about:
- Test format and procedures
- Scoring and band requirements
- Study plans and resources
- Common mistakes to avoid

What specific aspect of IELTS would you like help with today?
      `
    }
  }

  // Delete conversation
  const deleteConversation = async (conversationId: string) => {
    if (!user) return

    try {
      // Delete from Firestore
      const conversationDocRef = firestoreService.doc("users", user.uid, "conversations", conversationId)
      await firestoreService.deleteDoc(conversationDocRef)

      // Update local state
      const updatedConversations = conversations.filter((conv) => conv.id !== conversationId)
      setConversations(updatedConversations)

      // If the active conversation was deleted, set a new active conversation
      if (activeConversation?.id === conversationId) {
        if (updatedConversations.length > 0) {
          setActiveConversation(updatedConversations[0])
        } else {
          setActiveConversation(null)
          createNewConversation()
        }
      }

      toast({
        title: "Conversation deleted",
        description: "The conversation has been permanently deleted.",
      })
    } catch (error) {
      console.error("Error deleting conversation:", error)
      toast({
        title: "Error",
        description: "Failed to delete conversation. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Format timestamp
  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Render message content with formatting
  const renderMessageContent = (content: string) => {
    // Split by newlines and render paragraphs
    return content.split("\n").map((line, index) => {
      if (line.trim() === "") return <br key={index} />

      // Check if line is a heading (starts with # or **)
      if (line.startsWith("# ")) {
        return (
          <h3 key={index} className="text-lg font-bold mt-2 mb-1">
            {line.substring(2)}
          </h3>
        )
      } else if (line.startsWith("## ")) {
        return (
          <h4 key={index} className="text-md font-bold mt-2 mb-1">
            {line.substring(3)}
          </h4>
        )
      } else if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold">
            {line.substring(2, line.length - 2)}
          </p>
        )
      } else if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4">
            {line.substring(2)}
          </li>
        )
      } else if (line.match(/^\d+\. /)) {
        const textContent = line.replace(/^\d+\. /, "")
        return (
          <li key={index} className="ml-4">
            {textContent}
          </li>
        )
      } else {
        return (
          <p key={index} className="mb-2">
            {line}
          </p>
        )
      }
    })
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

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[calc(100vh-12rem)]">
      {/* Conversations Sidebar */}
      <Card className="md:col-span-1 overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Conversations</CardTitle>
            <Button size="sm" variant="ghost" onClick={createNewConversation}>
              <MessageSquare className="h-4 w-4 mr-2" />
              New
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="px-4 py-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`p-3 rounded-lg mb-2 cursor-pointer hover:bg-secondary transition-colors ${
                    activeConversation?.id === conversation.id ? "bg-secondary" : ""
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-medium truncate">{conversation.title}</div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation()
                            // Export functionality would go here
                          }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteConversation(conversation.id)
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="text-xs text-muted-foreground flex justify-between mt-1">
                    <span>{conversation.messages.filter((m) => m.role !== "system").length} messages</span>
                    <span>{conversation.updatedAt.toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Chat Area */}
      <Card className="md:col-span-3 flex flex-col h-full">
        <CardHeader className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg">{activeConversation?.title || "New Conversation"}</CardTitle>
              <CardDescription>AI-powered IELTS tutor to help with your exam preparation</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Coins className="h-4 w-4" />
                <span>{walletBalance} EduCoins</span>
              </Badge>
              <Badge variant="outline">5 coins per message</Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-20rem)]">
            <div className="p-4 space-y-4">
              {activeConversation?.messages.map(
                (message, index) =>
                  message.role !== "system" && (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                        }`}
                      >
                        <div className="space-y-1">
                          {message.role === "assistant" ? (
                            <div className="prose prose-sm dark:prose-invert">
                              {renderMessageContent(message.content)}
                            </div>
                          ) : (
                            <p>{message.content}</p>
                          )}
                          <div
                            className={`text-xs ${
                              message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                            } text-right`}
                          >
                            {formatTimestamp(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>

        <div className="p-4 border-t">
          <div className="flex items-end gap-2">
            <Textarea
              placeholder="Ask about IELTS preparation, strategies, or practice questions..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="min-h-[80px]"
              disabled={isLoading}
            />
            <Button onClick={sendMessage} disabled={!input.trim() || isLoading || walletBalance < 5} className="h-10">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            <p>
              Each message costs 5 EduCoins. You currently have {walletBalance} EduCoins.
              {walletBalance < 5 && " You need more coins to continue."}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
