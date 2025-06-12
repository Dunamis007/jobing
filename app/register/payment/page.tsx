"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { PaymentForm } from "@/components/payment/payment-form"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const [programDetails, setProgramDetails] = useState({
    name: "",
    amount: 0,
  })

  useEffect(() => {
    const program = searchParams.get("program")

    // Set program details based on the program parameter
    switch (program) {
      case "ijmb":
        setProgramDetails({ name: "IJMB Program", amount: 150000 })
        break
      case "jupeb":
        setProgramDetails({ name: "JUPEB Program", amount: 150000 })
        break
      case "jamb":
        setProgramDetails({ name: "JAMB Program", amount: 75000 })
        break
      case "ielts":
        setProgramDetails({ name: "IELTS Preparation", amount: 120000 })
        break
      case "digital-marketing":
        setProgramDetails({ name: "Digital Marketing", amount: 100000 })
        break
      case "coding":
        setProgramDetails({ name: "Coding Program", amount: 120000 })
        break
      case "ai-tutoring":
        setProgramDetails({ name: "AI Tutoring", amount: 150000 })
        break
      case "travel-abroad":
        setProgramDetails({ name: "Travel Abroad Program", amount: 200000 })
        break
      default:
        setProgramDetails({ name: "Program Registration", amount: 100000 })
    }
  }, [searchParams.get("program")]) // Only depend on the program value, not the entire searchParams object

  return (
    <div className="container py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-dunamis-primary">Payment</h1>
        <p className="mt-2 text-muted-foreground">Complete your payment to enroll in the {programDetails.name}</p>
      </div>

      <PaymentForm programName={programDetails.name} amount={programDetails.amount} />
    </div>
  )
}
