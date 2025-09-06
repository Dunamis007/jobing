"use client"

import { useCallback } from "react"

interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
  url: string
}

interface UserInteraction {
  type: string
  target: string
  timestamp: number
  url: string
}

interface ErrorEvent {
  message: string
  stack?: string
  timestamp: number
  url: string
  userAgent: string
}

export function usePerformance() {
  const trackMetric = useCallback((metric: PerformanceMetric) => {
    // In a real app, you'd send this to your analytics service
    console.log("Performance Metric:", metric)

    // Example: Send to analytics service
    // analytics.track('performance_metric', metric)
  }, [])

  const trackPageView = useCallback(
    (path: string) => {
      const metric: PerformanceMetric = {
        name: "page_view",
        value: performance.now(),
        timestamp: Date.now(),
        url: path,
      }
      trackMetric(metric)
    },
    [trackMetric],
  )

  const trackUserInteraction = useCallback((type: string, target: string) => {
    const interaction: UserInteraction = {
      type,
      target,
      timestamp: Date.now(),
      url: window.location.pathname,
    }

    // In a real app, you'd send this to your analytics service
    console.log("User Interaction:", interaction)
  }, [])

  const trackError = useCallback((error: Error) => {
    const errorEvent: ErrorEvent = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      url: window.location.pathname,
      userAgent: navigator.userAgent,
    }

    // In a real app, you'd send this to your error tracking service
    console.error("Error tracked:", errorEvent)
  }, [])

  const measurePerformance = useCallback(
    (name: string, fn: () => void) => {
      const start = performance.now()
      fn()
      const end = performance.now()

      const metric: PerformanceMetric = {
        name,
        value: end - start,
        timestamp: Date.now(),
        url: window.location.pathname,
      }

      trackMetric(metric)
    },
    [trackMetric],
  )

  return {
    trackMetric,
    trackPageView,
    trackUserInteraction,
    trackError,
    measurePerformance,
  }
}
