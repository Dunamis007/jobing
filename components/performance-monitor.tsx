"use client"

import { useEffect } from "react"
import { usePerformance } from "@/hooks/use-performance"

export function PerformanceMonitor() {
  const { trackPageView, trackUserInteraction } = usePerformance()

  useEffect(() => {
    // Track initial page load
    trackPageView(window.location.pathname)

    // Track Core Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Track Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]

        if (lastEntry) {
          console.log("LCP:", lastEntry.startTime)
          // You can send this to your analytics service
        }
      })

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] })
      } catch (e) {
        // LCP not supported
      }

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime)
          // You can send this to your analytics service
        })
      })

      try {
        fidObserver.observe({ entryTypes: ["first-input"] })
      } catch (e) {
        // FID not supported
      }

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log("CLS:", clsValue)
        // You can send this to your analytics service
      })

      try {
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      } catch (e) {
        // CLS not supported
      }

      // Cleanup observers on unmount
      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [trackPageView])

  useEffect(() => {
    // Track user interactions
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A") {
        trackUserInteraction("click", {
          element: target.tagName.toLowerCase(),
          text: target.textContent?.slice(0, 50) || "",
          href: target.getAttribute("href") || undefined,
        })
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [trackUserInteraction])

  // This component doesn't render anything
  return null
}
