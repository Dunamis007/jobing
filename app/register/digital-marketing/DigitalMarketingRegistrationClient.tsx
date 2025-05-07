"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiStepForm } from "@/components/multi-step-form"

export default function DigitalMarketingRegistrationClient() {
  const personalFields = [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "dob", label: "Date of Birth", type: "date", required: true },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Prefer not to say" },
      ],
    },
  ]

  const backgroundFields = [
    {
      name: "education",
      label: "Highest Education Level",
      type: "select",
      required: true,
      options: [
        { value: "highSchool", label: "High School" },
        { value: "undergraduate", label: "Undergraduate" },
        { value: "graduate", label: "Graduate" },
        { value: "postgraduate", label: "Post Graduate" },
      ],
    },
    { name: "currentSchool", label: "Current School/Institution", type: "text", required: false },
    {
      name: "marketingExperience",
      label: "Marketing Experience",
      type: "select",
      required: true,
      options: [
        { value: "none", label: "None" },
        { value: "beginner", label: "Beginner" },
        { value: "intermediate", label: "Intermediate" },
        { value: "advanced", label: "Advanced" },
      ],
    },
    { name: "digitalSkills", label: "Digital Skills You Have (if any)", type: "text", required: false },
  ]

  const programFields = [
    {
      name: "marketingTrack",
      label: "Digital Marketing Track",
      type: "select",
      required: true,
      options: [
        { value: "comprehensive", label: "Comprehensive Digital Marketing" },
        { value: "socialMedia", label: "Social Media Marketing" },
        { value: "seo", label: "Search Engine Optimization (SEO)" },
        { value: "contentMarketing", label: "Content Marketing" },
      ],
    },
    { name: "learningGoals", label: "Learning Goals", type: "textarea", required: true },
    {
      name: "preferredSchedule",
      label: "Preferred Schedule",
      type: "select",
      required: true,
      options: [
        { value: "weekdayMorning", label: "Weekday Mornings" },
        { value: "weekdayEvening", label: "Weekday Evenings" },
        { value: "weekend", label: "Weekends" },
        { value: "flexible", label: "Flexible" },
      ],
    },
    { name: "specialRequirements", label: "Special Requirements", type: "textarea", required: false },
  ]

  const paymentFields = [
    {
      name: "paymentMethod",
      label: "Payment Method",
      type: "select",
      required: true,
      options: [
        { value: "card", label: "Credit/Debit Card" },
        { value: "transfer", label: "Bank Transfer" },
        { value: "educoins", label: "EduCoins" },
      ],
    },
    { name: "promoCode", label: "Promo Code (if any)", type: "text", required: false },
    { name: "termsAgreed", label: "I agree to the terms and conditions", type: "checkbox", required: true },
  ]

  const formSections = [
    { title: "Personal Information", fields: personalFields },
    { title: "Background", fields: backgroundFields },
    { title: "Program Details", fields: programFields },
    { title: "Payment", fields: paymentFields },
  ]

  return (
    <div className="container relative flex-1 py-10">
      <div className="mx-auto flex w-full flex-col gap-5 md:max-w-[800px]">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Digital Marketing Registration</h1>
          <p className="text-muted-foreground">
            Register for our Digital Marketing program and start your journey to becoming a digital marketing
            professional.
          </p>
        </div>

        <Tabs defaultValue="registration" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="registration">Registration</TabsTrigger>
            <TabsTrigger value="program-info">Program Information</TabsTrigger>
          </TabsList>

          <TabsContent value="registration" className="mt-6">
            <MultiStepForm sections={formSections} onSubmit={(data) => console.log(data)} />
          </TabsContent>

          <TabsContent value="program-info">
            <Card>
              <CardHeader>
                <CardTitle>Digital Marketing Program</CardTitle>
                <CardDescription>
                  Master the art and science of digital marketing with our comprehensive program
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Program Highlights:</h3>
                  <ul className="ml-6 list-disc space-y-2 pt-2">
                    <li>Comprehensive curriculum covering all digital marketing channels</li>
                    <li>Hands-on projects and real-world case studies</li>
                    <li>Industry-recognized certification upon completion</li>
                    <li>Career guidance and placement assistance</li>
                    <li>Learn from industry professionals with practical experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Available Tracks:</h3>
                  <div className="grid gap-4 pt-2 md:grid-cols-2">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Comprehensive Digital Marketing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Complete overview of all digital marketing channels, strategies, and analytics.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Social Media Marketing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Specialized focus on social media platforms, content creation, and community management.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">SEO</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          In-depth training on search engine optimization techniques and strategies.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Content Marketing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Focus on creating, distributing, and analyzing content for digital marketing.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => document.querySelector('[data-value="registration"]')?.click()}
                >
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
