# DeepDemand 랜딩페이지 전면 리뉴얼 구현 계획

기존 영문 범용 수요예측 랜딩페이지 → **한국어 기반, 페르소나 밀착형, 과할 정도로 강력한 B2B SaaS 랜딩페이지**로 전면 재구축

## 핵심 변경 방향

| 항목 | AS-IS | TO-BE |
|------|-------|-------|
| **언어** | 영문 (Stop Guessing Demand) | **한국어** 기반 (감성 카피 + 수치 소구) |
| **타겟** | 범용 이커머스 | **이커머스 MD (김아름)** + **3PL 센터장 (정동환)** 듀얼 페르소나 |
| **핵심 가치** | 일반적 예측/재고/비용 | **XAI 결재 방어 리포트** + **1-Click 인건비 옵티마이저** |
| **CTA** | "Start Free" 단일 | **3단계 CTA** (사전예약/알림설정/대기리스트) |
| **톤** | 차분한 SaaS | **과할 수도 있지만 최대한 강력한** 감정 소구 |
| **포지셔닝** | 범용 AI 도구 | **SAP 대비 Add-on 플러그인**, SME 틈새 공략 |
| **섹션** | 8개 | **12개** (페르소나 여정, Pain/Gain 대비 등 추가) |

---

## Proposed Changes

### [MODIFY] LandingPage.tsx — 전면 재작성

#### 섹션 구성 (12개 섹션)

1. **Nav** — 한국어 메뉴, 3단계 CTA 드롭다운
2. **Hero** — 감정 훅 카피 + 수치 3종 (4시간→10분 / 반려5→0 / 80만원→0) + 파티클 배경
3. **Pain Point (위기)** — "이런 상황, 겪어보셨나요?" 감정 공감 섹션 (엑셀 지옥, 품절 징계, 알바 손실)
4. **Solution Overview** — DeepDemand 2대 핵심 기능 (XAI 리포트 + 인건비 옵티마이저) 소개
5. **Persona CJM: 이커머스 MD 김아름** — 스토리 기반 여정 (위기→도입→결재방어→정착)
6. **Persona CJM: 3PL 센터장 정동환** — 스토리 기반 여정 (위기→도입→정착)
7. **How It Works** — 3-Step 다이어그램 (기존 유지, 카피 한국어화)
8. **Value Proposition** — 시간 최적화 / 업무 효율성 / 재무 방어 3종 수치 카드
9. **ROI Before/After** — 기존 구조 유지, 수치를 비즈니스 데이터로 교체
10. **Market Positioning** — SME 틈새 공략 + Add-on 플러그인 포지셔닝
11. **Social Proof / Stats** — 수치 카운터 업데이트
12. **Final CTA** — 3단계 CTA (사전예약 / 알림설정 / 대기리스트) 카드형 배치
13. **Footer** — 한국어 + 연락처

#### Hero 섹션 카피
```
Badge: 🔥 국내 SME 이커머스/물류 전용 AI
Title: "엑셀 4시간, 반려 5회, 손실 80만원"
Gradient: "이제 끝내겠습니다."
Subtitle: DeepDemand는 발주 예측부터 결재 방어, 인건비 최적화까지 — 
          당신의 시간과 돈을 지키는 AI입니다.
```

#### Pain Point 섹션
3장의 카드:
- 🔥 엑셀 수작업 4시간 → 퇴근 불가능 (MD)
- ⚠️ 트렌드 급변 → 품절 사태 → 징계 (MD)
- 💸 프로모션 은폐 → 잉여 인건비 80만원 손실 (센터장)

#### 핵심 기능 2종 카드
- **결재 방어용 XAI 리포트 (MD용)**: AI가 왜 이 숫자를 예측했는지, PDF로 원클릭 도출
- **1-Click 인건비 옵티마이저 (센터장용)**: 판매 데이터 연동 → 알바 인원 즉시 산출

