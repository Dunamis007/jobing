"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"
import { enhancedCourseMaterialsService, type EnhancedCourseMaterial } from "@/lib/firebase-service-enhanced"
import { Loader2, Search, BookOpen, Download, Upload, File, FileText, Video, Info } from "lucide-react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase"

export default function CourseMaterialsPage() {
  const [loading, setLoading] = useState(false)
  const [materials, setMaterials] = useState<EnhancedCourseMaterial[]>([])
  const [subject, setSubject] = useState("Mathematics")
  const [classLevel, setClassLevel] = useState("100")
  const [searchQuery, setSearchQuery] = useState("")
  const [isGenerated, setIsGenerated] = useState(false)
  const [uploadingFile, setUploadingFile] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [materialTitle, setMaterialTitle] = useState("")
  const [materialDescription, setMaterialDescription] = useState("")
  const [materialType, setMaterialType] = useState("pdf")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState<EnhancedCourseMaterial | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  // Function to fetch course materials
  const fetchCourseMaterials = async () => {
    try {
      setLoading(true)

      const result = await enhancedCourseMaterialsService.getCourseMaterialsByClassLevel(subject, classLevel)

      setMaterials(result.materials)
      setIsGenerated(result.isGenerated || false)
    } catch (error) {
      console.error("Error fetching course materials:", error)
      toast({
        title: "Error",
        description: "Failed to load course materials. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Fetch materials when subject or classLevel changes
  useEffect(() => {
    fetchCourseMaterials()
  }, [subject, classLevel])

  // Handle search
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      fetchCourseMaterials()
      return
    }

    const filtered = materials.filter(
      (material) =>
        material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setMaterials(filtered)
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  // Handle material selection
  const handleSelectMaterial = (material: EnhancedCourseMaterial) => {
    setSelectedMaterial(material)
  }

  // Handle file upload
  const handleUpload = async () => {
    if (materialType === "youtube" && !youtubeUrl) {
      toast({
        title: "Missing Information",
        description: "Please enter a YouTube URL.",
        variant: "destructive",
      })
      return
    }

    if (materialType !== "youtube" && !selectedFile) {
      toast({
        title: "Missing Information",
        description: "Please select a file to upload.",
        variant: "destructive",
      })
      return
    }

    if (!materialTitle || !materialDescription) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    try {
      setUploadingFile(true)

      let fileUrl = ""
      let fileSize = 0

      if (materialType === "youtube") {
        // For YouTube, just store the URL
        fileUrl = youtubeUrl
      } else if (selectedFile) {
        // Upload file to Firebase Storage
        const storageRef = ref(storage, `course-materials/${subject}/${classLevel}/${selectedFile.name}`)

        const uploadTask = uploadBytesResumable(storageRef, selectedFile)

        // Listen for upload progress
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setUploadProgress(progress)
          },
          (error) => {
            console.error("Upload error:", error)
            toast({
              title: "Upload Failed",
              description: "There was an error uploading your file. Please try again.",
              variant: "destructive",
            })
            setUploadingFile(false)
          },
        )

        // Wait for upload to complete
        await uploadTask

        // Get download URL
        fileUrl = await getDownloadURL(storageRef)
        fileSize = selectedFile.size
      }

      // Add material to Firestore
      await enhancedCourseMaterialsService.uploadCourseMaterial(selectedFile || new File([], "dummy"), {
        title: materialTitle,
        description: materialDescription,
        subject,
        class_level: classLevel,
        fileType: materialType,
        fileUrl,
        content: materialType === "text" ? materialDescription : undefined,
      })

      // Reset form
      setMaterialTitle("")
      setMaterialDescription("")
      setMaterialType("pdf")
      setSelectedFile(null)
      setYoutubeUrl("")
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

      toast({
        title: "Upload Successful",
        description: "Your course material has been uploaded successfully.",
      })

      // Refresh materials list
      fetchCourseMaterials()
    } catch (error) {
      console.error("Error uploading material:", error)
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your material. Please try again.",
        variant: "destructive",
      })
    } finally {
      setUploadingFile(false)
      setUploadProgress(0)
    }
  }

  // Get file icon based on file type
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return <File className="h-6 w-6" />
      case "video":
        return <Video className="h-6 w-6" />
      case "youtube":
        return <Video className="h-6 w-6" />
      case "text":
        return <FileText className="h-6 w-6" />
      default:
        return <BookOpen className="h-6 w-6" />
    }
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  // Extract YouTube video ID
  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Available subjects
  const subjects = [
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Economics",
    "Accounting",
    "Business Administration",
    "Engineering",
  ]

  // Available class levels
  const classLevels = ["100", "200", "300", "400", "500"]

  return (
    <DashboardShell>
      <DashboardHeader heading="Course Materials" text="Access and download study materials for your courses" />

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subj) => (
                  <SelectItem key={subj} value={subj}>
                    {subj}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={classLevel} onValueChange={setClassLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Level" />
              </SelectTrigger>
              <SelectContent>
                {classLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level} Level
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Search materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-auto"
            />
            <Button onClick={handleSearch} size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isGenerated && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>AI-Generated Content</AlertTitle>
            <AlertDescription>
              These are AI-generated course materials. You can upload your own materials using the Upload tab.
            </AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="browse">
          <TabsList>
            <TabsTrigger value="browse">Browse Materials</TabsTrigger>
            <TabsTrigger value="upload">Upload Material</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
            ) : materials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {materials.map((material) => (
                  <Card
                    key={material.id}
                    className={`cursor-pointer hover:bg-muted/50 transition-colors ${
                      selectedMaterial?.id === material.id ? "border-primary" : ""
                    }`}
                    onClick={() => handleSelectMaterial(material)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {getFileIcon(material.fileType)}
                          <span className="truncate">{material.title}</span>
                        </CardTitle>
                        <Badge>{material.fileType.toUpperCase()}</Badge>
                      </div>
                      <CardDescription>
                        {material.subject} - Level {material.class_level}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3 text-sm text-muted-foreground">{material.description}</p>
                      {material.fileSize > 0 && (
                        <p className="text-xs text-muted-foreground mt-2">Size: {formatFileSize(material.fileSize)}</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      {material.fileType === "youtube" ? (
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(material.fileUrl, "_blank")
                          }}
                        >
                          Watch Video
                        </Button>
                      ) : material.fileType === "text" ? (
                        <Button variant="outline" className="w-full" onClick={(e) => e.stopPropagation()}>
                          Read
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(material.fileUrl, "_blank")
                          }}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center h-64">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">No Materials Found</h3>
                  <p className="text-muted-foreground text-center mt-2">
                    No course materials available for the selected subject and level.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.querySelector('[data-value="upload"]')?.click()}
                  >
                    Upload Material
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Material</CardTitle>
                <CardDescription>
                  Share your notes, textbooks, or other study materials with other students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter material title"
                      value={materialTitle}
                      onChange={(e) => setMaterialTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Material Type</Label>
                    <Select value={materialType} onValueChange={setMaterialType}>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF Document</SelectItem>
                        <SelectItem value="video">Video File</SelectItem>
                        <SelectItem value="youtube">YouTube Link</SelectItem>
                        <SelectItem value="text">Text/Notes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    className="w-full min-h-[100px] p-2 border rounded-md"
                    placeholder="Enter a description of the material"
                    value={materialDescription}
                    onChange={(e) => setMaterialDescription(e.target.value)}
                  />
                </div>

                {materialType === "youtube" ? (
                  <div className="space-y-2">
                    <Label htmlFor="youtube">YouTube URL</Label>
                    <Input
                      id="youtube"
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                    />
                    {youtubeUrl && getYoutubeVideoId(youtubeUrl) && (
                      <div className="mt-4 aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${getYoutubeVideoId(youtubeUrl)}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                ) : materialType === "text" ? (
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <textarea
                      id="content"
                      className="w-full min-h-[200px] p-2 border rounded-md"
                      placeholder="Enter your notes or content here"
                      value={materialDescription}
                      onChange={(e) => setMaterialDescription(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="file">File</Label>
                    <Input
                      id="file"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept={materialType === "pdf" ? ".pdf" : materialType === "video" ? "video/*" : undefined}
                    />
                    {selectedFile && (
                      <p className="text-sm text-muted-foreground">
                        Selected file: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                      </p>
                    )}
                  </div>
                )}

                {uploadingFile && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Upload Progress</span>
                      <span>{Math.round(uploadProgress)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleUpload}
                  disabled={uploadingFile || (!selectedFile && materialType !== "youtube" && materialType !== "text")}
                  className="w-full"
                >
                  {uploadingFile ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Material
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {selectedMaterial && selectedMaterial.fileType === "text" && (
          <Card>
            <CardHeader>
              <CardTitle>{selectedMaterial.title}</CardTitle>
              <CardDescription>
                {selectedMaterial.subject} - Level {selectedMaterial.class_level}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                {selectedMaterial.content?.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => setSelectedMaterial(null)}>
                Close
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </DashboardShell>
  )
}
