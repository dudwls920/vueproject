import Vue from 'vue'
import {
  ToastPlugin, ModalPlugin, BootstrapVue, IconsPlugin,
} from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import httpService from '@/service/httpService'
import apiConfig from '@/config/apiConfig'

import ECharts from 'vue-echarts'
import VueApexCharts from 'vue-apexcharts'
import i18n from '@/libs/i18n'
import globalConfig from 'devextreme/core/config'
// import themes from 'devextreme/ui/themes'
import router from './router'
import store from './store'
import App from './App.vue'

// import './assets/devStyle/dx.common.css'
// // import './assets/devStyle/dx.material.shine-scheme.css'
// import './assets/devStyle/dx.material.orange.light.compact.css'
import interceptor from './interceptor'

// Global Components
import './global-components'

// 3rd party plugins
// import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// chart
import 'echarts/lib/chart/pie'

Vue.component('apexchart', VueApexCharts)
Vue.component('v-chart', ECharts)

Vue.prototype.$httpService = httpService
Vue.prototype.$apiConfig = apiConfig

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

// import Dev styles
// require('@/assets/devStyle/dx.common.css')
// require('@/assets/devStyle/dx.material.orange.light.compact.css')
// require('@/assets/devStyle/dx.material.shine-scheme.css')

Vue.config.productionTip = false
globalConfig({
  editorStylingMode: 'filled',
})

// themes.current('shine.light')

new Vue({
  router,
  store,
  interceptor,
  httpService,
  apiConfig,
  i18n,
  render: h => h(App),
}).$mount('#app')
