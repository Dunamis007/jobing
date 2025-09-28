"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Main Hero Section with Dark Background */}
      <div className="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-dunamis-navy to-dunamis-blue">
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
      </div>

      {/* Professional Background Section with Video */}
      <div className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_640px] lg:gap-16 xl:grid-cols-[1fr_700px] items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  <span className="text-dunamis-orange">Expert</span>
                  <br />
                  <span className="text-gray-900">Tutors</span>
                </h2>
                <p className="max-w-[600px] text-gray-600 text-lg">
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
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600 pt-4">
                <div className="text-center">
                  <div className="font-bold text-2xl text-dunamis-navy">10,000+</div>
                  <div>Students</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-dunamis-navy">95%</div>
                  <div>Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl text-dunamis-navy">50+</div>
                  <div>Expert Instructors</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[640px] aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/1122584171?h=16dc085900&autoplay=1&muted=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
