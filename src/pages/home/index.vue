<script setup>
  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    calendarMonthUrl,
    getAnnouncementCategoryStyle,
    prototypeAnnouncements,
    prototypeExternalLinks,
    prototypeInfoLinks,
    prototypeKnowledgeLinks,
    prototypeQuickLinks,
  } from '@/data/homePrototypes'

  const base = import.meta.env.BASE_URL

  function formatFullDate (shortDate) {
    const [month, day] = shortDate.split('/')

    return `2026/${month}/${day}`
  }
</script>

<template>
  <v-sheet class="prototype-a" min-height="100vh">
    <SubpageHeader active="/home" />

    <v-container class="prototype-a__main py-6 py-md-10" max-width="1180">

      <section id="announcements" class="panel panel--news">
        <div class="panel__heading">
          <h2 class="text-headline-medium font-weight-bold">公布欄</h2>
          <a :href="`${base}all-news`">查看全部</a>
        </div>

        <v-list bg-color="transparent" class="pa-0">
          <v-list-item
            v-for="(item, index) in prototypeAnnouncements.slice(0, 5)"
            :key="item.title"
            class="news-row"
            :to="{ path: '/news-detail', query: { notice: index + 1 } }"
          >
            <template #prepend>
              <span class="news-tag" :style="getAnnouncementCategoryStyle(item.categoryKey)">
                {{ item.category }}
              </span>
            </template>

            <span class="news-tag news-tag--inline" :style="getAnnouncementCategoryStyle(item.categoryKey)">
              {{ item.category }}
            </span>

            <v-list-item-title class="text-title-medium">
              {{ item.title }}
            </v-list-item-title>

            <template #append>
              <v-chip
                v-if="item.file"
                class="mr-3"
                color="accent"
                size="small"
                variant="outlined"
              >
                附件
              </v-chip>

              <span class="text-body-small text-medium-emphasis">{{ formatFullDate(item.date) }}</span>
            </template>
          </v-list-item>
        </v-list>
      </section>

      <section id="quick-links">
        <h2 class="section-title text-headline-medium font-weight-bold mb-4">
          快速連結
        </h2>

        <v-row dense>
          <v-col
            v-for="link in prototypeQuickLinks"
            :key="link.name"
            cols="12"
            lg="3"
            md="4"
            sm="6"
          >
            <v-card class="quick-card" :href="link.href" rounded="lg" variant="outlined">
              <v-icon class="quick-card__icon" :icon="link.icon" size="33" />

              <span class="quick-card__text">
                <span class="font-weight-bold">{{ link.name }}</span>
              </span>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <v-row class="calendar-info-row" dense>
        <v-col class="calendar-info-row__col" cols="12" md="6">
          <section id="calendar" class="panel panel--calendar">
            <div class="panel__heading">
              <h2 class="text-headline-medium font-weight-bold">公司日曆</h2>
              <span>Google Calendar 嵌入</span>
            </div>

            <iframe
              class="calendar-frame"
              loading="lazy"
              :src="calendarMonthUrl"
              title="公司日曆 A"
            />
          </section>
        </v-col>

        <v-col class="calendar-info-row__col" cols="12" md="6">
          <div class="stack stack--aligned">
            <section id="company-info" class="panel">
              <h2 class="text-title-large font-weight-bold mb-3">聯絡方式查詢</h2>

              <a
                v-for="item in prototypeInfoLinks"
                :key="item.label"
                class="simple-link"
                :href="item.href"
              >
                {{ item.label }}
              </a>
            </section>

            <section id="knowledge" class="panel">
              <h2 class="text-title-large font-weight-bold mb-3">內部系統連結</h2>

              <a
                v-for="item in prototypeKnowledgeLinks"
                :key="item.label"
                class="simple-link"
                :href="item.href"
              >
                {{ item.label }}
              </a>
            </section>
          </div>
        </v-col>
      </v-row>

      <section id="external-links" class="end-links">
        <div>
          <h2 class="text-title-large font-weight-bold mb-3">公司資訊</h2>

          <a class="end-link" :href="`${base}about-upe`">關於統流開發</a>

        </div>

        <div>
          <h2 class="text-title-large font-weight-bold mb-3">外部網站連結</h2>

          <a
            v-for="item in prototypeExternalLinks"
            :key="item.label"
            class="end-link"
            :href="item.href"
          >
            {{ item.label }}
          </a>
        </div>
      </section>
    </v-container>
  </v-sheet>
</template>

