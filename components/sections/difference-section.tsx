"use client"

import { motion } from "framer-motion"
import { Award, Target, Users, Zap } from "lucide-react"

const differences = [
  {
    icon: Award,
    title: "AI-Powered Learning",
    description: "Our advanced AI technology adapts to your learning style and pace.",
  },
  {
    icon: Target,
    title: "Industry Experts",
    description: "Learn from professionals currently working in top tech companies.",
  },
  {
    icon: Users,
    title: "Job Placement Support",
    description: "We help you land your dream job with our extensive network.",
  },
  {
    icon: Zap,
    title: "Lifetime Access",
    description: "Once enrolled, you get lifetime access to course updates and materials.",
  },
]

export function DifferenceSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-dunamis-navy to-dunamis-blue text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Dunamis Difference</h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            What sets us apart from other online learning platforms
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differences.map((difference, index) => (
            <motion.div
              key={difference.title}
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-dunamis-orange rounded-full flex items-center justify-center mx-auto">
                <difference.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">{difference.title}</h3>
              <p className="text-gray-200">{difference.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
