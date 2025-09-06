import type { Metadata } from "next"
import { IJMBRegistrationClient } from "./IJMBRegistrationClient"

export const metadata: Metadata = {
  title: "IJMB Program Registration | Dunamis Edtech",
  description:
    "Register for our Interim Joint Matriculation Board (IJMB) program. In-person classes for university preparation with expert guidance.",
  keywords: ["IJMB registration", "university preparation", "direct entry", "Nigeria education", "in-person classes"],
}

export default function IJMBRegistrationPage() {
  return <IJMBRegistrationClient />
}
