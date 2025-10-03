import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Code, TrendingUp, Globe, GraduationCap, BookOpen, Plane } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "AI Tutoring",
    description: "Master artificial intelligence with personalized guidance from industry experts.",
    icon: Brain,
    color: "bg-blue-500",
    features: ["Machine Learning", "Deep Learning", "Neural Networks"],
    href: "/programs/ai-tutoring",
  },
  {
    title: "Coding Bootcamp",
    description: "Learn full-stack development with hands-on projects and real-world applications.",
    icon: Code,
    color: "bg-green-500",
    features: ["Web Development", "Mobile Apps", "Backend Systems"],
    href: "/programs/coding",
  },
  {
    title: "Digital Marketing",
    description: "Become a digital marketing expert with cutting-edge strategies and tools.",
    icon: TrendingUp,
    color: "bg-purple-500",
    features: ["SEO & SEM", "Social Media", "Analytics"],
    href: "/programs/digital-marketing",
  },
  {
    title: "IELTS",
    description: "Prepare for IELTS with expert instructors and comprehensive study materials.",
    icon: Globe,
    color: "bg-red-500",
    features: ["Speaking", "Writing", "Reading & Listening"],
    href: "/programs/ielts",
  },
  {
    title: "JAMB",
    description: "Ace your JAMB examination with our proven preparation methodology.",
    icon: BookOpen,
    color: "bg-yellow-500",
    features: ["Use of English", "Mathematics", "Science Subjects"],
    href: "/programs/jamb",
  },
  {
    title: "JUPEB",
    description: "Direct university admission program with comprehensive subject coverage.",
    icon: GraduationCap,
    color: "bg-indigo-500",
    features: ["A-Level Subjects", "University Direct Entry", "Intensive Coaching"],
    href: "/programs/jupeb",
  },
  {
    title: "IJMB",
    description: "Interim Joint Matriculation Board program for direct entry into 200 level.",
    icon: GraduationCap,
    color: "bg-pink-500",
    features: ["A-Level Equivalent", "Direct Entry", "Fast Track"],
    href: "/programs/ijmb",
  },
  {
    title: "Travel Abroad",
    description: "Get expert guidance for studying and working abroad opportunities.",
    icon: Plane,
    color: "bg-orange-500",
    features: ["Study Abroad", "Visa Processing", "Scholarship Guidance"],
    href: "/programs/travel-abroad",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Our Programs</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your career with our comprehensive range of programs designed to meet your unique learning
            journey, from beginner to advanced level.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <Card key={program.title} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`${program.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-navy/90">
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
