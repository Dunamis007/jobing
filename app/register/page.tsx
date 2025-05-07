import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, BarChart, Brain, GraduationCap, PlaneTakeoff, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Register for Programs | Dunamis Tutors",
  description: "Register for educational programs at Dunamis Tutors",
}

export default function RegisterPage() {
  const programs = [
    {
      title: "IJMB Program",
      description: "Gain direct entry into 200 level in Nigerian universities",
      icon: <GraduationCap className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/ijmb",
    },
    {
      title: "JUPEB Program",
      description: "Prepare for direct entry into universities",
      icon: <BookOpen className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/jupeb",
    },
    {
      title: "JAMB Program",
      description: "Excel in your JAMB examinations",
      icon: <GraduationCap className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/jamb",
    },
    {
      title: "IELTS Preparation",
      description: "Achieve your target IELTS score",
      icon: <Globe className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/ielts",
    },
    {
      title: "Digital Marketing",
      description: "Master the art and science of digital marketing",
      icon: <BarChart className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/digital-marketing",
    },
    {
      title: "Coding Program",
      description: "Learn to code and build your tech career",
      icon: <Code className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/coding",
    },
    {
      title: "AI Tutoring",
      description: "Experience personalized learning with AI",
      icon: <Brain className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/ai-tutoring",
    },
    {
      title: "Travel Abroad",
      description: "Get guidance for studying abroad",
      icon: <PlaneTakeoff className="h-8 w-8 text-dunamis-primary" />,
      href: "/register/travel-abroad",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-dunamis-primary">Register for a Program</h1>
        <p className="mt-2 text-muted-foreground">
          Choose from our wide range of educational programs designed to help you succeed.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {programs.map((program) => (
          <Card key={program.href} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="mb-2">{program.icon}</div>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={program.href} className="w-full">
                <Button className="w-full bg-dunamis-primary hover:bg-dunamis-secondary">Register Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
