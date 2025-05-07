"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { BookOpen, ChevronLeft, ChevronRight, CreditCard, Loader2 } from "lucide-react"
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

export default function IELTSRegistration() {
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
    currentLevel: "undergraduate",
    school: "",
    englishProficiency: "intermediate",
    previousExams: [],

    // Program Details
    targetScore: "7",
    studyMode: "online",
    startDate: "",
    examDate: "",

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
    const currentExams = [...formData.previousExams]
    if (checked) {
      currentExams.push(name)
    } else {
      const index = currentExams.indexOf(name)
      if (index !== -1) {
        currentExams.splice(index, 1)
      }
    }
    setFormData((prev) => ({ ...prev, previousExams: currentExams }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setLoading(false)
    router.push("/dashboard")
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="flex min-h-screen flex-col bg-dunamis-light">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="https://i.ibb.co/gLBYv3wv/04369-B17-59-A4-47-CE-B625-5-DB36-C766-F54.jpg"
                alt="Dunamis Tutors Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-dunamis-primary">Dunamis Tutors</span>
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
              <div className="h-10 w-10 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-dunamis-primary" />
              </div>
              <h1 className="text-3xl font-bold text-dunamis-primary">IELTS Preparation Registration</h1>
            </div>
            <p className="text-gray-500 ml-13">
              Complete your registration to start your journey to achieving your target IELTS score with our
              personalized guidance and support.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-dunamis-primary text-white" : "bg-gray-200 text-gray-500"
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
                    step >= 2 ? "bg-dunamis-primary text-white" : "bg-gray-200 text-gray-500"
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
                    step >= 3 ? "bg-dunamis-primary text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
                <span className={step >= 3 ? "font-medium" : "text-gray-500"}>Program Details</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 4 ? "bg-dunamis-primary text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  4
                </div>
                <span className={step >= 4 ? "font-medium" : "text-gray-500"}>Payment</span>
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
                      <BookOpen className="h-5 w-5 text-dunamis-primary" />
                      <h2 className="text-xl font-bold text-dunamis-primary">Personal Information</h2>
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
                      <BookOpen className="h-5 w-5 text-dunamis-primary" />
                      <h2 className="text-xl font-bold text-dunamis-primary">Educational Background</h2>
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
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="school">Current/Last School Attended</Label>
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
                      <Label htmlFor="englishProficiency">Current English Proficiency Level</Label>
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
                          <SelectItem value="fluent">Fluent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Previous English Exams (Select all that apply)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="ielts"
                            checked={formData.previousExams.includes("ielts")}
                            onCheckedChange={(checked) => handleCheckboxChange("ielts", checked as boolean)}
                          />
                          <Label htmlFor="ielts">IELTS</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="toefl"
                            checked={formData.previousExams.includes("toefl")}
                            onCheckedChange={(checked) => handleCheckboxChange("toefl", checked as boolean)}
                          />
                          <Label htmlFor="toefl">TOEFL</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="pte"
                            checked={formData.previousExams.includes("pte")}
                            onCheckedChange={(checked) => handleCheckboxChange("pte", checked as boolean)}
                          />
                          <Label htmlFor="pte">PTE Academic</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cambridge"
                            checked={formData.previousExams.includes("cambridge")}
                            onCheckedChange={(checked) => handleCheckboxChange("cambridge", checked as boolean)}
                          />
                          <Label htmlFor="cambridge">Cambridge English</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Program Details */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-dunamis-primary" />
                      <h2 className="text-xl font-bold text-dunamis-primary">Program Details</h2>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="targetScore">Target IELTS Score</Label>
                      <Select
                        value={formData.targetScore}
                        onValueChange={(value) => handleSelectChange("targetScore", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your target score" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">Band 6.0</SelectItem>
                          <SelectItem value="6.5">Band 6.5</SelectItem>
                          <SelectItem value="7">Band 7.0</SelectItem>
                          <SelectItem value="7.5">Band 7.5</SelectItem>
                          <SelectItem value="8">Band 8.0 or higher</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="studyMode">Preferred Study Mode</Label>
                      <Select
                        value={formData.studyMode}
                        onValueChange={(value) => handleSelectChange("studyMode", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your study mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Online (Virtual Classes)</SelectItem>
                          <SelectItem value="physical">Physical (In-person Classes)</SelectItem>
                          <SelectItem value="hybrid">Hybrid (Online & Physical)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Preferred Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="examDate">Planned Exam Date (if known)</Label>
                      <Input
                        id="examDate"
                        name="examDate"
                        type="date"
                        value={formData.examDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Payment */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="h-5 w-5 text-dunamis-primary" />
                      <h2 className="text-xl font-bold text-dunamis-primary">Payment Information</h2>
                    </div>

                    <div className="rounded-lg border bg-white p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">IELTS Preparation Program</h3>
                          <p className="text-sm text-gray-500">1-Week Free Trial</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₦0.00</p>
                          <p className="text-xs text-gray-500">Then ₦40,000/month</p>
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
                              <p>Reference: IELTS-{formData.email.split("@")[0]}</p>
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
                        <div className="rounded-full bg-dunamis-primary/10 p-2 text-dunamis-primary">
                          <CreditCard className="h-4 w-4" />
                        </div>
                        <div className="text-sm">
                          <p>
                            Your card will not be charged during the 1-week free trial. You can cancel anytime before
                            the trial ends to avoid being charged.
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
                  {step < 4 ? (
                    <Button
                      type="button"
                      className="bg-dunamis-primary hover:bg-dunamis-secondary text-white"
                      onClick={nextStep}
                    >
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-dunamis-primary hover:bg-dunamis-secondary text-white"
                      disabled={loading}
                    >
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
