import {
  mdiAccountGroupOutline,
  mdiBellOutline,
  mdiBriefcaseOutline,
  mdiClipboardTextOutline,
  mdiCloudOutline,
  mdiDomain,
  mdiEmailSearchOutline,
  mdiFileDocumentOutline,
  mdiFoodOutline,
  mdiFormSelect,
  mdiOfficeBuildingCogOutline,
  mdiPhoneOutline,
  mdiShoppingOutline,
  mdiStoreCogOutline,
} from '@mdi/js'

export const prototypeDate = '2026 年 8 月 25 日'

export const prototypeUser = {
  department: '管理部',
  extension: '2088',
  lastLogin: '2026/08/25 08:42',
  name: '陳品瑄',
  role: '一般同仁',
}

export const prototypeSystemStatus = {
  label: '系統正常',
  lastUpdated: '資料更新 08:45',
  noticeCount: 3,
}

export const prototypeNavItems = [
  { href: '#prototype-top', label: '首頁' },
  { href: '/about-upe', label: '關於統流開發' },
  { href: '/all-news', label: '查看更多消息' },
]

export const prototypeHomeSections = [
  { href: '#announcements', label: '公布欄' },
  { href: '#quick-links', label: '快速連結' },
  { href: '#calendar', label: '公司日曆' },
  { href: '#company-info', label: '公司常用資訊' },
  { href: '#knowledge', label: '知識管理' },
]

export const prototypeSubpages = [
  {
    description: '公司簡介、公司願景與經營理念。',
    href: '/about-upe',
    items: ['公司簡介', '公司願景與經營理念'],
    label: '一張頁面',
    title: '關於統流開發',
  },
  {
    description: '所有公告消息集中檢索，附件支援 PDF 預覽與列印情境。',
    href: '/all-news',
    items: ['所有公告消息', '附件預覽 / 列印'],
    label: '詳 P2',
    title: '查看更多消息',
  },
]

