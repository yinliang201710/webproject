<template>
  <div class="settingBox">
    <div class="content">
      <van-row gutter="20" justify="center" v-if="user">
        <van-col span="24" class="text-center" @click="route.push('/login')">
          <van-image round width="2rem" height="2rem" :src="userNoLoginImage" />
          <p class="register underline">注册/登录</p>
        </van-col>
      </van-row>
      <van-row gutter="20" justify="center" v-else>
        <van-col class="flex">
          <van-image round width="2rem" height="2rem" :src="userImage" />
          <p class="uerName flex justify-between items-center">
            <span class="pl-[5px] pr-[5px]">赵娇娇</span
            ><van-button round size="small" class="pl-1">编辑资料</van-button>
          </p>
        </van-col>
      </van-row>
      <van-row gutter="20" class="bottom">
        <van-col :span="6" class="p-[15px]">
          <p>10</p>
          <p>头条</p>
        </van-col>
        <van-col :span="6" class="p-[15px]">
          <p>10</p>
          <p>关注</p>
        </van-col>
        <van-col :span="6" class="p-[15px]">
          <p>10</p>
          <p>粉丝</p>
        </van-col>
        <van-col :span="6" class="p-[15px]">
          <p>10</p>
          <p>获赞</p>
        </van-col>
      </van-row>
    </div>
    <div class="footer">
      <van-row gutter="20" justify="center">
        <van-col span="24">
          <van-grid clickable column-num="2">
            <van-grid-item icon="star-o" text="收藏"> </van-grid-item>
            <van-grid-item icon="clock-o" text="历史"> </van-grid-item>
          </van-grid>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Col, Row } from 'vant'
import { reactive, toRefs, computed, onMounted } from 'vue'
import txImage from '@/assets/images/tx.png'
import noLoginImage from '@/assets/images/weidenglu.png'
import { useTokenStore } from '@/stores/counter'
import { useRouter } from 'vue-router'
const route = useRouter()
const state = reactive({
  userImage: txImage,
  userNoLoginImage: noLoginImage,
  border: false
})
const { userImage, userNoLoginImage, border } = toRefs(state)
onMounted(() => {})
const user = computed(() => {
  return useTokenStore().token
})
const edit = () => {}
</script>
<style lang="scss" scoped>
.settingBox {
  background: #1890ff;
  width: 100%;
  height: 100%;
  color: black;
  .content {
    padding: 2rem;
  }
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
  .flex {
    display: flex;
  }
  .bottom {
    p {
      font-size: 12px;
      color: #fff;
    }
  }
}
</style>
