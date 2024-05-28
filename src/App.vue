<script setup lang="ts">
import { KeepAlive } from 'vue'
</script>
<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </Transition>
  </router-view>
</template>

<style lang="scss" scoped></style>
