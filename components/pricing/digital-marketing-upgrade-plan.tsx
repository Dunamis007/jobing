"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Share2, Search, LineChart, FileText, Mail } from "lucide-react"

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

export function DigitalMarketingUpgradePlan() {
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
        "Social media templates",
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
        "Campaign performance reviews",
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
        "Brand strategy consultation",
      ],
      popular: false,
      color: "border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-2">Upgrade Your Marketing Skills</h3>
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
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs py-1 px-3 rounded-bl-lg rounded-tr-lg">
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
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${tier.buttonColor}`}>Upgrade to {tier.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="text-xl font-bold mb-4">What You'll Get with Premium</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Share2 className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold">Social Media Mastery</h4>
              <p className="text-sm text-gray-600">
                Learn advanced social media strategies and get access to premium tools
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Search className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold">SEO Expertise</h4>
              <p className="text-sm text-gray-600">Master search engine optimization with expert guidance and tools</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <LineChart className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold">Analytics Mastery</h4>
              <p className="text-sm text-gray-600">Learn to analyze and optimize your marketing campaigns</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold">Content Strategy</h4>
              <p className="text-sm text-gray-600">Create compelling content that drives engagement and conversions</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold">Email Marketing</h4>
              <p className="text-sm text-gray-600">Build effective email campaigns that convert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
