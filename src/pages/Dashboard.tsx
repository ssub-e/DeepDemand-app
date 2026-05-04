/**
 * @file src/pages/Dashboard.tsx
 * @description Executive Dashboard page providing a high-level overview of demand forecasts, AI confidence, and team collaborations.
 */

/**
 * [Component Logic Flow]
 * 1. Load constants (KPI_DATA) and state (selectedPoint).
 * 2. Render PageHeader with action buttons.
 * 3. Map through KPI_DATA to render StatCards with staggered animations.
 * 4. Render ForecastChart and XAIPanel in a responsive grid.
 * 5. Handle handlePointSelect callback from ForecastChart to update XAIPanel state.
 * 6. Render Team Memos and Quick Actions sections.
 */

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/layout/PageHeader"
import { StatCard } from "@/components/dashboard/StatCard"
import { ForecastChart } from "@/components/dashboard/ForecastChart"
import { XAIPanel } from "@/components/dashboard/XAIPanel"
import { KPI_DATA } from "@/constants/dashboard"

/**
 * Dashboard Page Component
 * Main landing page for authorized users after onboarding.
 */
export default function Dashboard() {
  const [selectedPoint, setSelectedPoint] = React.useState<any>(null)

  /**
   * Updates the selected data point for AI analysis.
   * Passed as a callback to the ForecastChart component.
   */
  const handlePointSelect = React.useCallback((point: any) => {
    setSelectedPoint(point)
  }, [])

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Executive Dashboard" 
        description="Overview of demand predictions and model performance."
      >
        <Button variant="outline">Download Report</Button>
        <Button>Edit Layout</Button>
      </PageHeader>

      {/* KPI Cards Section */}
      <div className="grid gap-4 md:grid-cols-3">
        {KPI_DATA.map((kpi, i) => (
          <StatCard key={kpi.title} {...kpi} index={i} />
        ))}
      </div>

      {/* Analytics Visualization Section */}
      <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-8">
        <ForecastChart onPointSelect={handlePointSelect} />
        <XAIPanel selectedPoint={selectedPoint} />
      </div>

      {/* Collaboration & Actions Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="card-glass">
          <CardHeader>
            <CardTitle>Team Memos</CardTitle>
            <CardDescription>Recent annotations on forecasts.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-xs font-medium text-primary">MD</div>
                <div>
                  <p className="text-sm font-medium">Planner (MD)</p>
                  <p className="text-sm text-muted-foreground mt-1">AI prediction for SKU-A seems high due to upcoming holiday. Let's adjust inventory slightly.</p>
                  <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-xs font-medium text-secondary-foreground">WL</div>
                <div>
                  <p className="text-sm font-medium">Warehouse Lead</p>
                  <p className="text-sm text-muted-foreground mt-1">Need to check Incheon warehouse for tomorrow's peak. Capacity might be an issue.</p>
                  <p className="text-xs text-muted-foreground mt-2">5 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used tools.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">Review High-Variance SKUs</Button>
            <Button variant="outline" className="w-full justify-start">Adjust Center Capacity</Button>
            <Button variant="outline" className="w-full justify-start">Manage Mall API Sync</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}



