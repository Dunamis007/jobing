import type { Metadata } from "next"
import { DataAnalyticsRegistrationClient } from "./DataAnalyticsRegistrationClient"

export const metadata: Metadata = {
  title: "Register for Data Analytics Program | Dunamis Edtech",
  description:
    "Enroll in our comprehensive Data Analytics program. Choose between online and on-campus learning options.",
}

export default function DataAnalyticsRegistrationPage() {
  return <DataAnalyticsRegistrationClient />
}
