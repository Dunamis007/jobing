"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
}

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items: NavItem[]
}

export function MainNav({ items, className, ...props }: MainNavProps) {
  const pathname = usePathname()

  if (!items?.length) return null

  return (
    <nav className={cn("flex items-center gap-6", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
