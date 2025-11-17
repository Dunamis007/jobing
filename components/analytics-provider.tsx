// Analytics hooks and tracking
"use client"

import { useEffect } from "react"

type TrackingEvent = {
  event: string
  category?: string
  label?: string
  value?: number
}

export function useAnalytics() {
  const trackEvent = (data: TrackingEvent) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", data.event, {
        event_category: data.category,
        event_label: data.label,
        value: data.value,
      })
    }
  }

  const trackPageView = (path: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: path,
      })
    }
  }

  return { trackEvent, trackPageView }
}

interface AnalyticsProviderProps {
  gaId: string
}

export function AnalyticsProvider({ gaId }: AnalyticsProviderProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag as any
    gtag("js", new Date())
    gtag("config", gaId)
  }, [gaId])

  return null
}
