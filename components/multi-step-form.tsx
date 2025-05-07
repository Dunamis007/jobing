"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface FormSection {
  title: string
  fields: FormField[]
}

interface FormField {
  name: string
  label: string
  type: string
  required?: boolean
  options?: { value: string; label: string }[]
}

interface MultiStepFormProps {
  sections: FormSection[]
  onSubmit: (data: any) => void
}

export function MultiStepForm({ sections, onSubmit }: MultiStepFormProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState<any>({})

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const nextSection = () => {
    setCurrentSection(currentSection + 1)
  }

  const prevSection = () => {
    setCurrentSection(currentSection - 1)
  }

  const handleSubmit = () => {
    // Extract the program name from the URL
    const pathSegments = window.location.pathname.split("/")
    const program = pathSegments[pathSegments.length - 1]

    // Call the onSubmit callback with form data
    onSubmit(formData)

    // Redirect to payment page with program parameter
    window.location.href = `/register/payment?program=${program}`
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{sections[currentSection].title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {sections[currentSection].fields.map((field) => (
            <div key={field.name} className="grid gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === "text" && (
                <Input
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                />
              )}
              {field.type === "email" && (
                <Input
                  type="email"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                />
              )}
              {field.type === "tel" && (
                <Input
                  type="tel"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                />
              )}
              {field.type === "date" && (
                <Input
                  type="date"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                />
              )}
              {field.type === "textarea" && (
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                />
              )}
              {field.type === "select" && field.options && (
                <Select onValueChange={(value) => handleInputChange({ target: { name: field.name, value } })}>
                  <SelectTrigger>
                    <SelectValue placeholder={field.label} defaultValue={formData[field.name] || ""} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {field.type === "checkbox" && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={field.name}
                    name={field.name}
                    checked={formData[field.name] || false}
                    onCheckedChange={(checked) =>
                      handleInputChange({ target: { name: field.name, type: "checkbox", checked } })
                    }
                    required={field.required}
                  />
                  <span>{field.label}</span>
                </div>
              )}
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex justify-between">
          {currentSection > 0 && (
            <Button type="button" variant="secondary" onClick={prevSection}>
              Previous
            </Button>
          )}
          {currentSection < sections.length - 1 ? (
            <Button type="button" onClick={nextSection}>
              Next
            </Button>
          ) : (
            <Button type="button" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
