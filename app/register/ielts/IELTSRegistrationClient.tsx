"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiStepForm } from "@/components/multi-step-form"

export default function IELTSRegistrationClient() {
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
      name: "englishProficiency",
      label: "Current English Proficiency Level",
      type: "select",
      required: true,
      options: [
        { value: "beginner", label: "Beginner" },
        { value: "intermediate", label: "Intermediate" },
        { value: "advanced", label: "Advanced" },
        { value: "fluent", label: "Fluent" },
      ],
    },
    {
      name: "previousIELTS",
      label: "Previous IELTS Experience",
      type: "select",
      required: true,
      options: [
        { value: "none", label: "None" },
        { value: "attempted", label: "Attempted but not achieved target score" },
        { value: "achieved", label: "Achieved target score before" },
      ],
    },
  ]

  const programFields = [
    {
      name: "ieltsType",
      label: "IELTS Test Type",
      type: "select",
      required: true,
      options: [
        { value: "academic", label: "IELTS Academic" },
        { value: "general", label: "IELTS General Training" },
      ],
    },
    {
      name: "targetScore",
      label: "Target Band Score",
      type: "select",
      required: true,
      options: [
        { value: "6", label: "Band 6" },
        { value: "6.5", label: "Band 6.5" },
        { value: "7", label: "Band 7" },
        { value: "7.5", label: "Band 7.5" },
        { value: "8", label: "Band 8+" },
      ],
    },
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
          <h1 className="text-3xl font-bold tracking-tight">IELTS Registration</h1>
          <p className="text-muted-foreground">
            Register for our IELTS preparation program and achieve your target band score.
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
                <CardTitle>IELTS Preparation Program</CardTitle>
                <CardDescription>
                  Comprehensive preparation for the International English Language Testing System (IELTS)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Program Highlights:</h3>
                  <ul className="ml-6 list-disc space-y-2 pt-2">
                    <li>Comprehensive coverage of all four IELTS skills: Reading, Writing, Listening, and Speaking</li>
                    <li>Regular mock tests under exam conditions</li>
                    <li>Personalized feedback and improvement strategies</li>
                    <li>Small class sizes for individualized attention</li>
                    <li>Experienced IELTS instructors with proven track records</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Available Programs:</h3>
                  <div className="grid gap-4 pt-2 md:grid-cols-2">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">IELTS Academic</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          For those seeking to study at undergraduate or postgraduate levels, or for professional
                          registration.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">IELTS General Training</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          For those migrating to English-speaking countries or seeking work experience or training
                          programs.
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
