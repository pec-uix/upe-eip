# UI 設計規範

**專案**：統流開發 員工入口網站
**版本**：v1.1
**對應 Design Token**：`design-tokens.json`
**色彩來源**：統流開發官方 CIS 色彩規範（PANTONE 288 C / PANTONE 158 C），並與專案 `src/plugins/vuetify.js` 實際設定值交叉驗證一致

---

## 一、色彩系統

### 1.1 品牌色（Brand Colors）

| Token | 色碼 | 用途 | Do | Don't |
|---|---|---|---|---|
| `color.primary` | `#32327B` | 結構性區塊：Header 背景、主要功能區塊底色、側邊導覽 | 用於大面積、承載品牌識別的區塊 | 不用於一般內文文字（對比度不足時難閱讀） |
| `color.primary-light` | `#E6EAF2` | 淺色底、hover 背景、次要區塊底色 | 用於需要柔和分隔但不搶視覺焦點的區域 | 不單獨用於強調性內容（太淺，不夠醒目） |
| `color.accent` | `#FF8200` | 行動呼籲：按鈕、通知徽章、連結、底部導覽 active 狀態 | 用於使用者需要注意或點擊的元素 | 不用於大面積背景（橘色大面積使用會造成視覺疲勞） |
| `color.accent-dark` | `#CC6800` | hover / pressed 狀態、需要比 accent 更強調的層級（如置頂公告、緊急標籤） | 用於 accent 元素的互動狀態、或需要區分層級時 | 不單獨作為預設按鈕色（保留給互動狀態，維持層次意義） |
| `color.accent-light` | `#FFE8CC` | 淺色卡片底、功能九宮格卡片背景 | 用於功能區塊的淺底色，襯托 accent 圖示 | 不用於文字顏色（對比度不足） |

### 1.2 語意色（Semantic Colors）

| Token | 色碼 | 用途 | Do | Don't |
|---|---|---|---|---|
| `color.success` | `#2E7D32` | 成功狀態、已完成、驗證通過 | 表單送出成功提示、狀態標籤 | 不用於一般按鈕（會被誤認為系統狀態） |
| `color.warning` | `#ED6C02` | 警告、待處理、需注意 | 待簽核提示、逾期提醒 | 不與 `accent` 橘色相鄰使用（顏色太接近，易混淆） |
| `color.error` | `#D32F2F` | 錯誤、失敗、危險操作 | 表單驗證錯誤、刪除確認 | 不用於非錯誤情境的強調（會誤導使用者以為出錯） |
| `color.info` | `#0288D1` | 提示訊息、說明性文字 | 系統公告、輔助說明 | 不用於可點擊元素（易與連結色混淆） |

### 1.3 中性色（Neutral Colors）

| Token | 色碼 | 用途 | Do | Don't |
|---|---|---|---|---|
| `color.background` | `#FFFFFF` | 頁面主要背景、卡片表面（對應專案 `portalSurface`） | 內容區、卡片背景 | — |
| `color.background-secondary` | `#F5F7FB` | 頁面底層背景（對應專案 `portalBackground`） | 整體頁面底色，襯托白色卡片 | 不用於卡片內部（會失去層次對比） |
| `color.background-dark` | `#0A1A3D` | 深色區塊（頁尾、特殊強調區） | 頁尾、Footer、深色主題區塊 | 不用於一般內容區（降低可讀性） |
| `color.text-primary` | `#1A1A1A` | 主要文字（標題、內文） | 所有主要閱讀文字 | 不用於 disabled 狀態文字 |
| `color.text-secondary` | `#6B7280` | 次要文字（說明、輔助資訊） | 時間戳記、說明文字、placeholder | 不用於需要強調的標題 |
| `color.border` | `#E5E7EB` | 分隔線、卡片邊框、表格框線 | 元件邊界、列表分隔 | 不用於文字或圖示顏色 |

---

## 二、間距系統（Spacing）

| Token | 數值 | 用途 |
|---|---|---|
| `spacing.xs` | 4px | 圖示與文字間距、緊密元素間距 |
| `spacing.sm` | 8px | 表單欄位內距、按鈕內距（小） |
| `spacing.md` | 16px | 卡片內距、元件間標準間距（最常用） |
| `spacing.lg` | 24px | 區塊與區塊之間的間距 |
| `spacing.xl` | 32px | 頁面主要區塊（Section）之間的間距 |

