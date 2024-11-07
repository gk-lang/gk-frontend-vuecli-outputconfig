import { createApp } from 'vue'
import App from './App.vue'

import JoinCommonUi from 'jzt-ui'
import 'jzt-ui/theme-chalk/index.css'

// import JoinCommonUi from '../packages/join-common-ui-frontend/packages'
// import '../packages/join-common-ui-frontend/packages/theme-chalk/index.scss'

// 公共模块
import JoinCommonModule from '#/index'
// 公共模块样式
import '#/styles/index.scss'

const app = createApp(App)

app.use(JoinCommonUi)
app.use(JoinCommonModule, {
  replaceComponents: {
    JztGlobalBaseTable: '/jzt-global-base-table/index.vue'
  },
  systemConfig: {
    layoutLogoIcon: 'icon-logo',
    layoutLoginIconClassName: 'icon-logo'
  }
})
app.mount('#app')
