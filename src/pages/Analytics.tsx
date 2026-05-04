import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Filter, Download, ChevronDown } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"

export default function Analytics() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Deep Analytics" 
        description="Multi-dimensional analysis with advanced filtering."
      >
        <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export CSV</Button>
      </PageHeader>

      {/* Advanced Filters */}
      <Card>
        <CardContent className="p-4 flex flex-wrap gap-4 items-end">
          <div className="space-y-1.5 flex-1 min-w-[200px]">
            <label className="text-sm font-medium">Category</label>
            <div className="flex items-center justify-between w-full p-2 border rounded-md bg-background text-sm cursor-pointer">
              <span>All Categories</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-1.5 flex-1 min-w-[200px]">
            <label className="text-sm font-medium">Warehouse</label>
            <div className="flex items-center justify-between w-full p-2 border rounded-md bg-background text-sm cursor-pointer">
              <span>Incheon Hub</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-1.5 flex-1 min-w-[200px]">
            <label className="text-sm font-medium">SKU Selection</label>
            <div className="flex items-center justify-between w-full p-2 border rounded-md bg-background text-sm cursor-pointer text-muted-foreground">
              <span>Search SKUs...</span>
            </div>
          </div>
          <Button className="h-[38px]"><Filter className="w-4 h-4 mr-2" /> Apply Filters</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Forecast Details Grid</CardTitle>
          <CardDescription>Line item details for current filtered selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center border border-dashed rounded-lg bg-accent/20">
            <p className="text-muted-foreground text-sm">Data Grid Component Placeholder (Ag-Grid / TanStack Table)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
