"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  CreditCardIcon,
  Landmark,
  Banknote,
} from "lucide-react"

export default function PaymentInsightsPage() {
  const [selectedCurrency, setSelectedCurrency] = useState("usd")

  const currencies = [
    { code: "usd", name: "US Dollar", symbol: "$", rate: 1 },
    { code: "eur", name: "Euro", symbol: "€", rate: 0.92 },
    { code: "gbp", name: "British Pound", symbol: "£", rate: 0.79 },
    { code: "jpy", name: "Japanese Yen", symbol: "¥", rate: 149.82 },
    { code: "cad", name: "Canadian Dollar", symbol: "C$", rate: 1.37 },
    { code: "aud", name: "Australian Dollar", symbol: "A$", rate: 1.52 },
    { code: "ngn", name: "Nigerian Naira", symbol: "₦", rate: 1550 },
  ]

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit/Debit Cards",
      icon: CreditCardIcon,
      percentage: 68,
      trend: "up",
      change: 2.5,
    },
    {
      id: "bank-transfer",
      name: "Bank Transfers",
      icon: Landmark,
      percentage: 15,
      trend: "down",
      change: 1.2,
    },
    {
      id: "digital-wallets",
      name: "Digital Wallets",
      icon: Wallet,
      percentage: 12,
      trend: "up",
      change: 3.8,
    },
    {
      id: "cash",
      name: "Cash/Other",
      icon: Banknote,
      percentage: 5,
      trend: "down",
      change: 0.7,
    },
  ]

  const regions = [
    {
      name: "North America",
      percentage: 42,
      trend: "up",
      change: 1.8,
      currencies: ["USD", "CAD"],
      paymentPreference: "Credit Cards",
    },
    {
      name: "Europe",
      percentage: 28,
      trend: "up",
      change: 2.3,
      currencies: ["EUR", "GBP"],
      paymentPreference: "Digital Wallets",
    },
    {
      name: "Asia Pacific",
      percentage: 18,
      trend: "up",
      change: 4.5,
      currencies: ["JPY", "AUD"],
      paymentPreference: "Mobile Payments",
    },
    {
      name: "Africa",
      percentage: 7,
      trend: "up",
      change: 5.2,
      currencies: ["NGN", "ZAR"],
      paymentPreference: "Mobile Money",
    },
    {
      name: "South America",
      percentage: 5,
      trend: "down",
      change: 0.8,
      currencies: ["BRL", "ARS"],
      paymentPreference: "Installment Payments",
    },
  ]

  const insights = [
    {
      title: "Mobile Payment Growth",
      description: "Mobile payments are growing 3x faster than traditional payment methods.",
      category: "Trend",
      action: "Optimize checkout for mobile",
    },
    {
      title: "Regional Preferences",
      description: "Payment preferences vary significantly by region. Localize your payment options.",
      category: "Regional",
      action: "Offer local payment methods",
    },
    {
      title: "Currency Conversion",
      description: "Customers prefer to pay in their local currency. Offer multiple currency options.",
      category: "Currency",
      action: "Implement multi-currency support",
    },
    {
      title: "Abandoned Carts",
      description: "25% of cart abandonment is due to limited payment options.",
      category: "Conversion",
      action: "Expand payment options",
    },
  ]

  const getSelectedCurrencySymbol = () => {
    const currency = currencies.find((c) => c.code === selectedCurrency)
    return currency ? currency.symbol : "$"
  }

  const convertAmount = (amount: number) => {
    const currency = currencies.find((c) => c.code === selectedCurrency)
    return currency ? (amount * currency.rate).toFixed(2) : amount.toFixed(2)
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Payment Insights</h1>
        <p className="text-muted-foreground">
          Understand payment trends, currency insights, and optimize your payment strategy
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Payment Analytics</h2>
          <p className="text-sm text-muted-foreground">Overview of payment methods and regional preferences</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Currency:</span>
          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  {currency.symbol} {currency.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {getSelectedCurrencySymbol()}
              {convertAmount(78.45)}
            </div>
            <p className="text-xs flex items-center text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8%</div>
            <p className="text-xs flex items-center text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +0.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Payment Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.2%</div>
            <p className="text-xs flex items-center text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +1.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Currency Diversity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs flex items-center text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="methods" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="regions">Regional Insights</TabsTrigger>
          <TabsTrigger value="currencies">Currency Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {paymentMethods.map((method) => (
              <Card key={method.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center">
                      <method.icon className="h-5 w-5 mr-2 text-blue-600" />
                      {method.name}
                    </CardTitle>
                    <Badge
                      className={method.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {method.trend === "up" ? "+" : "-"}
                      {method.change}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{method.percentage}%</div>
                  <div className="mt-2 h-2 w-full bg-muted overflow-hidden rounded-full">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${method.percentage}%` }}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method Optimization</CardTitle>
              <CardDescription>Strategies to optimize your payment methods for better conversion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">1. Offer Multiple Payment Options</h3>
                <p className="text-sm text-muted-foreground">
                  Provide at least 3-5 payment methods to accommodate different customer preferences.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">2. Optimize Mobile Checkout</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure your payment process is mobile-friendly with minimal steps.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">3. Display Security Badges</h3>
                <p className="text-sm text-muted-foreground">
                  Prominently display security certifications to build trust during checkout.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regions" className="space-y-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 border-b bg-muted/50 p-3 text-sm font-medium">
              <div>Region</div>
              <div>Percentage</div>
              <div>Trend</div>
              <div>Currencies</div>
              <div>Payment Preference</div>
            </div>
            <div className="divide-y">
              {regions.map((region, index) => (
                <div key={index} className="grid grid-cols-5 p-3 text-sm">
                  <div className="font-medium">{region.name}</div>
                  <div>{region.percentage}%</div>
                  <div className={region.trend === "up" ? "text-green-600" : "text-red-600"}>
                    <span className="flex items-center">
                      {region.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                      )}
                      {region.change}%
                    </span>
                  </div>
                  <div>{region.currencies.join(", ")}</div>
                  <div>{region.paymentPreference}</div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-600" />
                Regional Payment Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">North America</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on credit card optimization and digital wallet integration.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Europe</h3>
                <p className="text-sm text-muted-foreground">
                  Prioritize digital wallets and bank transfers. Ensure GDPR compliance.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Asia Pacific</h3>
                <p className="text-sm text-muted-foreground">Integrate mobile payment options and QR code payments.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Africa</h3>
                <p className="text-sm text-muted-foreground">
                  Mobile money services are essential. Consider USSD payment options.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">South America</h3>
                <p className="text-sm text-muted-foreground">
                  Offer installment payment options and local payment methods.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="currencies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Currency Exchange Rates</CardTitle>
              <CardDescription>Current exchange rates relative to USD</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                  <div>Currency</div>
                  <div>Code</div>
                  <div>Symbol</div>
                  <div>Rate (vs USD)</div>
                </div>
                <div className="divide-y">
                  {currencies
                    .filter((c) => c.code !== "usd")
                    .map((currency) => (
                      <div key={currency.code} className="grid grid-cols-4 p-3 text-sm">
                        <div className="font-medium">{currency.name}</div>
                        <div>{currency.code.toUpperCase()}</div>
                        <div>{currency.symbol}</div>
                        <div>{currency.rate}</div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multi-Currency Strategy</CardTitle>
              <CardDescription>Best practices for implementing multi-currency support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">1. Display Prices in Local Currency</h3>
                <p className="text-sm text-muted-foreground">
                  Use IP geolocation to automatically display prices in the customer's local currency.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">2. Currency Selector</h3>
                <p className="text-sm text-muted-foreground">
                  Provide an easy-to-use currency selector that remembers the customer's preference.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">3. Transparent Conversion</h3>
                <p className="text-sm text-muted-foreground">
                  Clearly communicate exchange rates and any conversion fees to build trust.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">4. Price Rounding Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Implement psychological pricing in each currency rather than direct conversions.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Implement Multi-Currency Support</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Key Payment Insights</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((insight, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{insight.title}</CardTitle>
                  <Badge variant="outline">{insight.category}</Badge>
                </div>
                <CardDescription>{insight.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  {insight.action}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
