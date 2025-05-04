import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function Loading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Embassy Contacts" text="Loading embassy contacts...">
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

        {/* Embassy Listings Skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-[250px] mb-2" />
                <Skeleton className="h-4 w-[150px]" />
              </CardHeader>
              <CardContent className="space-y-6">
                {Array.from({ length: 2 }).map((_, j) => (
                  <div key={j} className="space-y-4">
                    {j > 0 && <Separator />}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <Skeleton className="h-5 w-[150px] mb-2" />
                        <Skeleton className="h-4 w-[300px]" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-5 w-[100px]" />
                        <Skeleton className="h-5 w-[120px]" />
                        <Skeleton className="h-5 w-[140px]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Array.from({ length: 3 }).map((_, k) => (
                        <div key={k} className="space-y-1">
                          <Skeleton className="h-4 w-[100px] mb-1" />
                          <Skeleton className="h-4 w-[150px]" />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <Skeleton className="h-4 w-[120px] mb-1" />
                      <Skeleton className="h-4 w-full" />
                    </div>

                    <Skeleton className="h-16 w-full rounded-md" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}
