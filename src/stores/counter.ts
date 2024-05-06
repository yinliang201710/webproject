import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
export const Apptore = defineStore('app', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const appid = ref('datafactory')
  return { count, doubleCount, increment, appid }
})
export const Token=defineStore('token', () => {
  const token = ref(0)
  function updateToken(token) {
    token.value=token;
  }
  return { token, updateToken }
})
