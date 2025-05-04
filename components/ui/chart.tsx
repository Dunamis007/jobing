"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ className, ...props }, ref) => {
  return <div className={cn("rounded-md border", className)} ref={ref} {...props} />
})
Chart.displayName = "Chart"

export { Chart }

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(({ className, ...props }, ref) => {
  return <div className={cn("", className)} ref={ref} {...props} />
})
ChartContainer.displayName = "ChartContainer"

export { ChartContainer }

export interface ChartLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    name: string
    color: string
  }[]
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(({ className, items, ...props }, ref) => {
  return (
    <div className={cn("flex items-center space-x-4", className)} ref={ref} {...props}>
      {items.map((item) => (
        <div key={item.name} className="flex items-center space-x-2">
          <span className="block h-4 w-4 rounded-full" style={{ backgroundColor: item.color }} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
})
ChartLegend.displayName = "ChartLegend"

export { ChartLegend }

export interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(({ className, content, ...props }, ref) => {
  return (
    <div className={className} ref={ref} {...props}>
      {content}
    </div>
  )
})
ChartTooltip.displayName = "ChartTooltip"

export { ChartTooltip }

export interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    label: string
    value: (value: number) => string
    color: string
  }[]
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, items, ...props }, ref) => {
    const { activePayload } = props as any

    if (!activePayload || activePayload.length === 0) {
      return null
    }

    return (
      <div className={cn("space-y-1", className)} ref={ref} {...props}>
        {items.map((item) => {
          const payload = activePayload.find((payload: any) => payload.dataKey === item.label.toLowerCase())

          if (!payload) {
            return null
          }

          return (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="block h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.label}</span>
              </div>
              <span>{item.value(payload.value)}</span>
            </div>
          )
        })}
      </div>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartTooltipContent }
