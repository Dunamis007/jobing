"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { firestoreService } from "@/lib/firestore-service"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Coins,
  TrendingUp,
  TrendingDown,
  Clock,
  Calendar,
  ArrowUpRight,
  PenTool,
  FileQuestion,
  Sparkles,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react"

interface Transaction {
  id: string
  amount: number
  type: "credit" | "debit"
  description: string
  category: string
  createdAt: string
}

interface WalletStats {
  totalEarned: number
  totalSpent: number
  weeklyEarnings: number
  weeklySpending: number
}

export function EduCoinWallet() {
  const { user } = useAuth()
  const [balance, setBalance] = useState<number | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [stats, setStats] = useState<WalletStats>({
    totalEarned: 0,
    totalSpent: 0,
    weeklyEarnings: 0,
    weeklySpending: 0,
  })
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "credits" | "debits">("all")

  useEffect(() => {
    if (!user) return

    const fetchWalletData = async () => {
      try {
        // Fetch wallet balance
        const walletDocRef = firestoreService.doc("users", user.uid, "wallet", "educoins")
        const walletDoc = await firestoreService.getDoc(walletDocRef)

        if (walletDoc.exists) {
          setBalance(walletDoc.data().balance || 0)
        } else {
          // Initialize wallet if it doesn't exist
          await firestoreService.setDoc(walletDocRef, {
            balance: 0,
            totalEarned: 0,
            lastUpdated: new Date().toISOString(),
          })
          setBalance(0)
        }

        // Fetch transactions
        const transactionsCollectionRef = firestoreService.collection("users", user.uid, "transactions")
        const transactionDocs = await firestoreService.getDocs(transactionsCollectionRef)

        const transactionData = transactionDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Transaction[]

        // Sort transactions by date (newest first)
        transactionData.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

        setTransactions(transactionData)

        // Calculate stats
        const totalEarned = transactionData.filter((t) => t.type === "credit").reduce((sum, t) => sum + t.amount, 0)

        const totalSpent = transactionData.filter((t) => t.type === "debit").reduce((sum, t) => sum + t.amount, 0)

        // Calculate weekly stats
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

        const weeklyEarnings = transactionData
          .filter((t) => t.type === "credit" && new Date(t.createdAt) >= oneWeekAgo)
          .reduce((sum, t) => sum + t.amount, 0)

        const weeklySpending = transactionData
          .filter((t) => t.type === "debit" && new Date(t.createdAt) >= oneWeekAgo)
          .reduce((sum, t) => sum + t.amount, 0)

        setStats({
          totalEarned,
          totalSpent,
          weeklyEarnings,
          weeklySpending,
        })
      } catch (error) {
        console.error("Error fetching wallet data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWalletData()
  }, [user])

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true
    if (filter === "credits") return transaction.type === "credit"
    if (filter === "debits") return transaction.type === "debit"
    return true
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "attendance":
        return <Calendar className="h-4 w-4" />
      case "assignment":
        return <PenTool className="h-4 w-4" />
      case "quiz":
        return <FileQuestion className="h-4 w-4" />
      case "system":
        return <Sparkles className="h-4 w-4" />
      case "purchase":
        return <ShoppingCart className="h-4 w-4" />
      case "penalty":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Coins className="h-4 w-4" />
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>EduCoin Wallet</CardTitle>
          <CardDescription>Manage your educational currency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-12 w-24" />
              <Skeleton className="h-10 w-28" />
            </div>
            <Separator />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>EduCoin Wallet</CardTitle>
            <CardDescription>Manage your educational currency</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Balance Display */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current Balance</p>
                <h2 className="text-3xl font-bold">
                  {balance} <span className="text-lg font-normal">EduCoins</span>
                </h2>
              </div>
            </div>
            <Button>Earn More</Button>
          </div>

          <Separator />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Earned</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-medium">{stats.totalEarned}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">Total Spent</p>
              <div className="flex items-center gap-1">
                <TrendingDown className="h-4 w-4 text-destructive" />
                <span className="font-medium">{stats.totalSpent}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">This Week Earned</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-medium">{stats.weeklyEarnings}</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">This Week Spent</p>
              <div className="flex items-center gap-1">
                <TrendingDown className="h-4 w-4 text-destructive" />
                <span className="font-medium">{stats.weeklySpending}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Transactions */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Recent Transactions</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-secondary" : ""}
                >
                  All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilter("credits")}
                  className={filter === "credits" ? "bg-secondary" : ""}
                >
                  Credits
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilter("debits")}
                  className={filter === "debits" ? "bg-secondary" : ""}
                >
                  Debits
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredTransactions.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">No transactions found</div>
              ) : (
                filteredTransactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          transaction.type === "credit" ? "bg-success/10" : "bg-destructive/10"
                        }`}
                      >
                        {transaction.type === "credit" ? (
                          <TrendingUp className="h-4 w-4 text-success" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{formatDate(transaction.createdAt)}</span>
                          <Badge variant="outline" className="text-xs py-0 h-5">
                            <div className="flex items-center gap-1">
                              {getCategoryIcon(transaction.category)}
                              <span>{transaction.category}</span>
                            </div>
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`font-medium ${transaction.type === "credit" ? "text-success" : "text-destructive"}`}
                    >
                      {transaction.type === "credit" ? "+" : "-"}
                      {transaction.amount}
                    </div>
                  </div>
                ))
              )}

              {filteredTransactions.length > 5 && (
                <Button variant="outline" className="w-full mt-2">
                  View All Transactions
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
