<script setup>
  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
  } from '@/data/homePrototypes'

  const aboutIntro = [
    '鑒於國內消費型態改變，網路購物市場迅速擴張，透過網路銷售之商品數量遽增，物流配送需求因而擴大。統一企業集團流通事業之零售點持續於全台各地擴增，物流運送體系的升級實為刻不容緩，而大型的物流中心是物流產業的基礎建設，所以在全國北部、中部、南部各地開發設置複合式多功能物流中心是本集團必要之經營策略。',
    '為有效整合集團資源，統一集團設立專業物流事業開發公司－統流開發股份有限公司，負責全台大型複合式物流中心之開發籌備、投資興建與營運管理，於全台各地打造一複合式物流中心，並導入必要之自動化倉儲設備，從運輸、通路全面性的品質控管，提供予消費者安心安全的消費體驗。',
  ]

  const aboutVision = '統流為專業物流地產開發運營公司，放眼亞洲市場並聚集於智慧物流整合服務，成為「新零售之最強後盾」'

  const aboutPrinciples = [
    {
      detail: '應以誠待人、腳踏實地完成職責',
      label: '誠信務實',
    },
    {
      detail: '無論是工地管理、園區設計、交通皆是以安全為首要原則',
      label: '安全便捷',
    },
    {
      detail: '透過專業的團隊、技術與智慧設備，為進駐業者提供最有效率的服務',
      label: '效率專業',
    },
    {
      detail: '不拘泥於現狀，勇於開創新局，為公司創造更多價值',
      label: '創新求變',
    },
  ]
</script>

<template>
  <v-sheet class="subpage" min-height="100vh">
    <SubpageHeader active="/about-upe" />

    <v-container class="about-page py-10 py-md-16" max-width="1180">

      <!-- Hero: 左欄大標題 ／ 右欄簡介文字 -->
      <section class="about-hero">
        <div class="about-hero__left">
          <span class="about-kicker">關於統流開發</span>

          <h1 class="about-hero__title font-weight-bold">
            專業物流地產<br>開發營運平台
          </h1>
        </div>

        <div class="about-hero__right">
          <p
            v-for="paragraph in aboutIntro"
            :key="paragraph"
            class="about-hero__lead"
          >
            {{ paragraph }}
          </p>
        </div>
      </section>

      <!-- 公司願景 -->
      <section class="about-vision">
        <div class="about-vision__inner">
          <span class="about-kicker about-kicker--light">公司願景</span>

          <blockquote class="about-vision__statement font-weight-bold">
            {{ aboutVision }}
          </blockquote>
        </div>
      </section>

      <!-- 經營理念 -->
      <section class="about-principles-section">
        <div class="about-section-heading">
          <span class="about-kicker">經營理念</span>

          <h2 class="about-section-heading__title font-weight-bold">
            沿承集團精神，發展統流營運準則
          </h2>

          <p class="about-section-heading__sub">
            「誠信務實、安全便捷、效率專業、創新求變」
          </p>
        </div>

        <div class="about-principles">
          <article
            v-for="(item, index) in aboutPrinciples"
            :key="item.label"
            class="principle-card"
          >
            <span aria-hidden="true" class="principle-card__index">0{{ index + 1 }}</span>

            <strong class="principle-card__label">{{ item.label }}</strong>

            <span class="principle-card__detail">{{ item.detail }}</span>
          </article>
        </div>
      </section>

    </v-container>

  </v-sheet>
</template>

<style scoped>
/* ─── Design tokens ──────────────────────────────── */
.subpage {
  --blue: #32327b;
  --blue-dark: #1f1f54;
  --orange: #ff8200;
  --surface: #f4f6fb;
  --border: #e4e8f0;
  --text-primary: #0d0d1a;
  --text-secondary: #5a6475;
  color: var(--text-primary);
  background: var(--surface);
}

/* ─── Page grid ──────────────────────────────────── */
.about-page {
  display: grid;
  gap: 56px;
}

/* ─── Kicker chip ────────────────────────────────── */
.about-kicker {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 10px;
  padding: 6px 14px;
  border-radius: 999px;
  color: var(--orange);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  background: rgba(255, 130, 0, 0.10);
}