export const prototypeAnnouncements = [
  {
    categoryKey: '系統通知',
    category: '人事行政',
    date: '08/28',
    file: false,
    meta: '資訊部',
    publishedAt: '2026/08/28 08:30',
    tag: '人事行政',
    title: '差勤與資訊系統維護期間服務短暫中斷通知',
  },
  {
    categoryKey: '制度政策',
    category: '公司公告',
    date: '08/27',
    file: true,
    meta: '管理部',
    publishedAt: '2026/08/27 13:20',
    tag: '公司公告',
    title: '公司規章與工作準則修訂重點公告',
  },
  {
    categoryKey: '其他',
    category: '公司公告',
    date: '08/26',
    file: false,
    meta: '總務部',
    publishedAt: '2026/08/26 10:10',
    tag: '公司公告',
    title: '辦公區臨時停電與設備檢修時段提醒',
  },
  {
    categoryKey: '人事公告',
    category: '人事行政',
    date: '08/25',
    file: true,
    meta: '人力資源部',
    publishedAt: '2026/08/25 09:00',
    tag: '置頂',
    title: '2026 年下半年員工健康檢查實施辦法與預約時段公告',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '08/24',
    file: false,
    meta: '資訊部',
    publishedAt: '2026/08/24 16:30',
    tag: '人事行政',
    title: '員工入口網站正式上線，原分散系統連結將於 9 月底停用',
  },
  {
    categoryKey: '財會提醒',
    category: '財會作業',
    date: '08/22',
    file: true,
    meta: '財會部',
    publishedAt: '2026/08/22 11:20',
    tag: '財會作業',
    title: '8 月月結帳務單據送簽截止日提醒（08/28 17:00 前）',
  },
  {
    categoryKey: '活動訊息',
    category: '園區動態',
    date: '08/21',
    file: true,
    meta: '園區管理部',
    publishedAt: '2026/08/21 14:00',
    tag: '園區動態',
    title: '新市園區公共區域清潔與設施檢修作業動線調整',
  },
  {
    categoryKey: '人事公告',
    category: '人事行政',
    date: '08/19',
    file: false,
    meta: '人力資源部',
    publishedAt: '2026/08/19 10:15',
    tag: '人事行政',
    title: '差勤系統補登作業說明會報名開放（線上場次）',
  },
  {
    categoryKey: '活動訊息',
    category: '園區動態',
    date: '08/15',
    file: true,
    meta: '工安管理室',
    publishedAt: '2026/08/15 13:40',
    tag: '園區動態',
    title: '合作廠商進場施工安全規範更新版本發布',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '08/12',
    file: false,
    meta: '稽核室',
    publishedAt: '2026/08/12 15:10',
    tag: '人事行政',
    title: '第三季內部稽核作業說明會會議通知',
  },
  {
    categoryKey: '財會提醒',
    category: '財會作業',
    date: '08/09',
    file: true,
    meta: '財會部',
    publishedAt: '2026/08/09 09:30',
    tag: '財會作業',
    title: '零用金請款憑證黏貼與核銷附件格式提醒',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '08/06',
    file: false,
    meta: '總務部',
    publishedAt: '2026/08/06 16:00',
    tag: '人事行政',
    title: '辦公區空調保養作業時段與臨時動線說明',
  },
  {
    categoryKey: '活動訊息',
    category: '園區動態',
    date: '08/03',
    file: false,
    meta: '園區管理部',
    publishedAt: '2026/08/03 11:05',
    tag: '園區動態',
    title: '新市園區停車區標線更新與車位調整通知',
  },
  {
    categoryKey: '人事公告',
    category: '人事行政',
    date: '07/30',
    file: true,
    meta: '人力資源部',
    publishedAt: '2026/07/30 14:20',
    tag: '人事行政',
    title: '年度教育訓練課程報名期程與注意事項公告',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '07/28',
    file: false,
    meta: '資訊部',
    publishedAt: '2026/07/28 10:10',
    tag: '人事行政',
    title: '內部系統密碼定期更新與多因子驗證提醒',
  },
  {
    categoryKey: '財會提醒',
    category: '財會作業',
    date: '07/25',
    file: true,
    meta: '財會部',
    publishedAt: '2026/07/25 17:00',
    tag: '財會作業',
    title: '廠商請款資料補件截止日與付款批次說明',
  },
  {
    categoryKey: '活動訊息',
    category: '園區動態',
    date: '07/22',
    file: false,
    meta: '工安管理室',
    publishedAt: '2026/07/22 13:15',
    tag: '園區動態',
    title: '倉儲區消防設備巡檢作業與配合事項通知',
  },
  {
    categoryKey: '人事公告',
    category: '人事行政',
    date: '07/18',
    file: false,
    meta: '人力資源部',
    publishedAt: '2026/07/18 09:45',
    tag: '人事行政',
    title: '員工福利平台資料更新與眷屬資料確認提醒',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '07/15',
    file: true,
    meta: '管理部',
    publishedAt: '2026/07/15 15:35',
    tag: '人事行政',
    title: '訪客換證與會議室借用流程調整公告',
  },
  {
    categoryKey: '財會提醒',
    category: '財會作業',
    date: '07/12',
    file: false,
    meta: '財會部',
    publishedAt: '2026/07/12 11:25',
    tag: '財會作業',
    title: '差旅費申請常見退件原因與填寫範例提醒',
  },
  {
    categoryKey: '活動訊息',
    category: '園區動態',
    date: '07/08',
    file: true,
    meta: '園區管理部',
    publishedAt: '2026/07/08 16:40',
    tag: '園區動態',
    title: '園區公共區域清潔消毒作業排程公告',
  },
  {
    categoryKey: '人事公告',
    category: '人事行政',
    date: '07/05',
    file: false,
    meta: '人力資源部',
    publishedAt: '2026/07/05 10:00',
    tag: '人事行政',
    title: '新人到職資料繳交與系統帳號開通作業說明',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '07/02',
    file: false,
    meta: '總經理室',
    publishedAt: '2026/07/02 09:00',
    tag: '人事行政',
    title: '第二季經營會議重點摘要與後續追蹤事項',
  },
  {
    categoryKey: '財會提醒',
    category: '財會作業',
    date: '06/29',
    file: true,
    meta: '財會部',
    publishedAt: '2026/06/29 14:50',
    tag: '財會作業',
    title: '上半年預算執行回報格式與資料繳交期限',
  },
  {
    categoryKey: '活動訊息',
    category: '園區動態',
    date: '06/25',
    file: false,
    meta: '園區管理部',
    publishedAt: '2026/06/25 12:10',
    tag: '園區動態',
    title: '貨車進出動線尖峰時段分流試辦通知',
  },
  {
    categoryKey: '人事公告',
    category: '人事行政',
    date: '06/21',
    file: true,
    meta: '人力資源部',
    publishedAt: '2026/06/21 15:20',
    tag: '人事行政',
    title: '端午節連假出勤與請假登錄注意事項',
  },
  {
    categoryKey: '集團公告',
    category: '人事行政',
    date: '06/18',
    file: false,
    meta: '資訊部',
    publishedAt: '2026/06/18 10:30',
    tag: '人事行政',
    title: '網路設備維護期間部分系統短暫中斷通知',
  },
]

