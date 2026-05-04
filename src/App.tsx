/**
 * @file src/App.tsx
 * @description Root application component handling global routing and conditional redirection based on onboarding status.
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"
import Admin from "./pages/Admin"
import Onboarding from "./pages/Onboarding"
import { useAppContext } from "./contexts/AppContext"

/**
 * Main App Component
 * Defines the application's routing structure and protected route logic.
 */
function App() {
  const { isOnboardingCompleted } = useAppContext()

  return (
    <Router>
      <Routes>
        {/* Onboarding flow (standalone page) */}
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Protected routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route 
            path="/" 
            element={<Navigate to={isOnboardingCompleted ? "/dashboard" : "/onboarding"} replace />} 
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
