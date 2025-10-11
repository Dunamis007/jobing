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
    // TikTok Pixel Code
    if (typeof window !== "undefined") {
      ;((w: any, d: Document, t: string) => {
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
        ttq.setAndDefer = (t: any, e: string) => {
          t[e] = () => {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
          }
        }
        for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i])
        ttq.instance = (t: string) => {
          const e = ttq._i[t] || []
          for (let n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n])
          return e
        }
        ttq.load = (e: string, n?: any) => {
          const r = "https://analytics.tiktok.com/i18n/pixel/events.js"
          const o = n && n.partner
          ttq._i = ttq._i || {}
          ttq._i[e] = []
          ttq._i[e]._u = r
          ttq._t = ttq._t || {}
          ttq._t[e] = +new Date()
          ttq._o = ttq._o || {}
          ttq._o[e] = n || {}
          const script = document.createElement("script")
          script.type = "text/javascript"
          script.async = true
          script.src = r + "?sdkid=" + e + "&lib=" + t
          const firstScript = document.getElementsByTagName("script")[0]
          firstScript.parentNode?.insertBefore(script, firstScript)
        }

        ttq.load("D3L9Q1RC77UELR3MTNJG")
        ttq.page()
      })(window, document, "ttq")
    }
  }, [])

  return null
}
