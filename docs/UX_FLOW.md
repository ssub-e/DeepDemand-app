# UX Core Scenarios: DeepDemand

This document outlines the primary user journeys and interaction flows within the DeepDemand platform.

## 1. Onboarding & Baseline Configuration
**Goal**: New user sets up their AI forecasting model by connecting data sources and defining constraints.

```mermaid
sequenceDiagram
    participant U as User
    participant O as Onboarding Page
    participant API as Mall API (Cafe24/Naver)
    participant AI as DeepDemand Engine

    U->>O: Select "Connect Data Source"
    O->>API: Initialize OAuth/Sync
    API-->>O: Data Sync Complete
    U->>O: Set Warehouse CAPA (Incheon/Busan)
    O->>AI: Trigger Baseline Training
    AI-->>O: Model Initialized
    O->>U: Show "Go to Dashboard"
```

### Key Interactions:
- **Progressive Disclosure**: Three-step wizard to prevent cognitive overload.
- **Visual Feedback**: Real-time progress bar during AI training phase.

## 2. Executive Demand Analysis
**Goal**: Analyst reviews the forecast, identifies variances, and understands the "Why" behind AI predictions.

```mermaid
graph TD
    Dashboard[Dashboard Overview] --> KPI[Check Variance KPIs]
    KPI --> Chart[Select High-Variance Point on Chart]
    Chart --> XAI[Review Explainable AI Panel]
    XAI --> Action[Quick Action: Adjust CAPA / Review SKU]
```

### Key Interactions:
- **Interactive Charting**: Clicking data points on the Recharts graph triggers contextual AI insights.
- **Explainable AI (XAI)**: Breakdown of factors (Promotion, Weather, Stockout Risk) in a visual progress bar format.

## 3. Team Collaboration Flow
**Goal**: Planners and Warehouse Leads annotate forecasts to align physical operations with AI predictions.

- **Action**: User reads "Team Memos" on the dashboard.
- **Context**: "AI prediction for SKU-A seems high due to upcoming holiday."
- **Outcome**: Operational adjustment via "Quick Actions".
