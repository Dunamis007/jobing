"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

interface Step {
  id: string
  title: string
  description: string
  component: React.ReactNode
}

interface MultiStepFormProps {
  steps: Step[]
  onComplete: (data: any) => void
}

export function MultiStepForm({ steps, onComplete }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) => [...prev, currentStep])
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    onComplete(formData)
  }

  const isLastStep = currentStep === steps.length - 1

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Header */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-[#333333]">Registration Progress</CardTitle>
              <CardDescription className="text-[#666666]">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#FF9800]">{Math.round(progress)}%</div>
              <div className="text-sm text-[#666666]">Complete</div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
      </Card>

      {/* Step Indicators */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                completedSteps.includes(index)
                  ? "bg-green-500 border-green-500 text-white"
                  : index === currentStep
                    ? "bg-[#FF9800] border-[#FF9800] text-white"
                    : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {completedSteps.includes(index) ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-0.5 mx-2 ${completedSteps.includes(index) ? "bg-green-500" : "bg-gray-300"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Current Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#333333]">{steps[currentStep].title}</CardTitle>
          <CardDescription className="text-[#666666]">{steps[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent>{steps[currentStep].component}</CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        {isLastStep ? (
          <Button onClick={handleComplete} className="bg-[#FF9800] hover:bg-[#F57C00] text-white flex items-center">
            Complete Registration
            <Check className="h-4 w-4 ml-2" />
          </Button>
        ) : (
          <Button onClick={handleNext} className="bg-[#FF9800] hover:bg-[#F57C00] text-white flex items-center">
            Next Step
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}
