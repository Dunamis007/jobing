"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string

  // Educational Background
  currentEducation: string
  institution: string
  graduationYear: string
  previousExperience: string

  // Program Preferences
  preferredSchedule: string
  learningGoals: string
  specialInterests: string

  // Additional Information
  howDidYouHear: string
  additionalComments: string
  agreeToTerms: boolean
}

interface MultiStepFormProps {
  programName: string
  programPrice: string
  onSubmit: (data: FormData) => void
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  currentEducation: "",
  institution: "",
  graduationYear: "",
  previousExperience: "",
  preferredSchedule: "",
  learningGoals: "",
  specialInterests: "",
  howDidYouHear: "",
  additionalComments: "",
  agreeToTerms: false,
}

export function MultiStepForm({ programName, programPrice, onSubmit }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const steps = [
    {
      title: "Personal Information",
      description: "Tell us about yourself",
    },
    {
      title: "Educational Background",
      description: "Your academic history",
    },
    {
      title: "Program Preferences",
      description: "Customize your learning experience",
    },
    {
      title: "Additional Information",
      description: "Final details",
    },
  ]

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {}

    switch (step) {
      case 0:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        if (!formData.gender) newErrors.gender = "Gender is required"
        break
      case 1:
        if (!formData.currentEducation) newErrors.currentEducation = "Current education level is required"
        if (!formData.institution.trim()) newErrors.institution = "Institution name is required"
        break
      case 2:
        if (!formData.preferredSchedule) newErrors.preferredSchedule = "Preferred schedule is required"
        if (!formData.learningGoals.trim()) newErrors.learningGoals = "Learning goals are required"
        break
      case 3:
        if (!formData.howDidYouHear) newErrors.howDidYouHear = "Please tell us how you heard about us"
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      onSubmit(formData)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Register for {programName}</CardTitle>
          <CardDescription className="text-center">Program Fee: {programPrice}</CardDescription>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">{steps[currentStep]?.title}</h3>
            <p className="text-gray-600">{steps[currentStep]?.description}</p>
          </div>

          {/* Step 1: Personal Information */}
          {currentStep === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                    className={errors.dateOfBirth ? "border-red-500" : ""}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>
                <div>
                  <Label htmlFor="gender">Gender *</Label>
                  <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                    <SelectTrigger className={errors.gender ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Educational Background */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentEducation">Current Education Level *</Label>
                <Select
                  value={formData.currentEducation}
                  onValueChange={(value) => updateFormData("currentEducation", value)}
                >
                  <SelectTrigger className={errors.currentEducation ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentEducation && <p className="text-red-500 text-sm mt-1">{errors.currentEducation}</p>}
              </div>

              <div>
                <Label htmlFor="institution">Institution Name *</Label>
                <Input
                  id="institution"
                  value={formData.institution}
                  onChange={(e) => updateFormData("institution", e.target.value)}
                  className={errors.institution ? "border-red-500" : ""}
                />
                {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
              </div>

              <div>
                <Label htmlFor="graduationYear">Expected/Actual Graduation Year</Label>
                <Input
                  id="graduationYear"
                  type="number"
                  min="2000"
                  max="2030"
                  value={formData.graduationYear}
                  onChange={(e) => updateFormData("graduationYear", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="previousExperience">Previous Experience (Optional)</Label>
                <Textarea
                  id="previousExperience"
                  value={formData.previousExperience}
                  onChange={(e) => updateFormData("previousExperience", e.target.value)}
                  placeholder="Tell us about any relevant experience you have..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Program Preferences */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="preferredSchedule">Preferred Schedule *</Label>
                <Select
                  value={formData.preferredSchedule}
                  onValueChange={(value) => updateFormData("preferredSchedule", value)}
                >
                  <SelectTrigger className={errors.preferredSchedule ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select preferred schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays-morning">Weekdays - Morning</SelectItem>
                    <SelectItem value="weekdays-afternoon">Weekdays - Afternoon</SelectItem>
                    <SelectItem value="weekdays-evening">Weekdays - Evening</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredSchedule && <p className="text-red-500 text-sm mt-1">{errors.preferredSchedule}</p>}
              </div>

              <div>
                <Label htmlFor="learningGoals">Learning Goals *</Label>
                <Textarea
                  id="learningGoals"
                  value={formData.learningGoals}
                  onChange={(e) => updateFormData("learningGoals", e.target.value)}
                  placeholder="What do you hope to achieve from this program?"
                  className={errors.learningGoals ? "border-red-500" : ""}
                />
                {errors.learningGoals && <p className="text-red-500 text-sm mt-1">{errors.learningGoals}</p>}
              </div>

              <div>
                <Label htmlFor="specialInterests">Special Interests (Optional)</Label>
                <Textarea
                  id="specialInterests"
                  value={formData.specialInterests}
                  onChange={(e) => updateFormData("specialInterests", e.target.value)}
                  placeholder="Any specific areas you're particularly interested in?"
                />
              </div>
            </div>
          )}

          {/* Step 4: Additional Information */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="howDidYouHear">How did you hear about us? *</Label>
                <Select
                  value={formData.howDidYouHear}
                  onValueChange={(value) => updateFormData("howDidYouHear", value)}
                >
                  <SelectTrigger className={errors.howDidYouHear ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google Search</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="friend-referral">Friend Referral</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="blog">Blog/Article</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.howDidYouHear && <p className="text-red-500 text-sm mt-1">{errors.howDidYouHear}</p>}
              </div>

              <div>
                <Label htmlFor="additionalComments">Additional Comments (Optional)</Label>
                <Textarea
                  id="additionalComments"
                  value={formData.additionalComments}
                  onChange={(e) => updateFormData("additionalComments", e.target.value)}
                  placeholder="Any additional information you'd like to share?"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the terms and conditions and privacy policy *
                </Label>
              </div>
              {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 bg-[#FF9800] hover:bg-[#F57C00] text-white"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-[#FF9800] hover:bg-[#F57C00] text-white"
              >
                <Check className="w-4 h-4" />
                Submit Registration
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MultiStepForm
