"use client"

import type { DifferencePoint } from "@/types"
import { getIcon } from "@/lib/icons"
import { motion } from "framer-motion"

interface DifferenceSectionProps {
  title: string
  description: string
  points: DifferencePoint[]
}

export function DifferenceSection({ title, description, points }: DifferenceSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-dunamis-light" role="complementary">
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
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {points.map((point, index) => {
            const IconComponent = getIcon(point.icon)
            return (
              <motion.div
                key={point.id}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 rounded-full bg-dunamis-primary p-4 transition-transform duration-300 hover:scale-110">
                  <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-dunamis-primary mb-3">{point.title}</h3>
                <p className="text-gray-700 leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
