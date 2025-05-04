"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Loader2, Sparkles, X } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function PremiumPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₦2,500",
      interval: "monthly",
      description: "Essential features for students",
      features: [
        "Access to all basic courses",
        "Limited AI tutor assistance",
        "Basic progress tracking",
        "Email support",
      ],
      notIncluded: ["AI-generated study plans", "Advanced analytics", "Priority support", "Exclusive content"],
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: "₦5,000",
      interval: "monthly",
      description: "Recommended for serious students",
      features: [
        "Access to all courses",
        "Unlimited AI tutor assistance",
        "Advanced progress tracking",
        "AI-generated study plans",
        "Priority email support",
        "Social challenges",
      ],
      notIncluded: ["1-on-1 tutoring sessions", "Exclusive masterclasses"],
      popular: true,
    },
    {
      id: "ultimate",
      name: "Ultimate",
      price: "₦10,000",
      interval: "monthly",
      description: "Complete learning experience",
      features: [
        "Everything in Premium",
        "1-on-1 tutoring sessions (2/month)",
        "Exclusive masterclasses",
        "Personalized learning path",
        "24/7 priority support",
        "Offline content access",
        "Certificate of completion",
      ],
      notIncluded: [],
      popular: false,
    },
  ]

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleSubscribe = () => {
    if (!selectedPlan) return

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Subscription Successful!",
        description: `You are now subscribed to the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan.`,
      })
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Premium Plans</h1>
        <p className="text-muted-foreground">Upgrade your learning experience with our premium features</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative overflow-hidden ${
              selectedPlan === plan.id ? "ring-2 ring-primary" : ""
            } ${plan.popular ? "shadow-lg" : ""}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <Badge className="rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md px-3 py-1">
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.interval}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-muted-foreground">
                    <X className="h-5 w-5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={selectedPlan === plan.id ? "default" : "outline"}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {selectedPlan === plan.id ? "Selected" : "Select Plan"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedPlan && (
        <Card>
          <CardHeader>
            <CardTitle>Complete Your Subscription</CardTitle>
            <CardDescription>
              You've selected the {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-medium">
                    {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
                  </span>
                </div>
                <span className="font-bold">{plans.find((p) => p.id === selectedPlan)?.price}/month</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Payment Method</h3>
              <div className="rounded-lg border p-4 flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <span>Credit/Debit Card</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleSubscribe} disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Subscribe Now</>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">Can I change my plan later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next
              billing cycle.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">How do I cancel my subscription?</h3>
            <p className="text-muted-foreground">
              You can cancel your subscription from your account settings. You'll continue to have access until the end
              of your current billing period.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Are there any discounts for longer subscriptions?</h3>
            <p className="text-muted-foreground">
              Yes, we offer discounts for quarterly and annual subscriptions. Contact our support team for more
              information.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
