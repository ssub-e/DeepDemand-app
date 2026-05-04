/**
 * @file src/components/layout/MainLayout.tsx
 * @description Core structural wrapper for the application, coordinating Sidebar, Header, and Page Outlet.
 */

import * as React from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import { useAppContext } from "@/contexts/AppContext"

/**
 * MainLayout Component
 * Wraps all protected routes to provide consistent navigation and branding.
 */
export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const { isDarkMode, setIsDarkMode } = useAppContext()

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row transition-colors duration-300">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header 
          onMenuClick={() => setSidebarOpen(true)} 
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />

        <div className="flex-1 overflow-auto bg-background p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

