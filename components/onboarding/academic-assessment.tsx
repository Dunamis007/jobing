"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodiac } from "@/lib/zodiac-utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "@/components/auth-provider"
import { BookOpen, GraduationCap, Brain, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

const academicLevels = [
  { id: "primary", label: "Primary School" },
  { id: "jss", label: "Junior Secondary School (JSS)" },
  { id: "sss", label: "Senior Secondary School (SSS)" },
  { id: "jamb", label: "JAMB Candidate" },
  { id: "ijmb", label: "IJMB Student" },
  { id: "jupeb", label: "JUPEB Student" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "graduate", label: "Graduate" },
  { id: "professional", label: "Professional" },
]

const learningStyles = [
  {
    id: "visual",
    label: "Visual Learner",
    description: "You learn best through images, diagrams, and spatial understanding",
  },
  {
    id: "auditory",
    label: "Auditory Learner",
    description: "You learn best through listening and verbal communication",
  },
  { id: "reading", label: "Reading/Writing Learner", description: "You learn best through text-based information" },
  {
    id: "kinesthetic",
    label: "Kinesthetic Learner",
    description: "You learn best through hands-on activities and experiences",
  },
]

const months = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
]

export function AcademicAssessment() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [academicLevel, setAcademicLevel] = useState("")
  const [learningStyle, setLearningStyle] = useState("")
  const [birthMonth, setBirthMonth] = useState("")
  const [birthDay, setBirthDay] = useState("")
  const [loading, setLoading] = useState(false)
  const [zodiacSign, setZodiacSign] = useState("")
  const [zodiacTraits, setZodiacTraits] = useState<string[]>([])
  const [recommendedCourses, setRecommendedCourses] = useState<any[]>([])

  const handleNextStep = () => {
    if (step === 1 && !academicLevel) {
      toast({
        title: "Please select your academic level",
        variant: "destructive",
      })
      return
    }

    if (step === 2 && !learningStyle) {
      toast({
        title: "Please select your learning style",
        variant: "destructive",
      })
      return
    }

    if (step === 3 && (!birthMonth || !birthDay)) {
      toast({
        title: "Please enter your birth date",
        variant: "destructive",
      })
      return
    }

    if (step === 3) {
      // Calculate zodiac sign and traits
      const month = Number.parseInt(birthMonth)
      const day = Number.parseInt(birthDay)
      const sign = zodiac.getZodiacSign(month, day)
      const traits = zodiac.getZodiacTraits(sign)

      setZodiacSign(sign)
      setZodiacTraits(traits)

      // Generate recommended courses based on zodiac and learning style
      const courses = generateRecommendedCourses(academicLevel, learningStyle, sign)
      setRecommendedCourses(courses)
    }

    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
  }

  const generateRecommendedCourses = (level: string, style: string, sign: string) => {
    // This would ideally be a more sophisticated algorithm
    // For now, we'll use a simple mapping based on academic level and zodiac sign

    const baseCoursesMap: Record<string, any[]> = {
      primary: [
        { id: 1, title: "Basic Mathematics", category: "Mathematics", level: "Beginner" },
        { id: 2, title: "English Language Fundamentals", category: "English", level: "Beginner" },
        { id: 3, title: "Introduction to Science", category: "Science", level: "Beginner" },
      ],
      jss: [
        { id: 4, title: "Junior Mathematics", category: "Mathematics", level: "Intermediate" },
        { id: 5, title: "Basic English Grammar", category: "English", level: "Intermediate" },
        { id: 6, title: "Integrated Science", category: "Science", level: "Intermediate" },
      ],
      sss: [
        { id: 7, title: "Advanced Mathematics", category: "Mathematics", level: "Advanced" },
        { id: 8, title: "English Literature", category: "English", level: "Advanced" },
        { id: 9, title: "Physics for SSCE", category: "Science", level: "Advanced" },
      ],
      jamb: [
        { id: 10, title: "JAMB Mathematics", category: "Mathematics", level: "JAMB" },
        { id: 11, title: "JAMB English", category: "English", level: "JAMB" },
        { id: 12, title: "JAMB Physics", category: "Science", level: "JAMB" },
      ],
      ijmb: [
        { id: 13, title: "IJMB Mathematics", category: "Mathematics", level: "IJMB" },
        { id: 14, title: "IJMB English", category: "English", level: "IJMB" },
        { id: 15, title: "IJMB Physics", category: "Science", level: "IJMB" },
      ],
      jupeb: [
        { id: 16, title: "JUPEB Mathematics", category: "Mathematics", level: "JUPEB" },
        { id: 17, title: "JUPEB English", category: "English", level: "JUPEB" },
        { id: 18, title: "JUPEB Physics", category: "Science", level: "JUPEB" },
      ],
      undergraduate: [
        { id: 19, title: "Calculus I", category: "Mathematics", level: "Undergraduate" },
        { id: 20, title: "Academic Writing", category: "English", level: "Undergraduate" },
        { id: 21, title: "General Physics", category: "Science", level: "Undergraduate" },
      ],
      graduate: [
        { id: 22, title: "Advanced Statistics", category: "Mathematics", level: "Graduate" },
        { id: 23, title: "Research Methodology", category: "Research", level: "Graduate" },
        { id: 24, title: "Data Analysis", category: "Science", level: "Graduate" },
      ],
      professional: [
        { id: 25, title: "Business Mathematics", category: "Mathematics", level: "Professional" },
        { id: 26, title: "Professional Communication", category: "English", level: "Professional" },
        { id: 27, title: "Technical Writing", category: "English", level: "Professional" },
      ],
    }

    // Zodiac-based course recommendations
    const zodiacCoursesMap: Record<string, any[]> = {
      Aries: [
        { id: 101, title: "Leadership Skills", category: "Personal Development", level: "All Levels" },
        { id: 102, title: "Entrepreneurship Basics", category: "Business", level: "All Levels" },
      ],
      Taurus: [
        { id: 103, title: "Financial Planning", category: "Finance", level: "All Levels" },
        { id: 104, title: "Art Appreciation", category: "Arts", level: "All Levels" },
      ],
      Gemini: [
        { id: 105, title: "Effective Communication", category: "Communication", level: "All Levels" },
        { id: 106, title: "Creative Writing", category: "English", level: "All Levels" },
      ],
      Cancer: [
        { id: 107, title: "Emotional Intelligence", category: "Personal Development", level: "All Levels" },
        { id: 108, title: "Home Economics", category: "Life Skills", level: "All Levels" },
      ],
      Leo: [
        { id: 109, title: "Public Speaking", category: "Communication", level: "All Levels" },
        { id: 110, title: "Drama and Theatre", category: "Arts", level: "All Levels" },
      ],
      Virgo: [
        { id: 111, title: "Critical Thinking", category: "Logic", level: "All Levels" },
        { id: 112, title: "Data Organization", category: "Computer Science", level: "All Levels" },
      ],
      Libra: [
        { id: 113, title: "Conflict Resolution", category: "Social Skills", level: "All Levels" },
        { id: 114, title: "Ethics and Philosophy", category: "Humanities", level: "All Levels" },
      ],
      Scorpio: [
        { id: 115, title: "Psychology Fundamentals", category: "Social Science", level: "All Levels" },
        { id: 116, title: "Research Methods", category: "Research", level: "All Levels" },
      ],
      Sagittarius: [
        { id: 117, title: "World Cultures", category: "Social Studies", level: "All Levels" },
        { id: 118, title: "Adventure Sports", category: "Physical Education", level: "All Levels" },
      ],
      Capricorn: [
        { id: 119, title: "Business Management", category: "Business", level: "All Levels" },
        { id: 120, title: "Career Planning", category: "Professional Development", level: "All Levels" },
      ],
      Aquarius: [
        { id: 121, title: "Innovation and Technology", category: "Technology", level: "All Levels" },
        { id: 122, title: "Social Activism", category: "Civic Education", level: "All Levels" },
      ],
      Pisces: [
        { id: 123, title: "Creative Arts", category: "Arts", level: "All Levels" },
        { id: 124, title: "Music Appreciation", category: "Arts", level: "All Levels" },
      ],
    }

    // Learning style-based course recommendations
    const styleCoursesMap: Record<string, any[]> = {
      visual: [
        { id: 201, title: "Visual Learning Strategies", category: "Study Skills", level: "All Levels" },
        { id: 202, title: "Graphic Design Basics", category: "Design", level: "All Levels" },
      ],
      auditory: [
        { id: 203, title: "Effective Listening", category: "Study Skills", level: "All Levels" },
        { id: 204, title: "Music Theory", category: "Arts", level: "All Levels" },
      ],
      reading: [
        { id: 205, title: "Speed Reading", category: "Study Skills", level: "All Levels" },
        { id: 206, title: "Academic Writing", category: "English", level: "All Levels" },
      ],
      kinesthetic: [
        { id: 207, title: "Hands-on Learning Strategies", category: "Study Skills", level: "All Levels" },
        { id: 208, title: "Physical Education", category: "Health", level: "All Levels" },
      ],
    }

    // Combine recommendations
    const baseCourses = baseCoursesMap[level] || baseCoursesMap["jamb"] // Default to JAMB if level not found
    const zodiacCourses = zodiacCoursesMap[sign] || []
    const styleCourses = styleCoursesMap[style] || []

    return [...baseCourses, ...zodiacCourses, ...styleCourses]
  }

  const handleComplete = async () => {
    if (!user) {
      toast({
        title: "Please log in to save your preferences",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)

      // Save user preferences to Firestore
      await setDoc(doc(db, "users", user.uid, "preferences", "learning"), {
        academicLevel,
        learningStyle,
        zodiacSign,
        birthMonth,
        birthDay,
        updatedAt: serverTimestamp(),
      })

      // Save recommended courses
      await setDoc(doc(db, "users", user.uid, "preferences", "recommendations"), {
        courses: recommendedCourses.map((course) => course.id),
        updatedAt: serverTimestamp(),
      })

      // Generate initial coins (500 welcome coins)
      await setDoc(doc(db, "users", user.uid, "gamification", "wallet"), {
        coins: 500,
        totalEarned: 500,
        lastUpdated: serverTimestamp(),
      })

      // Generate admission letter
      await setDoc(doc(db, "users", user.uid, "admission", "letter"), {
        status: "accepted",
        academicLevel,
        generatedAt: serverTimestamp(),
        welcomeMessage: `Congratulations! You have been accepted to Dunamis Tutors as a ${academicLevelLabel} student.`,
        motivationalLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
        affirmationMessage: "You are on your way to academic excellence!",
      })

      toast({
        title: "Assessment completed!",
        description: "Your learning profile has been saved and courses have been recommended.",
      })

      // Redirect to dashboard
      router.push("/dashboard")
    } catch (error) {
      console.error("Error saving preferences:", error)
      toast({
        title: "Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const academicLevelLabel = academicLevels.find((level) => level.id === academicLevel)?.label || ""

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-8 flex justify-between">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`flex flex-col items-center ${
              stepNumber < step ? "text-primary" : stepNumber === step ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                stepNumber < step
                  ? "border-primary bg-primary text-primary-foreground"
                  : stepNumber === step
                    ? "border-primary"
                    : "border-muted"
              }`}
            >
              {stepNumber < step ? <CheckCircle2 className="h-5 w-5" /> : <span>{stepNumber}</span>}
            </div>
            <span className="mt-2 text-sm">
              {stepNumber === 1
                ? "Academic Level"
                : stepNumber === 2
                  ? "Learning Style"
                  : stepNumber === 3
                    ? "Birth Date"
                    : "Recommendations"}
            </span>
          </div>
        ))}
      </div>

      <Card className="w-full">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>What is your current academic level?</CardTitle>
              <CardDescription>
                This helps us personalize your learning experience and recommend appropriate courses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={academicLevel} onValueChange={setAcademicLevel}>
                <div className="grid gap-4 md:grid-cols-2">
                  {academicLevels.map((level) => (
                    <div key={level.id}>
                      <RadioGroupItem value={level.id} id={level.id} className="peer sr-only" />
                      <Label
                        htmlFor={level.id}
                        className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
                      >
                        <div className="flex items-center gap-2">
                          {level.id === "primary" || level.id === "jss" || level.id === "sss" ? (
                            <BookOpen className="h-5 w-5 text-muted-foreground" />
                          ) : level.id === "jamb" || level.id === "ijmb" || level.id === "jupeb" ? (
                            <GraduationCap className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Brain className="h-5 w-5 text-muted-foreground" />
                          )}
                          <div>{level.label}</div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>What is your preferred learning style?</CardTitle>
              <CardDescription>
                Understanding how you learn best helps us recommend the most effective learning materials.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={learningStyle} onValueChange={setLearningStyle}>
                <div className="grid gap-4">
                  {learningStyles.map((style) => (
                    <div key={style.id}>
                      <RadioGroupItem value={style.id} id={style.id} className="peer sr-only" />
                      <Label
                        htmlFor={style.id}
                        className="flex cursor-pointer flex-col justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-muted peer-data-[state=checked]:border-primary"
                      >
                        <div className="font-medium">{style.label}</div>
                        <div className="text-sm text-muted-foreground">{style.description}</div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>When is your birthday?</CardTitle>
              <CardDescription>
                This helps us provide personalized recommendations based on your zodiac sign.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="month">Month</Label>
                  <Select value={birthMonth} onValueChange={setBirthMonth}>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="day">Day</Label>
                  <Input
                    id="day"
                    type="number"
                    min="1"
                    max="31"
                    placeholder="Day"
                    value={birthDay}
                    onChange={(e) => setBirthDay(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Note: This information is only used for personalized recommendations and is kept private.
              </div>
            </CardContent>
          </>
        )}

        {step === 4 && (
          <>
            <CardHeader>
              <CardTitle>Your Personalized Recommendations</CardTitle>
              <CardDescription>
                Based on your academic level, learning style, and zodiac sign ({zodiacSign}), we recommend the following
                courses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Your Zodiac Profile: {zodiacSign}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {zodiacTraits.map((trait, index) => (
                    <div key={index} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      {trait}
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <h3 className="mb-3 text-lg font-medium">Recommended Courses</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {recommendedCourses.slice(0, 6).map((course) => (
                    <div key={course.id} className="rounded-lg border p-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{course.title}</h4>
                        <div className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                          {course.level}
                        </div>
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{course.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </>
        )}

        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handlePreviousStep} disabled={loading}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          {step < 4 ? (
            <Button onClick={handleNextStep}>
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleComplete} disabled={loading}>
              {loading ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Complete Assessment
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
