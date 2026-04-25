# DeepDemand — Firebase Studio Prototyping Prompt (Screen Outline Focus)

> **목적**: 이 프롬프트를 Firebase Studio(또는 Project IDX)에 붙여넣어 DeepDemand의 핵심 UI 화면들을 빠르게 프로토타이핑합니다.
> 화면 아웃라인(레이아웃 구조, 컴포넌트 배치, 영역 구분)에 집중합니다.
> 사용법: 코드 블록(``` 안) 전체를 Firebase Studio 프롬프트에 붙여넣으면 됩니다.
---

## Prompt

```
You are a Senior UI/UX Engineer. Build a multi-page React prototype for "DeepDemand", a B2B AI demand forecasting SaaS. Use React + Tailwind CSS + Lucide Icons + Recharts. Provide mock data inline (no real API calls). Focus on SCREEN LAYOUT and COMPONENT PLACEMENT over logic.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: DESIGN SYSTEM & FOUNDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1-A. Design Tokens & Theme (VIEW-002, VIEW-028)
- Color Palette:
  - Light: Primary #1D4ED8, Surface #F9FAFB, Success #10B981, Danger #EF4444
  - Dark: Background #0F172A, Surface #1E293B, Border #334155
- Typography: "Inter" from Google Fonts (headings bold, body regular)
- Radius: rounded-xl for cards, rounded-md for inputs/buttons
- Shadows: shadow-sm default, shadow-lg for modals

## 1-B. Core UI Components (VIEW-002)
Create a reusable component library under /components/ui/:
- **Button**: variants = primary | outline | danger, sizes = sm | md | lg
- **Card**: white box with border, rounded-xl, shadow-sm. Sub-parts: CardHeader, CardContent
- **Badge**: pill-shaped status indicators (success=green, danger=red, neutral=gray)
- **Input**: styled text input with label, placeholder, error state
- **Modal**: centered overlay dialog with backdrop blur, close on ESC, title + body + footer slots
- **Toggle Switch**: for on/off states (theme switch, account suspend)
- **Select/Dropdown**: styled select with chevron icon
- **Tooltip**: small hover popup for info icons

## 1-C. Dark/Light Mode (VIEW-028)
- Add a ThemeProvider using React Context + localStorage
- Toggle switch in header: sun/moon icon with smooth CSS transition
- HTML root gets class="dark", Tailwind dark: prefix applies everywhere
- All pages must render correctly in both themes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: GLOBAL LAYOUT & NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 2-A. Desktop Layout (VIEW-004)
Screen outline:
┌──────────────────────────────────────────────┐
│ [SIDEBAR w=64]  │  [HEADER h=16]             │
│                 │────────────────────────────│
│  Logo           │                            │
│  ─────────      │   <Outlet /> area          │
│  Dashboard      │   (scrollable, p-6)        │
│  Analytics      │                            │
│  Inventory      │                            │
│  Orders         │                            │
│  ─────────      │                            │
│  Settings       │                            │
│  ─────────      │                            │
│  User Profile   │                            │
│  Logout         │                            │
└──────────────────────────────────────────────┘

- Sidebar: fixed left, w-64, border-r, bg-surface. Active menu = blue highlight.
  Menu items: Dashboard, Analytics, Inventory, Orders, Settings (each with Lucide icon)
  Bottom section: user avatar + name + role badge
- Header: h-16, border-b. Contains:
  - Left: page title breadcrumb
  - Right: theme toggle, notification bell (with red dot badge), user dropdown

## 2-B. Mobile Responsive Navigation (VIEW-026)
- Below md (768px): sidebar hidden, replaced by:
  - Top: hamburger menu button → opens full-height Sheet/Drawer overlay from left
  - Bottom: fixed bottom tab bar with 4 icons (Home, Memo, Reports, Alerts)
- All touch targets ≥ 44x44px
- Chart legends move below chart on mobile

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: DASHBOARD & DATA VISUALIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 3-A. Dashboard KPI Cards (VIEW-005)
Screen outline for top section of Dashboard page:
┌────────────────────────────────────────────┐
│  Dashboard Overview              [Filter ▼]│
│────────────────────────────────────────────│
│ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│ │Yesterday  │ │Tomorrow  │ │AI Conf.  │    │
│ │Actual     │ │Predicted │ │Average   │    │
│ │ 4,230 Box │ │ 5,124 Box│ │ 87.3%    │    │
│ │     ↑+12% │ │    ↓-4%  │ │ ● High   │    │
│ └──────────┘ └──────────┘ └──────────┘    │
│                                            │
- 3-column grid (1 col on mobile)
- Each StatCard: icon top-left, title, large number, variance with colored arrow
- Positive variance → green text + ArrowUp, Negative → red text + ArrowDown
- Numbers use toLocaleString() formatting (thousands comma)

## 3-B. Time-Series Chart (VIEW-006)
Below KPI cards:
┌────────────────────────────────────────────┐
│ Past Shipment & AI 7-Day Forecast          │
│────────────────────────────────────────────│
│                                            │
│   [Area: blue fill]──────┐                 │
│                          ╎[Line: green     │
│                          ╎ dashed] ─ ─ ─   │
│   ◄─── Past 14 days ───►╎◄─ Future 7d ─►  │
│                          ╎                 │
│────────────────────────────────────────────│
│ Legend: ■ Actual  ┄ AI Predicted (85%)     │
│ [Toggle: Confidence Interval]              │
└────────────────────────────────────────────┘
- Recharts ComposedChart: Area (actual, blue) + Line (predicted, green dashed)
- XAxis: date labels. YAxis: auto-scale with comma formatter
- Tooltip on hover shows date + actual + predicted values
- Clicking a data point opens drill-down modal (3-C)

## 3-C. Chart Drill-Down Modal (VIEW-019)
When user clicks a chart data point:
┌─────────────────────────────────┐
│  ✕  November 12 Analysis Detail │
│─────────────────────────────────│
│                                 │
│  Top 5 SKU Contribution         │
│  ┌─────────────────────┐       │
│  │  [Pie Chart]        │       │
│  │  Hiking Shoes: 70%  │       │
│  │  Sneakers: 15%      │       │
│  └─────────────────────┘       │
│                                 │
│  Center Workforce Summary       │
│  ┌─────────────────────┐       │
│  │ Center │ Need │ Have │       │
│  │ Incheon│  12  │  10  │       │
│  │ Busan  │   8  │   8  │       │
│  └─────────────────────┘       │
│                                 │
│  [📄 Download Full Report]      │
└─────────────────────────────────┘
- Modal with backdrop blur
- Contains: Recharts PieChart for SKU breakdown + mini table for center staff
- Empty state: "해당 일자의 상세 분석 데이터가 아직 집계되지 않았습니다"

## 3-D. XAI Explanation Panel (VIEW-007)
Right side or below chart:
┌────────────────────────────────────────────┐
│ 💡 AI Prediction Report (2026-04-25)       │
│────────────────────────────────────────────│
│ ┌─ LLM Summary ─────────────────────────┐ │
│ │ "내일 출고량이 평소보다 15% 높을 것으로│ │
│ │  예측됩니다. 주요 원인은 주말 프로모션  │ │
│ │  이벤트와 기온 상승에 따른 음료 수요   │ │
│ │  증가입니다."                          │ │
│ └────────────────────────────────────────┘ │
│                                            │
│ Key Impact Factors (SHAP)                  │
│ ┌────────────────────────────────────────┐ │
│ │ Promotion  ████████████  +15.2         │ │
│ │ Temperature ██████       +8.0          │ │
│ │ Day of Week ████         +5.3          │ │
│ │ Rainfall   ████████ ◄   -12.5         │ │
│ └────────────────────────────────────────┘ │
│  (green = positive, red = negative)        │
└────────────────────────────────────────────┘
- Card component with blue-50 background for LLM text
- Recharts horizontal BarChart for SHAP values
- Positive bars = green (#10B981), Negative bars = red (#EF4444)

## 3-E. Dashboard Drag & Drop Builder (VIEW-029)
A separate "/dashboard/edit" page:
┌────────────────────────────────────────────┐
│ 🔧 Dashboard Editor     [Preview] [Save]   │
│────────────────────────────────────────────│
│ ┌─ Widget Library ─┐ ┌─ Canvas ──────────┐│
│ │                  │ │                    ││
│ │ □ KPI Card       │ │  [Draggable Grid]  ││
│ │ □ Time Chart     │ │                    ││
│ │ □ XAI Panel      │ │  ┌────┐ ┌────────┐││
│ │ □ Workforce Tbl  │ │  │ W1 │ │  W2    │││
│ │ □ Pie Chart      │ │  └────┘ │        │││
│ │                  │ │         └────────┘││
│ │                  │ │  ┌──────────────┐ ││
│ │                  │ │  │     W3       │ ││
│ │                  │ │  └──────────────┘ ││
│ └──────────────────┘ └───────────────────┘│
└────────────────────────────────────────────┘
- Left panel: scrollable widget list with drag handles
- Right canvas: react-grid-layout based 12-column grid
- Widgets are resizable (drag corner handle)
- Toggle between Edit mode and Preview mode
- Save serializes layout as JSON

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: UX ENHANCEMENT FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 4-A. Onboarding Tour (VIEW-023)
Overlay guide for first-time users:
┌────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░ (dimmed)     │
│  ░░░░ ┌──SPOTLIGHT──┐ ░░░░░░░░░░░░░░░░░░░ │
│  ░░░░ │  KPI Cards  │ ░░░░░░░░░░░░░░░░░░░ │
│  ░░░░ └─────────────┘ ░░░░░░░░░░░░░░░░░░░ │
│  ░░░░░░░░ ┌─ Tooltip ──────────┐ ░░░░░░░░ │
│  ░░░░░░░░ │ "한 눈에 오늘의     │ ░░░░░░░░ │
│  ░░░░░░░░ │  물동량을 파악하세요"│ ░░░░░░░░ │
│  ░░░░░░░░ │  [이전] [2/5] [다음]│ ░░░░░░░░ │
│  ░░░░░░░░ └────────────────────┘ ░░░░░░░░ │
│  ░░░░░░░░░░░░░░░░░░░░░░░ [모두 건너뛰기]  │
└────────────────────────────────────────────┘
- Steps: (1) KPI Cards → (2) Time Chart → (3) XAI Panel → (4) Memo Feed → (5) Filter
- Semi-transparent dark overlay with spotlight cutout on target element
- Tooltip card: title, description, progress (2/5), Prev/Next buttons
- "모두 건너뛰기" dismisses permanently (saves to localStorage)

## 4-B. Memo Feed Sidebar (VIEW-021)
Right-side sliding panel:
┌──────────────────┬─────────────────────┐
│  Main Dashboard  │ Collaboration Feed  │
│                  │─────────────────────│
│                  │ 📅 Filter: All / Date│
│                  │─────────────────────│
│                  │ ┌─ Memo Card ──────┐│
│                  │ │ 👤 Kim MD  14:30  ││
│                  │ │ "인천센터 물량 급증││
│                  │ │  주의 필요"       ││
│                  │ │ [Reply] [Pin]     ││
│                  │ └──────────────────┘│
│                  │ ┌─ Memo Card ──────┐│
│                  │ │ 👤 Lee 센터장 09:15││
│                  │ │ "컨베이어 점검 완료"│
│                  │ └──────────────────┘│
│                  │─────────────────────│
│                  │ [💬 Write a memo...] │
│                  │ [Send]              │
└──────────────────┴─────────────────────┘
- Triggered by chat icon in header → slides in from right (w-80)
- Transition: translate-x animation
- Each memo card: avatar, name, timestamp, content, reply button
- Input form at bottom with send button
- Mobile: full-screen overlay instead of side panel

## 4-C. Advanced Multi-Filter Panel (VIEW-024)
Expandable filter bar below page title:
┌────────────────────────────────────────────┐
│ Filters: [Category ▼] [Center ▼] [SKU ▼]  │
│          [Date Range 📅]  [Apply] [Reset]  │
│────────────────────────────────────────────│
│ ┌─ Category Popover ──────────────────┐    │
│ │ 🔍 Search categories...             │    │
│ │ ☑ 신선식품                          │    │
│ │ ☐ 가전제품                          │    │
│ │ ☑ 의류                              │    │
│ │ ☐ 생활용품                          │    │
│ │ ──────────                          │    │
│ │ [전체 선택] [선택 해제]              │    │
│ └─────────────────────────────────────┘    │
- Each filter: popover/dropdown with search + multi-checkbox
- SKU filter: virtual scrolling for 5000+ items
- Applied filters show as removable pill badges below the bar
- "Reset" clears all filters at once
- Selecting filters updates URL query string for shareability

## 4-D. Feedback Widget (MONITOR-004)
Floating button bottom-right:
┌────────────────────────────────────────────┐
│                                            │
│                               ┌───┐       │
│                               │ 💬 │ ← FAB│
│                               └───┘       │
│ (click expands to:)                        │
│                    ┌──────────────────┐    │
│                    │ Send Feedback    │    │
│                    │──────────────────│    │
│                    │ Type: ○Bug ○Idea │    │
│                    │       ○Praise    │    │
│                    │                  │    │
│                    │ [Description...] │    │
│                    │                  │    │
│                    │ ☑ Attach Screen  │    │
│                    │                  │    │
│                    │ [Submit Feedback]│    │
│                    └──────────────────┘    │
└────────────────────────────────────────────┘
- Floating Action Button (FAB): fixed bottom-right, z-50
- Click opens small card form: feedback type radio, textarea, screenshot toggle
- Submit shows success toast: "제보해 주셔서 감사합니다"
- Auto-collects: current URL, browser info (display in console for demo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: SETTINGS & ADMIN PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 5-A. Tenant Onboarding Wizard (ADMIN-007)
Full-page wizard for new tenants:
┌────────────────────────────────────────────┐
│          DeepDemand Setup Wizard           │
│────────────────────────────────────────────│
│  Step: ●──●──○──○                          │
│        1  2  3  4                          │
│  [Company Info] [Connect Shop] [Capacity] [Done]│
│────────────────────────────────────────────│
│                                            │
│  Step 2: Connect Your Shop                 │
│  ┌────────────────────────────────────┐    │
│  │ Platform: [Cafe24 ▼]              │    │
│  │ Mall ID:  [____________]           │    │
│  │ Auth Code:[____________]           │    │
│  │                                    │    │
│  │ [Test Connection]  ✅ Connected!   │    │
│  └────────────────────────────────────┘    │
│                                            │
│              [← Back]  [Next →]            │
└────────────────────────────────────────────┘
- 4 steps: (1) Company Profile (2) Shop Integration (3) Center Capacity (4) Complete
- Progress bar with numbered dots at top
- Each step is a form card
- Step 4: confetti animation + "설정이 완료되었습니다! 과거 1년 데이터를 동기화 중입니다..." with progress bar
- Back/Next navigation, validation per step

## 5-B. Settings Pages (VIEW-010, VIEW-011, VIEW-012)
Tabbed settings layout:
┌────────────────────────────────────────────┐
│ ⚙ Settings                                │
│────────────────────────────────────────────│
│ [Integrations] [Capacity] [Team Members]   │
│────────────────────────────────────────────│
│                                            │
│ Tab 1 - Integrations (VIEW-010):           │
│  Card: "외부 쇼핑몰 연동 관리"             │
│  Form: Mall ID input + Auth Code input     │
│  Button: "Cafe24 연동하기" (loading state)  │
│  Status badge: ● Connected / ○ Not Connected│
│                                            │
│ Tab 2 - Capacity (VIEW-011):               │
│  Card: "현장 인력(CAPA) 기준 조율"          │
│  Description text explaining the setting    │
│  Number input: "1인당 처리 가능 박스"       │
│  Slider: visual range 10-200               │
│  Button: "반영 및 저장"                     │
│                                            │
│ Tab 3 - Team Members (VIEW-012):           │
│  Card: "신규 서브 계정 추가"               │
│  2-column grid form: name, email, password │
│  Role select: ADMIN / CENTER_MANAGER / MD  │
│  Button: "사용자 계정 생성"                │
│  Below: existing members list with badges   │
└────────────────────────────────────────────┘

## 5-C. User Management Admin View (DASH-011)
Full data grid page:
┌────────────────────────────────────────────┐
│ 👥 User Management        [+ Invite User]  │
│────────────────────────────────────────────│
│ 🔍 Search users...                         │
│────────────────────────────────────────────│
│ Name     │ Email        │ Group  │ Status  │
│──────────│──────────────│────────│─────────│
│ 👤 홍길동│ hong@co.kr   │[팀장 ▼]│ 🟢 Active│
│ 👤 김대리│ kim@co.kr    │[MD   ▼]│ 🟢 Active│
│ 👤 이과장│ lee@co.kr    │[센터 ▼]│ 🔴 Suspended│
│────────────────────────────────────────────│
│ Showing 1-3 of 3 users                     │
└────────────────────────────────────────────┘
- Data grid with inline group dropdown (change triggers API call)
- Status toggle switch per row (active/suspended)
- Search bar for filtering by name/email
- "Invite User" button opens VIEW-012 modal
- Mobile: switches to vertical card list layout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: ROUTING MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/                    → redirect to /dashboard
/dashboard           → KPI Cards + Chart + XAI Panel
/dashboard/edit      → Drag & Drop Builder
/analytics           → placeholder page
/inventory           → placeholder page
/orders              → placeholder page
/settings            → Tabbed settings (integrations/capacity/team)
/admin/users         → User Management Grid
/onboarding          → 4-step wizard (full page, no sidebar)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: MOCK DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Provide inline mock data for:
- KPI: { yesterday_actual: 4230, tomorrow_predicted: 5124, variance: +12.3, confidence: 0.873 }
- Chart: 14 past days (actual_qty filled, predicted null) + 7 future days (actual null, predicted filled)
- XAI factors: [{name:"프로모션",impact:+15.2},{name:"기온상승",impact:+8.0},{name:"요일효과",impact:+5.3},{name:"강수량",impact:-12.5}]
- Memos: 3 sample Korean memo items with avatars
- Users: 5 sample team members with varied roles and statuses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIORITY ORDER: Build pages in this sequence:
1. Design system components + theme toggle
2. Global layout (sidebar + header + responsive)
3. Dashboard page (KPI + chart + XAI)
4. Settings pages (3 tabs)
5. User management admin page
6. Onboarding wizard
7. Memo sidebar + filter panel + feedback widget
8. Dashboard editor (drag & drop)
9. Onboarding tour overlay
```
