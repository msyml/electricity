import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'

const app = createApp(App)
// 挂载路由
await setupRouter(app)
// 路由就绪后挂载APP
await router.isReady()
app.mount('#app')
