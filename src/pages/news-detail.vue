<script setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import SubpageHeader from '@/components/SubpageHeader.vue'
  import {
    prototypeAnnouncements,
  } from '@/data/homePrototypes'

  const route = useRoute()
  const router = useRouter()

  const selectedNoticeIndex = computed(() => {
    const noticeNumber = Number(route.query.notice)

    if (!Number.isInteger(noticeNumber)) return 0

    return Math.min(Math.max(noticeNumber - 1, 0), prototypeAnnouncements.length - 1)
  })

  const selectedNotice = computed(() => prototypeAnnouncements[selectedNoticeIndex.value])

  const selectedNoticeBody = computed(() => {
    const item = selectedNotice.value

    return [
      `${item.meta} 已於 ${item.publishedAt} 發布「${item.title}」。`,
      `本公告分類為「${item.category}」，請同仁依公告時程完成相關作業，若內容涉及跨部門配合，請依所屬單位窗口通知辦理。`,
      item.file
        ? '此公告附有文件，正式版本可於附件區進行 PDF 預覽與列印。'
        : '此公告目前無附件，請以本頁文字內容為主要參考。',
    ]
  })

  function goBack () {
    if (window.history.length > 1) {
      router.back()
      return
    }

    router.push('/all-news')
  }
</script>

<template>
  <v-sheet class="subpage" min-height="100vh">
    <SubpageHeader active="/all-news" />

    <v-container class="news-detail py-8 py-md-12" max-width="1180">
      <div class="detail-actions">
        <button class="detail-action" type="button" @click="goBack">← 所有公布欄</button>
        <a class="detail-action" href="/home">← 首頁</a>
      </div>

      <article class="notice-panel">
        <div class="notice-panel__meta">
          <span class="notice-panel__date text-title-medium font-weight-bold">
            {{ selectedNotice.publishedAt.slice(0, 10).replaceAll('/', '.') }}
          </span>

          <span class="news-tag" :class="{ 'news-tag--top': selectedNotice.top }">
            {{ selectedNotice.category }}
          </span>
        </div>

        <h1 class="notice-panel__title text-display-small font-weight-bold">
          {{ selectedNotice.title }}
        </h1>

        <div class="notice-panel__rule" />

        <div class="notice-panel__body">
          <p
            v-for="paragraph in selectedNoticeBody"
            :key="paragraph"
            class="text-body-large text-medium-emphasis mb-3"
          >
            {{ paragraph }}
          </p>
        </div>

        <div v-if="selectedNotice.file" class="notice-attachment">
          <div class="attachment-row">
            <span class="attachment-row__label text-title-small font-weight-bold">
              相關附件檔案：
            </span>

            <span class="attachment-row__date">{{ selectedNotice.publishedAt.slice(0, 10).replaceAll('/', '.') }}</span>

            <span class="attachment-row__name">{{ selectedNotice.title }}.pdf</span>

            <button aria-label="預覽附件" class="attachment-row__action" type="button">
              預覽
            </button>
          </div>

          <div aria-label="PDF 附件預覽" class="pdf-preview">
            <aside class="pdf-preview__thumbs">
              <span class="pdf-preview__thumb pdf-preview__thumb--active">1</span>
              <span class="pdf-preview__thumb">2</span>
              <span class="pdf-preview__thumb">3</span>
            </aside>

            <section class="pdf-preview__page">
              <div class="pdf-preview__toolbar">
                <span>1 / 3</span>
                <span>80%</span>
                <span>下載</span>
                <span>列印</span>
              </div>

              <div class="pdf-preview__document">
                <div class="pdf-preview__cover">
                  <span class="text-label-small font-weight-bold">{{ selectedNotice.category }}</span>
                  <strong class="text-headline-small font-weight-bold">{{ selectedNotice.title }}</strong>
                  <small>{{ selectedNotice.meta }} · {{ selectedNotice.publishedAt }}</small>
                </div>
              </div>
            </section>
          </div>
        </div>
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

