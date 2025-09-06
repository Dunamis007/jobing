"use client"

import { motion } from "framer-motion"
import { Zap, Star, Target, Infinity } from "lucide-react"

const differencePoints = [
  {
    id: "ai-powered",
    title: "AI-Powered Learning",
    description: "Our proprietary AI technology adapts to your learning style and pace",
    icon: Zap,
  },
  {
    id: "industry-experts",
    title: "Industry Experts",
    description: "Learn from professionals currently working in top companies",
    icon: Star,
  },
  {
    id: "job-guarantee",
    title: "Job Placement Support",
    description: "We help you land your first job with our extensive network",
    icon: Target,
  },
  {
    id: "lifetime-access",
    title: "Lifetime Access",
    description: "Once enrolled, you have lifetime access to course updates",
    icon: Infinity,
  },
]

export function DifferenceSection() {
  return (
    <section className="py-20 bg-dunamis-primary text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">The Dunamis Difference</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            What sets us apart from other online learning platforms
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differencePoints.map((point, index) => (
            <motion.div
              key={point.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-dunamis-accent">
                <point.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-200 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
