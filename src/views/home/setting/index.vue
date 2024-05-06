<template>
  <div class="settingBox">
    <van-row gutter="20" justify="center" v-if="user">
      <van-col span="24" class="text-center" @click="route.back()">
        <van-image round width="2rem" height="2rem" :src="userNoLoginImage" />
        <p class="register underline">注册/登录</p>
      </van-col>
    </van-row>
    <van-row gutter="20" justify="center">
      <van-col span="10">
        <van-image round width="2rem" height="2rem" :src="userImage" />
      </van-col>
     <van-col span="12">
      <div class="flex justify-between items-center">
          <span class="uerName"> 赵娇娇 </span>
          <van-button round size="small">编辑资料</van-button>
        </div>
     </van-col>
    </van-row>
    <van-row gutter="20" justify="center">
      <van-col span="24">
        
      </van-col>
    </van-row>
  </div>
</template>
<script lang="ts" setup>
import { Col, Row } from 'vant'
import { reactive, toRefs } from 'vue'
import txImage from '@/assets/images/tx.png'
import noLoginImage from '@/assets/images/weidenglu.png'
import { Token } from '@/stores/counter'
import {useRouter} from 'vue-router'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user = Token()
const route=useRouter();
const state = reactive({
  userImage: txImage,
  userNoLoginImage: noLoginImage
})
const { userImage, userNoLoginImage } = toRefs(state)
const edit = () => {}
</script>
<style lang="scss" scoped>
.settingBox {
  background: #1890ff;
  width: 100%;
  height: 100%;
  color: black;
  padding: 2rem;
  .uerName {
    height: 2rem;
    line-height: 2rem;
    padding: 3px;
    display: block;
    font-size: small;
    color: #ffffff;
  }
  .register {
    color: #ffffff;
  }
}
</style>
