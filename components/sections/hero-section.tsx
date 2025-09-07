"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Users, Award, BookOpen } from "lucide-react"
import HeroCarousel from "@/components/hero-carousel"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#002B5B] via-[#1E3A8A] to-[#002B5B] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=pattern')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Future with
                <span className="block text-[#FF9800]">Expert-Led Learning</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Join thousands of students mastering AI, Coding, Digital Marketing, IELTS, and more through our
                innovative online platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#FF9800] hover:bg-[#F57C00] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/register">Start Learning Today</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#002B5B] font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
              >
                <Link href="#programs" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-[#FF9800] mr-2" />
                  <span className="text-2xl md:text-3xl font-bold">10,000+</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Students</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-[#FF9800] mr-2" />
                  <span className="text-2xl md:text-3xl font-bold">95%</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Success Rate</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-[#FF9800] mr-2" />
                  <span className="text-2xl md:text-3xl font-bold">Expert</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base">Instructors</p>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative">
            <HeroCarousel />

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-[#FF9800] text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              🚀 New Courses
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white text-[#002B5B] px-4 py-2 rounded-full font-bold shadow-lg">
              ⭐ 4.9/5 Rating
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
