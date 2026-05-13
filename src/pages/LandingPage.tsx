/**
 * @file src/pages/LandingPage.tsx
 * @description Customer Hook landing page for DeepDemand.
 * Placed before the main service flow (Onboarding → Dashboard) to maximize user intent.
 * 
 * Strategy: C-type (Result-Oriented) + A-type trust elements
 * Sections: Hero → Logo Wall → I/O Diagram → Value Props → Outcome Showcase → ROI → Stats → Final CTA → Footer
 */

import { useNavigate } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import * as React from "react"
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  ChevronRight,
  Database,
  Gauge,
  LineChart,
  PackageCheck,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import "./LandingPage.css"

/* ============================================
   ANIMATION VARIANTS
   ============================================ */
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
}

/* ============================================
   ANIMATED COUNTER HOOK
   ============================================ */
function useCountUp(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = React.useState(0)
  const [hasStarted, setHasStarted] = React.useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (startOnView && isInView && !hasStarted) {
      setHasStarted(true)
      let startTime: number | null = null
      const animate = (time: number) => {
        if (!startTime) startTime = time
        const progress = Math.min((time - startTime) / duration, 1)
        // easeOutQuart
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, startOnView, hasStarted])

  return { count, ref }
}

/* ============================================
   SECTION WRAPPER WITH SCROLL ANIMATION
   ============================================ */
