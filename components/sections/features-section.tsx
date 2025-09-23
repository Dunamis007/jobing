"use client"

import { motion } from "framer-motion"
import { User, Users, Clock } from "lucide-react"

const features = [
  {
    icon: User,
    title: "Personalized Learning",
    description: "AI-powered adaptive learning paths tailored to your pace and style",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials",
  },
]

export function FeaturesSection() {
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Why Choose Dunamis Edtech?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide world-class education with cutting-edge technology and personalized support
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto w-16 h-16 bg-dunamis-primary rounded-full flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
