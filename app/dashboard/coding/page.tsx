import { CodingPlatformClient } from "@/app/coding-platform/CodingPlatformClient"

export const metadata = {
  title: "Coding Dashboard | Dunamis Tutors",
  description: "Access your coding curriculum, track progress, and engage with the developer community",
}

export default function CodingDashboardPage() {
  return <CodingPlatformClient />
}