function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <motion.section
      id={id}
      className={`landing-section ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      <div className="landing-section-inner">{children}</div>
    </motion.section>
  )
}

/* ============================================
   MAIN LANDING PAGE COMPONENT
   ============================================ */
export default function LandingPage() {
  const navigate = useNavigate()

  const handleCTA = React.useCallback(() => {
    navigate("/onboarding")
  }, [navigate])

  return (
    <div className="landing-page">
      {/* ─── NAVBAR ─── */}
      <nav className="landing-nav" id="landing-nav">
        <a href="/" className="landing-nav-logo">
          <div className="landing-nav-logo-icon">
            <BrainCircuit size={18} />
          </div>
          DeepDemand
        </a>
        <div className="landing-nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#results">Results</a>
          <a href="#roi">ROI</a>
          <button className="landing-nav-cta" onClick={handleCTA}>
            Start Free <ArrowRight size={14} />
          </button>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section" id="hero">
        <div className="hero-bg">
          <img
            src="/hero-visual.png"
            alt=""
            className="hero-bg-image"
            loading="eager"
          />
          <div className="hero-bg-overlay" />
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-purple" />
        </div>

        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              AI-Powered Demand Forecasting
            </span>
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            Stop Guessing Demand.
            <br />
            <span className="hero-title-gradient">Start Predicting It.</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp}>
            DeepDemand turns your sales data into accurate forecasts —
            so you can optimize inventory, cut costs, and never miss a spike again.
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeInUp}>
            <button
              className="btn-primary-landing"
              onClick={handleCTA}
              id="hero-cta-primary"
            >
              Start Forecasting Free
              <ArrowRight size={18} />
            </button>
            <button
              className="btn-secondary-landing"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              id="hero-cta-secondary"
            >
              <Play size={16} />
              See How It Works
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── LOGO WALL ─── */}
      <motion.section
        className="logo-wall-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="logo-wall-label">Trusted by leading e-commerce teams</p>
        <div className="logo-wall-grid">
          {["Cafe24", "Naver SmartStore", "Coupang", "11Street", "WeMakePrice", "Tmon"].map((name) => (
            <span key={name} className="logo-wall-item">{name}</span>
          ))}
        </div>
      </motion.section>

      {/* ─── HOW IT WORKS: INPUT-OUTPUT DIAGRAM ─── */}
      <AnimatedSection id="how-it-works">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">
            <Zap size={14} />
            How It Works
          </span>
          <h2 className="section-title">
            From Raw Data to Accurate Forecasts.
            <br />
            In Three Simple Steps.
          </h2>
          <p className="section-subtitle">
            No data science expertise required. Connect your store, and DeepDemand handles the rest.
          </p>
        </motion.div>

        <motion.div className="io-diagram" variants={fadeInUp}>
          <motion.div className="io-box io-box-input" variants={scaleIn}>
            <span className="io-box-icon"><Database size={32} strokeWidth={1.5} /></span>
            <span className="io-box-title">Connect Data</span>
            <span className="io-box-desc">
              Sync your e-commerce platform's sales, inventory, and traffic data with one click.
            </span>
          </motion.div>

          <span className="io-arrow">
            <ChevronRight size={24} />
          </span>

          <motion.div className="io-box io-box-engine" variants={scaleIn}>
            <span className="io-box-icon"><Sparkles size={32} strokeWidth={1.5} /></span>
            <span className="io-box-title">⚡ DeepDemand AI</span>
            <span className="io-box-desc">
              Our proprietary engine analyzes patterns, seasonality, and external signals automatically.
            </span>
          </motion.div>

          <span className="io-arrow">
            <ChevronRight size={24} />
          </span>

          <motion.div className="io-box io-box-output" variants={scaleIn}>
            <span className="io-box-icon"><Target size={32} strokeWidth={1.5} /></span>
            <span className="io-box-title">Get Predictions</span>
            <span className="io-box-desc">
              Receive SKU-level demand forecasts with AI confidence scores and actionable insights.
            </span>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* ─── VALUE PROPOSITION ─── */}
      <AnimatedSection id="features">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">
            <Sparkles size={14} />
            Why DeepDemand
          </span>
          <h2 className="section-title">
            Benefits That Impact Your Bottom Line
          </h2>
          <p className="section-subtitle">
            Not just another dashboard — DeepDemand delivers measurable outcomes for your business.
          </p>
        </motion.div>

        <div className="value-cards">
          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-card-icon value-card-icon-blue">
              <TrendingUp size={24} />
            </div>
            <h3 className="value-card-title">Forecast Tomorrow, Today</h3>
            <p className="value-card-text">
              Know exactly how many units of each SKU you'll sell tomorrow. Plan inventory with confidence, not intuition.
            </p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-card-icon value-card-icon-purple">
              <ShieldCheck size={24} />
            </div>
            <h3 className="value-card-title">Explainable AI You Can Trust</h3>
            <p className="value-card-text">
              Every prediction comes with clear reasoning — see which factors drove the forecast, so you can make informed adjustments.
            </p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-card-icon value-card-icon-emerald">
              <PackageCheck size={24} />
            </div>
            <h3 className="value-card-title">Cut Overstock by 40%</h3>
            <p className="value-card-text">
              Stop locking capital in dead inventory. Our AI identifies slow movers before they become a problem.
            </p>
          </motion.div>
        </div>

        {/* Mid-page CTA */}
        <motion.div
          variants={fadeInUp}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <button
            className="btn-primary-landing"
            onClick={handleCTA}
            id="mid-cta"
          >
            Try DeepDemand Free
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </AnimatedSection>

      {/* ─── OUTCOME SHOWCASE ─── */}
      <AnimatedSection id="results">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">
            <LineChart size={14} />
            See the Results
          </span>
          <h2 className="section-title">
            Your Command Center for Demand Intelligence
          </h2>
          <p className="section-subtitle">
            A single dashboard where forecasts, insights, and team collaboration come together.
          </p>
        </motion.div>

        <motion.div className="outcome-showcase" variants={scaleIn}>
          <div className="outcome-glow" />
          <div className="outcome-image-wrapper">
            <img
              src="/dashboard-showcase.png"
              alt="DeepDemand Dashboard — AI demand forecast visualization with KPI cards and XAI analysis panel"
              className="outcome-image"
              loading="lazy"
            />
          </div>

          <div className="outcome-features">
            <motion.div className="outcome-feature" variants={fadeInUp}>
              <p className="outcome-feature-title">📊 Interactive Forecasts</p>
              <p className="outcome-feature-desc">Click any data point to see the AI's reasoning behind its prediction.</p>
            </motion.div>
            <motion.div className="outcome-feature" variants={fadeInUp}>
              <p className="outcome-feature-title">🧠 XAI Analysis</p>
              <p className="outcome-feature-desc">Explainable AI panels show which factors drive each forecast.</p>
            </motion.div>
            <motion.div className="outcome-feature" variants={fadeInUp}>
              <p className="outcome-feature-title">👥 Team Collaboration</p>
              <p className="outcome-feature-desc">Add memos, adjust predictions, and align your entire supply chain team.</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* ─── ROI COMPARISON ─── */}
      <AnimatedSection id="roi" className="roi-section">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">
            <BarChart3 size={14} />
            Before & After
          </span>
          <h2 className="section-title">
            The Real Cost of Guessing Demand
          </h2>
          <p className="section-subtitle">
            See how DeepDemand transforms your demand planning workflow.
          </p>
        </motion.div>

        <motion.div className="roi-grid" variants={fadeInUp}>
          <div className="roi-card roi-card-before">
            <p className="roi-card-label">Without DeepDemand</p>
            <div className="roi-metric">
              <p className="roi-metric-value">72 hrs</p>
              <p className="roi-metric-unit">Weekly planning time</p>
            </div>
            <div className="roi-metric">
              <p className="roi-metric-value">±35%</p>
              <p className="roi-metric-unit">Forecast error rate</p>
            </div>
            <p className="roi-metric-desc">
              Manual spreadsheets, gut feeling, missed spikes, and excess inventory.
            </p>
          </div>

          <div className="roi-vs">
            <div className="roi-vs-badge">VS</div>
          </div>

          <div className="roi-card roi-card-after">
            <p className="roi-card-label">With DeepDemand</p>
            <div className="roi-metric">
              <p className="roi-metric-value">4 hrs</p>
              <p className="roi-metric-unit">Weekly planning time</p>
            </div>
            <div className="roi-metric">
              <p className="roi-metric-value">±8%</p>
              <p className="roi-metric-unit">Forecast error rate</p>
            </div>
            <p className="roi-metric-desc">
              Automated AI forecasts, real-time alerts, and data-driven decisions.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* ─── SOCIAL PROOF / STATS ─── */}
      <AnimatedSection id="stats">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">
            <Gauge size={14} />
            By the Numbers
          </span>
          <h2 className="section-title">
            Proven Performance, Measurable Results
          </h2>
        </motion.div>

        <div className="stats-grid">
          {[
            { end: 94, suffix: "%", label: "Forecast Accuracy" },
            { end: 50000, suffix: "+", label: "SKUs Analyzed Daily", display: "50K" },
            { end: 40, suffix: "%", label: "Overstock Reduction" },
            { end: 18, suffix: "x", label: "Faster Planning" },
          ].map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </AnimatedSection>

      {/* ─── FINAL CTA ─── */}
      <motion.section
        className="final-cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 className="final-cta-title" variants={fadeInUp}>
          Ready to Predict, Not Guess?
        </motion.h2>
        <motion.p className="final-cta-subtitle" variants={fadeInUp}>
          Join the e-commerce teams that trust DeepDemand to forecast demand
          with AI precision. Start free — no credit card required.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <button
            className="btn-primary-landing"
            onClick={handleCTA}
            id="final-cta"
            style={{ fontSize: "1.125rem", padding: "1rem 2.5rem" }}
          >
            Start Forecasting Free
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </motion.section>

      {/* ─── FOOTER ─── */}
      <footer className="landing-footer">
        <p className="landing-footer-text">
          © 2026 DeepDemand Team. All rights reserved. — AI-Powered Demand Forecasting for E-Commerce
        </p>
      </footer>
    </div>
  )
}

/* ============================================
   STAT COUNTER SUB-COMPONENT
   ============================================ */
function StatCounter({
  end,
  suffix,
  label,
  display,
}: {
  end: number
  suffix: string
  label: string
  display?: string
}) {
  const { count, ref } = useCountUp(end, 2000)

  return (
    <motion.div className="stat-item" variants={fadeInUp}>
      <p className="stat-value">
        <span ref={ref} className="counter-animate">
          {display ? (count >= end ? display : Math.floor((count / end) * parseInt(display)).toString()) : count}
        </span>
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </motion.div>
  )
}
