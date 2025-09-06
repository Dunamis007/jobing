"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Megaphone, Globe, GraduationCap, BookOpen, Plane } from "lucide-react"

const programs = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence with personalized AI-powered learning experiences",
    icon: Brain,
    href: "/programs/ai-tutoring",
    color: "bg-blue-500",
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    type: "online",
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Learn programming from scratch to advanced with hands-on projects",
    icon: Code,
    href: "/programs/coding",
    color: "bg-green-500",
    features: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps"],
    type: "online",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies and grow your digital presence",
    icon: Megaphone,
    href: "/programs/digital-marketing",
    color: "bg-purple-500",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    type: "online",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Achieve your target IELTS score with expert guidance and practice",
    icon: Globe,
    href: "/programs/ielts",
    color: "bg-red-500",
    features: ["Speaking", "Writing", "Reading", "Listening"],
    type: "online",
  },
  {
    id: "ijmb",
    title: "IJMB Program",
    description: "Interim Joint Matriculation Board examination preparation - In-person classes",
    icon: GraduationCap,
    href: "/programs/ijmb",
    color: "bg-yellow-500",
    features: ["In-Person Classes", "University Preparation", "Subject Specialization", "Exam Success"],
    type: "in-person",
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board preparation - In-person classes",
    icon: BookOpen,
    href: "/programs/jupeb",
    color: "bg-indigo-500",
    features: ["In-Person Classes", "University Entry", "Academic Excellence", "Mentorship"],
    type: "in-person",
  },
  {
    id: "travel-abroad",
    title: "Travel Abroad",
    description: "Complete guidance for studying and working abroad with visa assistance",
    icon: Plane,
    href: "/programs/travel-abroad",
    color: "bg-teal-500",
    features: ["Visa Assistance", "University Applications", "Document Prep", "Interview Training"],
    type: "online",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class learning opportunities designed to advance your career and education
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${program.color}`}>
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    {program.type === "in-person" && (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        In-Person
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-dunamis-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={program.href} className="w-full">
                    <Button className="w-full bg-dunamis-primary hover:bg-dunamis-primary/90">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
