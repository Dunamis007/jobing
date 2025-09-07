"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002B5B] via-[#1E3A8A] to-[#002B5B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=pattern')] bg-repeat"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF9800]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#FF9800]/30 rounded-full animate-ping"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-[#FF9800] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <span className="block text-[#FF9800]">Your Future?</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of successful students who have already started their journey to a brighter future. Your
            transformation begins with a single click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#FF9800] hover:bg-[#F57C00] text-white font-bold px-10 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/register" className="flex items-center gap-3">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#002B5B] font-bold px-10 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
            >
              <Link href="/register">Explore Programs</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#FF9800] mb-2">10,000+</div>
                <div className="text-gray-300">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF9800] mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF9800] mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
