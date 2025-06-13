"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  CheckCircle,
  Briefcase,
  Laptop,
  CoinsIcon,
  AlertCircle,
  LineChart,
  Share2,
  Search,
  Mail,
  FileText,
} from "lucide-react"

interface CareerGameItem {
  id: string
  name: string
  level: number
  maxLevel: number
  cost: number
  description: string
  benefits: string[]
  icon: React.ElementType
}

export function DigitalMarketingCareerGame() {
  const [showCareerGame, setShowCareerGame] = useState(false)
  const [eduCoins, setEduCoins] = useState(500)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")

  const careerGameItems: CareerGameItem[] = [
    {
      id: "workspace",
      name: "Marketing Workspace",
      level: 1,
      maxLevel: 3,
      cost: 200,
      description: "Upgrade your virtual marketing environment for better campaign management",
      benefits: ["Premium marketing tools", "Advanced analytics dashboard", "Campaign templates"],
      icon: Laptop,
    },
    {
      id: "social",
      name: "Social Media Tools",
      level: 0,
      maxLevel: 3,
      cost: 250,
      description: "Access premium social media management tools",
      benefits: ["Content calendar", "Automated posting", "Engagement analytics"],
      icon: Share2,
    },
    {
      id: "seo",
      name: "SEO Toolkit",
      level: 1,
      maxLevel: 3,
      cost: 300,
      description: "Enhance your SEO capabilities with premium tools",
      benefits: ["Keyword research", "Competitor analysis", "Backlink monitoring"],
      icon: Search,
    },
    {
      id: "email",
      name: "Email Marketing Suite",
      level: 0,
      maxLevel: 2,
      cost: 200,
      description: "Access professional email marketing tools",
      benefits: ["Email templates", "A/B testing", "Automation workflows"],
      icon: Mail,
    },
    {
      id: "analytics",
      name: "Analytics Platform",
      level: 0,
      maxLevel: 3,
      cost: 350,
      description: "Unlock advanced analytics capabilities",
      benefits: ["Custom reports", "Conversion tracking", "Attribution modeling"],
      icon: LineChart,
    },
    {
      id: "content",
      name: "Content Creation Tools",
      level: 0,
      maxLevel: 2,
      cost: 250,
      description: "Access premium content creation tools",
      benefits: ["Design templates", "AI writing assistant", "Stock photo library"],
      icon: FileText,
    },
  ]

  const upgradeCareerItem = (itemId: string) => {
    const item = careerGameItems.find((i) => i.id === itemId)
    if (item && eduCoins >= item.cost) {
      setEduCoins(eduCoins - item.cost)
      // In a real app, we would update the item's level in the database
      setNotificationMessage(`Successfully upgraded ${item.name}!`)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    } else {
      setNotificationMessage("Not enough EduCoins to upgrade this item!")
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }
  }

  return (
    <>
      <Button onClick={() => setShowCareerGame(true)} className="w-full">
        <Briefcase className="h-4 w-4 mr-2" />
        Marketing Career Game
      </Button>

      <Dialog open={showCareerGame} onOpenChange={setShowCareerGame}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-green-600" />
              Digital Marketing Career Game
            </DialogTitle>
            <DialogDescription>Upgrade your virtual marketing environment</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex items-center justify-between mb-4">
              <p className="font-medium">Your EduCoins</p>
              <div className="flex items-center">
                <CoinsIcon className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="font-bold">{eduCoins}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerGameItems.map((item) => (
                <Card key={item.id} className="border-2 border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-600/10 p-2 rounded-lg">
                        <item.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500">Level {item.level}</span>
                          <span className="text-xs text-gray-400">/ {item.maxLevel}</span>
                        </div>
                      </div>
                    </div>

                    <Progress value={(item.level / item.maxLevel) * 100} className="h-1 mb-3" />

                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                    <div className="space-y-1 mb-4">
                      {item.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CoinsIcon className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-bold">{item.cost}</span>
                      </div>
                      <Button
                        size="sm"
                        disabled={item.level >= item.maxLevel || eduCoins < item.cost}
                        onClick={() => upgradeCareerItem(item.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {item.level >= item.maxLevel ? "Maxed" : "Upgrade"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCareerGame(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-600 max-w-sm z-50">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{notificationMessage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
