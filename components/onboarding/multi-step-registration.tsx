"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { authService } from "@/lib/auth-service"
import { firestoreService } from "@/lib/firestore-service"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { zodiac } from "@/lib/zodiac-utils"
import { BookOpen, Loader2, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, GraduationCap } from "lucide-react"
import { CreditCardForm, type PaymentDetails } from "@/components/payment/credit-card-form"
import { EduCoinOverview } from "@/components/educoin/educoin-overview"

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

// Types for form data
interface RegistrationData {
  // Stage 1: Basic Info
  name: string
  email: string
  password: string

  // Stage 2: Additional Info
  address: string
  city: string
  country: string
  phone: string
  currentEducation: string
  targetEducation: string

  // Stage 3: Preferences
  learningStyle: string
  studyGoal: string
  birthMonth: string
  birthDay: string
  zodiacSign?: string

  // Stage 4: IELTS Specific
  englishLevel: string
  targetScore: string
  testDate: string
  previousExperience: string

  // Stage 5: Payment
  paymentDetails?: PaymentDetails

  // Stage 6: EduCoin Overview
  eduCoinOverviewCompleted: boolean
}

export function MultiStepRegistration() {
  const router = useRouter()
  const { toast } = useToast()
  const [stage, setStage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    currentEducation: "",
    targetEducation: "",
    learningStyle: "",
    studyGoal: "",
    birthMonth: "",
    birthDay: "",
    englishLevel: "",
    targetScore: "",
    testDate: "",
    previousExperience: "",
    eduCoinOverviewCompleted: false,
  })

  const [suggestedCourses, setSuggestedCourses] = useState<any[]>([])
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])

  // Update form data
  const updateFormData = (field: keyof RegistrationData, value: string | PaymentDetails | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Handle next stage
  const handleNextStage = () => {
    // Validate current stage
    if (stage === 1) {
      if (!formData.name || !formData.email || !formData.password) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        })
        return
      }

      if (formData.password.length < 6) {
        toast({
          title: "Password too short",
          description: "Password must be at least 6 characters long",
          variant: "destructive",
        })
        return
      }
    }

    if (stage === 2) {
      if (!formData.currentEducation || !formData.targetEducation) {
        toast({
          title: "Missing information",
          description: "Please fill in your current and target education",
          variant: "destructive",
        })
        return
      }
    }

    if (stage === 3) {
      if (!formData.learningStyle || !formData.studyGoal) {
        toast({
          title: "Missing information",
          description: "Please select your learning style and study goal",
          variant: "destructive",
        })
        return
      }

      // Calculate zodiac sign if birth date is provided
      if (formData.birthMonth && formData.birthDay) {
        const month = Number.parseInt(formData.birthMonth)
        const day = Number.parseInt(formData.birthDay)
        const sign = zodiac.getZodiacSign(month, day)

        // Update form data with zodiac sign
        updateFormData("zodiacSign", sign)

        // Generate course suggestions based on zodiac sign and learning style
        const courses = generateCourseRecommendations(sign, formData.learningStyle, formData.targetEducation)
        setSuggestedCourses(courses)

        // Pre-select all courses by default
        setSelectedCourses(courses.map((course) => course.id))
      }
    }

    // Move to next stage
    setStage((prev) => prev + 1)
  }

  // Handle previous stage
  const handlePreviousStage = () => {
    setStage((prev) => prev - 1)
  }

  // Toggle course selection
  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  // Handle payment success
  const handlePaymentSuccess = (paymentDetails: PaymentDetails) => {
    updateFormData("paymentDetails", paymentDetails)
    setStage((prev) => prev + 1)
  }

  // Handle EduCoin overview completion
  const handleEduCoinOverviewComplete = () => {
    updateFormData("eduCoinOverviewCompleted", true)
    setStage((prev) => prev + 1)
  }

  // Generate course recommendations based on zodiac sign, learning style, and target education
  const generateCourseRecommendations = (sign: string, style: string, target: string) => {
    // Base courses for IELTS preparation
    const baseCourses = [
      { id: "ielts-reading", title: "IELTS Reading Mastery", category: "Reading", level: "All Levels" },
      { id: "ielts-writing", title: "IELTS Writing Skills", category: "Writing", level: "All Levels" },
      { id: "ielts-listening", title: "IELTS Listening Techniques", category: "Listening", level: "All Levels" },
      { id: "ielts-speaking", title: "IELTS Speaking Confidence", category: "Speaking", level: "All Levels" },
    ]

    // Zodiac-based recommendations
    const zodiacCourses: Record<string, any[]> = {
      Aries: [
        { id: "quick-vocab", title: "Quick Vocabulary Building", category: "Vocabulary", level: "Intermediate" },
        { id: "debate-skills", title: "Debate Skills for IELTS Speaking", category: "Speaking", level: "Advanced" },
      ],
      Taurus: [
        {
          id: "practical-english",
          title: "Practical English for Daily Use",
          category: "General",
          level: "Intermediate",
        },
        { id: "essay-structure", title: "Essay Structure Mastery", category: "Writing", level: "Intermediate" },
      ],
      Gemini: [
        { id: "communication-skills", title: "Advanced Communication Skills", category: "Speaking", level: "Advanced" },
        { id: "creative-writing", title: "Creative Writing for IELTS", category: "Writing", level: "Intermediate" },
      ],
      Cancer: [
        {
          id: "emotional-vocab",
          title: "Emotional Vocabulary Development",
          category: "Vocabulary",
          level: "Intermediate",
        },
        {
          id: "descriptive-writing",
          title: "Descriptive Writing Techniques",
          category: "Writing",
          level: "Intermediate",
        },
      ],
      Leo: [
        { id: "public-speaking", title: "Public Speaking Excellence", category: "Speaking", level: "Advanced" },
        { id: "persuasive-writing", title: "Persuasive Writing for IELTS", category: "Writing", level: "Advanced" },
      ],
      Virgo: [
        { id: "grammar-precision", title: "Grammar Precision", category: "Grammar", level: "Advanced" },
        { id: "analytical-reading", title: "Analytical Reading Strategies", category: "Reading", level: "Advanced" },
      ],
      Libra: [
        {
          id: "balanced-arguments",
          title: "Balanced Arguments for Essays",
          category: "Writing",
          level: "Intermediate",
        },
        { id: "social-english", title: "Social English Skills", category: "Speaking", level: "Intermediate" },
      ],
      Scorpio: [
        { id: "critical-reading", title: "Critical Reading Analysis", category: "Reading", level: "Advanced" },
        { id: "research-skills", title: "Research Skills for IELTS", category: "General", level: "Advanced" },
      ],
      Sagittarius: [
        { id: "global-english", title: "Global English Perspectives", category: "General", level: "Intermediate" },
        {
          id: "travel-vocabulary",
          title: "Travel & Adventure Vocabulary",
          category: "Vocabulary",
          level: "Intermediate",
        },
      ],
      Capricorn: [
        { id: "business-english", title: "Business English Mastery", category: "Professional", level: "Advanced" },
        { id: "structured-writing", title: "Structured Writing Approach", category: "Writing", level: "Advanced" },
      ],
      Aquarius: [
        {
          id: "innovative-expressions",
          title: "Innovative English Expressions",
          category: "Vocabulary",
          level: "Advanced",
        },
        { id: "tech-vocabulary", title: "Technology Vocabulary", category: "Vocabulary", level: "Intermediate" },
      ],
      Pisces: [
        {
          id: "creative-descriptions",
          title: "Creative Descriptions for IELTS",
          category: "Writing",
          level: "Intermediate",
        },
        {
          id: "artistic-vocabulary",
          title: "Artistic & Cultural Vocabulary",
          category: "Vocabulary",
          level: "Intermediate",
        },
      ],
    }

    // Learning style-based recommendations
    const styleCourses: Record<string, any[]> = {
      visual: [
        { id: "visual-vocab", title: "Visual Vocabulary Building", category: "Vocabulary", level: "All Levels" },
        { id: "diagram-analysis", title: "Diagram Analysis for IELTS", category: "Reading", level: "Intermediate" },
      ],
      auditory: [
        {
          id: "listening-strategies",
          title: "Advanced Listening Strategies",
          category: "Listening",
          level: "Advanced",
        },
        { id: "pronunciation", title: "Pronunciation Perfection", category: "Speaking", level: "Intermediate" },
      ],
      reading: [
        { id: "speed-reading", title: "Speed Reading Techniques", category: "Reading", level: "Intermediate" },
        { id: "note-taking", title: "Effective Note-Taking", category: "General", level: "All Levels" },
      ],
      kinesthetic: [
        { id: "role-play", title: "Role-Play Speaking Practice", category: "Speaking", level: "All Levels" },
        {
          id: "interactive-grammar",
          title: "Interactive Grammar Practice",
          category: "Grammar",
          level: "Intermediate",
        },
      ],
    }

    // Target-specific courses
    const targetCourses: Record<string, any[]> = {
      academic: [
        { id: "academic-writing", title: "Academic Writing Excellence", category: "Writing", level: "Advanced" },
        { id: "research-papers", title: "Research Paper Vocabulary", category: "Vocabulary", level: "Advanced" },
      ],
      general: [
        {
          id: "everyday-english",
          title: "Everyday English Conversations",
          category: "Speaking",
          level: "Intermediate",
        },
        { id: "practical-writing", title: "Practical Writing Skills", category: "Writing", level: "Intermediate" },
      ],
      professional: [
        { id: "business-comm", title: "Business Communication", category: "Professional", level: "Advanced" },
        { id: "interview-skills", title: "Job Interview Skills", category: "Speaking", level: "Advanced" },
      ],
    }

    // Combine recommendations
    const zodiacRecs = zodiacCourses[sign] || []
    const styleRecs = styleCourses[style] || []
    const targetRecs =
      targetCourses[target === "University" ? "academic" : target === "Work Abroad" ? "professional" : "general"] || []

    return [...baseCourses, ...zodiacRecs, ...styleRecs, ...targetRecs]
  }

  // Handle final submission
  const handleSubmit = async () => {
    setLoading(true)

    try {
      // 1. Create user account
      const userCredential = await authService.createUserWithEmailAndPassword(formData.email, formData.password)
      const user = userCredential.user

      // 2. Update user profile
      await authService.updateProfile(user, {
        displayName: formData.name,
      })

      // 3. Generate admission letter
      const admissionLetter = generateAdmissionLetter(formData)

      // 4. Store user data in Firestore
      const userDocRef = firestoreService.doc("users", user.uid)
      await firestoreService.setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        name: formData.name,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        phone: formData.phone,
        currentEducation: formData.currentEducation,
        targetEducation: formData.targetEducation,
        learningStyle: formData.learningStyle,
        studyGoal: formData.studyGoal,
        zodiacSign: formData.zodiacSign,
        englishLevel: formData.englishLevel,
        targetScore: formData.targetScore,
        testDate: formData.testDate,
        previousExperience: formData.previousExperience,
        paymentVerified: true,
        paymentDate: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        role: "student",
      })

      // 5. Store selected courses
      const coursesDocRef = firestoreService.doc("users", user.uid, "preferences", "courses")
      await firestoreService.setDoc(coursesDocRef, {
        selectedCourses: selectedCourses,
        suggestedCourses: suggestedCourses.map((course) => course.id),
        updatedAt: new Date().toISOString(),
      })

      // 6. Store admission letter
      const admissionDocRef = firestoreService.doc("users", user.uid, "admission", "letter")
      await firestoreService.setDoc(admissionDocRef, {
        ...admissionLetter,
        generatedAt: new Date().toISOString(),
      })

      // 7. Initialize EduCoin wallet with 500 coins
      const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
      await firestoreService.setDoc(walletDocRef, {
        balance: 500,
        totalEarned: 500,
        lastUpdated: new Date().toISOString(),
      })

      // 8. Create first transaction record
      const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
      await firestoreService.addDoc(transactionsCollectionRef, {
        amount: 500,
        type: "credit",
        description: "Welcome bonus",
        category: "system",
        createdAt: new Date().toISOString(),
      })

      // 9. Store payment details
      if (formData.paymentDetails) {
        const paymentDocRef = firestoreService.doc("users", user.uid, "payment", "details")
        await firestoreService.setDoc(paymentDocRef, {
          // Store only last 4 digits of card number for security
          lastFourDigits: formData.paymentDetails.cardNumber.replace(/\s/g, "").slice(-4),
          cardholderName: formData.paymentDetails.cardholderName,
          expiryDate: formData.paymentDetails.expiryDate,
          isVerified: true,
          trialStartDate: new Date().toISOString(),
          trialEndDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 1 day later
          updatedAt: new Date().toISOString(),
        })
      }

      toast({
        title: "Registration successful!",
        description: "Your account has been created and you've received 500 EduCoins as a welcome bonus.",
      })

      // Redirect to personalized dashboard
      router.push("/dashboard/personalized")
    } catch (error: any) {
      console.error("Registration error:", error)

      toast({
        title: "Registration failed",
        description: error.message || "An error occurred during registration",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Generate admission letter based on form data
  const generateAdmissionLetter = (data: RegistrationData) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    return {
      status: "accepted",
      academicLevel: data.currentEducation,
      targetLevel: data.targetEducation,
      welcomeMessage: `Congratulations ${data.name}! You have been accepted to Dunamis Tutors IELTS Preparation Program.`,
      letterBody: `
Dear ${data.name},

We are pleased to inform you that your application to the Dunamis Tutors IELTS Preparation Program has been accepted. Based on the information you provided, we have designed a personalized learning path to help you achieve your target IELTS score of ${data.targetScore}.

Your current English level: ${data.englishLevel}
Your target test date: ${data.testDate}
Your learning style: ${data.learningStyle}
Your study goal: ${data.studyGoal}

Your account has been credited with 500 EduCoins which you can use to access premium content and features on our platform. Additional coins can be earned through regular attendance, completing assignments, and participating in community activities.

Classes are scheduled as follows:
- Morning sessions: 10:00 AM - 12:00 PM & 12:30 PM - 2:30 PM
- Evening sessions: 3:00 PM - 4:00 PM & 4:00 PM - 5:30 PM

Please log in to your dashboard to view your personalized study plan and begin your IELTS preparation journey.

Welcome to the Dunamis Tutors family!

Sincerely,
The Dunamis Tutors Team
${currentDate}
      `,
      motivationalQuote: "The journey of a thousand miles begins with a single step. Your IELTS success starts today!",
    }
  }

  // Render progress indicator
  const renderProgress = () => {
    return (
      <div className="mb-8 flex justify-between">
        {[1, 2, 3, 4, 5, 6].map((stageNumber) => (
          <div
            key={stageNumber}
            className={`flex flex-col items-center ${
              stageNumber < stage ? "text-primary" : stageNumber === stage ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                stageNumber < stage
                  ? "border-primary bg-primary text-primary-foreground"
                  : stageNumber === stage
                    ? "border-primary"
                    : "border-muted"
              }`}
            >
              {stageNumber < stage ? <CheckCircle2 className="h-5 w-5" /> : <span>{stageNumber}</span>}
            </div>
            <span className="mt-2 text-sm">
              {stageNumber === 1
                ? "Basic Info"
                : stageNumber === 2
                  ? "Additional Info"
                  : stageNumber === 3
                    ? "Preferences"
                    : stageNumber === 4
                      ? "Course Selection"
                      : stageNumber === 5
                        ? "Payment"
                        : "EduCoins"}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <BookOpen className="h-6 w-6" />
        <span className="font-bold text-xl">Dunamis Tutors IELTS Program</span>
      </div>

      {renderProgress()}

      <Card className="w-full">
        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div key="stage-1" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <CardHeader>
                <CardTitle>Create your account</CardTitle>
                <CardDescription>
                  Enter your basic information to get started with your IELTS preparation journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => updateFormData("password", e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Password must be at least 6 characters long</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleNextStage} className="ml-auto">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div key="stage-2" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Tell us more about yourself and your educational background.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={(e) => updateFormData("country", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <Label htmlFor="currentEducation">Current Education Level</Label>
                  <Select
                    value={formData.currentEducation}
                    onValueChange={(value) => updateFormData("currentEducation", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High School">High School</SelectItem>
                      <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="Graduate">Graduate</SelectItem>
                      <SelectItem value="Professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetEducation">What is your goal?</Label>
                  <Select
                    value={formData.targetEducation}
                    onValueChange={(value) => updateFormData("targetEducation", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="University">Study at University Abroad</SelectItem>
                      <SelectItem value="Work Abroad">Work Abroad</SelectItem>
                      <SelectItem value="Immigration">Immigration</SelectItem>
                      <SelectItem value="Personal Growth">Personal Growth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousStage}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleNextStage}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div key="stage-3" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <CardHeader>
                <CardTitle>Learning Preferences</CardTitle>
                <CardDescription>Help us personalize your learning experience.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>What is your preferred learning style?</Label>
                  <RadioGroup
                    value={formData.learningStyle}
                    onValueChange={(value) => updateFormData("learningStyle", value)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="visual" id="visual" />
                        <Label htmlFor="visual">Visual (learn by seeing)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auditory" id="auditory" />
                        <Label htmlFor="auditory">Auditory (learn by hearing)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reading" id="reading" />
                        <Label htmlFor="reading">Reading/Writing</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="kinesthetic" id="kinesthetic" />
                        <Label htmlFor="kinesthetic">Kinesthetic (learn by doing)</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>What is your primary study goal?</Label>
                  <RadioGroup value={formData.studyGoal} onValueChange={(value) => updateFormData("studyGoal", value)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="academic" id="academic" />
                        <Label htmlFor="academic">Academic IELTS</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Training IELTS</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <Separator className="my-4" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthMonth">Birth Month (Optional)</Label>
                    <Select value={formData.birthMonth} onValueChange={(value) => updateFormData("birthMonth", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <SelectItem key={month} value={month.toString()}>
                            {new Date(2000, month - 1, 1).toLocaleString("default", { month: "long" })}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDay">Birth Day (Optional)</Label>
                    <Input
                      id="birthDay"
                      type="number"
                      min="1"
                      max="31"
                      placeholder="Day"
                      value={formData.birthDay}
                      onChange={(e) => updateFormData("birthDay", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="englishLevel">Current English Level</Label>
                  <Select
                    value={formData.englishLevel}
                    onValueChange={(value) => updateFormData("englishLevel", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current English level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner (A1-A2)</SelectItem>
                      <SelectItem value="Intermediate">Intermediate (B1-B2)</SelectItem>
                      <SelectItem value="Advanced">Advanced (C1-C2)</SelectItem>
                      <SelectItem value="Native">Native/Bilingual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetScore">Target IELTS Score</Label>
                  <Select value={formData.targetScore} onValueChange={(value) => updateFormData("targetScore", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your target score" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 18 }, (_, i) => (i + 5) / 2).map((score) => (
                        <SelectItem key={score} value={score.toString()}>
                          {score.toString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="testDate">Planned Test Date</Label>
                  <Input
                    id="testDate"
                    type="date"
                    value={formData.testDate}
                    onChange={(e) => updateFormData("testDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousExperience">Previous IELTS Experience</Label>
                  <Textarea
                    id="previousExperience"
                    placeholder="Have you taken IELTS before? What was your score? What challenges did you face?"
                    value={formData.previousExperience}
                    onChange={(e) => updateFormData("previousExperience", e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousStage}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleNextStage}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div key="stage-4" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <CardHeader>
                <CardTitle>Course Recommendations</CardTitle>
                <CardDescription>
                  Based on your preferences, we've selected these courses for you. You can customize your selection.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.zodiacSign && (
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Your Zodiac Sign: {formData.zodiacSign}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We've included some course recommendations based on your zodiac sign's learning traits.
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-medium">Recommended Courses</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select the courses you're interested in. You can change these later.
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {suggestedCourses.map((course) => (
                      <div
                        key={course.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          selectedCourses.includes(course.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => toggleCourseSelection(course.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                selectedCourses.includes(course.id)
                                  ? "bg-primary text-primary-foreground"
                                  : "border border-muted-foreground"
                              }`}
                            >
                              {selectedCourses.includes(course.id) && <CheckCircle2 className="h-4 w-4" />}
                            </div>
                            <h4 className="font-medium">{course.title}</h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                              {course.category}
                            </span>
                            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                              {course.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousStage}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleNextStage}>
                  Continue to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </motion.div>
          )}

          {stage === 5 && (
            <motion.div key="stage-5" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>
                  Enter your payment details to activate your 1-day free trial. No charges will be made during the trial
                  period.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CreditCardForm onSuccess={handlePaymentSuccess} onCancel={handlePreviousStage} isLoading={loading} />
              </CardContent>
            </motion.div>
          )}

          {stage === 6 && (
            <motion.div key="stage-6" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <EduCoinOverview onContinue={handleEduCoinOverviewComplete} onBack={handlePreviousStage} />
            </motion.div>
          )}

          {stage === 7 && (
            <motion.div key="stage-7" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <CardHeader>
                <CardTitle>Registration Complete!</CardTitle>
                <CardDescription>
                  Your account has been created and your 1-day free trial has been activated.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-success/10 p-4 rounded-lg flex items-start gap-3">
                  <div className="mt-1">
                    <GraduationCap className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium text-success">Welcome to Dunamis Tutors!</h4>
                    <p className="text-sm">
                      Your account has been created successfully. You've received 500 EduCoins as a welcome bonus.
                    </p>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Account Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Name:</span>
                      <span className="text-sm font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Email:</span>
                      <span className="text-sm font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Free Trial:</span>
                      <span className="text-sm font-medium">1 day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">EduCoins:</span>
                      <span className="text-sm font-medium">500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Selected Courses:</span>
                      <span className="text-sm font-medium">{selectedCourses.length}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSubmit} disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Go to Dashboard
                    </>
                  )}
                </Button>
              </CardFooter>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  )
}
