"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"

export function HeroSection() {
  useEffect(() => {
    // Load Vimeo player script
    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Learn AI, Coding & More with <span className="text-dunamis-orange">Expert Tutors</span>
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Transform your career with our comprehensive online programs in AI, Coding, Digital Marketing, IELTS,
                JUPEB, and JAMB preparation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0">
                <Link href="/register">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">10,000+</p>
                <p className="text-sm text-gray-300">Students</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">95%</p>
                <p className="text-sm text-gray-300">Success Rate</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-gray-300">Expert Instructors</p>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
                style={{ paddingTop: "177.78%" }}
              >
                <div className="absolute inset-0">
                  <iframe
                    src="https://player.vimeo.com/video/1124197925?badge=0&autopause=0&autoplay=1&muted=1&loop=1&player_id=0&app_id=58479"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Dunamis Edtech Introduction"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
