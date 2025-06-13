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
import { CheckCircle, Briefcase, Laptop, Users, BookOpen, CoinsIcon, AlertCircle } from "lucide-react"

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

export function CareerGame() {
  const [showCareerGame, setShowCareerGame] = useState(false)
  const [eduCoins, setEduCoins] = useState(500)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")

  const careerGameItems: CareerGameItem[] = [
    {
      id: "workspace",
      name: "Virtual Workspace",
      level: 1,
      maxLevel: 3,
      cost: 200,
      description: "Upgrade your virtual coding environment for better productivity",
      benefits: ["Faster module completion", "+5% quiz score boost", "Premium code editor"],
      icon: Laptop,
    },
    {
      id: "mentorship",
      name: "Mentorship Access",
      level: 0,
      maxLevel: 3,
      cost: 300,
      description: "Unlock access to industry mentors",
      benefits: ["Weekly group sessions", "Code reviews", "Career guidance"],
      icon: Users,
    },
    {
      id: "resources",
      name: "Learning Resources",
      level: 1,
      maxLevel: 3,
      cost: 150,
      description: "Enhance your learning with premium tools and content",
      benefits: ["Advanced tutorials", "Premium templates", "Industry case studies"],
      icon: BookOpen,
    },
    {
      id: "networking",
      name: "Industry Network",
      level: 0,
      maxLevel: 2,
      cost: 250,
      description: "Expand your professional network",
      benefits: ["Industry connections", "Job referrals", "Networking events"],
      icon: Briefcase,
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
        Career Game
      </Button>

      <Dialog open={showCareerGame} onOpenChange={setShowCareerGame}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-dunamis-primary" />
              Developer Career Game
            </DialogTitle>
            <DialogDescription>Upgrade your virtual learning environment</DialogDescription>
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
                      <div className="bg-dunamis-primary/10 p-2 rounded-lg">
                        <item.icon className="h-6 w-6 text-dunamis-primary" />
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
                        className="bg-dunamis-primary hover:bg-dunamis-secondary"
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
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-dunamis-primary max-w-sm z-50">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-dunamis-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{notificationMessage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
