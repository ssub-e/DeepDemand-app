# DeepDemand: B2B AI Demand Forecasting SaaS

DeepDemand is a sophisticated B2B SaaS platform designed for AI-driven demand forecasting. This prototype demonstrates a highly modular, performance-optimized React architecture focused on clarity, scalability, and AI-assisted development.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Landing Page

The project includes a **customer-facing landing page** at `/` designed to maximize user acquisition:

- **Hero Section** — "Stop Guessing Demand. Start Predicting It." with AI-powered background visuals
- **How It Works** — 3-step Input-Output diagram (Connect → AI Engine → Predictions)
- **Value Proposition** — Benefit-driven cards (Forecast, Explainability, Overstock Reduction)
- **Outcome Showcase** — Dashboard preview with feature highlights
- **ROI Comparison** — Before/After metrics (72hrs → 4hrs planning, ±35% → ±8% error)
- **Social Proof** — Key performance metrics with animated counters

**Strategy:** C-type (Result-Oriented) landing page per the Landing Page Enhancement Framework.

### Route Flow
```
/ (Landing Page) → CTA → /onboarding → /dashboard
```

> 📄 See [`docs/landing_checklist.md`](docs/landing_checklist.md) for the full evaluation checklist.

## 🏗 Project Architecture & Design
- **Modularization**: Refactored from a monolithic structure to decoupled, memoized modules.
- **Visual Hierarchy**: Improved readability through Tailwind 4 best practices and refined component variants.
- **UX Excellence**: Interactive charts with contextual XAI (Explainable AI) analysis.

## 📄 Documentation Standards (Multi-Purpose)
We maintain high-fidelity documentation optimized for both human developers and AI coding agents:
- **`README.md`**: Core project overview and setup.
- **`AI_GUIDE.md`**: Compressed, high-density context for AI agents.
- **`docs/UX_FLOW.md`**: Visualized user journeys via Mermaid diagrams.
- **`docs/COMPONENT_STRUCTURE.md`**: Analysis of the refactored architecture.
- **`docs/CODE_QUALITY_REPORT.md`**: Comprehensive quality and optimization audit.
- **`docs/landing_checklist.md`**: Landing page strategy evaluation checklist.

## 🛠 Refactoring Highlights
- **Performance**: Strategic use of `React.memo` and `useCallback` for heavy visualizations.
- **State Management**: Centralized logic via `AppContext` and `useLocalStorage` hooks.
- **Styling**: Standardized utility classes (`card-glass`, `nav-item`) and centralized animation variants.

---
© 2026 DeepDemand Team. All rights reserved.