<style scoped>
  .prototype-a {
    --blue: #32327b;
    --deep-blue: #32327b;
    --orange: #ff8200;
    --border: #e5e7eb;
    color: #1a1a1a;
    background: #f5f7fb;
  }

  .prototype-a__main {
    display: grid;
    gap: 32px;
  }

  /* ── 歡迎橫幅 ── */
  .greeting-banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 28px 36px;
    border-radius: 14px;
    background: linear-gradient(120deg, #32327b 0%, #3e3e96 100%);
    color: #fff;
  }

  .greeting-left {
    display: grid;
    gap: 4px;
  }

  .greeting-salute {
    margin: 0;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.65);
  }

  .greeting-name {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  .greeting-meta {
    margin: 0;
    font-size: 0.8125rem;
    color: rgba(255, 255, 255, 0.55);
  }

  .greeting-date {
    margin: 8px 0 0;
    font-size: 0.9375rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .greeting-stats {
    display: flex;
    gap: 32px;
    flex-shrink: 0;
  }

  .greeting-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 16px 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    min-width: 80px;
  }

  .greeting-stat__value {
    font-size: 1.75rem;
    font-weight: 800;
    color: #ff8200;
    line-height: 1;
  }

  .greeting-stat__label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.65);
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    .greeting-banner {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 20px;
    }

    .greeting-stats {
      width: 100%;
      justify-content: space-between;
      gap: 8px;
    }

    .greeting-stat {
      flex: 1;
      padding: 12px 8px;
      min-width: 0;
    }
  }

  .panel {
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #fff;
  }

  .panel--news {
    min-height: 290px;
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

  .panel__heading h2,
  .section-title {
    color: var(--blue);
  }

  .panel__heading h2 {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .panel__heading a,
  .panel__heading span {
    flex: 0 0 auto;
    color: #6b7280;
    font-size: 0.875rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .panel__heading a {
    margin-left: auto;
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

  .news-row :deep(.v-list-item-title),
  .news-row :deep(.v-list-item-subtitle) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .news-row :deep(.v-list-item-title) {
    font-size: 1.25rem;
  }

  .news-row :deep(.v-list-item__append) {
    flex: 0 0 auto;
    margin-inline-start: 16px;
  }

  .news-tag {
    display: inline-flex;
    width: 96px;
    min-width: 96px;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.9375rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .news-tag--inline {
    display: none;
  }

  .quick-card {
    display: flex;
    min-height: 92px;
    align-items: center;
    gap: 24px;
    padding: 20px 24px;
    color: inherit;
    text-decoration: none;
    background: #fff;
    transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .quick-card__text {
    display: grid;
    min-width: 0;
    gap: 2px;
  }

  .quick-card__text span {
    font-size: 1.25rem;
  }

  .quick-card:hover {
    border-color: var(--blue);
    background: var(--blue);
    box-shadow: 0 8px 20px rgba(50, 50, 123, 0.18);
    color: #fff;
  }

  .quick-card__icon {
    width: 54px;
    height: 54px;
    border-radius: 4px;
    color: var(--blue);
    background: #e6eaf2;
    flex-shrink: 0;
  }

  .quick-card:hover .quick-card__icon {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
    box-shadow: inset 0 -4px 0 var(--orange);
  }

  .calendar-frame {
    width: 100%;
    height: clamp(360px, 42vw, 560px);
    border: 1px solid var(--border);
    border-radius: 4px;
  }

  .calendar-info-row {
    align-items: stretch;
  }

  .calendar-info-row__col {
    display: flex;
  }

  .panel--calendar {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .panel--calendar .calendar-frame {
    flex: 1;
  }

  .stack {
    display: grid;
    gap: 24px;
  }

  .stack--aligned {
    flex: 1;
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .stack--aligned .panel {
    min-height: 0;
  }

  .simple-link {
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
    color: #1a1a1a;
    text-decoration: none;
  }

  .end-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
    padding: 28px;
    border: 1px solid #dce3ee;
    border-radius: 8px;
    background: #e6eaf2;
  }

  .end-link {
    display: block;
    padding: 8px 0;
    border-bottom: 1px solid rgba(50, 50, 123, 0.18);
    color: #1a1a1a;
    text-decoration: none;
  }

  @media (min-width: 1440px) {
    .prototype-a__main {
      grid-template-columns: minmax(0, 1fr);
    }

    .panel--news :deep(.v-list-item-title) {
      max-width: min(72vw, 980px);
    }
  }

  @media (max-width: 960px) {
    .panel {
      padding: 20px;
    }

    .panel--calendar .calendar-frame {
      flex: none;
    }

    .calendar-frame {
      height: 520px;
    }

    .stack--aligned {
      grid-template-rows: auto;
    }

    .end-links {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .panel {
      padding: 16px;
    }

    .panel__heading {
      align-items: center;
      gap: 12px;
    }

    .panel__heading h2 {
      font-size: 1.5rem;
      line-height: 1.25;
    }

    .news-row :deep(.v-list-item__prepend) {
      display: none;
    }

    .news-tag--inline {
      display: inline-flex;
      width: fit-content;
      min-width: 0;
      justify-content: center;
      font-size: 0.875rem;
    }

    .news-row :deep(.v-list-item__append) {
      align-self: center;
    }

    .news-row :deep(.v-list-item__append .v-chip) {
      display: none;
    }

    .news-row :deep(.v-list-item-subtitle) {
      display: none;
    }

    .calendar-frame {
      height: 560px;
    }
  }
</style>
