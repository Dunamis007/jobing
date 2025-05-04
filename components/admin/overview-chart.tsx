"use client"

import { Chart, ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", users: 120, premium: 45, courses: 12 },
  { month: "Feb", users: 170, premium: 60, courses: 14 },
  { month: "Mar", users: 250, premium: 85, courses: 18 },
  { month: "Apr", users: 320, premium: 110, courses: 22 },
  { month: "May", users: 450, premium: 150, courses: 25 },
  { month: "Jun", users: 580, premium: 210, courses: 28 },
  { month: "Jul", users: 740, premium: 280, courses: 30 },
  { month: "Aug", users: 890, premium: 340, courses: 32 },
  { month: "Sep", users: 1020, premium: 410, courses: 35 },
  { month: "Oct", users: 1180, premium: 490, courses: 38 },
  { month: "Nov", users: 1220, premium: 530, courses: 40 },
  { month: "Dec", users: 1248, premium: 573, courses: 42 },
]

export function AdminOverviewChart() {
  return (
    <Chart className="h-[350px]">
      <ChartLegend
        className="justify-center"
        items={[
          {
            name: "Total Users",
            color: "hsl(var(--chart-1))",
          },
          {
            name: "Premium Users",
            color: "hsl(var(--chart-2))",
          },
          {
            name: "Active Courses",
            color: "hsl(var(--chart-3))",
          },
        ]}
      />
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="border-none bg-background p-2 shadow-md"
                  items={[
                    {
                      label: "users",
                      value: (value) => `${value}`,
                      color: "hsl(var(--chart-1))",
                    },
                    {
                      label: "premium",
                      value: (value) => `${value}`,
                      color: "hsl(var(--chart-2))",
                    },
                    {
                      label: "courses",
                      value: (value) => `${value}`,
                      color: "hsl(var(--chart-3))",
                    },
                  ]}
                />
              }
            />
            <Line type="monotone" dataKey="users" stroke="hsl(var(--chart-1))" strokeWidth={2} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="premium" stroke="hsl(var(--chart-2))" strokeWidth={2} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="courses" stroke="hsl(var(--chart-3))" strokeWidth={2} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Chart>
  )
}
