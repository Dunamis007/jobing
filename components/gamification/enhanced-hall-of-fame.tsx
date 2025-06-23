"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, ExternalLink, Star, Award, DollarSign, Users, Play, Download } from "lucide-react"

interface HallOfFameEntry {
  week: string
  winner: {
    name: string
    avatar: string
    project: string
    score: number
    projectUrl?: string
    presentation: string
    prize: string
    tier: "Gold" | "Silver" | "Bronze"
  }
}

interface EnhancedHallOfFameProps {
  program: "ai" | "coding" | "marketing"
}

export function EnhancedHallOfFame({ program }: EnhancedHallOfFameProps) {
  const [activeTab, setActiveTab] = useState("recent")

  const getHallOfFameData = (): HallOfFameEntry[] => {
    if (program === "ai") {
      return [
        {
          week: "Week 47, 2024",
          winner: {
            name: "Chioma Eze",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "AI-Powered Healthcare Diagnosis System",
            score: 98,
            projectUrl: "#",
            presentation: "Revolutionizing medical diagnosis in rural Nigeria using computer vision and NLP",
            prize: "₦50,000 + Job Interview at Google AI + Verified Graduate Badge",
            tier: "Gold",
          },
        },
        {
          week: "Week 46, 2024",
          winner: {
            name: "David Okonkwo",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "Smart Agriculture AI Platform",
            score: 96,
            projectUrl: "#",
            presentation: "Using computer vision to optimize crop yields and reduce waste",
            prize: "₦30,000 + Mentorship with Microsoft AI Team",
            tier: "Silver",
          },
        },
        {
          week: "Week 45, 2024",
          winner: {
            name: "Amina Ibrahim",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "AI-Powered Education Assistant",
            score: 94,
            projectUrl: "#",
            presentation: "Personalized learning paths using machine learning algorithms",
            prize: "₦20,000 + OpenAI API Credits + Industry Mentorship",
            tier: "Bronze",
          },
        },
      ]
    } else if (program === "coding") {
      return [
        {
          week: "Week 47, 2024",
          winner: {
            name: "Oluwaseun Adeyemi",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "E-commerce Platform with React & Node",
            score: 98,
            projectUrl: "#",
            presentation: "Full-stack e-commerce solution with payment integration and admin dashboard",
            prize: "₦50,000 + Job Interview at Paystack + Verified Developer Badge",
            tier: "Gold",
          },
        },
        {
          week: "Week 46, 2024",
          winner: {
            name: "Tunde Olaoluwa",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "Real-time Chat Application",
            score: 95,
            projectUrl: "#",
            presentation: "WebSocket-based chat app with file sharing and video calls",
            prize: "₦30,000 + Mentorship with Flutterwave Engineering Team",
            tier: "Silver",
          },
        },
        {
          week: "Week 45, 2024",
          winner: {
            name: "Sarah Kimani",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "Task Management Dashboard",
            score: 93,
            projectUrl: "#",
            presentation: "Collaborative project management tool with real-time updates",
            prize: "₦20,000 + GitHub Pro Account + Industry Mentorship",
            tier: "Bronze",
          },
        },
      ]
    } else {
      return [
        {
          week: "Week 47, 2024",
          winner: {
            name: "Fatima Al-Hassan",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "Multi-Channel Marketing Campaign",
            score: 97,
            projectUrl: "#",
            presentation: "Integrated digital marketing strategy achieving 300% ROI increase",
            prize: "₦50,000 + Job Interview at GTBank Marketing + Verified Marketer Badge",
            tier: "Gold",
          },
        },
        {
          week: "Week 46, 2024",
          winner: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "Social Media Growth Strategy",
            score: 94,
            projectUrl: "#",
            presentation: "Organic growth strategy that gained 50K followers in 30 days",
            prize: "₦30,000 + Mentorship with Leadway Marketing Team",
            tier: "Silver",
          },
        },
        {
          week: "Week 45, 2024",
          winner: {
            name: "Priya Sharma",
            avatar: "/placeholder.svg?height=60&width=60",
            project: "Content Marketing Automation",
            score: 92,
            projectUrl: "#",
            presentation: "Automated content pipeline that increased engagement by 200%",
            prize: "₦20,000 + HubSpot Certification + Industry Mentorship",
            tier: "Bronze",
          },
        },
      ]
    }
  }

  const hallOfFameData = getHallOfFameData()
  const topWinners = hallOfFameData.slice(0, 3)
  const allTimeWinners = [...hallOfFameData].sort((a, b) => b.winner.score - a.winner.score)

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Gold":
        return "bg-yellow-500"
      case "Silver":
        return "bg-gray-400"
      case "Bronze":
        return "bg-amber-700"
      default:
        return "bg-gray-500"
    }
  }

  const getProgramTitle = () => {
    switch (program) {
      case "ai":
        return "AI Innovation"
      case "coding":
        return "Code Excellence"
      case "marketing":
        return "Marketing Mastery"
      default:
        return "Excellence"
    }
  }

  return (
    <Card className="border-2 border-yellow-200">
      <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-600" />
          Hall of Fame: {getProgramTitle()}
        </CardTitle>
        <p className="text-sm text-gray-600">Weekly presentation winners and their amazing projects</p>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="recent">Recent Winners</TabsTrigger>
            <TabsTrigger value="alltime">All-Time Best</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6">
            {topWinners.map((entry, index) => (
              <Card key={index} className="border-l-4 border-l-yellow-400">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
                        <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2">
                        <Badge className={`${getTierColor(entry.winner.tier)} text-white text-xs`}>
                          <Trophy className="h-3 w-3 mr-1" />
                          {entry.winner.tier}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg">{entry.winner.name}</h4>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{entry.week}</span>
                        </div>
                      </div>

                      <h5 className="font-semibold text-blue-600 mb-2">{entry.winner.project}</h5>
                      <p className="text-sm text-gray-600 mb-3">{entry.winner.presentation}</p>

                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-green-100 text-green-800">
                          <Star className="h-3 w-3 mr-1" />
                          Score: {entry.winner.score}/100
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          Winner
                        </Badge>
                      </div>

                      <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-medium text-sm text-green-800">Prize Won:</span>
                        </div>
                        <p className="text-sm text-green-700">{entry.winner.prize}</p>
                      </div>

                      <div className="flex gap-2">
                        {entry.winner.projectUrl && (
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Project
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <Play className="h-4 w-4 mr-1" />
                          Watch Presentation
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download Slides
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="alltime" className="space-y-4">
            <div className="grid gap-4">
              {allTimeWinners.map((entry, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-800 font-bold">
                    {index + 1}
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={entry.winner.avatar || "/placeholder.svg"} alt={entry.winner.name} />
                    <AvatarFallback>{entry.winner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">{entry.winner.name}</h4>
                    <p className="text-sm text-gray-600">{entry.winner.project}</p>
                    <p className="text-xs text-gray-500">{entry.week}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${getTierColor(entry.winner.tier)} text-white mb-1`}>
                      {entry.winner.score}/100
                    </Badge>
                    <p className="text-xs text-gray-500">{entry.winner.tier} Winner</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-6 w-6 text-blue-600" />
            <h4 className="font-bold text-blue-800">Want to be featured here?</h4>
          </div>
          <p className="text-sm text-blue-700 mb-3">
            Submit your weekly project presentation and compete for amazing prizes!
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Users className="h-4 w-4 mr-1" />
              Join Next Presentation
            </Button>
            <Button size="sm" variant="outline">
              <Calendar className="h-4 w-4 mr-1" />
              View Schedule
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
