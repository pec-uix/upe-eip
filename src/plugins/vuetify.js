/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        colors: {
          // 品牌主色
          primary: '#32327B',
          'primary-light': '#E6EAF2',
          // 強調色
          accent: '#FF8200',
          'accent-dark': '#CC6800',
          'accent-light': '#FFE8CC',
          secondary: '#FF8200',
          // 頁面背景
          portalBackground: '#F5F7FB',
          portalSurface: '#FFFFFF',
          // 中性色
          border: '#E5E7EB',
          textPrimary: '#1A1A1A',
          textSecondary: '#6B7280',
          // 語意色
          success: '#2E7D32',
          warning: '#ED6C02',
          error: '#D32F2F',
          info: '#0288D1',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
