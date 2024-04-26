<template>{{ app.appid }}</template>
<script lang="ts" setup>
import { Apptore } from '@/stores/counter'
const app = Apptore()
</script>
