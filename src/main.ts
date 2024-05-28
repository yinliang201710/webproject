import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'amfe-flexible'
import 'vant/lib/index.css'
import '@vant/touch-emulator'
import App from './App.vue'
import router from './router'
import { Lazyload } from 'vant'
import gojs from 'gojs'
const app = createApp(App, { go: gojs })
app.use(createPinia())
app.use(router)
app.use(Lazyload, {
  lazyComponent: true
})
// 自定义节流指令
app.directive('throttle', (el, binding) => {
  let throttleTime = binding.value // 节流时间
  if (!throttleTime) {
    // 用户若不设置节流时间，则默认2s
    throttleTime = 2000
  }
  let cbFun: NodeJS.Timeout | null
  el.addEventListener(
    'click',
    (event: { stopImmediatePropagation: () => any }) => {
      if (!cbFun) {
        // 第一次执行
        cbFun = setTimeout(() => {
          cbFun = null
        }, throttleTime)
      } else {
        event && event.stopImmediatePropagation()
      }
    },
    true
  )
}) //
app.mount('#app')
