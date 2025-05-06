"use client"

import { useState } from "react"
import { Coins, ArrowRight, ArrowUp, ArrowDown, Gift, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface Transaction {
  id: string
  type: "earned" | "spent"
  amount: number
  description: string
  date: string
}

export function EduCoinWallet() {
  const [balance, setBalance] = useState(2450)
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "tx1",
      type: "earned",
      amount: 150,
      description: "Completed IELTS Reading Module",
      date: "2023-05-01",
    },
    {
      id: "tx2",
      type: "earned",
      amount: 300,
      description: "Weekly Challenge Winner",
      date: "2023-04-28",
    },
    {
      id: "tx3",
      type: "spent",
      amount: 100,
      description: "Unlocked Premium Study Materials",
      date: "2023-04-25",
    },
    {
      id: "tx4",
      type: "earned",
      amount: 50,
      description: "Daily Login Streak (10 days)",
      date: "2023-04-22",
    },
    {
      id: "tx5",
      type: "spent",
      amount: 200,
      description: "Mock Test Session",
      date: "2023-04-20",
    },
  ])

  const rewards = [
    {
      id: "reward1",
      name: "Premium Study Materials",
      cost: 100,
      description: "Unlock exclusive study materials for your program",
      icon: BookOpen,
    },
    {
      id: "reward2",
      name: "One-on-One Tutoring",
      cost: 500,
      description: "30-minute personalized tutoring session",
      icon: Gift,
    },
    {
      id: "reward3",
      name: "Mock Test Session",
      cost: 200,
      description: "Full-length practice test with detailed feedback",
      icon: BookOpen,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold">EduCoin Wallet</CardTitle>
          <CardDescription>Earn and spend EduCoins to enhance your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                <Coins className="h-8 w-8 text-[#0e3b62]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Balance</p>
                <h3 className="text-3xl font-bold text-[#0e3b62]">{balance} EduCoins</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm text-gray-500">Level 7</span>
                <span className="text-sm text-gray-500">Level 8</span>
              </div>
              <Progress value={78} className="h-2 w-full md:w-48" />
              <p className="text-xs text-gray-500 text-center">550 more EduCoins to reach Level 8</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="space-y-4 pt-4">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      transaction.type === "earned" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {transaction.type === "earned" ? (
                      <ArrowUp className="h-5 w-5" />
                    ) : (
                      <ArrowDown className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className={`font-bold ${transaction.type === "earned" ? "text-green-600" : "text-orange-600"}`}>
                  {transaction.type === "earned" ? "+" : "-"}
                  {transaction.amount} EduCoins
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="rewards" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards.map((reward) => (
              <Card key={reward.id} className="border hover:border-[#0e3b62] transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#0e3b62]/10 flex items-center justify-center">
                      <reward.icon className="h-4 w-4 text-[#0e3b62]" />
                    </div>
                    <CardTitle className="text-lg">{reward.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{reward.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="font-bold text-[#0e3b62]">{reward.cost} EduCoins</div>
                  <Button size="sm" className="bg-[#0e3b62] hover:bg-[#1a5c96]" disabled={balance < reward.cost}>
                    Redeem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
