"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Brain, Send, Sparkles } from "lucide-react"

export default function AITutorPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI tutor. How can I help you with your studies today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = { role: "user", content: inputMessage }
    setMessages([...messages, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Let me explain this concept in more detail...",
        "I understand your confusion. Here's a step-by-step approach to solve this problem...",
        "Let's break this down into smaller parts to make it easier to understand...",
        "Here's an example that might help clarify this concept...",
        "You're on the right track! Let me add some additional information that might help...",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      const assistantMessage = { role: "assistant", content: randomResponse }

      setMessages((prevMessages) => [...prevMessages, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Tutor</h1>
        <p className="text-muted-foreground">Get personalized help with your studies</p>
      </div>

      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="study-plans">Study Plans</TabsTrigger>
          <TabsTrigger value="practice">Practice Questions</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="h-[60vh] flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                        <Avatar className="h-8 w-8">
                          {message.role === "user" ? (
                            <>
                              <AvatarFallback>U</AvatarFallback>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            </>
                          ) : (
                            <>
                              <AvatarFallback>AI</AvatarFallback>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            </>
                          )}
                        </Avatar>
                        <div
                          className={`rounded-lg p-3 ${
                            message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-3 max-w-[80%]">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>AI</AvatarFallback>
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        </Avatar>
                        <div className="rounded-lg p-3 bg-muted">
                          <div className="flex space-x-2">
                            <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"></div>
                            <div
                              className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Ask your question..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="min-h-12 flex-1 resize-none"
                    />
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isLoading} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Press Enter to send, Shift+Enter for a new line
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="study-plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Study Plans</CardTitle>
              <CardDescription>AI-generated study plans based on your learning style and goals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">IJMB Mathematics</CardTitle>
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <CardDescription>4-week intensive plan</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm">
                      Focused on calculus, algebra, and statistics with daily practice exercises.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Plan
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Programming Basics</CardTitle>
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <CardDescription>6-week beginner course</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm">Introduction to programming concepts with hands-on projects.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Plan
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <Button className="w-full">
                <Brain className="mr-2 h-4 w-4" />
                Generate New Study Plan
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice Questions</CardTitle>
              <CardDescription>Test your knowledge with AI-generated practice questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="font-medium">Mathematics - Calculus</div>
                    <p>Find the derivative of f(x) = 3x² + 2x - 5</p>
                    <div className="pt-2">
                      <Button variant="outline" size="sm">
                        Show Answer
                      </Button>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="font-medium">Physics - Mechanics</div>
                    <p>A ball is thrown upward with an initial velocity of 20 m/s. How high will it go?</p>
                    <div className="pt-2">
                      <Button variant="outline" size="sm">
                        Show Answer
                      </Button>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="space-y-2">
                    <div className="font-medium">Programming - JavaScript</div>
                    <p>Write a function to check if a string is a palindrome.</p>
                    <div className="pt-2">
                      <Button variant="outline" size="sm">
                        Show Answer
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              <Button className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Generate More Questions
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
