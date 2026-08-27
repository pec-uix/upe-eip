<script setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import financeVoucherGuideUrl from '@/assets/finance-voucher-guide.png'
  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    prototypeFinanceReminderDetails,
    prototypeFinanceReminders,
  } from '@/data/homePrototypes'

  const route = useRoute()
  const router = useRouter()

  const base = import.meta.env.BASE_URL

  const selectedReminderIndex = computed(() => {
    const reminderNumber = Number(route.query.reminder)

    if (!Number.isInteger(reminderNumber)) return 0

    return Math.min(Math.max(reminderNumber - 1, 0), prototypeFinanceReminders.length - 1)
  })

  const selectedReminder = computed(() => prototypeFinanceReminders[selectedReminderIndex.value])

  const selectedReminderDetail = computed(() => prototypeFinanceReminderDetails[selectedReminderIndex.value])

  const selectedReminderImage = computed(() => selectedReminderIndex.value === 0 ? financeVoucherGuideUrl : '')

  const selectedReminderFullDate = computed(() => {
    const [month, day] = selectedReminder.value.date.split('/')

    return `2026 年 ${Number(month)} 月 ${Number(day)} 日`
  })

  function goBack () {
    if (window.history.length > 1) {
      router.back()
      return
    }

    router.push('/finance-reminders')
  }
</script>

<template>
  <v-sheet class="subpage" min-height="100vh">
    <SubpageHeader active="/finance-reminders" />

    <v-container class="finance-detail py-8 py-md-12" max-width="1180">
      <div class="detail-actions">
        <a class="detail-action" :href="`${base}home`">← 首頁</a>
        <button class="detail-action" type="button" @click="goBack">← 所有財會提醒</button>
      </div>

      <article class="detail-panel">
        <div class="detail-panel__meta">
          <span class="text-title-medium text-medium-emphasis">{{ selectedReminderFullDate }}</span>
        </div>

        <h1 class="detail-panel__title text-display-small font-weight-bold">
          {{ selectedReminder.title }}
        </h1>

        <div class="detail-panel__rule" />

        <section class="reminder-callout">
          <p class="text-body-large font-weight-bold">
            {{ selectedReminderDetail.body }}
          </p>
        </section>

        <section class="reminder-preview">
          <div class="reminder-preview__document">
            <img
              v-if="selectedReminderImage"
              alt="請款注意事項與憑證檢附方式"
              class="reminder-preview__image"
              :src="selectedReminderImage"
            >

            <template v-else>
              <h2 class="text-headline-small font-weight-bold">{{ selectedReminderDetail.documentTitle }}</h2>
              <p class="text-body-medium">{{ selectedReminderDetail.documentSubtitle }}</p>

              <div class="reminder-table">
                <div class="reminder-table__head">憑證種類</div>
                <div class="reminder-table__head">處理方式</div>

                <template
                  v-for="row in selectedReminderDetail.rows"
                  :key="row.type"
                >
                  <div class="reminder-table__type">{{ row.type }}</div>
                  <div>{{ row.detail }}</div>
                </template>
              </div>
            </template>
          </div>
        </section>
      </article>

    </v-container>
  </v-sheet>
</template>

<style scoped>
  .subpage {
    --blue: #32327b;
    --orange: #ff8200;
    --border: #e5e7eb;
    color: #1a1a1a;
    background: #fff;
  }

  .finance-detail,
  .detail-panel {
    display: grid;
    gap: 32px;
  }

  .detail-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  .detail-action {
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    padding: 8px 20px;
    border: 1px solid var(--blue);
    border-radius: 999px;
    color: var(--blue);
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    background: #fff;
    text-decoration: none;
  }

  .detail-panel__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  .detail-panel__title {
    max-width: 960px;
  }

  .detail-panel__rule {
    height: 3px;
    background: var(--orange);
  }

  .reminder-callout {
    padding: 32px;
  }

  .reminder-callout p {
    margin: 0;
    line-height: 1.7;
  }

  .reminder-preview {
    width: min(980px, 100%);
    overflow: hidden;
    margin-left: auto;
    background: #fff;
  }

  .reminder-preview__document {
    display: grid;
    gap: 16px;
    padding: 28px;
  }

  .reminder-preview__document h2,
  .reminder-preview__document p {
    margin: 0;
  }

  .reminder-preview__image {
    display: block;
    width: 100%;
    height: auto;
    border: 1px solid var(--border);
  }

  .reminder-table {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    border: 1px solid #b8c9bf;
    line-height: 1.65;
  }

  .reminder-table > div {
    padding: 14px 16px;
    border-right: 1px solid #b8c9bf;
    border-bottom: 1px solid #b8c9bf;
  }

  .reminder-table__head,
  .reminder-table__type {
    color: #fff;
    font-weight: 700;
    background: #438a6b;
  }

  .reminder-table__head {
    text-align: center;
  }

  .subpage-footer {
    justify-content: center;
    color: #6b7280;
    font-size: 0.75rem;
  }

  @media (max-width: 760px) {
    .reminder-callout {
      grid-template-columns: 1fr;
      padding: 20px;
    }

    .reminder-preview {
      max-width: 100%;
      margin-left: 0;
    }

    .reminder-table {
      grid-template-columns: 1fr;
    }

    .reminder-table__head {
      display: none;
    }
  }
</style>
