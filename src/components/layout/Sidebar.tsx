/**
 * @file src/components/layout/Sidebar.tsx
 * @description Navigation sidebar component managing application-wide routes and user profile display.
 */

import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, BarChart3, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  /** Visibility state for mobile responsiveness */
  open: boolean
  /** Callback to toggle visibility */
  setOpen: (open: boolean) => void
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Admin", href: "/admin", icon: Users },
]

/**
 * Sidebar Component
 * Renders the main navigation menu and handles mobile overlay behavior.
 */
export function Sidebar({ open, setOpen }: SidebarProps) {
  const location = useLocation()

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r flex flex-col transition-transform duration-300 md:relative md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center px-6 border-b">
          <div className="flex items-center gap-2 text-primary">
            <BarChart3 className="h-6 w-6" />
            <span className="font-bold text-lg tracking-tight text-foreground">DeepDemand</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
                onClick={() => setOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-sm">
              JD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
