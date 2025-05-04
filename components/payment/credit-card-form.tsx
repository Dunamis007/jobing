"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, CreditCard, Lock } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface CreditCardFormProps {
  onSuccess: (paymentDetails: PaymentDetails) => void
  onCancel: () => void
  isLoading?: boolean
}

export interface PaymentDetails {
  cardNumber: string
  cardholderName: string
  expiryDate: string
  cvv: string
  isVerified: boolean
}

export function CreditCardForm({ onSuccess, onCancel, isLoading = false }: CreditCardFormProps) {
  const { toast } = useToast()
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    isVerified: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof PaymentDetails, value: string) => {
    // Format card number with spaces every 4 digits
    if (field === "cardNumber") {
      value = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
      value = value.substring(0, 19) // Limit to 16 digits + 3 spaces
    }

    // Format expiry date as MM/YY
    if (field === "expiryDate") {
      value = value.replace(/\D/g, "")
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4)
      }
      value = value.substring(0, 5) // Limit to MM/YY format
    }

    // Limit CVV to 3 or 4 digits
    if (field === "cvv") {
      value = value.replace(/\D/g, "").substring(0, 4)
    }

    setPaymentDetails((prev) => ({ ...prev, [field]: value }))

    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validate card number (should be 16 digits, spaces allowed)
    const cardNumberDigits = paymentDetails.cardNumber.replace(/\s/g, "")
    if (!cardNumberDigits || cardNumberDigits.length !== 16 || !/^\d+$/.test(cardNumberDigits)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number"
    }

    // Validate cardholder name
    if (!paymentDetails.cardholderName || paymentDetails.cardholderName.length < 3) {
      newErrors.cardholderName = "Please enter the cardholder name"
    }

    // Validate expiry date (should be in MM/YY format)
    if (!paymentDetails.expiryDate || !/^\d{2}\/\d{2}$/.test(paymentDetails.expiryDate)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY)"
    } else {
      // Check if the expiry date is in the future
      const [month, year] = paymentDetails.expiryDate.split("/")
      const expiryDate = new Date()
      expiryDate.setFullYear(2000 + Number.parseInt(year), Number.parseInt(month) - 1, 1)

      if (expiryDate < new Date()) {
        newErrors.expiryDate = "Card has expired"
      }
    }

    // Validate CVV (should be 3 or 4 digits)
    if (!paymentDetails.cvv || !/^\d{3,4}$/.test(paymentDetails.cvv)) {
      newErrors.cvv = "Please enter a valid CVV"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would send this to a payment processor
      // For this demo, we'll simulate a successful verification
      setTimeout(() => {
        toast({
          title: "Payment details verified",
          description: "Your 1-day free trial has been activated.",
        })
        onSuccess({ ...paymentDetails, isVerified: true })
      }, 1500)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-primary" />
              <h3 className="text-lg font-medium">Payment Details</h3>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Lock className="h-4 w-4 mr-1" />
              <span>Secure Payment</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentDetails.cardNumber}
              onChange={(e) => handleInputChange("cardNumber", e.target.value)}
              className={errors.cardNumber ? "border-destructive" : ""}
            />
            {errors.cardNumber && <p className="text-xs text-destructive">{errors.cardNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardholderName">Cardholder Name</Label>
            <Input
              id="cardholderName"
              placeholder="John Doe"
              value={paymentDetails.cardholderName}
              onChange={(e) => handleInputChange("cardholderName", e.target.value)}
              className={errors.cardholderName ? "border-destructive" : ""}
            />
            {errors.cardholderName && <p className="text-xs text-destructive">{errors.cardholderName}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                value={paymentDetails.expiryDate}
                onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                className={errors.expiryDate ? "border-destructive" : ""}
              />
              {errors.expiryDate && <p className="text-xs text-destructive">{errors.expiryDate}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                type="text"
                placeholder="123"
                value={paymentDetails.cvv}
                onChange={(e) => handleInputChange("cvv", e.target.value)}
                className={errors.cvv ? "border-destructive" : ""}
              />
              {errors.cvv && <p className="text-xs text-destructive">{errors.cvv}</p>}
            </div>
          </div>

          <div className="pt-2 flex justify-between">
            <Button type="button" variant="outline" onClick={onCancel} disabled={isLoading}>
              Back
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Activate Free Trial"
              )}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4">
            By proceeding, you agree to our Terms of Service and authorize a 1-day free trial. No charges will be made
            during the trial period.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
