import { TrendingUp, BrainCircuit, PackageCheck } from "lucide-react"

export const KPI_DATA = [
  {
    title: "Tomorrow's Forecast",
    value: "5,234",
    unit: "units",
    variance: "+12%",
    isPositive: true,
    icon: TrendingUp,
  },
  {
    title: "AI Confidence",
    value: "88",
    unit: "%",
    variance: "+2%",
    isPositive: true,
    icon: BrainCircuit,
  },
  {
    title: "Inventory Savings",
    value: "$12.4k",
    unit: "est",
    variance: "-5%",
    isPositive: false,
    icon: PackageCheck,
  }
]

export const CHART_DATA = [
  { date: "Oct 01", actual: 4000, predicted: 4100 },
  { date: "Oct 02", actual: 3000, predicted: 3200 },
  { date: "Oct 03", actual: 4500, predicted: 4300 },
  { date: "Oct 04", actual: 4800, predicted: 4900 },
  { date: "Oct 05", actual: null, predicted: 5100 },
  { date: "Oct 06", actual: null, predicted: 5234 },
  { date: "Oct 07", actual: null, predicted: 4800 },
]
