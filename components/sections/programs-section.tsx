"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Megaphone } from "lucide-react"

const programs = [
  {
    id: "ai-tutoring",
    title: "AI Tutoring",
    description: "Master artificial intelligence and machine learning with hands-on projects and expert guidance.",
    icon: Brain,
    price: "₦50,000",
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    href: "/programs/ai-tutoring",
  },
  {
    id: "coding",
    title: "Coding Bootcamp",
    description: "Full-stack development with modern technologies including React, Node.js, and cloud deployment.",
    icon: Code,
    price: "₦75,000",
    features: ["Web Development", "Mobile Apps", "Backend Systems", "DevOps"],
    href: "/programs/coding",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master online marketing strategies, social media, SEO, and data-driven marketing campaigns.",
    icon: Megaphone,
    price: "₦40,000",
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
    href: "/programs/digital-marketing",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#333333]">Our Programs</h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Discover world-class learning opportunities designed to advance your career and education
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-white border-0 rounded-xl">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#002B5B] to-[#1E3A8A] rounded-full flex items-center justify-center mb-4">
                    <program.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#333333]">{program.title}</CardTitle>
                  <div className="text-2xl font-bold text-[#FF9800] mt-2">{program.price}</div>
                  <CardDescription className="text-[#666666] leading-relaxed">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#666666]">
                        <div className="w-2 h-2 bg-[#FF9800] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={program.href} className="w-full">
                    <Button className="w-full bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold rounded-lg">
                      Learn More
                    </Button>
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
