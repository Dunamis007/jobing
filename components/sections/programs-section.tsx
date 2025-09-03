"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Program } from "@/types"
import { getIcon } from "@/lib/icons"
import { motion } from "framer-motion"

interface ProgramsSectionProps {
  title: string
  description: string
  programs: Program[]
}

export function ProgramsSection({ title, description, programs }: ProgramsSectionProps) {
  return (
    <section id="programs" className="py-12 md:py-16 bg-dunamis-light" role="main">
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
          {programs.map((program, index) => {
            const IconComponent = getIcon(program.icon)
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-dunamis-primary flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-white" aria-hidden="true" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dunamis-primary">{program.title}</h3>
                    <p className="mt-2 text-gray-700">{program.description}</p>
                    <div className="mt-4 flex justify-between items-center gap-2">
                      <Link href={program.href} aria-label={`Learn more about ${program.name}`}>
                        <Button
                          variant="outline"
                          className="text-dunamis-primary border-dunamis-primary hover:bg-dunamis-primary hover:text-white bg-transparent transition-all duration-300"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Link href={program.registerHref} aria-label={`Register for ${program.name}`}>
                        <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white transition-all duration-300">
                          Register
                        </Button>
                      </Link>
                    </div>
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
