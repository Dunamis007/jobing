import Link from "next/link"
// Add this import at the top
import { Award, BarChart3, Trophy } from "lucide-react"

// Inside the component's return statement, add this section to the sidebar or navigation
;<div className="mt-6">
  <h3 className="mb-2 font-medium">Achievements</h3>
  <ul className="space-y-1">
    <li>
      <Link
        href="/dashboard/gamification"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
      >
        <Trophy className="h-4 w-4 text-primary" />
        <span>Progress & Rewards</span>
      </Link>
    </li>
    <li>
      <Link
        href="/dashboard/leaderboard"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
      >
        <BarChart3 className="h-4 w-4 text-primary" />
        <span>Leaderboards</span>
      </Link>
    </li>
    <li>
      <Link
        href="/dashboard/achievements"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted"
      >
        <Award className="h-4 w-4 text-primary" />
        <span>My Achievements</span>
      </Link>
    </li>
  </ul>
</div>
