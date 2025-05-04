import type { Metadata } from "next"
import { MultiStepRegistration } from "@/components/onboarding/multi-step-registration"

export const metadata: Metadata = {
  title: "IELTS Registration | Dunamis Tutors",
  description:
    "Register for our comprehensive IELTS preparation program with personalized learning paths and EduCoin rewards",
  keywords: "IELTS registration, English test preparation, personalized learning, EduCoins, admission letter",
}

export default function IELTSRegistrationPage() {
  return <MultiStepRegistration />
}
