import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Visa Guides" text="Loading visa guides...">
        <Skeleton className="h-10 w-[180px]" />
      </DashboardHeader>

      <div className="space-y-6">
        {/* Search and Filters Skeleton */}
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-[150px]" />
          </div>
        </div>

        {/* Tabs Skeleton */}
        <Skeleton className="h-10 w-[300px]" />

        {/* Content Skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <Skeleton className="h-6 w-[250px] mb-2" />
                    <Skeleton className="h-4 w-[150px]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-[80px]" />
                    <Skeleton className="h-5 w-[120px]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="space-y-2">
                      <Skeleton className="h-5 w-[120px]" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                  ))}
                </div>

                <Skeleton className="h-[1px] w-full" />

                <div>
                  <Skeleton className="h-5 w-[150px] mb-3" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Array.from({ length: 6 }).map((_, j) => (
                      <Skeleton key={j} className="h-10 w-full" />
                    ))}
                  </div>
                </div>

                <Skeleton className="h-[1px] w-full" />

                <div>
                  <Skeleton className="h-5 w-[150px] mb-3" />
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-5 w-full" />
                      </div>
                    ))}
                  </div>
                </div>

                <Skeleton className="h-[1px] w-full" />

                <div className="flex justify-between">
                  <Skeleton className="h-10 w-[180px]" />
                  <Skeleton className="h-10 w-[150px]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}
