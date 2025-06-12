import type { Metadata } from "next"
import { DigitalMarketingPlatformClient } from "./DigitalMarketingPlatformClient"

export const metadata: Metadata = {
  title: "Digital Marketing Learning Platform | Dunamis Tutors",
  description: "Master Digital Marketing with our comprehensive learning platform",
}

export default function DigitalMarketingPlatformPage() {
  return <DigitalMarketingPlatformClient />
}
