/**
 * @file src/components/dashboard/XAIPanel.tsx
 * @description Explainable AI (XAI) panel providing deep insights into forecasting factors.
 */

import { motion } from "framer-motion"
import { BrainCircuit, Info, TrendingUp, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface XAIPanelProps {
  /** The currently selected data point from the forecast chart */
  selectedPoint: any
}

/**
 * XAIPanel Component
 * Displays a breakdown of internal and external factors affecting a specific prediction.
 */
export function XAIPanel({ selectedPoint }: XAIPanelProps) {
  return (
    <Card className="md:col-span-3 lg:col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-primary" />
            Explainable AI (XAI)
          </CardTitle>
          <Info className="h-4 w-4 text-muted-foreground" />
        </div>
        <CardDescription>
          {selectedPoint ? `Factors affecting prediction for ${selectedPoint.date}` : "Select a point on the chart to view AI insights."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {selectedPoint ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  Promotion Impact
                </span>
                <span className="text-emerald-500 font-bold">+15%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  Weather (Rain)
                </span>
                <span className="text-emerald-500 font-bold">+8%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose-500" />
                  Stockout Risk
                </span>
                <span className="text-rose-500 font-bold">-5%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2">
                <div className="bg-rose-500 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-primary/10 rounded-lg text-sm text-foreground/80 border border-primary/20">
              <strong>AI Note:</strong> High confidence due to matching historical patterns during similar promotional periods last year.
            </div>
          </motion.div>
        ) : (
          <div className="h-[250px] flex items-center justify-center text-center text-muted-foreground flex-col">
            <BrainCircuit className="h-12 w-12 mb-4 opacity-20" />
            <p className="text-sm max-w-[200px]">Click on any data point in the chart to analyze the driving factors behind the forecast.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
