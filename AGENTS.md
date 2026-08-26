# 專案規範

## 通用規範
- 遵循現有的程式碼風格與開發模式。
- 使用 npm 執行專案指令。

## 修正後驗證
- 每次修正後都必須執行 `npm run lint`，使用 ESLint 檢查程式碼。
- 不需要執行 production build；除非使用者明確要求，否則不要將 build 作為例行驗證步驟。

## 技術棧
- 框架：Vue 3 + Vite
- 程式語言：JavaScript
- UI 元件庫：Vuetify 4
- 已啟用功能：ESLint、Vuetify MCP、Pinia、File Router

## JavaScript 規範
- 本專案統一使用 JavaScript，不使用 TypeScript。
- JavaScript 原始碼使用 `.js`，ES Module 設定檔使用 `.mjs`。
- Vue 元件使用 `<script setup>`，請勿加入 `lang="ts"`。
- 請勿新增 TypeScript 型別語法、`.ts`／`.mts` 原始碼、`.d.ts` 型別宣告檔、`tsconfig` 或 TypeScript 專用建置流程。

## Vuetify 字體排版
- 本專案使用 Vuetify 4 及其 Material Design 3 字體排版工具類別。請勿使用 `text-h1`～`text-h6`、`text-subtitle-1`、`text-body-1`、`text-caption` 或 `text-overline` 等舊版 Vuetify 3 類別；目前安裝的 Vuetify 版本不會產生這些類別，因此使用後不會生效，也不會顯示錯誤。
- 當 Vuetify 已有符合設計需求的字體排版工具類別時，應優先使用，避免自行定義 `font-size`、`line-height`、`letter-spacing` 與 `font-family`。
- 應依照內容語意與視覺層級選擇字體排版，不要依賴瀏覽器對 `<h1>`～`<h6>` 元素提供的預設樣式。

### Vuetify 3 舊類別與 Vuetify 4 對照表

| Vuetify 3 舊類別 | 建議使用的 Vuetify 4 類別 |
| --- | --- |
| `text-h1` | `text-display-large` |
| `text-h2` | `text-display-medium` |
| `text-h3` | `text-display-small` |
| `text-h4` | `text-headline-large` |
| `text-h5` | `text-headline-medium` |
| `text-h6` | `text-title-large` |
| `text-subtitle-1` | `text-title-medium` |
| `text-subtitle-2` | `text-title-small` |
| `text-body-1` | `text-body-large` |
| `text-body-2` | `text-body-medium` |
| `text-caption` | `text-body-small` |
| `text-overline` | `text-label-small` |

- 此對照表僅作為遷移時的選擇基準，不代表新舊類別在視覺上完全相同。請依照實際內容層級，從 `display-*`、`headline-*`、`title-*`、`body-*` 與 `label-*` 中選擇合適的類別。
- 響應式字體類別應將斷點放在 `text-` 與字體角色之間，例如：`text-headline-large text-sm-display-medium`。
- `font-weight-bold`、`text-medium-emphasis` 等字重與強調工具類別仍然有效，可以與字體排版類別搭配使用。
- 若需要 overline 樣式，請使用 `text-label-small`，並僅在設計需要時搭配 `text-uppercase` 或少量自訂字距。

## Design Token

Design Token 定義於 `design-tokens.json`，設計規範詳見 `UI設計規範.md`。Vuetify theme 色彩統一在 `src/plugins/vuetify.js` 的 `light.colors` 中管理。

### 色彩對照（Token → 實際色碼）

| 用途 | Token / CSS var | 色碼 | Vuetify theme key |
|---|---|---|---|
| 主色（Header、標題、連結） | `--blue` | `#32327B` | `primary` |
| 主色淺底（hover 背景、標籤底色） | — | `#E6EAF2` | `primary-light` |
| 強調色（CTA、active 狀態、附件標記） | `--orange` | `#FF8200` | `accent` |
| 強調色深（hover、置頂公告） | — | `#CC6800` | `accent-dark` |
| 強調色淺（卡片底色） | — | `#FFE8CC` | `accent-light` |
| 頁面底層背景 | — | `#F5F7FB` | `portalBackground` |
| 卡片 / 面板背景 | — | `#FFFFFF` | `portalSurface` |
| 分隔線 / 邊框 | `--border` | `#E5E7EB` | `border` |
| 主要文字 | — | `#1A1A1A` | `textPrimary` |
| 次要文字（日期、說明） | — | `#6B7280` | `textSecondary` |

