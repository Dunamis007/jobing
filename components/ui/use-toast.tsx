"use client"

// Simplified version of the toast component
import { useState, useEffect, useCallback } from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

let toastId = 0
const toasts: ToastProps[] = []
let listeners: ((toasts: ToastProps[]) => void)[] = []

export function toast(props: ToastProps) {
  const id = toastId++
  toasts.push(props)
  listeners.forEach((listener) => listener([...toasts]))

  setTimeout(() => {
    const index = toasts.indexOf(props)
    if (index !== -1) {
      toasts.splice(index, 1)
      listeners.forEach((listener) => listener([...toasts]))
    }
  }, 3000)
}

// Add the useToast hook
export function useToast() {
  const showToast = useCallback((props: ToastProps) => {
    toast(props)
  }, [])

  return {
    toast: showToast,
  }
}

export function Toaster() {
  const [visibleToasts, setVisibleToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    listeners.push(setVisibleToasts)
    return () => {
      listeners = listeners.filter((listener) => listener !== setVisibleToasts)
    }
  }, [])

  if (visibleToasts.length === 0) return null

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 max-w-md">
      {visibleToasts.map((toast, index) => (
        <div
          key={index}
          className={`rounded-lg border p-4 shadow-md ${
            toast.variant === "destructive" ? "bg-destructive text-destructive-foreground" : "bg-background"
          }`}
        >
          {toast.title && <div className="font-medium">{toast.title}</div>}
          {toast.description && <div className="text-sm">{toast.description}</div>}
        </div>
      ))}
    </div>
  )
}
