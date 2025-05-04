"use client"

import Link from "next/link"
import { BookOpen } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
        <BookOpen className="h-6 w-6 text-primary" />
        <span className="hidden md:inline-block">Dunamis Tutors</span>
      </Link>
    </div>
  )
}
