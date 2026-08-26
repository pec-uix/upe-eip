<script setup>
  import { computed, ref } from 'vue'

  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    prototypeAnnouncements,
  } from '@/data/homePrototypes'

  const selectedCategory = ref('全部')

  const categories = computed(() => [
    '全部',
    ...new Set(prototypeAnnouncements.map(item => item.category)),
  ])

  const filteredAnnouncements = computed(() => {
    if (selectedCategory.value === '全部') return prototypeAnnouncements

    return prototypeAnnouncements.filter(item => item.category === selectedCategory.value)
  })

  const currentPage = ref(1)
  const pageSize = 12

  const totalPages = computed(() => Math.ceil(filteredAnnouncements.value.length / pageSize))

  const pagedAnnouncements = computed(() => {
    const start = (currentPage.value - 1) * pageSize

    return filteredAnnouncements.value.slice(start, start + pageSize)
  })

  function selectCategory (category) {
    selectedCategory.value = category
    currentPage.value = 1
  }

  function formatFullDate (shortDate) {
    const [month, day] = shortDate.split('/')

    return `2026/${month}/${day}`
  }
</script>

<template>
  <v-sheet class="subpage" min-height="100vh">
    <SubpageHeader active="/all-news" />

    <v-container class="news-page py-6 py-md-10" fluid>
      <section class="news-panel">
        <div class="news-heading">
          <h1 class="text-headline-medium font-weight-bold">公布欄</h1>

          <span class="news-heading__count text-body-medium font-weight-bold">
            共 {{ filteredAnnouncements.length }} 則
          </span>
        </div>

        <div id="news-categories" aria-label="公布欄分類" class="category-filter">
          <button
            v-for="category in categories"
            :key="category"
            class="category-filter__button"
            :class="{ 'category-filter__button--active': selectedCategory === category }"
            type="button"
            @click="selectCategory(category)"
          >
            {{ category }}
          </button>
        </div>

        <div class="news-list">
          <a
            v-for="item in pagedAnnouncements"
            :key="item.title"
            class="news-row"
            :href="`/news-detail?notice=${prototypeAnnouncements.indexOf(item) + 1}`"
          >
            <span class="news-tag" :class="{ 'news-tag--top': item.top }">{{ item.category }}</span>

            <span class="news-row__content">
              <span class="news-row__title text-title-medium">
                {{ item.title }}
              </span>
            </span>

            <span class="news-row__aside">
              <span v-if="item.file" class="news-row__file text-body-small">
                附件
              </span>

              <span class="news-row__date text-body-medium text-medium-emphasis">
                {{ formatFullDate(item.date) }}
              </span>
            </span>
          </a>
        </div>

        <div v-if="totalPages > 1" class="news-pagination">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            rounded="circle"
            :total-visible="5"
          />
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

  .news-page {
    background: #f5f7fb;
  }

  .news-panel {
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: #fff;
  }

  .news-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--blue);
    margin-bottom: 16px;
    color: var(--blue);
  }

  .news-heading__count {
    color: #6b7280;
    white-space: nowrap;
  }

  .category-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 8px 0 24px;
  }

  .category-filter__button {
    min-width: 96px;
    padding: 8px 20px;
    border: 1px solid #1a1a1a;
    border-radius: 999px;
    color: #1a1a1a;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    background: #fff;
  }

  .category-filter__button--active {
    border-color: var(--orange);
    color: #fff;
    background: var(--orange);
  }

  .news-list {
    display: grid;
  }

  .news-row {
    display: grid;
    align-items: center;
    grid-template-columns: 132px minmax(0, 1fr) auto;
    gap: 24px;
    min-height: 72px;
    padding: 12px 24px;
    border-bottom: 1px solid var(--border);
    color: inherit;
    text-decoration: none;
  }

  .news-row:nth-child(even) {
    background: #f9fafc;
  }

  .news-row__content {
    display: grid;
    min-width: 0;
    gap: 2px;
  }

  .news-row__title,
  .news-row__date {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .news-row__aside {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    min-width: 132px;
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

  .news-row__file {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    padding: 4px 12px;
    border: 1px solid #1a1a1a;
    border-radius: 999px;
    color: #1a1a1a;
    font-weight: 700;
  }

  .news-pagination {
    display: flex;
    justify-content: flex-end;
    padding-top: 24px;
  }

  @media (max-width: 760px) {
    .news-page {
      padding-right: 16px;
      padding-left: 16px;
    }

    .news-panel {
      padding: 16px;
    }

    .category-filter {
      flex-wrap: nowrap;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 18px;
      -webkit-overflow-scrolling: touch;
    }

    .category-filter__button {
      flex: 0 0 auto;
      min-width: auto;
      padding: 8px 14px;
    }

    .news-row {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 4px 12px;
      padding: 14px 0;
    }

    .news-tag {
      width: auto;
      min-width: 0;
      justify-content: flex-start;
      padding: 0;
      color: var(--blue);
      background: transparent;
      font-size: 0.875rem;
      grid-column: 1;
      grid-row: 1;
    }

    .news-row__content {
      grid-column: 1;
      grid-row: 2;
    }

    .news-row__file {
      display: none;
    }

    .news-row__aside {
      min-width: auto;
      grid-column: 2;
      grid-row: 1;
      align-self: start;
    }
  }
</style>
