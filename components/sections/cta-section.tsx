"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-dunamis-primary to-blue-800 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join thousands of students who have already started their careers with Dunamis Edtech. Start your learning
              journey today!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white font-semibold px-8 py-4 text-lg group"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-dunamis-primary font-semibold px-8 py-4 text-lg bg-transparent"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
