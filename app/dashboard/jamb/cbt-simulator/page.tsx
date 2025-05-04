"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { enhancedPastQuestionsService } from "@/lib/firebase-service-enhanced"
import { Loader2, ChevronLeft, ChevronRight, Clock, AlertCircle, CheckCircle2 } from "lucide-react"

interface Question {
  id: string
  question: string
  options: string[]
  answer: string
  explanation?: string
}

export default function CBTSimulator() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hour in seconds
  const [examMode, setExamMode] = useState<"practice" | "exam">("practice")
  const [examStarted, setExamStarted] = useState(false)
  const [examCompleted, setExamCompleted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [subjects, setSubjects] = useState<string[]>(["English", "Mathematics", "Physics", "Chemistry"])
  const [selectedSubject, setSelectedSubject] = useState("English")

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const result = await enhancedPastQuestionsService.getPastQuestionsByExamType(selectedSubject, "JAMB")
        setQuestions(result.questions.slice(0, 40)) // Limit to 40 questions
        setLoading(false)
      } catch (error) {
        console.error("Error fetching questions:", error)
        // Fallback to sample questions
        setQuestions(getSampleQuestions(selectedSubject))
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [selectedSubject])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (examStarted && !examCompleted && timeLeft > 0 && examMode === "exam") {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && examMode === "exam") {
      setExamCompleted(true)
      setShowResults(true)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [examStarted, examCompleted, timeLeft, examMode])

  const startExam = () => {
    setExamStarted(true)
    setExamCompleted(false)
    setShowResults(false)
    setSelectedAnswers({})
    setCurrentQuestionIndex(0)
    setTimeLeft(examMode === "exam" ? 3600 : 0) // Reset timer to 1 hour for exam mode
  }

  const handleAnswerSelect = (optionIndex: number) => {
    const optionLetter = String.fromCharCode(65 + optionIndex) // Convert 0 to A, 1 to B, etc.
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionLetter,
    })
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (examMode === "exam") {
      setExamCompleted(true)
      setShowResults(true)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const submitExam = () => {
    setExamCompleted(true)
    setShowResults(true)
  }

  const calculateScore = () => {
    let correctAnswers = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++
      }
    })
    return {
      score: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100),
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-sm text-muted-foreground">Loading CBT simulator...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="mb-6 text-2xl font-bold">JAMB CBT Simulator</h1>

      {!examStarted ? (
        <Card>
          <CardHeader>
            <CardTitle>Welcome to the JAMB CBT Simulator</CardTitle>
            <CardDescription>
              Practice for your JAMB examination with our realistic CBT simulator. Choose a mode to begin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="practice" onValueChange={(value) => setExamMode(value as "practice" | "exam")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="practice">Practice Mode</TabsTrigger>
                <TabsTrigger value="exam">Exam Mode</TabsTrigger>
              </TabsList>
              <TabsContent value="practice">
                <div className="mt-4 space-y-2">
                  <p>
                    In Practice Mode, you can take your time answering questions and see explanations for each answer.
                    There is no time limit.
                  </p>
                  <div className="mt-4">
                    <label className="block text-sm font-medium">Select Subject:</label>
                    <select
                      className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="exam">
                <div className="mt-4 space-y-2">
                  <p>
                    In Exam Mode, you will have 1 hour to complete the test, simulating the actual JAMB CBT experience.
                    Results will be shown at the end.
                  </p>
                  <div className="mt-4">
                    <label className="block text-sm font-medium">Select Subject:</label>
                    <select
                      className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button onClick={startExam} className="w-full">
              Start {examMode === "practice" ? "Practice" : "Exam"}
            </Button>
          </CardFooter>
        </Card>
      ) : showResults ? (
        <Card>
          <CardHeader>
            <CardTitle>Exam Results</CardTitle>
            <CardDescription>
              {examMode === "practice"
                ? "Practice session completed. Review your answers below."
                : "Your exam has been submitted. Here are your results."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">{calculateScore().percentage}%</div>
                <p className="text-sm text-muted-foreground">
                  You scored {calculateScore().score} out of {calculateScore().total}
                </p>
              </div>

              <Progress value={calculateScore().percentage} className="h-2 w-full" />

              <div className="mt-8 space-y-6">
                <h3 className="text-lg font-medium">Question Review</h3>
                {questions.map((question, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium">Question {index + 1}</p>
                        <p className="mt-1">{question.question}</p>
                      </div>
                      {selectedAnswers[index] === question.answer ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="mt-2 grid gap-2">
                      {question.options.map((option, optionIndex) => {
                        const optionLetter = String.fromCharCode(65 + optionIndex)
                        const isSelected = selectedAnswers[index] === optionLetter
                        const isCorrect = question.answer === optionLetter

                        return (
                          <div
                            key={optionIndex}
                            className={`rounded-md border p-2 ${
                              isSelected && isCorrect
                                ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                : isSelected && !isCorrect
                                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                  : !isSelected && isCorrect && examMode === "practice"
                                    ? "border-green-500 bg-green-50/50 dark:bg-green-900/10"
                                    : ""
                            }`}
                          >
                            {option}
                          </div>
                        )
                      })}
                    </div>
                    {examMode === "practice" && question.explanation && (
                      <div className="mt-3 rounded-md bg-muted p-3 text-sm">
                        <p className="font-medium">Explanation:</p>
                        <p>{question.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/dashboard/jamb/performance")}>
              View Performance History
            </Button>
            <Button
              onClick={() => {
                setExamStarted(false)
                setExamCompleted(false)
                setShowResults(false)
              }}
            >
              Start New {examMode === "practice" ? "Practice" : "Exam"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>
                  {selectedSubject} - Question {currentQuestionIndex + 1} of {questions.length}
                </CardTitle>
                {examMode === "exam" && (
                  <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={`text-sm font-medium ${timeLeft < 300 ? "text-red-500" : ""}`}>
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                )}
              </div>
              <Progress value={((currentQuestionIndex + 1) / questions.length) * 100} className="h-1" />
            </CardHeader>
            <CardContent>
              {questions.length > 0 && (
                <div className="space-y-6">
                  <div className="text-lg">{questions[currentQuestionIndex]?.question}</div>
                  <div className="space-y-3">
                    {questions[currentQuestionIndex]?.options.map((option, index) => {
                      const optionLetter = String.fromCharCode(65 + index)
                      return (
                        <div
                          key={index}
                          className={`cursor-pointer rounded-md border p-3 transition-colors hover:bg-muted ${
                            selectedAnswers[currentQuestionIndex] === optionLetter ? "border-primary bg-primary/5" : ""
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary text-xs font-medium">
                              {optionLetter}
                            </div>
                            <div>{option}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <div className="flex gap-2">
                {currentQuestionIndex === questions.length - 1 ? (
                  <Button onClick={submitExam}>Submit Exam</Button>
                ) : (
                  <Button onClick={goToNextQuestion}>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-8 gap-2 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-20">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-xs font-medium ${
                  index === currentQuestionIndex
                    ? "bg-primary text-primary-foreground"
                    : selectedAnswers[index]
                      ? "bg-primary/20 text-primary"
                      : "bg-muted"
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Fallback sample questions if API fails
function getSampleQuestions(subject: string): Question[] {
  if (subject === "English") {
    return [
      {
        id: "eng1",
        question: "Choose the option that best completes the gap. The accident occurred _____ midnight.",
        options: ["in", "at", "on", "by"],
        answer: "B",
        explanation: "'At' is used with specific times like midnight, noon, 5 o'clock, etc.",
      },
      {
        id: "eng2",
        question: "Which of the following is a correct sentence?",
        options: [
          "Neither John nor Mary were at the party.",
          "Neither John nor Mary was at the party.",
          "Neither John nor Mary are at the party.",
          "Neither John nor Mary have been at the party.",
        ],
        answer: "B",
        explanation:
          "When 'neither...nor' is used, the verb agrees with the noun closest to it. In this case, 'Mary' is singular, so 'was' is correct.",
      },
      // More sample questions would be added here
    ]
  } else if (subject === "Mathematics") {
    return [
      {
        id: "math1",
        question: "Solve for x: 2x + 5 = 15",
        options: ["x = 5", "x = 10", "x = -5", "x = 0"],
        answer: "A",
        explanation: "2x + 5 = 15\n2x = 15 - 5\n2x = 10\nx = 5",
      },
      {
        id: "math2",
        question: "If f(x) = x² + 3x + 2, find f(2).",
        options: ["12", "10", "8", "16"],
        answer: "A",
        explanation: "f(2) = 2² + 3(2) + 2 = 4 + 6 + 2 = 12",
      },
      // More sample questions would be added here
    ]
  } else if (subject === "Physics") {
    return [
      {
        id: "phys1",
        question: "What is the SI unit of force?",
        options: ["Watt", "Joule", "Newton", "Pascal"],
        answer: "C",
        explanation: "The SI unit of force is the Newton (N).",
      },
      {
        id: "phys2",
        question: "Which of the following is a vector quantity?",
        options: ["Mass", "Temperature", "Velocity", "Energy"],
        answer: "C",
        explanation: "Velocity is a vector quantity because it has both magnitude and direction.",
      },
      // More sample questions would be added here
    ]
  } else if (subject === "Chemistry") {
    return [
      {
        id: "chem1",
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "C",
        explanation: "The chemical symbol for gold is Au, from its Latin name 'Aurum'.",
      },
      {
        id: "chem2",
        question: "Which of the following is a noble gas?",
        options: ["Chlorine", "Oxygen", "Helium", "Hydrogen"],
        answer: "C",
        explanation: "Helium (He) is a noble gas, belonging to group 18 of the periodic table.",
      },
      // More sample questions would be added here
    ]
  } else {
    return [
      {
        id: "gen1",
        question: "Sample question 1 for " + subject,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "A",
        explanation: "This is a sample explanation for question 1.",
      },
      {
        id: "gen2",
        question: "Sample question 2 for " + subject,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "B",
        explanation: "This is a sample explanation for question 2.",
      },
      // More sample questions would be added here
    ]
  }
}
