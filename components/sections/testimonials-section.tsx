"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/types"
import { motion } from "framer-motion"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Testimonial[]
}

export function TestimonialsSection({ title, description, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-dunamis-primary" role="complementary">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-300 md:text-lg/relaxed">{description}</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <blockquote className="mb-4 text-gray-700 italic">"{testimonial.content}"</blockquote>
                  <div className="flex items-center gap-4">
                    <div
                      className="h-10 w-10 rounded-full bg-dunamis-primary flex items-center justify-center text-white font-bold"
                      aria-label={`${testimonial.name}'s avatar`}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-dunamis-primary">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
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
