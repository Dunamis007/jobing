import type { Metadata } from "next"
import { DashboardClient } from "./DashboardClient"

export const metadata: Metadata = {
  title: "Dashboard | Dunamis Tutors",
  description: "Your personalized learning dashboard with Dunamis Tutors.",
}

export default function DashboardPage() {
  return <DashboardClient />
}
