import type { Metadata } from "next"
import JUPEBRegistrationClient from "./JUPEBRegistrationClient"

export const metadata: Metadata = {
  title: "JUPEB Registration | Dunamis Tutors",
  description: "Register for JUPEB program at Dunamis Tutors",
}

export default function JUPEBRegistrationPage() {
  return <JUPEBRegistrationClient />
}
