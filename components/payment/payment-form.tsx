"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, CreditCard, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface PaymentFormProps {
  programName: string
  amount: number
  onSuccess?: () => void
}

export function PaymentForm({ programName, amount, onSuccess }: PaymentFormProps) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentError, setPaymentError] = useState("")
  const [receiptFile, setReceiptFile] = useState<File | null>(null)

  const handleCardPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setPaymentError("")

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful payment
      setPaymentSuccess(true)

      // Redirect to dashboard after successful payment
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)

      if (onSuccess) onSuccess()
    } catch (error) {
      setPaymentError("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleTransferConfirmation = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setPaymentError("")

    try {
      // Simulate confirmation processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful confirmation
      setPaymentSuccess(true)

      // Redirect to dashboard after successful confirmation
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)

      if (onSuccess) onSuccess()
    } catch (error) {
      setPaymentError("Confirmation failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="w-full max-w-[800px] mx-auto">
      <CardHeader>
        <CardTitle>Complete Your Payment</CardTitle>
        <CardDescription>
          Pay for {programName} - ₦{amount.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {paymentSuccess ? (
          <Alert className="bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Payment Successful!</AlertTitle>
            <AlertDescription>
              Your payment has been processed successfully. You will be redirected to your dashboard shortly.
            </AlertDescription>
          </Alert>
        ) : (
          <Tabs defaultValue="card">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card">Card Payment</TabsTrigger>
              <TabsTrigger value="transfer">Bank Transfer</TabsTrigger>
            </TabsList>

            <TabsContent value="card" className="mt-4">
              <form onSubmit={handleCardPayment}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>

                  {paymentError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{paymentError}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full bg-dunamis-primary" disabled={isProcessing}>
                    {isProcessing ? (
                      <>Processing Payment...</>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" /> Pay ₦{amount.toLocaleString()}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="transfer" className="mt-4">
              <div className="grid gap-6">
                <div className="rounded-lg border p-4 bg-muted/30">
                  <h3 className="font-medium mb-2">Bank Transfer Details</h3>
                  <div className="grid gap-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Account Number:</span>
                      <span className="font-medium">0034453235</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bank Name:</span>
                      <span className="font-medium">GTBank</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="font-medium">Dunamis Tutors</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">₦{amount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>After payment, please upload your receipt or confirm via support.</AlertDescription>
                </Alert>

                <form onSubmit={handleTransferConfirmation}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="transferReference">Transfer Reference/Receipt Number</Label>
                      <Input id="transferReference" placeholder="Enter reference number" required />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="receiptUpload">Upload Receipt (Optional)</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="receiptUpload"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setReceiptFile(e.target.files[0])
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("receiptUpload")?.click()}
                          className="w-full"
                        >
                          <Upload className="mr-2 h-4 w-4" /> {receiptFile ? receiptFile.name : "Choose File"}
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="transferNote">Additional Notes</Label>
                      <Textarea id="transferNote" placeholder="Any additional information about your payment" />
                    </div>

                    {paymentError && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{paymentError}</AlertDescription>
                      </Alert>
                    )}

                    <Button type="submit" className="w-full bg-dunamis-primary" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : "Confirm Payment"}
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-sm text-muted-foreground">
          Need help? Contact our support team at support@dunamistutors.com
        </p>
      </CardFooter>
    </Card>
  )
}
