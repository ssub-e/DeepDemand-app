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

## 🌐 랜딩페이지 (Landing Page)

DeepDemand의 랜딩페이지는 고객 획득을 위한 강력한 후킹 레이어로 설계되었습니다 (`/` 경로):

- **히어로 섹션** — "엑셀 4시간, 반려 5회, 손실 80만원. 이제 AI가 끝내겠습니다."
- **페인 포인트** — 이커머스 MD와 3PL 센터장의 실질적인 고충(엑셀 지옥, 품절 징계, 인건비 손실) 소구
- **핵심 솔루션** — **결재 방어용 XAI 리포트** 및 **1-Click 인건비 옵티마이저**
- **페르소나 여정(CJM)** — [김아름 MD]와 [정동환 센터장]의 페르소나별 도입 스토리텔링
- **기대 효과(ROI)** — 4시간 업무를 10분으로 단축, 예측 오차 ±35%에서 ±8%로 개선
- **3단계 CTA** — 사전 예약, 알림 설정, 대기 리스트 등록의 다각적 전환 유도

**전략:** 비즈니스 핵심 가치와 페르소나 JTBD를 반영한 결과 중심(C-type) 랜딩페이지.

### 서비스 흐름
```
/ (랜딩페이지) → CTA 클릭 → /onboarding (온보딩) → /dashboard (대시보드)
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