各原型頁面目前以 CSS variables 形式宣告色彩（例如 `--blue: #32327b`），數值與上表一致。

### 間距原則

使用 `design-tokens.json` 中的 spacing token：`xs=4px`、`sm=8px`、`md=16px`、`lg=24px`、`xl=32px`。禁止使用未定義的隨機數值（如 `13px`、`22px`）。

---

## 確定採用版本：home-a

`src/pages/home-a/index.vue` 為已確認的首頁設計稿件，後續新增功能頁面應參照此版本的元件模式與視覺風格。

---

## 共用元件

### SubpageHeader

**檔案**：`src/components/SubpageHeader.vue`

**Props**：
- `active`（String）：目前頁面的 href，用於 nav 高亮。例如 `/home-a`、`/all-news`。

**引用方式**：
```vue
<script setup>
import SubpageHeader from '@/components/SubpageHeader.vue'
</script>

<template>
  <SubpageHeader active="/home-a" />
</template>
```

**注意事項**：
- 元件本身為 `position: fixed`（高度 72px），並自帶 `.subpage-header-spacer`（同高占位），不需在外層頁面另外補空間。
- 手機（≤860px）：隱藏桌機 nav 與使用者選單，顯示 hamburger；選單開啟後，header 左側改顯示問候列（「您好，陳小明」+ 白色登出按鈕），logo 與站名隱藏。
- 桌機：顯示完整 nav、右側「您好，陳小明 ∧」按鈕，下拉選單只有「登出」。

---

## 頁面骨架（Page Shell）

所有內頁統一使用以下結構：

```vue
<template>
  <v-sheet class="page-name" color="portalBackground" min-height="100vh">
    <v-container class="pa-0" fluid>
      <div class="page-shell">
        <SubpageHeader active="/page-route" />
        <main class="page-main">
          <!-- 頁面內容 -->
        </main>
      </div>
    </v-container>
  </v-sheet>
</template>

<style scoped>
  .page-name {
    --blue: #32327b;
    --orange: #ff8200;
    --border: #e5e7eb;
    color: #1a1a1a;
  }

  .page-shell {
    min-height: 100vh;
    background: #f5f7fb;
  }

  .page-main {
    display: grid;
    gap: 32px;
    padding: clamp(24px, 3vw, 48px);
  }
</style>
```

---

## 元件模式

### Panel（內容卡片）

白色卡片容器，用於各功能區塊。

```html
<section class="panel">
  <div class="panel__heading">
    <h2 class="text-headline-medium font-weight-bold">區塊標題</h2>
    <a href="...">查看全部</a>
  </div>
  <!-- 內容 -->
</section>
```

```css
.panel {
  padding: 24px;
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
  border-bottom: 2px solid #32327b; /* primary */
  margin-bottom: 16px;
}

.panel__heading h2 { color: #32327b; }

.panel__heading a {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  margin-left: auto;
}
```

---

### 公布欄（News List）

使用 `v-list` + `v-list-item`，prepend 放分類標籤，append 放附件 chip 與日期。

```html
<v-list bg-color="transparent" class="pa-0">
  <v-list-item
    v-for="(item, index) in prototypeAnnouncements.slice(0, 5)"
    :key="item.title"
    class="news-row"
    :href="`/news-detail?notice=${index + 1}`"
  >
    <template #prepend>
      <span class="news-tag" :class="{ 'news-tag--top': item.top }">
        {{ item.category }}
      </span>
    </template>

    <v-list-item-title class="text-body-large">{{ item.title }}</v-list-item-title>

    <template #append>
      <v-chip v-if="item.file" class="mr-3" size="small" variant="outlined">附件</v-chip>
      <span class="text-body-small text-medium-emphasis">{{ formatFullDate(item.date) }}</span>
    </template>
  </v-list-item>
</v-list>
```

