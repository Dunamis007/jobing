"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { authService } from "@/lib/auth-service"
import { firestoreService } from "@/lib/firestore-service"
import type { User } from "firebase/auth"

interface AuthContextType {
  user: User | null
  loading: boolean
  paymentVerified: boolean
  paymentLoading: boolean
  signIn: (email: string, password: string) => Promise<User>
  signInWithGoogle: () => Promise<User>
  signUp: (email: string, password: string, name: string) => Promise<User>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  paymentVerified: false,
  paymentLoading: true,
  signIn: async () => {
    throw new Error("Not implemented")
  },
  signInWithGoogle: async () => {
    throw new Error("Not implemented")
  },
  signUp: async () => {
    throw new Error("Not implemented")
  },
  signOut: async () => {
    throw new Error("Not implemented")
  },
})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [paymentVerified, setPaymentVerified] = useState(false)
  const [paymentLoading, setPaymentLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged(async (user) => {
      setUser(user)
      setLoading(false)

      if (user) {
        // Check if payment is verified
        setPaymentLoading(true)
        try {
          const userDocRef = firestoreService.doc("users", user.uid)
          const userDoc = await firestoreService.getDoc(userDocRef)

          if (userDoc.exists()) {
            const userData = userDoc.data()
            setPaymentVerified(userData.paymentVerified === true)
          } else {
            setPaymentVerified(false)
          }
        } catch (error) {
          console.error("Error checking payment verification:", error)
          setPaymentVerified(false)
        } finally {
          setPaymentLoading(false)
        }
      } else {
        setPaymentVerified(false)
        setPaymentLoading(false)
      }
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const userCredential = await authService.signInWithEmailAndPassword(email, password)
    return userCredential.user
  }

  const signInWithGoogle = async () => {
    const userCredential = await authService.signInWithPopup()
    return userCredential.user
  }

  const signUp = async (email: string, password: string, name: string) => {
    const userCredential = await authService.createUserWithEmailAndPassword(email, password)
    await authService.updateProfile(userCredential.user, { displayName: name })
    return userCredential.user
  }

  const signOut = async () => {
    await authService.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        paymentVerified,
        paymentLoading,
        signIn,
        signInWithGoogle,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
