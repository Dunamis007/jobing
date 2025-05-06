import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, GraduationCap, LineChart, Code, PlaneTakeoff, Brain } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      id: "ijmb",
      title: "IJMB Program",
      description:
        "Direct entry into 200 level with comprehensive preparation for Interim Joint Matriculation Board examinations.",
      icon: GraduationCap,
      popular: false,
    },
    {
      id: "jupeb",
      title: "JUPEB Program",
      description:
        "Fast-track university admission with structured learning paths and practice tests for Joint Universities Preliminary Examinations Board.",
      icon: BookOpen,
      popular: false,
    },
    {
      id: "jamb",
      title: "JAMB Program",
      description:
        "Comprehensive preparation for the Joint Admissions and Matriculation Board examination with expert guidance and practice tests.",
      icon: GraduationCap,
      popular: false,
    },
    {
      id: "ielts",
      title: "IELTS Preparation",
      description: "Comprehensive preparation for IELTS examinations with personalized study plans and practice tests.",
      icon: BookOpen,
      popular: false,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Learn in-demand digital marketing skills with hands-on projects, industry certifications, and personalized coaching.",
      icon: LineChart,
      popular: false,
    },
    {
      id: "coding",
      title: "Coding Program",
      description:
        "Learn programming fundamentals and advanced concepts with project-based learning and mentor support.",
      icon: Code,
      popular: false,
    },
    {
      id: "travel-abroad",
      title: "Travel Abroad Program",
      description:
        "Comprehensive guidance for studying abroad, including university selection, application assistance, and visa support.",
      icon: PlaneTakeoff,
      popular: true,
    },
    {
      id: "ai-tutoring",
      title: "AI Tutoring",
      description:
        "Get personalized help with difficult concepts through our AI-powered tutoring system available 24/7.",
      icon: Brain,
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 bg-dunamis-light">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dunamis-primary/10 px-3 py-1 text-sm text-dunamis-primary">
                  Our Programs
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-primary">
                  Comprehensive Learning Programs
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our wide range of programs designed to help you achieve your academic and career goals.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  className="border border-gray-200 hover:border-dunamis-primary hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-dunamis-primary/10 flex items-center justify-center">
                        <program.icon className="h-6 w-6 text-dunamis-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dunamis-primary">{program.title}</h3>
                        <p className="text-sm text-gray-500">Personalized learning path</p>
                      </div>
                    </div>
                    <p className="mb-6 text-gray-600">{program.description}</p>
                    {program.id === "travel-abroad" ? (
                      <Link href="/register/travel-abroad">
                        <Button className="w-full bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                          Register Now
                        </Button>
                      </Link>
                    ) : (
                      <Link href={`/programs/${program.id}`}>
                        <Button className="w-full bg-dunamis-primary hover:bg-dunamis-secondary text-white">
                          Learn More
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
