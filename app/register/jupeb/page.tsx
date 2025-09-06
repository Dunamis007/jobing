import type { Metadata } from "next"
import { JUPEBRegistrationClient } from "./JUPEBRegistrationClient"

export const metadata: Metadata = {
  title: "JUPEB Program Registration | Dunamis Edtech",
  description:
    "Register for our Joint Universities Preliminary Examinations Board (JUPEB) program. In-person classes for university admission success.",
  keywords: [
    "JUPEB registration",
    "university admission",
    "preliminary examinations",
    "Nigeria education",
    "in-person classes",
  ],
}

export default function JUPEBRegistrationPage() {
  return <JUPEBRegistrationClient />
}