export const announcementCategoryStyles = {
  系統通知: {
    backgroundColor: '#F5F3FF',
    color: '#6D28D9',
  },
  制度政策: {
    backgroundColor: '#FFF1F2',
    color: '#BE123C',
  },
  人事公告: {
    backgroundColor: '#FFF4E8',
    color: '#D96B00',
  },
  活動訊息: {
    backgroundColor: '#ECFDF8',
    color: '#087F6E',
  },
  集團公告: {
    backgroundColor: '#EEEEF8',
    color: '#32327B',
  },
  其他: {
    backgroundColor: '#EFF6FF',
    color: '#1D4ED8',
  },
  財會提醒: {
    backgroundColor: '#FFFBEB',
    color: '#B45309',
  },
  人事行政: {
    backgroundColor: '#FFF4E8',
    color: '#D96B00',
  },
  公司公告: {
    backgroundColor: '#EFF6FF',
    color: '#1D4ED8',
  },
  園區動態: {
    backgroundColor: '#ECFDF8',
    color: '#087F6E',
  },
  財會作業: {
    backgroundColor: '#FFFBEB',
    color: '#B45309',
  },
}

export const announcementCategoryOptions = [
  { key: '系統通知', label: '人事行政' },
  { key: '制度政策', label: '公司公告' },
  { key: '人事公告', label: '人事行政' },
  { key: '活動訊息', label: '園區動態' },
  { key: '集團公告', label: '人事行政' },
  { key: '其他', label: '公司公告' },
  { key: '財會提醒', label: '財會作業' },
]

export const announcementCategoryDescriptions = {
  系統通知: '主機或資訊系統相關之重大告知事項。',
  制度政策: '公司規範、工作準則及其他制度之異動及重要提醒。',
  人事公告: '人力資源管理相關訊息通知，如招聘、人事異動、福利待遇、培訓安排等相關內容。',
  活動訊息: '與公司相關之重大事件、課程、日程及優惠資訊分享。',
  集團公告: '統一企業或相關企業所發佈之重要公文。',
  其他: '無法歸屬於上述類別或難以區分之類型，如公司停電、停水、鄰近交通管制、消防演習等訊息公告。',
  財會提醒: '與財會作業之相關提醒。',
  人事行政: '人力資源管理相關訊息通知，如招聘、人事異動、福利待遇、培訓安排等相關內容。',
  公司公告: '公司規範、工作準則、制度異動及一般公告事項。',
  園區動態: '與公司園區相關之重大事件、課程、日程及優惠資訊分享。',
  財會作業: '與財會作業之相關提醒。',
}

