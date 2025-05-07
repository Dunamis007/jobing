"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiStepForm } from "@/components/multi-step-form"

export default function JAMBRegistrationClient() {
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
      label: "Current Education Level",
      type: "select",
      required: true,
      options: [
        { value: "sss1", label: "SSS 1" },
        { value: "sss2", label: "SSS 2" },
        { value: "sss3", label: "SSS 3" },
        { value: "graduate", label: "Secondary School Graduate" },
      ],
    },
    { name: "currentSchool", label: "Current/Previous School", type: "text", required: false },
    { name: "jambProfile", label: "JAMB Profile Code (if available)", type: "text", required: false },
    {
      name: "previousJAMB",
      label: "Previous JAMB Experience",
      type: "select",
      required: true,
      options: [
        { value: "none", label: "None" },
        { value: "once", label: "Taken Once" },
        { value: "multiple", label: "Taken Multiple Times" },
      ],
    },
  ]

  const programFields = [
    {
      name: "jambSubjects",
      label: "JAMB Subject Combination",
      type: "select",
      required: true,
      options: [
        { value: "scienceCombo", label: "Science Combination" },
        { value: "artsCombo", label: "Arts Combination" },
        { value: "socialScienceCombo", label: "Social Science Combination" },
        { value: "commerceCombo", label: "Commercial Combination" },
      ],
    },
    {
      name: "preferredUniversity",
      label: "Preferred University",
      type: "text",
      required: true,
    },
    {
      name: "preferredCourse",
      label: "Preferred Course of Study",
      type: "text",
      required: true,
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
          <h1 className="text-3xl font-bold tracking-tight">JAMB Registration</h1>
          <p className="text-muted-foreground">
            Register for our JAMB preparation program and excel in your UTME examinations.
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
                <CardTitle>JAMB Preparation Program</CardTitle>
                <CardDescription>
                  Comprehensive preparation for the Joint Admissions and Matriculation Board (UTME) examinations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Program Highlights:</h3>
                  <ul className="ml-6 list-disc space-y-2 pt-2">
                    <li>Comprehensive coverage of all JAMB subjects</li>
                    <li>Regular mock examinations under exam conditions</li>
                    <li>Personalized study plans and progress tracking</li>
                    <li>Expert guidance on exam techniques and time management</li>
                    <li>Access to extensive study materials and past questions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Subject Combinations:</h3>
                  <div className="grid gap-4 pt-2 md:grid-cols-2">
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Science Combination</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          English, Mathematics, Physics, Chemistry/Biology for science and engineering courses.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Arts Combination</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          English, Literature, Government, CRS/History for arts and humanities courses.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Social Science</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          English, Mathematics, Economics, Government for business and social science courses.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-primary/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Commercial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          English, Mathematics, Economics, Commerce/Accounting for business-related courses.
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
