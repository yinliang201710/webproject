<template>
  <van-nav-bar title="登录">
    <template v-slot:left>
      <van-icon name="cross" @click="router.back()" />
    </template>
  </van-nav-bar>
  <van-form @submit="onSubmit">
    <van-field
      v-model="form.userName"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="rules.userName"
    />
    <van-field
      v-model="form.passWord"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="rules.passWord"
    />
    <div style="margin: 16px">
      <van-button block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>
<script lang="ts" setup>
import { reactive, toRefs, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { logins } from '@/api/index'
import { useTokenStore } from '@/stores/counter'
import { setCookies } from '@/utils/cookie'
const router = useRouter()
const route = useRoute()
const userInfo = useTokenStore()
const state = reactive({
  form: {
    userName: '',
    passWord: ''
  }
})
const rules = ref({
  userName: [{ required: true, message: '请填写用户名' }],
  passWord: [
    { required: true, message: '请填写密码' },
    { pattern: /^\d{6}$/, message: '密码格式错误' }
  ]
})
const { form } = toRefs(state)
const onSubmit = async () => {
  setCookies('userInfo', JSON.stringify(userInfo))
  router.push({
    name: 'userInfo',
    query: {
      // ...route.query,
      // ...userInfo
    }
  })
  // const params = {
  //   ...state.form
  // }
  // const res = await logins(params)
  // console.log(res)
}
</script>
<style lang="scss" scoped></style>
