"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Future with <span className="text-blue-600 dark:text-blue-400">Dunamis Edtech</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Master AI, Coding, Digital Marketing, IELTS, and more with expert-led online programs. Join thousands of
                students building successful careers through our comprehensive learning platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/register">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/programs">
                  <Play className="mr-2 h-4 w-4" />
                  Explore Programs
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <span className="font-semibold text-gray-900 dark:text-gray-100">10,000+</span>
                <span className="ml-1">Students</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-900 dark:text-gray-100">50+</span>
                <span className="ml-1">Courses</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-gray-900 dark:text-gray-100">95%</span>
                <span className="ml-1">Success Rate</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}
