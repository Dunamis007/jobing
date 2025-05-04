import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function AITutorLoading() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[450px] mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[calc(100vh-12rem)]">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Skeleton className="h-6 w-[120px]" />
              <Skeleton className="h-8 w-[60px]" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-4 py-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-[72px] w-full mb-2 rounded-lg" />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <Skeleton className="h-6 w-[180px]" />
                <Skeleton className="h-4 w-[250px] mt-1" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-[100px]" />
                <Skeleton className="h-6 w-[120px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4">
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={`flex ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <Skeleton className={`h-[100px] ${i % 2 === 0 ? "w-[70%]" : "w-[80%]"} rounded-lg`} />
                </div>
              ))}
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex items-end gap-2">
              <Skeleton className="h-[80px] w-full" />
              <Skeleton className="h-10 w-10" />
            </div>
            <Skeleton className="h-4 w-[300px] mt-2" />
          </div>
        </Card>
      </div>
    </div>
  )
}
