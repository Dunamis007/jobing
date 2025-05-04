"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, FileUp, Loader2, RefreshCw, Scan } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function AIFormCorrectionPage() {
  const [activeTab, setActiveTab] = useState("upload")
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [results, setResults] = useState<null | {
    originalText: string
    correctedText: string
    score: number
    feedback: string[]
  }>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCameraActive, setIsCameraActive] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
        setResults(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      toast({
        title: "Camera Error",
        description: "Could not access your camera. Please check permissions.",
        variant: "destructive",
      })
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setIsCameraActive(false)
    }
  }

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      if (context) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        const imageDataUrl = canvas.toDataURL("image/png")
        setSelectedImage(imageDataUrl)
        stopCamera()
      }
    }
  }

  const processImage = () => {
    if (!selectedImage) return

    setIsProcessing(true)

    // Simulate AI processing with a timeout
    setTimeout(() => {
      // Mock results - in a real app, this would come from an AI service
      setResults({
        originalText: "The mitochondria is the powerhouse of the cell.",
        correctedText: "The mitochondrion is the powerhouse of the cell.",
        score: 90,
        feedback: [
          "Grammar correction: 'mitochondria' is plural, 'mitochondrion' is singular",
          "Good understanding of cellular biology concepts",
          "Clear handwriting and presentation",
        ],
      })

      setIsProcessing(false)
    }, 2000)
  }

  const resetProcess = () => {
    setSelectedImage(null)
    setResults(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Form Correction</h1>
        <p className="text-muted-foreground">Upload or scan your handwritten assignments for AI-powered correction</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="upload">Upload Image</TabsTrigger>
          <TabsTrigger value="camera">Use Camera</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Assignment</CardTitle>
              <CardDescription>Upload a clear image of your handwritten assignment or answer sheet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedImage ? (
                  <div className="space-y-4 w-full">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Uploaded assignment"
                      className="max-h-[300px] mx-auto rounded-lg object-contain"
                    />
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation()
                          resetProcess()
                        }}
                      >
                        Choose Different Image
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-4 py-8">
                    <FileUp className="h-12 w-12 text-muted-foreground" />
                    <div className="space-y-1 text-center">
                      <p className="font-medium">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">PNG, JPG or JPEG (max. 10MB)</p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileUpload}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={!selectedImage || isProcessing} onClick={processImage}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Scan className="mr-2 h-4 w-4" />
                    Analyze Assignment
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="camera" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Capture Assignment</CardTitle>
              <CardDescription>Use your camera to take a picture of your assignment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Captured assignment"
                      className="max-h-[300px] w-full object-contain"
                    />
                    <div className="flex justify-center p-2">
                      <Button variant="outline" onClick={resetProcess}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Retake Photo
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className={`w-full h-[300px] object-cover ${isCameraActive ? "block" : "hidden"}`}
                    />
                    {!isCameraActive && (
                      <div className="h-[300px] flex flex-col items-center justify-center space-y-4 bg-muted/20">
                        <Camera className="h-12 w-12 text-muted-foreground" />
                        <Button onClick={startCamera}>Start Camera</Button>
                      </div>
                    )}
                    {isCameraActive && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        <Button onClick={captureImage}>Capture Image</Button>
                      </div>
                    )}
                  </div>
                )}
                <canvas ref={canvasRef} className="hidden" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={!selectedImage || isProcessing} onClick={processImage}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Scan className="mr-2 h-4 w-4" />
                    Analyze Assignment
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {results && (
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
            <CardDescription>AI-powered correction and feedback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Original Text</h3>
                <div className="rounded-md border p-4 bg-muted/30">
                  <p>{results.originalText}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Corrected Text</h3>
                <div className="rounded-md border p-4 bg-primary/5">
                  <p>{results.correctedText}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Score</h3>
                <span className="text-lg font-bold">{results.score}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${results.score}%` }} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Feedback</h3>
              <ul className="space-y-2">
                {results.feedback.map((item, index) => (
                  <li key={index} className="rounded-md border p-3 bg-muted/20">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
