"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    url: "https://i.imgur.com/ayuLxTm.jpeg",
    alt: "Dunamis Edtech - AI Learning Platform",
  },
  {
    url: "https://i.imgur.com/ayuLxTm.jpeg",
    alt: "Coding Bootcamp - Learn Programming",
  },
  {
    url: "https://i.imgur.com/ayuLxTm.jpeg",
    alt: "Digital Marketing Mastery",
  },
  {
    url: "https://i.imgur.com/ayuLxTm.jpeg",
    alt: "IELTS Preparation Course",
  },
  {
    url: "https://i.imgur.com/ayuLxTm.jpeg",
    alt: "JAMB & JUPEB Success",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  if (!carouselImages || carouselImages.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gradient-to-br from-[#002B5B] via-[#1E3A8A] to-[#002B5B] rounded-lg flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Dunamis Edtech</h3>
          <p className="text-lg">Transforming Education Through Technology</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg group">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={carouselImages[currentIndex]?.url || carouselImages[0]?.url}
          alt={carouselImages[currentIndex]?.alt || "Dunamis Edtech"}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?height=400&width=600&text=Dunamis+Edtech"
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-start p-8">
          <div className="text-white max-w-md">
            <h3 className="text-3xl font-bold mb-4">Transform Your Future with Dunamis Edtech</h3>
            <p className="text-lg mb-6">
              Join thousands of students who have achieved their dreams through our expert-led programs.
            </p>
            <Button className="bg-[#FF9800] hover:bg-[#F57C00] text-white px-6 py-3 rounded-lg font-semibold">
              Start Learning Today
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#FF9800] scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <div className="absolute top-4 right-4 bg-black/30 text-white px-2 py-1 rounded text-xs">Auto-playing</div>
      )}
    </div>
  )
}
