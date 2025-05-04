"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { School, GraduationCap, BookOpen, Calendar, CheckCircle, HelpCircle, ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function AdmissionGuide() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("ijmb")
  const [selectedUniversity, setSelectedUniversity] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")

  const admissionTimeline = {
    ijmb: [
      {
        title: "Registration",
        description: "Register for the IJMB program at an accredited center",
        timeframe: "January - March",
        status: "current",
      },
      {
        title: "Classes Begin",
        description: "Attend classes and prepare for examinations",
        timeframe: "April - December",
        status: "upcoming",
      },
      {
        title: "Examinations",
        description: "Sit for IJMB examinations",
        timeframe: "January - February (following year)",
        status: "upcoming",
      },
      {
        title: "Results Released",
        description: "IJMB results are released",
        timeframe: "March - April (following year)",
        status: "upcoming",
      },
      {
        title: "University Application",
        description: "Apply for direct entry admission to universities",
        timeframe: "April - June (following year)",
        status: "upcoming",
      },
      {
        title: "Admission",
        description: "Receive admission into 200 level",
        timeframe: "July - September (following year)",
        status: "upcoming",
      },
    ],
    jupeb: [
      {
        title: "Registration",
        description: "Register for the JUPEB program at an accredited center",
        timeframe: "August - October",
        status: "current",
      },
      {
        title: "Classes Begin",
        description: "Attend classes and prepare for examinations",
        timeframe: "November - May (following year)",
        status: "upcoming",
      },
      {
        title: "Examinations",
        description: "Sit for JUPEB examinations",
        timeframe: "June (following year)",
        status: "upcoming",
      },
      {
        title: "Results Released",
        description: "JUPEB results are released",
        timeframe: "July - August (following year)",
        status: "upcoming",
      },
      {
        title: "University Application",
        description: "Apply for direct entry admission to universities",
        timeframe: "August - September (following year)",
        status: "upcoming",
      },
      {
        title: "Admission",
        description: "Receive admission into 200 level",
        timeframe: "October - November (following year)",
        status: "upcoming",
      },
    ],
  }

  const universities = {
    ijmb: [
      "Ahmadu Bello University, Zaria",
      "University of Jos",
      "Bayero University, Kano",
      "University of Maiduguri",
      "Federal University of Technology, Minna",
      "University of Ilorin",
      "University of Benin",
      "Obafemi Awolowo University",
    ],
    jupeb: [
      "University of Lagos",
      "University of Ibadan",
      "Obafemi Awolowo University",
      "University of Benin",
      "University of Port Harcourt",
      "Lagos State University",
      "University of Ilorin",
      "Federal University of Technology, Akure",
    ],
  }

  const courses = [
    "Medicine and Surgery",
    "Law",
    "Engineering",
    "Computer Science",
    "Accounting",
    "Economics",
    "Mass Communication",
    "Pharmacy",
    "Architecture",
    "Business Administration",
  ]

  const grades = ["AAA", "AAB", "ABB", "BBB", "BBC", "BCC", "CCC", "CCD", "CDD", "DDD"]

  const admissionRequirements = {
    ijmb: {
      "Medicine and Surgery": {
        subjects: ["Biology", "Chemistry", "Physics"],
        minGrade: "AAB",
        additionalRequirements: "O'Level with at least B3 in Biology, Chemistry, Physics, English, and Mathematics",
        acceptingUniversities: ["Ahmadu Bello University, Zaria", "University of Jos", "Bayero University, Kano"],
        admissionChance: {
          AAA: 85,
          AAB: 70,
          ABB: 50,
          BBB: 30,
          BBC: 15,
          BCC: 5,
          CCC: 0,
          CCD: 0,
          CDD: 0,
          DDD: 0,
        },
      },
      Law: {
        subjects: ["Government", "Literature", "Economics"],
        minGrade: "ABB",
        additionalRequirements: "O'Level with at least C4 in English, Literature, and Government",
        acceptingUniversities: ["Ahmadu Bello University, Zaria", "University of Jos", "University of Benin"],
        admissionChance: {
          AAA: 90,
          AAB: 80,
          ABB: 65,
          BBB: 50,
          BBC: 35,
          BCC: 20,
          CCC: 10,
          CCD: 5,
          CDD: 0,
          DDD: 0,
        },
      },
      Engineering: {
        subjects: ["Mathematics", "Physics", "Chemistry"],
        minGrade: "BBB",
        additionalRequirements: "O'Level with at least C4 in Mathematics, Physics, Chemistry, and English",
        acceptingUniversities: [
          "Ahmadu Bello University, Zaria",
          "Federal University of Technology, Minna",
          "University of Benin",
        ],
        admissionChance: {
          AAA: 95,
          AAB: 85,
          ABB: 75,
          BBB: 60,
          BBC: 45,
          BCC: 30,
          CCC: 15,
          CCD: 5,
          CDD: 0,
          DDD: 0,
        },
      },
    },
    jupeb: {
      "Medicine and Surgery": {
        subjects: ["Biology", "Chemistry", "Physics"],
        minGrade: "AAA",
        additionalRequirements: "O'Level with at least B3 in Biology, Chemistry, Physics, English, and Mathematics",
        acceptingUniversities: ["University of Lagos", "University of Ibadan", "Obafemi Awolowo University"],
        admissionChance: {
          AAA: 80,
          AAB: 60,
          ABB: 40,
          BBB: 20,
          BBC: 10,
          BCC: 0,
          CCC: 0,
          CCD: 0,
          CDD: 0,
          DDD: 0,
        },
      },
      Law: {
        subjects: ["Government", "Literature", "Economics"],
        minGrade: "AAB",
        additionalRequirements: "O'Level with at least C4 in English, Literature, and Government",
        acceptingUniversities: ["University of Lagos", "University of Ibadan", "University of Benin"],
        admissionChance: {
          AAA: 90,
          AAB: 75,
          ABB: 60,
          BBB: 45,
          BBC: 30,
          BCC: 15,
          CCC: 5,
          CCD: 0,
          CDD: 0,
          DDD: 0,
        },
      },
      Engineering: {
        subjects: ["Mathematics", "Physics", "Chemistry"],
        minGrade: "ABB",
        additionalRequirements: "O'Level with at least C4 in Mathematics, Physics, Chemistry, and English",
        acceptingUniversities: [
          "University of Lagos",
          "Federal University of Technology, Akure",
          "University of Benin",
        ],
        admissionChance: {
          AAA: 95,
          AAB: 85,
          ABB: 70,
          BBB: 55,
          BBC: 40,
          BCC: 25,
          CCC: 10,
          CCD: 5,
          CDD: 0,
          DDD: 0,
        },
      },
    },
  }

  const faqs = {
    ijmb: [
      {
        question: "Can I use IJMB to study Medicine?",
        answer:
          "Yes, you can use IJMB to study Medicine, but you need excellent grades (typically AAA or AAB) in Biology, Chemistry, and Physics. Additionally, not all universities accept IJMB for Medicine, so check with your preferred institution.",
      },
      {
        question: "How long does the IJMB program take?",
        answer: "The IJMB program typically takes 9-12 months to complete, including the examination period.",
      },
      {
        question: "Can I apply to any university with IJMB?",
        answer:
          "While IJMB is widely accepted, not all universities accept it for all courses. It's best to check with your preferred university about their specific requirements for IJMB candidates.",
      },
      {
        question: "What happens if I don't get the required grades?",
        answer:
          "If you don't achieve the required grades, you may still be considered for related courses with lower requirements, or you might need to consider other admission pathways.",
      },
      {
        question: "Can I combine IJMB with JAMB UTME?",
        answer:
          "Yes, you can take both IJMB and JAMB UTME to increase your chances of admission. If you succeed with IJMB, you can gain direct entry into 200 level, otherwise, you can use your UTME score for 100 level admission.",
      },
    ],
    jupeb: [
      {
        question: "Is JUPEB recognized by all Nigerian universities?",
        answer:
          "JUPEB is recognized by most Nigerian universities, but it's always best to check with your specific university of choice to confirm their policy on JUPEB for your desired course.",
      },
      {
        question: "What's the difference between JUPEB and IJMB?",
        answer:
          "Both programs offer similar benefits, but JUPEB is administered by the University of Lagos, while IJMB is administered by Ahmadu Bello University. They have different affiliated institutions and slightly different structures.",
      },
      {
        question: "Can I use JUPEB to study competitive courses like Medicine?",
        answer:
          "Yes, but you typically need excellent grades (AAA in most cases) and meet other requirements. Competition is high for such courses.",
      },
      {
        question: "Do I need to take JAMB if I have JUPEB?",
        answer:
          "No, JUPEB qualifies you for direct entry admission without JAMB UTME. However, some students take both to increase their chances.",
      },
      {
        question: "What if my preferred university doesn't accept JUPEB?",
        answer:
          "If your preferred university doesn't accept JUPEB, you may need to consider other universities that do, or explore alternative admission pathways like JAMB UTME.",
      },
    ],
  }

  const handleCheckAdmissionChance = () => {
    if (!selectedCourse || !selectedGrade) {
      toast({
        title: "Incomplete Information",
        description: "Please select both a course and your expected grade.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would check against actual data
    // For now, we'll use our predefined data
    const courseData =
      admissionRequirements[activeTab as keyof typeof admissionRequirements][
        selectedCourse as keyof typeof admissionRequirements.ijmb
      ]

    if (!courseData) {
      toast({
        title: "Course Not Found",
        description: "We don't have data for this course yet. Please try another course.",
        variant: "destructive",
      })
      return
    }

    const chance = courseData.admissionChance[selectedGrade as keyof typeof courseData.admissionChance]

    toast({
      title: "Admission Chance",
      description: `With ${selectedGrade} in ${courseData.subjects.join(", ")}, your chance of admission for ${selectedCourse} is approximately ${chance}%.`,
      variant: chance >= 50 ? "default" : "destructive",
    })
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admission Guide</h1>
        <p className="text-muted-foreground">Your pathway to university admission through IJMB & JUPEB</p>
      </div>

      <Tabs defaultValue="ijmb" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ijmb">IJMB Admission</TabsTrigger>
          <TabsTrigger value="jupeb">JUPEB Admission</TabsTrigger>
        </TabsList>

        {["ijmb", "jupeb"].map((program) => (
          <TabsContent key={program} value={program} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Admission Timeline
                  </CardTitle>
                  <CardDescription>
                    Key dates and milestones in the {program.toUpperCase()} admission process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="relative border-l border-muted">
                    {admissionTimeline[program as keyof typeof admissionTimeline].map((step, index) => (
                      <li key={index} className="mb-6 ml-6 last:mb-0">
                        <span
                          className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                            step.status === "current"
                              ? "bg-primary text-primary-foreground"
                              : step.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {step.status === "current" ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : step.status === "completed" ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-xs">{index + 1}</span>
                          )}
                        </span>
                        <h3 className="flex items-center text-lg font-semibold">
                          {step.title}
                          {step.status === "current" && (
                            <Badge variant="default" className="ml-2">
                              Current
                            </Badge>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">{step.timeframe}</p>
                        <p className="text-sm">{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5" />
                    Admission Chance Calculator
                  </CardTitle>
                  <CardDescription>Check your chances of admission</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course</Label>
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger id="course">
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">Expected Grade</Label>
                    <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map((grade) => (
                          <SelectItem key={grade} value={grade}>
                            {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={handleCheckAdmissionChance} className="w-full">
                    Check Admission Chance
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Universities Accepting {program.toUpperCase()}
                </CardTitle>
                <CardDescription>
                  Institutions that accept {program.toUpperCase()} for direct entry admission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {universities[program as keyof typeof universities].map((university, index) => (
                    <div key={index} className="p-2 bg-muted rounded-md text-sm">
                      {university}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Requirements
                </CardTitle>
                <CardDescription>Subject combinations and grade requirements for popular courses</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {Object.keys(admissionRequirements[program as keyof typeof admissionRequirements]).map(
                    (course, index) => {
                      const courseData =
                        admissionRequirements[program as keyof typeof admissionRequirements][
                          course as keyof typeof admissionRequirements.ijmb
                        ]
                      return (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{course}</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <div>
                              <p className="text-sm font-medium">Required Subjects:</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {courseData.subjects.map((subject, i) => (
                                  <Badge key={i} variant="secondary">
                                    {subject}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium">Minimum Grade:</p>
                              <p className="text-sm">{courseData.minGrade}</p>
                            </div>

                            <div>
                              <p className="text-sm font-medium">Additional Requirements:</p>
                              <p className="text-sm">{courseData.additionalRequirements}</p>
                            </div>

                            <div>
                              <p className="text-sm font-medium">Accepting Universities:</p>
                              <ul className="list-disc pl-5 text-sm">
                                {courseData.acceptingUniversities.map((uni, i) => (
                                  <li key={i}>{uni}</li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <p className="text-sm font-medium">Admission Chances by Grade:</p>
                              <div className="space-y-2 mt-2">
                                {Object.entries(courseData.admissionChance)
                                  .filter(([_, chance]) => chance > 0)
                                  .map(([grade, chance], i) => (
                                    <div key={i} className="space-y-1">
                                      <div className="flex justify-between text-xs">
                                        <span>{grade}</span>
                                        <span>{chance}%</span>
                                      </div>
                                      <Progress value={chance} className="h-2" />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    },
                  )}
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
                <CardDescription>Common questions about {program.toUpperCase()} admission</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs[program as keyof typeof faqs].map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full flex items-center gap-2">
                  Ask a Question
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
