<template>
  <div>{{ state.num }}</div>
  <button @click="() => state.num++">按钮</button>
</template>
<script lang="ts" setup>
import { effect, reactive, onUpdated, watch } from 'vue'
const jobQueue = new Set()
const p = Promise.resolve()
let isFlushing = false
const state = reactive({
  num: 1
})
// const fn = () => {}
const flushJob = () => {
  if (isFlushing) {
    return
  }

  isFlushing = true
  // 微任务
  p.then(() => {
    jobQueue.forEach((job) => job())
  }).finally(() => {
    // 结束后充值设置为false
    isFlushing = false
  })
}
watch(
  () => state.num,
  (newval) => {
    console.log('newval', newval)
  }
)
effect(
  () => {
    console.log('num', state.num)
  },
  {
    scheduler(fn) {
      // 每次数据发生变化都往队列中添加副作用函数
      // fn && jobQueue.add(fn)
      // 并尝试刷新job，但是一个微任务只会在事件循环中执行一次，所以哪怕num变化了100次，最后也只会执行一次副作用函数
      // flushJob()
      console.log('scheduler', fn)
    }
  }
)
let count = 100
const interval = setInterval(function () {
  state.num++
  if (state.num > 10) {
    clearInterval(interval)
  }
}, 100)

// while (count--) {
//   state.num++
// }
onUpdated(() => {
  console.log('update')
})
</script>
