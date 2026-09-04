<script setup>
  import { mdiChevronDown, mdiClose, mdiLogout, mdiMenu } from '@mdi/js'
  import { ref, watch } from 'vue'

  import logoUrl from '@/assets/upe-logo.svg'
  import {
    prototypeExternalLinks,
    prototypeInfoLinks,
    prototypeKnowledgeLinks,
    prototypeQuickLinks,
  } from '@/data/homePrototypes'

  defineProps({
    active: {
      default: '',
      type: String,
    },
  })

  const menuOpen = ref(false)
  const userMenuOpen = ref(false)

  const demoUser = { avatar: '陳', dept: '資訊管理部', id: 'A12345', name: '陳小明' }

  const base = import.meta.env.BASE_URL

  watch(menuOpen, open => {
    document.body.style.overflow = open ? 'hidden' : ''
  })

  const navItems = [
    { href: `${base}home`, label: '首頁', route: '/home' },
    { href: `${base}all-news`, label: '公布欄', route: '/all-news' },
    { href: `${base}about-upe`, label: '關於統流開發', route: '/about-upe' },
  ]

  const drawerSections = [
    {
      id: 'quick',
      items: prototypeQuickLinks.map(item => ({ href: item.href, icon: item.icon, label: item.name })),
      label: '快速連結',
    },
    { id: 'contact', items: prototypeInfoLinks, label: '聯絡方式查詢' },
    { id: 'internal', items: prototypeKnowledgeLinks, label: '內部系統連結' },
    { id: 'external', items: prototypeExternalLinks, label: '外部網站連結' },
  ]
</script>

<template>
  <div aria-hidden="true" class="subpage-header-spacer" />

  <header class="subpage-header">
    <!-- 桌機：logo + 站名 / 手機：選單關閉時顯示 -->
    <a
      aria-label="回到首頁"
      class="subpage-brand"
      :class="{ 'subpage-brand--hidden': menuOpen }"
      :href="`${base}home`"
    >
      <img alt="統流開發 Logo" class="subpage-logo" :src="logoUrl">

      <h1 class="subpage-brand-title font-weight-bold">
        統流開發員工入口網站
      </h1>
    </a>

    <!-- 手機：選單開啟時顯示問候列 -->
    <div v-if="menuOpen" class="mobile-greeting">
      <div class="mobile-greeting__left">
        <span class="mobile-greeting__hi">您好，</span>
        <span class="mobile-greeting__name">{{ demoUser.name }}</span>
      </div>

      <a class="mobile-greeting__logout" :href="base">登出</a>
    </div>

    <!-- 桌機導覽 -->
    <nav aria-label="主要導覽" class="subpage-nav">
      <a
        v-for="item in navItems"
        :key="item.href"
        class="subpage-nav-link"
        :class="{ 'subpage-nav-link--active': active === item.route }"
        :href="item.href"
      >
        {{ item.label }}
      </a>
    </nav>

    <!-- 使用者選單（桌機） -->
    <div class="user-menu">
      <button class="user-btn" @click="userMenuOpen = !userMenuOpen">
        <span class="user-greeting">您好，{{ demoUser.name }}</span>

        <v-icon
          class="user-chevron"
          :class="{ 'user-chevron--open': userMenuOpen }"
          :icon="mdiChevronDown"
          size="16"
        />
      </button>

      <div v-if="userMenuOpen" class="user-dropdown">
        <a class="user-dropdown__item" :href="base">
          <v-icon :icon="mdiLogout" size="16" />
          登出
        </a>
      </div>
    </div>

    <!-- Hamburger 按鈕 -->
    <button
      :aria-label="menuOpen ? '關閉選單' : '開啟選單'"
      class="subpage-hamburger"
      :class="{ 'subpage-hamburger--open': menuOpen }"
      type="button"
      @click="menuOpen = !menuOpen"
    >
      <v-icon :icon="menuOpen ? mdiClose : mdiMenu" size="28" />
    </button>

    <!-- 全螢幕選單 -->
    <div v-if="menuOpen" class="subpage-drawer">
      <!-- 主要導覽連結 -->
      <div class="drawer-nav">
        <a
          v-for="item in navItems"
          :key="item.href"
          class="drawer-nav-link"
          :class="{ 'drawer-nav-link--active': active === item.route }"
          :href="item.href"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- 可展開區塊 -->
      <details
        v-for="section in drawerSections"
        :key="section.id"
        class="drawer-section"
      >
        <summary class="drawer-section__summary">
          <span>{{ section.label }}</span>
          <v-icon class="drawer-section__chevron" :icon="mdiChevronDown" size="20" />
        </summary>

        <div class="drawer-section__links">
          <a
            v-for="item in section.items"
            :key="item.label"
            class="drawer-section__link"
            :href="item.href"
            @click="menuOpen = false"
          >
            <v-icon
              v-if="item.icon"
              class="drawer-section__link-icon"
              :icon="item.icon"
              size="18"
            />

            <span v-else class="drawer-section__link-dot" />
            <span>{{ item.label }}</span>
          </a>
        </div>
      </details>
    </div>
  </header>
</template>

