"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock, FileText, ExternalLink, CoinsIcon, CheckCircle } from "lucide-react"

interface NotionDocument {
  id: string
  title: string
  type: "free" | "premium" | "gold"
  coinCost?: number
  description: string
  updatedAt: string
}

export function NotionIntegration() {
  const [documents, setDocuments] = useState<NotionDocument[]>([
    {
      id: "1",
      title: "AI Fundamentals Guide",
      type: "free",
      description: "Introduction to AI concepts and terminology",
      updatedAt: "2025-06-10",
    },
    {
      id: "2",
      title: "Prompt Engineering Best Practices",
      type: "free",
      description: "Learn how to craft effective prompts for AI models",
      updatedAt: "2025-06-08",
    },
    {
      id: "3",
      title: "Advanced Neural Network Architecture",
      type: "premium",
      coinCost: 150,
      description: "Deep dive into neural network design patterns",
      updatedAt: "2025-06-05",
    },
    {
      id: "4",
      title: "AI Model Deployment Strategies",
      type: "premium",
      coinCost: 200,
      description: "Learn how to deploy AI models to production",
      updatedAt: "2025-06-03",
    },
    {
      id: "5",
      title: "Industry AI Case Studies",
      type: "gold",
      coinCost: 300,
      description: "Real-world AI implementation examples",
      updatedAt: "2025-06-01",
    },
  ])

  const [unlockedDocs, setUnlockedDocs] = useState<string[]>(["1", "2"])

  const unlockDocument = (docId: string) => {
    setUnlockedDocs([...unlockedDocs, docId])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-500" />
          AI Learning Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc) => {
            const isUnlocked = unlockedDocs.includes(doc.id)
            return (
              <div
                key={doc.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  isUnlocked ? "border-green-200 bg-green-50" : "border-gray-200"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{doc.title}</span>
                    {doc.type === "premium" ? (
                      <Badge variant="outline" className="text-purple-500 border-purple-200">
                        Premium
                      </Badge>
                    ) : doc.type === "gold" ? (
                      <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                        Gold
                      </Badge>
                    ) : null}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{doc.description}</p>
                  <p className="text-xs text-gray-400 mt-1">Updated: {doc.updatedAt}</p>
                </div>
                <div>
                  {isUnlocked ? (
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Open
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => unlockDocument(doc.id)}
                      className={`gap-1 ${
                        doc.type === "premium"
                          ? "bg-purple-500 hover:bg-purple-600"
                          : doc.type === "gold"
                            ? "bg-yellow-600 hover:bg-yellow-700"
                            : ""
                      }`}
                    >
                      {doc.type === "free" ? (
                        <>
                          <CheckCircle className="h-3 w-3" />
                          Free
                        </>
                      ) : (
                        <>
                          <Lock className="h-3 w-3" />
                          Unlock
                          {doc.coinCost && (
                            <span className="flex items-center ml-1">
                              <CoinsIcon className="h-3 w-3 text-yellow-300 mr-0.5" />
                              {doc.coinCost}
                            </span>
                          )}
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
