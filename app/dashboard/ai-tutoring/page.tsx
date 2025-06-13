import { NotionIntegration } from "@/components/integrations/notion-integration"
import { CalendlyIntegration } from "@/components/integrations/calendly-integration"

const Page = () => {
  return (
    <div>
      <h1>AI Tutoring Dashboard</h1>

      <div className="mt-6">
        <NotionIntegration />
      </div>

      {/* AIUpgradePlan component would go here */}
      <div className="mt-6">AIUpgradePlan Component Placeholder</div>

      {/* AIHallOfFame component would go here */}
      <div className="mt-6">AIHallOfFame Component Placeholder</div>

      <div className="mt-6">
        <CalendlyIntegration />
      </div>
    </div>
  )
}

export default Page
