"use client"

import { useCallback } from "react"

export function usePerformance() {
  const trackPageView = useCallback((path: string) => {
    if (typeof window !== "undefined" && "performance" in window) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.value}`)
        }
      })

      observer.observe({ entryTypes: ["measure", "navigation", "paint"] })
    }
  }, [])

  const trackError = useCallback((error: Error) => {
    console.error("Performance Monitor - Error:", error)
    // In production, send to analytics service
  }, [])

  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    console.log("Performance Monitor - Event:", eventName, properties)
    // In production, send to analytics service
  }, [])

  return {
    trackPageView,
    trackError,
    trackEvent,
  }
}
