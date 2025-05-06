"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface AcademicLevelSelectorProps {
  onSelect: (level: string) => void
  onContinue: () => void
}

export function AcademicLevelSelector({ onSelect, onContinue }: AcademicLevelSelectorProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>("")

  const academicLevels = [
    { value: "ss1", label: "Senior Secondary 1 (SS1)", description: "First year of senior secondary education" },
    { value: "ss2", label: "Senior Secondary 2 (SS2)", description: "Second year of senior secondary education" },
    { value: "ss3", label: "Senior Secondary 3 (SS3)", description: "Final year of senior secondary education" },
    { value: "undergraduate", label: "Undergraduate", description: "Currently pursuing a bachelor's degree" },
    { value: "graduate", label: "Graduate", description: "Completed a bachelor's degree" },
    { value: "postgraduate", label: "Postgraduate", description: "Currently pursuing or completed a master's degree" },
    {
      value: "professional",
      label: "Professional",
      description: "Working professional seeking additional qualifications",
    },
  ]

  const handleSelect = (value: string) => {
    setSelectedLevel(value)
    onSelect(value)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-[#0e3b62] mb-2">Select Your Current Academic Level</h3>
            <p className="text-sm text-gray-500">
              This helps us tailor our programs to your specific educational needs and goals.
            </p>
          </div>

          <RadioGroup value={selectedLevel} onValueChange={handleSelect} className="space-y-3">
            {academicLevels.map((level) => (
              <div key={level.value} className="flex items-start space-x-2">
                <RadioGroupItem value={level.value} id={level.value} className="mt-1" />
                <div className="grid gap-1.5">
                  <Label htmlFor={level.value} className="font-medium">
                    {level.label}
                  </Label>
                  <p className="text-sm text-gray-500">{level.description}</p>
                </div>
              </div>
            ))}
          </RadioGroup>

          <Button
            onClick={onContinue}
            disabled={!selectedLevel}
            className="w-full mt-4 bg-[#0e3b62] hover:bg-[#1a5c96]"
          >
            Continue
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
