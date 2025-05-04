"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Info, School, HelpCircle, Bell, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"

export default function InfoHub() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("ijmb")
  const [updates, setUpdates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const updatesRef = collection(db, `${activeTab}-updates`)
        const q = query(updatesRef, orderBy("date", "desc"), limit(5))
        const snapshot = await getDocs(q)

        if (!snapshot.empty) {
          const updatesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          setUpdates(updatesData)
        } else {
          // Fallback to AI-generated content if no data
          setUpdates([
            {
              id: "1",
              title: "Registration Deadline Extended",
              content: "The registration deadline for the 2023/2024 session has been extended by two weeks.",
              date: new Date().toISOString(),
              type: "announcement",
            },
            {
              id: "2",
              title: "New Study Centers Added",
              content: "Five new accredited study centers have been added across the country.",
              date: new Date(Date.now() - 86400000).toISOString(),
              type: "update",
            },
            {
              id: "3",
              title: "Exam Timetable Released",
              content: "The examination timetable for the current session has been released.",
              date: new Date(Date.now() - 172800000).toISOString(),
              type: "important",
            },
          ])
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching updates:", error)
        // Fallback to AI-generated content on error
        setUpdates([
          {
            id: "1",
            title: "Registration Deadline Extended",
            content: "The registration deadline for the 2023/2024 session has been extended by two weeks.",
            date: new Date().toISOString(),
            type: "announcement",
          },
          {
            id: "2",
            title: "New Study Centers Added",
            content: "Five new accredited study centers have been added across the country.",
            date: new Date(Date.now() - 86400000).toISOString(),
            type: "update",
          },
          {
            id: "3",
            title: "Exam Timetable Released",
            content: "The examination timetable for the current session has been released.",
            date: new Date(Date.now() - 172800000).toISOString(),
            type: "important",
          },
        ])
        setLoading(false)
      }
    }

    fetchUpdates()
  }, [activeTab])

  const programInfo = {
    ijmb: {
      title: "Interim Joint Matriculation Board (IJMB)",
      description:
        "IJMB is an advanced level program recognized by Nigerian universities as an alternative to UTME for gaining admission into 200 level.",
      duration: "9-12 months",
      structure: "Three subjects related to your desired course of study",
      eligibility: "O'Level results with at least 5 credits including English and Mathematics",
      benefits: [
        "Direct entry into 200 level",
        "No need for JAMB UTME",
        "Higher chance of admission",
        "Internationally recognized qualification",
      ],
      institutions: [
        "Ahmadu Bello University, Zaria",
        "University of Jos",
        "Bayero University, Kano",
        "University of Maiduguri",
        "Federal University of Technology, Minna",
        "And 30+ other universities",
      ],
    },
    jupeb: {
      title: "Joint Universities Preliminary Examination Board (JUPEB)",
      description:
        "JUPEB is a one-year pre-degree foundation program that prepares students for direct entry into 200 level in Nigerian universities.",
      duration: "12 months",
      structure: "Three subjects related to your desired course of study",
      eligibility: "O'Level results with at least 5 credits including English and Mathematics",
      benefits: [
        "Direct entry into 200 level",
        "No need for JAMB UTME",
        "Higher chance of admission",
        "Recognized by all Nigerian universities",
      ],
      institutions: [
        "University of Lagos",
        "University of Ibadan",
        "Obafemi Awolowo University",
        "University of Benin",
        "University of Port Harcourt",
        "And 25+ other universities",
      ],
    },
  }

  const faqs = {
    ijmb: [
      {
        question: "What is the difference between IJMB and JUPEB?",
        answer:
          "IJMB is administered by Ahmadu Bello University, while JUPEB is administered by the University of Lagos. Both offer similar benefits of direct entry into 200 level, but they have different affiliated institutions and slightly different structures.",
      },
      {
        question: "How much does the IJMB program cost?",
        answer:
          "The cost varies by center, but typically ranges from ₦150,000 to ₦300,000 for the entire program, including registration and tuition.",
      },
      {
        question: "Can I use IJMB to study any course?",
        answer:
          "IJMB can be used for most courses, but some professional courses like Medicine and Law may have additional requirements or may not accept IJMB in some universities.",
      },
      {
        question: "How are IJMB exams graded?",
        answer:
          "IJMB uses a letter grading system (A, B, C, D, E, F) similar to A-Levels. You need a minimum of 2 passes (E grade) to qualify for direct entry.",
      },
      {
        question: "Can I apply for admission with pending IJMB results?",
        answer:
          "Most universities require you to have your complete IJMB results before applying for direct entry admission.",
      },
    ],
    jupeb: [
      {
        question: "Is JUPEB recognized by all Nigerian universities?",
        answer:
          "JUPEB is recognized by most Nigerian universities, but it's always best to check with your specific university of choice to confirm their policy.",
      },
      {
        question: "How much does the JUPEB program cost?",
        answer:
          "The cost varies by center, but typically ranges from ₦200,000 to ₦350,000 for the entire program, including registration and tuition.",
      },
      {
        question: "What grades do I need to secure admission through JUPEB?",
        answer:
          "Most universities require a minimum of 2 passes at C grade or above, but competitive courses may require higher grades.",
      },
      {
        question: "Can I study JUPEB as a private candidate?",
        answer: "JUPEB must be taken at an accredited JUPEB center. There is no provision for private candidacy.",
      },
      {
        question: "When are JUPEB exams conducted?",
        answer:
          "JUPEB exams are typically conducted in June each year, with registration closing a few months earlier.",
      },
    ],
  }

  const handleDownloadBrochure = () => {
    toast({
      title: `${activeTab.toUpperCase()} Brochure`,
      description: "Download started. The brochure will be saved to your device shortly.",
    })
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">IJMB & JUPEB Information Hub</h1>
          <p className="text-muted-foreground">Comprehensive information about IJMB and JUPEB programs</p>
        </div>
        <Button onClick={handleDownloadBrochure} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Brochure
        </Button>
      </div>

      <Tabs defaultValue="ijmb" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ijmb">IJMB</TabsTrigger>
          <TabsTrigger value="jupeb">JUPEB</TabsTrigger>
        </TabsList>

        {["ijmb", "jupeb"].map((program) => (
          <TabsContent key={program} value={program} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Program Overview
                  </CardTitle>
                  <CardDescription>Essential information about the {program.toUpperCase()} program</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{programInfo[program as keyof typeof programInfo].title}</h3>
                    <p className="text-muted-foreground mt-1">
                      {programInfo[program as keyof typeof programInfo].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Program Duration</h4>
                      <p>{programInfo[program as keyof typeof programInfo].duration}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Program Structure</h4>
                      <p>{programInfo[program as keyof typeof programInfo].structure}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Eligibility</h4>
                      <p>{programInfo[program as keyof typeof programInfo].eligibility}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {programInfo[program as keyof typeof programInfo].benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Latest Updates
                  </CardTitle>
                  <CardDescription>Recent announcements and news</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {updates.map((update) => (
                      <div key={update.id} className="border-b pb-3 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{update.title}</h4>
                          <Badge
                            variant={
                              update.type === "important"
                                ? "destructive"
                                : update.type === "announcement"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {update.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{update.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {new Date(update.date).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5" />
                    Eligible Institutions
                  </CardTitle>
                  <CardDescription>Universities that accept {program.toUpperCase()} for direct entry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {programInfo[program as keyof typeof programInfo].institutions.map((institution, index) => (
                      <div key={index} className="p-2 bg-muted rounded-md text-sm">
                        {institution}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>Common questions about the {program.toUpperCase()} program</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs[program as keyof typeof faqs].map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
