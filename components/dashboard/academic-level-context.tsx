"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type AcademicLevel = "JAMB Candidate" | "IJMB Student" | "JUPEB Student" | "University Student"

interface AcademicLevelContextType {
  academicLevel: AcademicLevel
  setAcademicLevel: (level: AcademicLevel) => void
}

const AcademicLevelContext = createContext<AcademicLevelContextType | undefined>(undefined)

export function AcademicLevelProvider({ children }: { children: React.ReactNode }) {
  // Try to get the saved level from localStorage, default to JAMB Candidate
  const [academicLevel, setAcademicLevel] = useState<AcademicLevel>("JAMB Candidate")

  // Load saved level from localStorage on mount
  useEffect(() => {
    const savedLevel = localStorage.getItem("academicLevel") as AcademicLevel | null
    if (savedLevel) {
      setAcademicLevel(savedLevel)
    }
  }, [])

  // Save level to localStorage when it changes
  const handleSetLevel = (level: AcademicLevel) => {
    setAcademicLevel(level)
    localStorage.setItem("academicLevel", level)
  }

  return (
    <AcademicLevelContext.Provider value={{ academicLevel, setAcademicLevel: handleSetLevel }}>
      {children}
    </AcademicLevelContext.Provider>
  )
}

export function useAcademicLevel() {
  const context = useContext(AcademicLevelContext)
  if (context === undefined) {
    throw new Error("useAcademicLevel must be used within an AcademicLevelProvider")
  }
  return context
}
