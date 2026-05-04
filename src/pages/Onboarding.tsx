import * as React from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { BrainCircuit, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppContext } from "@/contexts/AppContext"
import { slideInRight, fadeIn } from "@/lib/animations"

export default function Onboarding() {
  const navigate = useNavigate()
  const { completeOnboarding } = useAppContext()
  const [step, setStep] = React.useState(1)

  const handleNext = React.useCallback(() => {
    if (step < 3) {
      setStep(s => s + 1)
    } else {
      completeOnboarding()
      navigate("/dashboard")
    }
  }, [step, completeOnboarding, navigate])

  const handleBack = React.useCallback(() => {
    setStep(s => Math.max(1, s - 1))
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BrainCircuit className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome to DeepDemand</h2>
          <p className="text-muted-foreground mt-2">
            Let's configure your AI demand forecasting workspace.
          </p>
        </div>

        <div className="card-glass rounded-xl p-6 relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={step}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideInRight}
              className="space-y-6"
            >
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Step 1: Connect Data Source</h3>
                  <p className="text-sm text-muted-foreground">Link your e-commerce platform to start syncing historical sales data.</p>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" className="justify-start h-12 text-left">Connect Cafe24</Button>
                    <Button variant="outline" className="justify-start h-12 text-left">Connect Naver SmartStore</Button>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Step 2: Set Center Capacities</h3>
                  <p className="text-sm text-muted-foreground">Help our AI understand your physical fulfillment constraints.</p>
                  <div className="space-y-4 bg-accent/50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Auto-configure based on history</span>
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Step 3: AI Model Training</h3>
                  <p className="text-sm text-muted-foreground">The DeepDemand engine is initializing your baseline forecast model.</p>
                  <div className="w-full bg-accent rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 2 }}
                      className="bg-primary h-full"
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground">This usually takes just a moment...</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            <Button 
              variant="ghost" 
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {step === 3 ? "Go to Dashboard" : "Next"} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
