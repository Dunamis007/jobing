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
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, GraduationCap } from "lucide-react"

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

  // Stage 2: Educational Background
  currentEducation: string
  targetEducation: string
  subjects: string[]
  interests: string

  // Stage 3: Learning Preferences
  learningStyle: string
  studyGoal: string
  studyHours: string
  preferredTime: string
}

export function MultiStepForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [stage, setStage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    email: "",
    password: "",
    currentEducation: "",
    targetEducation: "",
    subjects: [],
    interests: "",
    learningStyle: "",
    studyGoal: "",
    studyHours: "",
    preferredTime: "",
  })

  // Update form data
  const updateFormData = (field: keyof RegistrationData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Toggle subject selection
  const toggleSubject = (subject: string) => {
    setFormData((prev) => {
      const subjects = prev.subjects || []
      return {
        ...prev,
        subjects: subjects.includes(subject) ? subjects.filter((s) => s !== subject) : [...subjects, subject],
      }
    })
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
    }

    // Move to next stage
    setStage((prev) => prev + 1)
  }

  // Handle previous stage
  const handlePreviousStage = () => {
    setStage((prev) => prev - 1)
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

      // 3. Store user data in Firestore
      const userDocRef = firestoreService.doc("users", user.uid)
      await firestoreService.setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        name: formData.name,
        currentEducation: formData.currentEducation,
        targetEducation: formData.targetEducation,
        subjects: formData.subjects,
        interests: formData.interests,
        learningStyle: formData.learningStyle,
        studyGoal: formData.studyGoal,
        studyHours: formData.studyHours,
        preferredTime: formData.preferredTime,
        createdAt: new Date().toISOString(),
        role: "student",
      })

      // 4. Initialize EduCoin wallet with 500 coins
      const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
      await firestoreService.setDoc(walletDocRef, {
        balance: 500,
        totalEarned: 500,
        lastUpdated: new Date().toISOString(),
      })

      // 5. Create first transaction record
      const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
      await firestoreService.addDoc(transactionsCollectionRef, {
        amount: 500,
        type: "credit",
        description: "Welcome bonus",
        category: "system",
        createdAt: new Date().toISOString(),
      })

      toast({
        title: "Registration successful!",
        description: "Your account has been created and you've received 500 EduCoins as a welcome bonus.",
      })

      // Redirect to dashboard
      router.push("/dashboard")
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

  // Render progress indicator
  const renderProgress = () => {
    return (
      <div className="mb-6 flex justify-between">
        {[1, 2, 3, 4].map((stageNumber) => (
          <div
            key={stageNumber}
            className={`flex flex-col items-center ${
              stageNumber < stage ? "text-primary" : stageNumber === stage ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                stageNumber < stage
                  ? "border-primary bg-primary text-primary-foreground"
                  : stageNumber === stage
                    ? "border-primary"
                    : "border-muted"
              }`}
            >
              {stageNumber < stage ? <CheckCircle2 className="h-4 w-4" /> : <span>{stageNumber}</span>}
            </div>
            <span className="mt-2 text-xs">
              {stageNumber === 1
                ? "Basic Info"
                : stageNumber === 2
                  ? "Education"
                  : stageNumber === 3
                    ? "Preferences"
                    : "Confirmation"}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">Create your account</CardTitle>
        <CardDescription>Join Dunamis Tutors to start your learning journey</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        {renderProgress()}

        <AnimatePresence mode="wait">
          {stage === 1 && (
            <motion.div key="stage-1" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <div className="space-y-4">
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
              </div>
            </motion.div>
          )}

          {stage === 2 && (
            <motion.div key="stage-2" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <div className="space-y-4">
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
                      <SelectItem value="University">Study at University</SelectItem>
                      <SelectItem value="JAMB">JAMB Preparation</SelectItem>
                      <SelectItem value="IJMB">IJMB Program</SelectItem>
                      <SelectItem value="JUPEB">JUPEB Program</SelectItem>
                      <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                      <SelectItem value="Coding">Coding & Programming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Subjects of Interest</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Mathematics",
                      "English",
                      "Physics",
                      "Chemistry",
                      "Biology",
                      "Economics",
                      "Government",
                      "Literature",
                    ].map((subject) => (
                      <div
                        key={subject}
                        className={`flex items-center justify-center rounded-md border p-2 cursor-pointer ${
                          formData.subjects?.includes(subject)
                            ? "border-primary bg-primary/10"
                            : "border-input hover:border-primary/50"
                        }`}
                        onClick={() => toggleSubject(subject)}
                      >
                        <span className="text-sm">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Other Interests or Goals</Label>
                  <Textarea
                    id="interests"
                    placeholder="Tell us about your other interests or specific goals"
                    value={formData.interests}
                    onChange={(e) => updateFormData("interests", e.target.value)}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {stage === 3 && (
            <motion.div key="stage-3" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>What is your preferred learning style?</Label>
                  <RadioGroup
                    value={formData.learningStyle}
                    onValueChange={(value) => updateFormData("learningStyle", value)}
                  >
                    <div className="grid grid-cols-1 gap-2">
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
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exam" id="exam" />
                        <Label htmlFor="exam">Exam Preparation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="skills" id="skills" />
                        <Label htmlFor="skills">Skill Development</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="career" id="career" />
                        <Label htmlFor="career">Career Advancement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="personal" id="personal" />
                        <Label htmlFor="personal">Personal Interest</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studyHours">How many hours can you study per week?</Label>
                  <Select value={formData.studyHours} onValueChange={(value) => updateFormData("studyHours", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hours per week" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 hours</SelectItem>
                      <SelectItem value="6-10">6-10 hours</SelectItem>
                      <SelectItem value="11-15">11-15 hours</SelectItem>
                      <SelectItem value="16+">16+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">Preferred study time</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => updateFormData("preferredTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning</SelectItem>
                      <SelectItem value="afternoon">Afternoon</SelectItem>
                      <SelectItem value="evening">Evening</SelectItem>
                      <SelectItem value="night">Night</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}

          {stage === 4 && (
            <motion.div key="stage-4" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Account Summary</h3>
                  <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Name:</span>
                      <span className="text-sm font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Email:</span>
                      <span className="text-sm font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Current Level:</span>
                      <span className="text-sm font-medium">{formData.currentEducation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Goal:</span>
                      <span className="text-sm font-medium">{formData.targetEducation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Learning Style:</span>
                      <span className="text-sm font-medium">{formData.learningStyle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Study Goal:</span>
                      <span className="text-sm font-medium">{formData.studyGoal}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg flex items-start gap-3">
                  <div className="mt-1">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Welcome Bonus</h4>
                    <p className="text-sm">
                      Upon registration, you'll receive 500 EduCoins to get started with premium content and features.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="flex justify-between">
        {stage > 1 ? (
          <Button variant="outline" onClick={handlePreviousStage} disabled={loading}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        ) : (
          <div></div>
        )}

        {stage < 4 ? (
          <Button onClick={handleNextStage}>
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>Complete Registration</>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
