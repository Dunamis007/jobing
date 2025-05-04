import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div>
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[350px] mt-2" />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Skeleton className="h-10 w-full md:w-[200px]" />
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <Skeleton className="h-10 w-full md:w-1/2" />
        <Skeleton className="h-10 w-full md:w-[180px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
          ))}
      </div>
    </div>
  )
}