.about-kicker::before {
  display: block;
  flex-shrink: 0;
  width: 18px;
  height: 3px;
  border-radius: 999px;
  background: currentColor;
  content: "";
}

.about-kicker--light {
  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.12);
}

/* ─── Hero ───────────────────────────────────────── */
.about-hero {
  display: grid;
  grid-template-columns: 42% 58%;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.04),
    0 20px 60px rgba(50, 50, 123, 0.09);
}

.about-hero__left {
  position: relative;
  display: grid;
  align-content: center;
  gap: 28px;
  padding: clamp(40px, 5vw, 72px) clamp(32px, 4vw, 56px) clamp(40px, 5vw, 72px) clamp(44px, 5.5vw, 72px);
  border-right: 1px solid var(--border);
}

.about-hero__left::before {
  content: "";
  position: absolute;
  top: clamp(40px, 5vw, 72px);
  bottom: clamp(40px, 5vw, 72px);
  left: 0;
  width: 5px;
  border-radius: 0 4px 4px 0;
  background: var(--orange);
}

.about-hero__title {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(2rem, 3.6vw, 3.5rem);
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.about-hero__right {
  display: grid;
  align-content: center;
  gap: 22px;
  padding: clamp(40px, 5vw, 72px) clamp(36px, 4.5vw, 64px);
  background: #fafbfd;
}

.about-hero__lead {
  margin: 0;
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 2;
}

/* ─── Vision ─────────────────────────────────────── */
.about-vision {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 55%, #3d3d8a 100%);
  box-shadow: 0 20px 60px rgba(31, 31, 84, 0.24);
}

.about-vision::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--orange);
}

.about-vision::after {
  content: "\275D";
  position: absolute;
  bottom: -48px;
  right: 48px;
  font-size: 220px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.05);
  font-family: Georgia, "Times New Roman", serif;
  pointer-events: none;
  user-select: none;
}

.about-vision__inner {
  display: grid;
  gap: 28px;
  padding: clamp(48px, 6vw, 84px) clamp(48px, 7vw, 100px);
}

.about-vision__statement {
  margin: 0;
  padding: 0;
  border: none;
  color: #fff;
  font-size: clamp(1.45rem, 2.6vw, 2.4rem);
  line-height: 1.65;
}

/* ─── Principles section ─────────────────────────── */
.about-principles-section {
  display: grid;
  gap: 40px;
}

.about-section-heading {
  display: grid;
  gap: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

.about-section-heading__title {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.about-section-heading__sub {
  margin: 0;
  color: var(--blue);
  font-size: 1.1rem;
  font-weight: 500;
}

/* ─── Principle cards ────────────────────────────── */
.about-principles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.principle-card {
  position: relative;
  display: grid;
  align-content: start;
  gap: 12px;
  padding: 36px 36px 40px;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--border);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.03),
    0 8px 24px rgba(50, 50, 123, 0.06);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.principle-card:hover {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.06),
    0 20px 48px rgba(50, 50, 123, 0.13);
  transform: translateY(-4px);
}

.principle-card::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4px;
  border-radius: 4px 0 0 4px;
  background: var(--orange);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.25s ease;
}

.principle-card:hover::before {
  transform: scaleY(1);
}

.principle-card__index {
  display: block;
  font-size: clamp(3rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1;
  color: rgba(50, 50, 123, 0.09);
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.principle-card__label {
  display: block;
  color: var(--blue);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.principle-card__detail {
  display: block;
  color: var(--text-secondary);
  font-size: 0.975rem;
  line-height: 1.8;
}

/* ─── Footer ─────────────────────────────────────── */
.subpage-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 18px 32px;
  border-top: 1px solid var(--border);
  background: #fff;
  color: #8a9ab0;
  font-size: 0.75rem;
}

/* ─── Mobile ─────────────────────────────────────── */
@media (max-width: 760px) {
  .about-page {
    gap: 36px;
  }

  .about-hero {
    grid-template-columns: 1fr;
  }

  .about-hero__left {
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding-left: 40px;
  }

  .about-hero__title br {
    display: none;
  }

  .about-vision::after {
    display: none;
  }

  .about-principles {
    grid-template-columns: 1fr;
  }
}
</style>
