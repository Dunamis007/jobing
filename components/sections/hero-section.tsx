"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroSectionProps {
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
  heroImage: {
    src: string
    alt: string
  }
}

export function HeroSection({ title, description, primaryCTA, secondaryCTA, heroImage }: HeroSectionProps) {
  return (
    <section className="bg-dunamis-primary py-16 md:py-24" role="banner">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">{title}</h1>
            <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{description}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={primaryCTA.href} aria-label={`${primaryCTA.text} - Start your learning journey`}>
                <Button className="bg-dunamis-accent hover:bg-dunamis-accent/90 text-white transition-all duration-300 hover:scale-105">
                  {primaryCTA.text}
                </Button>
              </Link>
              <Link href={secondaryCTA.href} aria-label={`${secondaryCTA.text} - View available programs`}>
                <Button
                  variant="outline"
                  className="border-white hover:bg-white hover:text-dunamis-primary text-black bg-transparent transition-all duration-300 hover:scale-105"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={heroImage.src || "/placeholder.svg"}
              alt={heroImage.alt}
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