**原則**：所有間距一律使用上述 Token，禁止使用未定義的隨機數值（例如 `13px`、`22px`）。若現有畫面需要的間距不在此列表中，優先選擇最接近的既有 Token，而非新增數值。

---

## 三、字級系統（Typography）

| Token | 數值 | 用途 | Do | Don't |
|---|---|---|---|---|
| `font-size.caption` | 12px | 輔助說明、時間戳記、標籤文字 | 次要、非閱讀主體的資訊 | 不用於任何需要主動閱讀的內文 |
| `font-size.body` | 16px | 內文、清單項目、表單標籤 | 一般閱讀文字（預設字級） | — |
| `font-size.subheading` | 18px | 卡片標題、小節標題 | 區塊內的次級標題 | 不用於整頁主標題 |
| `font-size.heading` | 24px | 頁面區塊標題（如「常用功能」） | 每個功能區塊的標題 | 不用於按鈕文字 |
| `font-size.title` | 32px | 頁面主標題（如「行動入口網」） | 每頁僅使用一次，作為頁面識別 | 不重複用於多個標題造成層級混亂 |

---

## 四、圓角系統（Radius）

| Token | 數值 | 用途 |
|---|---|---|
| `radius.sm` | 4px | 輸入框、小型標籤 |
| `radius.md` | 8px | 按鈕、一般卡片 |
| `radius.lg` | 16px | 大型功能卡片（如九宮格功能區塊） |
| `radius.full` | 9999px | 圓形頭像、圓形圖示背景、狀態徽章 |

---

## 五、元件用法範例

### 5.0 多階層次色的使用原則

`accent` 系列提供三個層次（`accent-dark` / `accent` / `accent-light`），參考自類似入口網站案例中「用多階橘色做視覺層次」的手法，用於區分不同重要程度的元素，而非隨意替換使用：

- **`accent-light`**：背景層，用於大面積但需保持輕量的區塊（如卡片底色）
- **`accent`**：主要互動層，用於按鈕、連結、圖示等預設狀態
- **`accent-dark`**：強調 / 互動回饋層，用於 hover、pressed，或需要比一般 accent 更醒目的情境（如緊急公告標籤）

### 5.1 功能卡片（九宮格）
- 背景：`color.accent-light`
- 圖示顏色：`color.accent`
- 文字：`color.text-primary`，字級 `font-size.body`
- 圓角：`radius.lg`
- 內距：`spacing.md`

### 5.2 主要按鈕（CTA）
- 背景：`color.accent`
- 文字：`color.on-accent`（白色）
- 圓角：`radius.md`
- 內距：`spacing.sm`（上下）/ `spacing.md`（左右）

### 5.3 通知 / 公告 Banner
- 背景：`color.accent`（漸層可選）
- 標題文字：`color.on-accent`
- 圓角：`radius.md`

### 5.4 底部導覽列
- 未選中：`color.text-secondary`
- 選中（active）：`color.accent`

### 5.5 頁面底層背景與卡片對比
- 頁面底層：`color.background-secondary`（`#F5F7FB`）
- 卡片 / 內容表面：`color.background`（`#FFFFFF`）
- 用意：讓白色卡片在淺灰底上產生自然層次，不需額外陰影也能區分區塊

---

## 六、待確認事項

以下項目目前為草案值，建議與前端主管 / 設計團隊進一步確認後定案：

1. `success` / `warning` / `error` / `info` 語意色是否需對齊公司其他既有系統
2. 深色模式（Dark Mode）是否為本專案需求範圍（目前規範僅涵蓋亮色模式）
3. 響應式斷點（Breakpoint）尚未定義，建議依 Vuetify 預設斷點（xs/sm/md/lg/xl）採用即可
4. 專案技術版本（Vue 2 + Vuetify 2 vs Vue 3 + Vuetify 3）與簡報標示不一致，建議與前端主管確認以哪個版本為準，因為會影響 Design Token 串接進 Vuetify 主題的實際語法寫法

---

*本文件應與 `design-tokens.json` 搭配使用，任何色彩、間距、字級的異動請同步更新兩份文件，並知會技術端更新 `AGENTS.md` 中的參照說明。*
