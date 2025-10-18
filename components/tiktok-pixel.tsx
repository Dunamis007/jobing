"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    ttq: any
    TiktokAnalyticsObject: string
  }
}

export function TikTokPixel() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Initialize TikTok Pixel
    const w = window
    const d = document
    const t = "ttq"

    w.TiktokAnalyticsObject = t

    const ttq = (w[t] = w[t] || [])
    ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
      "holdConsent",
      "revokeConsent",
      "grantConsent",
    ]

    ttq.setAndDefer = (obj: any, method: string) => {
      obj[method] = () => {
        obj.push([method].concat(Array.prototype.slice.call(arguments, 0)))
      }
    }

    for (let i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(ttq, ttq.methods[i])
    }

    ttq.instance = (id: string) => {
      const e = ttq._i![id] || []
      for (let n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n])
      return e
    }

    ttq.load = (id: string, options?: any) => {
      const r = "https://analytics.tiktok.com/i18n/pixel/events.js"
      ttq._i = ttq._i || {}
      ttq._i[id] = []
      ttq._i[id]._u = r
      ttq._t = ttq._t || {}
      ttq._t[id] = +new Date()
      ttq._o = ttq._o || {}
      ttq._o[id] = options || {}

      const n = document.createElement("script")
      n.type = "text/javascript"
      n.async = true
      n.src = r + "?sdkid=" + id + "&lib=" + t

      const e = document.getElementsByTagName("script")[0]
      e.parentNode?.insertBefore(n, e)
    }

    ttq.load("D3L9Q1RC77UELR3MTNJG")
    ttq.page()
  }, [])

  return null
}
