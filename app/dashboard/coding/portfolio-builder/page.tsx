"use client"

import { useState } from "react"
import { Plus, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

// Mock data for portfolio templates
const portfolioTemplates = [
  {
    id: 1,
    name: "Minimalist",
    description: "A clean, simple portfolio design that focuses on your work",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Creative",
    description: "A bold, colorful design to showcase your creative projects",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Professional",
    description: "A sophisticated design for a professional portfolio",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Mock data for user projects
const initialProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce website built with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=150&width=250",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that displays current weather and forecasts using a weather API",
    image: "/placeholder.svg?height=150&width=250",
    tags: ["JavaScript", "API", "CSS", "HTML"],
    githubUrl: "https://github.com/example/weather-app",
    liveUrl: "https://example.com/weather",
  },
]

export default function PortfolioBuilder() {
  const [projects, setProjects] = useState(initialProjects)
  const [editingProject, setEditingProject] = useState<(typeof initialProjects)[0] | null>(null)
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "/placeholder.svg?height=150&width=250",
    tags: [] as string[],
    githubUrl: "",
    liveUrl: "",
  })
  const [newTag, setNewTag] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const { toast } = useToast()

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description) {
      toast({
        title: "Missing Information",
        description: "Please provide a title and description for your project.",
        variant: "destructive",
      })
      return
    }

    setProjects([...projects, { id: Date.now(), ...newProject }])
    setNewProject({
      title: "",
      description: "",
      image: "/placeholder.svg?height=150&width=250",
      tags: [],
      githubUrl: "",
      liveUrl: "",
    })

    toast({
      title: "Project Added",
      description: "Your project has been added to your portfolio.",
    })
  }

  const handleEditProject = () => {
    if (!editingProject) return

    setProjects(projects.map((project) => (project.id === editingProject.id ? editingProject : project)))

    setEditingProject(null)

    toast({
      title: "Project Updated",
      description: "Your project has been updated successfully.",
    })
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))

    toast({
      title: "Project Deleted",
      description: "Your project has been removed from your portfolio.",
    })
  }

  const handleAddTag = (isNewProject: boolean) => {
    if (!newTag.trim()) return

    if (isNewProject) {
      setNewProject({
        ...newProject,
        tags: [...newProject.tags, newTag.trim()],
      })
    } else if (editingProject) {
      setEditingProject({
        ...editingProject,
        tags: [...editingProject.tags, newTag.trim()],
      })
    }

    setNewTag("")
  }

  const handleRemoveTag = (tag: string, isNewProject: boolean) => {
    if (isNewProject) {
      setNewProject({
        ...newProject,
        tags: newProject.tags.filter((t) => t !== tag),
      })
    } else if (editingProject) {
      setEditingProject({
        ...editingProject,
        tags: editingProject.tags.filter((t) => t !== tag),
      })
    }
  }

  const handleSelectTemplate = (templateId: number) => {
    setSelectedTemplate(templateId)

    toast({
      title: "Template Selected",
      description: "Your portfolio template has been selected. You can now customize it.",
    })
  }

  const handleGeneratePortfolio = () => {
    if (!selectedTemplate) {
      toast({
        title: "No Template Selected",
        description: "Please select a template for your portfolio.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Portfolio Generated",
      description: "Your portfolio has been generated successfully. You can now download or deploy it.",
    })
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Portfolio Builder</h1>
        <p className="text-muted-foreground">Create a professional portfolio to showcase your projects and skills</p>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="projects">My Projects</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="preview">Preview & Export</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="border-dashed cursor-pointer hover:border-primary/50 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center h-full py-10">
                    <Plus className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-lg font-medium">Add New Project</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Showcase your work by adding a new project to your portfolio
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New Project</DialogTitle>
                  <DialogDescription>Add details about your project to showcase in your portfolio.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="title" className="text-right text-sm font-medium">
                      Title
                    </label>
                    <Input
                      id="title"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="description" className="text-right text-sm font-medium">
                      Description
                    </label>
                    <Textarea
                      id="description"
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      className="col-span-3"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="image" className="text-right text-sm font-medium">
                      Image URL
                    </label>
                    <div className="col-span-3 flex gap-2">
                      <Input
                        id="image"
                        value={newProject.image}
                        onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                        className="flex-1"
                      />
                      <Button variant="outline" size="icon">
                        <ImageIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="tags" className="text-right text-sm font-medium">
                      Tags
                    </label>
                    <div className="col-span-3">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {newProject.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            {tag}
                            <button onClick={() => handleRemoveTag(tag, true)} className="h-3 w-3 rounded-full">
                              ×
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          id="tags"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          placeholder="Add a tag"
                          className="flex-1"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault()
                              handleAddTag(true)
                            }
                          }}
                        />
                        <Button variant="outline" onClick={() => handleAddTag(true)}>
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="github" className="text-right text-sm font-medium">
                      GitHub URL
                    </label>
                    <Input
                      id="github"
                      value={newProject.githubUrl}
                      onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="live" className="text-right text-sm font-medium">
                      Live URL
                    </label>
                    <Input
                      id="live"
                      value={newProject.liveUrl}
                      onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleAddProject}>
                    Add Project
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="h-[150px] bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="line-clamp-2 mb-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>Edit Project</DialogTitle>
                          <DialogDescription>Update the details of your project.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          {/* Edit form fields similar to add project */}
                          {/* ... */}
                        </div>
                        <DialogFooter>
                          <Button type="submit" onClick={handleEditProject}>
                            Save Changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioTemplates.map((template) => (
              <Card
                key={template.id}
                className={`overflow-hidden cursor-pointer transition-all ${
                  selectedTemplate === template.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelectTemplate(template.id)}
              >
                <div className="h-[200px] bg-muted">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{template.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Preview</CardTitle>
              <CardDescription>
                Preview how your portfolio will look with the selected template and projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedTemplate ? (
                <div className="space-y-6">
                  <div className="border rounded-md p-4">
                    <h3 className="text-lg font-medium mb-2">
                      Template: {portfolioTemplates.find((t) => t.id === selectedTemplate)?.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {portfolioTemplates.find((t) => t.id === selectedTemplate)?.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projects.map((project) => (
                        <div key={project.id} className="border rounded-md p-3">
                          <h4 className="font-medium">{project.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleGeneratePortfolio}>Generate Portfolio</Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-muted-foreground mb-4">
                    Please select a template from the Templates tab to preview your portfolio.
                  </p>
                  <Button variant="outline" onClick={() => document.querySelector('[data-value="templates"]')?.click()}>
                    Select Template
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
