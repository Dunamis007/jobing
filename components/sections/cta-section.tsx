"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
}

export function CTASection({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="py-12 md:py-16" role="complementary">
      <motion.div
        className="container px-4 md:px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold tracking-tighter text-dunamis-primary sm:text-3xl md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-gray-700 md:text-lg/relaxed">{description}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href={primaryCTA.href} aria-label={`${primaryCTA.text} - Begin your learning journey`}>
            <Button className="bg-dunamis-primary hover:bg-dunamis-secondary text-white transition-all duration-300 hover:scale-105">
              {primaryCTA.text}
            </Button>
          </Link>
          <Link href={secondaryCTA.href} aria-label={`${secondaryCTA.text} - Get in touch with us`}>
            <Button
              variant="outline"
              className="text-dunamis-primary border-dunamis-primary bg-transparent hover:bg-dunamis-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              {secondaryCTA.text}
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
