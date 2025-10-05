"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dunamis-navy via-dunamis-blue to-dunamis-navy py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Learn AI, Coding & More with <span className="text-dunamis-orange">Expert Tutors</span>
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Transform your career with Dunamis Edtech's comprehensive online and on-campus programs in AI,
                Cybersecurity, Data Analysis, Coding, Digital Marketing, IELTS, JUPEB, and JAMB preparation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0 text-lg px-8"
              >
                <Link href="/register">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                <Link href="#video">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">10,000+</div>
                <div className="text-sm text-gray-300">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Expert Instructors</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            id="video"
          >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
              <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1124197925?badge=0&autopause=0&autoplay=1&muted=1&loop=1&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="Dunamis Edtech Introduction"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
