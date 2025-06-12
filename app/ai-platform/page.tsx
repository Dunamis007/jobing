import type { Metadata } from "next"
import { AIPlatformClient } from "./AIPlatformClient"

export const metadata: Metadata = {
  title: "AI Learning Platform | Dunamis Tutors",
  description: "Master AI with our Google Digital Garage-style learning platform",
}

export default function AIPlatformPage() {
  return <AIPlatformClient />
}
