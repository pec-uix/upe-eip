<script setup>
  import {
    mdiAccountOutline,
    mdiArrowLeft,
    mdiArrowRight,
    mdiCheckCircleOutline,
    mdiEyeOffOutline,
    mdiEyeOutline,
    mdiHelpCircleOutline,
    mdiLockOutline,
    mdiShieldLockOutline,
    mdiViewDashboardOutline,
  } from '@mdi/js'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const form = ref(null)
  const account = ref('')
  const password = ref('')
  const rememberAccount = ref(false)
  const showPassword = ref(false)
  const loading = ref(false)
  const showSuccess = ref(false)

  const required = label => value => Boolean(value?.trim()) || `請輸入${label}`

  async function handleSubmit () {
    const result = await form.value?.validate()
    if (!result?.valid) return

    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 800))
    loading.value = false
    showSuccess.value = true
    setTimeout(() => router.push('/home-a'), 1200)
  }
</script>

<template>
  <v-sheet color="#F5F7FB" min-height="100vh">
    <v-container class="d-flex flex-column fill-height px-4 py-5 px-sm-8 py-sm-7" fluid>
      <header class="d-flex align-center justify-space-between w-100 mb-6">
        <div class="d-flex align-center ga-3">
          <v-avatar color="#32327B" rounded="lg" size="42">
            <v-icon :icon="mdiViewDashboardOutline" size="23" />
          </v-avatar>

          <div>
            <div class="text-title-medium font-weight-bold text-grey-darken-4">UPE Portal</div>
            <div class="text-body-small text-medium-emphasis">Enterprise Workspace</div>
          </div>
        </div>

        <v-btn
          class="text-none"
          color="grey-darken-1"
          :prepend-icon="mdiArrowLeft"
          rounded="lg"
          text="查看第一版"
          to="/"
          variant="text"
        />
      </header>

      <div class="d-flex align-center justify-center flex-grow-1 w-100">
        <v-card class="w-100" elevation="10" max-width="1120" rounded="xl">
          <v-row no-gutters>
            <v-col class="d-md-none" cols="12">
              <v-sheet class="pa-6 text-white" color="#28286a">
                <div class="d-flex align-center ga-3">
                  <v-avatar color="white" size="42" variant="tonal">
                    <v-icon :icon="mdiShieldLockOutline" />
                  </v-avatar>

                  <div>
                    <div class="text-title-large font-weight-bold">安全登入企業工作台</div>
                    <div class="text-body-medium portal-text-light">一個帳號，連結所有工作服務</div>
                  </div>
                </div>
              </v-sheet>
            </v-col>

            <v-col class="pa-6 pa-sm-10 pa-lg-14" cols="12" md="7">
              <v-chip
                class="mb-5 font-weight-medium"
                color="#32327B"
                label
                size="small"
                variant="tonal"
              >
                員工入口
              </v-chip>

              <div class="mb-8">
                <h1 class="text-headline-large text-sm-display-medium font-weight-bold text-grey-darken-4 mb-3">
                  登入您的工作空間
                </h1>

                <p class="text-body-medium text-sm-body-large text-medium-emphasis mb-0">
                  輸入企業帳號，繼續處理今天的重要工作。
                </p>
              </div>

              <v-alert
                class="mb-7"
                color="#32327B"
                density="comfortable"
                :icon="mdiShieldLockOutline"
                rounded="lg"
                text="公司同仁請使用員工編號登入；合作夥伴請使用註冊信箱。"
                variant="tonal"
              />

              <v-form ref="form" validate-on="submit lazy" @submit.prevent="handleSubmit">
                <div class="text-title-small font-weight-bold mb-2">企業帳號</div>

                <v-text-field
                  v-model="account"
                  autocomplete="username"
                  class="mb-4"
                  color="#32327B"
                  density="comfortable"
                  placeholder="員工編號或電子郵件"
                  :prepend-inner-icon="mdiAccountOutline"
                  :rules="[required('企業帳號')]"
                  variant="outlined"
                />

                <div class="d-flex align-center justify-space-between mb-2">
                  <div class="text-title-small font-weight-bold">密碼</div>

                  <v-btn
                    class="text-none px-1"
                    color="#32327B"
                    height="auto"
                    size="small"
                    text="忘記密碼？"
                    variant="text"
                  />
                </div>

                <v-text-field
                  v-model="password"
                  autocomplete="current-password"
                  color="#32327B"
                  density="comfortable"
                  placeholder="請輸入密碼"
                  :prepend-inner-icon="mdiLockOutline"
                  :rules="[required('密碼')]"
                  :type="showPassword ? 'text' : 'password'"
                  variant="outlined"
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

                <div class="d-flex align-center justify-space-between flex-wrap ga-2 mb-5">
                  <v-checkbox
                    v-model="rememberAccount"
                    color="#32327B"
                    density="compact"
                    hide-details
                    label="記住我的帳號"
                  />

                  <div class="d-flex align-center ga-1 text-body-small text-medium-emphasis">
                    <v-icon :icon="mdiHelpCircleOutline" size="16" />
                    登入遇到問題？分機 1234
                  </div>
                </div>

                <v-btn
                  block
                  class="text-none"
                  color="#FF8200"
                  elevation="6"
                  :loading="loading"
                  rounded="lg"
                  size="x-large"
                  type="submit"
                >
                  安全登入
                  <v-icon class="ml-2" :icon="mdiArrowRight" size="20" />
                </v-btn>
              </v-form>

              <v-divider class="my-7" />

              <p class="text-center text-body-small text-medium-emphasis mb-0">
                登入即代表您同意遵守公司的資訊安全政策與使用規範
              </p>
            </v-col>

            <v-col class="d-none d-md-flex" cols="12" md="5">
              <v-sheet
                class="d-flex flex-column justify-space-between pa-10 pa-lg-12 text-white w-100"
                color="#1f1f54"
                min-height="650"
              >
                <div>
                  <v-avatar class="mb-8" color="white" size="58" variant="tonal">
                    <v-icon :icon="mdiViewDashboardOutline" size="30" />
                  </v-avatar>

                  <p class="text-label-small portal-text-muted mb-3">ONE DIGITAL WORKPLACE</p>

                  <h2 class="text-headline-large font-weight-bold mb-5">
                    專注工作，<br>其餘交給平台。
                  </h2>

                  <p class="text-body-large portal-text-dim mb-9">
                    集中管理待辦、簽核、公告與團隊資源，讓每個工作日都更有節奏。
                  </p>

                  <v-list bg-color="transparent" class="pa-0" density="compact">
                    <v-list-item
                      v-for="item in ['即時掌握待辦與簽核', '快速連結常用企業系統', '跨裝置同步工作進度']"
                      :key="item"
                      class="px-0 mb-2"
                      :prepend-icon="mdiCheckCircleOutline"
                      :title="item"
                    />
                  </v-list>
                </div>

                <div>
                  <v-divider class="mb-6 border-opacity-25" />

                  <div class="d-flex align-center justify-space-between text-body-small portal-text-muted">
                    <span>UPE Information Center</span>

                    <v-chip color="#FF8200" size="x-small" variant="tonal">
                      系統正常
                    </v-chip>
                  </div>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </div>

      <footer class="d-flex justify-center align-center ga-4 w-100 mt-6 text-body-small text-medium-emphasis">
        <span>© 2026 UPE Corporation</span>
        <span>·</span>
        <span>v2.4.0</span>
      </footer>
    </v-container>

    <v-snackbar v-model="showSuccess" color="#32327B" location="top" timeout="3000">
      登入成功，正在載入您的工作空間。
    </v-snackbar>
  </v-sheet>
</template>

<style scoped>
  .portal-text-light {
    color: rgba(200, 200, 240, 0.85);
  }

  .portal-text-muted {
    color: rgba(180, 190, 230, 0.75);
  }

  .portal-text-dim {
    color: rgba(190, 195, 235, 0.8);
  }
</style>
