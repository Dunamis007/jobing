"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "AI Engineer",
    company: "TechCorp",
    image: "/placeholder-user.jpg",
    content:
      "The AI Tutoring program gave me the skills I needed to land my dream job. The instructors were amazing and the curriculum was spot-on.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    image: "/placeholder-user.jpg",
    content:
      "I went from zero coding experience to building full-stack applications in just 4 months. The support from instructors was incredible.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Digital Marketing Manager",
    company: "MarketPro",
    image: "/placeholder-user.jpg",
    content:
      "The Digital Marketing course transformed my career. I now manage campaigns for major brands and increased my salary by 150%.",
    rating: 5,
  },
]

export function TestimonialsSection() {
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from our amazing community of learners
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
