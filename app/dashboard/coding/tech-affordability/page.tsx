"use client"

import { useState } from "react"
import { Search, ExternalLink, ThumbsUp, ThumbsDown, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

// Mock data for hardware recommendations
const hardwareRecommendations = [
  {
    id: 1,
    title: "Budget Development Laptop",
    category: "laptop",
    description: "A budget-friendly laptop that can handle most development tasks without breaking the bank.",
    specs: ["Intel Core i5 or AMD Ryzen 5", "8GB RAM (upgradable)", "256GB SSD", "1080p Display"],
    priceRange: "$400 - $600",
    alternatives: ["Lenovo IdeaPad", "Acer Aspire", "HP Pavilion"],
    tips: [
      "Look for models with upgradable RAM",
      "Consider refurbished models from reputable sellers",
      "Check for student discounts",
    ],
    upvotes: 245,
    downvotes: 12,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Affordable External Monitor",
    category: "monitor",
    description: "Boost your productivity with an affordable external monitor for your development setup.",
    specs: ["24-inch 1080p IPS display", "HDMI and VGA inputs", "VESA mount compatible", "60Hz refresh rate"],
    priceRange: "$100 - $150",
    alternatives: ["AOC 24B2XH", "Samsung S24R350", "LG 24MK430H"],
    tips: [
      "Look for open-box deals at electronics stores",
      "Consider slightly older models for better prices",
      "Check online marketplaces for local deals to avoid shipping costs",
    ],
    upvotes: 187,
    downvotes: 8,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Budget Desktop Build",
    category: "desktop",
    description: "A cost-effective desktop build that provides excellent performance for development work.",
    specs: ["AMD Ryzen 5 3600 or Intel Core i5-10400", "16GB DDR4 RAM", "512GB SSD", "Basic graphics card"],
    priceRange: "$500 - $700",
    alternatives: ["Pre-built Dell Inspiron", "HP Pavilion Desktop", "Lenovo ThinkCentre"],
    tips: [
      "Build it yourself to save money",
      "Start with essential components and upgrade later",
      "Look for bundle deals on motherboard and CPU",
      "Consider used parts for non-critical components",
    ],
    upvotes: 312,
    downvotes: 15,
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 4,
    title: "Development Phone for Testing",
    category: "mobile",
    description: "An affordable smartphone for testing your mobile applications.",
    specs: ["Mid-range processor", "4GB RAM", "64GB storage", "Android OS"],
    priceRange: "$150 - $250",
    alternatives: ["Xiaomi Redmi Note", "Samsung Galaxy A series", "Motorola G series"],
    tips: [
      "Consider previous generation models",
      "Look for unlocked phones",
      "Factory refurbished models offer good value",
    ],
    upvotes: 156,
    downvotes: 7,
    image: "/placeholder.svg?height=100&width=200",
  },
]

// Mock data for software alternatives
const softwareAlternatives = [
  {
    id: 1,
    title: "VS Code",
    category: "IDE",
    description: "A free, powerful code editor with extensive plugin support for almost any programming language.",
    paidAlternativeTo: "IntelliJ IDEA, PyCharm Pro, WebStorm",
    features: [
      "Syntax highlighting for numerous languages",
      "Integrated terminal",
      "Git integration",
      "Extensive extension marketplace",
      "Customizable interface",
    ],
    limitations: [
      "May require additional configuration for complex projects",
      "Some advanced features require extensions",
    ],
    website: "https://code.visualstudio.com/",
    upvotes: 423,
    downvotes: 18,
  },
  {
    id: 2,
    title: "GIMP",
    category: "Design",
    description: "A free and open-source image editor that provides many of the features found in paid alternatives.",
    paidAlternativeTo: "Adobe Photoshop",
    features: [
      "Layer-based editing",
      "Extensive set of tools for image manipulation",
      "Support for various file formats",
      "Customizable interface",
      "Plugin support",
    ],
    limitations: [
      "Steeper learning curve than some alternatives",
      "Interface may feel less polished",
      "Some advanced features require plugins",
    ],
    website: "https://www.gimp.org/",
    upvotes: 287,
    downvotes: 42,
  },
  {
    id: 3,
    title: "DBeaver Community",
    category: "Database",
    description: "A free, open-source database tool that supports multiple database systems.",
    paidAlternativeTo: "Navicat, DataGrip",
    features: [
      "Support for most database systems",
      "SQL editor with syntax highlighting",
      "Visual query builder",
      "Data export and import",
      "Database structure visualization",
    ],
    limitations: [
      "Some advanced features are only in the paid Enterprise edition",
      "May be slower with very large databases",
    ],
    website: "https://dbeaver.io/",
    upvotes: 198,
    downvotes: 15,
  },
  {
    id: 4,
    title: "Inkscape",
    category: "Design",
    description: "A free and open-source vector graphics editor, an alternative to Adobe Illustrator.",
    paidAlternativeTo: "Adobe Illustrator",
    features: [
      "Vector path editing",
      "Text tools",
      "SVG file format support",
      "Object creation and manipulation",
      "Extension support",
    ],
    limitations: [
      "Performance issues with complex designs",
      "Limited CMYK color support",
      "Some advanced features require plugins",
    ],
    website: "https://inkscape.org/",
    upvotes: 245,
    downvotes: 28,
  },
]

// Mock data for discount programs
const discountPrograms = [
  {
    id: 1,
    title: "GitHub Student Developer Pack",
    description:
      "A collection of free tools and services for students, including cloud credits, domain names, and professional developer tools.",
    eligibility: "Students enrolled in a degree or diploma granting course of study",
    benefits: [
      "Free access to GitHub Pro",
      "AWS credits",
      "JetBrains IDEs",
      "Microsoft Azure credits",
      "DigitalOcean credits",
      "And many more tools and services",
    ],
    applicationProcess: "Apply with your school-issued email address or upload proof of academic status.",
    website: "https://education.github.com/pack",
  },
  {
    id: 2,
    title: "Microsoft Azure for Students",
    description: "Free Azure credits and developer tools for students to learn and build projects in the cloud.",
    eligibility: "Students aged 18 and older with a school email address",
    benefits: [
      "$100 in Azure credits",
      "Free access to developer tools",
      "Access to learning resources",
      "No credit card required",
    ],
    applicationProcess: "Sign up with your school email address.",
    website: "https://azure.microsoft.com/en-us/free/students/",
  },
  {
    id: 3,
    title: "JetBrains Student License",
    description: "Free access to JetBrains professional developer tools for students.",
    eligibility: "Students and faculty members of accredited educational institutions",
    benefits: [
      "Free access to all JetBrains desktop products",
      "Includes IntelliJ IDEA Ultimate, PyCharm Professional, WebStorm, and more",
      "Renewable annually while you remain eligible",
    ],
    applicationProcess: "Apply with your school email address or provide proof of enrollment.",
    website: "https://www.jetbrains.com/community/education/",
  },
]

export default function TechAffordability() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [votes, setVotes] = useState<Record<string, { up: boolean; down: boolean }>>({})
  const { toast } = useToast()

  const handleVote = (id: number, type: "hardware" | "software", vote: "up" | "down") => {
    const key = `${type}-${id}`
    const currentVote = votes[key]

    // If already voted the same way, remove the vote
    if (currentVote && currentVote[vote]) {
      const newVotes = { ...votes }
      newVotes[key] = { ...currentVote, [vote]: false }
      setVotes(newVotes)
      toast({
        title: "Vote Removed",
        description: "Your vote has been removed.",
      })
    } else {
      const newVotes = { ...votes }
      newVotes[key] = {
        up: vote === "up",
        down: vote === "down",
      }
      setVotes(newVotes)
      toast({
        title: "Vote Recorded",
        description: `You ${vote === "up" ? "upvoted" : "downvoted"} this recommendation.`,
      })
    }
  }

  const handleShare = (id: number, type: "hardware" | "software", title: string) => {
    // In a real app, this would open a share dialog or copy a link to clipboard
    toast({
      title: "Link Copied",
      description: `Link to "${title}" has been copied to your clipboard.`,
    })
  }

  const filterHardware = () => {
    return hardwareRecommendations.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter

      return matchesSearch && matchesCategory
    })
  }

  const filterSoftware = () => {
    return softwareAlternatives.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.paidAlternativeTo.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = categoryFilter === "all" || item.category.toLowerCase() === categoryFilter.toLowerCase()

      return matchesSearch && matchesCategory
    })
  }

  const filteredHardware = filterHardware()
  const filteredSoftware = filterSoftware()

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tech Affordability Guide</h1>
        <p className="text-muted-foreground">
          Resources to help you access affordable hardware, software, and educational discounts
        </p>
      </div>

      <Tabs defaultValue="hardware" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="hardware">Hardware Recommendations</TabsTrigger>
          <TabsTrigger value="software">Free Software Alternatives</TabsTrigger>
          <TabsTrigger value="discounts">Discount Programs</TabsTrigger>
        </TabsList>

        <TabsContent value="hardware" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search hardware recommendations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="laptop">Laptops</SelectItem>
                  <SelectItem value="desktop">Desktops</SelectItem>
                  <SelectItem value="monitor">Monitors</SelectItem>
                  <SelectItem value="mobile">Mobile Devices</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredHardware.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No hardware recommendations found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHardware.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="h-[100px] bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </Badge>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">Price Range: {item.priceRange}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleVote(item.id, "hardware", "up")}
                          className={votes[`hardware-${item.id}`]?.up ? "text-green-500" : ""}
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <span className="text-sm">{item.upvotes}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleVote(item.id, "hardware", "down")}
                          className={votes[`hardware-${item.id}`]?.down ? "text-red-500" : ""}
                        >
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <span className="text-sm">{item.downvotes}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="mb-3">{item.description}</CardDescription>

                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-1">Recommended Specs:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.specs.map((spec, index) => (
                          <li key={index} className="text-sm">
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-1">Affordable Alternatives:</h4>
                      <p className="text-sm">{item.alternatives.join(", ")}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-1">Money-Saving Tips:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.tips.map((tip, index) => (
                          <li key={index} className="text-sm">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleShare(item.id, "hardware", item.title)}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="software" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search software alternatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
                icon={<Search className="h-4 w-4" />}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ide">IDEs & Code Editors</SelectItem>
                  <SelectItem value="design">Design Tools</SelectItem>
                  <SelectItem value="database">Database Tools</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredSoftware.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No software alternatives found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSoftware.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {item.category}
                        </Badge>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">Alternative to: {item.paidAlternativeTo}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleVote(item.id, "software", "up")}
                          className={votes[`software-${item.id}`]?.up ? "text-green-500" : ""}
                        >
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <span className="text-sm">{item.upvotes}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleVote(item.id, "software", "down")}
                          className={votes[`software-${item.id}`]?.down ? "text-red-500" : ""}
                        >
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <span className="text-sm">{item.downvotes}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="mb-3">{item.description}</CardDescription>

                    <div className="mb-3">
                      <h4 className="text-sm font-medium mb-1">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.features.map((feature, index) => (
                          <li key={index} className="text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-1">Limitations:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {item.limitations.map((limitation, index) => (
                          <li key={index} className="text-sm">
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="default" className="flex-1" onClick={() => window.open(item.website, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button variant="outline" onClick={() => handleShare(item.id, "software", item.title)}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="discounts" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {discountPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="mb-4">{program.description}</CardDescription>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
                    <p className="text-sm">{program.eligibility}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-1">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Application Process:</h4>
                    <p className="text-sm">{program.applicationProcess}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full" onClick={() => window.open(program.website, "_blank")}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
