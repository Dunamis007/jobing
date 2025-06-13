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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CoinsIcon as Coin, CreditCard, DollarSign, History, Plus, Star, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

interface Transaction {
  id: string
  type: "topup" | "spend" | "earn" | "decay"
  amount: number
  description: string
  date: Date
}

interface EduWalletProps {
  className?: string
  variant?: "default" | "compact"
}

export function EduWallet({ className, variant = "default" }: EduWalletProps) {
  const [balance, setBalance] = useState(500)
  const [topupAmount, setTopupAmount] = useState(1000)
  const [showTopupModal, setShowTopupModal] = useState(false)
  const [showHistoryModal, setShowHistoryModal] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "tx1",
      type: "earn",
      amount: 200,
      description: "Quiz completion bonus",
      date: new Date(Date.now() - 86400000),
    },
    {
      id: "tx2",
      type: "earn",
      amount: 300,
      description: "7-day streak bonus",
      date: new Date(Date.now() - 172800000),
    },
    {
      id: "tx3",
      type: "spend",
      amount: -150,
      description: "Unlocked Advanced AI module",
      date: new Date(Date.now() - 259200000),
    },
    {
      id: "tx4",
      type: "decay",
      amount: -50,
      description: "Weekly coin decay",
      date: new Date(Date.now() - 604800000),
    },
  ])

  const handleTopup = () => {
    // In a real app, this would integrate with Paystack
    const newTransaction: Transaction = {
      id: `tx${transactions.length + 1}`,
      type: "topup",
      amount: topupAmount,
      description: `Topped up ${topupAmount} EduCoins`,
      date: new Date(),
    }

    setBalance(balance + topupAmount)
    setTransactions([newTransaction, ...transactions])
    setShowTopupModal(false)
  }

  if (variant === "compact") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className={cn("flex items-center gap-2", className)}>
            <Coin className="h-4 w-4 text-yellow-500" />
            <span>{balance}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>EduWallet</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setShowTopupModal(true)}>
            <Plus className="mr-2 h-4 w-4" />
            <span>Top Up</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setShowHistoryModal(true)}>
            <History className="mr-2 h-4 w-4" />
            <span>Transaction History</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <>
      <Card className={cn("border-yellow-200", className)}>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <Wallet className="mr-2 h-5 w-5 text-yellow-500" />
            EduWallet
          </CardTitle>
          <CardDescription>Your learning currency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <div className="flex items-center">
              <Coin className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-3xl font-bold">{balance}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              ₦1 = 1 EduCoin
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="pt-0 flex gap-2">
          <Button size="sm" className="flex-1" onClick={() => setShowTopupModal(true)}>
            <Plus className="mr-1 h-4 w-4" />
            Top Up
          </Button>
          <Button size="sm" variant="outline" className="flex-1" onClick={() => setShowHistoryModal(true)}>
            <History className="mr-1 h-4 w-4" />
            History
          </Button>
        </CardFooter>
      </Card>

      {/* Top Up Modal */}
      <Dialog open={showTopupModal} onOpenChange={setShowTopupModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Top Up EduWallet</DialogTitle>
            <DialogDescription>Add EduCoins to your wallet using Paystack.</DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="naira" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="naira">Naira (₦)</TabsTrigger>
              <TabsTrigger value="usd">USD ($)</TabsTrigger>
            </TabsList>
            <TabsContent value="naira" className="space-y-4 py-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Amount (₦)</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[1000, 2000, 5000].map((amount) => (
                    <Button
                      key={amount}
                      variant={topupAmount === amount ? "default" : "outline"}
                      onClick={() => setTopupAmount(amount)}
                      className="text-center"
                    >
                      ₦{amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Input
                    type="number"
                    value={topupAmount}
                    onChange={(e) => setTopupAmount(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground">= {topupAmount} EduCoins</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="usd" className="space-y-4 py-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Amount ($)</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 20].map((amount) => (
                    <Button
                      key={amount}
                      variant={topupAmount === amount * 200 ? "default" : "outline"}
                      onClick={() => setTopupAmount(amount * 200)}
                      className="text-center"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Input
                    type="number"
                    value={topupAmount / 200}
                    onChange={(e) => setTopupAmount(Number(e.target.value) * 200)}
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground">= {topupAmount} EduCoins</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTopupModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleTopup} className="gap-2">
              <CreditCard className="h-4 w-4" />
              Pay with Paystack
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Transaction History Modal */}
      <Dialog open={showHistoryModal} onOpenChange={setShowHistoryModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Transaction History</DialogTitle>
            <DialogDescription>Your EduCoin transaction history</DialogDescription>
          </DialogHeader>
          <div className="max-h-[400px] overflow-y-auto space-y-2">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center gap-3">
                  {tx.type === "topup" && <Plus className="h-4 w-4 text-green-500" />}
                  {tx.type === "spend" && <DollarSign className="h-4 w-4 text-red-500" />}
                  {tx.type === "earn" && <Star className="h-4 w-4 text-yellow-500" />}
                  {tx.type === "decay" && <History className="h-4 w-4 text-orange-500" />}
                  <div>
                    <p className="text-sm font-medium">{tx.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {tx.date.toLocaleDateString()} at {tx.date.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
                <span className={cn("font-medium", tx.amount > 0 ? "text-green-600" : "text-red-600")}>
                  {tx.amount > 0 ? "+" : ""}
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button onClick={() => setShowHistoryModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
