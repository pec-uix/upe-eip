<script setup>
  import { mdiArrowRight, mdiEyeOffOutline, mdiEyeOutline, mdiLockOutline } from '@mdi/js'
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import logoUrl from '@/assets/upe-logo.svg'

  const router = useRouter()
  const account = ref('A12345')
  const password = ref('demo1234')
  const rememberAccount = ref(true)
  const showPassword = ref(false)
  const isSubmitting = ref(false)
  const submitted = ref(false)
  const showSuccess = ref(false)

  const accountError = computed(() => {
    if (!submitted.value) return ''
    return account.value.trim() ? '' : '請輸入員工編號或電子郵件'
  })

  const passwordError = computed(() => {
    if (!submitted.value) return ''
    return password.value ? '' : '請輸入密碼'
  })

  async function handleLogin () {
    submitted.value = true
    if (accountError.value || passwordError.value) return
    isSubmitting.value = true
    await new Promise(resolve => setTimeout(resolve, 800))
    isSubmitting.value = false
    showSuccess.value = true
    setTimeout(() => router.push('/home'), 1200)
  }
</script>

<template>
  <div class="login-page">

    <!-- ── 左欄：品牌面板（桌機）── -->
    <aside class="brand-panel">
      <div class="bg-orb bg-orb--orange" />
      <div class="bg-orb bg-orb--violet" />
      <div class="bg-grid" />

      <div class="brand-inner">
        <div class="brand-logo-wrap">
          <img alt="統流開發" class="brand-logo" :src="logoUrl">
        </div>

        <div class="brand-text">
          <h1 class="brand-name">統流開發<br>入口網站</h1>
          <p class="brand-tagline">Enterprise Information Portal</p>
        </div>

        <div class="brand-accent" />
      </div>
    </aside>

    <!-- ── 右欄：行動 header + 表單 ── -->
    <main class="form-panel">

      <!-- 行動版 header（桌機隱藏） -->
      <div class="mobile-brand">
        <img alt="統流開發" class="mobile-logo" :src="logoUrl">
        <span class="mobile-name">統流開發入口網站</span>
      </div>

      <div class="form-card">
        <div class="form-heading">
          <h2 class="form-title">歡迎回來</h2>
          <p class="form-subtitle">請使用您的企業帳號登入工作平台</p>
        </div>

        <v-form class="login-form" @submit.prevent="handleLogin">
          <div class="field-group">
            <label class="field-label" for="account">員工編號或電子郵件</label>

            <v-text-field
              id="account"
              v-model="account"
              autocomplete="username"
              bg-color="#f8fafc"
              class="login-field"
              density="comfortable"
              :error-messages="accountError"
              hide-details="auto"
              placeholder="例如：A12345"
              variant="outlined"
              @update:model-value="submitted = false"
            />
          </div>

          <div class="field-group">
            <div class="field-label-row">
              <label class="field-label" for="password">密碼</label>
              <a class="forgot-link" href="#" @click.prevent>忘記密碼？</a>
            </div>

            <v-text-field
              id="password"
              v-model="password"
              autocomplete="current-password"
              bg-color="#f8fafc"
              class="login-field"
              density="comfortable"
              :error-messages="passwordError"
              hide-details="auto"
              placeholder="請輸入密碼"
              :prepend-inner-icon="mdiLockOutline"
              :type="showPassword ? 'text' : 'password'"
              variant="outlined"
              @update:model-value="submitted = false"
            >
              <template #append-inner>
                <v-btn
                  :aria-label="showPassword ? '隱藏密碼' : '顯示密碼'"
                  density="compact"
                  :icon="showPassword ? mdiEyeOffOutline : mdiEyeOutline"
                  size="small"
                  variant="text"
                  @click="showPassword = !showPassword"
                />
              </template>
            </v-text-field>
          </div>

          <v-checkbox
            v-model="rememberAccount"
            class="remember-checkbox"
            color="primary"
            density="compact"
            hide-details
            label="記住我的帳號"
          />

          <v-btn
            block
            class="login-btn"
            color="#FF8200"
            elevation="0"
            :loading="isSubmitting"
            size="large"
            type="submit"
          >
            登入
            <v-icon :icon="mdiArrowRight" size="19" />
          </v-btn>
        </v-form>

        <footer class="form-footer">
          © 2026 統流開發股份有限公司
        </footer>
      </div>
    </main>

    <v-snackbar v-model="showSuccess" color="#FF8200" location="top" timeout="3000">
      <span style="color: #fff; font-weight: 700; display: block; text-align: center;">登入成功！</span>
    </v-snackbar>
  </div>
</template>

