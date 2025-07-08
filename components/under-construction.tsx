/>
Add the file `components/under-construction.tsx` with:

``\`tsx
export default function UnderConstruction({
  title = "Page in progress",
}: {
  title?: string
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold text-dunamis-primary">{title}</h1>
      <p className="max-w-md text-gray-600">
        We&apos;re working hard to bring this section online. Please check back
        soon.
      </p>
    </div>
  )
}
