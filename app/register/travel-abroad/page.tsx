import type { Metadata } from "next"
import TravelAbroadRegistrationClient from "./TravelAbroadRegistrationClient"

export const metadata: Metadata = {
  title: "Travel Abroad Registration | Dunamis Tutors",
  description: "Register for Travel Abroad program at Dunamis Tutors",
}

export default function TravelAbroadRegistrationPage() {
  return <TravelAbroadRegistrationClient />
}
