import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Travel Guide" text="Loading travel resources...">
        <Skeleton className="h-10 w-[180px]" />
      </DashboardHeader>

      <div className="space-y-6">
        {/* Search and Quick Links Skeleton */}
        <div className="flex flex-col md:flex-row gap-4">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-[120px]" />
            <Skeleton className="h-10 w-[140px]" />
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-[400px]" />

          {/* Content Skeleton */}
          <div className="space-y-6">
            {/* Featured Destinations Skeleton */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-8 w-[100px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-32 w-full" />
                    <CardHeader className="p-4 pb-0">
                      <Skeleton className="h-5 w-[150px] mb-2" />
                      <Skeleton className="h-4 w-[100px]" />
                    </CardHeader>
                    <CardContent className="p-4 pt-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Skeleton className="h-4 w-[80px] mb-1" />
                          <Skeleton className="h-4 w-[60px]" />
                        </div>
                        <div>
                          <Skeleton className="h-4 w-[80px] mb-1" />
                          <Skeleton className="h-4 w-[60px]" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Skeleton className="h-9 w-full" />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Guides Skeleton */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <Skeleton className="h-6 w-[150px]" />
                <Skeleton className="h-8 w-[100px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="flex">
                    <div className="flex-1 p-4">
                      <Skeleton className="h-5 w-[100px] mb-2" />
                      <Skeleton className="h-5 w-full mb-2" />
                      <Skeleton className="h-4 w-[150px]" />
                    </div>
                    <div className="flex items-center pr-4">
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Access Skeleton */}
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-[150px] mb-2" />
                <Skeleton className="h-4 w-[250px]" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton key={i} className="h-24 w-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
