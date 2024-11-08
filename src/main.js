import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// สร้าง Pinia และใช้ plugin piniaPersist
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia) // ใช้ Pinia ในแอป
app.use(router)

app.mount('#app')
