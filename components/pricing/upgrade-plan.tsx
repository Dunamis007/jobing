"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface PricingTier {
  id: string
  name: string
  priceUSD: number
  priceNGN: number
  period: string
  features: string[]
  popular: boolean
  color: string
  buttonColor: string
}

export function UpgradePlan() {
  const [currency, setCurrency] = useState<"USD" | "NGN">("NGN")

  const pricingTiers: PricingTier[] = [
    {
      id: "bronze",
      name: "Bronze Tier",
      priceUSD: 29,
      priceNGN: 20000,
      period: "Monthly",
      features: [
        "Access to all modules",
        "Community forum access",
        "All quizzes and assessments",
        "Basic certificate",
        "Email support",
        "Weekly group mentorship",
      ],
      popular: false,
      color: "border-amber-700",
      buttonColor: "bg-amber-700 hover:bg-amber-800",
    },
    {
      id: "silver",
      name: "Silver Tier",
      priceUSD: 49,
      priceNGN: 35000,
      period: "Monthly",
      features: [
        "Everything in Bronze",
        "Priority support",
        "1 monthly 1-on-1 mentorship",
        "Advanced certificate",
        "Job placement assistance",
        "Resume review",
        "500 EduCoins monthly",
      ],
      popular: true,
      color: "border-gray-400",
      buttonColor: "bg-gray-500 hover:bg-gray-600",
    },
    {
      id: "gold",
      name: "Gold Tier",
      priceUSD: 69,
      priceNGN: 50000,
      period: "Monthly",
      features: [
        "Everything in Silver",
        "Weekly 1-on-1 mentorship",
        "Premium certificate",
        "Guaranteed job placement",
        "LinkedIn profile optimization",
        "Mock interviews",
        "1000 EduCoins monthly",
        "Lifetime access to updates",
      ],
      popular: false,
      color: "border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-dunamis-primary mb-2">Upgrade Your Learning Experience</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that best fits your learning goals and budget</p>
        <div className="flex items-center justify-center mt-4 gap-2">
          <span className={currency === "USD" ? "font-bold" : ""}>USD</span>
          <button
            onClick={() => setCurrency(currency === "USD" ? "NGN" : "USD")}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                currency === "NGN" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={currency === "NGN" ? "font-bold" : ""}>NGN</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <Card key={tier.id} className={`relative ${tier.popular ? "border-2 " + tier.color : ""}`}>
            {tier.popular && (
              <div className="absolute top-0 right-0 bg-dunamis-primary text-white text-xs py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">
                  {currency === "USD" ? "$" + tier.priceUSD : "₦" + tier.priceNGN.toLocaleString()}
                </span>
                <span className="text-gray-500">/{tier.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${tier.buttonColor}`}>Upgrade Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