<style scoped>
  :global(*) { box-sizing: border-box; }
  :global(html, body) { margin: 0; min-height: 100%; }
  :global(body) {
    font-family: Roboto, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
  }

  /* ── 頁面結構：桌機兩欄 ── */
  .login-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100svh;
  }

  /* ══════════════════════════════
     左欄：品牌面板
  ══════════════════════════════ */
  .brand-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: clamp(48px, 6vw, 80px) clamp(40px, 5vw, 72px);
    background: linear-gradient(148deg, #28286a 0%, #32327b 55%, #3a3a90 100%);
    color: #fff;
    overflow: hidden;
    isolation: isolate;
  }

  /* 氛圍光球 */
  .bg-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
  }

  .bg-orb--orange {
    width: 640px;
    height: 640px;
    bottom: -240px;
    right: -220px;
    background: radial-gradient(circle, rgba(255, 130, 0, 0.28) 0%, transparent 62%);
  }

  .bg-orb--violet {
    width: 420px;
    height: 420px;
    top: -140px;
    left: -140px;
    background: radial-gradient(circle, rgba(100, 80, 220, 0.2) 0%, transparent 62%);
  }

  /* 細網格紋理 */
  .bg-grid {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%);
  }

  /* 品牌內容 */
  .brand-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .brand-logo-wrap {
    display: grid;
    place-items: center;
  }

  .brand-logo {
    width: 160px;
    height: 160px;
    object-fit: contain;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.25));
  }

  .brand-text {
    display: grid;
    gap: 10px;
  }

  .brand-name {
    margin: 0;
    font-size: clamp(2.4rem, 3.8vw, 3.4rem);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #fff;
  }

  .brand-tagline {
    margin: 0;
    font-size: 0.8125rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.38);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  /* 橘色細條 */
  .brand-accent {
    width: 44px;
    height: 3px;
    border-radius: 999px;
    background: #FF8200;
    box-shadow: 0 0 12px rgba(255, 130, 0, 0.5);
  }

  /* ══════════════════════════════
     右欄：表單
  ══════════════════════════════ */
  .form-panel {
    display: flex;
    flex-direction: column;
    background: #f4f6fb;
  }

  .mobile-brand {
    display: none;
  }

  .form-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    width: min(460px, 100%);
    margin: 0 auto;
    padding: clamp(48px, 6vw, 80px) clamp(24px, 4vw, 48px);
  }

  .form-heading {
    margin-bottom: 36px;
  }

  .form-title {
    margin: 0 0 10px;
    font-size: clamp(1.75rem, 2.8vw, 2.25rem);
    font-weight: 700;
    color: #0d0d3d;
    letter-spacing: -0.025em;
  }

  .form-subtitle {
    margin: 0;
    font-size: 0.9375rem;
    color: #8a94a6;
  }

  /* 表單 */
  .login-form {
    display: grid;
    gap: 20px;
  }

  .field-group {
    display: grid;
    gap: 8px;
  }

  .field-label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #344054;
  }

  .field-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .forgot-link {
    font-size: 0.75rem;
    font-weight: 600;
    color: #32327B;
    text-decoration: none;
    transition: color 0.15s;
  }

  .forgot-link:hover {
    color: #FF8200;
  }

  .login-field :deep(.v-field) {
    min-height: 50px;
    border-radius: 10px;
    font-size: 0.9375rem;
    transition: box-shadow 180ms ease;
  }

  .login-field :deep(.v-field__outline) {
    --v-field-border-opacity: 0.6;
    color: #d0d5dd;
  }

  .login-field :deep(.v-field--focused) {
    background: #fff !important;
    box-shadow: 0 0 0 4px rgba(50, 50, 123, 0.1);
  }

  .login-field :deep(.v-field--focused .v-field__outline) {
    color: #32327B;
  }

  .login-field :deep(input::placeholder) {
    color: #adb4c0;
    opacity: 1;
  }

  .remember-checkbox {
    margin-top: -8px;
  }

  .remember-checkbox :deep(.v-label) {
    font-size: 0.8125rem;
    color: #667085;
    opacity: 1;
  }

  .login-btn {
    height: 52px !important;
    border-radius: 10px !important;
    font-size: 0.9375rem !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em;
    box-shadow: 0 8px 24px rgba(255, 130, 0, 0.28) !important;
  }

  .login-btn :deep(.v-btn__content) {
    gap: 10px;
  }

  .form-footer {
    margin-top: 40px;
    text-align: center;
    color: #b0b8c8;
    font-size: 0.75rem;
  }

  /* ── RWD：行動版 ── */
  @media (max-width: 860px) {
    .login-page {
      grid-template-columns: 1fr;
    }

    .brand-panel {
      display: none;
    }

    .form-panel {
      min-height: 100svh;
      background: #32327b;
    }

    .mobile-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
    }

    .mobile-logo {
      width: 42px;
      height: 42px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .mobile-name {
      font-size: 1.125rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.04em;
    }

    .form-card {
      width: 100%;
      max-width: none;
      margin-top: 0;
      border-radius: 24px 24px 0 0;
      background: #fff;
      padding: 36px 24px 40px;
      justify-content: flex-start;
      flex: 1;
    }
  }

  @media (max-width: 480px) {
    .form-card {
      padding: 28px 20px 32px;
    }
  }

  @media (max-height: 700px) and (min-width: 861px) {
    .brand-inner {
      gap: 18px;
    }

    .brand-logo {
      width: 85px;
      height: 85px;
    }

    .form-heading {
      margin-bottom: 24px;
    }

    .login-form {
      gap: 16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * { transition-duration: 0.01ms !important; }
  }
</style>
