"use client"

import { usePerformanceMonitoring } from "@/hooks/use-performance"

export function PerformanceMonitor() {
  usePerformanceMonitoring()
  return null
}
