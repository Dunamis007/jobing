import type { Metadata } from "next"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { EduCoinWallet } from "@/components/educoin-wallet"

export const metadata: Metadata = {
  title: "EduCoin Wallet | Dunamis Tutors",
  description: "Manage your EduCoins and rewards in the Dunamis Tutors platform.",
}

export default function WalletPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      <div className="flex-1 lg:ml-72">
        <div className="container py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#0e3b62]">EduCoin Wallet</h1>
            <p className="text-gray-500">Manage your EduCoins and redeem rewards</p>
          </div>

          <EduCoinWallet />
        </div>
      </div>
    </div>
  )
}
