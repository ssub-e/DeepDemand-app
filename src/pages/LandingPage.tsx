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
  AlertTriangle,
  Clock,
  TrendingDown,
  User,
  CheckCircle2,
  Bell,
  Calendar,
  ListTodo
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
            <BrainCircuit size={20} />
          </div>
          DeepDemand
        </a>
        <div className="landing-nav-links">
          <a href="#problem">문제 해결</a>
          <a href="#features">핵심 기능</a>
          <a href="#persona">고객 경험</a>
          <a href="#roi">기대 효과</a>
        </div>
        <button className="landing-nav-cta" onClick={handleCTA}>
          무료로 시작하기
        </button>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-section" id="hero">
        <div className="hero-bg">
          <img src="/hero-visual.png" alt="" className="hero-bg-image" loading="eager" />
          <div className="hero-bg-overlay" />
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-purple" />
        </div>

        <motion.div className="hero-content" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              국내 SME 이커머스 & 3PL 전용 AI 수요예측
            </span>
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeInUp}>
            엑셀 4시간, 반려 5회, 손실 80만원
            <br />
            <span className="hero-title-gradient">이제 AI가 끝내겠습니다.</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={fadeInUp}>
            DeepDemand는 단순한 예측을 넘어 결재 방어와 인건비 최적화까지 해결합니다.
            기존 시스템 수정 없이 Add-on으로 가볍게 도입하세요.
          </motion.p>

          <motion.div className="hero-cta-group" variants={fadeInUp}>
            <button className="btn-primary-landing" onClick={handleCTA}>
              얼리버드 혜택 선점하기
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary-landing" onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })}>
              <Play size={18} />
              어떻게 해결하나요?
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── PAIN POINT SECTION (NEW) ─── */}
      <AnimatedSection id="problem">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">THE PROBLEM</span>
          <h2 className="section-title">아직도 감(Gut Feeling)으로<br />비즈니스를 운영하시나요?</h2>
          <p className="section-subtitle">현장에서 매일 벌어지는 이 상황들, 남의 이야기가 아닙니다.</p>
        </motion.div>

        <div className="pain-grid">
          <motion.div className="pain-card" variants={fadeInUp}>
            <div className="pain-icon"><Clock size={28} /></div>
            <h3 className="pain-title">퇴근을 가로막는 엑셀 지옥</h3>
            <p className="pain-desc">수만 개 SKU 판매 데이터를 엑셀로 일일이 계산하다 보면 어느새 밤 10시. 사람이 할 일이 아닙니다.</p>
          </motion.div>
          <motion.div className="pain-card" variants={fadeInUp}>
            <div className="pain-icon"><AlertTriangle size={28} /></div>
            <h3 className="pain-title">반복되는 품절과 징계</h3>
            <p className="pain-desc">급변하는 트렌드와 기상을 반영 못 해 발생한 품절 사태. "왜 예측 못 했어?"라는 추궁에 지쳐갑니다.</p>
          </motion.div>
          <motion.div className="pain-card" variants={fadeInUp}>
            <div className="pain-icon"><TrendingDown size={28} /></div>
            <h3 className="pain-title">허공으로 날리는 인건비</h3>
            <p className="pain-desc">화주사의 프로모션을 몰라 일용직 알바를 과도하게 불렀을 때 발생하는 하루 수십만 원의 손실.</p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── CORE FEATURES SECTION (NEW) ─── */}
      <AnimatedSection id="features">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">CORE FEATURES</span>
          <h2 className="section-title">기존 SCM과는 차원이 다른<br />DeepDemand의 2대 해결책</h2>
        </motion.div>

        <div className="value-cards">
          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-card-icon value-card-icon-purple">
              <Sparkles size={32} />
            </div>
            <h3 className="value-card-title">결재 방어용 XAI 리포트</h3>
            <p className="value-card-text">
              "AI가 왜 이렇게 예측했죠?"라는 질문에 당황하지 마세요. 
              기상 변화, 프로모션 영향도 등 예측 근거를 담은 PDF 보고서를 원클릭으로 생성하여 임원을 설득합니다.
            </p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-card-icon value-card-icon-blue">
              <Zap size={32} />
            </div>
            <h3 className="value-card-title">1-Click 인건비 옵티마이저</h3>
            <p className="value-card-text">
              판매 데이터와 연동되어 내일 필요한 일용직 인원수를 즉시 산출합니다. 
              화주사와 소통 없이도 정확한 인력을 배치하여 잉여 인건비를 제로(0)화합니다.
            </p>
          </motion.div>

          <motion.div className="value-card" variants={fadeInUp}>
            <div className="value-card-icon value-card-icon-emerald">
              <PackageCheck size={32} />
            </div>
            <h3 className="value-card-title">Add-on 플러그인 침투</h3>
            <p className="value-card-text">
              기존에 사용하시던 엑셀이나 SCM 시스템을 뜯어고칠 필요가 없습니다. 
              필요한 예측 데이터만 API나 PDF 형태로 받아보는 가벼운 플러그인 방식으로 시작하세요.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── HOW IT WORKS: INPUT-OUTPUT DIAGRAM ─── */}
      <AnimatedSection>
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">PROCESS</span>
          <h2 className="section-title">데이터만 연결하세요.<br />나머지는 AI가 수행합니다.</h2>
        </motion.div>

        <motion.div className="io-diagram" variants={fadeInUp}>
          <motion.div className="io-box io-box-input" variants={scaleIn}>
            <span className="io-box-icon"><Database size={40} strokeWidth={1.5} /></span>
            <span className="io-box-title">1. 데이터 연동</span>
            <span className="io-box-desc">판매 내역, 재고 상태, 과거 프로모션 데이터를 클릭 한 번으로 가져옵니다.</span>
          </motion.div>
          <span className="io-arrow"><ChevronRight size={32} /></span>
          <motion.div className="io-box io-box-engine" variants={scaleIn}>
            <span className="io-box-icon"><Sparkles size={40} strokeWidth={1.5} /></span>
            <span className="io-box-title">2. DeepDemand AI</span>
            <span className="io-box-desc">외부 기상 데이터, 시즌성, 트렌드를 복합 분석하여 최적의 예측치를 산출합니다.</span>
          </motion.div>
          <span className="io-arrow"><ChevronRight size={32} /></span>
          <motion.div className="io-box io-box-output" variants={scaleIn}>
            <span className="io-box-icon"><Target size={40} strokeWidth={1.5} /></span>
            <span className="io-box-title">3. 실행 가능한 인사이트</span>
            <span className="io-box-desc">발주 시급 품목 Top 5, 필요 인력 산출 등 즉각적인 조치 리스트를 제공합니다.</span>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* ─── PERSONA CJM SECTION (NEW) ─── */}
      <AnimatedSection id="persona">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">CUSTOMER JOURNEY</span>
          <h2 className="section-title">DeepDemand와 함께하는<br />새로운 업무의 일상</h2>
        </motion.div>

        <div className="cjm-container">
          {/* Persona: 이커머스 MD 김아름 */}
          <div className="persona-block">
            <motion.div className="persona-profile" variants={fadeInUp}>
              <div className="persona-avatar">👩‍💼</div>
              <h3 className="persona-name">김아름 (32세)</h3>
              <p className="persona-role">이커머스 패션 카테고리 MD</p>
              <p className="persona-jtbd">"외부 변수가 반영된 객관적 발주서를 만들어 반려 없이 임원 결재를 통과시키는 것"</p>
            </motion.div>
            
            <div className="cjm-timeline">
              <div className="cjm-step">
                <div className="cjm-step-num">1</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">위기: 트렌드 급변과 품절</h4>
                  <p className="cjm-step-desc">갑작스러운 기온 하락으로 주문 폭주. 엑셀 수기 예측의 한계로 베스트셀러 품절 사태 직면.</p>
                </div>
              </div>
              <div className="cjm-step">
                <div className="cjm-step-num">2</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">도입: 과거 데이터와 기상 연동</h4>
                  <p className="cjm-step-desc">DeepDemand에 과거 엑셀 업로드. AI가 기상청 데이터와 연동하여 내일 주문량을 즉각 예측.</p>
                </div>
              </div>
              <div className="cjm-step">
                <div className="cjm-step-num">3</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">결재 방어: XAI 리포트 도출</h4>
                  <p className="cjm-step-desc">"왜 이렇게 많이 주문해?"라는 상사의 질문에 AI 예측 근거 PDF 리포트로 한 번에 대응.</p>
                </div>
              </div>
              <div className="cjm-step">
                <div className="cjm-step-num">4</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">정착: 발주 시급 품목 상시 확인</h4>
                  <p className="cjm-step-desc">웹 대시보드에서 '발주 시급 품목 Top 5'를 확인하며 품절 걱정 없는 매일을 보냄.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Persona: 3PL 센터장 정동환 */}
          <div className="persona-block">
            <motion.div className="persona-profile" variants={fadeInUp}>
              <div className="persona-avatar">👨‍🏭</div>
              <h3 className="persona-name">정동환 (45세)</h3>
              <p className="persona-role">3PL 물류센터장</p>
              <p className="persona-jtbd">"화주사와 소통 없이도 정확한 필요 알바 인력을 오후 5시 이전에 확정하는 것"</p>
            </motion.div>
            
            <div className="cjm-timeline">
              <div className="cjm-step">
                <div className="cjm-step-num">1</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">위기: 은폐된 프로모션과 인건비 손실</h4>
                  <p className="cjm-step-desc">화주사의 프로모션 공유 누락으로 과다 인력 호출. 하루 80만 원의 잉여 인건비 매몰 비용 발생.</p>
                </div>
              </div>
              <div className="cjm-step">
                <div className="cjm-step-num">2</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">도입: 1-Click 데이터 연동</h4>
                  <p className="cjm-step-desc">화주사 판매 데이터를 바로 당겨와 내일 필요한 알바 인원수를 즉각 확인.</p>
                </div>
              </div>
              <div className="cjm-step">
                <div className="cjm-step-num">3</div>
                <div className="cjm-step-content">
                  <h4 className="cjm-step-title">정착: 오후 5시의 여유</h4>
                  <p className="cjm-step-desc">정확한 인원 확정으로 센터 운영 효율 극대화. 모바일 신호등 UX로 현장 상황 직관적 파악.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─── ROI COMPARISON ─── */}
      <AnimatedSection id="roi" className="roi-section">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">BEFORE & AFTER</span>
          <h2 className="section-title">감(Gut)에 의존하는 경영,<br />이제 데이터로 방어하세요.</h2>
        </motion.div>

        <motion.div className="roi-grid" variants={fadeInUp}>
          <div className="roi-card roi-card-before">
            <p className="roi-card-label">도입 전</p>
            <div className="roi-metric">
              <p className="roi-metric-value">4시간</p>
              <p className="roi-metric-unit">일일 평균 발주 계획 시간</p>
            </div>
            <div className="roi-metric">
              <p className="roi-metric-value">±35%</p>
              <p className="roi-metric-unit">수요 예측 오차율</p>
            </div>
            <p className="roi-metric-desc">엑셀 노가다, 잦은 품절, 과다 인건비 지출</p>
          </div>

          <div className="roi-vs"><div className="roi-vs-badge">VS</div></div>

          <div className="roi-card roi-card-after">
            <p className="roi-card-label">DeepDemand 도입 후</p>
            <div className="roi-metric">
              <p className="roi-metric-value">10분</p>
              <p className="roi-metric-unit">일일 평균 발주 계획 시간</p>
            </div>
            <div className="roi-metric">
              <p className="roi-metric-value">±8%</p>
              <p className="roi-metric-unit">수요 예측 오차율</p>
            </div>
            <p className="roi-metric-desc">원클릭 결재 리포트, 재고 최적화, 인건비 방어</p>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* ─── STATS SECTION ─── */}
      <AnimatedSection id="stats">
        <div className="stats-grid">
          {[
            { end: 95, suffix: "%", label: "업무 시간 단축" },
            { end: 100, suffix: "%", label: "결재 통과율(1-Pass)" },
            { end: 80, suffix: "만", label: "일평균 인건비 손실 방어" },
            { end: 0, suffix: "회", label: "품절 사태 발생" },
          ].map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </AnimatedSection>

      {/* ─── MARKET POSITIONING (NEW) ─── */}
      <AnimatedSection className="market-positioning">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">MARKET STRATEGY</span>
          <h2 className="section-title">거대 SCM은 무겁고 비쌉니다.<br />DeepDemand는 '침투'합니다.</h2>
          <p className="section-subtitle">
            기존 시스템을 바꾸지 마세요. 오직 **최종 예측의 질과 XAI 도출**에만 100% 집중하여 
            국내 SME 이커머스와 3PL 시장의 가려운 곳을 긁어드립니다.
          </p>
        </motion.div>
      </AnimatedSection>

      {/* ─── FINAL 3-STEP CTA (NEW) ─── */}
      <AnimatedSection id="final-cta" className="final-cta-section">
        <motion.div className="section-header-center" variants={fadeInUp}>
          <span className="section-label">GET STARTED</span>
          <h2 className="section-title">DeepDemand와 함께<br />성장의 속도를 높이세요</h2>
        </motion.div>

        <div className="cta-grid">
          {/* Step 1: 사전 예약 */}
          <motion.div className="cta-card" variants={fadeInUp}>
            <div className="cta-card-icon" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#3B82F6" }}>
              <Rocket size={32} />
            </div>
            <h3 className="cta-card-title">사전 예약</h3>
            <p className="cta-card-desc">DeepDemand 얼리버드 혜택을<br />가장 먼저 선점하세요.</p>
            <button className="cta-btn" style={{ background: "#2563EB", color: "white" }} onClick={handleCTA}>예약하기</button>
          </motion.div>

          {/* Step 2: 알림 설정 */}
          <motion.div className="cta-card" variants={fadeInUp}>
            <div className="cta-card-icon" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B" }}>
              <Bell size={32} />
            </div>
            <h3 className="cta-card-title">알림 설정</h3>
            <p className="cta-card-desc">정식 런칭 및 주요 기능<br />업데이트 소식을 받아보세요.</p>
            <button className="cta-btn" style={{ background: "#F59E0B", color: "white" }} onClick={handleCTA}>설정하기</button>
          </motion.div>

          {/* Step 3: 대기 리스트 */}
          <motion.div className="cta-card" variants={fadeInUp}>
            <div className="cta-card-icon" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10B981" }}>
              <ListTodo size={32} />
            </div>
            <h3 className="cta-card-title">상담 대기 등록</h3>
            <p className="cta-card-desc">우리 회사 맞춤형 솔루션 도입을 위한<br />전문가 상담을 예약하세요.</p>
            <button className="cta-btn" style={{ background: "#10B981", color: "white" }} onClick={handleCTA}>등록하기</button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ─── FOOTER ─── */}
      <footer className="landing-footer">
        <div className="landing-footer-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <p className="landing-footer-text">
            © 2026 DeepDemand Team. All rights reserved. — 국내 SME 이커머스/3PL을 위한 AI 수요예측 SaaS
          </p>
        </div>
      </footer>
    </div>
  )
}

function Rocket(props: any) {
  return <Sparkles {...props} /> // Using Sparkles as a placeholder for Rocket if not imported
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
