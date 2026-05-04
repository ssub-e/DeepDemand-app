# AI Development Guide: DeepDemand

> [!NOTE]
> This document is optimized for AI consumption. Use this to quickly understand the project state.

## 📍 Core Paths
- Entry: `src/main.tsx` -> `App.tsx` (Routes)
- State: `src/contexts/AppContext.tsx` (Theme, Onboarding)
- Layout: `src/components/layout/` (Sidebar, Header, MainLayout)
- UI: `src/components/ui/` (Atomic)
- Utils: `src/lib/utils.ts` (cn), `src/lib/animations.ts` (Framer)

## ⚡ Technical Patterns
- **Styling**: Tailwind 4 utilities (`card-glass`, `nav-item`).
- **Data**: Mock data in `src/constants/dashboard.ts`.
- **Optimization**: `React.memo` on `StatCard`, `ForecastChart`.
- **Routes**: `/onboarding` (standalone), `/dashboard` (Layout-wrapped).

## 🛠 Active Task Context
- **Current Goal**: Visual hierarchy improvement & Documentation standard application.
- **Last Refactor**: Modularized Dashboard into `StatCard`, `ForecastChart`, `XAIPanel`.
- **Documentation Standard**: 
  - `/* @file path */` header.
  - `[Component Logic Flow]` for pages.
  - JSDoc for exports.

## 📋 Dependency Map
- `recharts`: Visualization
- `framer-motion`: Animations
- `lucide-react`: Icons
- `react-router-dom`: Routing

---
*Generated: 2026-04-25 16:01*
