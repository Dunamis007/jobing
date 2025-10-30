"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  duration?: number
  className?: string
  delay?: number
}

export function AnimatedText({ text, duration = 2, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !isAnimating) return

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
  }, [text, duration, isAnimating, isClient])

  useEffect(() => {
    if (isClient) {
      const delayTimer = setTimeout(() => {
        setIsAnimating(true)
      }, delay * 1000)

      return () => clearTimeout(delayTimer)
    }
  }, [delay, isClient])

  if (!isClient) {
    return <span className={className}>{text}</span>
  }

  return <span className={className}>{displayedText}</span>
}
