"use client"

import { motion } from "framer-motion"
import { User, Users, Clock } from "lucide-react"

const features = [
  {
    icon: User,
    title: "Personalized Learning",
    description: "Get customized learning paths tailored to your goals and learning style for maximum effectiveness.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience and proven track records of success.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Study at your own pace with 24/7 access to course materials and flexible class scheduling options.",
  },
]

export function FeaturesSection() {
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-navy">
            Why Choose Dunamis Tutors?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide world-class education with cutting-edge technology and personalized support to ensure your
            success.
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
              <div className="w-16 h-16 bg-dunamis-orange rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dunamis-navy">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
