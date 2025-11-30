"use client"

import { useCallback } from "react"

export function usePerformance() {
  const trackPageView = useCallback((path: string) => {
    if (typeof window !== "undefined" && "performance" in window) {
      // Track Core Web Vitals
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const entryName = entry.name || "unknown"
            const entryDuration = entry.duration || 0
            console.log(`Performance: ${entryName} - ${entryDuration}ms`)
          }
        })

        // Only observe supported entry types
        observer.observe({ entryTypes: ["navigation", "paint"] })
      } catch (error) {
        // PerformanceObserver may not be supported in all environments
        console.warn("PerformanceObserver not supported:", error)
      }
    }
  }, [])

  const trackError = useCallback((error: Error) => {
    console.error("Performance Monitor - Error:", error)
    // In production, send to analytics service
  }, [])

  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    console.log("Performance Monitor - Event:", eventName, properties)
    // In production, send to analytics service
  }, [])

  return {
    trackPageView,
    trackError,
    trackEvent,
  }
}
