/**
 * @file src/components/dashboard/ForecastChart.tsx
 * @description Interactive demand forecast visualization using Recharts.
 */

import * as React from "react"
import { 
  Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line 
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CHART_DATA } from "@/constants/dashboard"

interface ForecastChartProps {
  /** Callback triggered when a data point is clicked */
  onPointSelect: (point: any) => void
}

/**
 * ForecastChart Component
 * Visualizes actual historical data vs predicted AI forecasts.
 */
export const ForecastChart = React.memo(({ onPointSelect }: ForecastChartProps) => {
  return (
    <Card className="md:col-span-4 lg:col-span-5 card-glass">
      <CardHeader>
        <CardTitle>Demand Forecast vs Actuals</CardTitle>
        <CardDescription>
          Comparing historical sales with AI-generated predictions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={CHART_DATA}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              onClick={(data: any) => {
                if (data && data.activePayload) {
                  onPointSelect(data.activePayload[0].payload)
                }
              }}
            >
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                itemStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Area type="monotone" dataKey="actual" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorActual)" />
              <Line type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" strokeDasharray="5 5" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
})

ForecastChart.displayName = "ForecastChart"
