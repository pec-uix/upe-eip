<script setup>
  import SubpageHeader from '@/components/SubpageHeader.vue'

  const base = import.meta.env.BASE_URL
  import {
    prototypeFinanceReminders,
  } from '@/data/homePrototypes'

  function formatFullDate (shortDate) {
    const [month, day] = shortDate.split('/')

    return `2026/${month}/${day}`
  }
</script>

<template>
  <v-sheet class="subpage" min-height="100vh">
    <SubpageHeader active="/finance-reminders" />

    <v-container class="finance-page py-6 py-md-10" max-width="1180">
      <section class="finance-panel">
        <div class="finance-heading">
          <h1 class="text-headline-medium font-weight-bold">財會相關作業提醒</h1>

          <span class="finance-heading__count text-body-medium font-weight-bold">
            共 {{ prototypeFinanceReminders.length }} 則
          </span>
        </div>

        <div class="finance-list">
          <a
            v-for="(item, index) in prototypeFinanceReminders"
            :key="item.title"
            class="finance-row"
            :href="`${base}finance-detail?reminder=${index + 1}`"
          >
            <span class="finance-row__content">
              <span class="finance-row__title text-title-medium">
                {{ item.title }}
              </span>
            </span>

            <span class="finance-row__date text-body-medium text-medium-emphasis">
              {{ formatFullDate(item.date) }}
            </span>
          </a>
        </div>
      </section>
    </v-container>

  </v-sheet>
</template>

<style scoped>
  .subpage {
    --blue: #32327b;
    --orange: #ff8200;
    --border: #e5e7eb;
    color: #1a1a1a;
    background: #f5f7fb;
  }

  .finance-page {
    display: grid;
    gap: 28px;
    background: #f5f7fb;
  }

  .finance-panel {
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #fff;
  }

  .finance-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--blue);
    margin-bottom: 16px;
    color: var(--blue);
  }

  .finance-heading__count {
    color: #6b7280;
    white-space: nowrap;
  }

  .finance-list {
    display: grid;
  }

  .finance-row {
    display: grid;
    align-items: center;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px;
    min-height: 72px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--border);
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  .finance-row:nth-child(even) {
    background: #f9fafc;
  }

  .finance-row:hover {
    background: #e6eaf2;
  }

  .finance-row__content {
    display: grid;
    min-width: 0;
    gap: 2px;
  }

  .finance-row__title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .subpage-footer {
    justify-content: center;
    border-top: 1px solid var(--border);
    border-bottom: 0;
    color: #6b7280;
    font-size: 0.75rem;
  }

  @media (max-width: 760px) {
    .finance-page {
      padding-right: 16px;
      padding-left: 16px;
    }

    .finance-panel {
      padding: 16px;
    }

    .finance-row {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 4px 12px;
      padding: 14px 0;
    }

    .finance-row__content {
      grid-column: 1;
      grid-row: 1;
    }

    .finance-row__date {
      grid-column: 2;
      grid-row: 1;
      align-self: start;
    }

  }
</style>
