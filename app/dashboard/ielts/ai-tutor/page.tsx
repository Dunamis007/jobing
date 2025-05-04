import type { Metadata } from "next"
import { AITutor } from "@/components/ielts/ai-tutor"

export const metadata: Metadata = {
  title: "IELTS AI Tutor | Dunamis Tutors",
  description: "Get personalized IELTS guidance with our AI-powered tutor",
  keywords: "IELTS AI Tutor, personalized IELTS preparation, AI language learning, IELTS practice, EduCoins",
}

export default function AITutorPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">IELTS AI Tutor</h1>
        <p className="text-muted-foreground">
          Get personalized guidance and practice for all sections of the IELTS exam
        </p>
      </div>

      <AITutor />
    </div>
  )
}
