"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page
    router.push("/")
  }, [router])

  return null
}
