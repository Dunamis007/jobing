"use client"

import { motion } from "framer-motion"
import { Brain, TrendingUp, HeadphonesIcon, Zap } from "lucide-react"

const differences = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Our advanced AI system adapts to your learning style and provides personalized recommendations",
  },
  {
    icon: TrendingUp,
    title: "Industry Experts",
    description: "Learn from professionals currently working in top companies and organizations",
  },
  {
    icon: HeadphonesIcon,
    title: "Job Placement Support",
    description: "We help you land your dream job with our extensive network and career guidance",
  },
  {
    icon: Zap,
    title: "Lifetime Access",
    description: "Get unlimited access to all course materials and future updates for life",
  },
]

export function DifferenceSection() {
  return (
    <section className="py-20 bg-dunamis-primary text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Dunamis Difference</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
              <div className="mx-auto w-16 h-16 bg-dunamis-accent rounded-full flex items-center justify-center">
                <difference.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">{difference.title}</h3>
              <p className="text-gray-200 leading-relaxed">{difference.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
