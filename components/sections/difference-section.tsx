"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { differences } from "@/data/homepage"
import { iconMap, type IconName } from "@/lib/icons"

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((difference, index) => {
            const Icon = iconMap[difference.icon as IconName]

            return (
              <motion.div
                key={difference.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-dunamis-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{difference.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{difference.description}</p>
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
