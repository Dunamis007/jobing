"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useState } from "react"

const data = [
  {
    name: "Week 1",
    mathematics: 40,
    physics: 30,
    programming: 20,
  },
  {
    name: "Week 2",
    mathematics: 45,
    physics: 35,
    programming: 30,
  },
  {
    name: "Week 3",
    mathematics: 55,
    physics: 40,
    programming: 45,
  },
  {
    name: "Week 4",
    mathematics: 60,
    physics: 50,
    programming: 55,
  },
  {
    name: "Week 5",
    mathematics: 65,
    physics: 60,
    programming: 70,
  },
  {
    name: "Week 6",
    mathematics: 75,
    physics: 65,
    programming: 80,
  },
  {
    name: "Week 7",
    mathematics: 80,
    physics: 70,
    programming: 85,
  },
]

export function LearningProgress() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>Learning Progress</CardTitle>
        <CardDescription>Your progress across different subjects</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              onMouseMove={(e) => {
                if (e.activeTooltipIndex !== undefined) {
                  setHoveredIndex(e.activeTooltipIndex)
                }
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-md">
                        <div className="grid grid-cols-2 gap-2">
                          {payload.map((entry) => (
                            <div key={entry.name} className="flex items-center gap-1">
                              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
                              <span className="text-xs font-medium">
                                {entry.name}: {entry.value}%
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <Line
                  type="monotone"
                  dataKey="mathematics"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, index } = props
                    return (
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r={hoveredIndex === index ? 6 : 4}
                        fill="hsl(var(--primary))"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.5, duration: 0.3 }}
                      />
                    )
                  }}
                />
              </motion.g>
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <Line
                  type="monotone"
                  dataKey="physics"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, index } = props
                    return (
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r={hoveredIndex === index ? 6 : 4}
                        fill="hsl(var(--chart-2))"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.7, duration: 0.3 }}
                      />
                    )
                  }}
                />
              </motion.g>
              <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
                <Line
                  type="monotone"
                  dataKey="programming"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, index } = props
                    return (
                      <motion.circle
                        cx={cx}
                        cy={cy}
                        r={hoveredIndex === index ? 6 : 4}
                        fill="hsl(var(--chart-3))"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 + 0.9, duration: 0.3 }}
                      />
                    )
                  }}
                />
              </motion.g>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center gap-4 p-4">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-xs">Mathematics</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "hsl(var(--chart-2))" }} />
            <span className="text-xs">Physics</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "hsl(var(--chart-3))" }} />
            <span className="text-xs">Programming</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
