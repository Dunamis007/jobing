"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  CoinsIcon as Coin,
  CreditCard,
  DollarSign,
  History,
  Plus,
  Star,
  Wallet,
  AlertCircle,
  TrendingUp,
  Flame,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Transaction {
  id: string
  type: "topup" | "spend" | "earn" | "decay"
  amount: number
  description: string
  date: Date
}

interface EnhancedEduWalletProps {
  balance: number
  onBalanceChange: (newBalance: number) => void
  streakDays: number
  className?: string
}

export function EnhancedEduWallet({ balance, onBalanceChange, streakDays, className }: EnhancedEduWalletProps) {
  const [topupAmount, setTopupAmount] = useState(1000)
  const [showTopupModal, setShowTopupModal] = useState(false)
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "tx1",
      type: "earn",
      amount: 200,
      description: "Module completion bonus",
      date: new Date(Date.now() - 86400000),
    },
    {
      id: "tx2",
      type: "earn",
      amount: 150,
      description: `${streakDays}-day streak bonus`,
      date: new Date(Date.now() - 172800000),
    },
    {
      id: "tx3",
      type: "spend",
      amount: -300,
      description: "Unlocked Advanced Module",
      date: new Date(Date.now() - 259200000),
    },
    {
      id: "tx4",
      type: "decay",
      amount: -50,
      description: "Weekly coin decay (10%)",
      date: new Date(Date.now() - 604800000),
    },
  ])

  const handlePaystackTopup = async () => {
    setIsProcessing(true)

    // Simulate Paystack integration
    try {
      // In real implementation, integrate with Paystack API
      const paystackConfig = {
        reference: `tx_${Date.now()}`,
        email: "user@example.com",
        amount: topupAmount * 100, // Paystack expects amount in kobo
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        text: "Top Up EduCoins",
        onSuccess: (reference: any) => {
          console.log("Payment successful:", reference)
          handleSuccessfulTopup()
        },
        onClose: () => {
          setIsProcessing(false)
        },
      }

      // For demo purposes, simulate successful payment after 2 seconds
      setTimeout(() => {
        handleSuccessfulTopup()
      }, 2000)
    } catch (error) {
      console.error("Payment failed:", error)
      setIsProcessing(false)
    }
  }

  const handleSuccessfulTopup = () => {
    const newTransaction: Transaction = {
      id: `tx${transactions.length + 1}`,
      type: "topup",
      amount: topupAmount,
      description: `Paystack top-up: ₦${topupAmount.toLocaleString()}`,
      date: new Date(),
    }

    onBalanceChange(balance + topupAmount)
    setTransactions([newTransaction, ...transactions])
    setShowTopupModal(false)
    setIsProcessing(false)
  }

  const quickTopupAmounts = [500, 1000, 2000, 5000, 10000]
  const nextDecayDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
  const decayAmount = Math.floor(balance * 0.1)

  return (
    <>
      <Card className={cn("border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50", className)}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Wallet className="mr-2 h-5 w-5 text-yellow-600" />
              EduWallet
            </CardTitle>
            <Badge variant="outline" className="text-xs bg-white">
              ₦1 = 1 EduCoin
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Balance Display */}
          <div className="text-center p-4 bg-white rounded-lg border">
            <div className="flex items-center justify-center mb-2">
              <Coin className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-4xl font-bold text-yellow-600">{balance.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-600">Available EduCoins</p>
          </div>

          {/* Streak Bonus Section */}
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="font-medium text-sm">Daily Streak</span>
              </div>
              <Badge variant="outline" className="text-orange-600 border-orange-300">
                {streakDays} days
              </Badge>
            </div>
            <Progress value={(streakDays % 7) * (100 / 7)} className="h-2 mb-2" />
            <p className="text-xs text-gray-600">
              Next bonus in {7 - (streakDays % 7)} days: +{50 + streakDays * 5} EduCoins
            </p>
          </div>

          {/* Decay Warning */}
          {balance > 0 && (
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 text-red-600 mb-1">
                <AlertCircle className="h-4 w-4" />
                <p className="font-medium text-sm">Coin Decay Alert</p>
              </div>
              <p className="text-xs text-gray-600">
                {decayAmount} coins will decay on {nextDecayDate.toLocaleDateString()}
              </p>
              <div className="mt-2">
                <Progress value={75} className="h-1" />
                <p className="text-xs text-red-500 mt-1">3 days remaining</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600" onClick={() => setShowTopupModal(true)}>
              <Plus className="mr-1 h-4 w-4" />
              Top Up
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => setShowHistoryModal(true)}>
              <History className="mr-1 h-4 w-4" />
              History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Top Up Modal with Paystack */}
      <Dialog open={showTopupModal} onOpenChange={setShowTopupModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Coin className="h-5 w-5 text-yellow-500" />
              Top Up EduWallet
            </DialogTitle>
            <DialogDescription>Add EduCoins to unlock premium features and accelerate your learning</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Quick Amount Selection */}
            <div>
              <h4 className="font-medium mb-3">Quick Top-Up Amounts</h4>
              <div className="grid grid-cols-3 gap-2">
                {quickTopupAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={topupAmount === amount ? "default" : "outline"}
                    onClick={() => setTopupAmount(amount)}
                    className="text-center"
                  >
                    ₦{amount.toLocaleString()}
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <h4 className="font-medium mb-2">Custom Amount</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm">₦</span>
                <Input
                  type="number"
                  value={topupAmount}
                  onChange={(e) => setTopupAmount(Number(e.target.value) || 0)}
                  className="flex-1"
                  min="100"
                  max="50000"
                />
                <span className="text-sm text-gray-500">= {topupAmount} EduCoins</span>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span>Amount:</span>
                <span className="font-bold">₦{topupAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>EduCoins:</span>
                <span className="font-bold text-yellow-600">+{topupAmount}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Payment Method:</span>
                <span className="flex items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  Paystack
                </span>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTopupModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={handlePaystackTopup}
              disabled={isProcessing || topupAmount < 100}
              className="bg-green-600 hover:bg-green-700"
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay ₦{topupAmount.toLocaleString()}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Enhanced Transaction History Modal */}
      <Dialog open={showHistoryModal} onOpenChange={setShowHistoryModal}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Transaction History</DialogTitle>
            <DialogDescription>Your complete EduCoin transaction history</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-3 text-center">
                  <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-1" />
                  <p className="text-sm font-medium">Total Earned</p>
                  <p className="text-lg font-bold text-green-600">
                    +{transactions.filter((t) => t.type === "earn").reduce((sum, t) => sum + t.amount, 0)}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 text-center">
                  <DollarSign className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                  <p className="text-sm font-medium">Total Spent</p>
                  <p className="text-lg font-bold text-blue-600">
                    {transactions.filter((t) => t.type === "spend").reduce((sum, t) => sum + Math.abs(t.amount), 0)}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 text-center">
                  <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-1" />
                  <p className="text-sm font-medium">Decayed</p>
                  <p className="text-lg font-bold text-red-600">
                    {transactions.filter((t) => t.type === "decay").reduce((sum, t) => sum + Math.abs(t.amount), 0)}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Transaction List */}
            <div className="max-h-[300px] overflow-y-auto space-y-2">
              {transactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {tx.type === "topup" && <Plus className="h-5 w-5 text-green-500" />}
                    {tx.type === "spend" && <DollarSign className="h-5 w-5 text-blue-500" />}
                    {tx.type === "earn" && <Star className="h-5 w-5 text-yellow-500" />}
                    {tx.type === "decay" && <AlertCircle className="h-5 w-5 text-red-500" />}
                    <div>
                      <p className="font-medium text-sm">{tx.description}</p>
                      <p className="text-xs text-gray-500">
                        {tx.date.toLocaleDateString()} at {tx.date.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  <span className={cn("font-bold", tx.amount > 0 ? "text-green-600" : "text-red-600")}>
                    {tx.amount > 0 ? "+" : ""}
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setShowHistoryModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
