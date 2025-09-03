"use client"

import type { Feature } from "@/types"
import { getIcon } from "@/lib/icons"
import { motion } from "framer-motion"

interface FeaturesSectionProps {
  title: string
  description: string
  features: Feature[]
}

export function FeaturesSection({ title, description, features }: FeaturesSectionProps) {
  return (
    <section className="py-12 md:py-16" role="complementary">
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-700 md:text-lg/relaxed">{description}</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = getIcon(feature.icon)
            return (
              <motion.div
                key={feature.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 rounded-full bg-dunamis-primary p-3 transition-transform duration-300 hover:scale-110">
                  <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-dunamis-primary">{feature.title}</h3>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
