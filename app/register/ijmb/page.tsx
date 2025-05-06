"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, ChevronLeft, ChevronRight, CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IJMBRegistration() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "lagos",
    subjects: [],
    learningStyle: "visual",
    zodiacSign: "",
    studyPlan: "moderate",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
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
              <BookOpen className="h-6 w-6 text-blue-700" />
              <span className="text-xl font-bold">Dunamis Tutors</span>
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
            <h1 className="text-3xl font-bold">IJMB Program Registration</h1>
            <p className="text-gray-500">
              Complete your registration to start your IJMB preparation journey with our gamified learning platform.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-500"
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
                    step >= 2 ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  2
                </div>
                <span className={step >= 2 ? "font-medium" : "text-gray-500"}>Learning Preferences</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 3 ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
                <span className={step >= 3 ? "font-medium" : "text-gray-500"}>Payment</span>
              </div>
              <Separator className="mx-4 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    step >= 4 ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  4
                </div>
                <span className={step >= 4 ? "font-medium" : "text-gray-500"}>Confirmation</span>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
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
                      <Label htmlFor="state">State of Residence</Label>
                      <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="rivers">Rivers</SelectItem>
                          <SelectItem value="kano">Kano</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Preferred Learning Style</Label>
                      <RadioGroup
                        value={formData.learningStyle}
                        onValueChange={(value) => handleSelectChange("learningStyle", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="visual" id="visual" />
                          <Label htmlFor="visual">Visual (learn through seeing)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="auditory" id="auditory" />
                          <Label htmlFor="auditory">Auditory (learn through hearing)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="reading" id="reading" />
                          <Label htmlFor="reading">Reading/Writing (learn through text)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="kinesthetic" id="kinesthetic" />
                          <Label htmlFor="kinesthetic">Kinesthetic (learn through doing)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zodiacSign">Zodiac Sign (for personalization)</Label>
                      <Select
                        value={formData.zodiacSign}
                        onValueChange={(value) => handleSelectChange("zodiacSign", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your zodiac sign" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aries">Aries</SelectItem>
                          <SelectItem value="taurus">Taurus</SelectItem>
                          <SelectItem value="gemini">Gemini</SelectItem>
                          <SelectItem value="cancer">Cancer</SelectItem>
                          <SelectItem value="leo">Leo</SelectItem>
                          <SelectItem value="virgo">Virgo</SelectItem>
                          <SelectItem value="libra">Libra</SelectItem>
                          <SelectItem value="scorpio">Scorpio</SelectItem>
                          <SelectItem value="sagittarius">Sagittarius</SelectItem>
                          <SelectItem value="capricorn">Capricorn</SelectItem>
                          <SelectItem value="aquarius">Aquarius</SelectItem>
                          <SelectItem value="pisces">Pisces</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Study Plan</Label>
                      <RadioGroup
                        value={formData.studyPlan}
                        onValueChange={(value) => handleSelectChange("studyPlan", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="relaxed" id="relaxed" />
                          <Label htmlFor="relaxed">Relaxed (2-3 hours/week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="moderate" />
                          <Label htmlFor="moderate">Moderate (4-6 hours/week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intensive" id="intensive" />
                          <Label htmlFor="intensive">Intensive (7+ hours/week)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="rounded-lg border bg-white p-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">IJMB Program</h3>
                          <p className="text-sm text-gray-500">1-Day Free Trial</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₦0.00</p>
                          <p className="text-xs text-gray-500">Then ₦30,000/month</p>
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
                              <p>Reference: IJMB-{formData.email.split("@")[0]}</p>
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
                        <div className="rounded-full bg-blue-100 p-2 text-blue-700">
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

                {step === 4 && (
                  <div className="space-y-6 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Registration Complete!</h2>
                    <p className="text-gray-500">
                      Thank you for registering for our IJMB Program. Your NeuroPulse Dashboard is being prepared.
                    </p>
                    <Button
                      type="button"
                      className="w-full bg-blue-700 hover:bg-blue-800"
                      onClick={() => router.push("/dashboard/neuropulse")}
                    >
                      Go to NeuroPulse Dashboard
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {step < 4 && (
                  <div className="mt-6 flex justify-between">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    {step < 3 ? (
                      <Button type="button" className="bg-blue-700 hover:bg-blue-800" onClick={nextStep}>
                        Continue
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="bg-blue-700 hover:bg-blue-800"
                        onClick={nextStep}
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
                )}
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
