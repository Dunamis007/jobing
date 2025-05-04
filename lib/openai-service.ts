import OpenAI from "openai"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const openaiService = {
  // Generate a response using OpenAI
  async generateResponse(prompt: string, context = ""): Promise<string> {
    try {
      const fullPrompt = context ? `${context}\n\n${prompt}` : prompt

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are an expert IELTS tutor with years of experience helping students achieve their target scores. Provide detailed, helpful responses focused on IELTS preparation. Include examples, strategies, and explanations where appropriate.",
          },
          {
            role: "user",
            content: fullPrompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      })

      return response.choices[0].message.content || "I'm sorry, I couldn't generate a response."
    } catch (error) {
      console.error("OpenAI API error:", error)
      return "I'm sorry, there was an error generating a response. Please try again later."
    }
  },

  // Generate feedback for a writing task
  async generateWritingFeedback(essay: string): Promise<{
    score: number
    feedback: string
    strengths: string[]
    weaknesses: string[]
    improvements: string[]
  }> {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are an expert IELTS examiner. Evaluate the following essay according to IELTS criteria: Task Achievement, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. Provide a band score (0-9), detailed feedback, strengths, weaknesses, and specific improvements.",
          },
          {
            role: "user",
            content: essay,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
        response_format: { type: "json_object" },
      })

      const result = JSON.parse(response.choices[0].message.content || "{}")
      return {
        score: result.score || 0,
        feedback: result.feedback || "No feedback available",
        strengths: result.strengths || [],
        weaknesses: result.weaknesses || [],
        improvements: result.improvements || [],
      }
    } catch (error) {
      console.error("OpenAI API error:", error)
      return {
        score: 0,
        feedback: "Error generating feedback. Please try again later.",
        strengths: [],
        weaknesses: [],
        improvements: [],
      }
    }
  },

  // Generate a personalized study plan
  async generateStudyPlan(
    currentLevel: string,
    targetScore: string,
    testDate: string,
    strengths: string[],
    weaknesses: string[],
  ): Promise<{
    overview: string
    weeklyPlan: Array<{ week: number; focus: string; activities: string[] }>
    resources: Array<{ title: string; type: string; link: string }>
  }> {
    try {
      const prompt = `
        Create a personalized IELTS study plan with the following details:
        - Current English level: ${currentLevel}
        - Target IELTS score: ${targetScore}
        - Test date: ${testDate}
        - Strengths: ${strengths.join(", ")}
        - Weaknesses: ${weaknesses.join(", ")}
        
        Include an overview, weekly plan, and recommended resources.
      `

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are an expert IELTS tutor specializing in creating personalized study plans. Generate a detailed, structured study plan in JSON format with an overview, weekly plan, and resources.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1500,
        response_format: { type: "json_object" },
      })

      const result = JSON.parse(response.choices[0].message.content || "{}")
      return {
        overview: result.overview || "No overview available",
        weeklyPlan: result.weeklyPlan || [],
        resources: result.resources || [],
      }
    } catch (error) {
      console.error("OpenAI API error:", error)
      return {
        overview: "Error generating study plan. Please try again later.",
        weeklyPlan: [],
        resources: [],
      }
    }
  },
}
