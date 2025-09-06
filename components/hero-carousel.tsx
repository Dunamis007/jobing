"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "https://i.imgur.com/VR3UwFi.jpeg",
    alt: "Dunamis Edtech Learning Platform - AI and Coding",
  },
  {
    src: "https://i.imgur.com/qcAM2SY.jpeg",
    alt: "Dunamis Edtech Digital Marketing Course",
  },
  {
    src: "https://i.imgur.com/QZyZqyF.jpeg",
    alt: "Dunamis Edtech IELTS Preparation",
  },
  {
    src: "https://i.imgur.com/86NM7WF.jpeg",
    alt: "Dunamis Edtech JUPEB Program",
  },
  {
    src: "https://i.imgur.com/ZyykiCD.jpeg",
    alt: "Dunamis Edtech Online Learning Experience",
  },
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-dunamis-accent to-yellow-400 rounded-2xl blur-2xl opacity-20 animate-pulse" />
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src={carouselImages[currentIndex].src || "/placeholder.svg"}
            alt={carouselImages[currentIndex].alt}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
