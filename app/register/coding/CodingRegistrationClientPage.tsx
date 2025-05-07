"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiStepForm } from "@/components/multi-step-form"

export default function CodingRegistrationClientPage() {
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
      name: "programmingExperience",
      label: "Programming Experience",
      type: "select",
      required: true,
      options: [
        { value: "none", label: "None" },
        { value: "beginner", label: "Beginner" },
        { value: "intermediate", label: "Intermediate" },
        { value: "advanced", label: "Advanced" },
      ],
    },
    { name: "knownLanguages", label: "Programming Languages You Know (if any)", type: "text", required: false },
  ]

  const programFields = [
    {
      name: "codingTrack",
      label: "Coding Track",
      type: "select",
      required: true,
      options: [
        { value: "webDevelopment", label: "Web Development" },
        { value: "mobileDevelopment", label: "Mobile App Development" },
        { value: "dataScience", label: "Data Science & Python" },
        { value: "fullStack", label: "Full Stack Development" },
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
          <h1 className="text-3xl font-bold tracking-tight">Coding Program Registration</h1>
          <p className="text-muted-foreground">
            Register for our Coding program and start your journey to becoming a skilled developer.
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
                <CardTitle>Coding Program</CardTitle>
                <CardDescription>Learn to code and build real-world applications with expert guidance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Program Highlights:</h3>
                  <ul className="ml-6 list-disc space-y-2 pt-2">
                    <li>Hands-on coding projects with real-world applications</li>
                    <li>Mentorship from industry professionals</li>
                    <li>Portfolio development to showcase your skills</li>
                    <li>Job-ready skills and career guidance</li>
                    <li>Collaborative learning environment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Available Tracks:</h3>
                  <div className="grid gap-4 pt-2 md:grid-cols-2">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Web Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">HTML, CSS, JavaScript, React, and modern web frameworks.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Mobile Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">React Native, Flutter, and native app development.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Data Science & Python</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Python programming, data analysis, and machine learning.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Full Stack Development</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Frontend, backend, databases, and deployment.</p>
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
