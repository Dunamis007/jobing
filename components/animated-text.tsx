"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  duration?: number
  className?: string
  delay?: number
}

export function AnimatedText({ text, duration = 2, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setDisplayedText(text)
  }, [text])

  useEffect(() => {
    if (!isClient) return

    const delayTimer = setTimeout(() => {
      setIsAnimating(true)
      let startTime: number
      let animationFrameId: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)

        const charsToShow = Math.floor(text.length * progress)
        setDisplayedText(text.substring(0, charsToShow))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate)
        }
      }

      animationFrameId = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrameId)
    }, delay * 1000)

    return () => clearTimeout(delayTimer)
  }, [text, duration, delay, isClient])

  return <span className={className}>{displayedText}</span>
}
