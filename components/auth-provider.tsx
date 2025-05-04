"use client"

import type React from "react"
import type { User } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { authService } from "@/lib/auth-service"
import type { MockUser } from "@/lib/mock-auth"

type AuthUser = User | MockUser

type AuthContextType = {
  user: AuthUser | null
  loading: boolean
  isMockAuth: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isMockAuth: false,
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, isMockAuth: authService.isMockAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
