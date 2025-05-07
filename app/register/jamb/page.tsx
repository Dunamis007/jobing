import type { Metadata } from "next"
import JAMBRegistrationClient from "./JAMBRegistrationClient"

export const metadata: Metadata = {
  title: "JAMB Registration | Dunamis Tutors",
  description: "Register for JAMB preparation program at Dunamis Tutors",
}

export default function JAMBRegistrationPage() {
  return <JAMBRegistrationClient />
}
