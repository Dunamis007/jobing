"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Megaphone, Globe, GraduationCap, Plane, MapPin } from "lucide-react"

const programs = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence and machine learning with hands-on projects and expert guidance.",
    icon: Brain,
    color: "bg-blue-500",
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    duration: "12 weeks",
    level: "Beginner to Advanced",
    type: "online",
    href: "/programs/ai-tutoring",
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Full-stack development with modern technologies including React, Node.js, and cloud deployment.",
    icon: Code,
    color: "bg-green-500",
    features: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps"],
    duration: "16 weeks",
    level: "Beginner to Advanced",
    type: "online",
    href: "/programs/coding",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies, social media, SEO, and data-driven marketing campaigns.",
    icon: Megaphone,
    color: "bg-purple-500",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    type: "online",
    href: "/programs/digital-marketing",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Comprehensive IELTS exam preparation with practice tests and personalized feedback.",
    icon: Globe,
    color: "bg-orange-500",
    features: ["Speaking", "Writing", "Reading", "Listening"],
    duration: "8 weeks",
    level: "All Levels",
    type: "online",
    href: "/programs/ielts",
  },
  {
    id: "ijmb",
    title: "IJMB Program",
    description: "Intermediate Joint Matriculation Board preparation for direct entry into 200 level.",
    icon: GraduationCap,
    color: "bg-red-500",
    features: ["Mathematics", "English", "Physics", "Chemistry"],
    duration: "9 months",
    level: "O'Level Graduates",
    type: "in-person",
    href: "/programs/ijmb",
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board for university direct entry admission.",
    icon: GraduationCap,
    color: "bg-indigo-500",
    features: ["Core Subjects", "Electives", "Practical Labs", "Mock Exams"],
    duration: "9 months",
    level: "O'Level Graduates",
    type: "in-person",
    href: "/programs/jupeb",
  },
  {
    id: "travel-abroad",
    title: "Travel Abroad",
    description: "Complete guidance for studying abroad including visa processing and university applications.",
    icon: Plane,
    color: "bg-teal-500",
    features: ["Visa Processing", "University Applications", "Scholarship Guidance", "Pre-departure"],
    duration: "6 months",
    level: "All Levels",
    type: "online",
    href: "/programs/travel-abroad",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover world-class learning opportunities designed to advance your career and education
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${program.color} text-white`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                    <div className="flex gap-2">
                      {program.type === "in-person" && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          In-Person
                        </Badge>
                      )}
                      <Badge variant="outline">{program.level}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">What you'll learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Duration: {program.duration}</span>
                    </div>
                  </div>
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
