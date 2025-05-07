import type { Metadata } from "next"
import DigitalMarketingRegistrationClient from "./DigitalMarketingRegistrationClient"

export const metadata: Metadata = {
  title: "Digital Marketing Registration | Dunamis Tutors",
  description: "Register for Digital Marketing program at Dunamis Tutors",
}

export default function DigitalMarketingRegistrationPage() {
  return <DigitalMarketingRegistrationClient />
}
