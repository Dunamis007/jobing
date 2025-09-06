"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Award, GraduationCap } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#002B5B] via-[#1E3A8A] to-[#002B5B] py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Learn AI, Coding & <span className="text-[#FF9800]">More with Expert Tutors</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 md:text-2xl max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transform your career with our comprehensive online programs in AI, Coding, Digital Marketing, IELTS,
                JUPEB, and JAMB preparation.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-[#FF9800] hover:bg-[#F57C00] text-white font-semibold px-8 py-4 text-lg group rounded-lg shadow-lg"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1E3A8A] text-white hover:bg-[#1E3A8A] hover:text-white font-semibold px-8 py-4 text-lg group bg-transparent rounded-lg"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#FF9800]" />
                <span className="font-semibold">10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#FF9800]" />
                <span className="font-semibold">95% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#FF9800]" />
                <span className="font-semibold">Expert Instructors</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
