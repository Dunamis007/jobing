"use client"

import { motion } from "framer-motion"
import { User, Users, Clock } from "lucide-react"

const features = [
  {
    icon: User,
    title: "Personalized Learning",
    description: "AI-powered adaptive learning paths tailored to your pace and style for maximum effectiveness.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience and proven track records.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials and recorded sessions.",
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#333333]">
            Why Choose Dunamis Edtech?
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            We provide world-class education with cutting-edge technology and personalized support
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#002B5B] to-[#1E3A8A] rounded-full flex items-center justify-center">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#333333]">{feature.title}</h3>
              <p className="text-[#666666] leading-relaxed max-w-sm mx-auto">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
