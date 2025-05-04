"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "@/components/auth-provider"
import { firestoreService } from "@/lib/firestore-service"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import {
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  CheckCircle,
  XCircle,
  ArrowRight,
  Volume2,
  Clock,
  Sparkles,
  Trophy,
  Heart,
  Lightbulb,
  Coins,
} from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
}

// Types
interface Question {
  id: string
  type: "multiple-choice" | "fill-blank" | "listening" | "speaking" | "writing"
  skill: "reading" | "listening" | "speaking" | "writing"
  question: string
  options?: string[]
  correctAnswer: string
  explanation: string
  audioUrl?: string
  imageUrl?: string
  difficulty: "easy" | "medium" | "hard"
  points: number
}

interface Lesson {
  id: string
  title: string
  description: string
  skill: "reading" | "listening" | "speaking" | "writing" | "mixed"
  level: "beginner" | "intermediate" | "advanced"
  questions: Question[]
  coinReward: number
  xpReward: number
  timeLimit?: number // in seconds
}

export function DuolingoStyleModule() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [textAnswer, setTextAnswer] = useState<string>("")
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [lessonComplete, setLessonComplete] = useState(false)
  const [hearts, setHearts] = useState(5)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [timerActive, setTimerActive] = useState(false)
  const [loading, setLoading] = useState(true)

  // Mock lessons data (in a real app, this would come from Firestore)
  useEffect(() => {
    const mockLessons: Lesson[] = [
      {
        id: "reading-basics",
        title: "Reading Basics",
        description: "Learn fundamental reading strategies for IELTS",
        skill: "reading",
        level: "beginner",
        coinReward: 50,
        xpReward: 20,
        questions: [
          {
            id: "r1",
            type: "multiple-choice",
            skill: "reading",
            question: "What is the main purpose of skimming in IELTS reading?",
            options: [
              "To understand every detail in the text",
              "To quickly identify the main ideas of a text",
              "To find specific information in a text",
              "To analyze the author's writing style",
            ],
            correctAnswer: "To quickly identify the main ideas of a text",
            explanation:
              "Skimming is a reading technique used to quickly identify the main ideas of a text without reading every word. It's useful for getting an overview before detailed reading.",
            difficulty: "easy",
            points: 10,
          },
          {
            id: "r2",
            type: "multiple-choice",
            skill: "reading",
            question: "Which of the following is NOT a recommended strategy for the IELTS reading section?",
            options: [
              "Reading the questions before the passage",
              "Highlighting key words in the questions",
              "Reading the entire passage word by word first",
              "Managing your time carefully",
            ],
            correctAnswer: "Reading the entire passage word by word first",
            explanation:
              "Reading the entire passage word by word first is time-consuming and not recommended for the IELTS reading section. Instead, you should read the questions first, then skim the passage to locate relevant information.",
            difficulty: "medium",
            points: 15,
          },
          {
            id: "r3",
            type: "fill-blank",
            skill: "reading",
            question: "In IELTS reading, the technique used to find specific information quickly is called _______.",
            correctAnswer: "scanning",
            explanation:
              "Scanning is the technique used to quickly locate specific information in a text without reading every word. It's particularly useful for finding names, dates, numbers, or specific details.",
            difficulty: "easy",
            points: 10,
          },
        ],
      },
      {
        id: "listening-basics",
        title: "Listening Basics",
        description: "Master essential listening skills for IELTS",
        skill: "listening",
        level: "beginner",
        coinReward: 50,
        xpReward: 20,
        questions: [
          {
            id: "l1",
            type: "listening",
            skill: "listening",
            question: "Listen to the recording and answer: What is the speaker's main concern about the project?",
            options: [
              "The timeline is too short",
              "The budget is insufficient",
              "There aren't enough team members",
              "The objectives aren't clear",
            ],
            audioUrl: "/audio/listening-sample-1.mp3", // This would be a real audio file in production
            correctAnswer: "The timeline is too short",
            explanation:
              "The speaker mentions several times that the timeline is unrealistic and that they need more time to complete the project properly.",
            difficulty: "medium",
            points: 15,
          },
        ],
      },
      {
        id: "speaking-basics",
        title: "Speaking Basics",
        description: "Develop confidence in IELTS speaking",
        skill: "speaking",
        level: "beginner",
        coinReward: 50,
        xpReward: 20,
        questions: [
          {
            id: "s1",
            type: "speaking",
            skill: "speaking",
            question:
              "Describe a place you like to visit in your free time. You should say:\n- Where it is\n- What you do there\n- Who you go there with\n- Why you like going there",
            correctAnswer: "", // For speaking, this would be evaluated differently
            explanation:
              "A good response would include details about the location, activities, companions, and reasons for enjoying the place. Use varied vocabulary and speak fluently with good pronunciation.",
            difficulty: "medium",
            points: 20,
          },
        ],
      },
      {
        id: "writing-basics",
        title: "Writing Basics",
        description: "Learn essential writing techniques for IELTS",
        skill: "writing",
        level: "beginner",
        coinReward: 50,
        xpReward: 20,
        questions: [
          {
            id: "w1",
            type: "writing",
            skill: "writing",
            question:
              "Some people believe that universities should focus more on academic subjects, while others think practical skills are more important. Discuss both views and give your opinion.",
            correctAnswer: "", // For writing, this would be evaluated differently
            explanation:
              "A good essay would have a clear introduction stating the topic and your position, body paragraphs discussing both viewpoints with examples, and a conclusion summarizing your opinion. Use varied vocabulary, appropriate grammar, and coherent paragraphs.",
            difficulty: "hard",
            points: 25,
          },
        ],
      },
    ]

    setLessons(mockLessons)
    setLoading(false)
  }, [])

  // Start lesson
  const startLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson)
    setCurrentQuestionIndex(0)
    setSelectedAnswer("")
    setTextAnswer("")
    setIsAnswerCorrect(null)
    setShowExplanation(false)
    setLessonComplete(false)
    setScore(0)
    setHearts(5)

    // Set timer if lesson has a time limit
    if (lesson.timeLimit) {
      setTimeLeft(lesson.timeLimit)
      setTimerActive(true)
    } else {
      setTimeLeft(null)
      setTimerActive(false)
    }
  }

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (timerActive && timeLeft !== null && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      // Time's up
      handleTimeUp()
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [timerActive, timeLeft])

  // Handle time up
  const handleTimeUp = () => {
    setTimerActive(false)
    toast({
      title: "Time's up!",
      description: "You've run out of time for this lesson.",
      variant: "destructive",
    })

    // End the lesson with current score
    endLesson()
  }

  // Check answer
  const checkAnswer = () => {
    if (!currentLesson) return

    const currentQuestion = currentLesson.questions[currentQuestionIndex]
    let isCorrect = false

    switch (currentQuestion.type) {
      case "multiple-choice":
        isCorrect = selectedAnswer === currentQuestion.correctAnswer
        break
      case "fill-blank":
        isCorrect = textAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim()
        break
      case "listening":
        isCorrect = selectedAnswer === currentQuestion.correctAnswer
        break
      case "speaking":
      case "writing":
        // For speaking and writing, we'd need AI evaluation or manual review
        // For this demo, we'll just mark it as "correct" if there's any input
        isCorrect = textAnswer.trim().length > 50
        break
    }

    setIsAnswerCorrect(isCorrect)
    setShowExplanation(true)

    if (isCorrect) {
      setScore(score + currentQuestion.points)
      // Play success sound
      new Audio("/sounds/correct.mp3").play().catch((e) => console.log("Audio play failed:", e))
    } else {
      setHearts(hearts - 1)
      // Play error sound
      new Audio("/sounds/incorrect.mp3").play().catch((e) => console.log("Audio play failed:", e))

      if (hearts - 1 <= 0) {
        // End lesson if no hearts left
        setTimeout(() => {
          toast({
            title: "Lesson failed",
            description: "You've run out of hearts. Try again!",
            variant: "destructive",
          })
          setCurrentLesson(null)
        }, 2000)
        return
      }
    }
  }

  // Next question
  const nextQuestion = () => {
    if (!currentLesson) return

    if (currentQuestionIndex < currentLesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer("")
      setTextAnswer("")
      setIsAnswerCorrect(null)
      setShowExplanation(false)
    } else {
      // Lesson complete
      endLesson()
    }
  }

  // End lesson
  const endLesson = async () => {
    if (!currentLesson || !user) return

    setLessonComplete(true)
    setTimerActive(false)

    // Calculate rewards based on score and hearts
    const totalPossiblePoints = currentLesson.questions.reduce((total, q) => total + q.points, 0)
    const percentageScore = (score / totalPossiblePoints) * 100

    // Adjust coin reward based on performance
    let coinReward = Math.round((percentageScore / 100) * currentLesson.coinReward)

    // Bonus for keeping all hearts
    if (hearts === 5) {
      coinReward += 20
    }

    try {
      // Update user's wallet
      const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
      const walletDoc = await firestoreService.getDoc(walletDocRef)

      if (walletDoc.exists) {
        const currentBalance = walletDoc.data().balance || 0
        await firestoreService.updateDoc(walletDocRef, {
          balance: currentBalance + coinReward,
          totalEarned: (walletDoc.data().totalEarned || 0) + coinReward,
          lastUpdated: new Date().toISOString(),
        })
      }

      // Record transaction
      const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
      await firestoreService.addDoc(transactionsCollectionRef, {
        amount: coinReward,
        type: "credit",
        description: `Completed "${currentLesson.title}" lesson`,
        category: "lesson",
        createdAt: new Date().toISOString(),
      })

      // Record lesson completion
      const progressCollectionRef = firestoreService.collection("users", user.uid, "progress")
      await firestoreService.addDoc(progressCollectionRef, {
        lessonId: currentLesson.id,
        title: currentLesson.title,
        skill: currentLesson.skill,
        score,
        totalPossibleScore: totalPossiblePoints,
        heartsRemaining: hearts,
        coinReward,
        xpReward: currentLesson.xpReward,
        completedAt: new Date().toISOString(),
      })

      toast({
        title: "Lesson completed!",
        description: `You earned ${coinReward} EduCoins and ${currentLesson.xpReward} XP.`,
      })
    } catch (error) {
      console.error("Error updating progress:", error)
      toast({
        title: "Error",
        description: "Failed to save your progress. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Render current question
  const renderCurrentQuestion = () => {
    if (!currentLesson) return null

    const currentQuestion = currentLesson.questions[currentQuestionIndex]

    return (
      <motion.div
        key={currentQuestion.id}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="px-3 py-1">
            {currentQuestion.skill.charAt(0).toUpperCase() + currentQuestion.skill.slice(1)}
          </Badge>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Heart
                key={i}
                className={`h-5 w-5 ${i < hearts ? "text-red-500 fill-red-500" : "text-muted-foreground"}`}
              />
            ))}
          </div>
        </div>

        {timeLeft !== null && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </span>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-lg font-medium">{currentQuestion.question}</h3>

          {currentQuestion.imageUrl && (
            <div className="my-4">
              <img
                src={currentQuestion.imageUrl || "/placeholder.svg"}
                alt="Question visual"
                className="rounded-lg max-h-60 object-contain mx-auto"
              />
            </div>
          )}

          {currentQuestion.audioUrl && (
            <div className="flex items-center gap-2 my-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                <span>Play Audio</span>
              </Button>
              <span className="text-sm text-muted-foreground">Click to listen</span>
            </div>
          )}

          {currentQuestion.type === "multiple-choice" && currentQuestion.options && (
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer transition-colors ${
                    selectedAnswer === option
                      ? isAnswerCorrect === null
                        ? "border-primary bg-primary/5"
                        : isAnswerCorrect
                          ? "border-success bg-success/5"
                          : "border-destructive bg-destructive/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedAnswer(option)}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} className="sr-only" />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                  {selectedAnswer === option &&
                    isAnswerCorrect !== null &&
                    (isAnswerCorrect ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    ))}
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === "fill-blank" && (
            <div className="space-y-2">
              <Input
                placeholder="Type your answer here"
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                disabled={isAnswerCorrect !== null}
                className={isAnswerCorrect === null ? "" : isAnswerCorrect ? "border-success" : "border-destructive"}
              />
              {isAnswerCorrect !== null && (
                <div className={`text-sm ${isAnswerCorrect ? "text-success" : "text-destructive"}`}>
                  {isAnswerCorrect ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>Correct!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <XCircle className="h-4 w-4" />
                      <span>Incorrect. The correct answer is: {currentQuestion.correctAnswer}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {(currentQuestion.type === "speaking" || currentQuestion.type === "writing") && (
            <div className="space-y-2">
              <Textarea
                placeholder={
                  currentQuestion.type === "speaking"
                    ? "Record your answer or type a transcript here"
                    : "Write your answer here"
                }
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                disabled={isAnswerCorrect !== null}
                className="min-h-[150px]"
              />

              {currentQuestion.type === "speaking" && (
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Mic className="h-4 w-4" />
                  <span>Record Answer</span>
                </Button>
              )}
            </div>
          )}
        </div>

        {showExplanation && (
          <div className="bg-secondary p-4 rounded-lg space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Explanation</h4>
            </div>
            <p className="text-sm">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="pt-4">
          {isAnswerCorrect === null ? (
            <Button
              onClick={checkAnswer}
              disabled={
                (currentQuestion.type === "multiple-choice" && !selectedAnswer) ||
                (currentQuestion.type === "fill-blank" && !textAnswer) ||
                ((currentQuestion.type === "speaking" || currentQuestion.type === "writing") && textAnswer.length < 10)
              }
              className="w-full"
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={nextQuestion} className="w-full">
              {currentQuestionIndex < currentLesson.questions.length - 1 ? (
                <>
                  Next Question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Complete Lesson
                  <CheckCircle className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
      </motion.div>
    )
  }

  // Render lesson complete screen
  const renderLessonComplete = () => {
    if (!currentLesson) return null

    const totalPossiblePoints = currentLesson.questions.reduce((total, q) => total + q.points, 0)
    const percentageScore = Math.round((score / totalPossiblePoints) * 100)

    // Calculate rewards
    let coinReward = Math.round((percentageScore / 100) * currentLesson.coinReward)
    if (hearts === 5) coinReward += 20 // Bonus for keeping all hearts

    return (
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-center space-y-6 py-4"
      >
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Trophy className="h-10 w-10 text-primary" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Lesson Complete!</h2>
          <p className="text-muted-foreground">Great job on completing this lesson</p>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="space-y-1 text-center">
            <div className="text-2xl font-bold">{percentageScore}%</div>
            <p className="text-xs text-muted-foreground">Score</p>
          </div>
          <div className="space-y-1 text-center">
            <div className="text-2xl font-bold flex items-center justify-center gap-1">
              {coinReward}
              <Coins className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Coins Earned</p>
          </div>
          <div className="space-y-1 text-center">
            <div className="text-2xl font-bold flex items-center justify-center gap-1">
              {hearts}
              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
            </div>
            <p className="text-xs text-muted-foreground">Hearts Left</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4 pt-2">
          <Button onClick={() => setCurrentLesson(null)} className="w-full">
            Return to Lessons
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              Share Result
            </Button>
            <Button variant="outline" className="flex-1">
              Review Answers
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Render lesson selection
  const renderLessonSelection = () => {
    return (
      <div className="space-y-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="reading" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Reading</span>
            </TabsTrigger>
            <TabsTrigger value="listening" className="flex items-center gap-1">
              <Headphones className="h-4 w-4" />
              <span className="hidden sm:inline">Listening</span>
            </TabsTrigger>
            <TabsTrigger value="speaking" className="flex items-center gap-1">
              <Mic className="h-4 w-4" />
              <span className="hidden sm:inline">Speaking</span>
            </TabsTrigger>
            <TabsTrigger value="writing" className="flex items-center gap-1">
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Writing</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {lessons.map((lesson) => (
              <Card key={lesson.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{lesson.title}</CardTitle>
                      <CardDescription>{lesson.description}</CardDescription>
                    </div>
                    <Badge className="capitalize">{lesson.skill}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Coins className="h-4 w-4 text-primary" />
                        <span>{lesson.coinReward}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>{lesson.xpReward} XP</span>
                      </div>
                    </div>
                    <div className="text-muted-foreground capitalize">{lesson.level}</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => startLesson(lesson)} className="w-full">
                    Start Lesson
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          {["reading", "listening", "speaking", "writing"].map((skill) => (
            <TabsContent key={skill} value={skill} className="space-y-4">
              {lessons
                .filter((lesson) => lesson.skill === skill || lesson.skill === "mixed")
                .map((lesson) => (
                  <Card key={lesson.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{lesson.title}</CardTitle>
                          <CardDescription>{lesson.description}</CardDescription>
                        </div>
                        <Badge className="capitalize">{lesson.skill}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Coins className="h-4 w-4 text-primary" />
                            <span>{lesson.coinReward}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span>{lesson.xpReward} XP</span>
                          </div>
                        </div>
                        <div className="text-muted-foreground capitalize">{lesson.level}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => startLesson(lesson)} className="w-full">
                        Start Lesson
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">IELTS Practice</h2>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Coins className="h-4 w-4" />
          <span>Shop</span>
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {currentLesson ? (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{currentLesson.title}</CardTitle>
                  <CardDescription>
                    Question {currentQuestionIndex + 1} of {currentLesson.questions.length}
                  </CardDescription>
                </div>
                <Progress value={(currentQuestionIndex / currentLesson.questions.length) * 100} className="w-24 h-2" />
              </div>
            </CardHeader>
            <CardContent>{lessonComplete ? renderLessonComplete() : renderCurrentQuestion()}</CardContent>
          </Card>
        ) : (
          renderLessonSelection()
        )}
      </AnimatePresence>
    </div>
  )
}
