"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { features } from "@/data/homepage"
import { iconMap, type IconName } from "@/lib/icons"

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter text-dunamis-primary sm:text-4xl md:text-5xl mb-4">
            Why Choose Dunamis Tutors?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide world-class education with cutting-edge technology and personalized support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as IconName]

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 group">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-dunamis-primary/10 rounded-full group-hover:bg-dunamis-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="h-8 w-8 text-dunamis-primary group-hover:text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-dunamis-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