.news-detail {
    display: grid;
    gap: 40px;
  }

  .detail-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
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

  .notice-panel {
    display: grid;
    gap: 24px;
    padding: 0;
    border: 0;
    background: #fff;
  }

  .notice-panel__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  .notice-panel__meta {
    color: #6b7280;
  }

  .notice-panel__date {
    color: #6b7280;
  }

  .notice-panel__title {
    max-width: 960px;
  }

  .notice-panel__rule {
    height: 3px;
    background: var(--orange);
  }

  .notice-panel__body {
    max-width: 980px;
  }

  .news-tag {
    display: inline-flex;
    min-width: 86px;
    justify-content: center;
    padding: 4px 8px;
    border: 1px solid currentColor;
    border-radius: 999px;
    color: var(--orange);
    background: #fff;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .news-tag--top {
    color: #fff;
    background: var(--orange);
  }

  .notice-attachment {
    display: grid;
    gap: 14px;
  }

  .attachment-row {
    display: grid;
    align-items: center;
    grid-template-columns: auto auto minmax(0, 1fr) auto;
    gap: 14px;
    padding: 10px 12px;
    border: 1px solid #d8e2d8;
    border-radius: 8px;
    color: #2f6b38;
    background: #f7fbf7;
  }

  .attachment-row__date {
    color: #6b7280;
  }

  .attachment-row__name {
    min-width: 0;
    overflow: hidden;
    color: #4b5563;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .attachment-row__action {
    padding: 4px 10px;
    border: 1px solid var(--blue);
    border-radius: 4px;
    color: var(--blue);
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    background: #fff;
  }

  .pdf-preview {
    display: grid;
    grid-template-columns: 172px minmax(0, 1fr);
    min-height: 520px;
    overflow: hidden;
    border: 1px solid #333;
    border-radius: 4px;
    background: #262626;
  }

  .pdf-preview__thumbs {
    display: grid;
    align-content: start;
    gap: 14px;
    padding: 18px;
    border-right: 1px solid #4b5563;
    background: #202020;
  }

  .pdf-preview__thumb {
    display: grid;
    width: 92px;
    height: 120px;
    place-items: center;
    border: 2px solid transparent;
    color: #6b7280;
    background: #fff;
    font-weight: 700;
  }

  .pdf-preview__thumb--active {
    border-color: #6aa2ff;
    color: var(--blue);
  }

  .pdf-preview__page {
    display: grid;
    grid-template-rows: auto 1fr;
    min-width: 0;
  }

  .pdf-preview__toolbar {
    display: flex;
    justify-content: flex-end;
    gap: 18px;
    padding: 8px 14px;
    color: #fff;
    font-size: 0.75rem;
    background: #3a3a3a;
  }

  .pdf-preview__document {
    display: grid;
    place-items: center;
    padding: 32px;
  }

  .pdf-preview__cover {
    display: grid;
    width: min(460px, 100%);
    min-height: 620px;
    align-content: center;
    gap: 18px;
    padding: 48px;
    color: #1a1a1a;
    background: linear-gradient(#f8fbff, #fff);
    text-align: center;
  }

  .subpage-footer {
    justify-content: center;
    color: #6b7280;
    font-size: 0.75rem;
  }

  @media (max-width: 760px) {
    .news-detail {
      gap: 28px;
    }

    .notice-panel__title {
      overflow-wrap: anywhere;
    }

    .attachment-row {
      grid-template-columns: 1fr auto;
    }

    .attachment-row__label,
    .attachment-row__name {
      grid-column: 1 / -1;
    }

    .pdf-preview {
      grid-template-columns: 1fr;
      min-height: 420px;
    }

    .pdf-preview__thumbs {
      display: none;
    }

    .pdf-preview__document {
      padding: 20px;
    }

    .pdf-preview__cover {
      min-height: 420px;
      padding: 28px;
    }
  }
</style>
