import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/layout/PageHeader"

export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <PageHeader 
        title="Business Configurations" 
        description="Manage external integrations and center capacities."
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mall API Integrations</CardTitle>
            <CardDescription>Connect to e-commerce platforms like Cafe24.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center font-bold text-primary">C24</div>
                <div>
                  <h4 className="font-medium">Cafe24</h4>
                  <p className="text-sm text-muted-foreground">Sync orders and inventory automatically.</p>
                </div>
              </div>
              <Button variant="outline" className="text-emerald-500 border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-600">Connected</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold">NS</div>
                <div>
                  <h4 className="font-medium">Naver SmartStore</h4>
                  <p className="text-sm text-muted-foreground">Not connected yet.</p>
                </div>
              </div>
              <Button>Connect</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Center Capacity (CAPA)</CardTitle>
            <CardDescription>Adjust warehouse thresholds and limits.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Incheon Hub (Max Orders/Day)</label>
                <span className="text-sm text-muted-foreground">15,000</span>
              </div>
              <input type="range" min="0" max="20000" defaultValue="15000" className="w-full accent-primary" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Busan Center (Max Orders/Day)</label>
                <span className="text-sm text-muted-foreground">8,500</span>
              </div>
              <input type="range" min="0" max="10000" defaultValue="8500" className="w-full accent-primary" />
            </div>
            
            <Button>Save Capacities</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