export function getAnnouncementCategoryStyle (category) {
  return announcementCategoryStyles[category] ?? announcementCategoryStyles.公司公告
}

export function getAnnouncementCategoryDescription (category) {
  return announcementCategoryDescriptions[category] ?? announcementCategoryDescriptions.公司公告
}

export const prototypeAbout = {
  intro: [
    '鑒於國內消費型態改變，網路購物市場迅速擴張，物流配送需求因而擴大。統一企業集團流通事業之零售點持續於全台各地擴增，物流運送體系的升級實為刻不容緩。',
    '統一集團設立專業物流事業開發公司－統流開發股份有限公司，負責全台大型複合式物流中心之開發籌備、投資興建與營運管理，並導入必要之自動化倉儲設備。',
  ],
  philosophy: '誠信務實、安全便捷、效率專業、創新求變',
  vision: '統流為專業物流地產開發運營公司，放眼亞洲市場並聚焦於智慧物流整合服務，成為「新零售之最強後盾」。',
}

export const prototypePrinciples = [
  { label: '誠信務實', text: '以誠待人、腳踏實地完成職責。' },
  { label: '安全便捷', text: '工地管理、園區設計與交通規劃皆以安全為首要原則。' },
  { label: '效率專業', text: '透過專業團隊、技術與智慧設備，提供進駐業者有效率的服務。' },
  { label: '創新求變', text: '不拘泥於現狀，勇於開創新局，為公司創造更多價值。' },
]

export const prototypeChips = [
  '全部',
  '人事行政',
  '公司公告',
  '園區動態',
  '財會作業',
]

export const prototypeQuickLinks = [
  { description: '企業集團入口', href: '#quick-links', icon: mdiDomain, name: '統一企業員工入口網', status: 'SSO' },
  { description: '差勤與個人資料', href: '#quick-links', icon: mdiAccountGroupOutline, name: '統流員工自助服務', status: '常用' },
  { description: '請購與採購申請', href: '#quick-links', icon: mdiShoppingOutline, name: '統流 MRO 請採購系統', status: '常用' },
  { description: '新市園區營運資料', href: '#quick-links', icon: mdiOfficeBuildingCogOutline, name: '營運管理系統（新市園區）', status: '園區' },
  { description: '簽核文件追蹤', href: '#quick-links', icon: mdiFileDocumentOutline, name: '電子簽呈系統', status: '簽核' },
  { description: '跨部門聯絡單', href: '#quick-links', icon: mdiFormSelect, name: '電子聯絡單系統', status: '簽核' },
  { description: '每日午餐預訂', href: '#quick-links', icon: mdiFoodOutline, name: '訂餐系統（統流）', status: '今日' },
  { description: '辦公用品申請', href: '#quick-links', icon: mdiStoreCogOutline, name: '庶務用品網', status: '行政' },
]

export const prototypeInfoLinks = [
  { href: '#company-info', icon: mdiPhoneOutline, label: '統流開發電話分機查詢' },
  { href: '#company-info', icon: mdiEmailSearchOutline, label: '統一企業電子郵件查詢' },
  { href: '#company-info', icon: mdiBriefcaseOutline, label: '統一企業電話分機查詢' },
]

export const prototypeKnowledgeLinks = [
  { href: '#knowledge', icon: mdiCloudOutline, label: '共有雲端空間' },
  { href: '#knowledge', icon: mdiBellOutline, label: '通報公告區' },
  { href: '#knowledge', icon: mdiClipboardTextOutline, label: '制式表單 / 教學文件下載' },
  { href: '#knowledge', icon: mdiFormSelect, label: '收發系統連結' },
]

export const prototypeExternalLinks = [
  { href: '#external-links', label: '台灣科學園區科學工業同業公會' },
  { href: '#external-links', label: '中華民國物流協會' },
  { href: '#external-links', label: '台灣全球商貿運籌發展協會' },
]

