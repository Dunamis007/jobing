import type { Metadata } from "next"
import CodingRegistrationClientPage from "./CodingRegistrationClientPage"

export const metadata: Metadata = {
  title: "Coding Program Registration | Dunamis Tutors",
  description: "Register for Coding program at Dunamis Tutors",
}

export default function CodingRegistrationPage() {
  return <CodingRegistrationClientPage />
}
