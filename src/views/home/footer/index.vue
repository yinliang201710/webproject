<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" replace to="/home/userInfo" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="search" replace to="/home/search" icon="search">查找</van-tabbar-item>
    <van-tabbar-item name="friends" replace to="/home/friends" icon="friends-o"
      >朋友圈</van-tabbar-item
    >
    <van-tabbar-item name="setting" replace to="/home/setting" icon="setting-o">{{
      token ? '已登录' : ''
    }}</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts" setup>
import { reactive, toRefs, computed } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useTokenStore } from '@/stores/counter'
const state = reactive({
  active: 'home'
})
const token = computed(() => {
  return useTokenStore()?.token || ''
})
const { active } = toRefs(state)
</script>
