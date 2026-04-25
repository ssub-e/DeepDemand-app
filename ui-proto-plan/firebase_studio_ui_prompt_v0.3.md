# DeepDemand — Firebase Studio Prototyping Prompt (Hybrid v0.3)

> **목적**: v0.1의 **창의적 자율성**과 v0.2의 **전체 태스크 커버리지**를 결합한 하이브리드 프롬프트입니다.
> AI가 최적의 UX를 스스로 설계할 수 있는 공간을 열어두되, 필요한 모든 비즈니스 요구사항을 누락 없이 구현하도록 유도합니다.

---

## Prompt

```
You are a Senior Product Engineer & UI Designer. Build a full-featured, high-fidelity React prototype for "DeepDemand", a B2B AI Demand Forecasting SaaS. 

1. CORE IDENTITY & AESTHETIC (The "Soul")
- **Vibe**: A mix of "Linear" (precision) and "Vercel" (cleanliness). Professional, trustworthy, and data-dense but not cluttered.
- **Design System**: Use Shadcn-inspired components with Tailwind CSS. 
  - Colors: Deep Blue (#1D4ED8) for primary actions, Slate/Zinc for neutral surfaces.
  - Success/Warning/Danger states must be vibrant but balanced.
  - Typography: Inter/Outfit. Use font-weight and spacing to create clear hierarchy.
- **Motion**: Subtle micro-interactions using Framer Motion (page transitions, hover states on cards).
- **Themes**: Implement a flawless Dark/Light mode toggle (VIEW-028).


2. ARCHITECTURE & USER FLOW (The "Skeleton")
- **Layout**: A persistent navigation structure (Sidebar or Navbar) that adapts to mobile (VIEW-004, VIEW-026). 
- **Routes**:
  - `/dashboard`: The nerve center.
  - `/analytics`: Deep dive views (placeholder).
  - `/settings`: Complex business configurations.
  - `/admin`: User and tenant management.
  - `/onboarding`: A dedicated flow for new users (ADMIN-007).

3. FEATURE MODULES (The "Muscles" - Requirement Checklist)

*AI Agent: You have the creative freedom to arrange these features for the best UX, but all must be present.*

**A. Executive Dashboard (Dashboard & Visualization)**
- [VIEW-005] KPI Summary Cards: Show key metrics like "Tomorrow's Forecast", "AI Confidence", and "Inventory Savings".
- [VIEW-006] Time-Series Chart: Use Recharts to blend past actual sales (Area) and AI predictions (Dashed Line).
- [VIEW-007, VIEW-019] Interaction: Clicking chart points should trigger a Drill-down Modal showing SKU-level details and an XAI (Explainable AI) panel explaining the 'Why' behind the numbers.
- [VIEW-029] Customization: Allow users to reorder or resize dashboard widgets (Drag & Drop feel).

**B. Collaboration & Support (UX Enhancements)**
- [VIEW-021] Sidebar Memo Feed: A place for team members to leave notes/annotations on specific forecasts.
- [VIEW-023] Onboarding Tour: An interactive guide for first-time users highlighting key features.
- [MONITOR-004] Feedback Widget: A floating UI to collect user bugs/ideas with mock screenshot capability.
- [VIEW-024] Advanced Filtering: A robust multi-select system for Categories, SKUs, and Warehouses.

**C. Business & Admin Control (Admin & Settings)**
- [VIEW-010~012] Settings Tabs: Handle Mall API integrations (Cafe24), Center Capacity (CAPA) sliders, and User Invitations.
- [DASH-011] User Admin: A data grid to manage roles (Admin/MD/Manager), groups, and account status (Active/Suspended).


4. TECHNICAL CONSTRAINTS
- **Stack**: React (Functional Components, Hooks), Tailwind CSS, Lucide Icons, Recharts.
- **Data**: Provide comprehensive inline Mock Data for all charts and lists.
- **Logic**: Simulate loading states, simple form validations, and tab switching.
- **Responsive**: Ensure a "Mobile-First" approach where navigation remains usable on small screens.


5. MOCK DATA & CONTENT
Use the following data profile to populate the UI:
- **KPIs**: Tomorrow's forecast ~5,000 units, +12% variance, 88% AI confidence.
- **XAI Factors**: Promotion (+15%), Weather (+8%), Inventory Stockout Risk (-5%).
- **Users**: Admin (CEO), Manager (Warehouse Lead), MD (Planner).
- **Memos**: "Need to check Incheon warehouse for tomorrow's peak", "AI prediction for SKU-A seems high due to upcoming holiday".

**Goal**: Build a prototype that feels like a finished, premium B2B product. Wow the stakeholders with both the visual depth and the functional flow.
```
