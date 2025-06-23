"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Building,
  Brain,
  Users,
  Zap,
  Rocket,
  CoinsIcon,
  CheckCircle,
  Star,
  Trophy,
  Briefcase,
  Laptop,
  Globe,
} from "lucide-react"

interface CareerRPGItem {
  id: string
  name: string
  level: number
  maxLevel: number
  cost: number
  description: string
  realWorldBenefit: string
  icon: React.ElementType
  category: "workspace" | "network" | "skills" | "opportunities"
}

interface CareerRPGInterfaceProps {
  eduCoins: number
  onSpendCoins: (amount: number, itemId: string) => void
  program: "ai" | "coding" | "marketing"
}

export function CareerRPGInterface({ eduCoins, onSpendCoins, program }: CareerRPGInterfaceProps) {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<CareerRPGItem | null>(null)

  const getCareerItems = (): CareerRPGItem[] => {
    const baseItems = [
      {
        id: "workspace",
        name: program === "ai" ? "AI Research Lab" : program === "coding" ? "Developer Studio" : "Marketing HQ",
        level: 1,
        maxLevel: 5,
        cost: 200,
        description: `Upgrade your virtual ${program} workspace for enhanced productivity`,
        realWorldBenefit: "Monthly 1-on-1 mentorship with industry experts",
        icon: program === "ai" ? Brain : program === "coding" ? Laptop : Building,
        category: "workspace" as const,
      },
      {
        id: "network",
        name: "Industry Network",
        level: 0,
        maxLevel: 4,
        cost: 300,
        description: "Expand your professional network globally",
        realWorldBenefit: "Direct introductions to hiring managers and founders",
        icon: Users,
        category: "network" as const,
      },
      {
        id: "skills",
        name: "Skill Accelerator",
        level: 1,
        maxLevel: 3,
        cost: 250,
        description: "Boost your learning speed and retention",
        realWorldBenefit: "Access to premium courses and certification fast-track",
        icon: Zap,
        category: "skills" as const,
      },
      {
        id: "opportunities",
        name:
          program === "ai"
            ? "Research Collaboration"
            : program === "coding"
              ? "Startup Incubator"
              : "Agency Partnership",
        level: 0,
        maxLevel: 3,
        cost: 400,
        description: `Access exclusive ${program} opportunities`,
        realWorldBenefit:
          program === "ai"
            ? "Co-author research papers"
            : program === "coding"
              ? "Pitch to real investors"
              : "Partner with top agencies",
        icon: program === "ai" ? Trophy : program === "coding" ? Rocket : Globe,
        category: "opportunities" as const,
      },
    ]

    return baseItems
  }

  const careerItems = getCareerItems()

  const handleUpgrade = (item: CareerRPGItem) => {
    setSelectedItem(item)
    setShowUpgradeModal(true)
  }

  const confirmUpgrade = () => {
    if (selectedItem && eduCoins >= selectedItem.cost) {
      onSpendCoins(selectedItem.cost, selectedItem.id)
      setShowUpgradeModal(false)
      setSelectedItem(null)
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "workspace":
        return "border-blue-200 bg-blue-50"
      case "network":
        return "border-green-200 bg-green-50"
      case "skills":
        return "border-purple-200 bg-purple-50"
      case "opportunities":
        return "border-orange-200 bg-orange-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "workspace":
        return Building
      case "network":
        return Users
      case "skills":
        return Zap
      case "opportunities":
        return Rocket
      default:
        return Star
    }
  }

  return (
    <>
      <Card className="border-2 border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-purple-600" />
            Career RPG: Upgrade Your Life
          </CardTitle>
          <p className="text-sm text-gray-600">Spend EduCoins on virtual upgrades that unlock real-world benefits</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CoinsIcon className="h-5 w-5 text-yellow-500" />
              <span className="font-bold text-lg">{eduCoins}</span>
              <span className="text-sm text-gray-500">EduCoins Available</span>
            </div>
            <Badge variant="outline" className="bg-purple-50">
              {program.toUpperCase()} Career Path
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerItems.map((item) => {
              const IconComponent = item.icon
              const CategoryIcon = getCategoryIcon(item.category)

              return (
                <Card key={item.id} className={`${getCategoryColor(item.category)} border-2`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <IconComponent className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{item.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <CategoryIcon className="h-3 w-3" />
                          <span>
                            Level {item.level}/{item.maxLevel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Progress value={(item.level / item.maxLevel) * 100} className="h-2 mb-3" />

                    <p className="text-xs text-gray-600 mb-2">{item.description}</p>

                    <div className="p-2 bg-white rounded border-l-4 border-green-400 mb-3">
                      <p className="text-xs font-medium text-green-700">Real Benefit:</p>
                      <p className="text-xs text-green-600">{item.realWorldBenefit}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <CoinsIcon className="h-4 w-4 text-yellow-500" />
                        <span className="font-bold text-sm">{item.cost}</span>
                      </div>
                      <Button
                        size="sm"
                        disabled={item.level >= item.maxLevel || eduCoins < item.cost}
                        onClick={() => handleUpgrade(item)}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {item.level >= item.maxLevel ? "Maxed" : "Upgrade"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Achievement Showcase */}
          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-600" />
              Your Career Achievements
            </h4>
            <div className="flex flex-wrap gap-2">
              {careerItems
                .filter((item) => item.level > 0)
                .map((item) => (
                  <Badge key={item.id} className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    <Star className="h-3 w-3 mr-1" />
                    {item.name} Lv.{item.level}
                  </Badge>
                ))}
              {careerItems.filter((item) => item.level > 0).length === 0 && (
                <p className="text-sm text-gray-500">Start upgrading to unlock achievements!</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Confirmation Modal */}
      <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedItem && <selectedItem.icon className="h-5 w-5 text-purple-600" />}
              Upgrade {selectedItem?.name}
            </DialogTitle>
            <DialogDescription>This upgrade will unlock real-world benefits for your career</DialogDescription>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-4 py-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-sm mb-2">What You Get:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">{selectedItem.description}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-sm font-medium text-green-700">
                      Real Benefit: {selectedItem.realWorldBenefit}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Cost:</span>
                <div className="flex items-center gap-1">
                  <CoinsIcon className="h-4 w-4 text-yellow-500" />
                  <span className="font-bold">{selectedItem.cost}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Your Balance:</span>
                <div className="flex items-center gap-1">
                  <CoinsIcon className="h-4 w-4 text-yellow-500" />
                  <span className="font-bold">{eduCoins}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">After Purchase:</span>
                <div className="flex items-center gap-1">
                  <CoinsIcon className="h-4 w-4 text-yellow-500" />
                  <span className="font-bold">{eduCoins - selectedItem.cost}</span>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
              Cancel
            </Button>
            <Button
              onClick={confirmUpgrade}
              disabled={!selectedItem || eduCoins < selectedItem.cost}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <CoinsIcon className="mr-2 h-4 w-4" />
              Upgrade Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
