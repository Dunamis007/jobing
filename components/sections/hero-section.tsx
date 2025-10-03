"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dunamis-navy to-dunamis-blue">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none leading-tight">
                Learn AI, Coding &<br />
                More with{" "}
                <span className="text-dunamis-orange">
                  Expert
                  <br />
                  Tutors
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-200 text-lg leading-relaxed">
                Transform your career with our comprehensive online programs in AI, Coding, Digital Marketing, IELTS,
                JUPEB, and JAMB preparation.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-dunamis-orange hover:bg-dunamis-orange/90 text-white border-0 font-semibold"
              >
                <Link href="/register">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-dunamis-navy bg-transparent font-semibold"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300 pt-4">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-white text-lg">10,000+</span>
                <span className="ml-1">Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-white text-lg">95%</span>
                <span className="ml-1">Success Rate</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-white text-lg">50+</span>
                <span className="ml-1">Expert Instructors</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/1124197925?badge=0&autopause=0&autoplay=1&muted=1&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title="Dunamis Edtech Introduction"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </section>
  )
}