export const prototypeFinanceReminders = [
  {
    date: '08/28',
    owner: '財會部',
    status: '提醒',
    title: '8 月月結帳務單據送簽截止日提醒',
  },
  {
    date: '09/03',
    owner: '財會部',
    status: '提醒',
    title: '零用金與費用核銷憑證補件期限',
  },
  {
    date: '09/10',
    owner: '財會部',
    status: '預告',
    title: '供應商請款文件格式更新說明',
  },
]

export const prototypeFinanceReminderDetails = [
  {
    body: '為確保請款流程順利進行，請於送出資料前再次確認檢附方式是否正確。如有疑問，請先參閱相關作業說明或與承辦窗口聯繫。',
    button: '憑證檢附方式',
    documentSubtitle: '各項憑證收據處理方式',
    documentTitle: '請款注意事項',
    rows: [
      {
        detail: '感熱紙請 copy 一份，影本黏貼於驗收單上；正本黏貼於 B5 一半紙上，並檢附電子發票證明聯及交易明細作為報帳依據。',
        type: '電子發票',
      },
      {
        detail: '實體票券請 copy 一份，正本及影本均需附上；若為線上購票，請檢附可辨識搭乘資訊之文件。',
        type: '高鐵車票',
      },
      {
        detail: '請 copy 一份，正本黏貼於驗收單上，影本附於驗收單後，避免遮蔽日期、統編與金額。',
        type: '長條式發票',
      },
      {
        detail: '收銀聯黏於驗收單上，正本依格式貼妥於 B5 一半紙上。',
        type: '收銀機統一發票',
      },
    ],
  },
  {
    body: '零用金與費用核銷若需補件，請依補件通知內容完成資料補齊，逾期可能影響本月核銷批次。',
    button: '補件資料說明',
    documentSubtitle: '補件內容與處理方式',
    documentTitle: '補件注意事項',
    rows: [
      { detail: '請補上清楚可辨識之發票影本或電子發票證明聯。', type: '發票影本' },
      { detail: '請提供刷卡簽單、轉帳紀錄或其他付款依據。', type: '付款證明' },
      { detail: '請於備註欄補充用途、對象與費用歸屬。', type: '申請說明' },
    ],
  },
  {
    body: '供應商請款文件格式將依新版本辦理，請於送件前確認報價單、驗收資料與請款資訊一致。',
    button: '請款格式範例',
    documentSubtitle: '供應商請款文件格式',
    documentTitle: '請款格式說明',
    rows: [
      { detail: '請使用新版請款單格式，並確認供應商名稱與統編。', type: '請款單' },
      { detail: '請附上驗收紀錄、交付清單或承辦單位確認資料。', type: '驗收文件' },
      { detail: '請確認銀行帳號、戶名與發票資訊一致。', type: '付款資訊' },
    ],
  },
]

export const prototypeAgenda = [
  { date: '08/25', time: '全天', title: '員工健檢預約開放' },
  { date: '08/26', time: '10:00', title: '管理部週會' },
  { date: '08/28', time: '17:00', title: '8 月月結帳務送簽截止' },
  { date: '09/02', time: '09:30', title: '新人到職說明會' },
]

export const calendarMonthUrl = getCalendarEmbedUrl('MONTH')
export const calendarAgendaUrl = getCalendarEmbedUrl('AGENDA')

function getCalendarEmbedUrl (mode) {
  const params = new URLSearchParams({
    bgcolor: '#FFFFFF',
    color: '#32327B',
    ctz: 'Asia/Taipei',
    mode,
    showCalendars: '0',
    showNav: '1',
    showPrint: '0',
    showTabs: '0',
    showTitle: '0',
    showTz: '0',
    src: 'zh-tw.taiwan#holiday@group.v.calendar.google.com',
    wkst: '1',
  })

  return `https://calendar.google.com/calendar/embed?${params.toString()}`
}