```css
.news-row { border-bottom: 1px solid var(--border); cursor: pointer; }
.news-row :deep(.v-list-item__prepend) { flex: 0 0 auto; margin-inline-end: 20px; }
.news-row :deep(.v-list-item__append) { flex: 0 0 auto; margin-inline-start: 16px; }
.news-row :deep(.v-list-item-title) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.news-tag {
  display: inline-flex;
  width: 88px;
  min-width: 88px;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
  color: #32327b;
  background: #e6eaf2;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
}
.news-tag--top { color: #fff; background: #32327b; }

/* 手機：隱藏 prepend 標籤，改用 inline 顯示 */
.news-tag--inline { display: none; }
@media (max-width: 600px) {
  .news-row :deep(.v-list-item__prepend) { display: none; }
  .news-tag--inline { display: inline-flex; width: auto; padding: 0; background: transparent; color: #32327b; }
}
```

**日期格式化函式**（在 `<script setup>` 中加入）：
```js
function formatFullDate(shortDate) {
  const [month, day] = shortDate.split('/')
  return `2026/${month}/${day}`
}
```

---

### 財會作業提醒（Finance Row）

標題在左（flex:1）、日期在右（primary 藍色），有 hover 背景效果。

```html
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
```

```css
.finance-list { display: grid; }

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
.finance-row:hover { background: #f9fafc; }

.finance-row__content { display: grid; min-width: 0; }
.finance-row__content strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.finance-row__date { color: #32327b; white-space: nowrap; } /* primary 藍，非橘色 */
```

---

### 快速連結（Quick Links）

使用 `v-card` variant="outlined"，圖示搭配 `@mdi/js` 路徑匯入。

```html
<v-row dense>
  <v-col
    v-for="link in prototypeQuickLinks"
    :key="link.name"
    cols="12" lg="3" md="4" sm="6"
  >
    <v-card class="quick-card" :href="link.href" rounded="lg" variant="outlined">
      <v-icon class="quick-card__icon" :icon="link.icon" size="22" />
      <span class="quick-card__text">
        <span class="text-body-large">{{ link.name }}</span>
      </span>
    </v-card>
  </v-col>
</v-row>
```

```css
.quick-card {
  display: flex;
  min-height: 76px;
  align-items: center;
  gap: 16px;
  padding: 16px;
  color: inherit;
  text-decoration: none;
}
.quick-card:hover { border-color: #32327b; }
.quick-card__icon {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  color: #32327b;
  background: #e6eaf2;
}
.quick-card__text { display: grid; min-width: 0; }
```

---

## 資料來源

原型資料統一放在 `src/data/homePrototypes.js`，各 export 對應用途：

| Export | 用途 |
|---|---|
| `prototypeAnnouncements` | 公布欄公告清單 |
| `prototypeQuickLinks` | 快速連結（8 個主要連結） |
| `prototypeInfoLinks` | 聯絡方式查詢（次要連結） |
| `prototypeKnowledgeLinks` | 知識管理 / 內部系統（次要連結） |
| `prototypeExternalLinks` | 外部網站連結 |
| `prototypeFinanceReminders` | 財會作業提醒清單 |
| `prototypeFinanceReminderDetails` | 財會提醒詳細內容 |
| `calendarMonthUrl` | Google Calendar 月曆 iframe src |
| `calendarAgendaUrl` | Google Calendar 議程 iframe src |

---

## 圖示使用規範

- 一律從 `@mdi/js` 個別匯入路徑，以 `:icon` prop 傳入 `v-icon`。
- 禁止使用字串名稱（如 `icon="mdi-home"`），避免整包 icon font 載入。

```js
import { mdiHome, mdiMenu, mdiClose } from '@mdi/js'
```

```html
<v-icon :icon="mdiHome" size="24" />
```
