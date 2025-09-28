"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Code, Megaphone, Globe, GraduationCap, Plane, BookOpen, Users } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "AI Tutoring",
    description: "Master artificial intelligence and machine learning with hands-on projects and expert guidance.",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
    features: ["Machine Learning", "Deep Learning", "Neural Networks"],
    href: "/programs/ai-tutoring",
  },
  {
    title: "Coding Bootcamp",
    description: "Learn programming from scratch with our comprehensive coding curriculum.",
    icon: Code,
    color: "bg-green-100 text-green-600",
    features: ["Web Development", "Mobile Apps", "Backend Systems"],
    href: "/programs/coding",
  },
  {
    title: "Digital Marketing",
    description: "Master digital marketing strategies and grow your online presence effectively.",
    icon: Megaphone,
    color: "bg-purple-100 text-purple-600",
    features: ["SEO/SEM", "Social Media", "Content Marketing"],
    href: "/programs/digital-marketing",
  },
  {
    title: "IELTS Preparation",
    description: "Achieve your target IELTS score with our proven preparation methods.",
    icon: Globe,
    color: "bg-orange-100 text-orange-600",
    features: ["Speaking", "Writing", "Reading & Listening"],
    href: "/programs/ielts",
  },
  {
    title: "JAMB Preparation",
    description: "Excel in your JAMB exams with comprehensive study materials and practice tests.",
    icon: BookOpen,
    color: "bg-red-100 text-red-600",
    features: ["All Subjects", "Practice Tests", "Expert Guidance"],
    href: "/programs/jamb",
  },
  {
    title: "JUPEB Program",
    description: "Joint Universities Preliminary Examinations Board preparation for university admission.",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-600",
    features: ["Science Subjects", "Arts Subjects", "Commercial Subjects"],
    href: "/programs/jupeb",
  },
  {
    title: "IJMB Program",
    description: "Interim Joint Matriculation Board examination preparation for direct entry admission.",
    icon: Users,
    color: "bg-teal-100 text-teal-600",
    features: ["Direct Entry", "University Admission", "Subject Combinations"],
    href: "/programs/ijmb",
  },
  {
    title: "Travel Abroad",
    description: "Complete guidance for studying and working abroad with visa assistance.",
    icon: Plane,
    color: "bg-pink-100 text-pink-600",
    features: ["Visa Assistance", "University Applications", "Career Guidance"],
    href: "/programs/travel-abroad",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-navy">
            Our Programs
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Accelerate your career with our comprehensive range of programs designed to meet the demands of today's
            digital world and educational requirements.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <program.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-dunamis-navy">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-dunamis-orange rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-dunamis-navy hover:bg-dunamis-navy/90 text-white">
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
