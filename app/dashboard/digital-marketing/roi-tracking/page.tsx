"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  ArrowRight,
  Download,
  Calculator,
  Share2,
} from "lucide-react"

export default function ROITrackingPage() {
  const [campaignType, setCampaignType] = useState("social")
  const [investment, setInvestment] = useState("1000")
  const [revenue, setRevenue] = useState("3500")
  const [timeframe, setTimeframe] = useState("month")

  const calculateROI = () => {
    const investmentValue = Number.parseFloat(investment) || 0
    const revenueValue = Number.parseFloat(revenue) || 0

    if (investmentValue === 0) return 0

    const roi = ((revenueValue - investmentValue) / investmentValue) * 100
    return roi.toFixed(2)
  }

  const campaigns = [
    {
      id: 1,
      name: "Summer Sale Email Campaign",
      type: "Email",
      investment: 1200,
      revenue: 4800,
      roi: 300,
      status: "active",
    },
    {
      id: 2,
      name: "Google Ads Search Campaign",
      type: "PPC",
      investment: 2500,
      revenue: 7500,
      roi: 200,
      status: "active",
    },
    {
      id: 3,
      name: "Instagram Product Showcase",
      type: "Social",
      investment: 1800,
      revenue: 5400,
      roi: 200,
      status: "active",
    },
    {
      id: 4,
      name: "Content Marketing Blog Series",
      type: "Content",
      investment: 3000,
      revenue: 6000,
      roi: 100,
      status: "active",
    },
    {
      id: 5,
      name: "Facebook Retargeting Campaign",
      type: "Social",
      investment: 1500,
      revenue: 4500,
      roi: 200,
      status: "paused",
    },
  ]

  const metrics = [
    {
      id: "roi",
      name: "Return on Investment",
      value: "185%",
      change: "+12%",
      trend: "up",
    },
    {
      id: "cac",
      name: "Customer Acquisition Cost",
      value: "$45",
      change: "-8%",
      trend: "down",
    },
    {
      id: "ctr",
      name: "Click-Through Rate",
      value: "3.2%",
      change: "+0.5%",
      trend: "up",
    },
    {
      id: "conversion",
      name: "Conversion Rate",
      value: "2.8%",
      change: "+0.3%",
      trend: "up",
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ROI Tracking</h1>
        <p className="text-muted-foreground">
          Track and analyze the return on investment for your digital marketing campaigns
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs flex items-center ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="campaigns">Campaign Performance</TabsTrigger>
          <TabsTrigger value="calculator">ROI Calculator</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign ROI Overview</CardTitle>
              <CardDescription>Track the return on investment for all your marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 border-b bg-muted/50 p-3 text-sm font-medium">
                  <div className="col-span-2">Campaign</div>
                  <div>Type</div>
                  <div>Investment</div>
                  <div>Revenue</div>
                  <div>ROI</div>
                </div>
                <div className="divide-y">
                  {campaigns.map((campaign) => (
                    <div key={campaign.id} className="grid grid-cols-6 p-3 text-sm">
                      <div className="col-span-2 font-medium">{campaign.name}</div>
                      <div>{campaign.type}</div>
                      <div>${campaign.investment.toLocaleString()}</div>
                      <div>${campaign.revenue.toLocaleString()}</div>
                      <div className="flex items-center">
                        <span className="text-green-600 font-medium">{campaign.roi}%</span>
                        {campaign.status === "paused" && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            Paused
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                  Campaign Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground text-sm">Interactive chart visualization would appear here</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-purple-600" />
                  ROI by Channel
                </CardTitle>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                <p className="text-muted-foreground text-sm">Interactive chart visualization would appear here</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calculator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Marketing ROI Calculator</CardTitle>
              <CardDescription>Calculate the return on investment for your marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-type">Campaign Type</Label>
                    <Select value={campaignType} onValueChange={setCampaignType}>
                      <SelectTrigger id="campaign-type">
                        <SelectValue placeholder="Select campaign type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="email">Email Marketing</SelectItem>
                        <SelectItem value="ppc">Pay-Per-Click</SelectItem>
                        <SelectItem value="content">Content Marketing</SelectItem>
                        <SelectItem value="seo">SEO</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment">Total Investment ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="investment"
                        type="number"
                        className="pl-8"
                        value={investment}
                        onChange={(e) => setInvestment(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="revenue">Total Revenue ($)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="revenue"
                        type="number"
                        className="pl-8"
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Timeframe</Label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger id="timeframe">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">Weekly</SelectItem>
                        <SelectItem value="month">Monthly</SelectItem>
                        <SelectItem value="quarter">Quarterly</SelectItem>
                        <SelectItem value="year">Yearly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Calculated ROI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center py-6">
                        <div className="text-5xl font-bold flex items-center">
                          {calculateROI()}
                          <Percent className="h-8 w-8 ml-1" />
                        </div>
                      </div>
                      <div className="text-center text-sm text-muted-foreground">
                        {Number.parseFloat(calculateROI()) > 0 ? (
                          <span className="text-green-600">Positive return on investment</span>
                        ) : (
                          <span className="text-red-600">Negative return on investment</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex-1">
                      <Calculator className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                    <Button className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Results
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ROI Benchmarks</CardTitle>
              <CardDescription>Industry benchmarks for marketing ROI by channel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-3 border-b bg-muted/50 p-3 text-sm font-medium">
                  <div>Channel</div>
                  <div>Average ROI</div>
                  <div>Top Performers</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-3 p-3 text-sm">
                    <div>Email Marketing</div>
                    <div>3800%</div>
                    <div>4200%</div>
                  </div>
                  <div className="grid grid-cols-3 p-3 text-sm">
                    <div>SEO</div>
                    <div>2200%</div>
                    <div>2800%</div>
                  </div>
                  <div className="grid grid-cols-3 p-3 text-sm">
                    <div>Content Marketing</div>
                    <div>600%</div>
                    <div>900%</div>
                  </div>
                  <div className="grid grid-cols-3 p-3 text-sm">
                    <div>Social Media</div>
                    <div>280%</div>
                    <div>450%</div>
                  </div>
                  <div className="grid grid-cols-3 p-3 text-sm">
                    <div>PPC</div>
                    <div>200%</div>
                    <div>350%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>ROI Reports</CardTitle>
              <CardDescription>Download detailed reports on your marketing ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                  <div className="col-span-2">Report</div>
                  <div>Last Updated</div>
                  <div>Actions</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="col-span-2 font-medium">Monthly Marketing ROI Report</div>
                    <div>Today, 9:30 AM</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="col-span-2 font-medium">Campaign Performance Analysis</div>
                    <div>Yesterday, 2:15 PM</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="col-span-2 font-medium">Channel ROI Comparison</div>
                    <div>Aug 15, 2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="col-span-2 font-medium">Quarterly ROI Summary</div>
                    <div>Jul 31, 2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="col-span-2 font-medium">Annual Marketing Performance</div>
                    <div>Jan 15, 2023</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">
                Generate Custom Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Set up automated ROI reports delivered to your inbox</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                  <div>Report</div>
                  <div>Frequency</div>
                  <div>Recipients</div>
                  <div>Actions</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="font-medium">Weekly Performance</div>
                    <div>Every Monday</div>
                    <div>marketing@example.com</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 p-3 text-sm">
                    <div className="font-medium">Monthly ROI Summary</div>
                    <div>1st of month</div>
                    <div>team@example.com</div>
                    <div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">
                Schedule New Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
