import * as React from "react"
import { useLocalStorage } from "@/hooks/useLocalStorage"

interface AppContextType {
  isDarkMode: boolean
  setIsDarkMode: (val: boolean) => void
  isOnboardingCompleted: boolean
  completeOnboarding: () => void
}

const AppContext = React.createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark_mode", true)
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useLocalStorage("onboarding_completed", false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const completeOnboarding = React.useCallback(() => {
    setIsOnboardingCompleted(true)
  }, [setIsOnboardingCompleted])

  const value = React.useMemo(() => ({
    isDarkMode,
    setIsDarkMode,
    isOnboardingCompleted,
    completeOnboarding
  }), [isDarkMode, setIsDarkMode, isOnboardingCompleted, completeOnboarding])

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
