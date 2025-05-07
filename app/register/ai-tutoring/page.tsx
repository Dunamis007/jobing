import type { Metadata } from "next"
import AITutoringRegistrationClient from "./AITutoringRegistrationClient"

export const metadata: Metadata = {
  title: "AI Tutoring Registration | Dunamis Tutors",
  description: "Register for AI Tutoring program at Dunamis Tutors",
}

export default function AITutoringRegistrationPage() {
  return <AITutoringRegistrationClient />
}
