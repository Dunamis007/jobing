"use client"

import { useState, useEffect } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { enhancedPastQuestionsService, type EnhancedPastQuestion } from "@/lib/firebase-service-enhanced"
import { Loader2, Search, BookOpen, FileText, Info } from "lucide-react"

export default function PastQuestionsPage() {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<EnhancedPastQuestion[]>([])
  const [subject, setSubject] = useState("Mathematics")
  const [examType, setExamType] = useState("JAMB")
  const [year, setYear] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState("")
  const [isGenerated, setIsGenerated] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<EnhancedPastQuestion | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const { toast } = useToast()

  // Function to fetch past questions
  const fetchPastQuestions = async () => {
    try {
      setLoading(true)
      setShowAnswer(false)
      setSelectedQuestion(null)

      const yearNum = year ? Number.parseInt(year) : undefined
      const result = await enhancedPastQuestionsService.getPastQuestionsByExamType(subject, examType, yearNum)

      if (result && Array.isArray(result.questions)) {
        setQuestions(result.questions)
        setIsGenerated(result.isGenerated || false)
      } else {
        console.error("Invalid response format:", result)
        setQuestions([])
        toast({
          title: "Error",
          description: "Failed to load past questions. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching past questions:", error)
      setQuestions([])
      toast({
        title: "Error",
        description: "Failed to load past questions. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Fetch questions when subject, examType, or year changes
  useEffect(() => {
    fetchPastQuestions()
  }, [subject, examType, year])

  // Handle search
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      fetchPastQuestions()
      return
    }

    const filtered = questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.explanation && q.explanation.toLowerCase().includes(searchQuery.toLowerCase())),
    )

    setQuestions(filtered)
  }

  // Handle question selection
  const handleSelectQuestion = (question: EnhancedPastQuestion) => {
    setSelectedQuestion(question)
    setShowAnswer(false)
  }

  // Generate years from 1990 to current year
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1989 }, (_, i) => (1990 + i).toString())

  // Available subjects
  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Literature",
    "Government",
    "Economics",
    "Geography",
    "Accounting",
  ]

  // Available exam types
  const examTypes = ["JAMB", "WAEC", "NECO", "Post-UTME"]

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Past Questions"
        text="Practice with previous exam questions to prepare for your exams"
      />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subj) => (
                  <SelectItem key={subj} value={subj}>
                    {subj}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={examType} onValueChange={setExamType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Exam Type" />
              </SelectTrigger>
              <SelectContent>
                {examTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={year} onValueChange={setYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select Year (Optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.reverse().map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-auto"
            />
            <Button onClick={handleSearch} size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isGenerated && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>AI-Generated Content</AlertTitle>
            <AlertDescription>
              These are AI-generated practice questions. Real exam questions coming soon.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="questions">
          <TabsList>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarked</TabsTrigger>
          </TabsList>

          <TabsContent value="questions" className="space-y-4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : questions.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <Card
                      key={question.id}
                      className={`cursor-pointer hover:bg-muted/50 transition-colors ${
                        selectedQuestion?.id === question.id ? "border-primary" : ""
                      }`}
                      onClick={() => handleSelectQuestion(question)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Question {index + 1}
                        </CardTitle>
                        <CardDescription>
                          {subject} - {examType} {year || ""}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3">{question.question}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="lg:sticky lg:top-4 space-y-4">
                  {selectedQuestion ? (
                    <Card>
                      <CardHeader>
                        <CardTitle>Question Details</CardTitle>
                        <CardDescription>
                          {subject} - {examType} {year || ""}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Question:</h3>
                          <p>{selectedQuestion.question}</p>
                        </div>

                        {selectedQuestion.options && (
                          <div className="space-y-2">
                            <h3 className="font-medium">Options:</h3>
                            {selectedQuestion.options.map((option, optIndex) => (
                              <div
                                key={optIndex}
                                className={`flex items-start gap-2 p-2 rounded-md ${
                                  showAnswer && selectedQuestion.answer === String.fromCharCode(65 + optIndex)
                                    ? "bg-green-100 dark:bg-green-900/20"
                                    : ""
                                }`}
                              >
                                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                                  {String.fromCharCode(65 + optIndex)}
                                </div>
                                <p>{option}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {showAnswer && (
                          <div className="space-y-2 border-t pt-4">
                            <h3 className="font-medium">Answer:</h3>
                            <p className="font-semibold">{selectedQuestion.answer}</p>

                            {selectedQuestion.explanation && (
                              <div>
                                <h3 className="font-medium mt-4">Explanation:</h3>
                                <p className="text-muted-foreground">{selectedQuestion.explanation}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <div className="flex gap-2 w-full">
                          <Button
                            variant={showAnswer ? "outline" : "default"}
                            onClick={() => setShowAnswer(!showAnswer)}
                            className="flex-1"
                          >
                            {showAnswer ? "Hide Answer" : "Show Answer"}
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Bookmark
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center h-64">
                        <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-medium">No Question Selected</h3>
                        <p className="text-muted-foreground text-center mt-2">
                          Select a question from the list to view details
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-64">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">No Questions Found</h3>
                  <p className="text-muted-foreground text-center mt-2">
                    Try selecting a different subject, exam type, or year
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="bookmarks">
            <Card>
              <CardContent className="flex flex-col items-center justify-center h-64">
                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium">No Bookmarked Questions</h3>
                <p className="text-muted-foreground text-center mt-2">
                  Bookmark questions to access them quickly later
                </p>
                <Button variant="outline" className="mt-4">
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}
