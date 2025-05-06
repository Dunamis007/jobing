"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Loader2,
  PlaneTakeoff,
  Globe,
  BookOpenCheck,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function TravelAbroadRegistration() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    nationality: "nigeria",
    state: "",
    address: "",

    // Educational Background
    currentLevel: "ss3", // SS1 to University
    school: "",
    course: "",
    gradeAverage: "",
    englishProficiency: "intermediate",
    previousQualifications: [],

    // Travel Preferences
    destinationCountry: "uk",
    studyProgram: "undergraduate",
    budgetRange: "medium",
    timeframe: "next-year",
    accommodationPreference: "on-campus",

    // Emotional & Physical Assessment
    stressLevel: "moderate",
    sleepQuality: "good",
    exerciseFrequency: "weekly",
    dietaryRestrictions: "",
    medicalConditions: "",
    learningStyle: "visual",
    motivationLevel: "high",

    // Payment Information
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    const currentQualifications = [...formData.previousQualifications]
    if (checked) {
      currentQualifications.push(name)
    } else {
      const index = currentQualifications.indexOf(name)
      if (index !== -1) {
        currentQualifications.splice(index, 1)
      }
    }
    setFormData((prev) => ({ ...prev, previousQualifications: currentQualifications }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setLoading(false)
    router.push("/dashboard/neuropulse")
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32&text=DT"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-[#0e3b62]">Dunamis Tutors</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Already have an account? Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container max-w-screen-md py-12">
          <div className="mb-8">
            <Link href="/register" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to program selection
            </Link>
          </div>

          <div className="mb-8 space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                <PlaneTakeoff className="h-5 w-5 text-[#0e3b62]" />
              </div>
              <h1 className="text-3xl font-bold text-[#0e3b62]">Travel Abroad Program Registration</h1>
            </div>
            <p className="text-gray-500 ml-13">
              Complete your registration to start your journey to studying abroad with our personalized guidance and
              support.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-[#0e3b62] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  1
                </div>
                <span className={step >= 1 ? "font-medium" : "text-gray-500"}>Personal Information</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 2 ? "bg-[#0e3b62] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  2
                </div>
                <span className={step >= 2 ? "font-medium" : "text-gray-500"}>Educational Background</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 3 ? "bg-[#0e3b62] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
                <span className={step >= 3 ? "font-medium" : "text-gray-500"}>Travel Preferences</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 4 ? "bg-[#0e3b62] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  4
                </div>
                <span className={step >= 4 ? "font-medium" : "text-gray-500"}>Health Assessment</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 5 ? "bg-[#0e3b62] text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  5
                </div>
                <span className={step >= 5 ? "font-medium" : "text-gray-500"}>Payment</span>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-[#0e3b62]" />
                      <h2 className="text-xl font-bold text-[#0e3b62]">Personal Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Gender</Label>
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) => handleSelectChange("gender", value)}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nationality">Nationality</Label>
                        <Select
                          value={formData.nationality}
                          onValueChange={(value) => handleSelectChange("nationality", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your nationality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="southAfrica">South Africa</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">State of Residence</Label>
                        <Input
                          id="state"
                          name="state"
                          placeholder="Enter your state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Residential Address</Label>
                      <Textarea
                        id="address"
                        name="address"
                        placeholder="Enter your full address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Educational Background */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpenCheck className="h-5 w-5 text-[#0e3b62]" />
                      <h2 className="text-xl font-bold text-[#0e3b62]">Educational Background</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentLevel">Current Academic Level</Label>
                      <Select
                        value={formData.currentLevel}
                        onValueChange={(value) => handleSelectChange("currentLevel", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ss1">Senior Secondary 1 (SS1)</SelectItem>
                          <SelectItem value="ss2">Senior Secondary 2 (SS2)</SelectItem>
                          <SelectItem value="ss3">Senior Secondary 3 (SS3)</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="school">Current School/Institution</Label>
                        <Input
                          id="school"
                          name="school"
                          placeholder="Enter your school name"
                          value={formData.school}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="course">Course/Field of Study</Label>
                        <Input
                          id="course"
                          name="course"
                          placeholder="E.g., Sciences, Arts, Engineering"
                          value={formData.course}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gradeAverage">Grade Average</Label>
                        <Input
                          id="gradeAverage"
                          name="gradeAverage"
                          placeholder="E.g., 3.5/4.0, 70%, B+"
                          value={formData.gradeAverage}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="englishProficiency">English Proficiency</Label>
                        <Select
                          value={formData.englishProficiency}
                          onValueChange={(value) => handleSelectChange("englishProficiency", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your proficiency level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="native">Native/Fluent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Previous Qualifications (Select all that apply)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="waec"
                            checked={formData.previousQualifications.includes("waec")}
                            onCheckedChange={(checked) => handleCheckboxChange("waec", checked as boolean)}
                          />
                          <Label htmlFor="waec">WAEC/SSCE</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="jamb"
                            checked={formData.previousQualifications.includes("jamb")}
                            onCheckedChange={(checked) => handleCheckboxChange("jamb", checked as boolean)}
                          />
                          <Label htmlFor="jamb">JAMB/UTME</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="ielts"
                            checked={formData.previousQualifications.includes("ielts")}
                            onCheckedChange={(checked) => handleCheckboxChange("ielts", checked as boolean)}
                          />
                          <Label htmlFor="ielts">IELTS</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="toefl"
                            checked={formData.previousQualifications.includes("toefl")}
                            onCheckedChange={(checked) => handleCheckboxChange("toefl", checked as boolean)}
                          />
                          <Label htmlFor="toefl">TOEFL</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="gre"
                            checked={formData.previousQualifications.includes("gre")}
                            onCheckedChange={(checked) => handleCheckboxChange("gre", checked as boolean)}
                          />
                          <Label htmlFor="gre">GRE</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="gmat"
                            checked={formData.previousQualifications.includes("gmat")}
                            onCheckedChange={(checked) => handleCheckboxChange("gmat", checked as boolean)}
                          />
                          <Label htmlFor="gmat">GMAT</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="sat"
                            checked={formData.previousQualifications.includes("sat")}
                            onCheckedChange={(checked) => handleCheckboxChange("sat", checked as boolean)}
                          />
                          <Label htmlFor="sat">SAT</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bachelor"
                            checked={formData.previousQualifications.includes("bachelor")}
                            onCheckedChange={(checked) => handleCheckboxChange("bachelor", checked as boolean)}
                          />
                          <Label htmlFor="bachelor">Bachelor's Degree</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Travel Preferences */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="h-5 w-5 text-[#0e3b62]" />
                      <h2 className="text-xl font-bold text-[#0e3b62]">Travel Preferences</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destinationCountry">Preferred Destination Country</Label>
                      <Select
                        value={formData.destinationCountry}
                        onValueChange={(value) => handleSelectChange("destinationCountry", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studyProgram">Preferred Study Program</Label>
                      <Select
                        value={formData.studyProgram}
                        onValueChange={(value) => handleSelectChange("studyProgram", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate Degree</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate Degree</SelectItem>
                          <SelectItem value="phd">PhD/Doctoral Program</SelectItem>
                          <SelectItem value="vocational">Vocational Training</SelectItem>
                          <SelectItem value="language">Language Course</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budgetRange">Budget Range</Label>
                        <Select
                          value={formData.budgetRange}
                          onValueChange={(value) => handleSelectChange("budgetRange", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (Under $10,000/year)</SelectItem>
                            <SelectItem value="medium">Medium ($10,000-$20,000/year)</SelectItem>
                            <SelectItem value="high">High ($20,000-$30,000/year)</SelectItem>
                            <SelectItem value="premium">Premium (Above $30,000/year)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeframe">Preferred Timeframe</Label>
                        <Select
                          value={formData.timeframe}
                          onValueChange={(value) => handleSelectChange("timeframe", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                            <SelectItem value="soon">Soon (3-6 months)</SelectItem>
                            <SelectItem value="next-year">Next Year</SelectItem>
                            <SelectItem value="planning">Long-term Planning (1+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accommodationPreference">Accommodation Preference</Label>
                      <Select
                        value={formData.accommodationPreference}
                        onValueChange={(value) => handleSelectChange("accommodationPreference", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your accommodation preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="on-campus">On-campus Housing</SelectItem>
                          <SelectItem value="off-campus">Off-campus Apartment</SelectItem>
                          <SelectItem value="homestay">Homestay with Local Family</SelectItem>
                          <SelectItem value="shared">Shared Accommodation</SelectItem>
                          <SelectItem value="undecided">Undecided</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Emotional & Physical Assessment */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="h-5 w-5 text-[#0e3b62]" />
                      <h2 className="text-xl font-bold text-[#0e3b62]">Health Assessment</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stressLevel">Current Stress Level</Label>
                      <Select
                        value={formData.stressLevel}
                        onValueChange={(value) => handleSelectChange("stressLevel", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your stress level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low (Rarely feel stressed)</SelectItem>
                          <SelectItem value="moderate">Moderate (Occasionally stressed)</SelectItem>
                          <SelectItem value="high">High (Frequently stressed)</SelectItem>
                          <SelectItem value="severe">Severe (Constantly stressed)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sleepQuality">Sleep Quality</Label>
                        <Select
                          value={formData.sleepQuality}
                          onValueChange={(value) => handleSelectChange("sleepQuality", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your sleep quality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="poor">Poor (Less than 5 hours/night)</SelectItem>
                            <SelectItem value="fair">Fair (5-6 hours/night)</SelectItem>
                            <SelectItem value="good">Good (7-8 hours/night)</SelectItem>
                            <SelectItem value="excellent">Excellent (8+ hours/night)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="exerciseFrequency">Exercise Frequency</Label>
                        <Select
                          value={formData.exerciseFrequency}
                          onValueChange={(value) => handleSelectChange("exerciseFrequency", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your exercise frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="never">Never</SelectItem>
                            <SelectItem value="rarely">Rarely (Few times a month)</SelectItem>
                            <SelectItem value="weekly">Weekly (1-2 times/week)</SelectItem>
                            <SelectItem value="regular">Regular (3-5 times/week)</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dietaryRestrictions">Dietary Restrictions or Preferences</Label>
                      <Textarea
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        placeholder="List any dietary restrictions or preferences"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medicalConditions">Medical Conditions (if any)</Label>
                      <Textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        placeholder="List any medical conditions that might affect your studies abroad"
                        value={formData.medicalConditions}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="learningStyle">Preferred Learning Style</Label>
                        <Select
                          value={formData.learningStyle}
                          onValueChange={(value) => handleSelectChange("learningStyle", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your learning style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="visual">Visual (learn through seeing)</SelectItem>
                            <SelectItem value="auditory">Auditory (learn through hearing)</SelectItem>
                            <SelectItem value="reading">Reading/Writing (learn through text)</SelectItem>
                            <SelectItem value="kinesthetic">Kinesthetic (learn through doing)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivationLevel">Motivation Level</Label>
                        <Select
                          value={formData.motivationLevel}
                          onValueChange={(value) => handleSelectChange("motivationLevel", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your motivation level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="very-high">Very High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Payment */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="h-5 w-5 text-[#0e3b62]" />
                      <h2 className="text-xl font-bold text-[#0e3b62]">Payment Information</h2>
                    </div>

                    <div className="rounded-lg border bg-white p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Travel Abroad Program</h3>
                          <p className="text-sm text-gray-500">1-Day Free Trial</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₦0.00</p>
                          <p className="text-xs text-gray-500">Then ₦35,000/month</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 font-medium">Payment Method</h3>
                      <Tabs defaultValue="card">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="card">Credit Card</TabsTrigger>
                          <TabsTrigger value="transfer">Bank Transfer</TabsTrigger>
                        </TabsList>
                        <TabsContent value="card" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              placeholder="John Doe"
                              value={formData.cardName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <Input
                                id="expiryDate"
                                name="expiryDate"
                                placeholder="MM/YY"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                name="cvv"
                                placeholder="123"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="transfer" className="pt-4">
                          <div className="rounded-lg border bg-gray-50 p-4">
                            <h4 className="font-medium">Bank Transfer Details</h4>
                            <div className="mt-2 space-y-2 text-sm">
                              <p>Bank Name: First Bank of Nigeria</p>
                              <p>Account Name: Dunamis Tutors Ltd</p>
                              <p>Account Number: 1234567890</p>
                              <p>Reference: TRAVEL-{formData.email.split("@")[0]}</p>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                              After making the transfer, please email your receipt to payments@dunamistutors.com
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="rounded-lg border bg-gray-50 p-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[#0e3b62]/10 p-2 text-[#0e3b62]">
                          <CreditCard className="h-4 w-4" />
                        </div>
                        <div className="text-sm">
                          <p>
                            Your card will not be charged during the 1-day free trial. You can cancel anytime before the
                            trial ends to avoid being charged.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-between">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  {step < 5 ? (
                    <Button type="button" className="bg-[#0e3b62] hover:bg-[#1a5c96]" onClick={nextStep}>
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-[#0e3b62] hover:bg-[#1a5c96]" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing
                        </>
                      ) : (
                        <>
                          Start Free Trial
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container px-4 py-6 md:px-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Dunamis Tutors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
