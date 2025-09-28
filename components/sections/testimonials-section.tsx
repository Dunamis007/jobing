"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "AI Engineer at Google",
    content: "Dunamis Tutors transformed my career. The AI program was comprehensive and the instructors were amazing!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer",
    content: "The coding bootcamp exceeded my expectations. I landed my dream job within 3 months of graduation.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    name: "Aisha Patel",
    role: "Digital Marketing Manager",
    content: "The digital marketing course was practical and up-to-date. I saw immediate results in my campaigns.",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
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
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-dunamis-orange text-dunamis-orange" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-dunamis-navy">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
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