#### 페르소나 CJM 카드 (타임라인 형태)
김아름(MD): 위기 → 도입 → 결재방어 → 정착 (4 스텝)
정동환(센터장): 위기 → 도입/정착 (3 스텝)

#### 3단계 CTA
```
🚀 [사전 예약] DeepDemand 얼리버드 혜택 선점하기
🔔 [알림 설정하기] 정식 런칭 및 기능 업데이트 소식 받아보기
📋 [대기 리스트 등록] 우리 회사 맞춤형 솔루션 도입 상담 대기 명단 등록하기
```

---

### [MODIFY] LandingPage.css — 전면 재작성

- 기존 다크 프리미엄 디자인 시스템 유지
- 새 섹션 스타일 추가: Pain Point 카드, Persona CJM 타임라인, 3단계 CTA 카드
- 더 과감한 글로우/그라디언트 효과
- 페르소나 카드: 글래스모피즘 + 아이콘 그라디언트
- 타임라인 UI: 수직 라인 + 스텝 인디케이터
- CTA 카드: 각각 다른 컬러 테마 (Blue/Amber/Emerald)
- 추가 키프레임 애니메이션: pulse-glow, slide-in-left, shake

---

### [MODIFY] index.html — SEO 메타 태그 한국어화

```html
<title>DeepDemand — B2B 수요예측 AI SaaS | 발주 예측 · 결재 방어 · 인건비 최적화</title>
<meta name="description" content="엑셀 수작업 4시간을 10분으로. 발주 반려 0회. 잉여 인건비 0원. 
  이커머스 MD와 물류 센터장을 위한 AI 수요예측 SaaS, DeepDemand." />
<meta property="og:title" content="DeepDemand — 엑셀 지옥 탈출, AI가 예측합니다" />
```

---

### [MODIFY] README.md — 리뉴얼 내용 반영

- 랜딩페이지 섹션 설명 업데이트 (12개 섹션 → 한국어 설명)
- 타겟 페르소나 명시
- 3단계 CTA 구조 설명
- 기술 스택 정보 유지

---

### [NEW/MODIFY] docs/landing_checklist.md — 체크리스트 업데이트

비즈니스 정보 반영 여부 체크리스트:
- [ ] 핵심 가치 3종 반영 (시간/효율/재무)
- [ ] 페르소나 2종 CJM 반영
- [ ] 3단계 CTA 구현
- [ ] 시장 포지셔닝 반영
- [ ] Pain Point 감정 훅
- [ ] XAI 리포트 + 인건비 옵티마이저 핵심 기능 강조
- 등등...

---

## User Review Required

> [!IMPORTANT]
> **언어 선택**: 랜딩페이지를 100% 한국어로 작성합니다. 기존 영문 UI 요소는 모두 한국어화됩니다.

> [!IMPORTANT]
> **CTA 동작**: 3단계 CTA 버튼들은 현재 실제 백엔드가 없으므로, 클릭 시 `/onboarding` 페이지로 이동하는 기존 동작을 유지하되, 버튼 텍스트와 디자인만 3단계로 분리합니다. 추후 실제 폼 연동 시 교체 가능합니다.

> [!IMPORTANT]
> **이미지 에셋**: 기존 `hero-visual.png`, `dashboard-showcase.png`을 그대로 활용합니다. 새 섹션에 필요한 비주얼은 CSS 그라디언트/글로우로 대체합니다.

---

## Verification Plan

### Automated Tests
```bash
npm run build   # TypeScript 컴파일 + 빌드 오류 확인
npm run dev     # 로컬 서버 구동 후 브라우저 확인
```

### Browser Verification
- 브라우저에서 `localhost:5173` 접속
- 12개 섹션 순차 스크롤 확인
- CTA 버튼 클릭 → `/onboarding` 이동 확인
- 모바일 반응형 확인 (640px, 1024px 브레이크포인트)
- 애니메이션/카운터 정상 동작 확인

### Manual Verification
- 체크리스트 문서 작성 후 각 항목 확인
