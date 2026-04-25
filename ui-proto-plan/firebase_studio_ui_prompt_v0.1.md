# Project Context: DeepDemand (B2B AI Demand Forecasting SaaS)
You are an expert Senior Frontend Engineer. Your task is to build a premium, data-driven UI for "DeepDemand", a B2B SaaS platform that provides AI-powered inventory and demand forecasting for e-commerce and retail businesses.

## 1. Visual Identity & Design System
- **Aesthetic**: Professional, Clean, and Data-Rich. Think of a mix between "Linear" and "Vercel" dashboards. Use modern typography (e.g., Inter or Outfit).
- **Style**: Shadcn UI-inspired components. Use rounded corners (rounded-xl), subtle borders, and soft shadows.
- **Color Palette**:
  - Primary: Deep Blue (#1D4ED8) for action buttons and branding.
  - Surface: Off-white/Light Gray (#F9FAFB) for backgrounds.
  - Success/Danger: Emerald-500 for positive growth, Rose-500 for stock-out risks.
- **Theme**: Support both Light and Dark modes with smooth transitions.

## 2. Core Layout Requirements
- **Global Navigation**: A sticky sidebar with links to Dashboard, Analytics, Inventory, Orders, and Settings. Include a user profile section and a "Notification Bell" with a badge.
- **Responsive Design**: Ensure the layout is fully responsive, shifting to a bottom navigation bar or a hamburger menu on mobile devices.

## 3. Key UI Components to Implement
Please implement the following high-priority modules:

### A. Executive Dashboard (Main View)
- **KPI Cards**: 4 summary cards showing "Total Forecasted Demand", "Inventory Health", "Cost Saving (Gauge)", and "Data Hygiene Score".
- **Main Chart**: A high-fidelity time-series chart (use Recharts or similar) showing "Actual Sales" vs "AI Predicted Demand". Include a toggle for confidence intervals.
- **XAI (Explainable AI) Panel**: A side panel or card explaining WHY the AI made a certain prediction (e.g., "Upcoming Promotion +15%", "Weather Factor +5%").

### B. User Experience Features
- **Onboarding Wizard**: A step-by-step guided tour component for first-time users to connect their data (Cafe24, Naver Datalab).
- **Drill-down Interaction**: When a user clicks on a chart data point, show a modal with a detailed breakdown of that specific day's orders.
- **Multi-Filter Bar**: A sophisticated filtering system to filter data by "Category", "Shop Location", and "Date Range".

### C. Collaborative & Admin UI
- **Memo Feed**: A sidebar where team members can leave notes on specific forecast points.
- **Audit Log Table**: A clean data grid showing system activities (Data syncs, AI model retraining).

## 4. Technical Constraints
- **Framework**: React.js with Tailwind CSS.
- **Icons**: Use Lucide-react for all icons.
- **Animation**: Use Framer Motion for subtle micro-interactions (hover effects, page transitions).
- **Code Quality**: Write modular, reusable components. Use a `cn()` utility for dynamic tailwind class merging.

# Goal:
Generate the initial 'Dashboard' page that incorporates the KPI cards, the main time-series chart, and the XAI panel to wow the stakeholders.
