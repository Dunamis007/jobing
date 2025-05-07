import type { Metadata } from "next"
import IELTSRegistrationClient from "./IELTSRegistrationClient"

export const metadata: Metadata = {
  title: "IELTS Registration | Dunamis Tutors",
  description: "Register for IELTS preparation program at Dunamis Tutors",
}

export default function IELTSRegistrationPage() {
  return <IELTSRegistrationClient />
}
