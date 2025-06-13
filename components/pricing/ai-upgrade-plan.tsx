"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Brain, Globe, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

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

export function AIUpgradePlan() {
  const [currency, setCurrency] = useState<"USD" | "NGN">("NGN")
  const [showCalendly, setShowCalendly] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const pricingTiers: PricingTier[] = [
    {
      id: "bronze",
      name: "Bronze Tier",
      priceUSD: 29,
      priceNGN: 20000,
      period: "Monthly",
      features: [
        "Access to all AI modules",
        "Community forum access",
        "All quizzes and assessments",
        "Basic AI certificate",
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
        "Advanced AI certificate",
        "Job placement assistance",
        "Resume review",
        "500 EduCoins monthly",
        "GPT API credits",
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
        "Premium AI certificate",
        "Guaranteed job placement",
        "LinkedIn profile optimization",
        "Mock interviews",
        "1000 EduCoins monthly",
        "Lifetime access to updates",
        "AI research collaboration",
      ],
      popular: false,
      color: "border-yellow-400",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  ]

  const handleUpgrade = (tierId: string) => {
    setSelectedTier(tierId)
    setShowCalendly(true)
  }

  return (
    <>
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Upgrade Your AI Learning Experience</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that best fits your AI learning goals</p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <span className={currency === "USD" ? "font-bold" : ""}>USD</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrency(currency === "USD" ? "NGN" : "USD")}
              className="flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              {currency}
            </Button>
            <span className={currency === "NGN" ? "font-bold" : ""}>NGN</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <Card key={tier.id} className={`relative ${tier.popular ? "border-2 " + tier.color : ""}`}>
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-bl-md rounded-tr-md rounded-br-none rounded-tl-none">Most Popular</Badge>
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
                <Button className={`w-full ${tier.buttonColor}`} onClick={() => handleUpgrade(tier.id)}>
                  <Brain className="mr-2 h-4 w-4" />
                  Upgrade Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Schedule Your Onboarding Call
            </DialogTitle>
            <DialogDescription>
              {selectedTier && `Thank you for choosing the ${pricingTiers.find((t) => t.id === selectedTier)?.name}!`}{" "}
              Please schedule your onboarding call with one of our AI mentors.
            </DialogDescription>
          </DialogHeader>
          <div className="h-[400px] border rounded-md">
            {/* This would be replaced with an actual Calendly embed */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Calendly Integration</h3>
                <p className="text-gray-600 mb-4">
                  In a real implementation, this would be a Calendly embed for scheduling mentor sessions.
                </p>
                <Button onClick={() => setShowCalendly(false)}>Close Preview</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
