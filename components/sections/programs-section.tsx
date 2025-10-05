"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Megaphone, Globe, GraduationCap, Plane, BookOpen, Shield, BarChart } from "lucide-react"

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
    href: "/programs/coding",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Learn to protect systems, networks, and data from cyber threats with industry-standard practices.",
    icon: Shield,
    color: "bg-red-600",
    features: ["Network Security", "Ethical Hacking", "Threat Analysis", "Security Operations"],
    duration: "14 weeks",
    level: "Beginner to Advanced",
    href: "/programs/cybersecurity",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights using advanced analytics tools and techniques.",
    icon: BarChart,
    color: "bg-cyan-500",
    features: ["Data Visualization", "Statistical Analysis", "SQL & Python", "Business Intelligence"],
    duration: "12 weeks",
    level: "Beginner to Advanced",
    href: "/programs/data-analytics",
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
    href: "/programs/ielts",
  },
  {
    id: "jamb",
    title: "JAMB Program",
    description: "Joint Admissions and Matriculation Board examination preparation for university entry.",
    icon: GraduationCap,
    color: "bg-red-500",
    features: ["Mathematics", "English", "Physics", "Chemistry"],
    duration: "6 months",
    level: "Secondary School",
    href: "/programs/jamb",
  },
  {
    id: "jupeb",
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board for university direct entry admission.",
    icon: BookOpen,
    color: "bg-indigo-500",
    features: ["Core Subjects", "Electives", "Practical Labs", "Mock Exams"],
    duration: "9 months",
    level: "O'Level Graduates",
    href: "/programs/jupeb",
  },
  {
    id: "ijmb",
    title: "IJMB Program",
    description: "Interim Joint Matriculation Board examination preparation for direct entry into 200 level.",
    icon: GraduationCap,
    color: "bg-yellow-600",
    features: ["University Preparation", "Subject Specialization", "Exam Success", "Direct Entry"],
    duration: "9 months",
    level: "O'Level Graduates",
    href: "/programs/ijmb",
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${program.color} text-white`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-dunamis-navy text-dunamis-navy">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">What you'll learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="text-xs bg-dunamis-light-blue text-dunamis-navy"
                          >
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
                    <Button className="w-full bg-dunamis-navy hover:bg-dunamis-blue text-white">Learn More</Button>
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
