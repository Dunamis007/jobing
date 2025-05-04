"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Calendar, CheckCircle, Clock, ListTodo, Moon, Sparkles, Sun, Target, Award } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function AcademicWorkflowPage() {
  const [activeTab, setActiveTab] = useState("pre-academic")
  const [dailyGoals, setDailyGoals] = useState([
    { id: 1, text: "Complete calculus practice problems", completed: false },
    { id: 2, text: "Review physics notes for 30 minutes", completed: true },
    { id: 3, text: "Start research for chemistry project", completed: false },
  ])
  const [reflectionText, setReflectionText] = useState("")

  const toggleGoalCompletion = (id: number) => {
    setDailyGoals(dailyGoals.map((goal) => (goal.id === id ? { ...goal, completed: !goal.completed } : goal)))

    toast({
      title: "Goal updated",
      description: "Your daily goal has been updated.",
    })
  }

  const saveReflection = () => {
    if (reflectionText.trim()) {
      toast({
        title: "Reflection saved",
        description: "Your reflection has been saved successfully.",
      })
    }
  }

  const startMindfulnessSession = (duration: number) => {
    toast({
      title: "Mindfulness session started",
      description: `${duration}-minute session has begun. Focus on your breathing.`,
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Academic Workflow</h1>
        <p className="text-muted-foreground">
          Optimize your learning with pre-academic, mid-academic, and post-academic routines
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pre-academic">Pre-Academic</TabsTrigger>
          <TabsTrigger value="mid-academic">Mid-Academic</TabsTrigger>
          <TabsTrigger value="post-academic">Post-Academic</TabsTrigger>
        </TabsList>

        <TabsContent value="pre-academic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Daily Goal Setting</CardTitle>
                <CardDescription>Set clear, achievable goals for your study session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {dailyGoals.map((goal) => (
                    <div key={goal.id} className="flex items-start space-x-2">
                      <Checkbox
                        id={`goal-${goal.id}`}
                        checked={goal.completed}
                        onCheckedChange={() => toggleGoalCompletion(goal.id)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor={`goal-${goal.id}`}
                          className={goal.completed ? "line-through text-muted-foreground" : ""}
                        >
                          {goal.text}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full">
                  <ListTodo className="mr-2 h-4 w-4" />
                  Add New Goal
                </Button>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{Math.round((dailyGoals.filter((g) => g.completed).length / dailyGoals.length) * 100)}%</span>
                  </div>
                  <Progress
                    value={(dailyGoals.filter((g) => g.completed).length / dailyGoals.length) * 100}
                    className="h-2"
                  />
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Memory Optimization</CardTitle>
                <CardDescription>Prepare your mind for effective learning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Mindfulness Preparation</h3>
                    </div>
                    <Badge>Recommended</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Start with a short mindfulness session to clear your mind and improve focus.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" onClick={() => startMindfulnessSession(5)}>
                      5 minutes
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => startMindfulnessSession(10)}>
                      10 minutes
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => startMindfulnessSession(15)}>
                      15 minutes
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Memory Techniques</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Spaced repetition</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Active recall practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm">Mind mapping concepts</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mid-academic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Academic Calendar</CardTitle>
                <CardDescription>Your schedule for today's learning activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Morning Session</h3>
                    </div>
                    <Badge variant="outline">9:00 AM - 12:00 PM</Badge>
                  </div>
                  <div className="pl-7 space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Mathematics</span> - Calculus Practice
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Physics</span> - Review Mechanics
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Afternoon Session</h3>
                    </div>
                    <Badge variant="outline">2:00 PM - 5:00 PM</Badge>
                  </div>
                  <div className="pl-7 space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Chemistry</span> - Lab Preparation
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Programming</span> - Coding Exercise
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Moon className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Evening Session</h3>
                    </div>
                    <Badge variant="outline">7:00 PM - 9:00 PM</Badge>
                  </div>
                  <div className="pl-7 space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">English</span> - Essay Writing
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Review</span> - Daily Summary
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Calendar
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Focus Timer</CardTitle>
                <CardDescription>Track your study sessions with Pomodoro technique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="text-6xl font-bold">25:00</div>
                  <p className="text-sm text-muted-foreground">Study Session</p>
                </div>

                <div className="flex justify-center gap-2">
                  <Button>Start</Button>
                  <Button variant="outline">Reset</Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Session History</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Mathematics</span>
                      </div>
                      <span className="text-sm">25 min</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Physics</span>
                      </div>
                      <span className="text-sm">25 min</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Break</span>
                      </div>
                      <span className="text-sm">5 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="post-academic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Guided Reflection</CardTitle>
                <CardDescription>Reflect on your learning to reinforce knowledge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reflection">What did you learn today?</Label>
                  <Textarea
                    id="reflection"
                    placeholder="Write your reflection here..."
                    className="min-h-[150px]"
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Reflection Prompts</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• What concepts did you understand well?</li>
                    <li>• What areas are still challenging?</li>
                    <li>• How can you apply what you learned?</li>
                    <li>• What questions do you still have?</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={saveReflection} disabled={!reflectionText.trim()}>
                  Save Reflection
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Recap</CardTitle>
                <CardDescription>Review your academic performance for the day</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Study Time</h3>
                    <span className="font-bold">4.5 hours</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground text-right">75% of daily target</p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Subject Performance</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Mathematics</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Physics</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Chemistry</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-1.5" />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">AI Recommendations</h3>
                  </div>
                  <ul className="space-y-1 text-sm pl-7">
                    <li>• Focus more on Physics concepts tomorrow</li>
                    <li>• Review Calculus formulas before next session</li>
                    <li>• Try the advanced Chemistry practice problems</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Award className="mr-2 h-4 w-4" /> {/* Using Award icon instead of Trophy */}
                  View Detailed Analytics
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
