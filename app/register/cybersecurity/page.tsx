import type { Metadata } from "next"
import { CybersecurityRegistrationClient } from "./CybersecurityRegistrationClient"

export const metadata: Metadata = {
  title: "Register for Cybersecurity Program | Dunamis Edtech",
  description:
    "Enroll in our comprehensive Cybersecurity program. Choose between online and on-campus learning options.",
}

export default function CybersecurityRegistrationPage() {
  return <CybersecurityRegistrationClient />
}
