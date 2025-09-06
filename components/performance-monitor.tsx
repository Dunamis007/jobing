"use client"

import { useEffect } from "react"
import { usePerformance } from "@/hooks/use-performance"

export function PerformanceMonitor() {
  const { trackPageView, trackError } = usePerformance()

  useEffect(() => {
    // Track page view
    trackPageView(window.location.pathname)

    // Track unhandled errors
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
  }, [trackPageView, trackError])

  return null
}
