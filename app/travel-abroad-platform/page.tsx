import type { Metadata } from "next"
import { TravelAbroadPlatformClient } from "./TravelAbroadPlatformClient"

export const metadata: Metadata = {
  title: "Travel Abroad Platform | Dunamis Tutors",
  description: "Master your study abroad journey with our comprehensive guidance platform",
}

export default function TravelAbroadPlatformPage() {
  return <TravelAbroadPlatformClient />
}
