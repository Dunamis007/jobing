"use client"

import { useEffect } from "react"
import { usePerformance } from "@/hooks/use-performance"

export function PerformanceMonitor() {
  const { trackPageView, trackUserInteraction, trackError } = usePerformance()

  useEffect(() => {
    // Track initial page load
    trackPageView(window.location.pathname)

    // Track Core Web Vitals
    if (typeof window !== "undefined" && "web-vital" in window) {
      import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      trackError(event.error || new Error(event.message))
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(new Error(event.reason))
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [trackPageView, trackUserInteraction, trackError])

  return null
}
