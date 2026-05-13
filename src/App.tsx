/**
 * @file src/App.tsx
 * @description Root application component handling global routing.
 * Landing page sits at '/' as the customer hook layer.
 * Onboarding and Dashboard are accessed via CTA navigation.
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"
import Admin from "./pages/Admin"
import Onboarding from "./pages/Onboarding"
import LandingPage from "./pages/LandingPage"
import { useAppContext } from "./contexts/AppContext"

/**
 * Main App Component
 * Landing → Onboarding → Dashboard flow
 */
function App() {
  const { isOnboardingCompleted } = useAppContext()

  return (
    <Router>
      <Routes>
        {/* Landing page (customer hook) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Onboarding flow (standalone page) */}
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Protected routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route 
            path="/app" 
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

