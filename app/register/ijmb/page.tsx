import type { Metadata } from "next"
import IJMBRegistrationClient from "./IJMBRegistrationClient"

export const metadata: Metadata = {
  title: "IJMB Registration | Dunamis Tutors",
  description: "Register for IJMB program at Dunamis Tutors",
}

export default function IJMBRegistrationPage() {
  return <IJMBRegistrationClient />
}
