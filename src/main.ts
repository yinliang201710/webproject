import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'amfe-flexible'
import 'vant/lib/index.css'
import '@vant/touch-emulator'
import App from './App.vue'
import router from './router'
import { Lazyload } from 'vant'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Lazyload,{
  lazyComponent:true
})
app.mount('#app')
