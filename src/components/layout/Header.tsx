/**
 * @file src/components/layout/Header.tsx
 * @description Top header component providing search functionality, notifications, and theme toggling.
 */

import { Menu, Bell, Search, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  /** Trigger for mobile sidebar */
  onMenuClick: () => void
  /** Current theme state */
  isDarkMode: boolean
  /** Callback to switch themes */
  toggleDarkMode: () => void
}

/**
 * Header Component
 * Handles the persistent top-bar interface elements.
 */
export function Header({ onMenuClick, isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b bg-card shrink-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden sm:flex items-center relative">
          <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search metrics, SKUs..." 
            className="pl-9 pr-4 py-2 text-sm bg-accent/50 border-none rounded-md focus:outline-none focus:ring-1 focus:ring-primary w-64 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
        </Button>
      </div>
    </header>
  )
}
