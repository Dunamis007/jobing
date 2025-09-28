"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-dunamis-navy">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who have advanced their careers with Dunamis Tutors. Start your
            learning journey today!
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
              <Link href="/register">
                Start Learning Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-dunamis-navy text-dunamis-navy hover:bg-dunamis-navy hover:text-white bg-transparent"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
