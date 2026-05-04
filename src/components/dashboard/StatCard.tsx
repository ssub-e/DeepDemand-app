/**
 * @file src/components/dashboard/StatCard.tsx
 * @description Memoized KPI card component for displaying metrics with variances and trend icons.
 */

import * as React from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { fadeInUp } from "@/lib/animations"

interface StatCardProps {
  /** The descriptive title of the metric */
  title: string
  /** The primary numeric or string value */
  value: string
  /** Optional unit (e.g., %, units) */
  unit?: string
  /** Variance percentage or value from previous period */
  variance?: string
  /** Whether the variance is considered positive/good */
  isPositive?: boolean
  /** Lucide icon to represent the metric */
  icon: LucideIcon
  /** Index used for staggered animation timing */
  index?: number
}

/**
 * StatCard Component
 * Uses React.memo to prevent unnecessary re-renders when dashboard state changes.
 */
export const StatCard = React.memo(({ 
  title, 
  value, 
  unit, 
  variance, 
  isPositive, 
  icon: Icon,
  index = 0 
}: StatCardProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="card-glass h-full hover:bg-card/90 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {title}
          </CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {value} {unit && <span className="text-sm font-normal text-muted-foreground">{unit}</span>}
          </div>
          {variance && (
            <p className={`text-xs mt-1 flex items-center ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
              {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {variance} from last week
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
})

StatCard.displayName = "StatCard"
