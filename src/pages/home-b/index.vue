<script setup>
  import { computed, ref } from 'vue'

  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    calendarAgendaUrl,
    prototypeAnnouncements,
    prototypeChips,
    prototypeExternalLinks,
    prototypeFinanceReminders,
    prototypeInfoLinks,
    prototypeKnowledgeLinks,
    prototypeQuickLinks,
  } from '@/data/homePrototypes'

  const selectedCategory = ref('全部')

  const filteredAnnouncements = computed(() => {
    if (selectedCategory.value === '全部') return prototypeAnnouncements
    return prototypeAnnouncements.filter(item => item.category === selectedCategory.value)
  })

  function formatFullDate (shortDate) {
    const [month, day] = shortDate.split('/')
    return `2026/${month}/${day}`
  }
</script>

<template>
  <v-sheet class="prototype-b" min-height="100vh">
    <v-container class="prototype-container pa-0" fluid>
      <div id="prototype-top" class="prototype-shell">
        <SubpageHeader active="/home-b" />

        <main class="prototype-b__main">
          <v-row dense>
            <v-col cols="12" lg="8">
              <section id="announcements" class="panel">
                <div class="section-head">
                  <h1 class="text-headline-medium font-weight-bold">公布欄</h1>
                  <a href="/all-news">查看更多</a>
                </div>

                <div class="chip-row">
                  <span
                    v-for="chip in prototypeChips"
                    :key="chip"
                    class="category-chip"
                    :class="{ 'category-chip--active': selectedCategory === chip }"
                    @click="selectedCategory = chip"
                  >
                    {{ chip }}
                  </span>
                </div>

                <div class="news-list">
                  <a
                    v-for="item in filteredAnnouncements.slice(0, 4)"
                    :key="item.title"
                    class="news-card"
                    :href="`/news-detail?notice=${prototypeAnnouncements.indexOf(item) + 1}`"
                  >
                    <span class="news-pill" :class="{ 'news-pill--top': item.top }">
                      {{ item.category }}
                    </span>

                    <div class="news-card__body">
                      <h2 class="text-title-small font-weight-bold">
                        {{ item.title }}
                      </h2>
                    </div>

                    <span class="news-card__date text-body-small text-medium-emphasis">
                      {{ formatFullDate(item.date) }}
                    </span>

                    <span v-if="item.file" class="file-pill">附件</span>
                  </a>
                </div>
              </section>
            </v-col>

            <v-col cols="12" lg="4">
              <section id="calendar" class="panel">
                <h2 class="text-title-large font-weight-bold mb-4">公司日曆</h2>

                <div class="today-callout">
                  <div class="text-label-small font-weight-bold">今日 · 8/25</div>
                  <div class="text-body-large mt-1">員工健檢預約開放</div>
                </div>

                <iframe
                  class="calendar-frame"
                  loading="lazy"
                  :src="calendarAgendaUrl"
                  title="公司日曆 B"
                />
              </section>
            </v-col>
          </v-row>

          <section id="quick-links">
            <h2 class="text-headline-medium font-weight-bold mb-4">快速連結</h2>

            <v-row dense>
              <v-col
                v-for="link in prototypeQuickLinks"
                :key="link.name"
                cols="12"
                lg="3"
                md="4"
                sm="6"
              >
                <v-card class="quick-card" :href="link.href" rounded="lg" variant="flat">
                  <v-avatar class="quick-card__icon" size="40">
                    <v-icon :icon="link.icon" size="22" />
                  </v-avatar>

                  <div>
                    <div class="text-body-large font-weight-medium">{{ link.name }}</div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <v-row dense>
            <v-col cols="12" md="6">
              <section id="company-info" class="panel">
                <h2 class="text-title-large font-weight-bold mb-4">公司常用資訊</h2>

                <a
                  v-for="item in prototypeInfoLinks"
                  :key="item.label"
                  class="soft-link"
                  :href="item.href"
                >
                  <v-avatar class="soft-link__icon" size="32">
                    <v-icon :icon="item.icon" size="18" />
                  </v-avatar>

                  <span>{{ item.label }}</span>
                </a>
              </section>
            </v-col>

            <v-col cols="12" md="6">
              <section id="knowledge" class="panel">
                <h2 class="text-title-large font-weight-bold mb-4">知識管理</h2>

                <a
                  v-for="item in prototypeKnowledgeLinks"
                  :key="item.label"
                  class="soft-link soft-link--accent"
                  :href="item.href"
                >
                  <v-avatar class="soft-link__icon" size="32">
                    <v-icon :icon="item.icon" size="18" />
                  </v-avatar>

                  <span>{{ item.label }}</span>
                </a>
              </section>
            </v-col>
          </v-row>

          <section id="finance-reminders" class="panel panel--flush">
            <div class="section-head section-head--padded">
              <h2 class="text-headline-medium font-weight-bold">財會相關作業提醒</h2>
              <a href="/finance-reminders">查看全部</a>
            </div>

            <a
              v-for="item in prototypeFinanceReminders"
              :key="item.title"
              class="finance-row"
              href="/finance-reminders"
            >
              <span class="finance-row__title">{{ item.title }}</span>
              <span class="finance-row__date">{{ formatFullDate(item.date) }}</span>
            </a>
          </section>

          <v-row dense>
            <v-col cols="12" md="6">
              <section class="panel">
                <h2 class="text-title-large font-weight-bold mb-4">公司資訊</h2>

                <a class="soft-link" href="/about-upe">
                  <span>關於統流開發</span>
                </a>

                <a class="soft-link" href="/finance-reminders">
                  <span>財會作業提醒</span>
                </a>
              </section>
            </v-col>

            <v-col cols="12" md="6">
              <section class="panel">
                <h2 class="text-title-large font-weight-bold mb-4">外部網站連結</h2>

                <a
                  v-for="item in prototypeExternalLinks"
                  :key="item.label"
                  class="soft-link"
                  :href="item.href"
                >
                  <span>{{ item.label }}</span>
                </a>
              </section>
            </v-col>
          </v-row>
        </main>


      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>
  .prototype-b {
    --blue: #32327b;
    --orange: #ff8200;
    --orange-soft: #ffe8cc;
    --blue-soft: #e6eaf2;
    --border: #e5e7eb;
    color: #1a1a1a;
    background: #f5f7fb;
  }

  .prototype-container {
    min-height: 100vh;
  }

  .prototype-shell {
    min-height: 100vh;
    overflow: hidden;
    background: var(--blue-soft);
  }

  .prototype-b__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 18px 32px;
    background: #fff;
  }

  .prototype-b__main {
    display: grid;
    gap: 32px;
    padding: clamp(24px, 3vw, 48px);
  }

  .panel {
    height: 100%;
    padding: 24px;
    border-radius: 8px;
    background: #fff;
  }

  .section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
  }

  .section-head h1,
  .section-head h2 {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .section-head a,
  .section-head span {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .section-head a {
    color: var(--orange);
    font-weight: 500;
    text-decoration: none;
  }

  .chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .category-chip {
    padding: 4px 16px;
    border-radius: 999px;
    color: #6b7280;
    background: #f5f7fb;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }

  .category-chip--active {
    color: #fff;
    background: var(--blue);
  }

  .news-list {
    display: grid;
    gap: 8px;
  }

  .news-card {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    min-width: 0;
    padding: 16px;
    border: 0;
    border-radius: 8px;
    color: inherit;
    cursor: pointer;
    font: inherit;
    background: #f5f7fb;
    text-decoration: none;
    text-align: left;
  }

  .news-pill,
  .file-pill {
    flex: 0 0 auto;
    padding: 4px 12px;
    border-radius: 999px;
    color: var(--blue);
    background: var(--blue-soft);
    font-size: 0.75rem;
    font-weight: 700;
  }

  .news-pill--top {
    color: #fff;
    background: #cc6800;
  }

  .file-pill {
    color: #cc6800;
    background: var(--orange-soft);
  }

  .news-card__body {
    flex: 1;
    min-width: 0;
  }

  .news-card__date {
    flex-shrink: 0;
    white-space: nowrap;
  }

  .news-card__body h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .today-callout {
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    color: #cc6800;
    background: var(--orange-soft);
  }

  .calendar-frame {
    width: 100%;
    height: clamp(340px, 34vw, 520px);
    border: 1px solid var(--border);
    border-radius: 8px;
  }

  .quick-card {
    display: grid;
    min-height: 132px;
    align-content: start;
    position: relative;
    gap: 10px;
    padding: 20px 16px;
    color: inherit;
    background: var(--orange-soft);
    text-decoration: none;
  }

  .quick-card:hover {
    background: #fff;
  }

  .quick-card__icon {
    color: var(--orange);
    background: #fff;
  }

  .finance-card {
    display: grid;
    min-height: 132px;
    align-content: start;
    gap: 10px;
    padding: 18px;
    border-radius: 8px;
    color: inherit;
    background: #f5f7fb;
    text-decoration: none;
  }

  .panel--flush {
    padding: 0;
  }

  .section-head--padded {
    padding: 16px 24px;
    margin-bottom: 0;
    border-bottom: 1px solid var(--border);
  }

  .finance-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 16px;
    align-items: center;
    min-height: 52px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--border);
    color: inherit;
    text-decoration: none;
  }

  .finance-row__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .finance-row__date {
    color: var(--orange);
    font-size: 0.75rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .subpage-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }

  .subpage-card {
    display: grid;
    gap: 8px;
    min-height: 136px;
    align-content: start;
    padding: 18px;
    border-radius: 8px;
    color: #1a1a1a;
    background: #f5f7fb;
    text-decoration: none;
  }

  .subpage-card span {
    color: var(--blue);
    font-size: 0.75rem;
    font-weight: 700;
  }

  .subpage-card small {
    color: #6b7280;
  }

  .soft-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px 14px;
    border-radius: 8px;
    margin-top: 8px;
    color: #1a1a1a;
    background: #f5f7fb;
    text-decoration: none;
  }

  .soft-link__icon {
    color: var(--blue);
    background: var(--blue-soft);
  }

  .soft-link--accent {
    background: var(--orange-soft);
  }

  .soft-link--accent .soft-link__icon {
    color: var(--orange);
    background: #fff;
  }

  .prototype-b__footer {
    border-top: 1px solid var(--border);
    color: #6b7280;
    font-size: 0.75rem;
  }

  @media (min-width: 1440px) {
    .news-card {
      min-height: 86px;
    }

    .quick-card {
      min-height: 150px;
    }
  }

  @media (max-width: 960px) {
    .prototype-b__footer {
      display: grid;
    }

    .prototype-b__main {
      padding: 20px;
    }

    .panel {
      padding: 20px;
    }
  }

  @media (max-width: 600px) {
    .prototype-b__footer,
    .prototype-b__main {
      padding: 16px;
    }

    .panel {
      padding: 16px;
    }

    .section-head {
      gap: 12px;
    }

    .section-head h1,
    .section-head h2 {
      font-size: 1.5rem;
      line-height: 1.25;
    }

    .subpage-grid {
      grid-template-columns: 1fr;
    }

    .news-card {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
    }

    .news-pill {
      justify-self: start;
    }

    .news-card__body {
      grid-column: 1 / -1;
      grid-row: 2;
    }

    .file-pill {
      justify-self: end;
    }

    .calendar-frame {
      height: 340px;
    }
  }
</style>
