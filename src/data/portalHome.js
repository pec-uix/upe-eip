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

export const calendarEmbedUrl = ''

export const navItems = [
  { href: '#home', label: '首頁' },
  { href: '#announcements', label: '最新消息' },
  { href: '#', label: '關於統流開發' },
  { href: '#', label: '財會相關作業提醒' },
]

export const announcementCategories = [
  '全部',
  '園區動態',
  '企業消息',
  '建設合作',
  '招募資訊',
]

export const announcements = [
  {
    category: '園區動態',
    date: '2026/08/21',
    title: '新市園區公共區域維護時程公告',
  },
  {
    category: '企業消息',
    date: '2026/08/18',
    title: '統流員工入口網站 Prototype 首頁資訊彙整',
  },
  {
    category: '建設合作',
    date: '2026/08/14',
    title: '物流園區合作廠商進場作業提醒',
  },
  {
    category: '招募資訊',
    date: '2026/08/09',
    title: '營運管理與行政支援職缺內部推薦說明',
  },
  {
    category: '園區動態',
    date: '2026/08/05',
    title: '辦公區訪客動線與臨停區調整通知',
  },
]

export const quickLinks = [
  {
    href: '#',
    icon: mdiDomain,
    name: '統一企業員工入口網',
  },
  {
    href: '#',
    icon: mdiAccountGroupOutline,
    name: '統流員工自助服務',
  },
  {
    href: '#',
    icon: mdiShoppingOutline,
    name: '統流 MRO 請採購系統',
  },
  {
    href: '#',
    icon: mdiOfficeBuildingCogOutline,
    name: '營運管理系統（新市園區）',
  },
  {
    href: '#',
    icon: mdiFileDocumentOutline,
    name: '電子簽呈系統',
  },
  {
    href: '#',
    icon: mdiFormSelect,
    name: '電子聯絡單系統',
  },
  {
    href: '#',
    icon: mdiFoodOutline,
    name: '訂餐系統（統流）',
  },
  {
    href: '#',
    icon: mdiStoreCogOutline,
    name: '庶務用品網',
  },
]

export const companyInfoLinks = [
  {
    href: '#',
    icon: mdiPhoneOutline,
    label: '統流開發電話分機查詢',
  },
  {
    href: '#',
    icon: mdiEmailSearchOutline,
    label: '統一企業電子郵件查詢',
  },
  {
    href: '#',
    icon: mdiBriefcaseOutline,
    label: '統一企業電話分機查詢',
  },
]

export const knowledgeLinks = [
  {
    href: '#',
    icon: mdiCloudOutline,
    label: '共有雲端空間',
  },
  {
    href: '#',
    icon: mdiBellOutline,
    label: '通報公告區',
  },
  {
    href: '#',
    icon: mdiClipboardTextOutline,
    label: '制式表單 / 教學文件下載',
  },
]
