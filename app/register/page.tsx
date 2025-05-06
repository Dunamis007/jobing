"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, ChevronRight, PlaneTakeoff, GraduationCap, Code, LineChart, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AcademicLevelSelector } from "@/components/academic-level-selector"
import { Badge } from "@/components/ui/badge"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [academicLevel, setAcademicLevel] = useState("")

  const handleAcademicLevelSelect = (level: string) => {
    setAcademicLevel(level)
  }

  const handleContinue = () => {
    setStep(2)
  }

  const programs = [
    {
      id: "ijmb",
      title: "IJMB Program",
      description:
        "Direct entry into 200 level with comprehensive preparation for Interim Joint Matriculation Board examinations.",
      icon: GraduationCap,
      popular: false,
      keywords: "IJMB program, direct entry, 200 level admission, university preparation",
    },
    {
      id: "jupeb",
      title: "JUPEB Program",
      description:
        "Fast-track university admission with structured learning paths and practice tests for Joint Universities Preliminary Examinations Board.",
      icon: BookOpen,
      popular: false,
      keywords: "JUPEB program, university admission, preliminary examinations, fast-track degree",
    },
    {
      id: "ielts",
      title: "IELTS Preparation",
      description: "Comprehensive preparation for IELTS examinations with personalized study plans and practice tests.",
      icon: BookOpen,
      popular: false,
      keywords: "IELTS preparation, English proficiency, study abroad, language test",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Learn in-demand digital marketing skills with hands-on projects, industry certifications, and personalized coaching.",
      icon: LineChart,
      popular: false,
      keywords: "digital marketing courses, SEO training, social media marketing, online advertising",
    },
    {
      id: "coding",
      title: "Coding Program",
      description:
        "Learn programming fundamentals and advanced concepts with project-based learning and mentor support.",
      icon: Code,
      popular: false,
      keywords: "coding bootcamp, programming courses, web development, software engineering",
    },
    {
      id: "travel-abroad",
      title: "Travel Abroad Program",
      description:
        "Comprehensive guidance for studying abroad, including university selection, application assistance, and visa support.",
      icon: PlaneTakeoff,
      popular: true,
      keywords: "study abroad, international education, university application, visa assistance",
    },
    {
      id: "ai-tutoring",
      title: "AI Tutoring",
      description:
        "Get personalized help with difficult concepts through our AI-powered tutoring system available 24/7.",
      icon: Brain,
      popular: false,
      keywords: "AI tutoring, personalized learning, academic support, 24/7 assistance",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
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

      <main className="flex-1 bg-gray-50">
        <div className="container py-12">
          {step === 1 ? (
            <div className="max-w-md mx-auto">
              <div className="mb-8 space-y-2 text-center">
                <h1 className="text-3xl font-bold text-[#0e3b62]">Welcome to Dunamis Tutors</h1>
                <p className="text-gray-500">
                  Let's start by understanding your current academic level to personalize your learning journey.
                </p>
              </div>

              <AcademicLevelSelector onSelect={handleAcademicLevelSelect} onContinue={handleContinue} />
            </div>
          ) : (
            <>
              <div className="mb-8 space-y-2">
                <h1 className="text-3xl font-bold text-[#0e3b62]">Choose Your Program</h1>
                <p className="text-gray-500">
                  Select the program you're interested in to begin your personalized learning journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programs.map((program) => (
                  <Card
                    key={program.id}
                    className="border border-gray-200 hover:border-[#0e3b62] hover:shadow-md transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                          <program.icon className="h-6 w-6 text-[#0e3b62]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold text-[#0e3b62]">{program.title}</h2>
                            {program.popular && <Badge className="bg-[#0e3b62]">Popular</Badge>}
                          </div>
                          <p className="text-sm text-gray-500">Personalized learning path</p>
                        </div>
                      </div>
                      <p className="mb-6 text-gray-600">{program.description}</p>
                      <Link href={`/register/${program.id}`}>
                        <Button className="w-full bg-[#0e3b62] hover:bg-[#1a5c96]">
                          Select {program.title}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>

                      {/* Hidden SEO keywords */}
                      <div className="hidden">
                        <p>{program.keywords}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
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
