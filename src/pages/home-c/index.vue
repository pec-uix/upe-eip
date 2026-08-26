<script setup>
  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    calendarMonthUrl,
    prototypeAnnouncements,
    prototypeExternalLinks,
    prototypeFinanceReminders,
    prototypeInfoLinks,
    prototypeKnowledgeLinks,
    prototypeQuickLinks,
  } from '@/data/homePrototypes'

  function formatFullDate (shortDate) {
    const [month, day] = shortDate.split('/')
    return `2026/${month}/${day}`
  }
</script>

<template>
  <v-sheet class="prototype-c" min-height="100vh">
    <v-container class="prototype-container pa-0" fluid>
      <div id="prototype-top" class="prototype-shell">
        <SubpageHeader active="/home-c" />

        <main class="prototype-c__main">
          <v-row dense class="main-top-row">
            <v-col cols="12" lg="8">
              <section id="announcements" class="panel">
                <div class="panel__heading">
                  <h1 class="text-headline-medium font-weight-bold">公布欄</h1>
                  <a href="/all-news">查看全部</a>
                </div>

                <v-list bg-color="transparent" class="pa-0">
                  <v-list-item
                    v-for="(item, index) in prototypeAnnouncements.slice(0, 9)"
                    :key="item.title"
                    class="news-row"
                    :href="`/news-detail?notice=${index + 1}`"
                  >
                    <template #prepend>
                      <span class="news-tag" :class="{ 'news-tag--top': item.top }">
                        {{ item.category }}
                      </span>
                    </template>

                    <span class="news-tag news-tag--inline" :class="{ 'news-tag--top': item.top }">
                      {{ item.category }}
                    </span>

                    <v-list-item-title class="text-body-large">
                      {{ item.title }}
                    </v-list-item-title>

                    <template #append>
                      <v-chip v-if="item.file" class="mr-3" size="small" variant="outlined">
                        附件
                      </v-chip>

                      <span class="text-body-small text-medium-emphasis">{{ formatFullDate(item.date) }}</span>
                    </template>
                  </v-list-item>
                </v-list>
              </section>
            </v-col>

            <v-col cols="12" lg="4">
              <section id="calendar" class="panel">
                <div class="panel__head panel__head--plain">
                  <h2 class="text-title-large font-weight-bold">公司日曆</h2>
                  <span>2026/08</span>
                </div>

                <iframe
                  class="calendar-frame calendar-frame--month"
                  loading="lazy"
                  :src="calendarMonthUrl"
                  title="公司日曆 C 月"
                />
              </section>
            </v-col>
          </v-row>

          <section id="quick-links" class="panel">
            <h2 class="text-title-large font-weight-bold mb-4">快速連結</h2>

            <div class="compact-grid">
              <a
                v-for="link in prototypeQuickLinks"
                :key="link.name"
                class="compact-link"
                :href="link.href"
              >
                <v-icon :icon="link.icon" size="18" />
                <span>{{ link.name }}</span>
              </a>
            </div>
          </section>

          <v-row dense>
            <v-col cols="12" md="6">
              <section id="company-info" class="panel">
                <h2 class="text-title-medium font-weight-bold mb-3">公司常用資訊</h2>

                <a
                  v-for="item in prototypeInfoLinks"
                  :key="item.label"
                  class="dense-link"
                  :href="item.href"
                >
                  <v-icon :icon="item.icon" size="18" />
                  <span>{{ item.label }}</span>
                </a>
              </section>
            </v-col>

            <v-col cols="12" md="6">
              <section id="knowledge" class="panel">
                <h2 class="text-title-medium font-weight-bold mb-3">知識管理</h2>

                <a
                  v-for="item in prototypeKnowledgeLinks"
                  :key="item.label"
                  class="dense-link"
                  :href="item.href"
                >
                  <v-icon :icon="item.icon" size="18" />
                  <span>{{ item.label }}</span>
                </a>
              </section>
            </v-col>
          </v-row>

          <section id="finance-reminders" class="panel">
            <div class="panel__heading">
              <h2 class="text-headline-medium font-weight-bold">財會相關作業提醒</h2>
              <a href="/finance-reminders">查看全部</a>
            </div>

            <div class="finance-list">
              <a
                v-for="(item, index) in prototypeFinanceReminders"
                :key="item.title"
                class="finance-row"
                :href="`/finance-detail?reminder=${index + 1}`"
              >
                <span class="finance-row__content">
                  <strong class="text-title-medium">{{ item.title }}</strong>
                </span>

                <span class="finance-row__date text-title-medium font-weight-bold">
                  {{ formatFullDate(item.date) }}
                </span>
              </a>
            </div>
          </section>

          <v-row dense>
            <v-col cols="12" md="6">
              <section class="panel">
                <h2 class="text-title-medium font-weight-bold mb-3">公司資訊</h2>

                <a class="dense-link" href="/about-upe">
                  <span>關於統流開發</span>
                </a>

                <a class="dense-link" href="/finance-reminders">
                  <span>財會作業提醒</span>
                </a>
              </section>
            </v-col>

            <v-col cols="12" md="6">
              <section class="panel">
                <h2 class="text-title-medium font-weight-bold mb-3">外部網站連結</h2>

                <a
                  v-for="item in prototypeExternalLinks"
                  :key="item.label"
                  class="dense-link"
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
  .prototype-c {
    --blue: #32327b;
    --deep-blue: #32327b;
    --orange: #ff8200;
    --border: #e5e7eb;
    color: #1a1a1a;
    background: #f5f7fb;
  }

  .prototype-container {
    min-height: 100vh;
  }

  .prototype-shell {
    min-height: 100vh;
    background: #f5f7fb;
  }

  .prototype-c__main {
    display: grid;
    flex: 1;
    gap: 24px;
    min-width: 0;
    padding: clamp(20px, 2.5vw, 40px);
    background: #f5f7fb;
  }

  .main-top-row :deep(.v-col) {
    display: flex;
    flex-direction: column;
  }

  .main-top-row .panel {
    flex: 1;
    overflow: hidden;
  }

  .panel {
    min-width: 0;
    height: 100%;
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #fff;
  }

  .panel__heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--blue);
    margin-bottom: 16px;
  }

  .panel__heading h1,
  .panel__heading h2 {
    color: var(--blue);
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel__heading a {
    flex: 0 0 auto;
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    margin-left: auto;
  }

  /* calendar panel head (plain style, no blue border) */
  .panel__head--plain {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
  }

  .panel__head--plain span {
    color: #6b7280;
    font-size: 0.75rem;
  }

  .news-row {
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }

  .news-row :deep(.v-list-item__content) {
    min-width: 0;
  }

  .news-row :deep(.v-list-item__prepend) {
    flex: 0 0 auto;
    margin-inline-end: 20px;
  }

  .news-row :deep(.v-list-item-title) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .news-row :deep(.v-list-item__append) {
    flex: 0 0 auto;
    margin-inline-start: 16px;
  }

  .news-tag {
    display: inline-flex;
    width: 88px;
    min-width: 88px;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 4px;
    color: var(--blue);
    background: #e6eaf2;
    font-size: 0.75rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .news-tag--top {
    color: #fff;
    background: var(--blue);
  }

  .news-tag--inline {
    display: none;
  }

  .finance-list {
    display: grid;
  }

  .finance-row {
    display: grid;
    align-items: center;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 20px;
    min-height: 64px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
    color: inherit;
    text-decoration: none;
  }

  .finance-row:hover {
    background: #f9fafc;
  }

  .finance-row__content {
    display: grid;
    min-width: 0;
    gap: 2px;
  }

  .finance-row__content strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .finance-row__date {
    color: var(--blue);
    white-space: nowrap;
  }

  .calendar-frame {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 4px;
  }

  .calendar-frame--month {
    height: clamp(280px, 28vw, 430px);
  }

  .calendar-frame--agenda {
    height: clamp(180px, 18vw, 280px);
    margin-top: 8px;
  }

  .compact-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .compact-link,
  .dense-link {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    color: #1a1a1a;
    text-decoration: none;
  }

  .compact-link {
    min-height: 40px;
    padding: 8px;
    border: 1px solid var(--border);
    border-radius: 4px;
  }

  .compact-link:hover {
    border-color: var(--orange);
  }

  .compact-link span {
    overflow-wrap: anywhere;
  }

  .subpage-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .subpage-card {
    display: grid;
    gap: 6px;
    min-height: 112px;
    align-content: start;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: #1a1a1a;
    background: #f9fafc;
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

  .dense-link {
    padding: 9px 0;
    border-top: 1px solid var(--border);
  }

  .dense-link .v-icon {
    color: var(--blue);
  }

  .prototype-c__footer {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding-top: 8px;
    color: #6b7280;
    font-size: 0.75rem;
  }

  @media (min-width: 1440px) {
    .prototype-c__main {
      gap: 28px;
    }

    .compact-link {
      min-height: 52px;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  @media (max-width: 960px) {
    .compact-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .subpage-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .prototype-c__main {
      padding: 16px;
    }

    .compact-grid {
      grid-template-columns: 1fr;
    }

    .subpage-grid {
      grid-template-columns: 1fr;
    }

    .news-row :deep(.v-list-item__prepend) {
      display: none;
    }

    .news-tag--inline {
      display: inline-flex;
      width: auto;
      min-width: 0;
      justify-content: flex-start;
      padding: 0;
      color: var(--blue);
      background: transparent;
      font-size: 0.875rem;
    }

    .news-row :deep(.v-list-item__append .v-chip) {
      display: none;
    }

    .finance-row {
      grid-template-columns: minmax(0, 1fr);
      gap: 6px;
    }

    .finance-row__date {
      justify-self: start;
    }

    .prototype-c__footer {
      display: grid;
    }
  }
</style>
