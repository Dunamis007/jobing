import { type NextRequest, NextResponse } from "next/server"
import { openaiService } from "@/lib/openai-service"

export async function POST(request: NextRequest) {
  try {
    const { prompt, context } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const response = await openaiService.generateResponse(prompt, context)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in AI Tutor API:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}
