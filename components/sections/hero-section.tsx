"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-dunamis-navy to-dunamis-blue">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                Learn AI, Coding &<br />
                More with{" "}
                <span className="text-dunamis-orange">
                  Expert
                  <br />
                  Tutors
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-200 text-lg">
                Transform your career with our comprehensive online programs in AI, Coding, Digital Marketing, IELTS,
                JUPEB, and JAMB preparation.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
                <Link href="/register">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dunamis-navy bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">10,000+</span>
                <span>Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">95%</span>
                <span>Success Rate</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-white">50+</span>
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <Play className="h-16 w-16 mx-auto mb-2" />
                <p>Video Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
