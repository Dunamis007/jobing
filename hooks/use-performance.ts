"use client"

import { useCallback } from "react"

interface PerformanceMetrics {
  pageLoadTime?: number
  timeToFirstByte?: number
  domContentLoaded?: number
  firstContentfulPaint?: number
}

interface UserInteractionData {
  element: string
  text: string
  href?: string
}

export function usePerformance() {
  const trackPageView = useCallback((path: string) => {
    if (typeof window === "undefined") return

    const navigationTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

    if (navigationTiming) {
      const metrics: PerformanceMetrics = {
        pageLoadTime: navigationTiming.loadEventEnd - navigationTiming.loadEventStart,
        timeToFirstByte: navigationTiming.responseStart - navigationTiming.requestStart,
        domContentLoaded: navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart,
      }

      // Get First Contentful Paint if available
      const paintEntries = performance.getEntriesByType("paint")
      const fcpEntry = paintEntries.find((entry) => entry.name === "first-contentful-paint")
      if (fcpEntry) {
        metrics.firstContentfulPaint = fcpEntry.startTime
      }

      console.log("Page Performance Metrics:", {
        path,
        ...metrics,
      })

      // Here you would typically send this data to your analytics service
      // Example: analytics.track('page_view', { path, ...metrics })
    }
  }, [])

  const trackUserInteraction = useCallback((action: string, data: UserInteractionData) => {
    console.log("User Interaction:", {
      action,
      timestamp: Date.now(),
      ...data,
    })

    // Here you would typically send this data to your analytics service
    // Example: analytics.track('user_interaction', { action, ...data })
  }, [])

  const trackError = useCallback((error: Error, errorInfo?: any) => {
    console.error("Application Error:", {
      message: error.message,
      stack: error.stack,
      errorInfo,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    })

    // Here you would typically send this data to your error tracking service
    // Example: errorTracking.captureException(error, { extra: errorInfo })
  }, [])

  const measurePerformance = useCallback((name: string, fn: () => void | Promise<void>) => {
    const startTime = performance.now()

    const result = fn()

    if (result instanceof Promise) {
      return result.finally(() => {
        const endTime = performance.now()
        console.log(`Performance: ${name} took ${endTime - startTime} milliseconds`)
      })
    } else {
      const endTime = performance.now()
      console.log(`Performance: ${name} took ${endTime - startTime} milliseconds`)
      return result
    }
  }, [])

  return {
    trackPageView,
    trackUserInteraction,
    trackError,
    measurePerformance,
  }
}