<style scoped>
  .subpage-header-spacer {
    height: 88px;
    flex-shrink: 0;
  }

  .subpage-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    min-height: 88px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 0 48px;
    border-bottom: 3px solid #ff8200;
    color: #fff;
    background: #32327b;
  }

  .subpage-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    color: inherit;
    text-decoration: none;
  }

  .subpage-brand-title {
    display: block;
    margin: 0;
    font-size: 1.75rem;
    line-height: 1.2;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .subpage-logo {
    width: 84px;
    height: 64px;
    object-fit: contain;
    flex-shrink: 0;
  }

  /* ─── 桌機 nav ────────────────────────────── */
  .subpage-nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 36px;
    min-width: 0;
    overflow-x: auto;
  }

  .subpage-nav-link {
    display: inline-flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.82);
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
    transition: color 0.15s ease, border-color 0.15s ease;
  }

  .subpage-nav-link:hover {
    color: #fff;
  }

  .subpage-nav-link--active {
    color: #fff;
    border-bottom-color: #ff8200;
  }

  /* ─── Hamburger ──────────────────────────── */
  .subpage-hamburger {
    display: none;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .subpage-hamburger:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .subpage-hamburger--open {
    background: transparent;
  }

  .subpage-hamburger--open:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  /* ─── 全螢幕選單 ─────────────────────────── */
  .subpage-drawer {
    position: fixed;
    top: 88px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    background: #28286a;
    z-index: 99;
  }

  /* 主要導覽 */
  .drawer-nav {
    display: flex;
    flex-direction: column;
  }

  .drawer-nav-link {
    display: flex;
    align-items: center;
    padding: 18px 24px;
    color: rgba(255, 255, 255, 0.88);
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: background 0.15s ease, color 0.15s ease;
  }

  .drawer-nav-link:hover {
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
  }

  .drawer-nav-link--active {
    color: #ff8200;
  }

  /* 展開區塊 */
  .drawer-section {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .drawer-section__summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    color: rgba(255, 255, 255, 0.88);
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
    list-style: none;
    transition: color 0.15s ease;
    user-select: none;
  }

  .drawer-section__summary::-webkit-details-marker {
    display: none;
  }

  .drawer-section__summary:hover {
    color: #fff;
  }

  .drawer-section__chevron {
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  .drawer-section[open] .drawer-section__chevron {
    transform: rotate(180deg);
  }

  .drawer-section__links {
    display: flex;
    flex-direction: column;
    padding-bottom: 8px;
  }

  .drawer-section__link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px 12px 32px;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9375rem;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .drawer-section__link:hover {
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
  }

  .drawer-section__link-icon {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .drawer-section__link-dot {
    display: block;
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);
    margin-left: 6px;
  }

  /* ─── 使用者選單 ─────────────────────────── */
  .user-menu {
    position: relative;
    flex-shrink: 0;
  }

  .user-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border: none;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    cursor: pointer;
    transition: background 0.15s ease;
  }

  .user-btn:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .user-greeting {
    font-size: 0.875rem;
    font-weight: 600;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.9);
  }

  .user-chevron {
    transition: transform 0.2s ease;
    opacity: 0.7;
  }

  .user-chevron--open {
    transform: rotate(180deg);
  }

  .user-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    width: 220px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    z-index: 200;
  }

  .user-dropdown__info {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
  }

  .user-dropdown__avatar {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border-radius: 50%;
    background: #ff8200;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    flex-shrink: 0;
  }

  .user-dropdown__name {
    font-size: 0.9375rem;
    font-weight: 700;
    color: #1a1a1a;
  }

  .user-dropdown__meta {
    font-size: 0.75rem;
    color: #8a94a6;
    margin-top: 2px;
  }

  .user-dropdown__divider {
    height: 1px;
    background: #e5e7eb;
    margin: 0 16px;
  }

  .user-dropdown__item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    font-size: 0.875rem;
    color: #344054;
    text-decoration: none;
    transition: background 0.15s ease;
  }

  .user-dropdown__item:hover {
    background: #f4f6fb;
    color: #32327b;
  }

  /* ─── 手機問候列 ─────────────────────────── */
  .mobile-greeting {
    display: none;
  }

  /* ─── 響應式 ─────────────────────────────── */
  @media (max-width: 860px) {
    .subpage-header {
      padding: 0 24px;
    }

    .subpage-nav {
      display: none;
    }

    .user-menu {
      display: none;
    }

    .subpage-hamburger {
      display: flex;
    }

    /* 選單開啟：隱藏 logo + 站名 */
    .subpage-brand--hidden {
      display: none;
    }

    /* 選單開啟：顯示問候列 */
    .mobile-greeting {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    .mobile-greeting__left {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .mobile-greeting__hi {
      font-size: 0.9375rem;
      font-weight: 500;
      color: #fff;
      white-space: nowrap;
    }

    .mobile-greeting__avatar {
      display: grid;
      width: 28px;
      height: 28px;
      place-items: center;
      border-radius: 50%;
      background: #ff8200;
      font-size: 0.75rem;
      font-weight: 700;
      color: #fff;
      flex-shrink: 0;
    }

    .mobile-greeting__name {
      font-size: 0.9375rem;
      font-weight: 700;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .mobile-greeting__logout {
      display: flex;
      align-items: center;
      padding: 6px 16px;
      border-radius: 8px;
      background: #fff;
      color: #32327b;
      font-size: 0.875rem;
      font-weight: 700;
      text-decoration: none;
      white-space: nowrap;
      flex-shrink: 0;
      transition: background 0.15s ease;
    }

    .mobile-greeting__logout:hover {
      background: rgba(255, 255, 255, 0.88);
    }
  }

  @media (max-width: 480px) {
    .subpage-header-spacer {
      height: 60px;
    }

    .subpage-header {
      min-height: 60px;
      padding: 0 16px;
    }

    .subpage-logo {
      width: 36px;
      height: 36px;
    }

    .subpage-brand-title {
      font-size: 1rem;
      letter-spacing: 0.04em;
    }

    .subpage-drawer {
      top: 60px;
    }
  }
</style>
