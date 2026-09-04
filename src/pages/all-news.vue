<script setup>
  import { computed, ref, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    announcementCategoryOptions,
    getAnnouncementCategoryDescription,
    getAnnouncementCategoryStyle,
    prototypeAnnouncements,
  } from '@/data/homePrototypes'

  const route = useRoute()
  const router = useRouter()

  const selectedCategory = ref('全部')

  const categories = computed(() => [
    { key: '全部', label: '全部' },
    ...announcementCategoryOptions,
  ])

  const selectedCategoryOption = computed(() => {
    return categories.value.find(category => category.key === selectedCategory.value)
  })

  const filteredAnnouncements = computed(() => {
    if (selectedCategory.value === '全部') return prototypeAnnouncements

    return prototypeAnnouncements.filter(item => item.categoryKey === selectedCategoryOption.value?.key)
  })

  const currentPage = ref(1)
  const pageSize = 12

  const totalPages = computed(() => Math.ceil(filteredAnnouncements.value.length / pageSize))

  const pagedAnnouncements = computed(() => {
    const start = (currentPage.value - 1) * pageSize

    return filteredAnnouncements.value.slice(start, start + pageSize)
  })

  watch(
    [categories, () => route.query.category],
    ([categoryOptions, categoryQuery]) => {
      const matchedCategory = categoryOptions.find(category => {
        return category.key === categoryQuery || category.label === categoryQuery
      })

      selectedCategory.value = matchedCategory?.key ?? '全部'
      currentPage.value = 1
    },
    { immediate: true },
  )

  async function selectCategory (category) {
    selectedCategory.value = category.key
    currentPage.value = 1

    await router.replace({
      query: category.key === '全部' ? {} : { category: category.key },
    })
  }

  function getCategoryFilterStyle (category) {
    if (category.key === '全部') return {}

    return getAnnouncementCategoryStyle(category.key)
  }

  function getCategoryFilterDescription (category) {
    if (category.key === '全部') return '顯示全部公告。'

    return getAnnouncementCategoryDescription(category.key)
  }

  function formatFullDate (shortDate) {
    const [month, day] = shortDate.split('/')

    return `2026/${month}/${day}`
  }
</script>

<template>
  <v-sheet class="subpage" min-height="100vh">
    <SubpageHeader active="/all-news" />

    <v-container class="news-page py-6 py-md-10" max-width="1180">
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
            :key="category.key"
            class="category-filter__button"
            :class="{ 'category-filter__button--active': selectedCategory === category.key }"
            :style="getCategoryFilterStyle(category)"
            :title="getCategoryFilterDescription(category)"
            type="button"
            @click="selectCategory(category)"
          >
            {{ category.label }}
          </button>
        </div>

        <div class="news-list">
          <RouterLink
            v-for="item in pagedAnnouncements"
            :key="item.title"
            class="news-row"
            :to="{ path: '/news-detail', query: { notice: prototypeAnnouncements.indexOf(item) + 1 } }"
          >
            <span class="news-tag" :style="getAnnouncementCategoryStyle(item.categoryKey)">
              {{ item.category }}
            </span>

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
          </RouterLink>
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
    gap: 8px;
    padding: 8px 0 24px;
  }

  .category-filter__button {
    min-width: 88px;
    padding: 4px 8px;
    border: 0;
    border-radius: 4px;
    color: var(--blue);
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    background: #fff;
    transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
  }

  .category-filter__button:hover {
    box-shadow: 0 6px 14px rgba(50, 50, 123, 0.1);
    transform: translateY(-1px);
  }

  .category-filter__button--active {
    box-shadow: inset 0 0 0 2px currentColor, 0 6px 14px rgba(50, 50, 123, 0.1);
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

  .news-row:hover {
    background: #e6eaf2;
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

  .news-row__title {
    font-size: 1.25rem;
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
    font-size: 0.9375rem;
    font-weight: 700;
    white-space: nowrap;
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
      width: fit-content;
      min-width: 0;
      justify-content: center;
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
