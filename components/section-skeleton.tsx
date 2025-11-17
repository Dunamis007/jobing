// Skeleton loaders for smooth loading states
export function HeroSkeleton() {
  return (
    <div className="animate-pulse bg-gradient-to-br from-dunamis-navy via-dunamis-blue to-dunamis-navy py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="h-12 bg-white/10 rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-white/10 rounded" />
              <div className="h-4 bg-white/10 rounded" />
              <div className="h-4 bg-white/10 rounded w-2/3" />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-8 bg-white/10 rounded w-1/2" />
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[9/16] bg-white/10 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export function ProgramsSkeleton() {
  return (
    <div className="animate-pulse py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto" />
          <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-1/3" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
              <div className="h-10 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ContentSkeleton() {
  return (
    <div className="animate-pulse py-20">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="h-10 bg-gray-200 rounded w-1/2" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
